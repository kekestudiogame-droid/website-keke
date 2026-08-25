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
{id:202, title:"Compensation Analyst", company:"Human Capital Indonesia", location:"Jakarta", category:"HRD", type:"Full-time", salary:"Rp 7-11 juta / bulan", initials:"HC"},
{id:203, title:"Dokter Umum", company:"Sehat Sentosa", location:"Jakarta Selatan", category:"Kesehatan", type:"Full-time", salary:"Rp 10-18 juta / bulan"},
{id:204, title:"Perawat", company:"Rumah Sehat Indonesia", location:"Jakarta Timur", category:"Kesehatan", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:205, title:"Bidan", company:"Klinik Bunda Nusantara", location:"Bogor", category:"Kesehatan", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:206, title:"Apoteker", company:"Apotek Sejahtera", location:"Depok", category:"Kesehatan", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:207, title:"Asisten Apoteker", company:"Farmasi Indonesia", location:"Tangerang", category:"Kesehatan", type:"Full-time", salary:"Rp 4-7 juta / bulan"},
{id:208, title:"Analis Laboratorium", company:"Laboratorium Prima", location:"Bandung", category:"Kesehatan", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:209, title:"Radiografer", company:"Medika Nusantara", location:"Surabaya", category:"Kesehatan", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:210, title:"Fisioterapis", company:"Rehabilitasi Sehat", location:"Jakarta Utara", category:"Kesehatan", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:211, title:"Nutrisionis", company:"Gizi Indonesia", location:"Semarang", category:"Kesehatan", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:212, title:"Psikolog", company:"Konsultasi Harmoni", location:"Jakarta Pusat", category:"Kesehatan", type:"Full-time", salary:"Rp 7-12 juta / bulan"},

{id:213, title:"Guru SD", company:"Sekolah Cerdas Indonesia", location:"Jakarta Barat", category:"Pendidikan", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:214, title:"Guru SMP", company:"Pendidikan Nusantara", location:"Bekasi", category:"Pendidikan", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:215, title:"Guru SMA", company:"Sekolah Maju", location:"Bandung", category:"Pendidikan", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:216, title:"Guru Bahasa Inggris", company:"English Center Indonesia", location:"Jakarta Selatan", category:"Pendidikan", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:217, title:"Guru Matematika", company:"Bimbingan Pintar", location:"Yogyakarta", category:"Pendidikan", type:"Part-time", salary:"Rp 3-6 juta / bulan"},
{id:218, title:"Dosen", company:"Universitas Nusantara", location:"Malang", category:"Pendidikan", type:"Full-time", salary:"Rp 7-12 juta / bulan"},
{id:219, title:"Tutor", company:"Belajar Bersama", location:"Depok", category:"Pendidikan", type:"Part-time", salary:"Rp 3-6 juta / bulan"},
{id:220, title:"Kepala Sekolah", company:"Sekolah Harapan", location:"Surakarta", category:"Pendidikan", type:"Full-time", salary:"Rp 10-16 juta / bulan"},
{id:221, title:"Konselor Pendidikan", company:"Pusat Pendidikan Indonesia", location:"Jakarta Timur", category:"Pendidikan", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:222, title:"Instruktur Pelatihan", company:"Training Center Nusantara", location:"Makassar", category:"Pendidikan", type:"Full-time", salary:"Rp 6-10 juta / bulan"},

{id:223, title:"Chef", company:"Kuliner Nusantara", location:"Jakarta Selatan", category:"Kuliner", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:224, title:"Sous Chef", company:"Restoran Indonesia", location:"Bali", category:"Kuliner", type:"Full-time", salary:"Rp 7-11 juta / bulan"},
{id:225, title:"Cook Helper", company:"Dapur Bersama", location:"Jakarta Barat", category:"Kuliner", type:"Full-time", salary:"Rp 4-6 juta / bulan"},
{id:226, title:"Baker", company:"Roti Nusantara", location:"Bandung", category:"Kuliner", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:227, title:"Pastry Chef", company:"Pastry Indonesia", location:"Surabaya", category:"Kuliner", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:228, title:"Barista", company:"Kopi Nusantara", location:"Jakarta Pusat", category:"Kuliner", type:"Full-time", salary:"Rp 4-6 juta / bulan"},
{id:229, title:"Bartender", company:"Hospitality Bali", location:"Bali", category:"Kuliner", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:230, title:"Waiter", company:"Restoran Sejahtera", location:"Jakarta Utara", category:"Kuliner", type:"Full-time", salary:"Rp 4-6 juta / bulan"},
{id:231, title:"Food & Beverage Supervisor", company:"Hotel Nusantara", location:"Yogyakarta", category:"Kuliner", type:"Full-time", salary:"Rp 6-9 juta / bulan"},
{id:232, title:"Kitchen Supervisor", company:"Dapur Indonesia", location:"Medan", category:"Kuliner", type:"Full-time", salary:"Rp 6-9 juta / bulan"},

{id:233, title:"Security Officer", company:"Keamanan Prima", location:"Jakarta Timur", category:"Keamanan", type:"Full-time", salary:"Rp 4-7 juta / bulan"},
{id:234, title:"Security Supervisor", company:"Proteksi Indonesia", location:"Tangerang", category:"Keamanan", type:"Full-time", salary:"Rp 6-9 juta / bulan"},
{id:235, title:"Petugas Parkir", company:"Parkir Nusantara", location:"Jakarta Selatan", category:"Keamanan", type:"Full-time", salary:"Rp 3-5 juta / bulan"},
{id:236, title:"Petugas Keamanan Mall", company:"Mall Indonesia", location:"Bekasi", category:"Keamanan", type:"Full-time", salary:"Rp 4-7 juta / bulan"},
{id:237, title:"Petugas K3", company:"Keselamatan Kerja Indonesia", location:"Karawang", category:"Keselamatan Kerja", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:238, title:"Safety Officer", company:"Industri Aman", location:"Cikarang", category:"Keselamatan Kerja", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:239, title:"Safety Supervisor", company:"Manufaktur Aman", location:"Surabaya", category:"Keselamatan Kerja", type:"Full-time", salary:"Rp 8-12 juta / bulan"},
{id:240, title:"Fire Safety Officer", company:"Proteksi Gedung", location:"Jakarta Pusat", category:"Keselamatan Kerja", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:241, title:"Emergency Response Officer", company:"Safety Nusantara", location:"Balikpapan", category:"Keselamatan Kerja", type:"Full-time", salary:"Rp 7-11 juta / bulan"},
{id:242, title:"Safety Inspector", company:"Konstruksi Aman", location:"Surabaya", category:"Keselamatan Kerja", type:"Full-time", salary:"Rp 6-10 juta / bulan"},

{id:243, title:"Arsitek", company:"Arsitektur Nusantara", location:"Jakarta Selatan", category:"Arsitektur", type:"Full-time", salary:"Rp 7-13 juta / bulan"},
{id:244, title:"Drafter", company:"Desain Bangunan Indonesia", location:"Bandung", category:"Arsitektur", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:245, title:"Interior Designer", company:"Ruang Indah", location:"Jakarta Barat", category:"Arsitektur", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:246, title:"Landscape Designer", company:"Taman Nusantara", location:"Bogor", category:"Arsitektur", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:247, title:"Estimator Konstruksi", company:"Konstruksi Jaya", location:"Jakarta Timur", category:"Konstruksi", type:"Full-time", salary:"Rp 7-11 juta / bulan"},
{id:248, title:"Site Engineer", company:"Bangun Indonesia", location:"Surabaya", category:"Konstruksi", type:"Full-time", salary:"Rp 7-12 juta / bulan"},
{id:249, title:"Site Supervisor", company:"Proyek Nusantara", location:"Makassar", category:"Konstruksi", type:"Full-time", salary:"Rp 7-11 juta / bulan"},
{id:250, title:"Surveyor", company:"Survey Indonesia", location:"Semarang", category:"Konstruksi", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:251, title:"Quantity Surveyor", company:"Konstruksi Mandiri", location:"Jakarta Pusat", category:"Konstruksi", type:"Full-time", salary:"Rp 7-12 juta / bulan"},
{id:252, title:"Mandor Bangunan", company:"Bangun Sejahtera", location:"Bali", category:"Konstruksi", type:"Full-time", salary:"Rp 5-8 juta / bulan"},

{id:253, title:"Auditor Internal", company:"Audit Indonesia", location:"Jakarta Selatan", category:"Audit", type:"Full-time", salary:"Rp 7-12 juta / bulan"},
{id:254, title:"Auditor Eksternal", company:"Konsultan Audit Nusantara", location:"Jakarta Pusat", category:"Audit", type:"Full-time", salary:"Rp 8-14 juta / bulan"},
{id:255, title:"Risk Analyst", company:"Manajemen Risiko Indonesia", location:"Jakarta", category:"Risk Management", type:"Full-time", salary:"Rp 8-14 juta / bulan"},
{id:256, title:"Risk Manager", company:"Risiko Nusantara", location:"Surabaya", category:"Risk Management", type:"Full-time", salary:"Rp 12-18 juta / bulan"},
{id:257, title:"Compliance Officer", company:"Kepatuhan Indonesia", location:"Jakarta Pusat", category:"Compliance", type:"Full-time", salary:"Rp 7-12 juta / bulan"},
{id:258, title:"Compliance Manager", company:"Compliance Nusantara", location:"Bandung", category:"Compliance", type:"Full-time", salary:"Rp 10-16 juta / bulan"},
{id:259, title:"Internal Control Staff", company:"Kontrol Bisnis Indonesia", location:"Tangerang", category:"Audit", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:260, title:"Fraud Analyst", company:"Keamanan Finansial", location:"Jakarta Selatan", category:"Risk Management", type:"Full-time", salary:"Rp 7-12 juta / bulan"},
{id:261, title:"Credit Analyst", company:"Pembiayaan Nusantara", location:"Medan", category:"Perbankan", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:262, title:"Loan Officer", company:"Kredit Indonesia", location:"Palembang", category:"Perbankan", type:"Full-time", salary:"Rp 5-9 juta / bulan"},

{id:263, title:"Teller Bank", company:"Bank Nusantara", location:"Jakarta Utara", category:"Perbankan", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:264, title:"Customer Service Bank", company:"Bank Indonesia", location:"Jakarta Selatan", category:"Perbankan", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:265, title:"Relationship Manager Bank", company:"Bank Sejahtera", location:"Jakarta Pusat", category:"Perbankan", type:"Full-time", salary:"Rp 8-13 juta / bulan"},
{id:266, title:"Treasury Staff", company:"Bank Finansial", location:"Jakarta", category:"Perbankan", type:"Full-time", salary:"Rp 7-12 juta / bulan"},
{id:267, title:"Investment Analyst", company:"Investasi Indonesia", location:"Jakarta Selatan", category:"Investasi", type:"Full-time", salary:"Rp 8-15 juta / bulan"},
{id:268, title:"Wealth Management Officer", company:"Investasi Nusantara", location:"Jakarta Pusat", category:"Investasi", type:"Full-time", salary:"Rp 8-14 juta / bulan"},
{id:269, title:"Insurance Advisor", company:"Asuransi Indonesia", location:"Bandung", category:"Asuransi", type:"Full-time", salary:"Rp 5-10 juta / bulan"},
{id:270, title:"Insurance Underwriter", company:"Asuransi Nusantara", location:"Jakarta", category:"Asuransi", type:"Full-time", salary:"Rp 7-12 juta / bulan"},
{id:271, title:"Insurance Claims Officer", company:"Proteksi Sejahtera", location:"Surabaya", category:"Asuransi", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:272, title:"Actuary", company:"Aktuaria Indonesia", location:"Jakarta Selatan", category:"Asuransi", type:"Full-time", salary:"Rp 10-18 juta / bulan"},

{id:273, title:"Travel Consultant", company:"Wisata Nusantara", location:"Jakarta Barat", category:"Pariwisata", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:274, title:"Tour Guide", company:"Jelajah Indonesia", location:"Bali", category:"Pariwisata", type:"Full-time", salary:"Rp 4-8 juta / bulan"},
{id:275, title:"Travel Agent Staff", company:"Liburan Indonesia", location:"Yogyakarta", category:"Pariwisata", type:"Full-time", salary:"Rp 4-7 juta / bulan"},
{id:276, title:"Hotel Front Office Staff", company:"Hotel Sejahtera", location:"Bandung", category:"Perhotelan", type:"Full-time", salary:"Rp 4-7 juta / bulan"},
{id:277, title:"Housekeeping Staff", company:"Hotel Nusantara", location:"Bali", category:"Perhotelan", type:"Full-time", salary:"Rp 4-6 juta / bulan"},
{id:278, title:"Housekeeping Supervisor", company:"Resort Indonesia", location:"Lombok", category:"Perhotelan", type:"Full-time", salary:"Rp 6-9 juta / bulan"},
{id:279, title:"Concierge", company:"Hotel Mewah Indonesia", location:"Jakarta Pusat", category:"Perhotelan", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:280, title:"Event Organizer Staff", company:"Event Nusantara", location:"Jakarta Selatan", category:"Event", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:281, title:"Event Planner", company:"Acara Indonesia", location:"Surabaya", category:"Event", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:282, title:"Wedding Planner", company:"Pernikahan Nusantara", location:"Bandung", category:"Event", type:"Full-time", salary:"Rp 5-9 juta / bulan"},

{id:283, title:"Driver Truck", company:"Transportasi Jaya", location:"Bekasi", category:"Transportasi", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:284, title:"Driver Bus", company:"Bus Nusantara", location:"Jakarta Timur", category:"Transportasi", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:285, title:"Kurir", company:"Kirim Cepat Indonesia", location:"Jakarta Utara", category:"Logistik", type:"Full-time", salary:"Rp 4-7 juta / bulan"},
{id:286, title:"Kurir Motor", company:"Antar Nusantara", location:"Depok", category:"Logistik", type:"Full-time", salary:"Rp 4-7 juta / bulan"},
{id:287, title:"Dispatcher", company:"Distribusi Cepat", location:"Tangerang", category:"Logistik", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:288, title:"Fleet Coordinator", company:"Transport Nusantara", location:"Jakarta Barat", category:"Transportasi", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:289, title:"Fleet Manager", company:"Transport Indonesia", location:"Surabaya", category:"Transportasi", type:"Full-time", salary:"Rp 9-14 juta / bulan"},
{id:290, title:"Traffic Controller", company:"Transportasi Aman", location:"Jakarta Pusat", category:"Transportasi", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:291, title:"Airline Ground Staff", company:"Aviation Indonesia", location:"Tangerang", category:"Penerbangan", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:292, title:"Flight Attendant", company:"Maskapai Nusantara", location:"Jakarta", category:"Penerbangan", type:"Full-time", salary:"Rp 7-12 juta / bulan"},

{id:293, title:"Petugas Kebersihan", company:"Cleaning Indonesia", location:"Jakarta Selatan", category:"Cleaning Service", type:"Full-time", salary:"Rp 3-5 juta / bulan"},
{id:294, title:"Cleaning Supervisor", company:"Kebersihan Nusantara", location:"Jakarta Barat", category:"Cleaning Service", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:295, title:"Teknisi AC", company:"Service Sejuk Indonesia", location:"Jakarta Timur", category:"Teknisi", type:"Full-time", salary:"Rp 5-8 juta / bulan"},
{id:296, title:"Teknisi Elektronik", company:"Elektronik Jaya", location:"Bandung", category:"Teknisi", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:297, title:"Teknisi Lift", company:"Lift Indonesia", location:"Jakarta Pusat", category:"Teknisi", type:"Full-time", salary:"Rp 6-10 juta / bulan"},
{id:298, title:"Teknisi Refrigerasi", company:"Pendingin Nusantara", location:"Surabaya", category:"Teknisi", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
{id:299, title:"Pet Groomer", company:"Pet Care Indonesia", location:"Jakarta Selatan", category:"Pet Care", type:"Full-time", salary:"Rp 4-7 juta / bulan"},
{id:300, title:"Animal Care Staff", company:"Hewan Sehat", location:"Bogor", category:"Pet Care", type:"Full-time", salary:"Rp 4-7 juta / bulan"},
{id:301, title:"Florist", company:"Bunga Nusantara", location:"Jakarta Barat", category:"Retail", type:"Full-time", salary:"Rp 4-7 juta / bulan"},
{id:302, title:"Jewelry Sales Consultant", company:"Perhiasan Indonesia", location:"Jakarta Pusat", category:"Retail", type:"Full-time", salary:"Rp 5-9 juta / bulan"},
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

         

