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
  "IT Project Manager",

  "HR Staff",
  "HR Officer",
  "HR Generalist",
  "HR Administrator",
  "HR Supervisor",
  "HR Manager",
  "HR Business Partner",
  "Recruitment Staff",
  "Recruitment Officer",
  "Recruitment Specialist",
  "Talent Acquisition Specialist",
  "Talent Management Specialist",
  "Training & Development Staff",
  "Compensation & Benefits Specialist",
  "Industrial Relations Staff",

  "Graphic Designer",
  "UI Designer",
  "UX Designer",
  "UI/UX Designer",
  "Web Designer",
  "Illustrator",
  "Art Director",
  "Creative Director",
  "Content Creator",
  "Content Writer",
  "Copywriter",
  "Video Editor",
  "Videographer",
  "Photographer",
  "Animator",

  "Guru SD",
  "Guru SMP",
  "Guru SMA",
  "Guru SMK",
  "Guru Bahasa Inggris",
  "Guru Matematika",
  "Guru Bahasa Indonesia",
  "Guru IPA",
  "Guru IPS",
  "Guru Pendidikan Anak Usia Dini (PAUD)",
  "Guru Taman Kanak-Kanak (TK)",
  "Tutor",
  "Instruktur Pelatihan",
  "Dosen",
  "Konselor Pendidikan",

  "Dokter Umum",
  "Dokter Spesialis",
  "Dokter Gigi",
  "Perawat",
  "Bidan",
  "Apoteker",
  "Asisten Apoteker",
  "Analis Laboratorium",
  "Radiografer",
  "Fisioterapis",
  "Terapis Okupasi",
  "Terapis Wicara",
  "Nutrisionis",
  "Ahli Gizi",
  "Psikolog",
  "Tenaga Kesehatan Masyarakat",
  "Rekam Medis",
  "Teknisi Elektromedis",
  "Sanitarian",
  "Teknisi Laboratorium Medis",

  "Mechanical Engineer",
  "Electrical Engineer",
  "Civil Engineer",
  "Industrial Engineer",
  "Chemical Engineer",
  "Environmental Engineer",
  "Automotive Engineer",
  "Mechatronics Engineer",
  "Electronics Engineer",
  "Instrumentation Engineer",
  "Structural Engineer",
  "Geotechnical Engineer",
  "Project Engineer",
  "Site Engineer",
  "Maintenance Engineer",
  "Process Engineer",
  "Production Engineer",
  "Quality Engineer",
  "Safety Engineer",
  "Engineering Supervisor",

  "Staff Produksi",
  "Operator Produksi",
  "Supervisor Produksi",
  "Production Manager",
  "Staff Quality Control",
  "Quality Control Inspector",
  "Quality Assurance Staff",
  "Quality Assurance Supervisor",
  "Production Planner",
  "Production Coordinator",
  "Machine Operator",
  "Operator CNC",
  "Teknisi Produksi",
  "Maintenance Staff",
  "Warehouse Production Staff",

  "Staff Logistik",
  "Staff Gudang",
  "Admin Gudang",
  "Warehouse Staff",
  "Warehouse Supervisor",
  "Warehouse Manager",
  "Logistics Staff",
  "Logistics Coordinator",
  "Logistics Supervisor",
  "Logistics Manager",
  "Inventory Staff",
  "Inventory Control Staff",
  "Purchasing Staff",
  "Procurement Staff",
  "Supply Chain Staff",

  "Driver",
  "Driver Pribadi",
  "Driver Operasional",
  "Driver Truck",
  "Driver Bus",
  "Kurir",
  "Kurir Motor",
  "Dispatcher",
  "Fleet Coordinator",
  "Fleet Manager",
  "Traffic Controller",
  "Operator Transportasi",

  "Front Office Staff",
  "Front Office Supervisor",
  "Hotel Receptionist",
  "Concierge",
  "Housekeeping Staff",
  "Housekeeping Supervisor",
  "Hotel Manager",
  "Guest Relations Officer",
  "Travel Consultant",
  "Travel Agent Staff",
  "Tour Guide",
  "Tour Coordinator",
  "Reservation Staff",
  "Event Organizer Staff",
  "Event Planner",

  "Chef",
  "Sous Chef",
  "Cook",
  "Cook Helper",
  "Baker",
  "Pastry Chef",
  "Pastry Cook",
  "Barista",
  "Bartender",
  "Waiter / Waitress",
  "Restaurant Supervisor",
  "Restaurant Manager",
  "Kitchen Supervisor",
  "Food & Beverage Staff",
  "Food & Beverage Supervisor",

  "Retail Staff",
  "Store Staff",
  "Store Supervisor",
  "Store Manager",
  "Cashier",
  "Sales Associate",
  "Retail Sales Staff",
  "Merchandiser",
  "Visual Merchandiser",
  "E-Commerce Specialist",
  "Marketplace Specialist",
  "Marketplace Admin",
  "Online Sales Staff",
  "E-Commerce Admin",
  "Customer Service E-Commerce",

  "Security Officer",
  "Security Supervisor",
  "Security Manager",
  "Petugas Parkir",
  "Petugas Keamanan Gedung",
  "Petugas Kebersihan",
  "Cleaning Service",
  "Cleaning Supervisor",
  "Teknisi Kebersihan Gedung",
  "Facility Staff"
];

const locations = [
  "Banda Aceh",
  "Lhokseumawe",
  "Langsa",
  "Sabang",
  "Medan",
  "Binjai",
  "Pematangsiantar",
  "Tebing Tinggi",
  "Tanjungbalai",
  "Sibolga",
  "Padang",
  "Bukittinggi",
  "Payakumbuh",
  "Padang Panjang",
  "Pariaman",
  "Solok",
  "Pekanbaru",
  "Dumai",
  "Jambi",
  "Sungai Penuh",
  "Palembang",
  "Lubuklinggau",
  "Pagar Alam",
  "Prabumulih",
  "Bengkulu",
  "Bandar Lampung",
  "Metro",
  "Pangkalpinang",
  "Batam",
  "Tanjungpinang",

  "Serang",
  "Cilegon",
  "Tangerang",
  "Tangerang Selatan",
  "Jakarta Pusat",
  "Jakarta Utara",
  "Jakarta Barat",
  "Jakarta Selatan",
  "Jakarta Timur",
  "Bandung",
  "Bekasi",
  "Bogor",
  "Depok",
  "Cimahi",
  "Sukabumi",
  "Cirebon",
  "Tasikmalaya",
  "Banjar",
  "Karawang",
  "Purwakarta",
  "Subang",
  "Indramayu",
  "Majalengka",
  "Kuningan",
  "Sumedang",
  "Garut",
  "Cianjur",
  "Semarang",
  "Surakarta",
  "Salatiga",
  "Magelang",
  "Pekalongan",
  "Tegal",
  "Wonosobo",
  "Purwokerto",
  "Cilacap",
  "Kebumen",
  "Banyumas",
  "Klaten",
  "Boyolali",
  "Sukoharjo",
  "Wonogiri",
  "Sragen",
  "Karanganyar",
  "Kudus",
  "Jepara",
  "Pati",
  "Rembang",
  "Blora",
  "Grobogan",
  "Demak",
  "Temanggung",
  "Kendal",
  "Batang",
  "Pemalang",
  "Brebes",
  "Yogyakarta",
  "Sleman",
  "Bantul",
  "Kulon Progo",
  "Gunungkidul",
  "Surabaya",
  "Malang",
  "Batu",
  "Kediri",
  "Blitar",
  "Madiun",
  "Mojokerto",
  "Pasuruan",
  "Probolinggo",
  "Lumajang",
  "Jember",
  "Banyuwangi",
  "Bondowoso",
  "Situbondo",
  "Sidoarjo",
  "Gresik",
  "Lamongan",
  "Tuban",
  "Bojonegoro",
  "Ngawi",
  "Magetan",
  "Ponorogo",
  "Trenggalek",
  "Tulungagung",
  "Nganjuk",
  "Jombang",
  "Bangkalan",
  "Sampang",
  "Pamekasan",
  "Sumenep",

  "Denpasar",
  "Badung",
  "Gianyar",
  "Tabanan",
  "Bangli",
  "Klungkung",
  "Karangasem",
  "Buleleng",
  "Jembrana",
  "Mataram",
  "Bima",
  "Dompu",
  "Lombok Barat",
  "Lombok Tengah",
  "Lombok Timur",
  "Lombok Utara",
  "Sumbawa",
  "Sumbawa Barat",
  "Kupang",
  "Ende",
  "Maumere",
  "Labuan Bajo",
  "Ruteng",
  "Bajawa",
  "Waingapu",
  "Waikabubak",
  "Atambua",
  "Kefamenanu",
  "Soe",
  "Lembata",
  "Alor",
  "Rote",

  "Pontianak",
  "Singkawang",
  "Ketapang",
  "Sintang",
  "Sanggau",
  "Sekadau",
  "Kapuas Hulu",
  "Melawi",
  "Bengkayang",
  "Sambas",
  "Mempawah",
  "Kubu Raya",
  "Landak",
  "Palangka Raya",
  "Sampit",
  "Pangkalan Bun",
  "Kuala Kapuas",
  "Muara Teweh",
  "Buntok",
  "Kasongan",
  "Kuala Kurun",
  "Pulang Pisau",
  "Sukamara",
  "Lamandau",
  "Banjarmasin",
  "Banjarbaru",
  "Martapura",
  "Pelaihari",
  "Batulicin",
  "Kotabaru",
  "Kandangan",
  "Barabai",
  "Amuntai",
  "Rantau",
  "Samarinda",
  "Balikpapan",
  "Bontang",
  "Berau",
  "Sangatta",
  "Tenggarong",
  "Penajam",
  "Tanah Grogot",
  "Sendawar",
  "Tarakan",
  "Tanjung Selor",
  "Nunukan",
  "Malinau",

  "Manado",
  "Bitung",
  "Tomohon",
  "Kotamobagu",
  "Airmadidi",
  "Tondano",
  "Tahuna",
  "Melonguane",
  "Gorontalo",
  "Limboto",
  "Tilamuta",
  "Marisa",
  "Suwawa",
  "Palu",
  "Poso",
  "Luwuk",
  "Donggala",
  "Toli-Toli",
  "Parigi",
  "Ampana",
  "Buol",
  "Morowali",
  "Banggai",
  "Makassar",
  "Parepare",
  "Palopo",
  "Bone",
  "Gowa",
  "Maros",
  "Bulukumba",
  "Bantaeng",
  "Jeneponto",
  "Takalar",
  "Sinjai",
  "Soppeng",
  "Wajo",
  "Pinrang",
  "Enrekang",
  "Tana Toraja",
  "Toraja Utara",
  "Barru",
  "Kendari",
  "Baubau",
  "Kolaka",
  "Konawe",
  "Konawe Selatan",
  "Bombana",
  "Muna",
  "Wakatobi",
  "Buton",
  "Mamuju",
  "Majene",
  "Polewali Mandar",
  "Mamasa",
  "Pasangkayu",
  "Mamuju Tengah",

  "Ambon",
  "Tual",
  "Masohi",
  "Namlea",
  "Piru",
  "Dobo",
  "Saumlaki",
  "Ternate",
  "Tidore",
  "Sofifi",
  "Tobelo",
  "Labuha",
  "Sanana",
  "Weda",
  "Jayapura",
  "Merauke",
  "Biak",
  "Timika",
  "Nabire",
  "Wamena",
  "Sentani",
  "Manokwari",
  "Sorong",
  "Fakfak",
  "Kaimana",
  "Bintuni",
  "Teminabuan",
  "Paniai",
  "Oksibil",
  "Elelim",
  "Kenyam",
  "Tanah Merah",
  "Raja Ampat",
  "Tambrauw",
  "Maybrat"
];

const jobs = [];

const jobsGrid = document.querySelector("#jobsGrid");
const emptyState = document.querySelector("#emptyState");
const jobCount = document.querySelector("#jobCount");
const categoryFilter = document.querySelector("#categoryFilter");
const keyword = document.querySelector("#keyword");
const locationInput = document.querySelector("#location");

function renderJobs(list = jobs, isSearch = false) {
  jobsGrid.innerHTML = "";
  jobCount.textContent = list.length;

  if (list.length === 0 && isSearch) {
    jobsGrid.innerHTML = `
      <div style="
        text-align:center;
        padding:30px;
        grid-column:1/-1;
      ">
        <h3>Lowongan Belum Tersedia</h3>
        <p>
          Belum ada lowongan nyata yang tersedia untuk pencarian ini.
        </p>
        <p>
          Silakan coba jenis pekerjaan atau kota lainnya.
        </p>
      </div>
    `;

    emptyState.classList.add("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  list.forEach((job, i) => {
    const card = document.createElement("article");
    card.className = "job-card";

    card.innerHTML = `
      <div class="job-top">
        <div class="company-logo">
          ${job.initials || job.company.substring(0, 2).toUpperCase()}
        </div>

        <span class="pill">${job.type}</span>
      </div>

      <h3>${job.title}</h3>

      <div class="company">
        ${job.company}
      </div>

      <div class="job-meta">
        <span>📍 ${job.location}</span>
        <span>▣ ${job.category}</span>
      </div>

      <div class="salary">
        ${job.salary}
      </div>

      <div class="job-actions">
        <button data-details="${i}">
          Lihat detail
        </button>

        <button data-apply="${i}">
          Lamar →
        </button>
      </div>
    `;

    jobsGrid.appendChild(card);
  });
}

function filterJobs() {
  const q = keyword.value.trim().toLowerCase();
  const loc = locationInput.value.trim().toLowerCase();
  const cat = categoryFilter.value;

  const filtered = jobs.filter(j => {
    const text =
      `${j.title} ${j.company} ${j.category}`.toLowerCase();

    const matchKeyword =
      !q || text.includes(q);

    const matchCategory =
      cat === "all" || j.category === cat;

    const matchLocation =
      !loc ||
      j.location.toLowerCase().includes(loc) ||
      (
        loc === "indonesia" &&
        j.location.toLowerCase() === "remote"
      );

    return (
      matchKeyword &&
      matchCategory &&
      matchLocation
    );
  });

  renderJobs(filtered, true);
}

document.querySelector("#searchForm").addEventListener("submit", e => {
  e.preventDefault();
  filterJobs();
});

const modal = document.querySelector("#authModal");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
const authForm = document.querySelector("#authForm");

let isRegister = false;
let isCompany = false;

const companyAccountBtn =
  document.querySelector("#companyAccount");

const jobseekerAccountBtn =
  document.querySelector("#jobseekerAccount");

const companyFields =
  document.querySelector("#companyFields");

companyAccountBtn.addEventListener("click", () => {
  isCompany = true;

  companyFields.style.display = "block";

  modalTitle.textContent = "Daftar Perusahaan";

  modalText.textContent =
    "Buat akun perusahaan untuk memasang lowongan.";
});

jobseekerAccountBtn.addEventListener("click", () => {
  isCompany = false;

  companyFields.style.display = "none";
});

function openModal(title, text) {
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

async function submitApplication(job) {
  const accessToken =
    localStorage.getItem("cariKerjakuAccessToken");

  const userData =
    localStorage.getItem("cariKerjakuUser");

  if (!accessToken || !userData) {
    openModal(
      "Masuk",
      "Silakan masuk terlebih dahulu sebelum melamar pekerjaan."
    );

    authForm.classList.remove("hidden");

    document
      .querySelector(".switch-auth")
      .classList.remove("hidden");

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
    alert(
      "Data akun tidak ditemukan. Silakan login kembali."
    );
    return;
  }

  try {
    const response = await fetch(
      SUPABASE_APPLICATIONS_URL,
      {
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
      }
    );

    if (!response.ok) {
      const data =
        await response.json().catch(() => ({}));

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
    alert(
      "Gagal mengirim lamaran: " +
      error.message
    );
  }
}

jobsGrid.addEventListener("click", e => {
  const details =
    e.target.closest("[data-details]");

  const apply =
    e.target.closest("[data-apply]");

  const idx = Number(
    (details || apply)?.dataset[
      details ? "details" : "apply"
    ]
  );

  if (!Number.isInteger(idx)) {
    return;
  }

  const job = jobs[idx];

  if (apply) {
    submitApplication(job);
  } else {
    document.getElementById(
      "jobDetailTitle"
    ).textContent = job.title;

    document.getElementById(
      "jobDetailCompany"
    ).textContent = job.company;

    document.getElementById(
      "jobDetailLocation"
    ).textContent =
      `📍 ${job.location}`;

    document.getElementById(
      "jobDetailType"
    ).textContent =
      `💼 ${job.type}`;

    document.getElementById(
      "jobDetailSalary"
    ).textContent =
      `💰 ${job.salary}`;

    document.getElementById(
      "jobDetailDescription"
    ).textContent =
      job.description ||
      "Deskripsi pekerjaan belum tersedia.";

    document.getElementById(
      "jobDetailRequirements"
    ).textContent =
      job.requirements ||
      "Persyaratan belum tersedia.";

    document.getElementById(
      "jobDetailApply"
    ).onclick = () => {
      submitApplication(job);

      document
        .getElementById("jobDetailModal")
        .classList.add("hidden");
    };

    document
      .getElementById("jobDetailModal")
      .classList.remove("hidden");
  }
});

 document.querySelector("#loginBtn").addEventListener("click", () => {
  isRegister = false;
  isCompany = false;

  companyFields.style.display = "none";

  modalTitle.textContent = "Masuk";
  modalText.textContent =
    "Masukkan email dan password untuk masuk.";

  authForm.classList.remove("hidden");
  document
    .querySelector(".switch-auth")
    .classList.remove("hidden");

  modal.classList.remove("hidden");
});

document.querySelector("#registerBtn").addEventListener("click", () => {
  isRegister = true;
  isCompany = false;

  companyFields.style.display = "none";

  modalTitle.textContent = "Daftar";
  modalText.textContent =
    "Buat akun untuk mulai melamar pekerjaan.";

  authForm.classList.remove("hidden");
  document
    .querySelector(".switch-auth")
    .classList.remove("hidden");

  modal.classList.remove("hidden");
});

document.querySelector("#switchAuth").addEventListener("click", () => {
  isRegister = !isRegister;

  modalTitle.textContent =
    isRegister ? "Daftar" : "Masuk";

  modalText.textContent =
    isRegister
      ? "Buat akun untuk mulai melamar pekerjaan."
      : "Masukkan email dan password untuk masuk.";

  document.querySelector("#switchAuth").textContent =
    isRegister ? "Masuk" : "Daftar";

  if (!isRegister) {
    isCompany = false;
    companyFields.style.display = "none";
  }
});

document.querySelector("#closeModal").addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

document
  .querySelector("#closeJobDetail")
  .addEventListener("click", () => {
    document
      .querySelector("#jobDetailModal")
      .classList.add("hidden");
  });

document
  .querySelector("#jobDetailModal")
  .addEventListener("click", e => {
    const jobDetailModal =
      document.querySelector("#jobDetailModal");

    if (e.target === jobDetailModal) {
      jobDetailModal.classList.add("hidden");
    }
  });

authForm.addEventListener("submit", async e => {
  e.preventDefault();

  const emailInput =
    document.querySelector('input[type="email"]');

  const passwordInput =
    document.querySelector('input[type="password"]');

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  const companyName =
    document.querySelector("#companyName")?.value.trim() || "";

  const companyPhone =
    document.querySelector("#companyPhone")?.value.trim() || "";

  const companyWebsite =
    document.querySelector("#companyWebsite")?.value.trim() || "";

  const companyCity =
    document.querySelector("#companyCity")?.value.trim() || "";

  const companyAddress =
    document.querySelector("#companyAddress")?.value.trim() || "";

  const authUrl =
    SUPABASE_URL.replace(
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
      isCompany = false;

      companyFields.style.display = "none";

      modalTitle.textContent = "Masuk";

      modalText.textContent =
        "Masukkan email dan password untuk masuk.";

      document.querySelector("#switchAuth").textContent =
        "Daftar";

      return;
    }

    localStorage.setItem(
      "cariKerjakuAccessToken",
      data.access_token || ""
    );

    localStorage.setItem(
      "cariKerjakuUser",
      JSON.stringify(data.user || {})
    );

    if (isCompany) {
      const companyResponse = await fetch(
        `${SUPABASE_URL}companies`,
        {
          method: "POST",
          headers: {
            apikey: SUPABASE_KEY,
            Authorization:
              `Bearer ${data.access_token}`,
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
        }
      );

      if (!companyResponse.ok) {
        const companyError =
          await companyResponse.text();

        throw new Error(companyError);
      }

      modal.classList.add("hidden");

      showCompanyDashboard();

      return;
    }

    modal.classList.add("hidden");

    showJobseekerDashboard();

    alert("Login berhasil!");

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
            "
          >
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

  const uploadBtn =
    document.querySelector("#uploadCvBtn");

  const fileInput =
    document.querySelector("#cvFileInput");

  const status =
    document.querySelector("#cvStatus");

  uploadBtn.addEventListener("click", async () => {
    const file = fileInput.files[0];

    if (!file) {
      status.textContent =
        "Pilih file CV terlebih dahulu.";
      return;
    }

    if (file.type !== "application/pdf") {
      status.textContent =
        "CV harus berupa file PDF.";
      return;
    }

    const token =
      localStorage.getItem(
        "cariKerjakuAccessToken"
      );

    const userData =
      localStorage.getItem(
        "cariKerjakuUser"
      );

    if (!token || !userData) {
      status.textContent =
        "Silakan login terlebih dahulu.";
      return;
    }

    let user;

    try {
      user = JSON.parse(userData);
    } catch {
      status.textContent =
        "Data akun tidak valid. Silakan login kembali.";
      return;
    }

    if (!user.id) {
      status.textContent =
        "ID pengguna tidak ditemukan.";
      return;
    }

    try {
      status.textContent =
        "Mengupload CV...";

      const filePath =
        `${user.id}/${Date.now()}_${file.name}`;

      const uploadResponse = await fetch(
        `${SUPABASE_URL.replace(
          "/rest/v1/",
          "/storage/v1/object/cv/"
        )}${filePath}`,
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
        const errorText =
          await uploadResponse.text();

        throw new Error(errorText);
      }

      status.textContent =
        "CV berhasil diupload.";

    } catch (error) {
      status.textContent =
        "Gagal upload CV: " +
        error.message;
    }
  });
}

async function submitJobPost() {
  const title = document.getElementById("jobTitle")?.value.trim() || "";
  const city = document.getElementById("jobCity")?.value.trim() || "";
  const description =
    document.getElementById("jobDescription")?.value.trim() || "";
  const category =
    document.getElementById("jobCategory")?.value || "";
  const jobType =
    document.getElementById("jobType")?.value || "";
  const salary =
    document.getElementById("jobSalary")?.value.trim() || "";
  const experience =
    document.getElementById("jobExperience")?.value.trim() || "";
  const education =
    document.getElementById("jobEducation")?.value.trim() || "";
  const applicationDeadline =
    document.getElementById("jobDeadline")?.value || "";
  const requirements =
    document.getElementById("jobRequirements")?.value.trim() || "";

  if (!title || !city || !description) {
    alert("Judul lowongan, kota, dan deskripsi wajib diisi.");
    return;
  }

  const userData = localStorage.getItem("cariKerjakuUser");
  const accessToken =
    localStorage.getItem("cariKerjakuAccessToken");

  if (!userData || !accessToken) {
    alert(
      "Sesi perusahaan tidak ditemukan. Silakan login kembali."
    );
    return;
  }

  let user;

  try {
    user = JSON.parse(userData);
  } catch {
    alert(
      "Data akun tidak valid. Silakan login kembali."
    );
    return;
  }

  if (!user.id) {
    alert(
      "ID perusahaan tidak ditemukan. Silakan login kembali."
    );
    return;
  }

  const orderId = "JOB-" + Date.now();

  try {
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
          order_id: orderId,
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

    const paymentText = await paymentResponse.text();

    let paymentData = {};

    try {
      paymentData = JSON.parse(paymentText);
    } catch {
      throw new Error(
        "Respons pembayaran dari server tidak valid."
      );
    }

    console.log(
      "MIDTRANS RESPONSE:",
      paymentData
    );

    if (!paymentResponse.ok) {
      throw new Error(
        paymentData.error ||
        paymentData.message ||
        "Gagal membuat pembayaran Midtrans."
      );
    }

    if (!paymentData.token) {
      throw new Error(
        paymentData.error ||
        "Token pembayaran Midtrans tidak ditemukan."
      );
    }

    /*
      Simpan data lowongan sementara.
      Data ini dipakai setelah proses pembayaran selesai.
    */
    localStorage.setItem(
      "pendingJobPost",
      JSON.stringify({
        order_id: orderId,
        title: title,
        city: city,
        description: description,
        category: category,
        job_type: jobType,
        salary: salary,
        experience: experience,
        education: education,
        application_deadline: applicationDeadline,
        requirements: requirements,
        user_id: user.id
      })
    );

    /*
      Simpan token Midtrans untuk berjaga-jaga
      apabila halaman pembayaran perlu dibuka kembali.
    */
    localStorage.setItem(
      "pendingMidtransToken",
      paymentData.token
    );

    /*
      Tutup form pembayaran sebelum pindah halaman.
    */
    const postJobOverlay =
      document.querySelector(
        'div[style*="position:fixed"]'
      );

    if (postJobOverlay) {
      postJobOverlay.remove();
    }

    /*
      Gunakan redirect_url dari Midtrans
      apabila tersedia.
    */
    if (paymentData.redirect_url) {
      window.location.href =
        paymentData.redirect_url;
      return;
    }

    /*
      Fallback jika redirect_url tidak diberikan.
    */
    alert(
      "Pembayaran berhasil dibuat, tetapi halaman pembayaran tidak ditemukan."
    );

  } catch (error) {
    console.error(
      "SUBMIT JOB ERROR:",
      error
    );

    alert(
      "Gagal memproses pembayaran: " +
      (error.message || "Terjadi kesalahan.")
    );
  }
}



// ================= DASHBOARD PERUSAHAAN =================

function showCompanyDashboard() {
  const dashboard = document.createElement("div");

  dashboard.id = "companyDashboard";

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
            Dashboard Perusahaan
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
            Selamat Datang 👋
          </h1>

          <p style="
            margin-top:8px;
            color:#64748b;
            font-size:16px;
          ">
            Kelola lowongan dan kebutuhan rekrutmen perusahaan Anda.
          </p>
        </div>

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
}
// ================= FUNGSI GLOBAL =================

window.showCompanyDashboard = showCompanyDashboard;
window.showCompanyProfile = showCompanyProfile;
window.showPostJobForm = showPostJobForm;
window.showMyJobs = showMyJobs;
window.submitJobPost = submitJobPost;
window.companyLogout = companyLogout;
