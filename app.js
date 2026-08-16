const SUPABASE_URL = "https://ksqrimmecpriyepsuclc.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_xvPQL9oniSRwZoqmSc5W4A_NS9ldWIL";

const supabaseHeaders = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json"
};

const SUPABASE_JOBS_URL = `${SUPABASE_URL}jobs`;
const SUPABASE_APPLICATIONS_URL = `${SUPABASE_URL}applications`;

const jobs = [
  {id:1, title:"Frontend Developer", company:"Teknologi Nusantara", location:"Jakarta", category:"Teknologi", type:"Full-time", salary:"Rp 8–12 juta / bulan"},
  {id:2, title:"Backend Developer", company:"Solusi Digital Indonesia", location:"Bandung", category:"Teknologi", type:"Full-time", salary:"Rp 9–14 juta / bulan"},
  {id:3, title:"Digital Marketing Specialist", company:"Maju Bersama", location:"Jakarta", category:"Marketing", type:"Full-time", salary:"Rp 6–9 juta / bulan"},
  {id:4, title:"Staff Administrasi", company:"Prima Nusantara", location:"Surabaya", category:"Administrasi", type:"Full-time", salary:"Rp 4–6 juta / bulan"},
  {id:5, title:"UI/UX Designer", company:"Karya Digital", location:"Remote", category:"Desain", type:"Remote", salary:"Rp 7–10 juta / bulan"},
  {id:6, title:"Social Media Specialist", company:"Ruang Kreatif", location:"Yogyakarta", category:"Marketing", type:"Full-time", salary:"Rp 5–8 juta / bulan"},
  {id:7, title:"Accounting Staff", company:"Cahaya Finance", location:"Jakarta", category:"Accounting", type:"Full-time", salary:"Rp 5–8 juta / bulan"},
  {id:8, title:"Finance Staff", company:"Mitra Finansial", location:"Jakarta", category:"Finance", type:"Full-time", salary:"Rp 6–10 juta / bulan"},
  {id:9, title:"Sales Executive", company:"Sukses Makmur", location:"Bekasi", category:"Sales", type:"Full-time", salary:"Rp 5–9 juta / bulan"},
  {id:10, title:"Customer Service", company:"Layanan Prima", location:"Jakarta", category:"Customer Service", type:"Full-time", salary:"Rp 4–7 juta / bulan"},
  {id:11, title:"HRD Staff", company:"Indonesia Jaya", location:"Tangerang", category:"HRD", type:"Full-time", salary:"Rp 6–9 juta / bulan"},
  {id:12, title:"Recruitment Staff", company:"Talent Indonesia", location:"Jakarta", category:"HRD", type:"Full-time", salary:"Rp 5–8 juta / bulan"},
  {id:13, title:"Purchasing Staff", company:"Prima Industri", location:"Jakarta", category:"Purchasing", type:"Full-time", salary:"Rp 5–8 juta / bulan"},
  {id:14, title:"Warehouse Staff", company:"Logistik Cepat", location:"Bekasi", category:"Warehouse", type:"Full-time", salary:"Rp 4–7 juta / bulan"},
  {id:15, title:"Logistic Staff", company:"Nusantara Logistik", location:"Surabaya", category:"Logistic", type:"Full-time", salary:"Rp 5–8 juta / bulan"},
  {id:16, title:"Operator Produksi", company:"Industri Sejahtera", location:"Karawang", category:"Produksi", type:"Full-time", salary:"Rp 4–7 juta / bulan"},
  {id:17, title:"Quality Control", company:"Manufaktur Indonesia", location:"Karawang", category:"Quality Control", type:"Full-time", salary:"Rp 5–8 juta / bulan"},
  {id:18, title:"Mechanical Engineer", company:"Teknik Mandiri", location:"Jakarta", category:"Engineering", type:"Full-time", salary:"Rp 7–12 juta / bulan"},
  {id:19, title:"Teknisi", company:"Tekno Service", location:"Depok", category:"Teknisi", type:"Full-time", salary:"Rp 4–8 juta / bulan"},
  {id:20, title:"Project Manager", company:"Proyek Digital", location:"Jakarta", category:"Management", type:"Full-time", salary:"Rp 12–20 juta / bulan"},
  {id:21, title:"Product Manager", company:"Startup Indonesia", location:"Jakarta", category:"Management", type:"Full-time", salary:"Rp 12–20 juta / bulan"},
  {id:22, title:"Data Analyst", company:"Data Solusi", location:"Jakarta", category:"Data", type:"Full-time", salary:"Rp 8–14 juta / bulan"},
  {id:23, title:"Data Scientist", company:"AI Nusantara", location:"Bandung", category:"Data", type:"Full-time", salary:"Rp 10–18 juta / bulan"},
  {id:24, title:"Mobile Developer", company:"Aplikasi Kita", location:"Jakarta", category:"Teknologi", type:"Remote", salary:"Rp 8–15 juta / bulan"},
  {id:25, title:"IT Support", company:"Digital Support", location:"Tangerang", category:"IT", type:"Full-time", salary:"Rp 5–8 juta / bulan"},
  {id:26, title:"Network Engineer", company:"Network Indonesia", location:"Jakarta", category:"IT", type:"Full-time", salary:"Rp 7–12 juta / bulan"},
  {id:27, title:"Cyber Security Specialist", company:"Secure Digital", location:"Jakarta", category:"IT", type:"Full-time", salary:"Rp 10–18 juta / bulan"},
  {id:28, title:"Content Writer", company:"Media Kreatif", location:"Remote", category:"Content", type:"Remote", salary:"Rp 5–9 juta / bulan"},
  {id:29, title:"Copywriter", company:"Kreatif Media", location:"Jakarta", category:"Content", type:"Full-time", salary:"Rp 5–9 juta / bulan"},
  {id:30, title:"Graphic Designer", company:"Visual Kreatif", location:"Bandung", category:"Desain", type:"Full-time", salary:"Rp 5–9 juta / bulan"},
  {id:31, title:"Photographer", company:"Studio Nusantara", location:"Jakarta", category:"Creative", type:"Full-time", salary:"Rp 5–10 juta / bulan"},
  {id:32, title:"Video Editor", company:"Media Visual", location:"Remote", category:"Creative", type:"Remote", salary:"Rp 5–10 juta / bulan"},
  {id:33, title:"Public Relations", company:"Komunikasi Indonesia", location:"Jakarta", category:"Public Relations", type:"Full-time", salary:"Rp 6–10 juta / bulan"},
  {id:34, title:"Legal Staff", company:"Konsultan Hukum", location:"Jakarta", category:"Legal", type:"Full-time", salary:"Rp 6–10 juta / bulan"},
  {id:35, title:"Secretary", company:"Perusahaan Nasional", location:"Jakarta", category:"Administrasi", type:"Full-time", salary:"Rp 5–8 juta / bulan"},
  {id:36, title:"Receptionist", company:"Hospitality Indonesia", location:"Bali", category:"Administrasi", type:"Full-time", salary:"Rp 4–7 juta / bulan"}
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

      <div class="job-meta">
        <span>📍 ${job.location}</span>
        <span>▣ ${job.category}</span>
      </div>

      <div class="salary">${job.salary}</div>

      <div class="job-actions">
        <button data-details="${i}">Lihat detail</button>
        <button data-apply="${i}">Lamar →</button>
      </div>
    `;

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
    (!loc || j.location.toLowerCase().includes(loc) ||
      (loc === "indonesia" && j.location === "Remote"))
  );

  renderJobs(filtered);
  document.querySelector("#jobs").scrollIntoView({behavior:"smooth"});
}

document.querySelector("#searchForm").addEventListener("submit", e => {
  e.preventDefault();
  filterJobs();
});

categoryFilter.addEventListener("change", filterJobs);

document.querySelectorAll(".quick-tags button").forEach(btn => {
  btn.addEventListener("click", () => {
    keyword.value = btn.dataset.keyword;
    filterJobs();
  });
});

const modal = document.querySelector("#authModal");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
const authForm = document.querySelector("#authForm");

let isRegister = false;

function openModal(title, text){
  modalTitle.textContent = title;
  modalText.textContent = text;

  authForm.classList.toggle(
    "hidden",
    title !== "Masuk" && title !== "Daftar"
  );

  document.querySelector(".switch-auth").classList.toggle(
    "hidden",
    title !== "Masuk" && title !== "Daftar"
  );

  modal.classList.remove("hidden");
}

async function submitApplication(job){
  const accessToken = localStorage.getItem("cariKerjakuAccessToken");
  const userData = localStorage.getItem("cariKerjakuUser");

  if (!accessToken || !userData) {
    openModal(
      "Masuk",
      "Silakan masuk terlebih dahulu sebelum melamar pekerjaan."
    );
    authForm.classList.remove("hidden");
    document.querySelector(".switch-auth").classList.remove("hidden");
    return;
  }

  let user;

  try {
    user = JSON.parse(userData);
  } catch {
    localStorage.removeItem("cariKerjakuUser");
    localStorage.removeItem("cariKerjakuAccessToken");

    openModal(
      "Masuk",
      "Sesi login tidak valid. Silakan masuk kembali."
    );
    return;
  }

  if (!user.id) {
    alert("Data akun tidak ditemukan. Silakan login kembali.");
    return;
  }

  try {
    const response = await fetch(SUPABASE_APPLICATIONS_URL, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({
        job_id: job.id,
        user_id: user.id,
        status: "submitted"
      })
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));

      throw new Error(
        data.message ||
        data.error_description ||
        data.msg ||
        "Lamaran gagal dikirim"
      );
    }

    alert(
      `Lamaran berhasil dikirim!\n\n${job.title} - ${job.company}`
    );

  } catch (error) {
    alert("Gagal mengirim lamaran: " + error.message);
  }
}

jobsGrid.addEventListener("click", e => {
  const details = e.target.closest("[data-details]");
  const apply = e.target.closest("[data-apply]");

  const idx = Number(
    (details || apply)?.dataset[
      details ? "details" : "apply"
    ]
  );

  if (!Number.isInteger(idx)) return;

  const job = jobs[idx];

  if (apply) {
    submitApplication(job);
  } else {
    openModal(
      job.title,
      `${job.company} · ${job.location}

Kategori: ${job.category}
Tipe: ${job.type}
Gaji: ${job.salary}`
    );
  }
});

document.querySelector("#loginBtn").addEventListener("click", () => {
  isRegister = false;

  modalTitle.textContent = "Masuk";
  modalText.textContent = "Masukkan email dan password untuk masuk.";

  authForm.classList.remove("hidden");
  document.querySelector(".switch-auth").classList.remove("hidden");
  modal.classList.remove("hidden");
});

document.querySelector("#registerBtn").addEventListener("click", () => {
  isRegister = true;

  modalTitle.textContent = "Daftar";
  modalText.textContent = "Buat akun untuk mulai melamar pekerjaan.";

  authForm.classList.remove("hidden");
  document.querySelector(".switch-auth").classList.remove("hidden");
  modal.classList.remove("hidden");
});

document.querySelector("#switchAuth").addEventListener("click", () => {
  isRegister = !isRegister;

  modalTitle.textContent = isRegister ? "Daftar" : "Masuk";

  modalText.textContent = isRegister
    ? "Buat akun untuk mulai melamar pekerjaan."
    : "Masukkan email dan password untuk masuk.";

  document.querySelector("#switchAuth").textContent =
    isRegister ? "Masuk" : "Daftar";
});

document.querySelector("#closeModal").addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

authForm.addEventListener("submit", async e => {
  e.preventDefault();

  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  const authUrl = SUPABASE_URL.replace(
    "/rest/v1/",
    "/auth/v1/"
  );

  try {
    const response = await fetch(
      isRegister
        ? `${authUrl}/signup`
        : `${authUrl}/token?grant_type=password`,
      {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.msg ||
        data.error_description ||
        data.message ||
        "Gagal"
      );
    }

    if (isRegister) {
      alert(
        "Pendaftaran berhasil! Silakan masuk menggunakan email dan password tadi."
      );

      isRegister = false;
      modalTitle.textContent = "Masuk";
      modalText.textContent =
        "Masukkan email dan password untuk masuk.";

      document.querySelector("#switchAuth").textContent = "Daftar";

    } else {
      localStorage.setItem(
        "cariKerjakuAccessToken",
        data.access_token || ""
      );

      localStorage.setItem(
        "cariKerjakuUser",
        JSON.stringify(data.user || {})
      );

      alert("Login berhasil!");
      modal.classList.add("hidden");
    }

  } catch (error) {
    alert("Gagal: " + error.message);
  }
});

renderJobs();
