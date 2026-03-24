// ===== TRANSLATIONS =====
const translations = {
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_education: "Education",
        nav_contact: "Contact",
        hero_greeting: "Hello, I'm",
        hero_title: "Software Engineer",
        hero_desc: "Detail-oriented Software Engineer with hands-on experience in developing CRM, ERP, and automation systems. Skilled in backend development, database management, and cross-functional teamwork.",
        hero_cta: "Get In Touch",
        hero_work: "View My Work",
        about_title: "About Me",
        about_p1: 'I am a detail-oriented <strong>Software Engineer</strong> with hands-on experience in developing <strong>CRM</strong>, <strong>ERP</strong>, and <strong>automation systems</strong> using .NET Framework and C#. I am adept at designing scalable solutions and continuously improving system performance.',
        about_p2: "With a background in backend development, database management, and cross-functional teamwork, I bring a comprehensive approach to every project I work on.",
        stat_exp: "Years Experience",
        stat_projects: "Projects Completed",
        stat_tech: "Technologies",
        stat_companies: "Companies",
        skills_title: "Technical Skills",
        skills_languages: "Programming Languages",
        skills_frameworks: "Frameworks",
        skills_tools: "Tools & Technologies",
        exp_title: "Professional Experience",
        exp1_role: "Software Engineer",
        exp1_date: "Mar 2023 – Present",
        exp1_d1: "Designed and developed a multi-module CRM system using C# .NET Framework (sales, production, and inventory modules).",
        exp1_d2: "Implemented reporting features for performance tracking and optimized SQL queries for faster responses.",
        exp1_d3: "Collaborated with production and sales teams to automate key business workflows.",
        exp2_role: "Software Engineer & IT Specialist",
        exp2_date: "Feb 2022 – Mar 2023",
        exp2_d1: "Developed custom ERP modules and optimized business processes using Canias ERP TROIA.",
        exp2_d2: "Managed IT infrastructure including servers, backups, IP phones, and security systems.",
        exp2_d3: "Improved operational efficiency by automating routine maintenance tasks.",
        exp3_role: "Intern Software Engineer",
        exp3_date: "Nov 2021 – Jan 2022",
        exp3_d1: "Developed Python scripts for server monitoring and automated email notifications for system issues.",
        exp3_d2: "Created a warehouse counting app and a static catalog app using Flutter.",
        exp3_d3: "Assisted in server maintenance, data backups, and network cabling.",
        projects_title: "Projects",
        proj1_title: "Enterprise Manufacturing Portal",
        proj1_desc: "Full-scale ERP web portal for textile & packaging manufacturing. Manages the entire order-to-shipment lifecycle with 15+ modules: real-time dashboard, production planning with machine scheduling, quality control with GTIN/lot traceability, warehouse & inventory management, shipping with pallet tracking, complaint management, task collaboration, and carbon emission reporting. Features role-based access control, PDF/Excel reporting, and a comprehensive master data system.",
        proj2_title: "Manufacturing & Warehouse Management System",
        proj2_desc: "Production management portal for the plastics industry with advanced cutting stock optimization using constraint programming. Covers production workflow, quality control with recipe management, sales, procurement, and shipment logistics. Includes approval-based task management and role-based access control.",
        proj3_title: "Design-to-Database Integration Service",
        proj3_desc: "Background service that bridges design software with the product database. Automatically processes exported XML files, extracts product metadata and Pantone color specs, generates EAN/GTIN barcodes, tracks revisions, and processes product images with thumbnail generation. Runs continuously with folder monitoring and full error recovery.",
        proj4_title: "Automated Weekly Product Report Service",
        proj4_desc: "Windows Service that auto-generates and distributes weekly product reports based on GTIN data. Queries the database for new/modified products, creates Excel spreadsheets and styled HTML emails, and delivers them on schedule with smart retry logic.",
        proj5_title: "CRM-to-ERP Data Sync Service",
        proj5_desc: "Real-time synchronization service that transfers production order details between a CRM (MySQL) and an ERP system (SQL Server). Runs continuously, maps order data including machine assignments and delivery statuses, and auto-deactivates outdated records.",
        proj6_title: "ERP Industry 4.0 Integration",
        proj6_desc: "Custom ERP modules for production efficiency reporting and operator performance tracking, bridging traditional ERP with Industry 4.0 concepts. Built using TROIA scripting language within the Canias ERP environment.",
        edu_title: "Education",
        edu_degree: "B.Sc. in Computer Engineering",
        edu_school: "Karabük University",
        contact_title: "Get In Touch",
        contact_subtitle: "Feel free to reach out for collaborations or just a friendly hello!",
        contact_email: "Email",
        contact_phone: "Phone",
        footer: "&copy; 2026 Burak Atılgan. All rights reserved."
    },
    tr: {
        nav_about: "Hakkımda",
        nav_skills: "Yetenekler",
        nav_experience: "Deneyim",
        nav_projects: "Projeler",
        nav_education: "Eğitim",
        nav_contact: "İletişim",
        hero_greeting: "Merhaba, Ben",
        hero_title: "Yazılım Mühendisi",
        hero_desc: "CRM, ERP ve otomasyon sistemleri üzerine uzmanlaşmış bir Yazılım Mühendisi. Backend mimarisi, veritabanı yönetimi ve departmanlar arası koordinasyonla uçtan uca çözümler üretiyorum.",
        hero_cta: "İletişime Geç",
        hero_work: "Çalışmalarım",
        about_title: "Hakkımda",
        about_p1: '<strong>Yazılım Mühendisi</strong> olarak .NET Framework ve C# ile <strong>CRM</strong>, <strong>ERP</strong> ve <strong>otomasyon sistemleri</strong> geliştiriyorum. Ölçeklenebilir mimariler tasarlıyor, sistem performansını sürekli iyileştiriyorum.',
        about_p2: "Backend geliştirme, veritabanı yönetimi ve ekipler arası koordinasyon deneyimimle her projeye bütüncül bir bakış açısı katıyorum.",
        stat_exp: "Yıl Deneyim",
        stat_projects: "Tamamlanan Proje",
        stat_tech: "Teknoloji",
        stat_companies: "Şirket",
        skills_title: "Teknik Yetenekler",
        skills_languages: "Programlama Dilleri",
        skills_frameworks: "Framework'ler",
        skills_tools: "Araçlar & Teknolojiler",
        exp_title: "Profesyonel Deneyim",
        exp1_role: "Yazılım Mühendisi",
        exp1_date: "Mar 2023 – Halen",
        exp1_d1: "C# .NET Framework ile satış, üretim ve envanter modüllerini kapsayan çok modüllü bir CRM sistemi tasarlayıp geliştirdim.",
        exp1_d2: "Performans takibine yönelik raporlama özellikleri oluşturdum, SQL sorgularını optimize ederek sistem hızını artırdım.",
        exp1_d3: "Üretim ve satış ekipleriyle koordineli çalışarak kritik iş süreçlerini otomatikleştirdim.",
        exp2_role: "Yazılım Mühendisi & IT Uzmanı",
        exp2_date: "Şub 2022 – Mar 2023",
        exp2_d1: "Canias ERP üzerinde TROIA diliyle özel modüller geliştirerek iş süreçlerini optimize ettim.",
        exp2_d2: "Sunucu, yedekleme, IP telefon ve güvenlik sistemlerini kapsayan BT altyapısını yönettim.",
        exp2_d3: "Rutin bakım süreçlerini otomatikleştirerek operasyonel verimliliği artırdım.",
        exp3_role: "Stajyer Yazılım Mühendisi",
        exp3_date: "Kas 2021 – Oca 2022",
        exp3_d1: "Sunucu izleme ve sistem arızalarında otomatik e-posta bildirimi sağlayan Python scriptleri geliştirdim.",
        exp3_d2: "Flutter ile depo sayım uygulaması ve satış ekibine yönelik katalog uygulaması geliştirdim.",
        exp3_d3: "Sunucu bakımı, veri yedekleme ve ağ altyapısı çalışmalarına katkı sağladım.",
        projects_title: "Projeler",
        proj1_title: "Kurumsal Üretim Yönetim Portalı",
        proj1_desc: "Tekstil ve ambalaj üretimi için kapsamlı ERP web portalı. 15'ten fazla modülle siparişten sevkiyata tüm yaşam döngüsünü yönetir: gerçek zamanlı dashboard, makine planlamalı üretim yönetimi, GTIN/lot izlenebilirliğiyle kalite kontrol, depo ve envanter yönetimi, palet takipli sevkiyat, şikayet yönetimi, görev yönetimi ve karbon emisyon raporlama. Rol tabanlı erişim kontrolü, PDF/Excel raporlama ve kapsamlı master data sistemi içerir.",
        proj2_title: "Üretim & Depo Yönetim Sistemi",
        proj2_desc: "Plastik sektörü için kısıt programlama ile gelişmiş kesim optimizasyonu sunan üretim yönetim portalı. Üretim iş akışı, reçete yönetimli kalite kontrol, satış, satın alma ve sevkiyat lojistiğini kapsar. Onay tabanlı görev yönetimi ve rol tabanlı erişim kontrolü içerir.",
        proj3_title: "Tasarım-Veritabanı Entegrasyon Servisi",
        proj3_desc: "Tasarım yazılımı ile ürün veritabanı arasında köprü kuran arka plan servisi. XML dosyalarını otomatik işleyerek ürün bilgilerini ve Pantone renk verilerini çıkarır, EAN/GTIN barkod üretir, revizyon takibi yapar ve ürün görsellerini küçük resim olarak işler. Klasör izleme ve otomatik hata kurtarma ile kesintisiz çalışır.",
        proj4_title: "Otomatik Haftalık Ürün Rapor Servisi",
        proj4_desc: "GTIN verilerine dayalı haftalık ürün raporlarını otomatik oluşturup dağıtan Windows Servisi. Veritabanından yeni/güncellenen ürünleri sorgular, Excel tabloları ve biçimlendirilmiş HTML e-postalar oluşturur, akıllı yeniden deneme mekanizmasıyla zamanında teslim eder.",
        proj5_title: "CRM-ERP Veri Senkronizasyon Servisi",
        proj5_desc: "CRM (MySQL) ile ERP sistemi (SQL Server) arasında üretim sipariş detaylarını aktaran gerçek zamanlı senkronizasyon servisi. Sürekli çalışır, makine atamaları ve teslimat durumları dahil sipariş verilerini eşler, eski kayıtları otomatik devre dışı bırakır.",
        proj6_title: "ERP Endüstri 4.0 Entegrasyonu",
        proj6_desc: "Geleneksel ERP'yi Endüstri 4.0 konseptleriyle birleştiren, üretim verimliliği raporlama ve operatör performans takibi için özel ERP modülleri. Canias ERP ortamında TROIA scripting dili kullanılarak geliştirildi.",
        edu_title: "Eğitim",
        edu_degree: "Bilgisayar Mühendisliği Lisans",
        edu_school: "Karabük Üniversitesi",
        contact_title: "İletişim",
        contact_subtitle: "Projeleriniz için birlikte çalışmak ister misiniz? Bana ulaşın!",
        contact_email: "E-posta",
        contact_phone: "Telefon",
        footer: "&copy; 2026 Burak Atılgan. Tüm hakları saklıdır."
    }
};

// ===== LANGUAGE SWITCHER =====
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const toggle = document.getElementById('langToggle');
    if (toggle) {
        toggle.querySelector('.lang-flag').textContent = lang === 'en' ? 'EN' : 'TR';
    }

    document.title = lang === 'en'
        ? 'Burak Atılgan | Software Engineer'
        : 'Burak Atılgan | Yazılım Mühendisi';
}

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'tr' : 'en');
        });
    }

    if (currentLang !== 'en') {
        setLanguage(currentLang);
    }
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (link) {
            if (scrollY >= top && scrollY < top + height) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNav);

// ===== SCROLL REVEAL ANIMATION =====
function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 80) {
            el.classList.add('visible');
        }
    });
}

// Add fade-in class to animatable elements
document.addEventListener('DOMContentLoaded', () => {
    const animatables = document.querySelectorAll(
        '.skill-category, .timeline-item, .project-card, .stat-card, ' +
        '.education-card, .contact-card, .about-text, .info-item'
    );

    animatables.forEach((el, i) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${i % 3 * 0.1}s`;
    });

    revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);

// ===== COUNTER ANIMATION =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        if (counter.dataset.animated) return;

        const rect = counter.getBoundingClientRect();
        if (rect.top > window.innerHeight) return;

        counter.dataset.animated = 'true';
        const target = parseInt(counter.dataset.target);
        const duration = 1500;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            counter.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    });
}

window.addEventListener('scroll', animateCounters);
document.addEventListener('DOMContentLoaded', animateCounters);

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
