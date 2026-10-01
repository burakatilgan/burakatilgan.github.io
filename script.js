// ===== TRANSLATIONS =====
// English text lives in index.html and is captured on load; only Turkish is defined here.
const translations = {
    tr: {
        nav_about: "Hakkımda",
        nav_experience: "Deneyim",
        nav_projects: "Projeler",
        nav_contact: "İletişim",
        hero_badge: "Her ölçekte işletme için özel yazılım",
        hero_title: "Yazılım Mühendisi",
        hero_desc: "İşletmenizin çalışma şeklini yazılıma dönüştürüyorum — sipariş takibi, planlama, stok, randevu, raporlama. C#, .NET ve SQL ile her gün canlı çalışan ERP, MES ve yönetim sistemleri geliştiren 5+ yıllık tecrübe.",
        hero_work: "Çalışmalarım",
        hero_cta: "İletişime Geç",
        flow_order: "Sipariş",
        flow_plan: "Planlama",
        flow_prod: "Üretim",
        flow_pack: "Paketleme",
        flow_ship: "Sevkiyat",
        chip_trace: "İzlenebilirlik",
        about_title: 'Günlük iş akışınızdan <span class="gradient-text">çalışan yazılıma</span>',
        about_p1: 'C#, .NET ve SQL ile <strong>ERP</strong>, <strong>MES</strong> ve <strong>yönetim sistemleri</strong> geliştiren, 5+ yıl deneyimli bir <strong>Yazılım Mühendisiyim</strong> — işletmenin gerçekte nasıl çalıştığına göre şekillenen yazılımlar yapıyorum.',
        about_p2: "Fabrika, atölye, klinik ya da güzellik merkezi — hangisini işletiyor olursanız olun; planlama, stok, müşteri ve raporlama süreçlerinizi basit ve güvenilir bir yazılıma dönüştürüyorum, her gün kullanan kişilerle yakın çalışarak.",
        focus_trace: "Özel İşletme Yazılımı",
        focus_wh: "Stok & Envanter",
        focus_plan: "Planlama & Zamanlama",
        stat_exp: "Yıl Deneyim",
        stat_factories: "Dijitalleşen Fabrika",
        stat_companies: "Şirket",
        stat_tech: "Teknoloji",
        exp_title: 'Nerelerde <span class="gradient-text">ürettim</span>',
        now: "Şu an",
        exp1_role: "Yazılım Mühendisi",
        exp1_date: "Mar 2023 – Halen",
        exp1_d1: "İki ayrı üretim tesisi için yazılım çözümleri geliştirdim: Kemalpaşa (ofset baskı) ve Polikon (BOPP film).",
        exp1_d2: "Canlı üretim ortamlarında kullanılan MES, ERP ve APS yeteneklerini tasarlayıp hayata geçirdim.",
        exp1_d3: "Kemalpaşa fabrikası için <strong>Panoptis Portal</strong>'ı geliştirdim — sipariş yönetimi, üretim planlama, iş akışı takibi, depo ve sevkiyat yönetimi.",
        exp1_d4: "Polikon fabrikası için <strong>PolikonHub</strong>'ı geliştirdim — Google OR-Tools ile üretim planlama ve siparişten sevkiyata uçtan uca üretim akışları.",
        exp1_d5: "Üretim, dilme, tartım, paletleme ve sevkiyat süreçlerinde barkod izlenebilirliğini uyguladım.",
        exp1_d6: "Fabrika operasyonlarını dijitalleştirmek için üretim planlama, kalite güvence, lojistik ve depo ekipleriyle yakın çalıştım.",
        exp2_role: "Yazılım Mühendisi & IT Uzmanı",
        exp2_date: "Şub 2022 – Mar 2023",
        exp2_d1: "Canias ERP ve TROIA ile özel ERP modülleri geliştirip iş süreçlerini optimize ettim.",
        exp2_d2: "Üretim verimliliği ve operatör verisi raporlaması için bir Endüstri 4.0 entegrasyon çözümü geliştirdim.",
        exp2_d3: "Sunucu, yedekleme, IP telefon ve güvenlik sistemlerini kapsayan BT altyapısını yönettim.",
        exp2_d4: "Rutin bakım işlerini otomatikleştirerek operasyonel verimliliği artırdım.",
        exp3_role: "Stajyer Yazılım Mühendisi",
        exp3_date: "Kas 2021 – Oca 2022",
        exp3_d1: "Sunucu izleme ve sistem arızalarında otomatik e-posta bildirimi için Python scriptleri geliştirdim.",
        exp3_d2: "Flutter ile barkodlu depo sayım uygulaması ve statik ürün kataloğu uygulaması geliştirdim.",
        exp3_d3: "Sunucu bakımı, veri yedekleme ve ağ kablolama çalışmalarına destek verdim.",
        projects_title: 'Öne çıkan <span class="gradient-text">projeler</span>',
        proj1_where: "İkon Ambalaj · Polikon Fabrikası",
        proj1_kind: "MES & APS Platformu",
        proj1_d1: "BOPP film üretimi için MES ve APS platformu.",
        proj1_d2: "Google OR-Tools ile otomatik üretim planlama ve makine kapasite optimizasyonu.",
        proj1_d3: "Sipariş → üretim → dilme → paletleme → sevkiyat; barkod izlenebilirliği ve Netsis ERP entegrasyonu ile.",
        proj2_where: "İkon Ambalaj · Kemalpaşa Fabrikası",
        proj2_kind: "MES / ERP Platformu",
        proj2_d1: "Ofset baskı operasyonları için üretim yönetim platformu.",
        proj2_d2: "Sipariş yönetimi, üretim planlama, iş akışı takibi, depo ve sevkiyat yönetimi.",
        proj2_d3: "Fabrika süreçlerini dijitalleştirdi, üretimde gerçek zamanlı görünürlüğü artırdı.",
        proj3_title: 'ERP Endüstri 4.0 Entegrasyonu <span class="project-kind">TROIA ile</span>',
        proj3_d1: "Üretim verimliliği ve operatör verilerini raporlayan sistem.",
        proj3_d2: "Canias ERP ortamında ERP süreçleriyle entegrasyonu destekler.",
        more_title: "Diğer çalışmalar",
        mini1_title: "Tasarım-Veritabanı Entegrasyon Servisi",
        mini1_desc: "Tasarım XML çıktılarını izler; ürün bilgilerini ve Pantone verilerini çıkarır, EAN/GTIN barkod üretir, revizyonları takip eder.",
        mini2_title: "Otomatik Haftalık Ürün Raporları",
        mini2_desc: "GTIN tabanlı Excel raporları ve HTML e-postaları zamanında üreten, yeniden deneme mekanizmalı Windows Servisi.",
        mini3_title: "CRM-ERP Veri Senkronizasyon Servisi",
        mini3_desc: "Üretim siparişlerini, makine atamalarını ve teslimat durumlarını MySQL ile SQL Server arasında sürekli senkronize eder.",
        contact_title: 'İşinize tam oturan <span class="gradient-text">bir yazılım yapalım.</span>',
        contact_subtitle: "Yeni fırsatlara, iş birliklerine ya da sadece bir merhabaya açığım.",
        contact_email: "E-posta",
        footer: "&copy; 2026 Burak Atılgan. Tüm hakları saklıdır."
    }
};


const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

function storageGet(key) {
    try { return localStorage.getItem(key); } catch { return null; }
}

function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch { /* ignore */ }
}

// ===== LANGUAGE SWITCHER =====
const i18nEls = document.querySelectorAll('[data-i18n]');
i18nEls.forEach(el => { el.dataset.en = el.innerHTML; });

let currentLang = storageGet('lang') === 'tr' ? 'tr' : 'en';

function setLanguage(lang) {
    currentLang = lang;
    storageSet('lang', lang);
    document.documentElement.lang = lang;

    i18nEls.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = lang === 'en' ? el.dataset.en : translations.tr[key];
        if (value) el.innerHTML = value;
    });

    const toggle = document.getElementById('langToggle');
    toggle.classList.toggle('tr', lang === 'tr');
    toggle.querySelectorAll('.lang-opt').forEach(opt => {
        opt.classList.toggle('on', opt.dataset.lang === lang);
    });

    document.title = lang === 'en'
        ? 'Burak Atılgan | Software Engineer'
        : 'Burak Atılgan | Yazılım Mühendisi';

}

document.getElementById('langToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'tr' : 'en');
});


setLanguage(currentLang);

// ===== NAVBAR / SCROLL PROGRESS / ACTIVE LINK =====
const navbar = document.getElementById('navbar');
const progress = document.getElementById('scrollProgress');
const sections = document.querySelectorAll('section[id]');
const timeline = document.getElementById('timeline');
const timelineFill = document.getElementById('timelineFill');

function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    navbar.classList.toggle('scrolled', y > 40);
    progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;

    const probe = y + window.innerHeight * 0.35;
    sections.forEach(section => {
        const link = document.querySelector(`.nav-links a[href="#${section.id}"]`);
        if (!link) return;
        const inView = probe >= section.offsetTop && probe < section.offsetTop + section.offsetHeight;
        link.classList.toggle('active', inView);
    });

    if (timeline) {
        const rect = timeline.getBoundingClientRect();
        const start = window.innerHeight * 0.6;
        const ratio = Math.min(Math.max((start - rect.top) / rect.height, 0), 1);
        timelineFill.style.height = `${ratio * 100}%`;
    }
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
onScroll();

// ===== MOBILE NAV =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== CLEAN URL (no #hash in the address bar) =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const id = link.getAttribute('href').slice(1);
        const target = id && id !== 'hero' ? document.getElementById(id) : null;
        e.preventDefault();
        if (target) {
            target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
        }
        history.replaceState(null, '', location.pathname + location.search);
    });
});

if (location.hash) {
    history.replaceState(null, '', location.pathname + location.search);
}

// ===== REVEAL ON SCROLL =====
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('visible');
        revealObserver.unobserve(el);
        // Drop the reveal styles afterwards so hover transforms work normally
        setTimeout(() => {
            el.classList.remove('reveal');
            el.style.transitionDelay = '';
        }, 1300);
    });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => {
    const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'));
    el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 4) * 0.08}s`;
    revealObserver.observe(el);
});

// ===== COUNTERS =====
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        counterObserver.unobserve(el);

        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        if (reduceMotion) {
            el.textContent = target + suffix;
            return;
        }

        const duration = 1600;
        const startTime = performance.now();
        function update(now) {
            const p = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 4);
            el.textContent = Math.round(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    });
}, { threshold: 0.6 });

document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

// ===== POINTER EFFECTS (desktop only) =====
if (finePointer && !reduceMotion) {
    const spotlight = document.getElementById('spotlight');
    window.addEventListener('pointermove', e => {
        spotlight.style.setProperty('--mx', `${e.clientX}px`);
        spotlight.style.setProperty('--my', `${e.clientY}px`);
    }, { passive: true });

    // Border glow follows the cursor
    document.querySelectorAll('.glow-card').forEach(card => {
        card.addEventListener('pointermove', e => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--x', `${e.clientX - r.left}px`);
            card.style.setProperty('--y', `${e.clientY - r.top}px`);
        });
    });

    // 3D tilt
    document.querySelectorAll('.tilt').forEach(card => {
        const strength = card.classList.contains('ops-card') ? 8 : 4;
        card.addEventListener('pointermove', e => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            card.style.transform = `perspective(1000px) rotateX(${-py * strength}deg) rotateY(${px * strength}deg)`;
        });
        card.addEventListener('pointerleave', () => {
            card.style.transform = '';
        });
    });

    // Magnetic buttons
    document.querySelectorAll('.magnetic').forEach(btn => {
        btn.addEventListener('pointermove', e => {
            const r = btn.getBoundingClientRect();
            const dx = e.clientX - (r.left + r.width / 2);
            const dy = e.clientY - (r.top + r.height / 2);
            btn.style.transform = `translate(${dx * 0.18}px, ${dy * 0.25}px)`;
        });
        btn.addEventListener('pointerleave', () => {
            btn.style.transform = '';
        });
    });
}

// ===== LIVE FLOOR DEMO (hero visual) =====
(function liveFloor() {
    const nodes = document.querySelectorAll('.flow-node');
    const fill = document.getElementById('flowFill');
    const barcode = document.getElementById('barcode');
    const scanId = document.getElementById('scanId');
    const scanStage = document.getElementById('scanStage');
    if (!nodes.length) return;

    const stageKeys = ['order', 'planning', 'production', 'packing', 'shipment'];

    function drawBarcode() {
        barcode.innerHTML = '';
        for (let i = 0; i < 34; i++) {
            const bar = document.createElement('span');
            bar.style.width = `${[1, 1, 2, 3][Math.floor(Math.random() * 4)]}px`;
            if (Math.random() < 0.2) bar.style.opacity = '0';
            barcode.appendChild(bar);
        }
    }

    const id = 'LOT-151162';
    let step = 0;

    function render() {
        nodes.forEach((node, i) => {
            node.classList.toggle('done', i < step);
            node.classList.toggle('active', i === step);
        });
        fill.style.width = `${(step / (nodes.length - 1)) * 100}%`;
        scanStage.textContent = stageKeys[step];
    }

    drawBarcode();
    scanId.textContent = id;

    if (reduceMotion) {
        step = nodes.length - 1;
        render();
        return;
    }

    render();
    setInterval(() => {
        step++;
        if (step >= nodes.length) {
            step = 0;
            drawBarcode();
        }
        render();
    }, 1600);
})();
