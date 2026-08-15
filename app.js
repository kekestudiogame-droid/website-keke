const SUPABASE_URL ="https://ksqrimmecpriyepsuclc.supabase.co/rest/v1/"
const SUPABASE_KEY = "sb_publishable_xvPQL9oniSRwZoqmSc5W4A_NS9ldWIL"

const supabaseHeaders = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json"
};

const SUPABASE_JOBS_URL = `${SUPABASE_URL}jobs`;
const jobs = [
  {title:"Frontend Developer", company:"Teknologi Nusantara", location:"Jakarta", category:"Teknologi", type:"Full-time", salary:"Rp 8–12 juta / bulan", initials:"TN"},
  {title:"Backend Developer", company:"Solusi Digital Indonesia", location:"Bandung", category:"Teknologi", type:"Full-time", salary:"Rp 9–14 juta / bulan", initials:"SD"},
  {title:"Digital Marketing Specialist", company:"Maju Bersama", location:"Jakarta", category:"Marketing", type:"Full-time", salary:"Rp 6–9 juta / bulan", initials:"MB"},
  {title:"Staff Administrasi", company:"Prima Nusantara", location:"Surabaya", category:"Administrasi", type:"Full-time", salary:"Rp 4–6 juta / bulan", initials:"PN"},
  {title:"UI/UX Designer", company:"Karya Digital", location:"Remote", category:"Desain", type:"Remote", salary:"Rp 7–10 juta / bulan", initials:"KD"},
  {title:"Social Media Specialist", company:"Ruang Kreatif", location:"Yogyakarta", category:"Marketing", type:"Full-time", salary:"Rp 5–8 juta / bulan", initials:"RK"}
];

const jobsGrid = document.querySelector("#jobsGrid");
const emptyState = document.querySelector("#emptyState");
const jobCount = document.querySelector("#jobCount");
const categoryFilter = document.querySelector("#categoryFilter");
const keyword = document.querySelector("#keyword");
const locationInput = document.querySelector("#location");

function renderJobs(list = jobs){
  jobsGrid.innerHTML = "";
  jobCount.textContent = list.length;
  emptyState.classList.toggle("hidden", list.length !== 0);
  list.forEach((job, i) => {
    const card = document.createElement("article");
    card.className = "job-card";
    card.innerHTML = `
      <div class="job-top">
        <div class="company-logo">${job.initials}</div>
        <span class="pill">${job.type}</span>
      </div>
      <h3>${job.title}</h3>
      <div class="company">${job.company}</div>
      <div class="job-meta"><span>📍 ${job.location}</span><span>▣ ${job.category}</span></div>
      <div class="salary">${job.salary}</div>
      <div class="job-actions">
        <button data-details="${i}">Lihat detail</button>
        <button data-apply="${i}">Lamar →</button>
      </div>`;
    jobsGrid.appendChild(card);
  });
}

function filterJobs(){
  const q = keyword.value.trim().toLowerCase();
  const loc = locationInput.value.trim().toLowerCase();
  const cat = categoryFilter.value;
  const filtered = jobs.filter(j =>
    (cat === "all" || j.category === cat) &&
    (!q || `${j.title} ${j.company} ${j.category}`.toLowerCase().includes(q)) &&
    (!loc || j.location.toLowerCase().includes(loc) || (loc === "indonesia" && j.location === "Remote"))
  );
  renderJobs(filtered);
  document.querySelector("#jobs").scrollIntoView({behavior:"smooth"});
}

document.querySelector("#searchForm").addEventListener("submit", e => { e.preventDefault(); filterJobs(); });
categoryFilter.addEventListener("change", filterJobs);
document.querySelectorAll(".quick-tags button").forEach(btn => btn.addEventListener("click", () => {
  keyword.value = btn.dataset.keyword; filterJobs();
}));

jobsGrid.addEventListener("click", e => {
  const details = e.target.closest("[data-details]");
  const apply = e.target.closest("[data-apply]");
  const idx = Number((details || apply)?.dataset[details ? "details" : "apply"]);
  if (!Number.isInteger(idx)) return;
  const job = jobs[idx];
  if (apply) {
    openModal("Lamaran", `Kamu memilih ${job.title} di ${job.company}. Fitur pengiriman lamaran akan diaktifkan setelah backend dan akun pengguna terhubung.`);
  } else {
    openModal(job.title, `${job.company} · ${job.location}\n\nKategori: ${job.category}\nTipe: ${job.type}\nGaji: ${job.salary}\n\nIni adalah data demo untuk prototype Cari Kerjaku ID.`);
  }
});

const modal = document.querySelector("#authModal");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
const authForm = document.querySelector("#authForm");
let isRegister = false;

function openModal(title, text){
  modalTitle.textContent = title;
  modalText.textContent = text;
  authForm.classList.toggle("hidden", title !== "Masuk" && title !== "Daftar");
  document.querySelector(".switch-auth").classList.toggle("hidden", title !== "Masuk" && title !== "Daftar");
  modal.classList.remove("hidden");
}
document.querySelector("#loginBtn").addEventListener("click", () => {
  isRegister = false; modalTitle.textContent = "Masuk"; modalText.textContent = "Prototype akun. Backend akan dihubungkan pada tahap berikutnya.";
  authForm.classList.remove("hidden"); document.querySelector(".switch-auth").classList.remove("hidden"); modal.classList.remove("hidden");
});
document.querySelector("#registerBtn").addEventListener("click", () => {
  isRegister = true; modalTitle.textContent = "Daftar"; modalText.textContent = "Prototype pendaftaran. Backend akan dihubungkan pada tahap berikutnya.";
  authForm.classList.remove("hidden"); document.querySelector(".switch-auth").classList.remove("hidden"); modal.classList.remove("hidden");
});
document.querySelector("#switchAuth").addEventListener("click", () => {
  isRegister = !isRegister;
  modalTitle.textContent = isRegister ? "Daftar" : "Masuk";
  modalText.textContent = isRegister ? "Prototype pendaftaran. Backend akan dihubungkan pada tahap berikutnya." : "Prototype akun. Backend akan dihubungkan pada tahap berikutnya.";
  document.querySelector("#switchAuth").textContent = isRegister ? "Masuk" : "Daftar";
});
document.querySelector("#closeModal").addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => { if(e.target === modal) modal.classList.add("hidden"); });
authForm.addEventListener("submit", async e => {
  e.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;

  const authUrl = SUPABASE_URL.replace("/rest/v1/", "/auth/v1/");

  try {
    const response = await fetch(
      isRegister
        ? `${authUrl}signup`
        : `${authUrl}token?grant_type=password`,
      {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.msg || data.error_description || data.message || "Gagal"
      );
    }

    alert(isRegister ? "Pendaftaran berhasil!" : "Login berhasil!");
    modal.classList.add("hidden");

  } catch (error) {
    alert("Gagal: " + error.message);
  }
});
document.querySelector("#year").textContent = new Date().getFullYear();
renderJobs();
