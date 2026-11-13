/**
 * ABDALLAH MOHAMUD ABDI — PORTFOLIO V2 "NAVY AURORA"
 * Plain JavaScript, no libraries. Each feature is a small module below;
 * new modules are added phase by phase.
 *
 *  1. Theme (dark / light / system, remembered)
 *  2. Languages (English, Somali, Arabic with right-to-left)
 *  3. Dropdown menus
 *  4. Header (scrolled state + section highlight)
 *  5. Typing role line
 *  6. Cursor spotlight on cards
 *  7. Trusted-by loop
 *  8. Showreel dialog
 */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');
  var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* 1. THEME ================================================================ */
  var Theme = {
    media: window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null,
    mode: store.get('am-theme') || 'dark',
    apply: function () {
      var dark = this.mode === 'dark' || (this.mode === 'system' && this.media && this.media.matches);
      root.setAttribute('data-theme', dark ? 'dark' : 'light');
      root.setAttribute('data-mode', this.mode);
      $$('[data-theme-pick]').forEach(function (b) { b.setAttribute('aria-checked', String(b.getAttribute('data-theme-pick') === Theme.mode)); });
      var meta = $('meta[name="theme-color"]'); if (meta) meta.setAttribute('content', dark ? '#050816' : '#F4F7FD');
    },
    set: function (mode) { this.mode = mode; store.set('am-theme', mode); this.apply(); },
    init: function () {
      var self = this;
      this.apply();
      $$('[data-theme-pick]').forEach(function (b) { b.addEventListener('click', function () { self.set(b.getAttribute('data-theme-pick')); Dropdowns.closeAll(); }); });
      if (this.media) {
        var onChange = function () { if (self.mode === 'system') self.apply(); };
        if (this.media.addEventListener) this.media.addEventListener('change', onChange); else if (this.media.addListener) this.media.addListener(onChange);
      }
    }
  };

  /* 2. LANGUAGES ============================================================ */
  var DICT = {
    en: {
      'brand.role': 'Full-Stack Developer & Designer',
      'nav.home': 'Home', 'nav.about': 'About', 'nav.services': 'Services', 'nav.work': 'Work', 'nav.certificates': 'Certificates', 'nav.contact': 'Contact',
      'theme.dark': 'Dark', 'theme.darkHint': 'Always dark', 'theme.light': 'Light', 'theme.lightHint': 'Always light', 'theme.system': 'System', 'theme.systemHint': 'Match my device',
      'cta.talk': "Let's talk",
      'hero.now': 'Final year at Hormuud University · open to freelance projects',
      'hero.lead': 'I build web and mobile apps, design their brands and film their launch videos, in English, Somali and Arabic.',
      'hero.viewWork': 'View my work', 'hero.cv': 'Download CV',
      'hero.reel': 'Watch my reel', 'hero.reelSub': 'meet the developer',
      'hero.years': 'Years building', 'hero.yearsSub': 'web, apps & media', 'hero.langs': 'Languages',
      'trusted.label': 'Trusted by',
      'about.eyebrow': 'About me', 'about.title': 'Architecting Modern Web & Connected Systems',
      'about.sub': 'A multidisciplinary blend of software development, mobile application engineering and creative digital design.',
      'about.years': 'Years of dev experience', 'about.kicker': '— Tech Innovator & Developer',
      'about.bio': 'I am <strong>Abdallah Mohamud Abdi</strong>, born on 8 August 2005 in Jeddah, Saudi Arabia. I am a passionate 4th-year Computer Science student at Hormuud University, Software Developer and Technology Enthusiast specialised in Full-Stack Web Development, Mobile Applications and Creative Multimedia solutions.',
      'about.start': 'Start a Project', 'about.wa': 'Direct WhatsApp',
      'stats.projects': 'Projects built', 'stats.posters': 'Posters designed', 'stats.live': 'Live platforms', 'stats.see': 'See them',
      'info.uni': '4th-year Computer Science student', 'info.fsTitle': 'Full-Stack Development', 'info.mobTitle': 'Mobile Applications',
      'info.mob': 'Cross-platform iOS & Android apps', 'info.locTitle': 'Location & Origins', 'info.loc': 'Born in Jeddah, KSA · Based in Mogadishu, Somalia',
      'exp.eyebrow': 'Experience', 'exp.title': 'The road so far', 'exp.all': 'All', 'exp.work': 'Work', 'exp.edu': 'Education', 'exp.award': 'Achievements',
      'exp.kindWork': 'Work', 'exp.kindEdu': 'Education', 'exp.kindAward': 'Achievement',
      'svc.eyebrow': 'What I do', 'svc.title': 'Services I offer',
      'svc.webT': 'Web Development', 'svc.webD': 'Web apps and dashboards with logins, roles and real data.',
      'svc.mobT': 'Mobile Apps', 'svc.mobD': 'Android and iOS apps with Flutter, connected to your API.',
      'svc.uiT': 'UI/UX & Branding', 'svc.uiD': 'Interfaces, logos and campaign posters that match the product.',
      'svc.vidT': 'Video & Content', 'svc.vidD': 'Launch videos, product demos and social content.', 'svc.stack': 'My stack',
      'work.eyebrow': 'My work', 'work.title': 'Recent projects', 'work.tabWeb': 'Web & Systems', 'work.tabMobile': 'Mobile Apps', 'work.tabGraphic': 'Graphic Design', 'work.tabMedia': 'Multimedia', 'work.new': 'New',
      'work.tab_web': 'Web & Systems', 'work.tab_graphic': 'Graphic Design', 'work.tab_media': 'Multimedia',
      'work.filter': 'Filter by tech', 'work.view': 'View details', 'work.open': 'Open details', 'work.live': 'Live site', 'work.github': 'View on GitHub', 'work.code': 'Code', 'work.case': 'Case study',
      'work.concept': 'Concept poster', 'work.fullSize': 'Open full size', 'work.builtWith': 'Built with', 'work.focus': 'Design focus', 'work.skills': 'Skills used', 'work.features': 'Key features',
      'work.all': 'All projects', 'work.prev': 'Previous project', 'work.next': 'Next project', 'work.more': 'More projects',
      'mob.badge': 'Case studies in progress', 'mob.title': 'One codebase, iOS and Android',
      'mob.text': 'I build cross-platform mobile apps with Flutter that talk to the same back end as your website. Detailed write-ups of my mobile work are being prepared and will appear here.',
      'mob.f1': 'One codebase for iOS and Android', 'mob.f2': 'Connected to your existing API', 'mob.f3': 'Clean, fast and easy to use', 'mob.f4': 'Ready for the app stores',
      'mob.cta': 'Start a mobile project', 'mob.web': 'See my web projects',
      'gh.title': 'Code you can check', 'gh.snapshot': 'snapshot · 12 Nov 2026', 'gh.live': 'live from GitHub', 'gh.repos': 'Public repositories', 'gh.last': 'Last update', 'gh.since': 'On GitHub since', 'gh.profile': 'View profile',
      'partners.title': 'Worked with', 'partners.sub': "Organisations I've built for",
      'cert.eyebrow': 'Certificates', 'cert.title': 'Verified credentials', 'cert.verified': 'Verified', 'cert.pdf': 'Open PDF', 'cert.download': 'Download', 'cert.all': 'All certificates',
      'cert.prev': 'Previous certificate', 'cert.next': 'Next certificate', 'cert.more': 'More certificates', 'cert.credential': 'Verified credential', 'cert.skills': 'Skills learned',
      'cert.issuer': 'Issued by', 'cert.date': 'Date', 'cert.id': 'Certificate ID',
      'cv.eyebrow': 'Curriculum vitae', 'cv.title': 'My resume, one click away', 'cv.p1': 'Full-stack web architecture, front end and back end', 'cv.p2': 'UI/UX prototyping, wireframes and brand guidelines',
      'contact.eyebrow': "Let's connect", 'contact.title': "Have a project in mind? Let's build it together.", 'contact.avail': 'Available for freelance projects',
      'contact.email': 'Email', 'contact.based': 'Based in', 'contact.place': 'Mogadishu, Somalia · works remotely',
      'contact.saveTitle': 'Save my contact', 'contact.saveText': 'Scan with your phone camera, or download my contact card.', 'contact.saveBtn': 'Save contact (.vcf)',
      'contact.modeMsg': 'Quick message', 'contact.modeBrief': 'Project brief',
      'form.name': 'Your name', 'form.email': 'Your email', 'form.need': 'What do you need?', 'form.tWeb': 'Web app', 'form.tMob': 'Mobile app', 'form.tUi': 'UI/UX & branding', 'form.tVid': 'Video & content',
      'form.msg': 'Your message', 'form.nameErr': 'Please tell me your name.', 'form.emailErr': 'Please enter a valid email so I can reply.', 'form.msgErr': 'A short message helps: at least 10 characters.',
      'form.sendEmail': 'Send by email', 'form.sendWa': 'Send on WhatsApp', 'form.note': 'Your message opens ready to send in your email app or WhatsApp. Nothing is stored on this site.',
      'form.thanks': 'Thanks, {name}!', 'form.sentEmail': "Your message is ready in your email app. Press send there and I'll get back to you soon.", 'form.sentWa': "Your message is ready in WhatsApp. Press send there and I'll get back to you soon.", 'form.again': 'Write another message',
      'brief.step': 'Step {n} of 3', 'brief.ready': 'Ready', 'brief.q1': 'What do you need?', 'brief.q2': 'Which features matter most?', 'brief.q3': 'When do you need it?', 'brief.qSum': 'Here is your brief',
      'brief.your': 'Your brief', 'brief.back': 'Back', 'brief.next': 'Next', 'brief.use': 'Use this brief',
      'search.none': 'No results. Try “React”, “CV” or “WhatsApp”.', 'search.move': 'move', 'search.open': 'open', 'search.close': 'close', 'search.light': 'Switch to light mode', 'search.dark': 'Switch to dark mode',
      'search.g_section': 'Section', 'search.g_project': 'Project', 'search.g_certificate': 'Certificate', 'search.g_work': 'Work', 'search.g_action': 'Action', 'wa.chat': 'Chat on WhatsApp',
      'cta.line1': "Let's build something", 'cta.line2': 'remarkable', 'foot.place': 'Mogadishu, Somalia', 'foot.top': 'Top',
      'cv.p3': 'Database design, API integration and security', 'cv.p4': 'Video editing, graphic design and content creation', 'cv.download': 'Download CV (PDF)', 'cv.open': 'Open in new tab', 'cv.meta': 'PDF · 1 page · updated 2026',
      roles: ['Full-Stack Developer', 'UI/UX Designer', 'Graphic Designer', 'Content Creator']
    },
    so: {
      'brand.role': 'Horumariye Full-Stack & Naqshadeeye',
      'nav.home': 'Hoyga', 'nav.about': 'Aniga', 'nav.services': 'Adeegyada', 'nav.work': 'Shaqooyinka', 'nav.certificates': 'Shahaadooyinka', 'nav.contact': 'La xiriir',
      'theme.dark': 'Mugdi', 'theme.darkHint': 'Had iyo jeer mugdi', 'theme.light': 'Iftiin', 'theme.lightHint': 'Had iyo jeer iftiin', 'theme.system': 'Nidaamka', 'theme.systemHint': 'Raac qalabkayga',
      'cta.talk': 'Aan wada hadalno',
      'hero.now': 'Sannadka ugu dambeeya Jaamacadda Hormuud · diyaar u ah mashaariic freelance ah',
      'hero.lead': 'Waxaan dhisaa app-yada web-ka iyo mobile-ka, waxaan naqshadeeyaa summaddooda, waxaanan duubaa muuqaallada lagu soo bandhigo, Af-Ingiriis, Af-Soomaali iyo Carabi.',
      'hero.viewWork': 'Eeg shaqooyinkayga', 'hero.cv': 'Soo deji CV-ga',
      'hero.reel': 'Daawo muuqaalkayga', 'hero.reelSub': 'baro horumariyaha',
      'hero.years': 'Sano oo dhisid', 'hero.yearsSub': 'web, app-yo & warbaahin', 'hero.langs': 'Luqado',
      'trusted.label': 'Waa lagu kalsoon yahay',
      'about.eyebrow': 'Ku saabsan', 'about.title': 'Dhisidda Web Casri ah iyo Nidaamyo Isku Xiran',
      'about.sub': 'Isku-dar horumarinta software-ka, injineernimada app-yada mobile-ka iyo naqshadaynta dijitaalka ah ee hal-abuurka leh.',
      'about.years': 'Sano oo khibrad horumarin ah', 'about.kicker': '— Hal-abuure Tignoolaji & Horumariye',
      'about.bio': 'Waxaan ahay <strong>Abdallah Mohamud Abdi</strong>, waxaan ku dhashay 8 Agoosto 2005 magaalada Jidda, Sacuudi Carabiya. Waxaan ahay arday sannadka 4aad ka dhigta Cilmiga Kombiyuutarka Jaamacadda Hormuud, horumariye software iyo xiise-badane tignoolajiyadeed oo ku takhasusay horumarinta Web-ka Full-Stack, app-yada mobile-ka iyo xalalka warbaahinta hal-abuurka leh.',
      'about.start': 'Bilow Mashruuc', 'about.wa': 'WhatsApp toos ah',
      'stats.projects': 'Mashaariic la dhisay', 'stats.posters': 'Boostarro la naqshadeeyay', 'stats.live': 'Madal toos ah', 'stats.see': 'Eeg',
      'info.uni': 'Arday sannadka 4aad Cilmiga Kombiyuutarka', 'info.fsTitle': 'Horumarinta Full-Stack', 'info.mobTitle': 'App-yada Mobile-ka',
      'info.mob': 'App-yo iOS & Android ah', 'info.locTitle': 'Goobta & Asalka', 'info.loc': 'Ku dhashay Jidda · Ku nool Muqdisho, Soomaaliya',
      'exp.eyebrow': 'Khibrad', 'exp.title': 'Socdaalka ilaa hadda', 'exp.all': 'Dhammaan', 'exp.work': 'Shaqo', 'exp.edu': 'Waxbarasho', 'exp.award': 'Guulo',
      'exp.kindWork': 'Shaqo', 'exp.kindEdu': 'Waxbarasho', 'exp.kindAward': 'Guul',
      'svc.eyebrow': 'Waxa aan qabto', 'svc.title': 'Adeegyada aan bixiyo',
      'svc.webT': 'Horumarinta Web-ka', 'svc.webD': 'App-yo web iyo dashboards leh gelitaan, doorar iyo xog dhab ah.',
      'svc.mobT': 'App-yada Mobile-ka', 'svc.mobD': 'App-yo Android iyo iOS ah oo Flutter lagu sameeyay, kuna xiran API-gaaga.',
      'svc.uiT': 'UI/UX & Summad', 'svc.uiD': 'Naqshado, astaamo iyo boostarro olole oo la jaanqaada badeecadda.',
      'svc.vidT': 'Muuqaal & Kontent', 'svc.vidD': 'Muuqaallo soo bandhig, demo badeecad iyo kontent baraha bulshada.', 'svc.stack': 'Qalabkayga',
      'work.eyebrow': 'Shaqadayda', 'work.title': 'Mashaariicdii u dambeysay', 'work.tabWeb': 'Web & Nidaamyo', 'work.tabMobile': 'App-yada Mobile-ka', 'work.tabGraphic': 'Naqshad Garaafig', 'work.tabMedia': 'Warbaahin', 'work.new': 'Cusub',
      'work.tab_web': 'Web & Nidaamyo', 'work.tab_graphic': 'Naqshad Garaafig', 'work.tab_media': 'Warbaahin',
      'work.filter': 'Ku shaandhee tignoolajiyad', 'work.view': 'Eeg faahfaahinta', 'work.open': 'Fur faahfaahinta', 'work.live': 'Goobta tooska ah', 'work.github': 'Ka eeg GitHub', 'work.code': 'Koodh', 'work.case': 'Daraasad kiis',
      'work.concept': 'Boostar fikradeed', 'work.fullSize': 'Ku fur cabbir buuxa', 'work.builtWith': 'Lagu dhisay', 'work.focus': 'Diiradda naqshadda', 'work.skills': 'Xirfadaha la adeegsaday', 'work.features': 'Astaamaha muhiimka ah',
      'work.all': 'Dhammaan mashaariicda', 'work.prev': 'Mashruucii hore', 'work.next': 'Mashruuca xiga', 'work.more': 'Mashaariic kale',
      'mob.badge': 'Daraasado kiis ayaa socda', 'mob.title': 'Hal koodh, iOS iyo Android',
      'mob.text': 'Waxaan Flutter ku dhisaa app-yo mobile ah oo ku shaqeeya labada nidaam, kuna xiran isla back-end-ka website-kaaga. Faahfaahinta shaqadayda mobile-ka ayaa la diyaarinayaa, halkanna way ka soo muuqan doontaa.',
      'mob.f1': 'Hal koodh oo iOS iyo Android ah', 'mob.f2': 'Ku xiran API-gaaga jira', 'mob.f3': 'Nadiif, degdeg ah oo fudud', 'mob.f4': 'Diyaar u ah dukaamada app-yada',
      'mob.cta': 'Bilow mashruuc mobile', 'mob.web': 'Eeg mashaariicda web-ka',
      'gh.title': 'Koodh aad hubin karto', 'gh.snapshot': 'xog kaydsan · 12 Nof 2026', 'gh.live': 'si toos ah GitHub', 'gh.repos': 'Kaydadka dadweynaha', 'gh.last': 'Cusboonaysiintii u dambeysay', 'gh.since': 'GitHub laga bilaabo', 'gh.profile': 'Eeg astaanta',
      'partners.title': 'Kuwa aan la shaqeeyay', 'partners.sub': 'Hay\'adaha aan u dhisay',
      'cert.eyebrow': 'Shahaadooyin', 'cert.title': 'Shahaadooyin la xaqiijiyay', 'cert.verified': 'La xaqiijiyay', 'cert.pdf': 'Fur PDF', 'cert.download': 'Soo deji', 'cert.all': 'Dhammaan shahaadooyinka',
      'cert.prev': 'Shahaadadii hore', 'cert.next': 'Shahaadada xigta', 'cert.more': 'Shahaadooyin kale', 'cert.credential': 'Shahaado la xaqiijiyay', 'cert.skills': 'Xirfadaha la bartay',
      'cert.issuer': 'Bixiyaha', 'cert.date': 'Taariikhda', 'cert.id': 'Aqoonsiga shahaadada',
      'cv.eyebrow': 'Taariikh nololeed', 'cv.title': 'CV-gayga, hal gujin', 'cv.p1': 'Dhismaha web-ka full-stack, hore iyo gadaal', 'cv.p2': 'Naqshadaynta UI/UX, wireframes iyo hagaha summadda',
      'contact.eyebrow': 'Aan xiriirno', 'contact.title': 'Mashruuc ma haysaa? Aan wada dhisno.', 'contact.avail': 'Diyaar u ah mashaariic freelance ah',
      'contact.email': 'Iimayl', 'contact.based': 'Ku sugan', 'contact.place': 'Muqdisho, Soomaaliya · wuxuu ka shaqeeyaa meel fog',
      'contact.saveTitle': 'Kaydi xiriirkayga', 'contact.saveText': 'Ku sawir kamarada taleefankaaga, ama soo deji kaarka xiriirkayga.', 'contact.saveBtn': 'Kaydi xiriirka (.vcf)',
      'contact.modeMsg': 'Fariin degdeg ah', 'contact.modeBrief': 'Faahfaahinta mashruuca',
      'form.name': 'Magacaaga', 'form.email': 'Iimaylkaaga', 'form.need': 'Maxaad u baahan tahay?', 'form.tWeb': 'App web', 'form.tMob': 'App mobile', 'form.tUi': 'UI/UX & summad', 'form.tVid': 'Muuqaal & kontent',
      'form.msg': 'Fariintaada', 'form.nameErr': 'Fadlan ii sheeg magacaaga.', 'form.emailErr': 'Fadlan geli iimayl sax ah si aan kuugu jawaabo.', 'form.msgErr': 'Fariin gaaban ayaa caawisa: ugu yaraan 10 xaraf.',
      'form.sendEmail': 'Ku dir iimayl', 'form.sendWa': 'Ku dir WhatsApp', 'form.note': 'Fariintaadu waxay ku furmaysaa diyaar iimaylkaaga ama WhatsApp. Waxba laguma kaydiyo goobtan.',
      'form.thanks': 'Mahadsanid, {name}!', 'form.sentEmail': 'Fariintaadu waa diyaar iimaylkaaga. Halkaas ku riix dir, waxaanan kuu soo jawaabi doonaa dhawaan.', 'form.sentWa': 'Fariintaadu waa diyaar WhatsApp. Halkaas ku riix dir, waxaanan kuu soo jawaabi doonaa dhawaan.', 'form.again': 'Qor fariin kale',
      'brief.step': 'Tallaabada {n} ee 3', 'brief.ready': 'Diyaar', 'brief.q1': 'Maxaad u baahan tahay?', 'brief.q2': 'Astaamahee ugu muhiimsan?', 'brief.q3': 'Goorma ayaad u baahan tahay?', 'brief.qSum': 'Waa kan faahfaahintaada',
      'brief.your': 'Faahfaahintaada', 'brief.back': 'Dib', 'brief.next': 'Xiga', 'brief.use': 'Isticmaal faahfaahintan',
      'search.none': 'Natiijo lama helin. Isku day “React”, “CV” ama “WhatsApp”.', 'search.move': 'dhaqaaq', 'search.open': 'fur', 'search.close': 'xir', 'search.light': 'U beddel iftiin', 'search.dark': 'U beddel mugdi',
      'search.g_section': 'Qayb', 'search.g_project': 'Mashruuc', 'search.g_certificate': 'Shahaado', 'search.g_work': 'Shaqo', 'search.g_action': 'Ficil', 'wa.chat': 'Kala hadal WhatsApp',
      'cta.line1': 'Aan wada dhisno wax', 'cta.line2': 'cajiib ah', 'foot.place': 'Muqdisho, Soomaaliya', 'foot.top': 'Kor',
      'cv.p3': 'Naqshadaynta xogta, isku xirka API iyo amniga', 'cv.p4': 'Tafatirka muuqaalka, naqshad garaafig iyo abuurista kontent', 'cv.download': 'Soo deji CV (PDF)', 'cv.open': 'Ku fur tab cusub', 'cv.meta': 'PDF · 1 bog · la cusboonaysiiyay 2026',
      roles: ['Horumariye Full-Stack', 'Naqshadeeye UI/UX', 'Naqshadeeye Garaafig', 'Abuure Kontent']
    },
    ar: {
      'brand.role': 'مطوّر Full-Stack ومصمم',
      'nav.home': 'الرئيسية', 'nav.about': 'نبذة عني', 'nav.services': 'الخدمات', 'nav.work': 'أعمالي', 'nav.certificates': 'الشهادات', 'nav.contact': 'تواصل',
      'theme.dark': 'داكن', 'theme.darkHint': 'داكن دائمًا', 'theme.light': 'فاتح', 'theme.lightHint': 'فاتح دائمًا', 'theme.system': 'النظام', 'theme.systemHint': 'مطابقة جهازي',
      'cta.talk': 'لنتحدث',
      'hero.now': 'السنة الأخيرة في جامعة هرمود · متاح لمشاريع العمل الحر',
      'hero.lead': 'أبني تطبيقات الويب والجوال، وأصمم هوياتها، وأصوّر فيديوهات إطلاقها، بالإنجليزية والصومالية والعربية.',
      'hero.viewWork': 'شاهد أعمالي', 'hero.cv': 'تحميل السيرة الذاتية',
      'hero.reel': 'شاهد الفيديو', 'hero.reelSub': 'تعرّف على المطوّر',
      'hero.years': 'سنوات من البناء', 'hero.yearsSub': 'ويب وتطبيقات ووسائط', 'hero.langs': 'لغات',
      'trusted.label': 'يثق بي',
      'about.eyebrow': 'نبذة عني', 'about.title': 'بناء ويب حديث وأنظمة متصلة',
      'about.sub': 'مزيج متعدد التخصصات من تطوير البرمجيات وهندسة تطبيقات الجوال والتصميم الرقمي الإبداعي.',
      'about.years': 'سنوات من الخبرة في التطوير', 'about.kicker': '— مبتكر تقني ومطوّر',
      'about.bio': 'أنا <strong>عبدالله محمود عبدي</strong>، وُلدت في 8 أغسطس 2005 في جدة بالمملكة العربية السعودية. طالب في السنة الرابعة بعلوم الحاسوب في جامعة هرمود، ومطوّر برمجيات وشغوف بالتقنية، متخصص في تطوير الويب Full-Stack وتطبيقات الجوال وحلول الوسائط الإبداعية.',
      'about.start': 'ابدأ مشروعًا', 'about.wa': 'واتساب مباشر',
      'stats.projects': 'مشروع منجز', 'stats.posters': 'تصميم ملصق', 'stats.live': 'منصة مباشرة', 'stats.see': 'شاهدها',
      'info.uni': 'طالب سنة رابعة علوم حاسوب', 'info.fsTitle': 'تطوير Full-Stack', 'info.mobTitle': 'تطبيقات الجوال',
      'info.mob': 'تطبيقات iOS و Android', 'info.locTitle': 'الموقع والأصل', 'info.loc': 'وُلد في جدة · يقيم في مقديشو، الصومال',
      'exp.eyebrow': 'الخبرة', 'exp.title': 'رحلتي حتى الآن', 'exp.all': 'الكل', 'exp.work': 'عمل', 'exp.edu': 'تعليم', 'exp.award': 'إنجازات',
      'exp.kindWork': 'عمل', 'exp.kindEdu': 'تعليم', 'exp.kindAward': 'إنجاز',
      'svc.eyebrow': 'ماذا أقدم', 'svc.title': 'الخدمات التي أقدمها',
      'svc.webT': 'تطوير الويب', 'svc.webD': 'تطبيقات ويب ولوحات تحكم بتسجيل دخول وصلاحيات وبيانات حقيقية.',
      'svc.mobT': 'تطبيقات الجوال', 'svc.mobD': 'تطبيقات Android و iOS بتقنية Flutter مرتبطة بواجهتك البرمجية.',
      'svc.uiT': 'تجربة المستخدم والهوية', 'svc.uiD': 'واجهات وشعارات وملصقات حملات تناسب المنتج.',
      'svc.vidT': 'الفيديو والمحتوى', 'svc.vidD': 'فيديوهات إطلاق وعروض منتجات ومحتوى للتواصل الاجتماعي.', 'svc.stack': 'أدواتي',
      'work.eyebrow': 'أعمالي', 'work.title': 'أحدث المشاريع', 'work.tabWeb': 'الويب والأنظمة', 'work.tabMobile': 'تطبيقات الجوال', 'work.tabGraphic': 'التصميم الجرافيكي', 'work.tabMedia': 'الوسائط المتعددة', 'work.new': 'جديد',
      'work.tab_web': 'الويب والأنظمة', 'work.tab_graphic': 'التصميم الجرافيكي', 'work.tab_media': 'الوسائط المتعددة',
      'work.filter': 'تصفية حسب التقنية', 'work.view': 'عرض التفاصيل', 'work.open': 'فتح التفاصيل', 'work.live': 'الموقع المباشر', 'work.github': 'عرض على GitHub', 'work.code': 'الكود', 'work.case': 'دراسة حالة',
      'work.concept': 'ملصق مفاهيمي', 'work.fullSize': 'فتح بالحجم الكامل', 'work.builtWith': 'بُني باستخدام', 'work.focus': 'محور التصميم', 'work.skills': 'المهارات المستخدمة', 'work.features': 'أهم الميزات',
      'work.all': 'كل المشاريع', 'work.prev': 'المشروع السابق', 'work.next': 'المشروع التالي', 'work.more': 'مشاريع أخرى',
      'mob.badge': 'دراسات الحالة قيد الإعداد', 'mob.title': 'كود واحد لنظامي iOS و Android',
      'mob.text': 'أبني تطبيقات جوال متعددة المنصات بتقنية Flutter تتصل بنفس الخادم الذي يعمل عليه موقعك. يجري إعداد عروض مفصلة لأعمالي في الجوال وستظهر هنا.',
      'mob.f1': 'كود واحد لنظامي iOS و Android', 'mob.f2': 'متصل بواجهتك البرمجية الحالية', 'mob.f3': 'نظيف وسريع وسهل الاستخدام', 'mob.f4': 'جاهز لمتاجر التطبيقات',
      'mob.cta': 'ابدأ مشروع جوال', 'mob.web': 'شاهد مشاريع الويب',
      'gh.title': 'كود يمكنك التحقق منه', 'gh.snapshot': 'لقطة محفوظة · 12 نوفمبر 2026', 'gh.live': 'مباشرة من GitHub', 'gh.repos': 'المستودعات العامة', 'gh.last': 'آخر تحديث', 'gh.since': 'على GitHub منذ', 'gh.profile': 'عرض الملف',
      'partners.title': 'عملت مع', 'partners.sub': 'جهات بنيت لها',
      'cert.eyebrow': 'الشهادات', 'cert.title': 'شهادات موثقة', 'cert.verified': 'موثقة', 'cert.pdf': 'فتح PDF', 'cert.download': 'تحميل', 'cert.all': 'كل الشهادات',
      'cert.prev': 'الشهادة السابقة', 'cert.next': 'الشهادة التالية', 'cert.more': 'شهادات أخرى', 'cert.credential': 'شهادة موثقة', 'cert.skills': 'المهارات المكتسبة',
      'cert.issuer': 'الجهة المانحة', 'cert.date': 'التاريخ', 'cert.id': 'رقم الشهادة',
      'cv.eyebrow': 'السيرة الذاتية', 'cv.title': 'سيرتي الذاتية بنقرة واحدة', 'cv.p1': 'بنية ويب Full-Stack للواجهة والخادم', 'cv.p2': 'نماذج UI/UX وإطارات ودليل الهوية',
      'contact.eyebrow': 'لنتواصل', 'contact.title': 'لديك مشروع؟ لنبنِه معًا.', 'contact.avail': 'متاح لمشاريع العمل الحر',
      'contact.email': 'البريد', 'contact.based': 'مقيم في', 'contact.place': 'مقديشو، الصومال · يعمل عن بُعد',
      'contact.saveTitle': 'احفظ جهة اتصالي', 'contact.saveText': 'امسح الرمز بكاميرا هاتفك، أو حمّل بطاقة جهة الاتصال.', 'contact.saveBtn': 'حفظ جهة الاتصال (.vcf)',
      'contact.modeMsg': 'رسالة سريعة', 'contact.modeBrief': 'ملخص المشروع',
      'form.name': 'اسمك', 'form.email': 'بريدك الإلكتروني', 'form.need': 'ماذا تحتاج؟', 'form.tWeb': 'تطبيق ويب', 'form.tMob': 'تطبيق جوال', 'form.tUi': 'تجربة المستخدم والهوية', 'form.tVid': 'فيديو ومحتوى',
      'form.msg': 'رسالتك', 'form.nameErr': 'من فضلك أخبرني باسمك.', 'form.emailErr': 'من فضلك أدخل بريدًا صحيحًا لأتمكن من الرد.', 'form.msgErr': 'رسالة قصيرة تساعد: 10 أحرف على الأقل.',
      'form.sendEmail': 'إرسال بالبريد', 'form.sendWa': 'إرسال عبر واتساب', 'form.note': 'تُفتح رسالتك جاهزة للإرسال في تطبيق البريد أو واتساب. لا يُحفظ شيء على هذا الموقع.',
      'form.thanks': 'شكرًا، {name}!', 'form.sentEmail': 'رسالتك جاهزة في تطبيق البريد. اضغط إرسال هناك وسأرد عليك قريبًا.', 'form.sentWa': 'رسالتك جاهزة في واتساب. اضغط إرسال هناك وسأرد عليك قريبًا.', 'form.again': 'اكتب رسالة أخرى',
      'brief.step': 'الخطوة {n} من 3', 'brief.ready': 'جاهز', 'brief.q1': 'ماذا تحتاج؟', 'brief.q2': 'ما أهم الميزات؟', 'brief.q3': 'متى تحتاجه؟', 'brief.qSum': 'هذا ملخص مشروعك',
      'brief.your': 'ملخص مشروعك', 'brief.back': 'رجوع', 'brief.next': 'التالي', 'brief.use': 'استخدم هذا الملخص',
      'search.none': 'لا نتائج. جرّب “React” أو “CV” أو “WhatsApp”.', 'search.move': 'تنقّل', 'search.open': 'فتح', 'search.close': 'إغلاق', 'search.light': 'التبديل إلى الوضع الفاتح', 'search.dark': 'التبديل إلى الوضع الداكن',
      'search.g_section': 'قسم', 'search.g_project': 'مشروع', 'search.g_certificate': 'شهادة', 'search.g_work': 'أعمال', 'search.g_action': 'إجراء', 'wa.chat': 'تواصل عبر واتساب',
      'cta.line1': 'لنبنِ شيئًا', 'cta.line2': 'استثنائيًا', 'foot.place': 'مقديشو، الصومال', 'foot.top': 'للأعلى',
      'cv.p3': 'تصميم قواعد البيانات وربط الواجهات البرمجية والأمان', 'cv.p4': 'مونتاج الفيديو والتصميم الجرافيكي وصناعة المحتوى', 'cv.download': 'تحميل السيرة الذاتية (PDF)', 'cv.open': 'فتح في علامة تبويب جديدة', 'cv.meta': 'PDF · صفحة واحدة · تحديث 2026',
      roles: ['مطوّر Full-Stack', 'مصمم UI/UX', 'مصمم جرافيك', 'صانع محتوى']
    }
  };
  var FLAGS = { en: ['gb', 'EN'], so: ['so', 'SO'], ar: ['sa', 'AR'] };
  var I18n = {
    lang: store.get('am-lang') || 'en',
    t: function (key) { return (DICT[this.lang] && DICT[this.lang][key]) || DICT.en[key]; },
    apply: function () {
      var lang = this.lang;
      root.lang = lang;
      root.dir = lang === 'ar' ? 'rtl' : 'ltr';
      $$('[data-i18n]').forEach(function (el) {
        var v = I18n.t(el.getAttribute('data-i18n'));
        if (typeof v === 'string') el.textContent = v;
      });
      // trusted markup from our own dictionary (bold names etc.)
      $$('[data-i18n-html]').forEach(function (el) {
        var v = I18n.t(el.getAttribute('data-i18n-html'));
        if (typeof v === 'string') el.innerHTML = v;
      });
      var f = FLAGS[lang];
      $$('.lang-btn').forEach(function (b) { var img = $('.lang-flag', b); img.setAttribute('src', img.getAttribute('src').replace(/[a-z]{2}\.svg$/, f[0] + '.svg')); $('.lang-code', b).textContent = f[1]; });
      $$('[data-lang-pick]').forEach(function (b) { b.setAttribute('aria-checked', String(b.getAttribute('data-lang-pick') === lang)); });
      Typing.restart();
      if (typeof Work !== "undefined" && Work.render && document.getElementById("workPanel")) Work.render();
      if (typeof Certs !== "undefined" && Certs.render) Certs.render();
      if (typeof HeaderFit !== "undefined") HeaderFit.fit();
      if (typeof Contact !== "undefined" && Contact.drawBrief && document.getElementById("brief") && !document.getElementById("brief").hidden) Contact.drawBrief();
    },
    set: function (lang) { this.lang = DICT[lang] ? lang : 'en'; store.set('am-lang', this.lang); this.apply(); },
    init: function () {
      var self = this;
      $$('[data-lang-pick]').forEach(function (b) { b.addEventListener('click', function () { self.set(b.getAttribute('data-lang-pick')); Dropdowns.closeAll(); }); });
      if (this.lang !== 'en') this.apply(); else { root.lang = 'en'; $$('[data-lang-pick]').forEach(function (b) { b.setAttribute('aria-checked', String(b.getAttribute('data-lang-pick') === 'en')); }); }
    }
  };

  /* 3. DROPDOWNS ============================================================ */
  var Dropdowns = {
    closeAll: function (except) {
      $$('[data-dropdown].is-open').forEach(function (d) {
        if (d === except) return;
        d.classList.remove('is-open');
        var b = $('button[aria-haspopup]', d); if (b) b.setAttribute('aria-expanded', 'false');
      });
    },
    init: function () {
      var self = this;
      $$('[data-dropdown]').forEach(function (d) {
        var btn = $('button[aria-haspopup]', d);
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          var open = !d.classList.contains('is-open');
          self.closeAll(d);
          d.classList.toggle('is-open', open);
          btn.setAttribute('aria-expanded', String(open));
        });
        $$('.menu a', d).forEach(function (a) { a.addEventListener('click', function () { self.closeAll(); }); });
      });
      document.addEventListener('click', function (e) { if (!(e.target.closest && e.target.closest('[data-dropdown]'))) self.closeAll(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') self.closeAll(); });
    }
  };

  /* 4. HEADER =============================================================== */
  var Header = {
    init: function () {
      var header = $('#siteHeader');
      var links = $$('.nav-link[data-spy]');
      var ids = links.map(function (a) { return a.getAttribute('data-spy'); });
      var tick = 0;
      var update = function () {
        tick = 0;
        header.classList.toggle('is-scrolled', window.scrollY > 8);
        var line = window.innerHeight * 0.4, current = ids[0];
        ids.forEach(function (id) { var el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= line) current = id; });
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = ids[ids.length - 1];
        links.forEach(function (a) {
          var on = a.getAttribute('data-spy') === current;
          a.classList.toggle('is-active', on);
          if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
        });
      };
      window.addEventListener('scroll', function () { if (!tick) tick = setTimeout(update, 80); }, { passive: true });
      update();
    }
  };

  /* 5. TYPING =============================================================== */
  var Typing = {
    timer: 0,
    restart: function () {
      var el = $('.typed'); if (!el) return;
      clearTimeout(this.timer);
      var roles = I18n.t('roles') || DICT.en.roles;
      if (reduceMotion) { el.textContent = roles[0]; return; }
      var i = 0, n = 0, deleting = false, self = this;
      var tick = function () {
        var word = roles[i];
        n += deleting ? -1 : 1;
        el.textContent = word.slice(0, n);
        var wait = deleting ? 45 : 90;
        if (!deleting && n === word.length) { deleting = true; wait = 1600; }
        else if (deleting && n === 0) { deleting = false; i = (i + 1) % roles.length; wait = 350; }
        self.timer = setTimeout(tick, wait);
      };
      this.timer = setTimeout(tick, 400);
    }
  };

  /* 6. SPOTLIGHT ============================================================ */
  var Spotlight = {
    init: function () {
      if (!window.matchMedia || !matchMedia('(hover: hover)').matches) return;
      document.addEventListener('pointermove', function (e) {
        var card = e.target.closest && e.target.closest('.spot');
        if (!card) return;
        var r = card.getBoundingClientRect();
        card.style.setProperty('--sx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--sy', (e.clientY - r.top) + 'px');
      }, { passive: true });
    }
  };

  /* 7. TRUSTED BY =========================================================== */
  var Trusted = {
    init: function () {
      var track = $('.trusted-track'), list = $('.trusted-list');
      if (!track || !list) return;
      // three copies inside each half, two halves → the -50% loop is seamless on wide screens
      var html = list.innerHTML; list.innerHTML = html + html + html;
      var copy = list.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      $$('a', copy).forEach(function (a) { a.setAttribute('tabindex', '-1'); });
      track.appendChild(copy);
    }
  };

  /* 8. SHOWREEL ============================================================= */
  var Reel = {
    init: function () {
      var dlg = $('#reelDialog'); if (!dlg || !dlg.showModal) return;
      var video = $('video', dlg);
      $$('[data-open-reel]').forEach(function (b) { b.addEventListener('click', function () { dlg.showModal(); video.play().catch(function () {}); }); });
      $$('[data-close-reel]').forEach(function (b) { b.addEventListener('click', function () { dlg.close(); }); });
      dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
      dlg.addEventListener('close', function () { video.pause(); });
    }
  };

  /* 9. COUNT-UP NUMBERS ===================================================== */
  var Counter = {
    init: function () {
      var nums = $$('[data-count]'); if (!nums.length) return;
      var run = function () {
        nums.forEach(function (el) {
          var target = +el.getAttribute('data-count'), suffix = el.getAttribute('data-suffix') || '';
          if (reduceMotion) { el.textContent = target + suffix; return; }
          var t0 = performance.now(), dur = 1800;
          var step = function (now) {
            var p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.max(1, Math.round(target * e)) + (p >= 1 ? suffix : '');
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      };
      var box = nums[0].closest('.bento-stats') || nums[0];
      if (!('IntersectionObserver' in window)) { run(); return; }
      var io = new IntersectionObserver(function (es) { if (es.some(function (e) { return e.isIntersecting; })) { io.disconnect(); run(); } }, { threshold: 0.3 });
      io.observe(box);
    }
  };

  /* 10. EXPERIENCE FILTER =================================================== */
  var ExpFilter = {
    init: function () {
      var chips = $$('.filter-chip[data-filter]'), items = $$('.tl-item');
      chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
          var f = chip.getAttribute('data-filter');
          chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c === chip)); });
          items.forEach(function (it) { it.hidden = !(f === 'all' || it.getAttribute('data-kind') === f); });
        });
      });
    }
  };

  /* 11. WORK =============================================================== */
  // Content lives here as data; the cards and project pages are drawn from it.
  var WORK = {"dots":{"React":"#61DAFB","Node.js":"#5FA04E","Express":"#CBD5E1","MongoDB":"#47A248","JavaScript":"#F7DF1E","REST API":"#0EA5E9","HTML5":"#E34F26","CSS3":"#1572B6","PHP":"#777BB4","MySQL":"#4479A1","TypeScript":"#3178C6","Prisma":"#A5B4FC","Tailwind":"#06B6D4","NestJS":"#E0234E","Flutter":"#02569B","Dart":"#0175C2","Firebase":"#FFCA28","Photoshop":"#31A8FF","Illustrator":"#FF9A00","Figma":"#F24E1E","Premiere Pro":"#9999FF","After Effects":"#9999FF","Typography":"#0369A1","Layout":"#0EA5E9","Branding":"#0B2A6F","Storytelling":"#0EA5E9","Screen recording":"#0369A1","Motion":"#38BDF8"},"web":[{"title":"4 SEASON Restaurant","sub":"Local POS · Full stack","badge":"POS System","img":"assets/images/project-foms-restaurant.png","alt":"4 SEASON restaurant menu screen","pos":"top left","tags":["React","Node.js","MongoDB"],"code":"https://github.com/abdullamaxmud/Resturent","live":"","caseStudy":"case-studies/4-season-pos.html","about":"A point-of-sale system built for the 4 SEASON restaurant. Staff pick dishes from a visual menu, build the order and complete the sale in a few taps, and it runs on the restaurant’s own computers.","features":["Visual menu with categories","Fast order building","Order and sales records","Runs on the local network"],"meta":[{"k":"Type","v":"Point of sale"},{"k":"Role","v":"Full-stack developer"},{"k":"Status","v":"In use locally"}]},{"title":"Biyaha Soomaaliya","sub":"Water schedules · Public utility","badge":"Public Utility","img":"assets/images/project-biyaha-water.png","alt":"Biyaha Soomaaliya home page","pos":"top left","tags":["JavaScript","REST API","CSS3"],"code":"https://github.com/abdullamaxmud/water-somalia","live":"","caseStudy":false,"about":"A public website that helps people in Somalia find out when water is supplied to their area. Residents look up their district and see the schedule in a clear, mobile-friendly layout.","features":["Water schedules by district","Data loaded from a REST API","Mobile-first layout","Simple, fast pages"],"meta":[{"k":"Type","v":"Public utility site"},{"k":"Role","v":"Front-end developer"},{"k":"Status","v":"Open source"}]},{"title":"DHIIG KAAL","sub":"Healthcare · Blood donation platform","badge":"Live Platform","img":"assets/images/project-dhiig-kaal.png","alt":"DHIIG KAAL home page","pos":"top","tags":["PHP","MySQL","JavaScript"],"code":"https://github.com/abdullamaxmud","live":"https://dhiigkaal.iftiinhub.com/","caseStudy":"case-studies/dhiig-kaal.html","about":"A blood donation platform that connects donors with people and hospitals that need blood. Donors register with their blood type and location, and requests reach the right donors faster.","features":["Donor sign-up by blood type","Blood requests from hospitals","Search donors by location","Admin dashboard"],"meta":[{"k":"Type","v":"Healthcare platform"},{"k":"Role","v":"Full-stack developer"},{"k":"Status","v":"Live"}]},{"title":"Maareyn Management System","sub":"Business SaaS · Full stack","badge":"Multi-tenant SaaS","img":"assets/v2/project-maareyn.webp","alt":"Maareyn Management System cover with its business dashboard","pos":"center","tags":["React","NestJS","MongoDB","TypeScript"],"code":"https://github.com/abdullamaxmud/Maareyn-Management-system","live":"","caseStudy":false,"about":"A multi-tenant SaaS platform where many independent businesses each manage their inventory, sales, debts, customers, expenses and reports in one place, with their own branding and fully separated data.","features":["Point of sale with branded receipts","Credit sales and debt ledger","Reports with CSV export and print","Super-admin control centre"],"meta":[{"k":"Type","v":"Multi-tenant SaaS"},{"k":"Role","v":"Full-stack developer"},{"k":"Status","v":"Open source"}]},{"title":"Abdull School MS","sub":"School ERP · Full stack","badge":"School ERP","img":"assets/images/project-abdull-school.jpg","alt":"Abdull School MS cover","pos":"center","tags":["React","TypeScript","Prisma"],"code":"https://github.com/abdullamaxmud/Abdull-school-MS","live":"","caseStudy":"case-studies/abdull-school-ms.html","about":"A school management system that brings students, teachers, classes and fees into one place, so school staff can run daily work from a single dashboard.","features":["Students and teachers","Classes and timetables","Fees and payments","Role-based dashboards"],"meta":[{"k":"Type","v":"School ERP"},{"k":"Role","v":"Full-stack developer"},{"k":"Status","v":"Open source"}]},{"title":"ABDULL Store","sub":"E-commerce · MERN stack","badge":"E-Commerce","img":"assets/images/project-abdull-store.jpg","alt":"ABDULL Store cover","pos":"center","tags":["React","Node.js","MongoDB"],"code":"https://github.com/abdullamaxmud/ABDULL-store","live":"","caseStudy":false,"about":"An online store built on the MERN stack. Customers browse products, add them to a cart and place orders, while the owner manages products and orders from an admin area.","features":["Product catalogue","Shopping cart and checkout","Order management","Admin product editor"],"meta":[{"k":"Type","v":"E-commerce"},{"k":"Role","v":"Full-stack developer"},{"k":"Status","v":"Open source"}]},{"title":"Smart Lab System","sub":"Hormuud University · Lab management","badge":"University","img":"assets/images/project-smart-lab.jpg","alt":"Smart Lab System cover","pos":"center","tags":["React","Node.js","Tailwind"],"code":"https://github.com/abdullamaxmud/Smart-lap","live":"","caseStudy":false,"about":"A lab management system for Hormuud University. Students and staff report computers that are not working, and lab technicians track each issue until it is fixed.","features":["Report a broken PC","Track each issue","Lab and device list","Technician dashboard"],"meta":[{"k":"Type","v":"University system"},{"k":"Role","v":"Full-stack developer"},{"k":"Status","v":"Open source"}]},{"title":"Child Sprouts Kindergarten","sub":"Education website · Front end","badge":"Live Website","img":"assets/v2/project-kindergarten.webp","long":"assets/v2/project-kindergarten-long.webp","alt":"Child Sprouts kindergarten home page","pos":"top","tags":["HTML5","Tailwind","CSS3"],"code":"https://github.com/abdullamaxmud/kindergarten-website","live":"https://abdullamaxmud.github.io/kindergarten-website/","caseStudy":false,"about":"A bright, friendly website for a kindergarten and early learning centre. Parents can explore the programs, read about the school, register a child and get in touch, on any screen size.","features":["Programs for each age group","Online registration form","Login and dashboard pages","Fully responsive layout"],"meta":[{"k":"Type","v":"Education website"},{"k":"Role","v":"Front-end developer"},{"k":"Status","v":"Live on GitHub Pages"}]}],"posters":[{"title":"Let's Build It","sub":"Personal brand poster","img":"assets/images/posters/poster-hire-me.jpg","alt":"Let's Build It poster","about":"A personal brand poster that invites clients to start a project with me. Bold type and the navy and light-blue palette keep it clear and confident.","made":"Personal brand"},{"title":"DHIIG KAAL campaign","sub":"Blood donation awareness","img":"assets/images/posters/poster-dhiig-kaal.jpg","alt":"Donate Blood, Save Lives poster","about":"An awareness poster for the DHIIG KAAL platform that asks people to donate blood and save lives, with one clear call to action.","made":"DHIIG KAAL"},{"title":"Know Your Water Day","sub":"Biyaha Soomaaliya","img":"assets/images/posters/poster-biyaha-soomaaliya.jpg","alt":"Know Your Water Day poster","about":"A poster for Biyaha Soomaaliya that reminds residents to check their water supply day, designed to read well on phones and in print.","made":"Biyaha Soomaaliya"},{"title":"Order in Seconds","sub":"4 SEASON restaurant promo","img":"assets/images/posters/poster-4-season.jpg","alt":"Hungry? Order in Seconds poster","about":"A promotional poster for the 4 SEASON restaurant that shows how fast ordering is with the new POS system.","made":"4 SEASON"},{"title":"Abdull School MS launch","sub":"Product launch poster","img":"assets/images/posters/poster-abdull-school.jpg","alt":"Abdull School MS launch poster","about":"A launch poster that introduces Abdull School MS to schools, listing what the system does in a quick, scannable layout.","made":"Abdull School MS"},{"title":"Report It — Smart Lab","sub":"Hormuud University campaign","img":"assets/images/posters/poster-smart-lab.jpg","alt":"Lab PC not working? Report it poster","about":"A campus poster for Hormuud University that tells students how to report a lab computer that is not working.","made":"Hormuud University"}],"videos":[{"title":"Abdalla Show","sub":"Documentary · Dareen Production","duration":"2:13","video":"assets/videos/abdalla-show.mp4","img":"assets/images/video-poster-abdalla-show.jpg","alt":"Still from the Abdalla Show","about":"A short documentary made with Dareen Production. It follows a real story from start to finish, with interviews, b-roll and a calm, cinematic edit.","kind":"Documentary","tags":["Premiere Pro","Storytelling","Motion"]},{"title":"Meet the Developer","sub":"Profile reel","duration":"0:18","video":"assets/videos/developer-profile.webm","img":"assets/images/video-poster-developer-profile.jpg","alt":"Still from the Meet the Developer reel","about":"A short profile reel that introduces me, what I build and how I work, made for social media and this portfolio.","kind":"Profile reel","tags":["Premiere Pro","Motion","Storytelling"]},{"title":"4 SEASON POS — Live demo","sub":"Project walkthrough","duration":"0:23","video":"assets/videos/pos-project-demo.webm","img":"assets/images/video-poster-pos-demo.jpg","alt":"Still from the 4 SEASON POS demo","about":"A walkthrough of the 4 SEASON POS system, showing an order from the menu to the finished sale in under half a minute.","kind":"Product demo","tags":["Screen recording","Premiere Pro","Motion"]}]};

  var esc = function (v) { return String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var ICON = {
    arrow: '<svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M4 10L10 4M5 4h5v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    code: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    next: '<svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    back: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    prev: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    fwd: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    play: '<svg width="18" height="18" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5v9l7.5-4.5z" fill="currentColor"/></svg>'
  };

  var Work = {
    tab: 'web', tech: 'All', open: null,
    items: function () {
      if (this.tab === 'web') return WORK.web.map(function (p) {
        var links = [];
        if (p.live) links.push({ label: I18n.t('work.live'), href: p.live, kind: 'live', primary: true });
        links.push({ label: I18n.t('work.github'), short: I18n.t('work.code'), href: p.code, kind: 'code', primary: !p.live });
        if (p.caseStudy) links.push({ label: I18n.t('work.case'), href: p.caseStudy, kind: 'case', text: true, internal: true });
        return { kind: 'web', title: p.title, sub: p.sub, badge: p.badge, img: p.long || p.img, scroll: !!p.long, alt: p.alt, pos: p.long ? 'center top' : p.pos, ratio: '16/10',
          host: (p.live || p.code).replace(/^https?:\/\//, '').replace(/\/$/, ''), tags: p.tags, about: p.about, tagLabel: I18n.t('work.builtWith'),
          features: p.features, meta: p.meta, links: links };
      });
      if (this.tab === 'graphic') return WORK.posters.map(function (g) {
        return { kind: 'poster', title: g.title, sub: g.sub, badge: I18n.t('work.concept'), img: g.img, alt: g.alt, ratio: '4/5', tags: ['Typography', 'Layout', 'Branding'],
          about: g.about, tagLabel: I18n.t('work.focus'), features: [], meta: [{ k: 'Made for', v: g.made }, { k: 'Format', v: '4:5 poster' }, { k: 'Use', v: 'Social and print' }],
          links: [{ label: I18n.t('work.fullSize'), href: g.img, kind: 'live', primary: true }] };
      });
      if (this.tab === 'media') return WORK.videos.map(function (v) {
        return { kind: 'video', title: v.title, sub: v.sub, badge: v.kind, img: v.img, video: v.video, duration: v.duration, alt: v.alt, ratio: '16/10', tags: v.tags,
          about: v.about, tagLabel: I18n.t('work.skills'), features: [], meta: [{ k: 'Format', v: v.kind }, { k: 'Length', v: v.duration }, { k: 'Role', v: 'Filming & editing' }], links: [] };
      });
      return [];
    },
    tagsHTML: function (tags, lg) {
      return '<ul class="tech-tags' + (lg ? ' lg' : '') + '">' + tags.map(function (t) { return '<li style="--dot:' + (WORK.dots[t] || '#0EA5E9') + '">' + esc(t) + '</li>'; }).join('') + '</ul>';
    },
    linkHTML: function (l, lg, short) {
      var cls = 'pill' + (l.primary ? ' primary' : '') + (l.text ? ' text' : '') + (lg ? ' lg' : '');
      var ext = l.internal ? '' : ' target="_blank" rel="noopener"';
      return '<a class="' + cls + '" href="' + esc(l.href) + '"' + ext + '>' + (l.kind === 'code' ? ICON.code : '') + esc(short && l.short ? l.short : l.label) + (l.kind === 'live' ? ICON.arrow : '') + '</a>';
    },
    cardHTML: function (it, i, mini) {
      var media = '<div class="work-media' + (it.kind === 'web' ? '' : ' no-bar') + '" style="--ratio:' + it.ratio + ';--pos:' + (it.pos || 'center') + '">' +
        (it.kind === 'web' ? '<div class="browser-bar" aria-hidden="true"><i></i><i></i><i></i><span>' + esc(it.host) + '</span></div>' : '') +
        '<img src="' + esc(it.img) + '" alt="' + (mini ? '' : esc(it.alt)) + '" loading="lazy"' + (it.scroll ? ' class="scroll-shot"' : '') + '>' +
        (mini ? '' : '<span class="media-badge">' + esc(it.badge) + '</span>') +
        (it.kind === 'video' && !mini ? '<span class="play-badge" aria-hidden="true">' + ICON.play + '</span><span class="dur-badge">' + esc(it.duration) + '</span>' : '') +
        (mini ? '' : '<span class="view-hint" aria-hidden="true">' + esc(I18n.t('work.view')) + ICON.next + '</span>') + '</div>';
      var info = '<div class="work-info"><h3><button type="button" class="card-open" data-open="' + i + '" aria-label="' + esc(I18n.t('work.open')) + ': ' + esc(it.title) + '">' + esc(it.title) + '</button></h3>';
      if (!mini) {
        info += '<span class="work-sub">' + esc(it.sub) + '</span>';
        if (it.kind !== 'video') info += this.tagsHTML(it.tags);
        var cardLinks = it.kind === 'web' ? it.links.slice(0, 2) : [];
        if (cardLinks.length) info += '<div class="link-row">' + cardLinks.map(function (l) { return Work.linkHTML(l, false, true); }).join('') + '</div>';
      }
      return '<article class="work-card">' + media + info + '</div></article>';
    },
    detailHTML: function (list, i) {
      var it = list[i], self = this;
      var visual = it.kind === 'video'
        ? '<video src="' + esc(it.video) + '" poster="' + esc(it.img) + '" controls playsinline preload="metadata" aria-label="' + esc(it.title) + '"></video>'
        : '<a href="' + esc(it.img) + '" target="_blank" rel="noopener" aria-label="' + esc(I18n.t('work.fullSize')) + '"><img src="' + esc(it.img) + '" alt="' + esc(it.alt) + '"' + (it.scroll ? ' class="scroll-shot"' : '') + ' style="object-position:' + (it.pos || 'center') + '"></a>';
      var others = list.map(function (o, k) { return k; }).filter(function (k) { return k !== i; }).slice(0, 5);
      return '<div class="work-detail">' +
        '<div class="detail-bar"><div class="detail-crumb"><button type="button" class="pill back-btn" data-close>' + ICON.back + esc(I18n.t('work.all')) + '</button>' +
          '<span>' + esc(I18n.t('work.tab_' + this.tab)) + ' / <b>' + esc(it.title) + '</b></span></div>' +
          '<div class="detail-nav"><span>' + (i + 1) + ' / ' + list.length + '</span>' +
          '<button type="button" class="round-btn" data-step="-1" aria-label="' + esc(I18n.t('work.prev')) + '">' + ICON.prev + '</button>' +
          '<button type="button" class="round-btn" data-step="1" aria-label="' + esc(I18n.t('work.next')) + '">' + ICON.fwd + '</button></div></div>' +
        '<div class="detail-grid"><div class="detail-visual' + (it.kind === 'poster' ? ' poster' : '') + '" style="--ratio:' + it.ratio + '">' + visual + '</div>' +
          '<div class="detail-info"><span class="detail-badge">' + esc(it.badge) + '</span><h3>' + esc(it.title) + '</h3><span class="detail-sub">' + esc(it.sub) + '</span>' +
          '<p class="detail-about">' + esc(it.about) + '</p>' +
          '<div><span class="mini-label">' + esc(it.tagLabel) + '</span>' + this.tagsHTML(it.tags, true).replace('<ul class="tech-tags lg">', '<ul class="tech-tags lg" style="margin-top:10px">') + '</div>' +
          '<dl class="detail-meta">' + it.meta.map(function (m) { return '<div><dt>' + esc(m.k) + '</dt><dd>' + esc(m.v) + '</dd></div>'; }).join('') + '</dl>' +
          (it.features.length ? '<div><span class="mini-label">' + esc(I18n.t('work.features')) + '</span><ul class="check-list" style="margin-top:10px">' + it.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul></div>' : '') +
          (it.links.length ? '<div class="link-row">' + it.links.map(function (l) { return self.linkHTML(l, true); }).join('') + '</div>' : '') +
        '</div></div>' +
        '<div class="detail-more"><span class="mini-label">' + esc(I18n.t('work.more')) + '</span><div class="more-grid">' + others.map(function (k) { return self.cardHTML(list[k], k, true); }).join('') + '</div></div>' +
      '</div>';
    },
    render: function () {
      var panel = $('#workPanel'), bar = $('.tech-bar'), mob = $('.mobile-panel');
      $$('.work-tab').forEach(function (t) { t.setAttribute('aria-selected', String(t.getAttribute('data-tab') === Work.tab)); });
      mob.hidden = this.tab !== 'mobile';
      panel.hidden = this.tab === 'mobile';
      var list = this.items(), self = this;
      // technology filter (web only, hidden while a project is open)
      if (this.tab === 'web' && this.open == null) {
        var count = {};
        WORK.web.forEach(function (p) { p.tags.forEach(function (t) { count[t] = (count[t] || 0) + 1; }); });
        var names = Object.keys(count).sort(function (a, b) { return count[b] - count[a] || a.localeCompare(b); });
        bar.innerHTML = '<span class="tech-label">' + esc(I18n.t('work.filter')) + '</span>' + ['All'].concat(names).map(function (n) {
          var label = n === 'All' ? I18n.t('exp.all') : n;
          return '<button type="button" class="tech-chip" data-tech="' + esc(n) + '" aria-pressed="' + (self.tech === n) + '" style="--dot:' + (n === 'All' ? '#22D3EE' : (WORK.dots[n] || '#0EA5E9')) + '"><i></i>' + esc(label) + '<span class="n">' + (n === 'All' ? WORK.web.length : count[n]) + '</span></button>';
        }).join('');
      } else bar.innerHTML = '';
      if (this.tab === 'mobile') return;
      if (this.open != null) { panel.innerHTML = this.detailHTML(list, this.open); return; }
      var shown = list.map(function (it, i) { return { it: it, i: i }; }).filter(function (x) { return self.tab !== 'web' || self.tech === 'All' || WORK.web[x.i].tags.indexOf(self.tech) >= 0; });
      panel.innerHTML = '<div class="work-grid' + (this.tab === 'graphic' ? ' posters' : '') + '">' + shown.map(function (x) { return self.cardHTML(x.it, x.i); }).join('') + '</div>';
    },
    scrollIntoView: function () {
      var sec = $('#work'); if (!sec) return;
      if (sec.getBoundingClientRect().top < 0 || sec.getBoundingClientRect().top > window.innerHeight * 0.6) sec.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    },
    setTab: function (tab, scroll) { this.tab = tab; this.tech = 'All'; this.open = null; this.render(); if (scroll) this.scrollIntoView(); },
    openAt: function (i) { this.open = i; this.render(); this.scrollIntoView(); var b = $('#workPanel .back-btn'); if (b) b.focus({ preventScroll: true }); },
    step: function (d) { var n = this.items().length; this.open = (this.open + d + n) % n; this.render(); },
    init: function () {
      var self = this, panel = $('#workPanel');
      if (!panel) return;
      $$('.work-tab').forEach(function (t) { t.addEventListener('click', function () { self.setTab(t.getAttribute('data-tab')); }); });
      $('.tech-bar').addEventListener('click', function (e) { var c = e.target.closest('[data-tech]'); if (c) { self.tech = c.getAttribute('data-tech'); self.render(); } });
      panel.addEventListener('click', function (e) {
        var o = e.target.closest('[data-open]'); if (o) { self.openAt(+o.getAttribute('data-open')); return; }
        if (e.target.closest('[data-close]')) { self.open = null; self.render(); return; }
        var s = e.target.closest('[data-step]'); if (s) self.step(+s.getAttribute('data-step'));
      });
      // anything on the page marked data-work-tab jumps to that tab (service cards, "See them", mobile panel)
      document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('[data-work-tab]'); if (!a) return;
        e.preventDefault(); self.setTab(a.getAttribute('data-work-tab'), true);
      });
      document.addEventListener('keydown', function (e) {
        var tg = e.target; if (self.open == null || (tg && tg.closest && tg.closest('input, textarea, select'))) return;
        if (e.key === 'Escape') { self.open = null; self.render(); }
        else if (e.key === 'ArrowRight') self.step(root.dir === 'rtl' ? -1 : 1);
        else if (e.key === 'ArrowLeft') self.step(root.dir === 'rtl' ? 1 : -1);
      });
      this.render();
    }
  };

  /* 12. GITHUB (live numbers, saved snapshot as fallback) =================== */
  var GitHub = {
    init: function () {
      var strip = $('.gh-strip'); if (!strip || !window.fetch) return;
      fetch('https://api.github.com/users/abdullamaxmud/repos?per_page=100')
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (repos) {
          if (!Array.isArray(repos) || !repos.length) return;
          var last = repos.map(function (r) { return r.pushed_at; }).sort().pop();
          $('.gh-repos', strip).textContent = repos.length;
          try { $('.gh-last', strip).textContent = new Date(last).toLocaleDateString(I18n.lang === 'ar' ? 'ar' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) {}
          var st = $('.gh-status-text', strip); st.removeAttribute('data-i18n'); st.textContent = I18n.t('gh.live');
          strip.classList.add('is-live');
        })
        .catch(function () { /* keep the saved snapshot */ });
    }
  };

  /* 13. CERTIFICATES ======================================================== */
  var CERTS = [
    { title: 'Mastering Prompt Engineering', img: 'assets/certificates/cert-mastering-prompt-engineering.png', pdf: 'assets/certificates/cert-mastering-prompt-engineering.pdf', code: 'NTW-2026-53EF05DC', date: 'August 29, 2026',
      tags: ['Prompt design', 'ChatGPT', 'AI workflows'], about: 'Training on writing clear, structured prompts that get reliable results from AI models, and on using them in study and everyday work.' },
    { title: 'AI Tools for Everyday Life', img: 'assets/certificates/cert-ai-tools-for-everyday-life.png', pdf: 'assets/certificates/cert-ai-tools-for-everyday-life.pdf', code: 'NTW-2026-7ECBC0AC', date: 'August 29, 2026',
      tags: ['AI assistants', 'Productivity', 'Research tools'], about: 'Training on choosing and using practical AI tools for writing, research, planning and saving time on daily tasks.' },
    { title: 'AI for Entrepreneurship and Freelancing', img: 'assets/certificates/cert-ai-for-entrepreneurship-and-freelancing.png', pdf: 'assets/certificates/cert-ai-for-entrepreneurship-and-freelancing.pdf', code: 'NTW-2026-F78C8E4D', date: 'September 1, 2026',
      tags: ['Freelancing', 'Business ideas', 'Automation'], about: 'Training on using AI to find business ideas, win freelance clients and automate repetitive parts of running a small business.' },
    { title: 'AI-Driven Digital Marketing', img: 'assets/certificates/cert-ai-driven-digital-marketing.png', pdf: 'assets/certificates/cert-ai-driven-digital-marketing.pdf', code: 'NTW-2026-E59969E3', date: 'September 1, 2026',
      tags: ['Content marketing', 'Social media', 'AI copywriting'], about: 'Training on planning and creating marketing content with AI, from social media posts to campaign copy and visuals.' }
  ];
  var CERT_DOTS = ['#0EA5E9', '#3B82F6', '#38BDF8', '#6366F1'];
  var Certs = {
    open: null,
    tags: function (list, lg) { return '<ul class="tech-tags' + (lg ? ' lg' : '') + '">' + list.map(function (t, k) { return '<li style="--dot:' + CERT_DOTS[k % 4] + '">' + esc(t) + '</li>'; }).join('') + '</ul>'; },
    badge: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.6 2 3.2-.4.9 3.1 2.8 1.6-1 3.1 1 3.1-2.8 1.6-.9 3.1-3.2-.4L12 22l-2.6-2-3.2.4-.9-3.1-2.8-1.6 1-3.1-1-3.1 2.8-1.6.9-3.1 3.2.4z" fill="#7DD3FC"/><path d="M8.5 12.2l2.3 2.3 4.7-4.8" stroke="#0B1F4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    card: function (c, i, mini) {
      var media = '<div class="work-media" style="--ratio:297/210"><img src="' + esc(c.img) + '" alt="' + (mini ? '' : esc(c.title + ' certificate')) + '" loading="lazy">' +
        (mini ? '' : '<span class="cert-badge">' + this.badge + esc(I18n.t('cert.verified')) + ' · 2026</span><span class="view-hint" aria-hidden="true">' + esc(I18n.t('work.view')) + ICON.next + '</span>') + '</div>';
      var info = '<div class="work-info"><h3><button type="button" class="card-open" data-cert="' + i + '" aria-label="' + esc(I18n.t('work.open')) + ': ' + esc(c.title) + '">' + esc(c.title) + '</button></h3>';
      if (!mini) info += '<span class="work-sub">National Training Week · ' + esc(c.date) + '</span>' + this.tags(c.tags) +
        '<div class="link-row"><a class="pill primary" href="' + esc(c.pdf) + '" target="_blank" rel="noopener">' + esc(I18n.t('cert.pdf')) + ICON.arrow + '</a><span class="cert-id">ID ' + esc(c.code) + '</span></div>';
      return '<article class="work-card cert-card">' + media + info + '</div></article>';
    },
    detail: function (i) {
      var c = CERTS[i], self = this;
      var others = CERTS.map(function (o, k) { return k; }).filter(function (k) { return k !== i; });
      return '<div class="work-detail cert-detail">' +
        '<div class="detail-bar"><div class="detail-crumb"><button type="button" class="pill back-btn" data-cert-close>' + ICON.back + esc(I18n.t('cert.all')) + '</button>' +
          '<span>' + esc(I18n.t('cert.eyebrow')) + ' / <b>' + esc(c.title) + '</b></span></div>' +
          '<div class="detail-nav"><span>' + (i + 1) + ' / ' + CERTS.length + '</span>' +
          '<button type="button" class="round-btn" data-cert-step="-1" aria-label="' + esc(I18n.t('cert.prev')) + '">' + ICON.prev + '</button>' +
          '<button type="button" class="round-btn" data-cert-step="1" aria-label="' + esc(I18n.t('cert.next')) + '">' + ICON.fwd + '</button></div></div>' +
        '<div class="detail-grid"><div class="detail-visual" style="--ratio:297/210"><a href="' + esc(c.img) + '" target="_blank" rel="noopener" aria-label="' + esc(I18n.t('work.fullSize')) + '"><img src="' + esc(c.img) + '" alt="' + esc(c.title) + ' certificate from National Training Week"></a></div>' +
          '<div class="detail-info"><span class="detail-badge">' + esc(I18n.t('cert.credential')) + ' · 2026</span><h3>' + esc(c.title) + '</h3>' +
          '<span class="detail-sub">Artificial Intelligence for Academic Transformation</span><p class="detail-about">' + esc(c.about) + '</p>' +
          '<div><span class="mini-label">' + esc(I18n.t('cert.skills')) + '</span><div style="margin-top:10px">' + this.tags(c.tags, true) + '</div></div>' +
          '<dl class="detail-meta"><div><dt>' + esc(I18n.t('cert.issuer')) + '</dt><dd>National Training Week</dd></div><div><dt>' + esc(I18n.t('cert.date')) + '</dt><dd>' + esc(c.date) + '</dd></div><div><dt>' + esc(I18n.t('cert.id')) + '</dt><dd style="overflow-wrap:anywhere">' + esc(c.code) + '</dd></div></dl>' +
          '<div class="link-row"><a class="pill primary lg" href="' + esc(c.pdf) + '" target="_blank" rel="noopener">' + esc(I18n.t('cert.pdf')) + ICON.arrow + '</a>' +
          '<a class="pill lg" href="' + esc(c.pdf) + '" download><svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 2v7M4 6.5L7 9.5l3-3M3 12h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' + esc(I18n.t('cert.download')) + '</a></div>' +
        '</div></div>' +
        '<div class="detail-more"><span class="mini-label">' + esc(I18n.t('cert.more')) + '</span><div class="more-grid">' + others.map(function (k) { return self.card(CERTS[k], k, true); }).join('') + '</div></div></div>';
    },
    render: function () {
      var panel = $('#certPanel'); if (!panel) return;
      var self = this;
      panel.innerHTML = this.open != null ? this.detail(this.open) : '<div class="cert-grid">' + CERTS.map(function (c, i) { return self.card(c, i); }).join('') + '</div>';
    },
    show: function (i) {
      this.open = i; this.render();
      var sec = $('#certificates'); if (sec && sec.getBoundingClientRect().top < 0) sec.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      var b = $('#certPanel .back-btn'); if (b) b.focus({ preventScroll: true });
    },
    init: function () {
      var panel = $('#certPanel'), self = this; if (!panel) return;
      panel.addEventListener('click', function (e) {
        var o = e.target.closest('[data-cert]'); if (o) { self.show(+o.getAttribute('data-cert')); return; }
        if (e.target.closest('[data-cert-close]')) { self.open = null; self.render(); return; }
        var s = e.target.closest('[data-cert-step]'); if (s) { self.open = (self.open + +s.getAttribute('data-cert-step') + CERTS.length) % CERTS.length; self.render(); }
      });
      document.addEventListener('keydown', function (e) {
        var tg = e.target; if (self.open == null || Work.open != null || (tg && tg.closest && tg.closest('input, textarea, select'))) return;
        if (e.key === 'Escape') { self.open = null; self.render(); }
        else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          var d = (e.key === 'ArrowRight') === (root.dir !== 'rtl') ? 1 : -1;
          self.open = (self.open + d + CERTS.length) % CERTS.length; self.render();
        }
      });
      this.render();
    }
  };

  /* 14. CONTACT (form, sending, brief wizard, contact card) ================= */
  var Contact = {
    type: null,
    brief: { step: 1, type: null, feats: [], time: null },
    QUESTIONS: [
      { key: 'type', multi: false, opts: [['Website', 'Company, NGO or personal site'], ['Web app / system', 'Logins, dashboard, database'], ['Mobile app', 'iOS and Android with Flutter'], ['Brand & design', 'Logo, posters, UI/UX'], ['Video & content', 'Launch video, reels, editing']] },
      { key: 'feats', multi: true, opts: [['Logins & user roles', 'Admins, staff, customers'], ['Admin dashboard', 'Manage everything in one place'], ['Online payments', 'Mobile money or cards'], ['Several languages', 'Somali, English, Arabic'], ['Reports & exports', 'PDF, Excel, printing'], ['Mobile-first design', 'Fast on any phone']] },
      { key: 'time', multi: false, opts: [['As soon as possible', 'Within 2 weeks'], ['Within a month', 'A clear deadline'], ['In 2–3 months', 'A larger project'], ['I am flexible', 'Quality first']] }
    ],
    vcard: function () {
      var v = 'BEGIN:VCARD\nVERSION:3.0\nN:Abdi;Abdallah Mohamud;;;\nFN:Abdallah Mohamud Abdi\nTITLE:Full-Stack Developer & Designer\nTEL;TYPE=CELL:+252613496697\nEMAIL:abdullamaxmud39@gmail.com\nURL:https://abdallahmohamudabdi.netlify.app\nADR;TYPE=WORK:;;;Mogadishu;;;Somalia\nEND:VCARD\n';
      var a = $('#vcardLink'); if (a) a.href = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(v);
    },
    setMode: function (mode) {
      $$('.mode-tabs [data-mode]').forEach(function (b) { b.setAttribute('aria-selected', String(b.getAttribute('data-mode') === mode)); });
      $('#contactForm').hidden = mode !== 'msg';
      $('#brief').hidden = mode !== 'brief';
      $('#sentPanel').hidden = true;
      if (mode === 'brief') this.drawBrief();
    },
    values: function () {
      var f = $('#contactForm');
      return { name: f.name.value.trim(), email: f.email.value.trim(), msg: f.message.value.trim() };
    },
    validate: function () {
      var v = this.values(), f = $('#contactForm');
      var ok = { name: v.name.length > 1, email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email), message: v.msg.length >= 10 };
      ['name', 'email', 'message'].forEach(function (k) { f[k].closest('.field').classList.toggle('is-invalid', !ok[k]); f[k].setAttribute('aria-invalid', String(!ok[k])); });
      if (!ok.name) f.name.focus(); else if (!ok.email) f.email.focus(); else if (!ok.message) f.message.focus();
      return ok.name && ok.email && ok.message;
    },
    send: function (via) {
      if (!this.validate()) return;
      var v = this.values();
      var body = 'Hi Abdallah,\n\n' + v.msg + '\n\n' + (this.type ? 'Project: ' + this.type + '\n' : '') + 'From: ' + v.name + ' (' + v.email + ')';
      var subject = 'New project enquiry' + (this.type ? ': ' + this.type : '') + ' from ' + v.name;
      var url = via === 'email'
        ? 'mailto:abdullamaxmud39@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
        : 'https://wa.me/252613496697?text=' + encodeURIComponent(body);
      window.open(url, via === 'email' ? '_self' : '_blank', 'noopener');
      $('.sent-title').textContent = I18n.t('form.thanks').replace('{name}', v.name.split(' ')[0]);
      $('.sent-text').textContent = I18n.t(via === 'email' ? 'form.sentEmail' : 'form.sentWa');
      $('#contactForm').hidden = true; $('#sentPanel').hidden = false;
    },
    reset: function () {
      var f = $('#contactForm'); f.reset(); this.type = null;
      $$('.type-chip').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      $$('.field.is-invalid', f).forEach(function (x) { x.classList.remove('is-invalid'); });
      $('.msg-count').textContent = '0 / 1000';
      this.setMode('msg');
    },
    briefText: function () {
      var b = this.brief;
      return 'Project type: ' + (b.type || '-') + '\nMust-have features: ' + (b.feats.join(', ') || '-') + '\nTimeline: ' + (b.time || '-');
    },
    drawBrief: function () {
      var b = this.brief, box = $('#brief'), summary = b.step === 4, self = this;
      $$('.brief-steps span', box).forEach(function (sp, k) { sp.classList.toggle('on', summary || k < b.step); });
      $('.brief-k', box).textContent = summary ? I18n.t('brief.ready') : I18n.t('brief.step').replace('{n}', b.step);
      $('.brief-q', box).textContent = summary ? I18n.t('brief.qSum') : I18n.t('brief.q' + b.step);
      var opts = $('.brief-opts', box), sum = $('.brief-sum', box);
      if (summary) {
        opts.innerHTML = ''; sum.hidden = false;
        sum.innerHTML = '<b>' + esc(I18n.t('brief.your')) + '</b>\n' + esc(this.briefText());
      } else {
        sum.hidden = true;
        var q = this.QUESTIONS[b.step - 1];
        opts.innerHTML = q.opts.map(function (o) {
          var on = q.multi ? b.feats.indexOf(o[0]) >= 0 : b[q.key] === o[0];
          return '<button type="button" class="brief-opt" aria-pressed="' + on + '" data-opt="' + esc(o[0]) + '"><span class="brief-check" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.2l2.3 2.3 4.7-5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span><b>' + esc(o[0]) + '</b><small>' + esc(o[1]) + '</small></span></button>';
        }).join('');
        opts.setAttribute('aria-label', I18n.t('brief.q' + b.step));
      }
      var can = b.step === 1 ? !!b.type : b.step === 3 ? !!b.time : true;
      $('[data-brief="back"]', box).disabled = b.step === 1;
      $('[data-brief="next"]', box).disabled = !can;
      $('.brief-next-label', box).textContent = summary ? I18n.t('brief.use') : I18n.t('brief.next');
    },
    finishBrief: function () {
      var map = { 'Website': 'Web app', 'Web app / system': 'Web app', 'Mobile app': 'Mobile app', 'Brand & design': 'UI/UX & branding', 'Video & content': 'Video & content' };
      var text = 'Hi Abdallah, here is my project brief:\n\n' + this.briefText() + '\n\nMore about my idea: ';
      this.setMode('msg');
      var t = map[this.brief.type] || null; this.type = t;
      $$('.type-chip').forEach(function (c) { c.setAttribute('aria-pressed', String(c.getAttribute('data-type') === t)); });
      var ta = $('#contactForm').message; ta.value = text; ta.dispatchEvent(new Event('input'));
      ta.focus(); ta.setSelectionRange(text.length, text.length);
    },
    init: function () {
      var form = $('#contactForm'), self = this; if (!form) return;
      this.vcard();
      $$('.mode-tabs [data-mode]').forEach(function (b) { b.addEventListener('click', function () { self.setMode(b.getAttribute('data-mode')); }); });
      $$('.type-chip').forEach(function (c) { c.addEventListener('click', function () {
        var on = c.getAttribute('aria-pressed') !== 'true';
        $$('.type-chip').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        c.setAttribute('aria-pressed', String(on)); self.type = on ? c.getAttribute('data-type') : null;
      }); });
      form.message.addEventListener('input', function () { $('.msg-count').textContent = form.message.value.length + ' / 1000'; });
      ['name', 'email', 'message'].forEach(function (k) { form[k].addEventListener('input', function () { form[k].closest('.field').classList.remove('is-invalid'); }); });
      form.addEventListener('submit', function (e) { e.preventDefault(); self.send('email'); });
      $('[data-send="whatsapp"]').addEventListener('click', function () { self.send('whatsapp'); });
      $('[data-reset-form]').addEventListener('click', function () { self.reset(); });
      var box = $('#brief');
      box.addEventListener('click', function (e) {
        var o = e.target.closest('[data-opt]'), b = self.brief;
        if (o) {
          var q = self.QUESTIONS[b.step - 1], v = o.getAttribute('data-opt');
          if (q.multi) { var i = b.feats.indexOf(v); if (i >= 0) b.feats.splice(i, 1); else b.feats.push(v); }
          else b[q.key] = v;
          self.drawBrief(); return;
        }
        var nav = e.target.closest('[data-brief]'); if (!nav || nav.disabled) return;
        if (nav.getAttribute('data-brief') === 'back') b.step = Math.max(1, b.step - 1);
        else if (b.step === 4) { self.finishBrief(); return; }
        else b.step++;
        self.drawBrief();
      });
      var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
    }
  };

  /* 15. HEADER FIT — show every link while they fit, then tighten, then collapse */
  var HeaderFit = {
    fit: function () {
      var h = $('#siteHeader'); if (!h) return;
      var nav = $('.nav', h), brand = $('.brand', h), tools = $('.header-tools', h);
      if (!nav || !brand || !tools) return;
      var cs = getComputedStyle(h);
      var avail = h.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      var measure = function () {
        var menu = $('.nav-menu', h), menuW = menu && menu.offsetWidth ? menu.offsetWidth + 8 : 0;
        return brand.offsetWidth + nav.scrollWidth + (tools.offsetWidth - menuW) + 24;
      };
      h.classList.remove('is-compact', 'is-tight');
      if (measure() <= avail) return;
      h.classList.add('is-tight');
      if (measure() <= avail) return;
      h.classList.add('is-compact');
    },
    init: function () {
      var self = this, bar = $('.header-bar');
      this.fit();
      if (window.ResizeObserver && bar) new ResizeObserver(function () { self.fit(); }).observe(bar);
      window.addEventListener('resize', function () { self.fit(); });
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { self.fit(); });
    }
  };

  /* 16. SEARCH (Ctrl + K) =================================================== */
  var Search = {
    sel: 0, list: [],
    go: function (id) { return function () { var el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }); }; },
    all: function () {
      var t = function (k) { return I18n.t(k); }, self = this;
      var items = [
        { g: 'section', l: t('nav.home'), k: 'home top start', run: this.go('top') },
        { g: 'section', l: t('nav.about'), k: 'about me bio', run: this.go('about') },
        { g: 'section', l: t('exp.eyebrow'), k: 'experience timeline career', run: this.go('experience') },
        { g: 'section', l: t('nav.services'), k: 'services what i do', run: this.go('services') },
        { g: 'section', l: t('nav.work'), k: 'work projects portfolio', run: function () { Work.setTab('web', true); } },
        { g: 'section', l: t('nav.certificates'), k: 'certificates credentials ai', run: this.go('certificates') },
        { g: 'section', l: t('cv.eyebrow'), k: 'cv resume curriculum', run: this.go('cv') },
        { g: 'section', l: t('nav.contact'), k: 'contact message email', run: this.go('contact') }
      ];
      WORK.web.forEach(function (p, i) { items.push({ g: 'project', l: p.title, k: 'project ' + p.tags.join(' ') + ' ' + p.sub, run: function () { Work.tab = 'web'; Work.tech = 'All'; Work.openAt(i); } }); });
      CERTS.forEach(function (c, i) { items.push({ g: 'certificate', l: c.title, k: 'certificate ai ' + c.tags.join(' '), run: function () { Certs.show(i); } }); });
      items.push(
        { g: 'work', l: t('work.tabMobile'), k: 'mobile flutter app', run: function () { Work.setTab('mobile', true); } },
        { g: 'work', l: t('work.tabGraphic'), k: 'posters graphic design', run: function () { Work.setTab('graphic', true); } },
        { g: 'work', l: t('work.tabMedia'), k: 'video multimedia reel', run: function () { Work.setTab('media', true); } },
        { g: 'action', l: t('hero.cv'), k: 'download cv pdf resume', run: function () { window.open('assets/cv/Abdallah-Mohamud-Abdi-CV.pdf', '_blank', 'noopener'); } },
        { g: 'action', l: t('wa.chat'), k: 'whatsapp chat phone', run: function () { window.open('https://wa.me/252613496697', '_blank', 'noopener'); } },
        { g: 'action', l: 'abdullamaxmud39@gmail.com', k: 'email mail', run: function () { window.location.href = 'mailto:abdullamaxmud39@gmail.com'; } },
        { g: 'action', l: t('hero.reel'), k: 'reel video showreel', run: function () { var b = $('[data-open-reel]'); if (b) b.click(); } },
        { g: 'action', l: root.getAttribute('data-theme') === 'dark' ? t('search.light') : t('search.dark'), k: 'theme dark light mode', run: function () { Theme.set(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'); } },
        { g: 'action', l: 'GitHub', k: 'github code repos', run: function () { window.open('https://github.com/abdullamaxmud', '_blank', 'noopener'); } }
      );
      return items;
    },
    draw: function () {
      var q = ($('#searchInput').value || '').trim().toLowerCase();
      var all = this.all();
      this.list = q ? all.filter(function (it) { return (it.l + ' ' + it.k + ' ' + it.g).toLowerCase().indexOf(q) >= 0; }) : all;
      if (this.sel >= this.list.length) this.sel = 0;
      var self = this;
      $('#searchList').innerHTML = this.list.map(function (it, i) {
        return '<li role="option" aria-selected="' + (i === self.sel) + '" id="sr-' + i + '"><button type="button" class="search-item" data-i="' + i + '" aria-selected="' + (i === self.sel) + '" tabindex="-1"><span class="g">' + esc(I18n.t('search.g_' + it.g)) + '</span><span class="l">' + esc(it.l) + '</span><span class="go" aria-hidden="true">↵</span></button></li>';
      }).join('');
      $('.search-empty').hidden = this.list.length > 0;
      $('#searchInput').setAttribute('aria-activedescendant', this.list.length ? 'sr-' + this.sel : '');
    },
    open: function () { var d = $('#searchDialog'); if (!d || d.open) return; this.sel = 0; $('#searchInput').value = ''; this.draw(); d.showModal(); $('#searchInput').focus(); },
    close: function () { var d = $('#searchDialog'); if (d && d.open) d.close(); },
    run: function (i) { var it = this.list[i]; this.close(); if (it) setTimeout(it.run, 30); },
    move: function (d) { if (!this.list.length) return; this.sel = (this.sel + d + this.list.length) % this.list.length; this.draw(); var el = $('#sr-' + this.sel); if (el) el.scrollIntoView({ block: 'nearest' }); },
    init: function () {
      var d = $('#searchDialog'), self = this; if (!d || !d.showModal) return;
      $$('[data-open-search]').forEach(function (b) { b.addEventListener('click', function () { self.open(); }); });
      document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) { e.preventDefault(); d.open ? self.close() : self.open(); }
      });
      $('#searchInput').addEventListener('input', function () { self.sel = 0; self.draw(); });
      $('#searchInput').addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') { e.preventDefault(); self.move(1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); self.move(-1); }
        else if (e.key === 'Enter') { e.preventDefault(); self.run(self.sel); }
      });
      $('#searchList').addEventListener('click', function (e) { var b = e.target.closest('[data-i]'); if (b) self.run(+b.getAttribute('data-i')); });
      $('#searchList').addEventListener('mousemove', function (e) { var b = e.target.closest('[data-i]'); if (b && +b.getAttribute('data-i') !== self.sel) { self.sel = +b.getAttribute('data-i'); self.draw(); } });
      d.addEventListener('click', function (e) { if (e.target === d) self.close(); });
    }
  };

  /* 17. FLOATING: reading progress, back to top, WhatsApp pill ============== */
  var Floating = {
    init: function () {
      var bar = $('.read-bar span'), top = $('.to-top'), ring = top && $('.ring', top), wa = $('.wa-float');
      var hero = $('#top'), contact = $('#contact');
      if (!bar && !top && !wa) return;
      var tick = 0;
      var update = function () {
        tick = 0;
        var d = document.documentElement, max = Math.max(1, d.scrollHeight - window.innerHeight);
        var p = Math.min(1, Math.max(0, window.scrollY / max));
        if (bar) bar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
        if (ring) ring.setAttribute('stroke-dashoffset', (131.95 * (1 - p)).toFixed(2));
        if (top) top.classList.toggle('is-hidden', p < 0.18);
        if (wa) {
          var inHero = hero && hero.getBoundingClientRect().bottom > 80;
          var r = contact && contact.getBoundingClientRect();
          var inContact = r && r.top < window.innerHeight * 0.75 && r.bottom > 0;
          wa.classList.toggle('is-hidden', !!(inHero || inContact));
        }
      };
      window.addEventListener('scroll', function () { if (!tick) tick = setTimeout(update, 50); }, { passive: true });
      window.addEventListener('resize', update);
      update();
    }
  };

  /* START ==================================================================== */
  document.addEventListener('DOMContentLoaded', function () {
    Theme.init();
    Dropdowns.init();
    I18n.init();
    Typing.restart();
    Header.init();
    Spotlight.init();
    Trusted.init();
    Reel.init();
    Counter.init();
    ExpFilter.init();
    Work.init();
    Certs.init();
    GitHub.init();
    Contact.init();
    HeaderFit.init();
    Search.init();
    Floating.init();
  });
})();
