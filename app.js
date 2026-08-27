const SUPABASE_URL = "https://ksqrimmecpriyepsuclc.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_xvPQL9oniSRwZoqmSc5W4A_NS9ldWIL";

const supabaseHeaders = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json"
};

const SUPABASE_JOBS_URL = `${SUPABASE_URL}jobs`;
const SUPABASE_APPLICATIONS_URL = `${SUPABASE_URL}applications`;

const jobTypes = [
  "Staff Administrasi",
  "Admin Kantor",
  "Admin Operasional",
  "Admin Data",
  "Data Entry",
  "Sekretaris",
  "Personal Assistant",
  "Executive Assistant",
  "Receptionist",
  "Front Office Staff",
  "Office Assistant",
  "Office Manager",
  "Document Controller",
  "Staff Pengarsipan",
  "Staff Administrasi Umum",
  "Admin Penjualan",
  "Admin Pembelian",
  "Admin Gudang",
  "Admin Proyek",
  "Customer Service Admin",

  "Staff Akuntansi",
  "Accounting Admin",
  "Junior Accountant",
  "Senior Accountant",
  "Accounting Supervisor",
  "Accounting Manager",
  "Staff Keuangan",
  "Finance Admin",
  "Finance Officer",
  "Finance Supervisor",
  "Finance Manager",
  "Financial Analyst",
  "Payroll Staff",
  "Payroll Officer",
  "Tax Staff",
  "Tax Accountant",
  "Tax Consultant",
  "Auditor Internal",
  "Auditor Eksternal",
  "Credit Analyst",

  "Marketing Staff",
  "Marketing Officer",
  "Marketing Executive",
  "Marketing Supervisor",
  "Marketing Manager",
  "Digital Marketing Specialist",
  "Digital Marketing Officer",
  "Social Media Specialist",
  "Social Media Officer",
  "Content Marketing Specialist",
  "SEO Specialist",
  "SEM Specialist",
  "Brand Specialist",
  "Brand Manager",
  "Product Marketing Specialist",
  "Marketing Communication Staff",
  "Public Relations Officer",
  "Sales Staff",
  "Sales Executive",
  "Sales Representative",
  "Sales Supervisor",
  "Sales Manager",
  "Account Executive",
  "Account Manager",
  "Business Development Executive",

  "IT Support",
  "IT Staff",
  "IT Administrator",
  "System Administrator",
  "Network Administrator",
  "Network Engineer",
  "Software Engineer",
  "Software Developer",
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Mobile Developer",
  "Android Developer",
  "iOS Developer",
  "DevOps Engineer",
  "Cloud Engineer",
  "Data Analyst",
  "Data Scientist",
  "Database Administrator",
  "Cyber Security Specialist",
  "Information Security Analyst",
  "QA / Software Tester",
  "UI/UX Designer",
  "IT Project Manager"
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
let isCompany = false;
const companyAccountBtn = document.querySelector("#companyAccount");
const jobseekerAccountBtn = document.querySelector("#jobseekerAccount");
const companyFields = document.querySelector("#companyFields");
companyAccountBtn.addEventListener("click", () => {
  isCompany = true;
  companyFields.style.display = "block";
  modalTitle.textContent = "Daftar Perusahaan";
  modalText.textContent = "Buat akun perusahaan untuk memasang lowongan.";
});

jobseekerAccountBtn.addEventListener("click", () => {
  isCompany = false;
  companyFields.style.display = "none";
});
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
    document.getElementById("jobDetailTitle").textContent = job.title;
    document.getElementById("jobDetailCompany").textContent = job.company;
    document.getElementById("jobDetailLocation").textContent = `📍 ${job.location}`;
    document.getElementById("jobDetailType").textContent = `💼 ${job.type}`;
    document.getElementById("jobDetailSalary").textContent = `💰 ${job.salary}`;

    document.getElementById("jobDetailDescription").textContent =
      job.description || "Deskripsi pekerjaan belum tersedia.";

    document.getElementById("jobDetailRequirements").textContent =
      job.requirements || "Persyaratan belum tersedia.";

    document.getElementById("jobDetailApply").onclick = () => {
      submitApplication(job);
      document.getElementById("jobDetailModal").classList.add("hidden");
    };

    document.getElementById("jobDetailModal").classList.remove("hidden");
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
document.querySelector("#closeJobDetail").addEventListener("click", () => {
  document.querySelector("#jobDetailModal").classList.add("hidden");
});

document.querySelector("#jobDetailModal").addEventListener("click", e => {
  const jobDetailModal = document.querySelector("#jobDetailModal");

  if (e.target === jobDetailModal) {
    jobDetailModal.classList.add("hidden");
  }
});
authForm.addEventListener("submit", async e => {
  e.preventDefault();

  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');

  const email = emailInput.value.trim();
  const password = passwordInput.value;
const companyName = document.querySelector("#companyName")?.value.trim() || "";
const companyPhone = document.querySelector("#companyPhone")?.value.trim() || "";
const companyWebsite = document.querySelector("#companyWebsite")?.value.trim() || "";
const companyCity = document.querySelector("#companyCity")?.value.trim() || "";
const companyAddress = document.querySelector("#companyAddress")?.value.trim() || "";
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

     if (isCompany) {
  const companyResponse = await fetch(`${SUPABASE_URL}companies`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${data.access_token}`,
      "Content-Type": "application/json"
    },
  body: JSON.stringify({
  user_id: data.user?.id,
  company_name: companyName,
  email: email,
  phone: companyPhone,
  website: companyWebsite,
  city: companyCity,
  address: companyAddress
  })
  });

  if (!companyResponse.ok) {
    const companyError = await companyResponse.text();
    throw new Error(companyError);
  }
       showCompanyDashboard();
return;
       
}
     modal.classList.add("hidden");
     showJobseekerDashboard();
     alert("Login berhasil!");
    }

  } catch (error) {
    alert("Gagal: " + error.message);
  }
});

renderJobs();
// ================= DASHBOARD PENCARI KERJA =================

function showJobseekerDashboard() {
  const dashboard = document.createElement("div");

  dashboard.id = "jobseekerDashboard";

  dashboard.innerHTML = `
    <div style="
      min-height:100vh;
      background:#f4f7fb;
      font-family:Arial,sans-serif;
      color:#1f2937;
    ">

          <div style="
        background:#123b6d;
        color:white;
        padding:20px 30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        box-shadow:0 3px 12px rgba(0,0,0,.15);
      ">
        <div>
          <div style="
            font-size:24px;
            font-weight:bold;
          ">
            Cari Kerjaku
          </div>

          <div style="
            font-size:13px;
            opacity:.85;
            margin-top:4px;
          ">
            Dashboard Pencari Kerja
          </div>
        </div>

        <button
          onclick="location.reload()"
          style="
            background:white;
            color:#123b6d;
            border:none;
            padding:10px 18px;
            border-radius:8px;
            cursor:pointer;
            font-weight:bold;
          "
        >
          🔎 Cari Lowongan
        </button>
      </div>

      <!-- CONTENT --> 
      <!-- CONTENT -->
      <div style="
        max-width:1100px;
        margin:auto;
        padding:35px 25px;
      ">

        <div style="
          margin-bottom:30px;
        ">
          <h1 style="
            margin:0;
            font-size:30px;
            color:#172b4d;
          ">
            Selamat Datang 👋
          </h1>

          <p style="
            margin-top:8px;
            color:#64748b;
            font-size:16px;
          ">
            Kelola CV dan persiapkan dirimu untuk mendapatkan pekerjaan.
          </p>
        </div>

        <!-- STATISTIK -->
        <div style="
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
          gap:18px;
          margin-bottom:30px;
        ">

         <div
          
            style=" 
          
            
            background:white;
            padding:22px;
            border-radius:14px;
            cursor:pointer;
            box-shadow:0 3px 12px rgba(15,23,42,.07);
            border:1px solid #e5eaf1;
          ">
            <div style="font-size:13px;color:#64748b;">
              CV Saya
            </div>

            <div style="
              font-size:24px;
              font-weight:bold;
              margin-top:8px;
              color:#123b6d;
            ">
              Belum Upload
            </div>
          </div>

          <div
            onclick="showMyApplications()"
            style="
            cursor:pointer;
            background:white;
            padding:22px;
            border-radius:14px;
            box-shadow:0 3px 12px rgba(15,23,42,.07);
            border:1px solid #e5eaf1;
          ">
            <div style="font-size:13px;color:#64748b;">
              Lamaran Saya
            </div>

            <div style="
              font-size:30px;
              font-weight:bold;
              margin-top:8px;
              color:#16805c;
            ">
              0
            </div>
          </div>

          <div style="
            background:white;
            padding:22px;
            border-radius:14px;
            box-shadow:0 3px 12px rgba(15,23,42,.07);
            border:1px solid #e5eaf1;
          ">
            <div style="font-size:13px;color:#64748b;">
              Pekerjaan Tersimpan
            </div>

            <div style="
              font-size:30px;
              font-weight:bold;
              margin-top:8px;
              color:#7c3aed;
            ">
              0
            </div>
          </div>

          <div style="
            background:white;
            padding:22px;
            border-radius:14px;
            box-shadow:0 3px 12px rgba(15,23,42,.07);
            border:1px solid #e5eaf1;
          ">
            <div style="font-size:13px;color:#64748b;">
              Notifikasi
            </div>

            <div style="
              font-size:30px;
              font-weight:bold;
              margin-top:8px;
              color:#ea580c;
            ">
              0
            </div>
          </div>

        </div>

        <!-- CV -->
        <div style="
          background:white;
          padding:30px;
          border-radius:16px;
          box-shadow:0 3px 15px rgba(15,23,42,.07);
          border:1px solid #e5eaf1;
        ">

          <h2 style="
            margin-top:0;
            color:#172b4d;
            font-size:22px;
          ">
            📄 CV Saya
          </h2>

          <p style="
            color:#64748b;
            margin-bottom:22px;
          ">
            Upload CV dalam format PDF agar perusahaan dapat melihat
            profil dan pengalaman kerja kamu.
          </p>

          <div style="
            background:#f8fafc;
            border:2px dashed #cbd5e1;
            border-radius:14px;
            padding:30px;
            text-align:center;
          ">

            <div style="
              font-size:42px;
              margin-bottom:10px;
            ">
              📄
            </div>

            <div style="
              font-weight:bold;
              color:#172b4d;
              margin-bottom:8px;
            ">
              Upload CV kamu
            </div>

            <div style="
              color:#64748b;
              font-size:14px;
              margin-bottom:20px;
            ">
              Format yang diperbolehkan: PDF
            </div>

            <input
              type="file"
              id="cvFileInput"
              accept=".pdf,application/pdf"
              style="
                display:block;
                margin:0 auto;
                max-width:100%;
              "
            >

            <button
              id="uploadCvBtn"
              style="
                margin-top:20px;
                padding:12px 24px;
                background:#123b6d;
                color:white;
                border:none;
                border-radius:9px;
                cursor:pointer;
                font-size:15px;
                font-weight:bold;
                box-shadow:0 4px 10px rgba(18,59,109,.25);
              "
            >
              Upload CV
            </button>

            <p
              id="cvStatus"
              style="
                margin-top:18px;
                font-weight:bold;
              "
            ></p>

          </div>
        </div>

      </div>
    </div>
  `;

  document.body.innerHTML = "";
  document.body.appendChild(dashboard);

  const uploadBtn = document.querySelector("#uploadCvBtn");
  const fileInput = document.querySelector("#cvFileInput");
  const status = document.querySelector("#cvStatus");

  uploadBtn.addEventListener("click", async () => {
    const file = fileInput.files[0];

    if (!file) {
      status.textContent = "Pilih file CV terlebih dahulu.";
      return;
    }
   
    if (file.type !== "application/pdf") {
      status.textContent = "CV harus berupa file PDF.";
      return;
    }

    const token = localStorage.getItem("cariKerjakuAccessToken");
    const userData = localStorage.getItem("cariKerjakuUser");

    if (!token || !userData) {
      status.textContent = "Silakan login terlebih dahulu.";
      return;
    }

    let user;

    try {
      user = JSON.parse(userData);
    } catch {
      status.textContent = "Data akun tidak valid. Silakan login kembali.";
      return;
    }

    if (!user.id) {
      status.textContent = "ID pengguna tidak ditemukan.";
      return;
    }

    try {
      status.textContent = "Mengupload CV...";

      const filePath = `${user.id}/${Date.now()}_${file.name}`;

      const uploadResponse = await fetch(
        `${SUPABASE_URL.replace("/rest/v1/", "/storage/v1/object/cv/")}${filePath}`,
        {
          method: "POST",
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${token}`,
            "Content-Type": file.type
          },
          body: file
        }
      );

      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text();
        throw new Error(errorText);
      }

      status.textContent = "CV berhasil diupload.";
    } catch (error) {
      status.textContent = "Gagal upload CV: " + error.message;
    }
  });
}
// ================= LAMARAN SAYA =================
async function showMyApplications() {
  const userData = localStorage.getItem("cariKerjakuUser");
  const accessToken = localStorage.getItem("cariKerjakuAccessToken");

  if (!userData || !accessToken) {
    alert("Silakan login terlebih dahulu.");
    return;
  }

  let user;

  try {
    user = JSON.parse(userData);
  } catch {
    alert("Data akun tidak valid. Silakan login kembali.");
    return;
  }

  if (!user.id) {
    alert("ID pengguna tidak ditemukan.");
    return;
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}applications?user_id=eq.${user.id}&select=*`,
      {
        method: "GET",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${accessToken}`
        }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const applications = await response.json();

    const page = document.createElement("div");

    page.innerHTML = `
      <div style="
        min-height:100vh;
        background:#f4f7fb;
        font-family:Arial,sans-serif;
        color:#1f2937;
      ">

        <div style="
          background:#123b6d;
          color:white;
          padding:20px 30px;
        ">
          <div style="font-size:24px;font-weight:bold;">
            Cari Kerjaku
          </div>

          <div style="font-size:13px;margin-top:4px;opacity:.85;">
            Lamaran Saya
          </div>
        </div>

        <div style="
          max-width:1000px;
          margin:auto;
          padding:35px 25px;
        ">

          <button
            onclick="showJobseekerDashboard()"
            style="
              padding:10px 18px;
              margin-bottom:25px;
              background:#123b6d;
              color:white;
              border:none;
              border-radius:8px;
              cursor:pointer;
            "
          >
            ← Dashboard
          </button>

          <h1 style="color:#172b4d;">
            📄 Lamaran Saya
          </h1>

          ${
            applications.length === 0
              ? `
                <div style="
                  background:white;
                  padding:40px;
                  border-radius:14px;
                  text-align:center;
                  border:1px solid #e5eaf1;
                ">
                  <div style="font-size:45px;">📄</div>

                  <h2 style="color:#172b4d;">
                    Belum Ada Lamaran
                  </h2>

                  <p style="color:#64748b;">
                    Lamaran pekerjaan yang kamu kirim akan muncul di sini.
                  </p>
                </div>
              `
              : applications.map(application => `
                <div style="
                  background:white;
                  padding:20px;
                  margin-bottom:15px;
                  border-radius:14px;
                  border:1px solid #e5eaf1;
                ">

                  <h3 style="margin:0;color:#123b6d;">
                    Lamaran #${application.id}
                  </h3>

                  <p style="color:#64748b;">
                    Status:
                    <strong>
                      ${application.status || "Menunggu"}
                    </strong>
                  </p>

                  <p style="color:#64748b;">
                    Tanggal:
                    ${application.created_at || "-"}
                  </p>

                </div>
              `).join("")
          }

        </div>
      </div>
    `;

    document.body.innerHTML = "";
    document.body.appendChild(page);

  } catch (error) {
    alert("Gagal mengambil lamaran: " + error.message);
  }
}
 // ================= DASHBOARD PERUSAHAAN =================
window.submitJobPost = submitJobPost;
function showCompanyDashboard() {
  const dashboard = document.createElement("div");

  dashboard.id = "companyDashboard";
  const currentLanguage = localStorage.getItem("siteLanguage") || "id";
  dashboard.innerHTML = `
    <div style="
      min-height:100vh;
      background:#f4f7fb;
      font-family:Arial,sans-serif;
      color:#1f2937;
    ">

      <!-- HEADER -->
      <div style="
        background:#123b6d;
        color:white;
        padding:20px 30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        box-shadow:0 3px 12px rgba(0,0,0,.15);
      ">
        <div>
          <div style="
            font-size:24px;
            font-weight:bold;
          ">
            Cari Kerjaku
          </div>

          <div style="
            font-size:13px;
            opacity:.85;
            margin-top:4px;
          ">
            ${currentLanguage === "en" ? "Company Dashboard" : "Dashboard Perusahaan"}
          </div>
        </div>

        <button onclick="companyLogout()" style="
          background:rgba(255,255,255,.12);
          color:white;
          border:1px solid rgba(255,255,255,.3);
          padding:10px 18px;
          border-radius:8px;
          cursor:pointer;
          font-weight:bold;
        ">
          Logout
        </button>
      </div>

      <!-- CONTENT -->
      <div style="
        max-width:1100px;
        margin:auto;
        padding:35px 25px;
      ">

        <div style="margin-bottom:30px;">
          <h1 style="
            margin:0;
            font-size:30px;
            color:#172b4d;
          ">
           ${currentLanguage === "en" ? "Welcome 👋" : "Selamat Datang 👋"} 
          </h1>

          <p style="
            margin-top:8px;
            color:#64748b;
            font-size:16px;
          ">
            Kelola lowongan dan kebutuhan rekrutmen perusahaan Anda.
          </p>
        </div>

        <!-- STATISTIK -->
        <div style="
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
          gap:18px;
          margin-bottom:30px;
        ">

          <div style="
            background:white;
            padding:22px;
            border-radius:14px;
            box-shadow:0 3px 12px rgba(15,23,42,.07);
            border:1px solid #e5eaf1;
          ">
            <div style="font-size:13px;color:#64748b;">
              Total Lowongan
            </div>

            <div style="
              font-size:30px;
              font-weight:bold;
              margin-top:8px;
              color:#123b6d;
            ">
              0
            </div>
          </div>

          <div style="
            background:white;
            padding:22px;
            border-radius:14px;
            box-shadow:0 3px 12px rgba(15,23,42,.07);
            border:1px solid #e5eaf1;
          ">
            <div style="font-size:13px;color:#64748b;">
              Lowongan Aktif
            </div>

            <div style="
              font-size:30px;
              font-weight:bold;
              margin-top:8px;
              color:#16805c;
            ">
              0
            </div>
          </div>

          <div style="
            background:white;
            padding:22px;
            border-radius:14px;
            box-shadow:0 3px 12px rgba(15,23,42,.07);
            border:1px solid #e5eaf1;
          ">
            <div style="font-size:13px;color:#64748b;">
              Total Pelamar
            </div>

            <div style="
              font-size:30px;
              font-weight:bold;
              margin-top:8px;
              color:#7c3aed;
            ">
              0
            </div>
          </div>

          <div style="
            background:white;
            padding:22px;
            border-radius:14px;
            box-shadow:0 3px 12px rgba(15,23,42,.07);
            border:1px solid #e5eaf1;
          ">
            <div style="font-size:13px;color:#64748b;">
              Lamaran Baru
            </div>

            <div style="
              font-size:30px;
              font-weight:bold;
              margin-top:8px;
              color:#ea580c;
            ">
              0
            </div>
          </div>

        </div>

        <!-- MENU -->
        <div style="
          background:white;
          padding:25px;
          border-radius:16px;
          box-shadow:0 3px 15px rgba(15,23,42,.07);
          border:1px solid #e5eaf1;
        ">

          <h2 style="
            margin-top:0;
            color:#172b4d;
            font-size:21px;
          ">
            Kelola Perusahaan
          </h2>

          <p style="
            color:#64748b;
            margin-bottom:22px;
          ">
            Pilih menu yang ingin Anda kelola.
          </p>

          <div style="
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(210px,1fr));
            gap:16px;
          ">

            <button onclick="showCompanyProfile()" style="
              padding:20px;
              background:#f8fafc;
              border:1px solid #dbe3ec;
              border-radius:12px;
              cursor:pointer;
              font-size:15px;
              font-weight:bold;
              color:#172b4d;
            ">
              🏢<br>
              <span style="display:inline-block;margin-top:8px;">
                Profil Perusahaan
              </span>
            </button>

            <button onclick="showPostJobForm()" style="
              padding:20px;
              background:#123b6d;
              border:none;
              border-radius:12px;
              cursor:pointer;
              font-size:15px;
              font-weight:bold;
              color:white;
              box-shadow:0 4px 10px rgba(18,59,109,.25);
            ">
              ➕<br>
              <span style="display:inline-block;margin-top:8px;">
                Pasang Lowongan
              </span>
            </button>

           <button onclick="showMyJobs()" style=" 
              padding:20px;
              background:#f8fafc;
              border:1px solid #dbe3ec;
              border-radius:12px;
              cursor:pointer;
              font-size:15px;
              font-weight:bold;
              color:#172b4d;
            ">
              📋<br>
              <span style="display:inline-block;margin-top:8px;">
                Lowongan Saya
              </span>
            </button>

            <button onclick="alert('Belum ada lamaran masuk')" style="
              padding:20px;
              background:#f8fafc;
              border:1px solid #dbe3ec;
              border-radius:12px;
              cursor:pointer;
              font-size:15px;
              font-weight:bold;
              color:#172b4d;
            ">
              👥<br>
              <span style="display:inline-block;margin-top:8px;">
                Lamaran Masuk
              </span>
            </button>

          </div>
        </div>

      </div>
    </div>
  `;

  document.body.innerHTML = "";
  document.body.appendChild(dashboard);
  translateCompanyDashboard();
}
// ================= PROFIL PERUSAHAAN =================

async function showCompanyProfile() {
  const userData = localStorage.getItem("cariKerjakuUser");
  const accessToken = localStorage.getItem("cariKerjakuAccessToken");

  if (!userData || !accessToken) {
    alert("Sesi perusahaan tidak ditemukan. Silakan login kembali.");
    return;
  }

  let user;

  try {
    user = JSON.parse(userData);
  } catch {
    alert("Data akun tidak valid. Silakan login kembali.");
    return;
  }

  if (!user.id) {
    alert("ID pengguna tidak ditemukan.");
    return;
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}companies?user_id=eq.${user.id}&select=*`,
      {
        method: "GET",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${accessToken}`
        }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const companies = await response.json();

    if (!companies.length) {
      alert("Profil perusahaan belum ditemukan.");
      return;
    }

    const company = companies[0];

    const profile = document.createElement("div");

    profile.id = "companyProfile";

    profile.innerHTML = `
      <div style="
        min-height:100vh;
        background:#f4f7fb;
        font-family:Arial,sans-serif;
        color:#1f2937;
      ">

        <!-- HEADER -->
        <div style="
          background:#123b6d;
          color:white;
          padding:20px 30px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          box-shadow:0 3px 12px rgba(0,0,0,.15);
        ">
          <div>
            <div style="
              font-size:24px;
              font-weight:bold;
            ">
              Cari Kerjaku
            </div>

            <div style="
              font-size:13px;
              opacity:.85;
              margin-top:4px;
            ">
              Profil Perusahaan
            </div>
          </div>

          <button
            onclick="showCompanyDashboard()"
            style="
              background:rgba(255,255,255,.12);
              color:white;
              border:1px solid rgba(255,255,255,.3);
              padding:10px 18px;
              border-radius:8px;
              cursor:pointer;
              font-weight:bold;
            "
          >
            ← Dashboard
          </button>
        </div>

        <!-- CONTENT -->
        <div style="
          max-width:900px;
          margin:auto;
          padding:35px 25px;
        ">

          <div style="
            background:white;
            padding:30px;
            border-radius:16px;
            box-shadow:0 3px 15px rgba(15,23,42,.07);
            border:1px solid #e5eaf1;
          ">

            <div style="
              width:80px;
              height:80px;
              border-radius:50%;
              background:#eaf1f8;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:38px;
              margin-bottom:20px;
            ">
              🏢
            </div>

            <h1 style="
              margin:0;
              color:#172b4d;
              font-size:28px;
            ">
              ${company.company_name || "Nama Perusahaan"}
            </h1>

            <p style="
              color:#64748b;
              margin-top:8px;
            ">
              Profil perusahaan Anda
            </p>

            <div style="
              display:grid;
              gap:14px;
              margin-top:25px;
            ">

              <div style="
                padding:16px;
                background:#f8fafc;
                border-radius:10px;
                border:1px solid #e5eaf1;
              ">
                <strong>📧 Email</strong>
                <div style="margin-top:5px;color:#64748b;">
                  ${company.email || "-"}
                </div>
              </div>

              <div style="
                padding:16px;
                background:#f8fafc;
                border-radius:10px;
                border:1px solid #e5eaf1;
              ">
                <strong>📞 Telepon</strong>
                <div style="margin-top:5px;color:#64748b;">
                  ${company.phone || "-"}
                </div>
              </div>

              <div style="
                padding:16px;
                background:#f8fafc;
                border-radius:10px;
                border:1px solid #e5eaf1;
              ">
                <strong>🌐 Website</strong>
                <div style="margin-top:5px;color:#64748b;">
                  ${company.website || "-"}
                </div>
              </div>

              <div style="
                padding:16px;
                background:#f8fafc;
                border-radius:10px;
                border:1px solid #e5eaf1;
              ">
                <strong>📍 Kota</strong>
                <div style="margin-top:5px;color:#64748b;">
                  ${company.city || "-"}
                </div>
              </div>

              <div style="
                padding:16px;
                background:#f8fafc;
                border-radius:10px;
                border:1px solid #e5eaf1;
              ">
                <strong>🏠 Alamat</strong>
                <div style="margin-top:5px;color:#64748b;">
                  ${company.address || "-"}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    `;

    document.body.innerHTML = "";
    document.body.appendChild(profile);
    translateCompanyProfile(profile);
  } catch (error) {
    alert("Gagal mengambil profil perusahaan: " + error.message);
  }
}

// ================= LOWONGAN SAYA =================

async function showMyJobs() {
  const userData = localStorage.getItem("cariKerjakuUser");
  const accessToken = localStorage.getItem("cariKerjakuAccessToken");

  if (!userData || !accessToken) {
    alert("Sesi perusahaan tidak ditemukan. Silakan login kembali.");
    return;
  }

  let user;

  try {
    user = JSON.parse(userData);
  } catch {
    alert("Data akun tidak valid. Silakan login kembali.");
    return;
  }

  if (!user.id) {
    alert("ID pengguna tidak ditemukan.");
    return;
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}jobs?user_id=eq.${user.id}&select=*`,
      {
        method: "GET",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${accessToken}`
        }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const jobs = await response.json();

    const page = document.createElement("div");

    page.innerHTML = `
      <div style="
        min-height:100vh;
        background:#f4f7fb;
        font-family:Arial,sans-serif;
        color:#1f2937;
      ">

        <div style="
          background:#123b6d;
          color:white;
          padding:20px 30px;
          display:flex;
          justify-content:space-between;
          align-items:center;
        ">
          <div>
            <div style="
              font-size:24px;
              font-weight:bold;
            ">
              Cari Kerjaku
            </div>

            <div style="
              font-size:13px;
              opacity:.85;
              margin-top:4px;
            ">
              Lowongan Saya
            </div>
          </div>

          <button
            onclick="showCompanyDashboard()"
            style="
              background:rgba(255,255,255,.12);
              color:white;
              border:1px solid rgba(255,255,255,.3);
              padding:10px 18px;
              border-radius:8px;
              cursor:pointer;
              font-weight:bold;
            "
          >
            ← Dashboard
          </button>
        </div>

        <div style="
          max-width:1000px;
          margin:auto;
          padding:35px 25px;
        ">

          <h1 style="
            margin:0;
            color:#172b4d;
            font-size:30px;
          ">
            📋 Lowongan Saya
          </h1>

          <p style="
            color:#64748b;
            margin-top:8px;
            margin-bottom:25px;
          ">
            Daftar lowongan perusahaan Anda.
          </p>

          ${
            jobs.length === 0
              ? `
                <div style="
                  background:white;
                  padding:45px 25px;
                  border-radius:16px;
                  text-align:center;
                  border:1px solid #e5eaf1;
                ">
                  <div style="font-size:50px;">📋</div>

                  <h2 style="color:#172b4d;">
                    Belum Ada Lowongan
                  </h2>

                  <p style="color:#64748b;">
                    Lowongan perusahaan akan muncul di sini.
                  </p>
                </div>
              `
              : jobs.map(job => `
                <div style="
                  background:white;
                  padding:22px;
                  margin-bottom:16px;
                  border-radius:14px;
                  border:1px solid #e5eaf1;
                ">

                  <h2 style="
                    margin:0;
                    color:#123b6d;
                  ">
                    ${job.title || "Tanpa Judul"}
                  </h2>

                  <div style="
                    margin-top:10px;
                    color:#64748b;
                  ">
                    📍 ${job.city || "-"}
                  </div>

                  <p style="
                    margin-top:14px;
                    color:#475569;
                  ">
                    ${job.description || "-"}
                  </p>

                </div>
              `).join("")
          }

        </div>
      </div>
    `;

    document.body.innerHTML = "";
    document.body.appendChild(page);

  } catch (error) {
    alert("Gagal mengambil lowongan: " + error.message);
  }
}
function companyLogout() {
  localStorage.removeItem("cariKerjakuUser");
  localStorage.removeItem("cariKerjakuAccessToken");
  location.reload();
}

function showPostJobForm() {
  const form = document.createElement("div");

  form.innerHTML = `
    <div style="
      position:fixed;
      inset:0;
      background:rgba(15,23,42,.65);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:9999;
      padding:20px;
      overflow-y:auto;
    ">
      <div style="
        background:#fff;
        padding:28px;
        border-radius:18px;
        width:100%;
        max-width:620px;
        box-shadow:0 20px 50px rgba(0,0,0,.2);
        margin:auto;
      ">

        <h2 style="
          margin:0 0 6px;
          font-size:26px;
          color:#123b6d;
        ">Pasang Lowongan</h2>

        <p style="
          margin:0 0 22px;
          color:#64748b;
          font-size:14px;
        ">
          Lengkapi informasi pekerjaan yang ingin Anda tawarkan.
        </p>

        <label>Judul / Posisi Pekerjaan</label>
        <input
          id="jobTitle"
          placeholder="Contoh: Staff Administrasi"
          style="width:100%;box-sizing:border-box;margin:7px 0 15px;padding:12px;border:1px solid #dbe2ea;border-radius:10px;"
        >

        <label>Kategori Pekerjaan</label>
        <select
          id="jobCategory"
          style="width:100%;box-sizing:border-box;margin:7px 0 15px;padding:12px;border:1px solid #dbe2ea;border-radius:10px;background:white;"
        >
          <option value="">Pilih kategori</option>
          <option>Administrasi</option>
          <option>Accounting</option>
          <option>Finance</option>
          <option>Marketing</option>
          <option>Sales</option>
          <option>IT</option>
          <option>Teknologi</option>
          <option>HRD</option>
          <option>Desain</option>
          <option>Customer Service</option>
          <option>Logistik</option>
          <option>Produksi</option>
          <option>Kesehatan</option>
          <option>Pendidikan</option>
          <option>Kuliner</option>
          <option>Retail</option>
          <option>Lainnya</option>
        </select>

        <label>Lokasi / Kota</label>
        <input
          id="jobCity"
          placeholder="Contoh: Jakarta"
          style="width:100%;box-sizing:border-box;margin:7px 0 15px;padding:12px;border:1px solid #dbe2ea;border-radius:10px;"
        >

        <label>Jenis Pekerjaan</label>
        <select
          id="jobType"
          style="width:100%;box-sizing:border-box;margin:7px 0 15px;padding:12px;border:1px solid #dbe2ea;border-radius:10px;background:white;"
        >
          <option value="">Pilih jenis pekerjaan</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Remote">Remote</option>
        </select>

        <label>Gaji</label>
        <input
          id="jobSalary"
          placeholder="Contoh: Rp 5.000.000 - Rp 7.000.000 / bulan"
          style="width:100%;box-sizing:border-box;margin:7px 0 15px;padding:12px;border:1px solid #dbe2ea;border-radius:10px;"
        >

        <label>Pengalaman Kerja</label>
        <input
          id="jobExperience"
          placeholder="Contoh: Minimal 1 tahun"
          style="width:100%;box-sizing:border-box;margin:7px 0 15px;padding:12px;border:1px solid #dbe2ea;border-radius:10px;"
        >

        <label>Pendidikan Minimal</label>
        <input
          id="jobEducation"
          placeholder="Contoh: SMA / SMK / D3 / S1"
          style="width:100%;box-sizing:border-box;margin:7px 0 15px;padding:12px;border:1px solid #dbe2ea;border-radius:10px;"
        >

        <label>Deskripsi Pekerjaan</label>
        <textarea
          id="jobDescription"
          placeholder="Jelaskan pekerjaan dan tanggung jawabnya..."
          style="width:100%;box-sizing:border-box;height:100px;margin:7px 0 15px;padding:12px;border:1px solid #dbe2ea;border-radius:10px;resize:vertical;"
        ></textarea>

        <label>Syarat / Kualifikasi</label>
        <textarea
          id="jobRequirements"
          placeholder="Tuliskan persyaratan kandidat..."
          style="width:100%;box-sizing:border-box;height:100px;margin:7px 0 15px;padding:12px;border:1px solid #dbe2ea;border-radius:10px;resize:vertical;"
        ></textarea>

        <label>Batas Lamaran</label>
        <input
          id="jobDeadline"
          type="date"
          style="width:100%;box-sizing:border-box;margin:7px 0 20px;padding:12px;border:1px solid #dbe2ea;border-radius:10px;"
        >

        <div style="display:flex;gap:10px;">
          <button
            onclick="submitJobPost()"
            style="flex:1;padding:13px;border:0;border-radius:10px;background:#123b6d;color:white;font-weight:bold;cursor:pointer;"
          >
            Simpan Lowongan
          </button>

          <button
            onclick="this.closest('div[style*=fixed]').remove()"
            style="padding:13px 20px;border:1px solid #dbe2ea;border-radius:10px;background:white;cursor:pointer;"
          >
            Batal
          </button>
        </div>

      </div>
    </div>
  `;

  document.body.appendChild(form);
  translatePostJobForm(form);
}
async function submitJobPost() {
const title = document.getElementById("jobTitle").value.trim();
const city = document.getElementById("jobCity").value.trim();
const description = document.getElementById("jobDescription").value.trim();
const category = document.getElementById("jobCategory").value;
const jobType = document.getElementById("jobType").value;
const salary = document.getElementById("jobSalary").value.trim();
const experience = document.getElementById("jobExperience").value.trim();
const education = document.getElementById("jobEducation").value.trim();
const applicationDeadline = document.getElementById("jobDeadline").value;
const requirements = document.getElementById("jobRequirements").value.trim();

  if (!title || !city || !description) {
    alert("Judul lowongan, kota, dan deskripsi wajib diisi.");
    return;
  }

  const userData = localStorage.getItem("cariKerjakuUser");
  const accessToken = localStorage.getItem("cariKerjakuAccessToken");

  if (!userData || !accessToken) {
    alert("Sesi perusahaan tidak ditemukan. Silakan login kembali.");
    return;
  }

  const user = JSON.parse(userData);

  try {
    // 1. Buat transaksi pembayaran Midtrans
    const paymentResponse = await fetch(
      "https://ksqrimmecpriyepsuclc.supabase.co/functions/v1/create-midtrans-transaction",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
          "apikey": SUPABASE_KEY
        },
body: JSON.stringify({
  order_id: "JOB-" + Date.now(),
  gross_amount: 10000,
  job_title: title,
  city: city,
  description: description,
  category: category,
  job_type: jobType,
  salary: salary,
  experience: experience,
  education: education,
  application_deadline: applicationDeadline,
  requirements: requirements
})
      }
    );
  
    const paymentData = await paymentResponse.json();
    console.log("MIDTRANS RESPONSE:", paymentData);
    if (!paymentResponse.ok || !paymentData.token) {
      throw new Error(
        paymentData.error || "Gagal membuat pembayaran Midtrans."
      );
    }

   // 2. Buka halaman pembayaran Midtrans
    localStorage.setItem("pendingJobPost", JSON.stringify({
  title,
  city,
  description,
  category,
  job_type: jobType,
  salary,
  experience,
  education,
  application_deadline: applicationDeadline,
  requirements,
  user_id: user.id
}));
window.location.href = paymentData.redirect_url;
return;



} catch (error) {
  alert("Gagal memproses pembayaran: " + error.message);
}
}  

function translateCompanyDashboard() {
  const dashboard = document.getElementById("companyDashboard");
  if (!dashboard) return;

  const language = localStorage.getItem("siteLanguage") || "id";

 const translations = {
  "Tentang": "About",
  "Kontak": "Contact",
  "Masuk": "Login",
  "Daftar": "Register",
  "Cari Kerja": "Find a Job",
  "Cari": "Search",
  "Lowongan": "Jobs",
  "Perusahaan": "Companies",
  "Profil": "Profile",
  "Keluar": "Logout",

  "Dashboard Perusahaan": "Company Dashboard",
  "Selamat Datang 👋": "Welcome 👋",
  "Kelola lowongan dan kebutuhan rekrutmen perusahaan Anda.": "Manage your job openings and recruitment needs.",
  "Total Lowongan": "Total Jobs",
  "Lowongan Aktif": "Active Jobs",
  "Total Pelamar": "Total Applicants",
  "Lamaran Baru": "New Applications",
  "Kelola Perusahaan": "Manage Company",
  "Pilih menu yang ingin Anda kelola.": "Choose a menu to manage.",
  "Profil Perusahaan": "Company Profile",
  "Pasang Lowongan": "Post a Job",
  "Lowongan Saya": "My Jobs",
  "Lamaran Masuk": "Incoming Applications",

  "Belum Ada Lowongan": "No Jobs Available",
  "Belum ada lowongan nyata yang tersedia untuk pencarian ini.": "There are no real job openings available for this search.",
  "Silakan coba jenis pekerjaan atau kota lainnya.": "Please try another job type or city.",

  "Kembali": "Back",
  "Simpan": "Save",
  "Batal": "Cancel",
  "Edit": "Edit",
  "Hapus": "Delete",
  "Lihat": "View",
  "Lamar": "Apply",
  "Cari Lowongan": "Search Jobs",
  "Jenis Pekerjaan": "Job Type",
  "Kota": "City",
  "Semua Kota": "All Cities",
  "Semua Jenis Pekerjaan": "All Job Types"
};

  dashboard.querySelectorAll("*").forEach(element => {
    if (element.children.length === 0) {
      const text = element.textContent.trim();

      if (language === "en" && translations[text]) {
        element.textContent = translations[text];
      }

      if (language === "id") {
        const original = Object.keys(translations).find(
          key => translations[key] === text
        );
        if (original) element.textContent = original;
      }
    }
  });
}         

function translateCompanyProfile(profile) {
  if (!profile) return;

  const language = localStorage.getItem("siteLanguage") || "id";

const translations = {
  "Profil Perusahaan": "Company Profile",
  "Profil perusahaan Anda": "Your company profile",
  "Nama Perusahaan": "Company Name",
  "📧 Email": "📧 Email",
  "📞 Telepon": "📞 Phone",
  "🌐 Website": "🌐 Website",
  "📍 Kota": "📍 City",
  "🏠 Alamat": "🏠 Address",
  "Deskripsi": "Description",
  "Simpan Profil": "Save Profile",
  "Kembali": "Back"
};

  profile.querySelectorAll("*").forEach(element => {
    if (element.children.length === 0) {
      const text = element.textContent.trim();

      if (language === "en" && translations[text]) {
        element.textContent = translations[text];
      }

      if (language === "id") {
        const original = Object.keys(translations).find(
          key => translations[key] === text
        );
        if (original) element.textContent = original;
      }
    }
  });
}

function translatePostJobForm(form) {
  if (!form) return;

  const language = localStorage.getItem("siteLanguage") || "id";

  const translations = {
    "Pasang Lowongan": "Post a Job",
    "Lengkapi informasi pekerjaan yang ingin Anda tawarkan.": "Complete the job information you want to offer.",
    "Judul / Posisi Pekerjaan": "Job Title / Position",
    "Kategori Pekerjaan": "Job Category",
    "Pilih kategori": "Select category",
    "Lokasi / Kota": "Location / City",
    "Jenis Pekerjaan": "Job Type",
    "Pilih jenis pekerjaan": "Select job type",
    "Gaji": "Salary",
    "Pengalaman Kerja": "Work Experience",
    "Pendidikan Minimal": "Minimum Education",
    "Deskripsi Pekerjaan": "Job Description",
    "Syarat / Kualifikasi": "Requirements / Qualifications",
    "Batas Lamaran": "Application Deadline",
    "Simpan Lowongan": "Save Job",
    "Batal": "Cancel"
  };

  const placeholders = {
    "Contoh: Staff Administrasi": "Example: Administrative Staff",
    "Contoh: Jakarta": "Example: Jakarta",
    "Contoh: Rp 5.000.000 - Rp 7.000.000 / bulan": "Example: Rp 5,000,000 - Rp 7,000,000 / month",
    "Contoh: Minimal 1 tahun": "Example: At least 1 year",
    "Contoh: SMA / SMK / D3 / S1": "Example: High School / Diploma / Bachelor's",
    "Jelaskan pekerjaan dan tanggung jawabnya...": "Describe the job and responsibilities...",
    "Tuliskan persyaratan kandidat...": "Enter candidate requirements..."
  };

  form.querySelectorAll("*").forEach(element => {
    if (element.children.length === 0) {
      const text = element.textContent.trim();

      if (language === "en" && translations[text]) {
        element.textContent = translations[text];
      }

      if (language === "id") {
        const original = Object.keys(translations).find(
          key => translations[key] === text
        );
        if (original) element.textContent = original;
      }
    }
  });

  form.querySelectorAll("input, textarea").forEach(element => {
    const placeholder = element.getAttribute("placeholder");
    if (!placeholder) return;

    if (language === "en" && placeholders[placeholder]) {
      element.setAttribute("placeholder", placeholders[placeholder]);
    }

    if (language === "id") {
      const original = Object.keys(placeholders).find(
        key => placeholders[key] === placeholder
      );
      if (original) element.setAttribute("placeholder", original);
    }
  });

  form.querySelectorAll("option").forEach(option => {
    const text = option.textContent.trim();

    const optionTranslations = {
      "Administrasi": "Administration",
      "Pilih kategori": "Select category",
      "Teknologi": "Technology",
      "Kesehatan": "Healthcare",
      "Pendidikan": "Education",
      "Kuliner": "Culinary",
      "Lainnya": "Other"
    };

    if (language === "en" && optionTranslations[text]) {
      option.textContent = optionTranslations[text];
    }

    if (language === "id") {
      const original = Object.keys(optionTranslations).find(
        key => optionTranslations[key] === text
      );
      if (original) option.textContent = original;
    }
  });
}
