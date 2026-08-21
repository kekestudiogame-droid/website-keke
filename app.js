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
  {id:36, title:"Receptionist", company:"Hospitality Indonesia", location:"Bali", category:"Administrasi", type:"Full-time", salary:"Rp 4–7 juta / bulan"},
{id:37, title:"Marketing Executive", company:"Nusantara Media", location:"Jakarta", category:"Marketing", type:"Full-time", salary:"Rp 7-10 juta / bulan"},
{id:38, title:"Accounting Staff", company:"Prima Finance", location:"Bandung", category:"Accounting", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:39, title:"HR Staff", company:"Mitra Indonesia", location:"Surabaya", category:"HRD", type:"Full-time", salary:"Rp 6-9 juta / bulan"},
{id:40, title:"Sales Executive", company:"Sukses Bersama", location:"Bekasi", category:"Sales", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:41, title:"Customer Service", company:"Layanan Cepat", location:"Tangerang", category:"Customer Service", type:"Full-time", salary:"Rp 5-7 juta / bulan"},
{id:42, title:"Admin Finance", company:"Keuangan Jaya", location:"Jakarta", category:"Accounting", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:43, title:"Digital Marketing", company:"Digital Kreatif", location:"Yogyakarta", category:"Marketing", type:"Full-time", salary:"Rp 6-9 juta / bulan"},
{id:44, title:"Warehouse Staff", company:"Logistik Indonesia", location:"Semarang", category:"Logistik", type:"Full-time", salary:"Rp 4-6 juta / bulan"},
{id:45, title:"Recruitment Staff", company:"Talenta Nusantara", location:"Jakarta", category:"HRD", type:"Full-time", salary:"Rp 6-9 juta / bulan"},
{id:46, title:"Graphic Designer", company:"Karya Visual", location:"Bandung", category:"Desain", type:"Full-time", salary:"Rp 6-9 juta / bulan"},
{id:47, title:"Content Creator", company:"Media Kreatif", location:"Jakarta", category:"Marketing", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:48, title:"IT Support", company:"Teknologi Maju", location:"Depok", category:"IT", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:49, title:"Software Engineer", company:"Tech Indonesia", location:"Jakarta", category:"IT", type:"Full-time", salary:"Rp 9-15 juta / bulan"},
{id:50, title:"Data Analyst", company:"Data Cerdas", location:"Bandung", category:"IT", type:"Full-time", salary:"Rp 8-12 juta / bulan"},
{id:51, title:"Sales Manager", company:"Bisnis Makmur", location:"Surabaya", category:"Sales", type:"Full-time", salary:"Rp 9-14 juta / bulan"},
{id:52, title:"Operations Staff", company:"Operasional Jaya", location:"Bekasi", category:"Operasional", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:53, title:"Purchasing Staff", company:"Prima Industri", location:"Tangerang", category:"Purchasing", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:54, title:"Legal Staff", company:"Hukum Indonesia", location:"Jakarta", category:"Legal", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:55, title:"Public Relations", company:"Komunikasi Jaya", location:"Yogyakarta", category:"Public Relations", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:56, title:"Social Media Specialist", company:"Brand Kreatif", location:"Jakarta", category:"Marketing", type:"Full-time", salary:"Rp 6-9 juta / bulan"},
{id:57, title:"Graphic Designer", company:"Desain Nusantara", location:"Surabaya", category:"Desain", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:58, title:"Backend Developer", company:"Solusi Teknologi", location:"Jakarta", category:"IT", type:"Full-time", salary:"Rp 9-14 juta / bulan"},
{id:59, title:"Frontend Developer", company:"Digital Nusantara", location:"Tangerang", category:"IT", type:"Full-time", salary:"Rp 8-13 juta / bulan"},
{id:60, title:"Finance Manager", company:"Finance Indonesia", location:"Jakarta", category:"Accounting", type:"Full-time", salary:"Rp 10-16 juta / bulan"},
{id:61, title:"Accounting Supervisor", company:"Akuntansi Jaya", location:"Medan", category:"Accounting", type:"Full-time", salary:"Rp 8-12 juta / bulan"},
{id:62, title:"Marketing Supervisor", company:"Pemasaran Indonesia", location:"Makassar", category:"Marketing", type:"Full-time", salary:"Rp 8-12 juta / bulan"},
{id:63, title:"Store Supervisor", company:"Retail Nusantara", location:"Bali", category:"Retail", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:64, title:"Cashier", company:"Retail Jaya", location:"Bogor", category:"Retail", type:"Full-time", salary:"Rp 4-6 juta / bulan"},
{id:65, title:"Driver", company:"Transport Indonesia", location:"Jakarta", category:"Transportasi", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:66, title:"Logistics Coordinator", company:"Logistik Nusantara", location:"Surabaya", category:"Logistik", type:"Full-time", salary:"Rp 6-9 juta / bulan"},
{id:67, title:"Customer Service Officer", company:"Pelayanan Prima", location:"Bandung", category:"Customer Service", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:68, title:"HR Manager", company:"Sumber Daya Indonesia", location:"Jakarta", category:"HRD", type:"Full-time", salary:"Rp 10-15 juta / bulan"},
{id:69, title:"Business Development", company:"Bisnis Digital", location:"Semarang", category:"Business Development", type:"Full-time", salary:"Rp 7-12 juta / bulan"},
{id:70, title:"Project Coordinator", company:"Proyek Indonesia", location:"Bekasi", category:"Project Management", type:"Full-time", salary:"Rp 7-11 juta / bulan"},
{id:71, title:"Video Editor", company:"Visual Media", location:"Bali", category:"Desain", type:"Remote", salary:"Rp 6-10 juta / bulan"},
{id:102, title:"Copywriter", company:"Kreatif Indonesia", location:"Jakarta", category:"Content", type:"Remote", salary:"Rp 5-9 juta / bulan"},
{id:103, title:"Marketing Staff", company:"Maju Bersama", location:"Jakarta", category:"Marketing", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"MB"},
{id:104, title:"Digital Marketing Specialist", company:"Digital Nusantara", location:"Bandung", category:"Marketing", type:"Full-time", salary:"Rp 6-10 juta / bulan", initials:"DN"},
{id:105, title:"Marketing Executive", company:"Citra Bisnis", location:"Surabaya", category:"Marketing", type:"Full-time", salary:"Rp 6-9 juta / bulan", initials:"CB"},
{id:106, title:"Social Media Specialist", company:"Kreatif Media", location:"Jakarta", category:"Marketing", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"KM"},
{id:107, title:"Content Marketing", company:"Media Indonesia", location:"Yogyakarta", category:"Marketing", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"MI"},
{id:108, title:"SEO Specialist", company:"Teknologi Digital", location:"Bandung", category:"Marketing", type:"Full-time", salary:"Rp 6-10 juta / bulan", initials:"TD"},
{id:109, title:"Brand Marketing Staff", company:"Brand Nusantara", location:"Jakarta", category:"Marketing", type:"Full-time", salary:"Rp 6-9 juta / bulan", initials:"BN"},
{id:110, title:"Marketing Coordinator", company:"Solusi Bisnis", location:"Semarang", category:"Marketing", type:"Full-time", salary:"Rp 7-11 juta / bulan", initials:"SB"},
{id:111, title:"Advertising Specialist", company:"Iklan Kreatif", location:"Jakarta", category:"Marketing", type:"Full-time", salary:"Rp 6-10 juta / bulan", initials:"IK"},
{id:112, title:"Marketing Manager", company:"Indonesia Maju", location:"Surabaya", category:"Marketing", type:"Full-time", salary:"Rp 10-15 juta / bulan", initials:"IM"},
{id:113, title:"Accounting Staff", company:"Keuangan Jaya", location:"Jakarta", category:"Accounting", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"KJ"},
{id:114, title:"Accounting Admin", company:"Prima Finance", location:"Bandung", category:"Accounting", type:"Full-time", salary:"Rp 5-7 juta / bulan", initials:"PF"},
{id:115, title:"Junior Accountant", company:"Mitra Keuangan", location:"Surabaya", category:"Accounting", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"MK"},
{id:116, title:"Senior Accountant", company:"Finansial Indonesia", location:"Jakarta", category:"Accounting", type:"Full-time", salary:"Rp 8-12 juta / bulan", initials:"FI"},
{id:117, title:"Finance Staff", company:"Sejahtera Finance", location:"Bekasi", category:"Finance", type:"Full-time", salary:"Rp 6-9 juta / bulan", initials:"SF"},
{id:118, title:"Finance Admin", company:"Dana Utama", location:"Tangerang", category:"Finance", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"DU"},
{id:119, title:"Financial Analyst", company:"Analisa Bisnis", location:"Jakarta", category:"Finance", type:"Full-time", salary:"Rp 8-13 juta / bulan", initials:"AB"},
{id:120, title:"Payroll Staff", company:"Sumber Daya", location:"Bandung", category:"Finance", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"SD"},
{id:121, title:"Tax Staff", company:"Pajak Indonesia", location:"Jakarta", category:"Accounting", type:"Full-time", salary:"Rp 6-9 juta / bulan", initials:"PI"},
{id:122, title:"Tax Accountant", company:"Konsultan Pajak", location:"Surabaya", category:"Accounting", type:"Full-time", salary:"Rp 7-11 juta / bulan", initials:"KP"},
{id:123, title:"Admin Staff", company:"Administrasi Utama", location:"Jakarta", category:"Administrasi", type:"Full-time", salary:"Rp 4-7 juta / bulan", initials:"AU"},
{id:124, title:"Office Admin", company:"Kantor Bersama", location:"Bandung", category:"Administrasi", type:"Full-time", salary:"Rp 4-7 juta / bulan", initials:"KB"},
{id:125, title:"Administrative Assistant", company:"Solusi Administrasi", location:"Semarang", category:"Administrasi", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"SA"},
{id:126, title:"Data Entry Staff", company:"Data Indonesia", location:"Jakarta", category:"Administrasi", type:"Full-time", salary:"Rp 4-7 juta / bulan", initials:"DI"},
{id:127, title:"Receptionist", company:"Hotel Nusantara", location:"Bali", category:"Administrasi", type:"Full-time", salary:"Rp 4-7 juta / bulan", initials:"HN"},
{id:128, title:"Secretary", company:"Perusahaan Maju", location:"Jakarta", category:"Administrasi", type:"Full-time", salary:"Rp 5-9 juta / bulan", initials:"PM"},
{id:129, title:"Customer Service", company:"Layanan Prima", location:"Surabaya", category:"Customer Service", type:"Full-time", salary:"Rp 4-7 juta / bulan", initials:"LP"},
{id:130, title:"Customer Service Representative", company:"Pelayanan Indonesia", location:"Jakarta", category:"Customer Service", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"PI"},
{id:131, title:"Customer Support", company:"Support Digital", location:"Bandung", category:"Customer Service", type:"Remote", salary:"Rp 5-8 juta / bulan", initials:"SD"},
{id:132, title:"Customer Relations Staff", company:"Relasi Indonesia", location:"Yogyakarta", category:"Customer Service", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"RI"},
{id:133, title:"Sales Executive", company:"Penjualan Jaya", location:"Jakarta", category:"Sales", type:"Full-time", salary:"Rp 5-10 juta / bulan", initials:"PJ"},
{id:134, title:"Sales Representative", company:"Sales Nusantara", location:"Bandung", category:"Sales", type:"Full-time", salary:"Rp 5-9 juta / bulan", initials:"SN"},
{id:135, title:"Sales Supervisor", company:"Distribusi Indonesia", location:"Surabaya", category:"Sales", type:"Full-time", salary:"Rp 7-11 juta / bulan", initials:"DI"},
{id:136, title:"Sales Manager", company:"Bisnis Sejahtera", location:"Jakarta", category:"Sales", type:"Full-time", salary:"Rp 10-15 juta / bulan", initials:"BS"},
{id:137, title:"Business Development Staff", company:"Bisnis Maju", location:"Bandung", category:"Business Development", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"BM"},
{id:138, title:"Business Development Executive", company:"Growth Indonesia", location:"Jakarta", category:"Business Development", type:"Full-time", salary:"Rp 7-11 juta / bulan", initials:"GI"},
{id:139, title:"Business Development Manager", company:"Bisnis Digital", location:"Surabaya", category:"Business Development", type:"Full-time", salary:"Rp 10-15 juta / bulan", initials:"BD"},
{id:140, title:"Account Executive", company:"Account Indonesia", location:"Jakarta", category:"Sales", type:"Full-time", salary:"Rp 6-10 juta / bulan", initials:"AI"},
{id:141, title:"Account Manager", company:"Mitra Bisnis", location:"Bandung", category:"Sales", type:"Full-time", salary:"Rp 8-13 juta / bulan", initials:"MB"},
{id:142, title:"HR Staff", company:"Human Resource Indonesia", location:"Jakarta", category:"HRD", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"HR"},
{id:143, title:"HR Administration", company:"SDM Nusantara", location:"Bandung", category:"HRD", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"SN"},
{id:144, title:"HR Recruiter", company:"Recruitment Jaya", location:"Jakarta", category:"HRD", type:"Full-time", salary:"Rp 6-9 juta / bulan", initials:"RJ"},
{id:145, title:"Recruitment Specialist", company:"Talent Indonesia", location:"Surabaya", category:"HRD", type:"Full-time", salary:"Rp 6-10 juta / bulan", initials:"TI"},
{id:146, title:"Talent Acquisition Specialist", company:"Talenta Maju", location:"Jakarta", category:"HRD", type:"Full-time", salary:"Rp 7-11 juta / bulan", initials:"TM"},
{id:147, title:"HR Generalist", company:"Karya Indonesia", location:"Bandung", category:"HRD", type:"Full-time", salary:"Rp 7-11 juta / bulan", initials:"KI"},
{id:148, title:"IT Support", company:"Teknologi Nusantara", location:"Jakarta", category:"IT", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"TN"},
{id:149, title:"IT Support Specialist", company:"Digital Solusi", location:"Bandung", category:"IT", type:"Full-time", salary:"Rp 6-10 juta / bulan", initials:"DS"},
{id:150, title:"IT Staff", company:"Teknologi Indonesia", location:"Surabaya", category:"IT", type:"Full-time", salary:"Rp 5-9 juta / bulan", initials:"TI"},
{id:151, title:"System Administrator", company:"Sistem Digital", location:"Jakarta", category:"IT", type:"Full-time", salary:"Rp 7-12 juta / bulan", initials:"SD"},
{id:152, title:"Network Administrator", company:"Jaringan Indonesia", location:"Bandung", category:"IT", type:"Full-time", salary:"Rp 7-11 juta / bulan", initials:"JI"},
{id:153, title:"Network Engineer", company:"Network Solusi", location:"Jakarta", category:"IT", type:"Full-time", salary:"Rp 8-13 juta / bulan", initials:"NS"},
{id:154, title:"Software Developer", company:"Software Indonesia", location:"Jakarta", category:"IT", type:"Full-time", salary:"Rp 8-15 juta / bulan", initials:"SI"},
{id:155, title:"Web Developer", company:"Web Nusantara", location:"Bandung", category:"IT", type:"Remote", salary:"Rp 7-13 juta / bulan", initials:"WN"},
{id:156, title:"Frontend Developer", company:"Frontend Digital", location:"Jakarta", category:"IT", type:"Remote", salary:"Rp 8-14 juta / bulan", initials:"FD"},
{id:157, title:"Backend Developer", company:"Backend Indonesia", location:"Surabaya", category:"IT", type:"Remote", salary:"Rp 8-15 juta / bulan", initials:"BI"},
{id:158, title:"Full Stack Developer", company:"Teknologi Maju", location:"Jakarta", category:"IT", type:"Remote", salary:"Rp 10-18 juta / bulan", initials:"TM"},
{id:159, title:"Android Developer", company:"Mobile Indonesia", location:"Bandung", category:"IT", type:"Remote", salary:"Rp 8-15 juta / bulan", initials:"MI"},
{id:160, title:"UI UX Designer", company:"Design Digital", location:"Jakarta", category:"Desain", type:"Full-time", salary:"Rp 6-10 juta / bulan", initials:"DD"},
{id:161, title:"Graphic Designer", company:"Grafis Kreatif", location:"Bandung", category:"Desain", type:"Full-time", salary:"Rp 5-9 juta / bulan", initials:"GK"},
{id:162, title:"Web Designer", company:"Web Kreatif", location:"Yogyakarta", category:"Desain", type:"Remote", salary:"Rp 6-10 juta / bulan", initials:"WK"},
{id:163, title:"Content Creator", company:"Konten Indonesia", location:"Jakarta", category:"Content", type:"Full-time", salary:"Rp 5-9 juta / bulan", initials:"KI"},
{id:164, title:"Content Writer", company:"Penulis Digital", location:"Bandung", category:"Content", type:"Remote", salary:"Rp 5-8 juta / bulan", initials:"PD"},
{id:165, title:"Copywriter", company:"Kata Kreatif", location:"Jakarta", category:"Content", type:"Remote", salary:"Rp 5-9 juta / bulan", initials:"KK"},
{id:166, title:"Video Editor", company:"Video Indonesia", location:"Bali", category:"Desain", type:"Remote", salary:"Rp 6-10 juta / bulan", initials:"VI"},
{id:167, title:"Data Analyst", company:"Data Digital", location:"Jakarta", category:"Data", type:"Full-time", salary:"Rp 8-14 juta / bulan", initials:"DD"},
{id:168, title:"Database Administrator", company:"Database Indonesia", location:"Bandung", category:"IT", type:"Full-time", salary:"Rp 8-14 juta / bulan", initials:"DI"},
{id:169, title:"Project Coordinator", company:"Proyek Maju", location:"Jakarta", category:"Project Management", type:"Full-time", salary:"Rp 7-11 juta / bulan", initials:"PM"},
{id:170, title:"Project Manager", company:"Proyek Indonesia", location:"Surabaya", category:"Project Management", type:"Full-time", salary:"Rp 10-16 juta / bulan", initials:"PI"},
{id:171, title:"Operations Staff", company:"Operasional Jaya", location:"Jakarta", category:"Operations", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"OJ"},
{id:172, title:"Operations Supervisor", company:"Operasional Indonesia", location:"Bandung", category:"Operations", type:"Full-time", salary:"Rp 7-11 juta / bulan", initials:"OI"},
{id:173, title:"Operations Manager", company:"Operasi Nusantara", location:"Surabaya", category:"Operations", type:"Full-time", salary:"Rp 10-15 juta / bulan", initials:"ON"},
{id:174, title:"Purchasing Staff", company:"Pengadaan Indonesia", location:"Jakarta", category:"Purchasing", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"PI"},
{id:175, title:"Procurement Staff", company:"Procurement Jaya", location:"Bandung", category:"Purchasing", type:"Full-time", salary:"Rp 6-9 juta / bulan", initials:"PJ"},
{id:176, title:"Warehouse Staff", company:"Gudang Indonesia", location:"Bekasi", category:"Warehouse", type:"Full-time", salary:"Rp 4-7 juta / bulan", initials:"GI"},
{id:177, title:"Warehouse Supervisor", company:"Logistik Jaya", location:"Tangerang", category:"Warehouse", type:"Full-time", salary:"Rp 7-10 juta / bulan", initials:"LJ"},
{id:178, title:"Logistics Staff", company:"Logistik Indonesia", location:"Jakarta", category:"Logistics", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"LI"},
{id:179, title:"Logistics Coordinator", company:"Distribusi Nusantara", location:"Surabaya", category:"Logistics", type:"Full-time", salary:"Rp 6-10 juta / bulan", initials:"DN"},
{id:180, title:"Production Staff", company:"Produksi Indonesia", location:"Karawang", category:"Production", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"PI"},
{id:181, title:"Production Operator", company:"Manufaktur Jaya", location:"Bekasi", category:"Production", type:"Full-time", salary:"Rp 4-7 juta / bulan", initials:"MJ"},
{id:182, title:"Production Supervisor", company:"Industri Nusantara", location:"Tangerang", category:"Production", type:"Full-time", salary:"Rp 7-11 juta / bulan", initials:"IN"},
{id:183, title:"Quality Control Staff", company:"Quality Indonesia", location:"Karawang", category:"Quality Control", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"QI"},
{id:184, title:"Quality Assurance Staff", company:"Jaminan Mutu", location:"Bandung", category:"Quality Control", type:"Full-time", salary:"Rp 6-9 juta / bulan", initials:"JM"},
{id:185, title:"Technician", company:"Teknik Indonesia", location:"Jakarta", category:"Teknik", type:"Full-time", salary:"Rp 5-9 juta / bulan", initials:"TI"},
{id:186, title:"Maintenance Staff", company:"Maintenance Jaya", location:"Bekasi", category:"Teknik", type:"Full-time", salary:"Rp 5-9 juta / bulan", initials:"MJ"},
{id:187, title:"Mechanical Engineer", company:"Engineering Indonesia", location:"Jakarta", category:"Teknik", type:"Full-time", salary:"Rp 8-13 juta / bulan", initials:"EI"},
{id:188, title:"Civil Engineer", company:"Konstruksi Nusantara", location:"Surabaya", category:"Teknik", type:"Full-time", salary:"Rp 7-12 juta / bulan", initials:"KN"},
{id:189, title:"Electrical Engineer", company:"Energi Indonesia", location:"Jakarta", category:"Teknik", type:"Full-time", salary:"Rp 8-13 juta / bulan", initials:"EI"},
{id:190, title:"Public Relations Staff", company:"Komunikasi Indonesia", location:"Jakarta", category:"Public Relations", type:"Full-time", salary:"Rp 5-9 juta / bulan", initials:"KI"},
{id:191, title:"Legal Staff", company:"Hukum Indonesia", location:"Jakarta", category:"Legal", type:"Full-time", salary:"Rp 6-10 juta / bulan", initials:"HI"},
{id:192, title:"Legal Administration", company:"Konsultan Hukum", location:"Bandung", category:"Legal", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"KH"},
{id:193, title:"Store Staff", company:"Retail Indonesia", location:"Jakarta", category:"Retail", type:"Full-time", salary:"Rp 4-7 juta / bulan", initials:"RI"},
{id:194, title:"Store Supervisor", company:"Retail Nusantara", location:"Surabaya", category:"Retail", type:"Full-time", salary:"Rp 6-9 juta / bulan", initials:"RN"},
{id:195, title:"Retail Sales Staff", company:"Toko Indonesia", location:"Bandung", category:"Retail", type:"Full-time", salary:"Rp 4-7 juta / bulan", initials:"TI"},
{id:196, title:"E-Commerce Specialist", company:"E-Commerce Indonesia", location:"Jakarta", category:"E-Commerce", type:"Full-time", salary:"Rp 6-10 juta / bulan", initials:"EI"},
{id:197, title:"Marketplace Admin", company:"Marketplace Jaya", location:"Bandung", category:"E-Commerce", type:"Full-time", salary:"Rp 5-8 juta / bulan", initials:"MJ"},
{id:198, title:"Online Sales Staff", company:"Online Nusantara", location:"Jakarta", category:"Sales", type:"Remote", salary:"Rp 5-9 juta / bulan", initials:"ON"},
{id:199, title:"Telemarketing Staff", company:"Telemarketing Indonesia", location:"Jakarta", category:"Sales", type:"Full-time", salary:"Rp 4-8 juta / bulan", initials:"TI"},
{id:200, title:"Call Center Staff", company:"Call Center Indonesia", location:"Bandung", category:"Customer Service", type:"Full-time", salary:"Rp 4-7 juta / bulan", initials:"CI"},
{id:201, title:"Training Specialist", company:"Training Indonesia", location:"Jakarta", category:"HRD", type:"Full-time", salary:"Rp 6-10 juta / bulan", initials:"TI"},
{id:202, title:"Compensation Analyst", company:"Human Capital Indonesia", location:"Jakarta", category:"HRD", type:"Full-time", salary:"Rp 7-11 juta / bulan", initials:"HC"}  
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
  modalTitle.textContent = "Daftar";
  modalText.textContent = "Buat akun untuk mulai melamar pekerjaan.";
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
      showJobseekerDashboard();      
      alert("Login berhasil!");
      modal.classList.add("hidden");
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
      max-width:900px;
      margin:30px auto;
      padding:25px;
      background:#fff;
      border-radius:12px;
      box-shadow:0 2px 10px rgba(0,0,0,.1);
      font-family:Arial,sans-serif;
    ">
      <h2>Profil Pencari Kerja</h2>

      <p>Kelola CV kamu di sini.</p>

      <label style="display:block;margin:20px 0 8px;">
        Upload CV (PDF)
      </label>

      <input
        type="file"
        id="cvFileInput"
        accept=".pdf,application/pdf"
      >

      <button
        id="uploadCvBtn"
        style="
          margin-top:15px;
          padding:10px 18px;
          cursor:pointer;
        "
      >
        Upload CV
      </button>

      <p id="cvStatus" style="margin-top:15px;"></p>
    </div>
  `;

  document.querySelector("main")?.prepend(dashboard) || document.body.appendChild(dashboard);

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
// ================= DASHBOARD PERUSAHAAN =================

function showCompanyDashboard() {
  const dashboard = document.createElement("div");

  dashboard.id = "companyDashboard";

  dashboard.innerHTML = `
    <div style="
      max-width:900px;
      margin:30px auto;
      padding:25px;
      background:#fff;
      border-radius:12px;
      box-shadow:0 2px 10px rgba(0,0,0,.1);
      font-family:Arial,sans-serif;
    ">
      <h2>Dashboard Perusahaan</h2>
      <p>Selamat datang di dashboard perusahaan.</p>

      <div style="
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
        gap:15px;
        margin-top:25px;
      ">
        <button onclick="alert('Profil Perusahaan')">
          Profil Perusahaan
        </button>

       <button onclick="showPostJobForm()">
          Pasang Lowongan
        </button>

        <button onclick="alert('Belum ada lowongan perusahaan')">
          Lowongan Saya
        </button>

        <button onclick="alert('Belum ada lamaran masuk')">
          Lamaran Masuk
        </button>

        <button onclick="companyLogout()">
          Logout
        </button>
      </div>
    </div>
  `;

  document.body.innerHTML = "";
  document.body.appendChild(dashboard);
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
      background:rgba(0,0,0,.6);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:9999;
    ">
      <div style="
        background:white;
        padding:25px;
        border-radius:12px;
        width:90%;
        max-width:500px;
      ">
        <h2>Pasang Lowongan</h2>

        <input id="jobTitle" placeholder="Judul Lowongan" style="width:100%;margin:8px 0;padding:10px;">
        <input id="jobCity" placeholder="Kota" style="width:100%;margin:8px 0;padding:10px;">
        <textarea id="jobDescription" placeholder="Deskripsi Lowongan" style="width:100%;margin:8px 0;padding:10px;"></textarea>

        <button onclick="submitJobPost()">Simpan Lowongan</button>
        <button onclick="this.closest('div[style*=fixed]').remove()">Batal</button>
      </div>
    </div>
  `;

  document.body.appendChild(form);
}

async function submitJobPost() {
  const title = document.getElementById("jobTitle").value.trim();
  const city = document.getElementById("jobCity").value.trim();
  const description = document.getElementById("jobDescription").value.trim();

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
    const response = await fetch(SUPABASE_JOBS_URL, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({
        title: title,
        city: city,
        description: description,
        user_id: user.id
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Gagal menyimpan lowongan.");
    }

    alert("Lowongan berhasil dipasang.");

    const form = document.querySelector('div[style*="fixed"]');
    if (form) form.remove();

  } catch (error) {
    alert("Gagal memasang lowongan: " + error.message);
  }
}
