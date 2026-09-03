const SUPABASE_URL = "https://ksqrimmecpriyepsuclc.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_xvPQL9oniSRwZoqmSc5W4A_NS9ldWIL";

const supabaseHeaders = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json"
};

const SUPABASE_JOBS_URL = `${SUPABASE_URL}jobs`;
const SUPABASE_APPLICATIONS_URL = `${SUPABASE_URL}applications`;
let jobs = [];

async function loadJobsFromDatabase() {
  try {
    const response = await fetch(
`${SUPABASE_JOBS_URL}?select=*`,
      {
        method: "GET",
        headers: supabaseHeaders
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const data = await response.json();

    jobs = data.map(job => ({
      ...job,

      // Sesuaikan nama field database dengan yang dipakai tampilan website
      title: job.title || "",
      company: job.company || job.company_name || "Perusahaan",
      location: job.location || job.city || "",
      category: job.category || "",
      type: job.type || job.job_type || "",
      salary: job.salary || "",
      initials: (job.company || job.company_name || "P")
        .substring(0, 2)
        .toUpperCase()
    }));

renderJobs(jobs);

// Tampilkan lowongan terbaru di kotak biru saat halaman pertama dibuka
if (!hasSearched && jobs.length > 0) {
  const featuredJob = document.querySelector("#featuredJob");

  if (featuredJob) {
const now = new Date();

const recentJobs = jobs.filter(job => {
  const postedDate = new Date(job.created_at || job.createdAt || 0);

  if (!job.created_at && !job.createdAt) return false;

  const oneMonthAgo = new Date(now);
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  return postedDate >= oneMonthAgo;
});

const latestJob = [...recentJobs].sort((a, b) => {
  const dateA = new Date(a.created_at || a.createdAt);
  const dateB = new Date(b.created_at || b.createdAt);
  return dateB - dateA;
})[0];
    if (!latestJob) {
  featuredJob.innerHTML = `
    <div style="text-align:center;padding:30px 15px;">
      <div style="font-size:42px;margin-bottom:10px;">🔎</div>
      <h3 style="margin:0 0 8px;">
        ${localStorage.getItem("siteLanguage") === "en"
          ? "No Recent Jobs"
          : "Belum Ada Lowongan Terbaru"}
      </h3>
      <p style="margin:0;color:#64748b;">
        ${localStorage.getItem("siteLanguage") === "en"
          ? "There are no jobs posted within the last month."
          : "Belum ada lowongan yang dipasang dalam 1 bulan terakhir."}
      </p>
    </div>
  `;
  return;
}

    featuredJob.innerHTML = `
      <div class="featured-job-card" style="
        background:linear-gradient(145deg,#123b6d 0%,#0b2b50 100%);
        color:#fff;
        border-radius:22px;
        padding:24px;
        text-align:left;
        box-shadow:0 14px 35px rgba(18,59,109,.28);
        border:1px solid rgba(255,255,255,.12);
        position:relative;
        overflow:hidden;
      ">
        <div style="
          position:absolute;
          width:150px;
          height:150px;
          border-radius:50%;
          background:rgba(255,255,255,.06);
          right:-65px;
          top:-65px;
        "></div>

        <div style="
          position:relative;
          z-index:1;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:10px;
          margin-bottom:20px;
        ">
          <span style="
            background:rgba(255,255,255,.14);
            padding:7px 11px;
            border-radius:999px;
            font-size:11px;
            font-weight:700;
            letter-spacing:.5px;
          ">
            ✦ ${localStorage.getItem("siteLanguage") === "en"
              ? "LATEST JOB"
              : "LOWONGAN TERBARU"}
          </span>

          <span style="
            background:rgba(255,255,255,.09);
            padding:7px 10px;
            border-radius:999px;
            font-size:11px;
            color:#dbeafe;
          ">
            ${latestJob.type || "Full-time"}
          </span>
        </div>

        <div style="
          position:relative;
          z-index:1;
          width:56px;
          height:56px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:16px;
          background:rgba(255,255,255,.13);
          font-size:24px;
          margin-bottom:15px;
        ">
          ${latestJob.initials || "💼"}
        </div>

        <div style="position:relative;z-index:1;">

          <h3 style="
            margin:0 0 6px;
            font-size:23px;
            line-height:1.25;
            color:#fff;
          ">
            ${latestJob.title}
          </h3>

          <p style="
            margin:0 0 16px;
            font-size:14px;
            font-weight:600;
            color:rgba(255,255,255,.78);
          ">
            ${latestJob.company}
          </p>
          <div style="
  font-size:12px;
  color:rgba(255,255,255,.65);
  margin-bottom:14px;
">
  ${latestJob.created_at
    ? (
        localStorage.getItem("siteLanguage") === "en"
          ? `Posted ${new Date(latestJob.created_at).toLocaleString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            })}`
          : `Diposting ${new Date(latestJob.created_at).toLocaleString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            })}`
      )
    : ""}
</div>

          <div style="
            display:flex;
            flex-wrap:wrap;
            gap:7px;
            margin-bottom:14px;
          ">
            <span style="
              background:rgba(255,255,255,.09);
              padding:7px 9px;
              border-radius:8px;
              font-size:12px;
              color:#e8f1fb;
            ">
              📍 ${latestJob.location}
            </span>

            <span style="
              background:rgba(255,255,255,.09);
              padding:7px 9px;
              border-radius:8px;
              font-size:12px;
              color:#e8f1fb;
            ">
              ▣ ${latestJob.category}
            </span>
          </div>

          <div style="
            font-size:14px;
            font-weight:700;
            color:#fff;
            margin-bottom:12px;
          ">
            💰 ${latestJob.salary ||
              (localStorage.getItem("siteLanguage") === "en"
                ? "Salary according to company policy"
                : "Gaji sesuai ketentuan perusahaan")}
          </div>

          <p style="
            margin:0 0 20px;
            font-size:13px;
            line-height:1.65;
            color:rgba(255,255,255,.72);
            display:-webkit-box;
            -webkit-line-clamp:3;
            -webkit-box-orient:vertical;
            overflow:hidden;
          ">
            ${latestJob.description ||
              (localStorage.getItem("siteLanguage") === "en"
                ? "Discover this career opportunity and join this company."
                : "Temukan peluang karier ini dan bergabung bersama perusahaan.")}
          </p>

          <div style="display:flex;gap:9px;">

            <button
              type="button"
              class="featured-details-btn"
              data-details="${jobs.indexOf(latestJob)}"
              style="
                flex:1;
                min-height:44px;
                border-radius:11px;
                border:1px solid rgba(255,255,255,.22);
                background:rgba(255,255,255,.10);
                color:#fff;
                font-size:13px;
                font-weight:700;
                cursor:pointer;
              "
            >
            ${localStorage.getItem("siteLanguage") === "en"
                ? "View Details"
                : "Lihat Detail"} 
            </button>

            <button
              type="button"
              class="featured-apply-btn"
              data-apply="${jobs.indexOf(latestJob)}"
              style="
                flex:1;
                min-height:44px;
                border-radius:11px;
                border:1px solid #fff;
                background:#fff;
                color:#123b6d;
                font-size:13px;
                font-weight:700;
                cursor:pointer;
              "
            >
              ${localStorage.getItem("siteLanguage") === "en"
                ? "Apply →"
                : "Lamar →"}
            </button>

          </div>

        </div>
      </div>
    `;
  }
}

console.log("LOWONGAN DARI DATABASE:", jobs);
    
  } catch (error) {
    console.error("Gagal mengambil lowongan:", error);
    jobs = [];
    renderJobs([]);
  }
}

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
    "Purchasing Staff",
  "Purchasing Officer",
  "Purchasing Supervisor",
  "Purchasing Manager",
  "Procurement Staff",
  "Procurement Officer",
  "Procurement Specialist",
  "Procurement Supervisor",
  "Procurement Manager",
  "Buyer",
  "Strategic Sourcing Specialist",
  "Supply Chain Staff",
  "Supply Chain Analyst",
  "Supply Chain Coordinator",
  "Supply Chain Supervisor",
  "Supply Chain Manager",
  "Logistics Staff",
  "Logistics Coordinator",
  "Logistics Officer",
  "Logistics Supervisor",
  "Logistics Manager",
  "Warehouse Staff",
  "Warehouse Operator",
  "Warehouse Coordinator",
  "Warehouse Supervisor",
  "Warehouse Manager",
  "Inventory Staff",
  "Inventory Control Staff",
  "Inventory Analyst",
  "Inventory Supervisor",

  "Production Staff",
  "Production Operator",
  "Production Technician",
  "Production Supervisor",
  "Production Manager",
  "Manufacturing Staff",
  "Manufacturing Engineer",
  "Process Engineer",
  "Industrial Engineer",
  "Maintenance Technician",
  "Maintenance Engineer",
  "Maintenance Supervisor",
  "Quality Control Staff",
  "Quality Control Inspector",
  "Quality Control Analyst",
  "Quality Assurance Staff",
  "Quality Assurance Specialist",
  "Quality Assurance Manager",
  "HSE Staff",
  "HSE Officer",
  "Safety Officer",
  "Safety Supervisor",
  "Health and Safety Manager",
  "Machine Operator",
  "CNC Operator",
  "Production Planner",
  "Production Planner Supervisor",
  "Production Coordinator",
  "Factory Supervisor",
  "Factory Manager",

  "Human Resources Staff",
  "HR Administrator",
  "HR Officer",
  "HR Generalist",
  "HR Specialist",
  "HR Supervisor",
  "HR Manager",
  "Recruitment Staff",
  "Recruitment Specialist",
  "Recruitment Consultant",
  "Recruitment Supervisor",
  "Talent Acquisition Specialist",
  "Talent Management Specialist",
  "Training Officer",
  "Learning and Development Specialist",
  "Compensation and Benefits Specialist",
  "Industrial Relations Officer",
  "Employee Relations Officer",
  "HR Business Partner",
  "People Operations Specialist",

  "Legal Staff",
  "Legal Officer",
  "Legal Counsel",
  "Corporate Lawyer",
  "Legal Administrator",
  "Compliance Officer",
  "Compliance Specialist",
  "Risk Management Officer",
  "Risk Analyst",
  "Risk Manager",
  "Contract Administrator",
  "Contract Specialist",
  "Company Secretary",
  "Government Relations Officer",

  "Graphic Designer",
  "Visual Designer",
  "Creative Designer",
  "Art Director",
  "Illustrator",
  "Photographer",
  "Videographer",
  "Video Editor",
  "Motion Graphic Designer",
  "Animator",
  "3D Designer",
  "Interior Designer",
  "Fashion Designer",
  "Copywriter",
  "Content Writer",
  "Technical Writer",
  "Editor",
  "Proofreader",

  "Architect",
  "Civil Engineer",
  "Mechanical Engineer",
  "Electrical Engineer",
  "Electronics Engineer",
  "Chemical Engineer",
  "Environmental Engineer",
  "Geotechnical Engineer",
  "Structural Engineer",
  "Project Engineer",
  "Site Engineer",
  "Quantity Surveyor",
  "Surveyor",
  "Construction Supervisor",
  "Construction Manager",
  "Site Manager",
  "Project Coordinator",

  "Teacher",
  "Tutor",
  "Private Tutor",
  "Lecturer",
  "Academic Coordinator",
  "School Administrator",
  "School Counselor",
  "Education Consultant",
  "Curriculum Developer",
  "Trainer",
  "Instructor",

  "Nurse",
  "Midwife",
  "Pharmacist",
  "Pharmacy Assistant",
  "Medical Assistant",
  "Medical Secretary",
  "Laboratory Technician",
  "Radiology Technician",
  "Dental Assistant",
  "Physiotherapist",
  "Nutritionist",
  "Psychologist",
  "Caregiver",
  "Home Caregiver",
  "Healthcare Administrator",

  "Driver",
  "Personal Driver",
  "Truck Driver",
  "Delivery Driver",
  "Courier",
  "Courier Coordinator",
  "Dispatcher",
  "Fleet Administrator",
  "Fleet Supervisor",
  "Fleet Manager",
  "Motorcycle Courier",

  "Waiter",
  "Waitress",
  "Barista",
  "Chef",
  "Cook",
  "Kitchen Staff",
  "Kitchen Supervisor",
  "Restaurant Supervisor",
  "Restaurant Manager",
  "Hotel Staff",
  "Hotel Receptionist",
  "Housekeeping Staff",
  "Housekeeping Supervisor",
  "Event Staff",
  "Event Coordinator",
  "Event Manager"
];
const cities = [
  "Kabupaten Aceh Barat",
  "Kabupaten Aceh Barat Daya",
  "Kabupaten Aceh Besar",
  "Kabupaten Aceh Jaya",
  "Kabupaten Aceh Selatan",
  "Kabupaten Aceh Singkil",
  "Kabupaten Aceh Tamiang",
  "Kabupaten Aceh Tengah",
  "Kabupaten Aceh Tenggara",
  "Kabupaten Aceh Timur",
  "Kabupaten Aceh Utara",
  "Kabupaten Bener Meriah",
  "Kabupaten Bireuen",
  "Kabupaten Gayo Lues",
  "Kabupaten Nagan Raya",
  "Kabupaten Pidie",
  "Kabupaten Pidie Jaya",
  "Kabupaten Simeulue",
  "Kota Banda Aceh",
  "Kota Langsa",
  "Kota Lhokseumawe",
  "Kota Sabang",
  "Kota Subulussalam",
    "Kabupaten Asahan",
  "Kabupaten Batu Bara",
  "Kabupaten Dairi",
  "Kabupaten Deli Serdang",
  "Kabupaten Humbang Hasundutan",
  "Kabupaten Karo",
  "Kabupaten Labuhanbatu",
  "Kabupaten Labuhanbatu Selatan",
  "Kabupaten Labuhanbatu Utara",
  "Kabupaten Langkat",
  "Kabupaten Mandailing Natal",
  "Kabupaten Nias",
  "Kabupaten Nias Barat",
  "Kabupaten Nias Selatan",
  "Kabupaten Nias Utara",
  "Kabupaten Padang Lawas",
  "Kabupaten Padang Lawas Utara",
  "Kabupaten Pakpak Bharat",
  "Kabupaten Samosir",
  "Kabupaten Serdang Bedagai",
  "Kabupaten Simalungun",
  "Kabupaten Tapanuli Selatan",
  "Kabupaten Tapanuli Tengah",
  "Kabupaten Tapanuli Utara",
  "Kabupaten Toba",
  "Kota Binjai",
  "Kota Gunungsitoli",
  "Kota Medan",
  "Kota Padangsidimpuan",
  "Kota Pematangsiantar",
  "Kota Sibolga",
  "Kota Tanjungbalai",
  "Kota Tebing Tinggi",
    "Kabupaten Agam",
  "Kabupaten Dharmasraya",
  "Kabupaten Kepulauan Mentawai",
  "Kabupaten Lima Puluh Kota",
  "Kabupaten Padang Pariaman",
  "Kabupaten Pasaman",
  "Kabupaten Pasaman Barat",
  "Kabupaten Pesisir Selatan",
  "Kabupaten Sijunjung",
  "Kabupaten Solok",
  "Kabupaten Solok Selatan",
  "Kabupaten Tanah Datar",
  "Kota Padang",
  "Kota Padang Panjang",
  "Kota Pariaman",
  "Kota Payakumbuh",
  "Kota Sawahlunto",
  "Kota Solok",
  "Kota Bukittinggi",
    "Kabupaten Bengkalis",
  "Kabupaten Indragiri Hilir",
  "Kabupaten Indragiri Hulu",
  "Kabupaten Kampar",
  "Kabupaten Kepulauan Meranti",
  "Kabupaten Kuantan Singingi",
  "Kabupaten Pelalawan",
  "Kabupaten Rokan Hilir",
  "Kabupaten Rokan Hulu",
  "Kabupaten Siak",
  "Kota Dumai",
  "Kota Pekanbaru",
    "Kabupaten Bintan",
  "Kabupaten Karimun",
  "Kabupaten Kepulauan Anambas",
  "Kabupaten Lingga",
  "Kabupaten Natuna",
  "Kota Batam",
  "Kota Tanjungpinang",
    "Kabupaten Kerinci",
  "Kabupaten Merangin",
  "Kabupaten Sarolangun",
  "Kabupaten Batanghari",
  "Kabupaten Muaro Jambi",
  "Kabupaten Tanjung Jabung Timur",
  "Kabupaten Tanjung Jabung Barat",
  "Kabupaten Tebo",
  "Kabupaten Bungo",
  "Kota Jambi",
  "Kota Sungai Penuh",
    "Kabupaten Banyuasin",
  "Kabupaten Empat Lawang",
  "Kabupaten Lahat",
  "Kabupaten Muara Enim",
  "Kabupaten Musi Banyuasin",
  "Kabupaten Musi Rawas",
  "Kabupaten Musi Rawas Utara",
  "Kabupaten Ogan Ilir",
  "Kabupaten Ogan Komering Ilir",
  "Kabupaten Ogan Komering Ulu",
  "Kabupaten Ogan Komering Ulu Selatan",
  "Kabupaten Ogan Komering Ulu Timur",
  "Kabupaten Penukal Abab Lematang Ilir",
  "Kota Lubuklinggau",
  "Kota Pagar Alam",
  "Kota Palembang",
  "Kota Prabumulih",
    "Kabupaten Bangka",
  "Kabupaten Belitung",
  "Kabupaten Bangka Selatan",
  "Kabupaten Bangka Tengah",
  "Kabupaten Bangka Barat",
  "Kabupaten Belitung Timur",
  "Kota Pangkalpinang",
    "Kabupaten Lampung Barat",
  "Kabupaten Tanggamus",
  "Kabupaten Lampung Selatan",
  "Kabupaten Lampung Timur",
  "Kabupaten Lampung Tengah",
  "Kabupaten Lampung Utara",
  "Kabupaten Way Kanan",
  "Kabupaten Tulang Bawang",
  "Kabupaten Pesawaran",
  "Kabupaten Pringsewu",
  "Kabupaten Mesuji",
  "Kabupaten Tulang Bawang Barat",
  "Kabupaten Pesisir Barat",
  "Kota Bandar Lampung",
  "Kota Metro",
    "Kabupaten Bengkulu Selatan",
  "Kabupaten Bengkulu Tengah",
  "Kabupaten Bengkulu Utara",
  "Kabupaten Kaur",
  "Kabupaten Kepahiang",
  "Kabupaten Lebong",
  "Kabupaten Mukomuko",
  "Kabupaten Rejang Lebong",
  "Kabupaten Seluma",
  "Kota Bengkulu",
    "Kabupaten Administrasi Kepulauan Seribu",
  "Kota Administrasi Jakarta Selatan",
  "Kota Administrasi Jakarta Timur",
  "Kota Administrasi Jakarta Pusat",
  "Kota Administrasi Jakarta Barat",
  "Kota Administrasi Jakarta Utara",
    "Kabupaten Lebak",
  "Kabupaten Pandeglang",
  "Kabupaten Serang",
  "Kabupaten Tangerang",
  "Kota Cilegon",
  "Kota Serang",
  "Kota Tangerang",
  "Kota Tangerang Selatan",
    "Kabupaten Bandung",
  "Kabupaten Bandung Barat",
  "Kabupaten Bekasi",
  "Kabupaten Bogor",
  "Kabupaten Ciamis",
  "Kabupaten Cianjur",
  "Kabupaten Cirebon",
  "Kabupaten Garut",
  "Kabupaten Indramayu",
  "Kabupaten Karawang",
  "Kabupaten Kuningan",
  "Kabupaten Majalengka",
  "Kabupaten Pangandaran",
  "Kabupaten Purwakarta",
  "Kabupaten Subang",
  "Kabupaten Sukabumi",
  "Kabupaten Sumedang",
  "Kabupaten Tasikmalaya",
  "Kota Bandung",
  "Kota Banjar",
  "Kota Bekasi",
  "Kota Bogor",
  "Kota Cimahi",
  "Kota Cirebon",
  "Kota Depok",
  "Kota Sukabumi",
  "Kota Tasikmalaya",
    "Kabupaten Banjarnegara",
  "Kabupaten Banyumas",
  "Kabupaten Batang",
  "Kabupaten Blora",
  "Kabupaten Boyolali",
  "Kabupaten Brebes",
  "Kabupaten Cilacap",
  "Kabupaten Demak",
  "Kabupaten Grobogan",
  "Kabupaten Jepara",
  "Kabupaten Karanganyar",
  "Kabupaten Kebumen",
  "Kabupaten Kendal",
  "Kabupaten Klaten",
  "Kabupaten Kudus",
  "Kabupaten Magelang",
  "Kabupaten Pati",
  "Kabupaten Pekalongan",
  "Kabupaten Pemalang",
  "Kabupaten Purbalingga",
  "Kabupaten Purworejo",
  "Kabupaten Rembang",
  "Kabupaten Semarang",
  "Kabupaten Sragen",
  "Kabupaten Sukoharjo",
  "Kabupaten Tegal",
  "Kabupaten Temanggung",
  "Kabupaten Wonogiri",
  "Kabupaten Wonosobo",
  "Kota Magelang",
  "Kota Pekalongan",
  "Kota Salatiga",
  "Kota Semarang",
  "Kota Surakarta",
  "Kota Tegal",
    "Kabupaten Bantul",
  "Kabupaten Gunungkidul",
  "Kabupaten Kulon Progo",
  "Kabupaten Sleman",
  "Kota Yogyakarta",
    "Kabupaten Bangkalan",
  "Kabupaten Banyuwangi",
  "Kabupaten Blitar",
  "Kabupaten Bojonegoro",
  "Kabupaten Bondowoso",
  "Kabupaten Gresik",
  "Kabupaten Jember",
  "Kabupaten Jombang",
  "Kabupaten Kediri",
  "Kabupaten Lamongan",
  "Kabupaten Lumajang",
  "Kabupaten Madiun",
  "Kabupaten Magetan",
  "Kabupaten Malang",
  "Kabupaten Mojokerto",
  "Kabupaten Nganjuk",
  "Kabupaten Ngawi",
  "Kabupaten Pacitan",
  "Kabupaten Pamekasan",
  "Kabupaten Pasuruan",
  "Kabupaten Ponorogo",
  "Kabupaten Probolinggo",
  "Kabupaten Sampang",
  "Kabupaten Sidoarjo",
  "Kabupaten Situbondo",
  "Kabupaten Sumenep",
  "Kabupaten Trenggalek",
  "Kabupaten Tuban",
  "Kabupaten Tulungagung",
  "Kota Batu",
  "Kota Blitar",
  "Kota Kediri",
  "Kota Madiun",
  "Kota Malang",
  "Kota Mojokerto",
  "Kota Pasuruan",
  "Kota Probolinggo",
  "Kota Surabaya",
    "Kabupaten Badung",
  "Kabupaten Bangli",
  "Kabupaten Buleleng",
  "Kabupaten Gianyar",
  "Kabupaten Jembrana",
  "Kabupaten Karangasem",
  "Kabupaten Klungkung",
  "Kabupaten Tabanan",
  "Kota Denpasar",
    "Kabupaten Bima",
  "Kabupaten Dompu",
  "Kabupaten Lombok Barat",
  "Kabupaten Lombok Tengah",
  "Kabupaten Lombok Timur",
  "Kabupaten Lombok Utara",
  "Kabupaten Sumbawa",
  "Kabupaten Sumbawa Barat",
  "Kota Bima",
  "Kota Mataram",
    "Kabupaten Alor",
  "Kabupaten Belu",
  "Kabupaten Ende",
  "Kabupaten Flores Timur",
  "Kabupaten Kupang",
  "Kabupaten Lembata",
  "Kabupaten Malaka",
  "Kabupaten Manggarai",
  "Kabupaten Manggarai Barat",
  "Kabupaten Manggarai Timur",
  "Kabupaten Nagekeo",
  "Kabupaten Ngada",
  "Kabupaten Rote Ndao",
  "Kabupaten Sabu Raijua",
  "Kabupaten Sikka",
  "Kabupaten Sumba Barat",
  "Kabupaten Sumba Barat Daya",
  "Kabupaten Sumba Tengah",
  "Kabupaten Sumba Timur",
  "Kabupaten Timor Tengah Selatan",
  "Kabupaten Timor Tengah Utara",
  "Kota Kupang",
    "Kabupaten Bengkayang",
  "Kabupaten Kapuas Hulu",
  "Kabupaten Kayong Utara",
  "Kabupaten Ketapang",
  "Kabupaten Kubu Raya",
  "Kabupaten Landak",
  "Kabupaten Melawi",
  "Kabupaten Mempawah",
  "Kabupaten Sambas",
  "Kabupaten Sanggau",
  "Kabupaten Sekadau",
  "Kabupaten Sintang",
  "Kota Pontianak",
  "Kota Singkawang",
    "Kabupaten Barito Selatan",
  "Kabupaten Barito Timur",
  "Kabupaten Barito Utara",
  "Kabupaten Gunung Mas",
  "Kabupaten Kapuas",
  "Kabupaten Katingan",
  "Kabupaten Kotawaringin Barat",
  "Kabupaten Kotawaringin Timur",
  "Kabupaten Lamandau",
  "Kabupaten Murung Raya",
  "Kabupaten Pulang Pisau",
  "Kabupaten Seruyan",
  "Kabupaten Sukamara",
  "Kota Palangka Raya",
    "Kabupaten Balangan",
  "Kabupaten Banjar",
  "Kabupaten Barito Kuala",
  "Kabupaten Hulu Sungai Selatan",
  "Kabupaten Hulu Sungai Tengah",
  "Kabupaten Hulu Sungai Utara",
  "Kabupaten Kotabaru",
  "Kabupaten Tabalong",
  "Kabupaten Tanah Bumbu",
  "Kabupaten Tanah Laut",
  "Kabupaten Tapin",
  "Kota Banjarbaru",
  "Kota Banjarmasin",
    "Kabupaten Berau",
  "Kabupaten Kutai Barat",
  "Kabupaten Kutai Kartanegara",
  "Kabupaten Kutai Timur",
  "Kabupaten Mahakam Ulu",
  "Kabupaten Paser",
  "Kabupaten Penajam Paser Utara",
  "Kota Balikpapan",
  "Kota Bontang",
  "Kota Samarinda",
    "Kabupaten Bulungan",
  "Kabupaten Malinau",
  "Kabupaten Nunukan",
  "Kabupaten Tana Tidung",
  "Kota Tarakan",
    "Kabupaten Bolaang Mongondow",
  "Kabupaten Bolaang Mongondow Selatan",
  "Kabupaten Bolaang Mongondow Timur",
  "Kabupaten Bolaang Mongondow Utara",
  "Kabupaten Kepulauan Sangihe",
  "Kabupaten Kepulauan Siau Tagulandang Biaro",
  "Kabupaten Kepulauan Talaud",
  "Kabupaten Minahasa",
  "Kabupaten Minahasa Selatan",
  "Kabupaten Minahasa Tenggara",
  "Kabupaten Minahasa Utara",
  "Kota Bitung",
  "Kota Kotamobagu",
  "Kota Manado",
  "Kota Tomohon",
    "Kota Palu",
  "Kabupaten Banggai",
  "Kabupaten Morowali",
  "Kabupaten Poso",
  "Kabupaten Tolitoli",
    "Kota Makassar",
  "Kota Parepare",
  "Kota Palopo",
  "Kabupaten Gowa",
  "Kabupaten Maros",
  "Kabupaten Bone",
  "Kabupaten Bulukumba",
  "Kabupaten Pinrang",
    "Kota Kendari",
  "Kota Baubau",
  "Kabupaten Kolaka",
  "Kabupaten Konawe",
  "Kabupaten Konawe Selatan",
  "Kabupaten Muna",
    "Kota Gorontalo",
  "Kabupaten Gorontalo",
  "Kabupaten Bone Bolango",
  "Kabupaten Boalemo",
    "Kabupaten Mamuju",
  "Kabupaten Majene",
  "Kabupaten Polewali Mandar",
  "Kabupaten Pasangkayu",
    "Kota Ambon",
  "Kota Tual",
  "Kabupaten Maluku Tengah",
  "Kabupaten Buru",
  "Kabupaten Maluku Tenggara",
    "Kota Ternate",
  "Kota Tidore Kepulauan",
  "Kabupaten Halmahera Barat",
  "Kabupaten Halmahera Selatan",
  "Kabupaten Halmahera Utara",
    "Kota Manokwari",
  "Kabupaten Manokwari",
  "Kabupaten Fakfak",
  "Kabupaten Kaimana",
  "Kabupaten Teluk Bintuni",
  "Kabupaten Teluk Wondama",
    "Kota Sorong",
  "Kabupaten Sorong",
  "Kabupaten Raja Ampat",
  "Kabupaten Sorong Selatan",
    "Kota Jayapura",
  "Kabupaten Jayapura",
  "Kabupaten Biak Numfor",
  "Kabupaten Keerom",
  "Kabupaten Sarmi",
    "Kabupaten Asmat",
  "Kabupaten Boven Digoel",
  "Kabupaten Mappi",
  "Kabupaten Merauke",
    "Kabupaten Deiyai",
  "Kabupaten Dogiyai",
  "Kabupaten Intan Jaya",
  "Kabupaten Mimika",
  "Kabupaten Nabire",
  "Kabupaten Paniai",
  "Kabupaten Puncak",
  "Kabupaten Puncak Jaya",
    "Kabupaten Jayawijaya",
  "Kabupaten Lanny Jaya",
  "Kabupaten Mamberamo Tengah",
  "Kabupaten Nduga",
  "Kabupaten Pegunungan Bintang",
  "Kabupaten Tolikara",
  "Kabupaten Yalimo",
  "Kabupaten Yahukimo",
];

const jobsGrid = document.querySelector("#jobsGrid");
const emptyState = document.querySelector("#emptyState");
const jobCount = document.querySelector("#jobCount");
const categoryFilter = document.querySelector("#categoryFilter");
const keyword = document.querySelector("#keyword");
const locationInput = document.querySelector("#location");

if (locationInput) {
  const cityList = document.querySelector("#cityList");

  if (cityList) {
    cities.forEach(city => {
      const option = document.createElement("option");

      option.value = city;

      const language = localStorage.getItem("siteLanguage") || "id";

      option.textContent = language === "en"
        ? city
            .replace("Kabupaten ", "Regency ")
            .replace("Kota Administrasi ", "Administrative City of ")
            .replace("Kota ", "City of ")
        : city;

      cityList.appendChild(option);
    });
  }
}

async function renderJobs(list = jobs) {
  jobsGrid.innerHTML = "";

  const language = localStorage.getItem("siteLanguage") || "id";

  if (jobCount) {
    jobCount.textContent = list.length;
  }

  if (emptyState) {
    emptyState.classList.toggle("hidden", list.length !== 0);
  }

  // Cache terjemahan agar tidak meminta Gemini berulang kali
  if (!window.jobTranslationCache) {
    window.jobTranslationCache = new Map();
  }

  let displayJobs = list;

// =====================================================
// AUTO TRANSLATION JOB LISTING SAAT MODE ENGLISH
// =====================================================
if (language === "en" && list.length > 0) {

  const batchSize = 5;

  const uncachedJobs = list.filter((job) => {
    const cacheKey =
      job.id || `${job.title}-${job.company}-${job.location}`;

    return !window.jobTranslationCache.has(cacheKey);
  });

  // Terjemahkan job dalam batch kecil agar request Gemini aman
  for (let i = 0; i < uncachedJobs.length; i += batchSize) {

    const batch = uncachedJobs.slice(i, i + batchSize);

    try {

      const { data, error } =
        await supabase.functions.invoke(
          "translate-job",
          {
            body: {
              jobs: batch.map((job) => ({
                title: job.title || "",
                company: job.company || "",
                location: job.location || "",
                type: job.type || "",
                category: job.category || "",
                salary: job.salary || "",
                description: job.description || "",
                requirements: job.requirements || ""
              }))
            }
          }
        );

      if (error) {
        console.error("Batch translation error:", error);
        continue;
      }

      if (
        data?.success &&
        Array.isArray(data.jobs)
      ) {

        data.jobs.forEach((translatedJob, index) => {

          const originalJob = batch[index];

          if (!originalJob || !translatedJob) return;

          const cacheKey =
            originalJob.id ||
            `${originalJob.title}-${originalJob.company}-${originalJob.location}`;

          window.jobTranslationCache.set(
            cacheKey,
            translatedJob
          );

        });

      } else {
        console.error(
          "Batch translation returned invalid data:",
          data
        );
      }

    } catch (error) {

      console.error(
        "Batch translation failed:",
        error
      );

    }
  }

  // Gunakan hasil terjemahan dari cache
  displayJobs = list.map((job) => {

    const cacheKey =
      job.id ||
      `${job.title}-${job.company}-${job.location}`;

    const translatedJob =
      window.jobTranslationCache.get(cacheKey);

    return translatedJob
      ? { ...job, ...translatedJob }
      : job;
  });
}
  // =====================================================
  // TAMPILKAN JOB
  // =====================================================
  displayJobs.forEach((job, i) => {
    const card = document.createElement("article");
    card.className = "job-card";

    card.innerHTML = `
      <div class="job-top">
        <div class="company-logo">${job.initials || ""}</div>

        <span class="pill">
          ${job.type || ""}
        </span>
      </div>

      <h3>${job.title || ""}</h3>

      <div class="company">
        ${job.company || ""}
      </div>

      <div class="job-meta">
        <span>📍 ${job.location || ""}</span>

        <span>
          ▣ ${job.category || ""}
        </span>
      </div>

      <div class="salary">
        ${job.salary || ""}
      </div>

      <div class="job-posted-date">
        ${
          job.created_at
            ? (
                language === "en"
                  ? `Posted ${new Date(job.created_at).toLocaleString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    })}`
                  : `Diposting ${new Date(job.created_at).toLocaleString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    })}`
              )
            : ""
        }
      </div>

      <div class="job-actions">

        <button data-details="${i}">
          ${
            language === "en"
              ? "View Details"
              : "Lihat Detail"
          }
        </button>

        <button data-apply="${i}">
          ${
            language === "en"
              ? "Apply →"
              : "Lamar →"
          }
        </button>

      </div>
    `;

    jobsGrid.appendChild(card);
  });
}
let hasSearched = false;
function filterJobs(){
  const q = keyword.value.trim().toLowerCase();
  const loc = locationInput.value.trim().toLowerCase();
  const cat = categoryFilter.value;

  const filtered = jobs.filter(j =>
    (cat === "all" || j.category === cat) &&
    (!q || `${j.title} ${j.company} ${j.category} ${j.description || ""}`.toLowerCase().includes(q)) &&
    (!loc || j.location.toLowerCase().includes(loc) ||
      (loc === "indonesia" && j.location === "Remote"))
  );

  renderJobs(filtered);
const featuredJob = document.querySelector("#featuredJob");

if (featuredJob) {
 const featuredJobs = hasSearched
  ? filtered
  : [...jobs].sort((a, b) => {
      const dateA = new Date(a.created_at || a.createdAt || 0);
      const dateB = new Date(b.created_at || b.createdAt || 0);
      return dateB - dateA;
    });

if (featuredJobs.length > 0) {
    const job = featuredJobs[0];

 featuredJob.innerHTML = `
  <div class="featured-job-card" style="
    background:linear-gradient(145deg,#123b6d 0%,#0b2b50 100%);
    color:#fff;
    border-radius:22px;
    padding:24px;
    text-align:left;
    box-shadow:0 14px 35px rgba(18,59,109,.28);
    border:1px solid rgba(255,255,255,.12);
    position:relative;
    overflow:hidden;
  ">

    <div style="
      position:absolute;
      width:150px;
      height:150px;
      border-radius:50%;
      background:rgba(255,255,255,.06);
      right:-65px;
      top:-65px;
    "></div>

    <div style="
      position:relative;
      z-index:1;
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:10px;
      margin-bottom:20px;
    ">
      <span style="
        background:rgba(255,255,255,.14);
        padding:7px 11px;
        border-radius:999px;
        font-size:11px;
        font-weight:700;
        letter-spacing:.5px;
      ">
        ✦ ${localStorage.getItem("siteLanguage") === "en" ? "LATEST JOB" : "LOWONGAN TERBARU"}
      </span>

      <span style="
        background:rgba(255,255,255,.09);
        padding:7px 10px;
        border-radius:999px;
        font-size:11px;
        color:#dbeafe;
      ">
        ${job.type || "Full-time"}
      </span>
    </div>

    <div style="
      position:relative;
      z-index:1;
      width:56px;
      height:56px;
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:16px;
      background:rgba(255,255,255,.13);
      font-size:24px;
      margin-bottom:15px;
    ">
      ${job.initials || "💼"}
    </div>

    <div style="position:relative;z-index:1;">

      <h3 style="
        margin:0 0 6px;
        font-size:23px;
        line-height:1.25;
        color:#fff;
      ">
        ${job.title}
      </h3>

      <p style="
        margin:0 0 16px;
        font-size:14px;
        font-weight:600;
        color:rgba(255,255,255,.78);
      ">
        ${job.company}
      </p>
      <div style="
  font-size:12px;
  color:rgba(255,255,255,.65);
  margin-bottom:14px;
">
  ${job.created_at
    ? (
        localStorage.getItem("siteLanguage") === "en"
          ? `Posted ${new Date(job.created_at).toLocaleString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            })}`
          : `Diposting ${new Date(job.created_at).toLocaleString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            })}`
      )
    : ""}
</div>

      <div style="
        display:flex;
        flex-wrap:wrap;
        gap:7px;
        margin-bottom:14px;
      ">
        <span style="
          background:rgba(255,255,255,.09);
          padding:7px 9px;
          border-radius:8px;
          font-size:12px;
          color:#e8f1fb;
        ">
          📍 ${job.location}
        </span>

        <span style="
          background:rgba(255,255,255,.09);
          padding:7px 9px;
          border-radius:8px;
          font-size:12px;
          color:#e8f1fb;
        ">
          ▣ ${translateCategory(job.category)}
        </span>
      </div>

      <div style="
        font-size:14px;
        font-weight:700;
        color:#fff;
        margin-bottom:12px;
      ">
        💰 ${job.salary || (localStorage.getItem("siteLanguage") === "en"
          ? "Salary according to company policy"
          : "Gaji sesuai ketentuan perusahaan")}
      </div>

      <p style="
        margin:0 0 20px;
        font-size:13px;
        line-height:1.65;
        color:rgba(255,255,255,.72);
        display:-webkit-box;
        -webkit-line-clamp:3;
        -webkit-box-orient:vertical;
        overflow:hidden;
      ">
        ${job.description || (localStorage.getItem("siteLanguage") === "en"
          ? "Discover this career opportunity and join this company."
          : "Temukan peluang karier ini dan bergabung bersama perusahaan.")}
      </p>

      <div style="
        display:flex;
        gap:9px;
      ">

        <button
          type="button"
          class="featured-details-btn"
          data-details="${jobs.indexOf(job)}"
          style="
            flex:1;
            min-height:44px;
            border-radius:11px;
            border:1px solid rgba(255,255,255,.22);
            background:rgba(255,255,255,.10);
            color:#fff;
            font-size:13px;
            font-weight:700;
            cursor:pointer;
          "
        >
          Details
        </button>

        <button
          type="button"
          class="featured-apply-btn"
          data-apply="${jobs.indexOf(job)}"
          style="
            flex:1;
            min-height:44px;
            border-radius:11px;
            border:1px solid #fff;
            background:#fff;
            color:#123b6d;
            font-size:13px;
            font-weight:700;
            cursor:pointer;
          "
        >
          ${localStorage.getItem("siteLanguage") === "en" ? "Apply →" : "Lamar →"}
        </button>

      </div>

    </div>
  </div>
`;
  } else {
    const searchName = keyword.value.trim();
    const language = localStorage.getItem("siteLanguage") || "id";

    const noJobTitle = language === "en"
      ? (searchName
          ? `No ${searchName} Jobs Available`
          : "No Jobs Available")
      : (searchName
          ? `Belum Ada Lowongan ${searchName}`
          : "Belum Ada Lowongan");

    const noJobText = language === "en"
      ? "There are no jobs matching your current search."
      : "Belum ada lowongan yang sesuai dengan pencarian Anda saat ini.";

    featuredJob.innerHTML = `
      <div style="font-size:42px;margin-bottom:10px;">🔎</div>
      <h3 style="margin:0 0 8px;">
        ${noJobTitle}
      </h3>
      <p style="margin:0;color:#64748b;">
        ${noJobText}
      </p>
    `;
  }
}
  
  document.querySelector("#jobs").scrollIntoView({behavior:"smooth"});
}

document.querySelector("#searchForm").addEventListener("submit", e => {
  e.preventDefault();
  hasSearched = true;
  filterJobs();
});

categoryFilter.addEventListener("change", filterJobs);

document.querySelectorAll(".quick-tags button").forEach(btn => {
  btn.addEventListener("click", () => {
    keyword.value = btn.dataset.keyword;
    filterJobs();
  });
});
function updateJobSuggestions() {
  if (!keyword || !jobSuggestions) return;

  const query = keyword.value.trim().toLowerCase();
  const language = localStorage.getItem("siteLanguage") || "id";

  if (!query) {
    jobSuggestions.innerHTML = "";
    jobSuggestions.classList.add("hidden");
    return;
  }

  const matchingJobs = jobs.filter(job =>
    `${job.title || ""} ${job.category || ""}`
      .toLowerCase()
      .includes(query)
  );

  const jobMap = {};

  matchingJobs.forEach(job => {
    const title = (job.title || "").trim();
    if (!title) return;

    if (!jobMap[title]) {
      jobMap[title] = 0;
    }

    jobMap[title]++;
  });

  const suggestions = Object.entries(jobMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  if (suggestions.length === 0) {
    jobSuggestions.innerHTML = "";
    jobSuggestions.classList.add("hidden");
    return;
  }

  jobSuggestions.innerHTML = `
    <div class="suggestion-header">
      ${language === "en" ? "Job Categories" : "Kategori Pekerjaan"}
    </div>

    ${suggestions.map(([title, count]) => `
      <button type="button" class="job-suggestion-item">
        <span>${title}</span>
        <span>(${count})</span>
      </button>
    `).join("")}
  `;

  jobSuggestions.classList.remove("hidden");

  jobSuggestions.querySelectorAll(".job-suggestion-item").forEach(button => {
    button.addEventListener("click", () => {
      keyword.value = button.querySelector("span").textContent;
      jobSuggestions.classList.add("hidden");
      hasSearched = true;
      filterJobs();
    });
  });
}

keyword.addEventListener("input", updateJobSuggestions);

const modal = document.querySelector("#authModal");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
const authForm = document.querySelector("#authForm");

let isRegister = false;
let isCompany = false;

const companyAccountBtn = document.querySelector("#companyAccount");
const jobseekerAccountBtn = document.querySelector("#jobseekerAccount");
const companyFields = document.querySelector("#companyFields");

if (companyAccountBtn) {
  companyAccountBtn.addEventListener("click", () => {
    isCompany = true;

    if (companyFields) {
      companyFields.style.display = "block";
    }

    modalTitle.textContent = "Daftar Perusahaan";
    modalText.textContent = "Buat akun perusahaan untuk memasang lowongan.";
  });
}

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

  const errorText = JSON.stringify(data).toLowerCase();

  if (
    response.status === 409 ||
    errorText.includes("duplicate") ||
    errorText.includes("already exists") ||
    errorText.includes("unique constraint")
  ) {
   const language = localStorage.getItem("siteLanguage") || "id";

alert(
  language === "en"
    ? "You have already applied for this job."
    : "Anda sudah melamar lowongan ini."
);
return;
  }

  throw new Error(
    data.message ||
    data.error_description ||
    data.msg ||
    "Lamaran gagal dikirim"
  );
}

   const language = localStorage.getItem("siteLanguage") || "id";

  alert(
  language === "en"
    ? `Application submitted successfully!\n\n${job.title} - ${job.company}`
    : `Lamaran berhasil dikirim!\n\n${job.title} - ${job.company}`
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
      job.description || (
        localStorage.getItem("siteLanguage") === "en"
          ? "Job description is not available."
          : "Deskripsi pekerjaan belum tersedia."
      );

    document.getElementById("jobDetailRequirements").textContent =
      job.requirements || (
        localStorage.getItem("siteLanguage") === "en"
          ? "Requirements are not available."
          : "Persyaratan belum tersedia."
      );

    document.getElementById("jobDetailApply").onclick = () => {
      submitApplication(job);
      document.getElementById("jobDetailModal").classList.add("hidden");
    };

    document.getElementById("jobDetailModal").classList.remove("hidden");
  }
});

featuredJob.addEventListener("click", e => {
  const details = e.target.closest("[data-details]");
  const apply = e.target.closest("[data-apply]");

  if (!details && !apply) return;

  const idx = Number(
    (details || apply).dataset[
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
    document.getElementById("jobDetailLocation").textContent =
      `📍 ${job.location}`;
    document.getElementById("jobDetailType").textContent =
      `💼 ${job.type}`;
    document.getElementById("jobDetailSalary").textContent =
      `💰 ${job.salary}`;

    document.getElementById("jobDetailDescription").textContent =
      job.description || (
        localStorage.getItem("siteLanguage") === "en"
          ? "Job description is not available."
          : "Deskripsi pekerjaan belum tersedia."
      );

    document.getElementById("jobDetailRequirements").textContent =
      job.requirements || "Persyaratan belum tersedia.";

    document.getElementById("jobDetailApply").onclick = () => {
      submitApplication(job);
      document.getElementById("jobDetailModal").classList.add("hidden");
    };

    document.getElementById("jobDetailModal").classList.remove("hidden");
  }
});
const loginBtn = document.querySelector("#loginBtn");
const registerBtn = document.querySelector("#registerBtn");
const menuJobseeker = document.querySelector("#menuJobseeker");
const menuCompany = document.querySelector("#menuCompany");
const menuHelp = document.querySelector("#menuHelp");
const menuLogout = document.querySelector("#menuLogout");

if (menuJobseeker) {
  menuJobseeker.addEventListener("click", () => {
    const dashboard = document.querySelector("#jobseekerDashboard");

    if (dashboard) {
      dashboard.style.display = "block";
      document.querySelector("#mainMenu").style.display = "none";
    } else if (typeof showJobseekerDashboard === "function") {
      showJobseekerDashboard();
    }
  });
}

if (menuCompany) {
  menuCompany.addEventListener("click", () => {
    const dashboard = document.querySelector("#companyDashboard");

    if (dashboard) {
      dashboard.style.display = "block";
      document.querySelector("#mainMenu").style.display = "none";
    } else if (typeof showCompanyDashboard === "function") {
      showCompanyDashboard();
    }
  });
}

if (menuHelp) {
  menuHelp.addEventListener("click", () => {
    window.location.href = "bantuan.html";
  });
}

if (menuLogout) {
  menuLogout.addEventListener("click", async () => {
    try {
      if (typeof supabase !== "undefined" && supabase.auth) {
        await supabase.auth.signOut();
      }
    } catch (error) {
      console.error("Logout error:", error);
    }

    localStorage.removeItem("cariKerjakuUser");
    localStorage.removeItem("cariKerjakuAccessToken");

    window.location.reload();
  });
}

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    isRegister = false;

    if (modalTitle) {
      modalTitle.textContent = "Masuk";
    }

    if (modalText) {
      modalText.textContent = "Masukkan email dan password untuk masuk.";
    }

    if (authForm) {
      authForm.classList.remove("hidden");
    }

    const switchAuth = document.querySelector(".switch-auth");

    if (switchAuth) {
      switchAuth.classList.remove("hidden");
    }

    if (modal) {
      modal.classList.remove("hidden");
    }
  });
}

if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    isRegister = true;

    if (modalTitle) {
      modalTitle.textContent = "Daftar";
    }

    if (modalText) {
      modalText.textContent = "Buat akun untuk mulai melamar pekerjaan.";
    }

    if (authForm) {
      authForm.classList.remove("hidden");
    }

    const switchAuth = document.querySelector(".switch-auth");

    if (switchAuth) {
      switchAuth.classList.remove("hidden");
    }

    if (modal) {
      modal.classList.remove("hidden");
    }
  });
}


document.querySelector("#switchAuth").addEventListener("click", () => {
  isRegister = !isRegister;

  modalTitle.textContent = isRegister ? "Daftar" : "Masuk";

  modalText.textContent = isRegister
    ? "Buat akun untuk mulai melamar pekerjaan."
    : "Masukkan email dan password untuk masuk.";

  document.querySelector("#switchAuth").textContent =
    isRegister ? "Masuk" : "Daftar";
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
      const language = localStorage.getItem("siteLanguage") || "id";
alert(language === "en" ? "Login successful!" : "Login berhasil!");

showCompanyDashboard();
return;
       
}
   modal.classList.add("hidden");
showJobseekerDashboard();

const language = localStorage.getItem("siteLanguage") || "id";
alert(language === "en" ? "Login successful!" : "Login berhasil!"); 
    }

  } catch (error) {
    alert("Gagal: " + error.message);
  }
});

loadJobsFromDatabase();
// ================= DASHBOARD PENCARI KERJA =================

function showJobseekerDashboard() {
  const language = localStorage.getItem("siteLanguage") || "id";
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
  onclick="showJobseekerProfile()"
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
    Profil Diri
  </div>

  <div style="
    font-size:24px;
    font-weight:bold;
    margin-top:8px;
    color:#123b6d;
  ">
    👤 ${localStorage.getItem("siteLanguage") === "en" ? "Complete Profile" : "Lengkapi Profil"}
  </div>
</div>

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
  translateJobseekerDashboard(dashboard);
  
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

    if (file.size > 5 * 1024 * 1024) {
  status.textContent = "Ukuran CV maksimal 5 MB.";
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
function translateJobseekerDashboard(page) {
  if (!page) return;

  const language = localStorage.getItem("siteLanguage") || "id";

  const translations = {
    "Dashboard Pencari Kerja": "Job Seeker Dashboard",
    "🔎 Cari Lowongan": "🔎 Find Jobs",
    "Selamat Datang 👋": "Welcome 👋",
    "Kelola CV dan persiapkan dirimu untuk mendapatkan pekerjaan.": "Manage your CV and prepare yourself for your next job.",
    "CV Saya": "My CV",
    "Belum Upload": "Not Uploaded",
    "Lamaran Saya": "My Applications",
    "Pekerjaan Tersimpan": "Saved Jobs",
    "Notifikasi": "Notifications",
    "📄 CV Saya": "📄 My CV",
    "Upload CV dalam format PDF agar perusahaan dapat melihat profil dan pengalaman kerja kamu.": "Upload your CV in PDF format so companies can view your profile and work experience.",
    "Upload CV kamu": "Upload your CV",
    "Format yang diperbolehkan: PDF": "Allowed format: PDF",
    "Upload CV": "Upload CV",
    "Pilih file CV terlebih dahulu.": "Please select a CV file first.",
    "CV harus berupa file PDF.": "CV must be a PDF file.",
    "Silakan login terlebih dahulu.": "Please log in first.",
    "Data akun tidak valid. Silakan login kembali.": "Invalid account data. Please log in again.",
    "ID pengguna tidak ditemukan.": "User ID not found.",
    "Mengupload CV...": "Uploading CV...",
    "CV berhasil diupload.": "CV uploaded successfully.",
    "Gagal upload CV:": "CV upload failed:"
  };

  page.querySelectorAll("*").forEach(element => {
    if (element.children.length === 0) {
      const text = element.textContent.trim();

      if (language === "en" && translations[text]) {
        element.textContent = translations[text];
      }
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
   translateMyApplications(page);

  } catch (error) {
    alert("Gagal mengambil lowongan: " + error.message);
  }
}
function translateMyApplications(page) {
  if (!page) return;
    page.innerHTML = page.innerHTML
    .replaceAll("Lamaran Saya", "My Applications")
    .replaceAll("Belum ada lamaran", "No applications yet")
    .replaceAll("Detail Lamaran", "Application Details")
    .replaceAll("Posisi", "Position")
    .replaceAll("Perusahaan", "Company")
    .replaceAll("Lokasi", "Location")
    .replaceAll("Tanggal Lamaran", "Application Date")
    .replaceAll("Status", "Status")
    .replaceAll("Menunggu", "Pending")
    .replaceAll("Diterima", "Accepted")
    .replaceAll("Ditolak", "Rejected")
    .replaceAll("Lihat Detail", "View Details");

  const language = localStorage.getItem("siteLanguage") || "id";

  const translations = {
    "Lamaran Saya": "My Applications",
    "← Dashboard": "← Dashboard",
    "Belum Ada Lamaran": "No Applications Yet",
    "Lamaran pekerjaan yang kamu kirim akan muncul di sini.": "The jobs you apply for will appear here.",
    "Status:": "Status:",
    "Tanggal:": "Date:",
    "Menunggu": "Pending"
  };

  page.querySelectorAll("*").forEach(element => {
    if (element.children.length === 0) {
      const text = element.textContent.trim();

      if (language === "en" && translations[text]) {
        element.textContent = translations[text];
      }
    }
  });
}
function translateMyJobs(page) {
  if (!page) return;

  const language = localStorage.getItem("siteLanguage") || "id";

  const translations = {
   "📋 Lowongan Saya": "📋 My Jobs",
    "Lowongan Saya": "My Jobs",
    "Daftar lowongan perusahaan Anda.": "Your company's job listings.",
    "Belum Ada Lowongan": "No Jobs Available",
    "Lowongan perusahaan akan muncul di sini.": "Your company's jobs will appear here."
  };

  page.querySelectorAll("*").forEach(element => {
    if (element.children.length === 0) {
      const text = element.textContent.trim();

      if (language === "en" && translations[text]) {
        element.textContent = translations[text];
      }

      if (language === "id") {
        const original = Object.keys(translations).find(
          key => translations[key] === text
        );

        if (original) {
          element.textContent = original;
        }
      }
    }
  });
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

            <button onclick="showIncomingApplications()" style="
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
              ${localStorage.getItem("siteLanguage") === "en"
             ? "My Jobs"
             : "Lowongan Saya"}
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
                  <div style="
                    display:flex;
                    gap:10px;
                    margin-top:18px;
                  ">
                   <button
                   onclick="editMyJob('${job.id}')"
                   style="
                   padding:10px 18px;
                   background:#123b6d;
                   color:white;
                   border:none;
                   border-radius:8px;
                   cursor:pointer;
                   font-weight:bold;
                    "
                  >
                  ✏️ Edit
                  </button>

                  <button
                    onclick="deleteMyJob('${job.id}')"
                    style="
                    padding:10px 18px;
                    background:#dc2626;
                    color:white;
                   border:none;
                   border-radius:8px;
                   cursor:pointer;
                   font-weight:bold;
                   "
                    >
                   🗑️ Hapus
                    </button>
                </div>
                </div>
              `).join("")
          }

        </div>
      </div>
    `;

    document.body.innerHTML = "";
    document.body.appendChild(page);
    translateMyJobs(page);
  } catch (error) {
    alert("Gagal mengambil lowongan: " + error.message);
  }
}
async function deleteMyJob(jobId) {
  const confirmDelete = confirm(
    localStorage.getItem("siteLanguage") === "en"
      ? "Are you sure you want to delete this job?"
      : "Yakin ingin menghapus lowongan ini?"
  );

  if (!confirmDelete) return;

  const accessToken = localStorage.getItem("cariKerjakuAccessToken");

  if (!accessToken) {
    alert("Sesi perusahaan tidak ditemukan. Silakan login kembali.");
    return;
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}jobs?id=eq.${jobId}`,
      {
        method: "DELETE",
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

    alert(
      localStorage.getItem("siteLanguage") === "en"
        ? "Job deleted successfully."
        : "Lowongan berhasil dihapus."
    );

    showMyJobs();

  } catch (error) {
    alert("Gagal menghapus lowongan: " + error.message);
  }
}

window.deleteMyJob = deleteMyJob;

async function editMyJob(jobId) {
  const accessToken = localStorage.getItem("cariKerjakuAccessToken");

  if (!accessToken) {
    alert("Sesi perusahaan tidak ditemukan. Silakan login kembali.");
    return;
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}jobs?id=eq.${jobId}&select=*`,
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

    if (!jobs.length) {
      alert("Lowongan tidak ditemukan.");
      return;
    }

    const job = jobs[0];

    const title = prompt("Judul Lowongan:", job.title || "");
    if (title === null) return;

    const city = prompt("Kota:", job.city || "");
    if (city === null) return;

    const description = prompt(
      "Deskripsi Lowongan:",
      job.description || ""
    );
    if (description === null) return;

    const updateResponse = await fetch(
      `${SUPABASE_URL}jobs?id=eq.${jobId}`,
      {
        method: "PATCH",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal"
        },
        body: JSON.stringify({
          title: title.trim(),
          city: city.trim(),
          description: description.trim()
        })
      }
    );

    if (!updateResponse.ok) {
      const errorText = await updateResponse.text();
      throw new Error(errorText);
    }

    alert(
      localStorage.getItem("siteLanguage") === "en"
        ? "Job updated successfully."
        : "Lowongan berhasil diperbarui."
    );

    showMyJobs();

  } catch (error) {
    alert("Gagal mengedit lowongan: " + error.message);
  }
}

window.editMyJob = editMyJob;

function translateMyJobs(page) {
  if (!page) return;

  const language = localStorage.getItem("siteLanguage") || "id";

  const translations = {
    "📋 Lowongan Saya": "📋 My Jobs",
    "Daftar lowongan perusahaan Anda.": "Your company's job listings.",
    "Belum Ada Lowongan": "No Jobs Available",
    "Lowongan perusahaan akan muncul di sini.": "Your company's jobs will appear here."
  };

  page.querySelectorAll("*").forEach(element => {
    if (element.children.length === 0) {
      const text = element.textContent.trim();

      if (language === "en" && translations[text]) {
        element.textContent = translations[text];
      }
    }
  });
}
function companyLogout() {
  localStorage.removeItem("cariKerjakuUser");
  localStorage.removeItem("cariKerjakuAccessToken");
  location.reload();
}

function showPostJobForm() {
  const form = document.createElement("div");

  form.innerHTML = `
  <div id="postJobFormContainer" style="
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
    const response = await fetch(
      "https://ksqrimmecpriyepsuclc.supabase.co/rest/v1/jobs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
          "apikey": SUPABASE_KEY,
          "Prefer": "return=representation"
        },
        body: JSON.stringify({
          title,
          city,
          description,
          user_id: user.id,
          category,
          job_type: jobType,
          salary,
          experience,
          education,
          application_deadline: applicationDeadline || null,
          requirements
        })
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || result.error || "Gagal menyimpan lowongan."
      );
    }

    alert("✅ Lowongan berhasil dipasang dan sudah tampil di CariKerjaku.id.");

    showMyJobs();

    } catch (error) {
    alert("Gagal menyimpan lowongan: " + error.message);
  }
}
function translateCompanyDashboard() {
  const dashboard = document.getElementById("companyDashboard");
  if (!dashboard) return;

  const language = "id";

 const translations = {
  "Tentang": "About",
  "Kontak": "Contact",
  "Masuk": "Login",
  "MASUK": "LOGIN", 
  "Masuk akun Anda": "Log in to your account",
  "Login berhasil": "Login successful",
   
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

  const language = "id";

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

    if (language === "id") {
      const original = Object.keys(translations).find(
        key => translations[key] === text
      );

      if (original) {
        element.textContent = original;
      }
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
loadJobsFromDatabase();

const menuBtn = document.querySelector("#menuBtn");
const mainMenu = document.querySelector("#mainMenu");
document.addEventListener("click", (e) => {
  if (
    mainMenu &&
    menuBtn &&
    !mainMenu.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    mainMenu.style.display = "none";
  }
});

if (menuBtn && mainMenu) {

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  mainMenu.style.display =
    mainMenu.style.display === "none" ? "block" : "none";
});
  }

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const closeModal = document.getElementById("closeModal");
  const authModal = document.getElementById("authModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const authForm = document.getElementById("authForm");

 if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    authModal.classList.remove("hidden");

  const language = "id";

modalTitle.textContent = "Masuk";
modalText.textContent = "Masuk ke akun Anda";
    authForm.dataset.mode = "login";
  });
}

  if (registerBtn) {
    registerBtn.addEventListener("click", () => {
      authModal.classList.remove("hidden");
      modalTitle.textContent = "Daftar";
      modalText.textContent = "Buat akun baru";
      authForm.dataset.mode = "register";
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      authModal.classList.add("hidden");
    });
  }
});



async function showIncomingApplications() {
 const userData = localStorage.getItem("cariKerjakuUser");
const accessToken = localStorage.getItem("cariKerjakuAccessToken");

if (!userData || !accessToken) {
  alert("Sesi perusahaan tidak ditemukan. Silakan login kembali.");
  return;
}

const currentUser = JSON.parse(userData);
  try {
    const response = await fetch(
      `${SUPABASE_APPLICATIONS_URL}?select=*,jobs(title,user_id)&order=created_at.desc`,
      {
        method: "GET",
        headers: supabaseHeaders
      }
    );

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const applications = await response.json();

    const myApplications = applications.filter(
      app => app.jobs && app.jobs.user_id === currentUser.id
    );

    const dashboard = document.createElement("div");

    dashboard.style.cssText = `
      min-height:100vh;
      background:#f4f7fb;
      font-family:Arial,sans-serif;
      padding:30px;
      color:#172b4d;
    `;

    dashboard.innerHTML = `
      <div style="max-width:1100px;margin:auto;">
        <button onclick="showCompanyDashboard()" style="
          padding:10px 18px;
          border:none;
          border-radius:8px;
          background:#123b6d;
          color:white;
          cursor:pointer;
          font-weight:bold;
          margin-bottom:25px;
       ">
  ← ${localStorage.getItem("siteLanguage") === "en" ? "Back" : "Kembali"}
</button>

<h1>
  ${localStorage.getItem("siteLanguage") === "en"
    ? "Incoming Applications"
    : "Lamaran Masuk"}
</h1>

<p style="color:#64748b;">
  ${myApplications.length}
  ${localStorage.getItem("siteLanguage") === "en"
    ? "incoming applications"
    : "lamaran masuk"}
</p>
        ${
          myApplications.length === 0
            ? `
              <div style="
                background:white;
                padding:30px;
                border-radius:14px;
                border:1px solid #e5eaf1;
              ">
                ${localStorage.getItem("siteLanguage") === "en"
               ? "No incoming applications yet."
               : "Belum ada lamaran masuk."}
              </div>
            `
            : myApplications.map(app => `
              <div style="
                background:white;
                padding:22px;
                margin-bottom:15px;
                border-radius:14px;
                border:1px solid #e5eaf1;
                box-shadow:0 3px 12px rgba(15,23,42,.07);
              ">
                <h3 style="margin-top:0;">
                  ${app.jobs?.title || "Lowongan"}
                </h3>

                <p>
                  <strong>Status:</strong> ${app.status || "submitted"}
                </p>

                <p style="color:#64748b;">
                  Dikirim: ${
                    app.created_at
                      ? new Date(app.created_at).toLocaleString("id-ID")
                      : "-"
                  }
                </p>
              </div>
            `).join("")
        }
      </div>
    `;

    document.body.innerHTML = "";
    document.body.appendChild(dashboard);

  } catch (error) {
    console.error("Gagal mengambil lamaran:", error);
    alert("Gagal mengambil data lamaran.");
  }
}

// ================= PROFIL DIRI PENCARI KERJA =================

async function showJobseekerProfile() {
  const userData = localStorage.getItem("cariKerjakuUser");
  const language = localStorage.getItem("siteLanguage") || "id";
  const accessToken = localStorage.getItem("cariKerjakuAccessToken");

  if (!userData) {
    alert(
      language === "en"
        ? "Please log in first."
        : "Silakan login terlebih dahulu."
    );
    return;
  }

  let user;

  try {
    user = JSON.parse(userData);
  } catch (error) {
    alert(
      language === "en"
        ? "Invalid account data. Please log in again."
        : "Data akun tidak valid. Silakan login kembali."
    );
    return;
  }

  const dashboard = document.createElement("div");

  dashboard.id = "jobseekerProfile";

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
            ${language === "en" ? "My Profile" : "Profil Diri"}
          </div>
        </div>

        <button
          type="button"
          onclick="showJobseekerDashboard()"
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
          ← ${language === "en" ? "Back" : "Kembali"}
        </button>

      </div>

      <div style="
        max-width:850px;
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

          <h1 style="
            margin-top:0;
            color:#172b4d;
            font-size:26px;
          ">
            👤 ${language === "en" ? "My Profile" : "Profil Diri"}
          </h1>

          <div style="
            text-align:center;
            margin:25px 0 30px;
          ">

            <div style="
              width:120px;
              height:120px;
              border-radius:50%;
              background:#e8eef6;
              margin:auto;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:55px;
              border:4px solid #dbe3ec;
            ">
              👤
            </div>

           <input
  id="jobseekerPhotoInput"
  type="file"
  accept="image/*"
  style="display:none;"
>

<button
  type="button"
  onclick="document.getElementById('jobseekerPhotoInput').click()"
  style="
    margin-top:15px;
    padding:10px 18px;
    background:#123b6d;
    color:white;
    border:none;
    border-radius:8px;
    cursor:pointer;
    font-weight:bold;
  "
>
  ${language === "en" ? "Upload Photo" : "Upload Foto"}
</button>

          </div>

          <label>
            ${language === "en" ? "Full Name" : "Nama Lengkap"}
          </label>

          <input
            id="jobseekerFullName"
            type="text"
            placeholder="${language === "en" ? "Enter your full name" : "Masukkan nama lengkap"}"
            style="
              width:100%;
              box-sizing:border-box;
              padding:12px;
              margin:8px 0 18px;
              border:1px solid #dbe3ec;
              border-radius:8px;
            "
          >

          <label>
            ${language === "en" ? "Phone Number" : "Nomor Telepon"}
          </label>

          <input
            id="jobseekerPhone"
            type="text"
            placeholder="${language === "en" ? "Enter phone number" : "Masukkan nomor telepon"}"
            style="
              width:100%;
              box-sizing:border-box;
              padding:12px;
              margin:8px 0 18px;
              border:1px solid #dbe3ec;
              border-radius:8px;
            "
          >

          <label>
            ${language === "en" ? "City / Location" : "Kota / Domisili"}
          </label>

          <input
            id="jobseekerCity"
            type="text"
            placeholder="${language === "en" ? "Enter your city" : "Masukkan kota domisili"}"
            style="
              width:100%;
              box-sizing:border-box;
              padding:12px;
              margin:8px 0 18px;
              border:1px solid #dbe3ec;
              border-radius:8px;
            "
          >

          <label>
            ${language === "en" ? "Education" : "Pendidikan"}
          </label>

          <textarea
            id="jobseekerEducation"
            placeholder="${language === "en" ? "Your education" : "Pendidikan kamu"}"
            style="
              width:100%;
              box-sizing:border-box;
              min-height:90px;
              padding:12px;
              margin:8px 0 18px;
              border:1px solid #dbe3ec;
              border-radius:8px;
              resize:vertical;
            "
          ></textarea>

          <label>
            ${language === "en" ? "Work Experience" : "Pengalaman Kerja"}
          </label>

          <textarea
            id="jobseekerExperience"
            placeholder="${language === "en" ? "Your work experience" : "Pengalaman kerja kamu"}"
            style="
              width:100%;
              box-sizing:border-box;
              min-height:120px;
              padding:12px;
              margin:8px 0 18px;
              border:1px solid #dbe3ec;
              border-radius:8px;
              resize:vertical;
            "
          ></textarea>

          <label>
            ${language === "en" ? "Skills" : "Keahlian"}
          </label>

          <textarea
            id="jobseekerSkills"
            placeholder="${language === "en" ? "Your skills" : "Keahlian kamu"}"
            style="
              width:100%;
              box-sizing:border-box;
              min-height:90px;
              padding:12px;
              margin:8px 0 25px;
              border:1px solid #dbe3ec;
              border-radius:8px;
              resize:vertical;
            "
          ></textarea>

          <button
            id="saveJobseekerProfileBtn"
            type="button"
            style="
              width:100%;
              padding:14px;
              background:#123b6d;
              color:white;
              border:none;
              border-radius:9px;
              cursor:pointer;
              font-size:16px;
              font-weight:bold;
            "
          >
            ${language === "en" ? "Save Profile" : "Simpan Profil"}
          </button>

        </div>
      </div>
    </div>
  `;

  document.body.innerHTML = "";
  document.body.appendChild(dashboard);
  try {
    const response = await fetch(
      `${SUPABASE_URL}jobseeker_profiles?id=eq.${user.id}&select=*`,
      {
        method: "GET",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${accessToken}`
        }
      }
    );

    if (response.ok) {
      const profiles = await response.json();

      if (profiles.length > 0) {
        const profile = profiles[0];

        document.getElementById("jobseekerFullName").value =
          profile.full_name || "";

        document.getElementById("jobseekerPhone").value =
          profile.phone || "";

        document.getElementById("jobseekerCity").value =
          profile.city || "";

        document.getElementById("jobseekerEducation").value =
          profile.education || "";

        document.getElementById("jobseekerExperience").value =
          profile.experience || "";

        document.getElementById("jobseekerSkills").value =
          profile.skills || "";
      }
    }
  } catch (error) {
    console.error("Gagal mengambil profil:", error);
  }
  

  const saveButton = document.getElementById("saveJobseekerProfileBtn");

  if (saveButton) {
    saveButton.addEventListener("click", async () => {

      const accessToken = localStorage.getItem("cariKerjakuAccessToken");

      if (!accessToken) {
        alert(
          language === "en"
            ? "Your session was not found. Please log in again."
            : "Sesi Anda tidak ditemukan. Silakan login kembali."
        );
        return;
      }

      const profileData = {
        id: user.id,
        full_name: document.getElementById("jobseekerFullName")?.value.trim() || "",
        phone: document.getElementById("jobseekerPhone")?.value.trim() || "",
        city: document.getElementById("jobseekerCity")?.value.trim() || "",
        education: document.getElementById("jobseekerEducation")?.value.trim() || "",
        experience: document.getElementById("jobseekerExperience")?.value.trim() || "",
        skills: document.getElementById("jobseekerSkills")?.value.trim() || "",
        updated_at: new Date().toISOString()
      };

      saveButton.disabled = true;
      saveButton.textContent =
        language === "en" ? "Saving..." : "Menyimpan...";

      try {
        const response = await fetch(
          `${SUPABASE_URL}jobseeker_profiles`,
          {
            method: "POST",
            headers: {
              apikey: SUPABASE_KEY,
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
              Prefer: "resolution=merge-duplicates,return=minimal"
            },
            body: JSON.stringify(profileData)
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        }

       alert(
           language === "en"
          ? "Profile saved successfully."
          : "Profil berhasil disimpan."
        );

        showJobseekerDashboard();
      } catch (error) {

        console.error("Gagal menyimpan profil:", error);

        alert(
          language === "en"
            ? "Failed to save profile."
            : "Gagal menyimpan profil."
        );

      } finally {

        saveButton.disabled = false;
        saveButton.textContent =
          language === "en" ? "Save Profile" : "Simpan Profil";
      }
    });
  }
}

// ================= GLOBAL TRANSLATION ENGINE v2 =================

let globalTranslationCache = {};

async function translateGlobalPage() {
  const language =
    localStorage.getItem("siteLanguage") || "id";

  if (language !== "en") return;

  const elements = [];

  document.querySelectorAll("body *").forEach((el) => {
    if (el.children.length !== 0) return;

    const text = el.textContent.trim();

    if (!text) return;

    // Jangan kirim angka / simbol saja
    if (/^[\d\s.,:%/+\-–—]+$/.test(text)) return;

    elements.push({
      el,
      text
    });
  });

  if (!elements.length) return;

  // Ambil hanya teks yang belum pernah diterjemahkan
  const texts = [
    ...new Set(
      elements
        .map(item => item.text)
        .filter(text => !globalTranslationCache[text])
    )
  ];

  if (!texts.length) {
    // Terapkan cache yang sudah ada
    elements.forEach(({ el, text }) => {
      if (globalTranslationCache[text]) {
        el.textContent = globalTranslationCache[text];
      }
    });
    return;
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}functions/v1/translate-global`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_KEY
        },
        body: JSON.stringify({
          texts,
          targetLanguage: "en"
        })
      }
    );

    if (!response.ok) {
      console.error(
        "Global translation error:",
        await response.text()
      );
      return;
    }

    const data = await response.json();

    if (
      !data.translations ||
      !Array.isArray(data.translations)
    ) {
      console.error("Invalid translation response:", data);
      return;
    }

    texts.forEach((original, index) => {
      if (data.translations[index]) {
        globalTranslationCache[original] =
          data.translations[index];
      }
    });

    // Terapkan HASIL LENGKAP sekaligus
    elements.forEach(({ el, text }) => {
      const translated =
        globalTranslationCache[text];

      if (translated) {
        el.textContent = translated;
      }
    });

  } catch (error) {
    console.error(
      "Global translation failed:",
      error
    );
  }
}


// Jalankan setelah halaman selesai dibuat
async function runGlobalTranslation() {
  if (
    (localStorage.getItem("siteLanguage") || "id") === "en"
  ) {
    await new Promise(resolve =>
      setTimeout(resolve, 500)
    );

    await translateGlobalPage();
  }
}


// Pantau perubahan halaman,
// tetapi TIDAK langsung memanggil Gemini setiap perubahan.
let globalTranslationTimer = null;

const globalObserver =
  new MutationObserver(() => {

    if (
      localStorage.getItem("siteLanguage") !== "en"
    ) {
      return;
    }

    clearTimeout(globalTranslationTimer);

    globalTranslationTimer = setTimeout(() => {
      translateGlobalPage();
    }, 1500);
  });

if (document.body) {
  globalObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
}




// Saat halaman pertama kali dibuka
window.addEventListener("load", () => {
  runGlobalTranslation();
});

/* =========================================================
   GLOBAL LANGUAGE MANAGER v3
   Global layer di atas sistem translate lama
   ========================================================= */

(function () {

  const LANGUAGE_KEY = "siteLanguage";

  const translations = {

    /* NAVIGATION */
    "Beranda": "Home",
    "Cari Kerja": "Find a Job",
    "Lowongan": "Jobs",
    "Perusahaan": "Companies",
    "Profil": "Profile",
    "Masuk": "Login",
    "Daftar": "Register",
    "Keluar": "Logout",
    "Kontak": "Contact",
    "Bantuan": "Help",
    "Dashboard": "Dashboard",

    /* SEARCH */
    "Cari": "Search",
    "Cari Lowongan": "Search Jobs",
    "Cari pekerjaan": "Search jobs",
    "Cari pekerjaan...": "Search jobs...",
    "Semua Kota": "All Cities",
    "Semua Jenis Pekerjaan": "All Job Types",
    "Jenis Pekerjaan": "Job Type",
    "Kategori Pekerjaan": "Job Category",
    "Lokasi": "Location",
    "Kota": "City",
    "Pilih Kota": "Select City",
    "Pilih kategori": "Select category",
    "Pilih jenis pekerjaan": "Select job type",

    /* JOBS */
    "Lihat detail": "View details",
    "Lihat Detail": "View Details",
    "Lamar": "Apply",
    "Lamar →": "Apply →",
    "Belum Ada Lowongan": "No Jobs Available",
    "Lowongan Belum Tersedia": "Jobs Not Available",
    "Tanpa Judul": "Untitled",
    "Detail Pekerjaan": "Job Details",
    "Detail Lowongan": "Job Details",
    "Informasi Pekerjaan": "Job Information",
    "Deskripsi": "Description",
    "Deskripsi Pekerjaan": "Job Description",
    "Persyaratan": "Requirements",
    "Syarat / Kualifikasi": "Requirements / Qualifications",

    /* COMPANY */
    "Dashboard Perusahaan": "Company Dashboard",
    "Profil Perusahaan": "Company Profile",
    "Pasang Lowongan": "Post a Job",
    "Lowongan Saya": "My Jobs",
    "Lamaran Masuk": "Incoming Applications",
    "Simpan Lowongan": "Save Job",
    "Edit": "Edit",
    "Hapus": "Delete",
    "Batal": "Cancel",
    "Simpan": "Save",
    "Kembali": "Back",
    "Perusahaan Anda": "Your Company",
    "Nama Perusahaan": "Company Name",
    "Alamat Perusahaan": "Company Address",
    "Tentang Perusahaan": "About the Company",
    "Website Perusahaan": "Company Website",

    /* JOBSEEKER */
    "Dashboard Pencari Kerja": "Jobseeker Dashboard",
    "Pencari Kerja": "Jobseeker",
    "Profil Diri": "Personal Profile",
    "Lamaran Saya": "My Applications",
    "CV": "Resume",
    "Unggah CV": "Upload Resume",
    "Upload CV": "Upload Resume",
    "Hapus CV": "Delete Resume",
    "Belum ada CV": "No resume uploaded",
    "Pengalaman Kerja": "Work Experience",
    "Pendidikan": "Education",
    "Pendidikan Minimal": "Minimum Education",

    /* APPLICATION */
    "Lamaran": "Application",
    "Lamaran Pekerjaan": "Job Application",
    "Detail Lamaran": "Application Details",
    "Posisi": "Position",
    "Tanggal Lamaran": "Application Date",
    "Status": "Status",
    "Menunggu": "Pending",
    "Diterima": "Accepted",
    "Ditolak": "Rejected",
    "Belum ada lamaran": "No applications yet",
    "Belum Ada Lamaran": "No Applications Yet",

    /* POST JOB */
    "Judul / Posisi Pekerjaan": "Job Title / Position",
    "Lokasi / Kota": "Location / City",
    "Gaji": "Salary",
    "Lengkapi informasi pekerjaan yang ingin Anda tawarkan.":
      "Complete the job information you want to offer.",

    /* COMMON */
    "Notifikasi": "Notifications",
    "Berhasil": "Success",
    "Gagal": "Failed",
    "Loading": "Loading",
    "Memuat...": "Loading...",
    "Silakan tunggu...": "Please wait...",
    "Terjadi kesalahan": "An error occurred",
    "Tidak ada data": "No data available",
    "Tidak ditemukan": "Not found",
    "Ya": "Yes",
    "Tidak": "No",
    "Tutup": "Close",
    "Konfirmasi": "Confirmation",
    "Selanjutnya": "Next",
    "Sebelumnya": "Previous",
    "Kirim": "Send",

    /* HOME */
    "Temukan Pekerjaan Impianmu":
      "Find Your Dream Job",
    "Cari pekerjaan impianmu":
      "Find your dream job",
    "Mulai Cari": "Start Searching",
    "Pelajari Lebih Lanjut": "Learn More",

    /* EXTRA COMMON PHRASES */
    "Daftar lowongan perusahaan Anda.":
      "Your company's job listings.",
    "Lowongan perusahaan akan muncul di sini.":
      "Your company's job listings will appear here.",
    "Lamaran pekerjaan yang kamu kirim akan muncul di sini.":
      "The jobs you apply for will appear here.",
    "← Dashboard":
      "← Dashboard",
    "Status: Menunggu":
      "Status: Pending",
    "Status: Diterima":
      "Status: Accepted",
    "Status: Ditolak":
      "Status: Rejected",
    "Tanggal:":
      "Date:",
    "Perusahaan:":
      "Company:",
    "Lokasi:":
      "Location:",
    "Posisi:":
      "Position:"
  };


  /* =========================================================
     GET LANGUAGE
     ========================================================= */

  function getLanguage() {
    return localStorage.getItem(LANGUAGE_KEY) === "en"
      ? "en"
      : "id";
  }


  /* =========================================================
     PARTIAL TRANSLATION
     Bisa menerjemahkan bagian dari kalimat dinamis.
     Contoh:
     "Status: Menunggu" -> "Status: Pending"
     "Belum Ada Lowongan Marketing"
     -> "No Jobs Available Marketing"
     ========================================================= */

  function translateText(text) {

    if (!text || getLanguage() !== "en") {
      return text;
    }

    let result = text;

    const keys = Object.keys(translations)
      .sort(function (a, b) {
        return b.length - a.length;
      });

    keys.forEach(function (key) {

      if (result.includes(key)) {
        result = result.split(key).join(translations[key]);
      }

    });

    return result;
  }


  /* =========================================================
     TRANSLATE TEXT NODE
     ========================================================= */

  function translateTextNode(node) {

    if (!node || node.nodeType !== Node.TEXT_NODE) {
      return;
    }

    const parent = node.parentElement;

    if (!parent) {
      return;
    }

    const tag = parent.tagName;

    if (
      tag === "SCRIPT" ||
      tag === "STYLE" ||
      tag === "NOSCRIPT"
    ) {
      return;
    }

    const original = node.nodeValue;

    if (!original || !original.trim()) {
      return;
    }

    const translated = translateText(original);

    if (translated !== original) {
      node.nodeValue = translated;
    }
  }


  /* =========================================================
     TRANSLATE ELEMENT
     ========================================================= */

  function translateElement(element) {

    if (
      !element ||
      element.nodeType !== Node.ELEMENT_NODE
    ) {
      return;
    }

 if (
  element.id === "authModal" ||
  element.closest("#authModal") ||
  element.id === "companyDashboard" ||
  element.closest("#companyDashboard") ||
  element.id === "postJobFormContainer" ||
  element.closest("#postJobFormContainer")
) {
  return;
}
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT
    );

    const nodes = [];

    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach(function (node) {
      translateTextNode(node);
    });


    /* PLACEHOLDER */

    if (element.hasAttribute("placeholder")) {

      const value =
        element.getAttribute("placeholder");

      const translated =
        translateText(value);

      if (translated !== value) {
        element.setAttribute(
          "placeholder",
          translated
        );
      }
    }


    /* TITLE */

    if (element.hasAttribute("title")) {

      const value =
        element.getAttribute("title");

      const translated =
        translateText(value);

      if (translated !== value) {
        element.setAttribute(
          "title",
          translated
        );
      }
    }


    /* ARIA LABEL */

    if (element.hasAttribute("aria-label")) {

      const value =
        element.getAttribute("aria-label");

      const translated =
        translateText(value);

      if (translated !== value) {
        element.setAttribute(
          "aria-label",
          translated
        );
      }
    }

  }


  /* =========================================================
     APPLY
     ========================================================= */

  function apply() {

    if (getLanguage() !== "en") {
      return;
    }

    if (!document.body) {
      return;
    }

    translateElement(document.body);


    /* SELECT OPTIONS */

    document
      .querySelectorAll("option")
      .forEach(function (option) {

        const original =
          option.textContent;

        const translated =
          translateText(original);

        if (translated !== original) {
          option.textContent = translated;
        }

      });

  }


  /* =========================================================
     MUTATION OBSERVER
     Menangkap konten yang dibuat setelah halaman dibuka
     ========================================================= */

  let observer = null;
  let timer = null;

  function startObserver() {

    if (observer) {
      observer.disconnect();
    }

    observer = new MutationObserver(
      function () {

        if (getLanguage() !== "en") {
          return;
        }

        clearTimeout(timer);

        timer = setTimeout(function () {
          apply();
        }, 30);

      }
    );

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

  }


  /* =========================================================
     STOP
     ========================================================= */

  function stopObserver() {

    if (observer) {
      observer.disconnect();
      observer = null;
    }

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

  }


  /* =========================================================
     PUBLIC MANAGER
     ========================================================= */

  window.LanguageManager = {

    get: getLanguage,

    apply: function () {
      apply();
    },

    set: function (language) {

      const lang =
        language === "en"
          ? "en"
          : "id";

      localStorage.setItem(
        LANGUAGE_KEY,
        lang
      );

      document.documentElement.lang = lang;


      /*
       * SISTEM TRANSLATE LAMA TETAP BERJALAN
       */

      if (
        typeof window.setLanguage === "function" &&
        window.setLanguage !== window.LanguageManager.set
      ) {

        try {
          window.setLanguage(lang);
        } catch (error) {
          console.warn(
            "Legacy language system error:",
            error
          );
        }

      }


      /*
       * GLOBAL MANAGER
       */

      if (lang === "en") {

        setTimeout(function () {

          apply();
          startObserver();

        }, 100);

      } else {

        stopObserver();

      }

    }

  };


  /* =========================================================
     INITIAL LOAD
     ========================================================= */

  document.addEventListener(
    "DOMContentLoaded",
    function () {

      if (getLanguage() === "en") {

        setTimeout(function () {

          apply();
          startObserver();

        }, 300);

      }

    }
  );

})();
