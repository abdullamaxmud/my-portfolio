/**
 * ABDALLAH MOHAMUD ABDI — PORTFOLIO SCRIPT
 * Multi-language system (English, Somali, Arabic with RTL),
 * Dark/Light theme toggle, sticky navigation, scroll spy,
 * dynamic typing animation, project category filtering, and WhatsApp generator.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ========== CONFIGURATION ==========
  const WHATSAPP_NUMBER = "252613496697"; // Configurable WhatsApp Number

  // Flag SVGs (Crisp vector data URIs)
  const FLAGS = {
    en: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'><rect width='30' height='20' fill='%23012169'/><path d='M0,0 L30,20 M30,0 L0,20' stroke='%23fff' stroke-width='4'/><path d='M0,0 L30,20 M30,0 L0,20' stroke='%23C8102E' stroke-width='2'/><path d='M15,0 v20 M0,10 h30' stroke='%23fff' stroke-width='6'/><path d='M15,0 v20 M0,10 h30' stroke='%23C8102E' stroke-width='3.5'/></svg>",
    so: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'><rect width='30' height='20' fill='%234189DD'/><polygon points='15,4 16.5,8.5 21,8.5 17.5,11.5 19,16 15,13 11,16 12.5,11.5 9,8.5 13.5,8.5' fill='%23FFFFFF'/></svg>",
    ar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'><rect width='30' height='20' fill='%23006C35'/><path d='M8,12 h14 M10,10 l-2,2 l2,2' stroke='%23FFFFFF' stroke-width='1.2' stroke-linecap='round'/><circle cx='15' cy='7' r='2' fill='%23FFFFFF'/></svg>"
  };

  // ========== COMPREHENSIVE TRANSLATIONS DICTIONARY ==========
  const TRANSLATIONS = {
    en: {
      // Navbar
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.services": "Services",
      "nav.skills": "Skills",
      "nav.certificates": "Certificates",
      "nav.cv": "CV",
      "nav.contact": "Contact",
      "nav.letsTalk": "Let's Talk",

      // Hero
      "hero.status": "FULL STACK DEVELOPER & INNOVATOR",
      "hero.greeting": "Hay! I'm",
      "hero.description": "I am a passionate Full Stack Developer and UI/UX Designer dedicated to building high-performance web applications, scalable digital architectures, and visually compelling interfaces.",
      "hero.btnTouch": "GET IN TOUCH",

      // About
      "about.eyebrow": "ABOUT ME",
      "about.heading": "Architecting Modern Web & Connected Systems",
      "about.subheading": "A multidisciplinary blend of software development, mobile application engineering, and creative digital design.",
      "about.yearsExp": "Years of Dev Experience",
      "about.role": "— Tech Innovator & Developer",
      "about.bio": "I am Abdallah Mohamud Abdi, born on 8 August 2005 in Jeddah, Saudi Arabia. I am a passionate 4th-year Computer Science student at Hormuud University, Software Developer, and Technology Enthusiast specialized in Full-Stack Web Development, Mobile Applications, and Creative Multimedia solutions.",
      "about.body": "My engineering philosophy pairs solid architectural foundations with elegant user experiences. Whether developing high-concurrency web platforms, building cross-platform mobile apps with modern responsive styling, or designing sleek multimedia brand systems, I focus on delivering scalable, reliable, and high-impact digital solutions.",
      "about.highlightUniTitle": "Hormuud University",
      "about.highlightUniDesc": "4th-Year Computer Science Student",
      "about.highlightWebTitle": "Full-Stack Development",
      "about.highlightWebDesc": "React, Node.js, Express, REST APIs, SQL/NoSQL",
      "about.highlightMobileTitle": "Mobile Applications",
      "about.highlightMobileDesc": "Cross-Platform iOS & Android Apps",
      "about.highlightLocTitle": "Location & Origins",
      "about.highlightLocDesc": "Born in Jeddah, KSA • Based in Mogadishu, Somalia",
      "about.btnStart": "Start a Project",
      "about.btnWhatsapp": "Direct WhatsApp",
      "about.statProjects": "Projects Delivered",
      "about.statExperience": "Years Experience",
      "about.statTechnologies": "Technologies Mastered",
      "about.statDedication": "Client Dedication",

      // Projects
      "projects.eyebrow": "MY WORK",
      "projects.heading": "RECENT PROJECTS",
      "projects.subheading": "Explore a curated selection of web applications, UI/UX systems, and branding designs crafted with precision.",
      "projects.tabWeb": "Systems & Web Apps",
      "projects.tabPosters": "Graphic Posters",
      "projects.tabMedia": "Videos & Media",

      "projects.p1Title": "4 SEASON Restaurant",
      "projects.p1Sub": "Local POS • Full Stack",
      "projects.p2Title": "Biyaha Soomaaliya",
      "projects.p2Sub": "Water Schedule • Public Utility",
      "projects.p3Title": "DHIIG KAAL Platform",
      "projects.p3Sub": "Healthcare • Live Donation Portal",

      "projects.poster1Title": "Somali Tech Summit",
      "projects.poster1Sub": "Keynote Design • Event Poster",
      "projects.poster2Title": "Nexus Enterprise Suite",
      "projects.poster2Sub": "Brand Identity • Billboard Series",
      "projects.poster3Title": "KaafiPay FinTech Series",
      "projects.poster3Sub": "Product Launch • FinTech Promo",
      "projects.poster4Title": "Horns of Africa Art",
      "projects.poster4Sub": "Cultural Heritage • Typographic Art",

      "projects.media1Title": "Abdalla Show Production",
      "projects.media1Sub": "Video Production • Official Reel",
      "projects.media2Title": "Corporate Storytelling",
      "projects.media2Sub": "Cinematic Promo • Digital Media",

      "projects.btnLive": "Live Platform",
      "projects.btnSource": "Source Code",
      "projects.btnDemo": "Live Demo",
      "projects.btnExplore": "Explore System",
      "projects.btnSpecs": "Specs & Video",
      "projects.btnDocs": "Documentation",
      "projects.btnShowcase": "Request Showcase",
      "projects.btnInquire": "Inquire",
      "projects.btnWatchVideo": "Watch Video",

      // Services
      "services.eyebrow": "WHAT I DO",
      "services.heading": "Professional Engineering & Creative Services",
      "services.subheading": "High-caliber technical solutions tailored to accelerate businesses, startups, and academic institutions.",
      "services.s1Title": "Full-Stack Web Development",
      "services.s1Desc": "Custom responsive web applications engineered with React, Node.js, Express, and modern styling architectures. Fast load speeds, SEO optimization, and secure databases.",
      "services.s1Li1": "Single Page Applications (SPA)",
      "services.s1Li2": "RESTful API Architecture",
      "services.s1Li3": "Modern Database Integration",
      "services.s1Action": "Hire for Web Dev",

      "services.s2Title": "Cloud & API Architecture",
      "services.s2Desc": "Scalable backend systems, microservices, RESTful API design, database optimization, and high-concurrency cloud deployments for resilient web operations.",
      "services.s2Li1": "REST & GraphQL APIs",
      "services.s2Li2": "Cloud Databases (SQL & NoSQL)",
      "services.s2Li3": "Authentication & Security",
      "services.s2Action": "Build Backend System",

      "services.s3Title": "Mobile App Development",
      "services.s3Desc": "Clean cross-platform mobile interfaces built for iOS and Android with intuitive gestures, fast rendering, offline storage, and responsive layouts.",
      "services.s3Li1": "Responsive Mobile UI",
      "services.s3Li2": "Cross-Platform Capabilities",
      "services.s3Li3": "API & Cloud Integration",
      "services.s3Action": "Develop Mobile App",

      "services.s4Title": "UI/UX & Product Design",
      "services.s4Desc": "User-centered interfaces crafted with surgical attention to typography, spatial balance, micro-interactions, accessibility, and high-fidelity interactive wireframes.",
      "services.s4Li1": "Interactive Wireframing",
      "services.s4Li2": "Design Systems & Tokens",
      "services.s4Li3": "User Flow Optimization",
      "services.s4Action": "Design User Experience",

      "services.s5Title": "Creative Multimedia & Branding",
      "services.s5Desc": "High-impact visual identity packages, corporate logos, promotional marketing graphics, video post-production, and digital content designed to elevate brands.",
      "services.s5Li1": "Corporate Brand Identity",
      "services.s5Li2": "High-Resolution Posters",
      "services.s5Li3": "Video Editing & Graphics",
      "services.s5Action": "Request Creative Media",

      "services.s6Title": "IT Consultation & Support",
      "services.s6Desc": "Technical guidance on systems architecture, server setup, database modeling, academic project mentoring, and software performance optimization.",
      "services.s6Li1": "Architecture Consultation",
      "services.s6Li2": "Database Structuring",
      "services.s6Li3": "Tech Project Advisory",
      "services.s6Action": "Book Consultation",

      // Skills
      "skills.eyebrow": "TECHNICAL CAPABILITIES",
      "skills.heading": "Skills, Frameworks & Tooling",
      "skills.subheading": "A comprehensive overview of programming languages, modern frameworks, and creative tools I utilize on a daily basis.",
      "skills.catFrontend": "Frontend Engineering",
      "skills.catBackend": "Backend & Cloud",
      "skills.catMobile": "Mobile Development",
      "skills.catMedia": "Multimedia & Tools",

      // Certificates
      "certificates.eyebrow": "OFFICIAL CERTIFICATIONS & HONORS",
      "certificates.heading": "Verified Certificates & Credentials",
      "certificates.subheading": "Official academic and professional credentials earned by Abdallah Mohamud Abdi across Artificial Intelligence, Prompt Engineering, and Technology Innovation.",
      "certificates.btnPreview": "Preview",
      "certificates.btnDownload": "Download PDF",
      "certificates.btnViewCert": "View Certificate",
      "certificates.btnViewAll": "View All Certificates (4)",
      "certificates.btnShowLess": "Show Less",
      "certificates.badgeIssuer": "Hormuud University • NTW",
      "certificates.c1Title": "AI Tools for Everyday Life",
      "certificates.c1Program": "Artificial Intelligence for Academic Transformation",
      "certificates.c1Desc": "Official learning credential validating practical competence in modern AI tools, automated workflow systems, and productivity acceleration for academic and business environments.",
      "certificates.c2Title": "Mastering Prompt Engineering",
      "certificates.c2Program": "Artificial Intelligence for Academic Transformation",
      "certificates.c2Desc": "Advanced training credential certifying mastery in large language model (LLM) prompting architectures, few-shot prompting, structured outputs, and chain-of-thought engineering.",
      "certificates.c3Title": "AI for Entrepreneurship and Freelancing",
      "certificates.c3Program": "Artificial Intelligence for Academic Transformation",
      "certificates.c3Desc": "Specialized certificate certifying strategic application of AI tools to scale digital freelancing services, accelerate client deliverables, and launch digital tech ventures.",
      "certificates.c4Title": "AI-Driven Digital Marketing",
      "certificates.c4Program": "Artificial Intelligence for Academic Transformation",
      "certificates.c4Desc": "Professional credential covering AI-powered digital marketing strategies, automated campaign analysis, customer segment targeting, and high-conversion content generation.",

      // CV
      "cv.eyebrow": "CURRICULUM VITAE",
      "cv.heading": "My Official Resume",
      "cv.subheading": "Review my complete technical background, university coursework at Hormuud University, professional milestones, and certifications.",
      "cv.f1": "Full Stack Web Architecture (Frontend & Backend)",
      "cv.f2": "UI/UX Prototyping, Wireframing & Brand Guidelines",
      "cv.f3": "Database Design, API Integration & Security",
      "cv.f4": "IT Support, Networking & Embedded Systems",
      "cv.btnDownload": "Download CV (PDF)",
      "cv.btnBio": "Request Full Bio",
      "cv.verifiedBadge": "Verified CV Document",

      // Contact
      "contact.eyebrow": "GET IN TOUCH",
      "contact.heading": "Let's Discuss Your Next Project",
      "contact.subheading": "Have an opportunity, contract inquiry, or project proposal? Reach out directly via the form or connect instantly on WhatsApp.",
      "contact.directTitle": "Direct Contact Information",
      "contact.directDesc": "I am always excited to discuss new software engineering projects, cross-platform mobile apps, or creative multimedia solutions.",
      "contact.emailLabel": "Email Address",
      "contact.phoneLabel": "Direct Phone Line",
      "contact.whatsappLabel": "WhatsApp Direct QR & Chat",
      "contact.instantChat": "Instant Chat",
      "contact.locationLabel": "Location & University",
      "contact.locationVal": "Mogadishu, Somalia (Hormuud University)",
      "contact.socialsLabel": "Official Social Channels:",
      "contact.formTitle": "Send a Direct Message",
      "contact.nameLabel": "Your Name",
      "contact.namePlaceholder": "e.g. Abdallah Mohamud Abdi",
      "contact.emailFieldLabel": "Your Email",
      "contact.emailPlaceholder": "e.g. abdullamaxmud39@gmail.com",
      "contact.subjectLabel": "Subject",
      "contact.subjectPlaceholder": "Full stack developer mobile app developer & content creator",
      "contact.messageLabel": "Message Details",
      "contact.messagePlaceholder": "I am a passionate Full Stack Developer and UI/UX Designer dedicated to building high-performance web applications, scalable digital architectures, and visually compelling interfaces.",
      "contact.btnSend": "Send Message",
      "contact.btnWhatsapp": "Chat on WhatsApp",
      "contact.disclaimer": "Your message goes directly to Abdallah Mohamud Abdi. You will receive a reply within 24 hours.",

      // Footer
      "footer.tagline": "Building modern web applications, scalable mobile architectures, and visually compelling digital interfaces.",
      "footer.status": "4th Year Computer Science • Hormuud University",
      "footer.navHeading": "Navigation",
      "footer.servicesHeading": "Services",
      "footer.reachHeading": "Direct Reach",
      "footer.location": "Mogadishu, Somalia",
      "footer.rights": "All rights reserved.",
      "footer.uniPortfolio": "Hormuud University Portfolio",
      "footer.backTop": "Back to top",

      // Floating
      "floating.whatsappTooltip": "Chat on WhatsApp",

      // Modal
      "modal.title": "Message Prepared!",
      "modal.desc": "Thank you for reaching out, Abdallah Mohamud Abdi will respond to you within 24 hours.",
      "modal.close": "Close"
    },

    so: {
      // Navbar
      "nav.home": "Bogga Hore",
      "nav.about": "Igu Saabsan",
      "nav.projects": "Mashaariicda",
      "nav.services": "Adeegyada",
      "nav.skills": "Xirfadaha",
      "nav.certificates": "Shahaadooyinka",
      "nav.cv": "CV-ga",
      "nav.contact": "La Xiriir",
      "nav.letsTalk": "Aan Wadahadalno",

      // Hero
      "hero.status": "FULL STACK DEVELOPER & INNOVATOR",
      "hero.greeting": "Hay! Waxaan ahay",
      "hero.description": "Waxaan ahay Full Stack Developer iyo UI/UX Designer u heellan dhisidda barnaamijyada shabakadda ee waxqabadka sare leh, qaab-dhismeedka dhijitaalka ah ee la ballaarin karo, iyo muuqaallada indhaha soo jiita.",
      "hero.btnTouch": "ILA XIRIIR",

      // About
      "about.eyebrow": "IGU SAABSAN",
      "about.heading": "Dhisidda Mareegaha Casriga ah & Nidaamyada Isku Xiran",
      "about.subheading": "Isku-dhafka horumarinta software-ka, injineernimada mobile apps-ka, iyo naqshadaynta dhijitaalka ah ee heerka sare ah.",
      "about.yearsExp": "Sano oo Khibrad Horumarineed ah",
      "about.role": "— Hal-abuure Tignoolaji & Hormariye",
      "about.bio": "Waxaan ahay Abdallah Mohamud Abdi, waxaan ku dhashay 8-dii Agoosto 2005 magaalada Jeddah, Saudi Arabia. Waxaan ahay arday sanadka 4-aad ee Sayniska Kombiyuutarka ee Jaamacadda Hormuud, Hormariye Software, iyo xiiseeyaha tignoolajiyada ee ku takhasusay Full-Stack Web, Mobile Apps, iyo Multimedia hal-abuur leh.",
      "about.body": "Falsafaddayda injineernimo waxay isku xirtaa aasaas adag oo qaab-dhismeed iyo waayo-aragnimo isticmaale oo qurux badan. Hadday tahay horumarinta mareegaha baaxadda leh, dhisidda barnaamijyada mobile-ka ee degdegga ah, ama naqshadaynta astaamaha ganacsiga, waxaan xoogga saaraa bixinta xalal dhijitaal ah oo la isku halayn karo.",
      "about.highlightUniTitle": "Jaamacadda Hormuud",
      "about.highlightUniDesc": "Ardayga Sanadka 4-aad ee Sayniska Kombiyuutarka",
      "about.highlightWebTitle": "Horumarinta Full-Stack",
      "about.highlightWebDesc": "React, Node.js, Express, REST APIs, SQL/NoSQL",
      "about.highlightMobileTitle": "Barnaamijyada Mobile-ka",
      "about.highlightMobileDesc": "Cross-Platform iOS & Android Apps",
      "about.highlightLocTitle": "Goobta & Asalka",
      "about.highlightLocDesc": "Ku dhashay Jeddah, KSA • Deggan Muqdisho, Soomaaliya",
      "about.btnStart": "Bilow Mashruuc",
      "about.btnWhatsapp": "WhatsApp Toos ah",
      "about.statProjects": "Mashaariic La Qabtay",
      "about.statExperience": "Sano oo Khibrad ah",
      "about.statTechnologies": "Farsamooyin La Yaqaano",
      "about.statDedication": "Daacadnimada Macaamiisha",

      // Projects
      "projects.eyebrow": "SHAQADAYDA",
      "projects.heading": "MASHAARIICDII UGU DAMBEYSAY",
      "projects.subheading": "Xulashada nidaamyada shabakadda ee waxqabadka sare leh, barnaamijyada mobile-ka, iyo alaabooyinka multimedia dhijitaalka ah.",
      "projects.tabWeb": "Systems & Web Apps",
      "projects.tabPosters": "Boorarka & Sawirrada",
      "projects.tabMedia": "Fiidiyowyada & Warbaahinta",

      "projects.p1Title": "4 SEASON Restaurant",
      "projects.p1Sub": "POS Maqaayad • Full Stack",
      "projects.p2Title": "Biyaha Soomaaliya",
      "projects.p2Sub": "Nidaamka Biyaha • Adeegga Dadweynaha",
      "projects.p3Title": "DHIIG KAAL Platform",
      "projects.p3Sub": "Daryeelka Caafimaadka • Tabaruca Dhiigga",

      "projects.poster1Title": "Somali Tech Summit",
      "projects.poster1Sub": "Naqshadda Shirka • Boorarka Xayeysiinta",
      "projects.poster2Title": "Nexus Enterprise Suite",
      "projects.poster2Sub": "Sumadda Ganacsiga • Boorarka Waaweyn",
      "projects.poster3Title": "KaafiPay FinTech Series",
      "projects.poster3Sub": "Bilaabidda App-ka • FinTech UI",
      "projects.poster4Title": "Bandhigga Geeska Afrika",
      "projects.poster4Sub": "Hidaha & Dhaqanka • Farshaxanka Qoraalka",

      "projects.media1Title": "Abdalla Show Production",
      "projects.media1Sub": "Soo Saarista Muuqaallada • Reel Rasmi ah",
      "projects.media2Title": "Sheeko Ganacsi & Muuqaal",
      "projects.media2Sub": "Xayeysiis Cinematik • Warbaahinta Dhijitaalka",

      "projects.btnLive": "Madasha Tooska ah",
      "projects.btnSource": "Koodhka Xogta",
      "projects.btnDemo": "Muuqaal Toos ah",
      "projects.btnExplore": "Baadh Nidaamka",
      "projects.btnSpecs": "Faahfaahin & Muuqaal",
      "projects.btnDocs": "Dukumentiyada",
      "projects.btnShowcase": "Dalbo Muuqaal",
      "projects.btnInquire": "Weydii Xog",
      "projects.btnWatchVideo": "Daawo Muuqaalka",

      // Services
      "services.eyebrow": "WAXAAN QABTO",
      "services.heading": "Adeegyada Injineernimada & Hal-abuurka Dhijitaalka",
      "services.subheading": "Xalal farsamo oo heer sare ah oo loogu talagalay ganacsiyada, shirkadaha bilowga ah, iyo jaamacadaha.",
      "services.s1Title": "Horumarinta Full-Stack Web",
      "services.s1Desc": "Mareegaha casriga ah oo lagu dhisay React, Node.js, Express, iyo qaabab casri ah. Xawaare degdeg ah, SEO heer sare ah, iyo databases ammaan ah.",
      "services.s1Li1": "Single Page Applications (SPA)",
      "services.s1Li2": "Qaab-dhismeedka RESTful API",
      "services.s1Li3": "Isku-xirka Database-yada Casriga",
      "services.s1Action": "U Kireyso Horumarinta Webka",

      "services.s2Title": "Qaab-dhismeedka Cloud & API",
      "services.s2Desc": "Nidaamyada backend-ka ee la ballaarin karo, microservices, naqshadda RESTful API, database-yada casriga ah, iyo adeegyada cloud-ka ee degdegga ah.",
      "services.s2Li1": "REST & GraphQL APIs",
      "services.s2Li2": "Cloud Databases (SQL & NoSQL)",
      "services.s2Li3": "Xaqiijinta & Amniga Xogta",
      "services.s2Action": "Dhis Nidaam Backend ah",

      "services.s3Title": "Horumarinta App-ka Mobile-ka",
      "services.s3Desc": "Interface-yo nadiif ah oo loogu talagalay iOS iyo Android oo leh dhaqdhaqaaq fudud, xawaare sare, kaydin offline ah, iyo naqshad habboon.",
      "services.s3Li1": "UI Mobile oo Casri ah",
      "services.s3Li2": "Awoodda Cross-Platform",
      "services.s3Li3": "Isku-xirka API & Cloud-ka",
      "services.s3Action": "Sameyso App Mobile",

      "services.s4Title": "UI/UX & Naqshadaynta Alaabta",
      "services.s4Desc": "Interface-yo ku saleysan isticmaalaha oo si gaar ah loogu daryeelay xarfaha, boosaska, is-dhexgalka, iyo qaababka tijaabada ee heerka sare ah.",
      "services.s4Li1": "Wireframes Is-dhexgal ah",
      "services.s4Li2": "Nidaamyada Naqshadda & Tokens",
      "services.s4Li3": "Hagaajinta Socodka Isticmaalaha",
      "services.s4Action": "Naqshadee Khibradda Isticmaalaha",

      "services.s5Title": "Warbaahinta Hal-abuurka & Sumadda",
      "services.s5Desc": "Xirmooyinka aqoonsiga shirkadda, calaamadaha (logos), boodhadhka xayaysiinta, tafatirka muuqaallada (video editing), iyo waxyaabaha dhijitaalka ah.",
      "services.s5Li1": "Aqoonsiga Sumadda Shirkadda",
      "services.s5Li2": "Boodhadhka Tayada Sare",
      "services.s5Li3": "Tafatarka Fiidiyowga & Sawirrada",
      "services.s5Action": "Dalbo Warbaahin Hal-abuur",

      "services.s6Title": "La-talinta & Taageerada IT-ga",
      "services.s6Desc": "Hagid farsamo oo ku saabsan qaab-dhismeedka nidaamyada, habeynta server-ka, naqshadda database-ka, iyo hagaajinta waxqabadka software-ka.",
      "services.s6Li1": "La-talinta Qaab-dhismeedka",
      "services.s6Li2": "Habeynta Database-ka",
      "services.s6Li3": "Hagidda Mashaariicda Farsamada",
      "services.s6Action": "Qabso La-tashigaaga",

      // Skills
      "skills.eyebrow": "XIRFADAHA FARFARSAMADA",
      "skills.heading": "Xirfadaha, Qaababka & Qalabka",
      "skills.subheading": "Guudmar buuxa oo ku saabsan luqadaha borogaraamka, barnaamijyada casriga ah, iyo aaladaha hal-abuurka ee aan maalin kasta adeegsado.",
      "skills.catFrontend": "Injineernimada Frontend",
      "skills.catBackend": "Backend & Cloud",
      "skills.catMobile": "Horumarinta Mobile-ka",
      "skills.catMedia": "Warbaahinta & Qalabka",

      // Certificates
      "certificates.eyebrow": "SHAHAADOOBYINKA & AQOONSIGA",
      "certificates.heading": "Shahaadooyinka La Xaqiijiyay & Aqoonsiyada",
      "certificates.subheading": "Shahaadooyin tacliimeed iyo kuwo xirfadeed oo uu qaatay Abdallah Mohamud Abdi oo ku saabsan Sirdoonka Macmalka ah (AI), Prompt Engineering, iyo Hal-abuurka Tignoolajiyada.",
      "certificates.btnPreview": "Eeg",
      "certificates.btnDownload": "Degso PDF",
      "certificates.btnViewCert": "Eeg Shahaadada",
      "certificates.btnViewAll": "Arag Dhammaan Shahaadooyinka (4)",
      "certificates.btnShowLess": "Qari Qaar",
      "certificates.badgeIssuer": "Jaamacadda Hormuud • NTW",
      "certificates.c1Title": "Aaladaha AI ee Nolosha Maalinlaha ah",
      "certificates.c1Program": "Sirdoonka Macmalka ah ee Isbeddelka Waxbarashada",
      "certificates.c1Desc": "Shahaado rasmi ah oo caddaynaysa khibrad dhab ah oo ku saabsan aaladaha AI ee casriga ah, otomaatiga shaqada, iyo kordhinta wax-soo-saarka tacliinta iyo ganacsiga.",
      "certificates.c2Title": "Barashada Sare ee Prompt Engineering",
      "certificates.c2Program": "Sirdoonka Macmalka ah ee Isbeddelka Waxbarashada",
      "certificates.c2Desc": "Shahaado tababar sare oo caddaynaysa khibrad buuxda oo ku saabsan habaynta awaamiirta luqadaha waaweyn ee AI (LLM), farsamooyinka chain-of-thought, iyo natiijooyinka la habeeyay.",
      "certificates.c3Title": "AI loogu talagalay Ganacsiga & Freelancing-ka",
      "certificates.c3Program": "Sirdoonka Macmalka ah ee Isbeddelka Waxbarashada",
      "certificates.c3Desc": "Shahaado takhasus leh oo diiradda saaraysa ka faa'iidaysiga nidaamyada AI si loo ballaariyo adeegyada shaqada madaxa-bannaan (freelance) iyo ganacsiyada dhijitaalka ah.",
      "certificates.c4Title": "Suuqgeynta Dhijitaalka ah ee AI Hoggaamiso",
      "certificates.c4Program": "Sirdoonka Macmalka ah ee Isbeddelka Waxbarashada",
      "certificates.c4Desc": "Shahaado xirfadeed oo caddaynaysa aqoonta sare ee ololayaasha suuqgeynta casriga ah, beegsiga macaamiisha iyadoo la adeegsanayo AI, iyo falanqaynta xogta.",

      // CV
      "cv.eyebrow": "TAARIIKH NOLOLEED (CV)",
      "cv.heading": "CV-gayga Rasmiga ah",
      "cv.subheading": "Dib u eeg aqoontayda farsamo ee buuxda, waxbarashadayda Jaamacadda Hormuud, heerarka xirfadeed, iyo shahaadooyinka.",
      "cv.f1": "Qaab-dhismeedka Web-ka Full Stack (Frontend & Backend)",
      "cv.f2": "Naqshadaynta UI/UX, Qabyo-qoraalka & Habraaca Sumadda",
      "cv.f3": "Naqshadaynta Database-ka, Isku-xirka API & Amniga",
      "cv.f4": "Taageerada IT-ga, Khadadka Xiriirka & Nidaamyada Embedded",
      "cv.btnDownload": "Degso CV (PDF)",
      "cv.btnBio": "Dalbo Taariikh Buuxda",
      "cv.verifiedBadge": "Dukumeenti CV oo La Xaqiijiyay",

      // Contact
      "contact.eyebrow": "ILA SOO XIRIIR",
      "contact.heading": "Aan Ka Wada Hadalno Mashruucaaga Xiga",
      "contact.subheading": "Ma haysaa fursad, su'aal qandaraas, ama dalab mashruuc? Toos iila soo xiriir foomka ama si toos ah iila hadal WhatsApp.",
      "contact.directTitle": "Xogta Xiriirka Tooska ah",
      "contact.directDesc": "Mar walba waan ku faraxsanahay inaan ka wadahadalno mashaariicda cusub ee software-ka, apps-ka mobile-ka, ama xalalka multimedia ee hal-abuurka leh.",
      "contact.emailLabel": "Cinwaanka Email-ka",
      "contact.phoneLabel": "Khadka Taleefanka Tooska",
      "contact.whatsappLabel": "WhatsApp Toos ah & QR Chat",
      "contact.instantChat": "Sheeko Degdeg ah",
      "contact.locationLabel": "Location & University",
      "contact.locationVal": "Muqdisho, Soomaaliya (Jaamacadda Hormuud)",
      "contact.socialsLabel": "Khadadka Baraha Bulshada:",
      "contact.formTitle": "Soo Dir Farriin Toos ah",
      "contact.nameLabel": "Magacaaga",
      "contact.namePlaceholder": "tusaale: Abdallah Mohamud Abdi",
      "contact.emailFieldLabel": "Email-kaaga",
      "contact.emailPlaceholder": "tusaale: abdullamaxmud39@gmail.com",
      "contact.subjectLabel": "Mowduuca",
      "contact.subjectPlaceholder": "Full stack developer mobile app developer & content creator",
      "contact.messageLabel": "Faahfaahinta Farriinta",
      "contact.messagePlaceholder": "Waxaan ahay Full Stack Developer iyo UI/UX Designer u heellan dhisidda mareegaha waxqabadka sare leh, qaab-dhismeedka dhijitaalka ah, iyo interface-yada soo jiidashada leh.",
      "contact.btnSend": "Dir Farriinta",
      "contact.btnWhatsapp": "Kula Hadal WhatsApp",
      "contact.disclaimer": "Farriintaadu waxay toos ugu socotaa Abdallah Mohamud Abdi. Waxaad jawaab ku heli doontaa 24 saac gudahood.",

      // Footer
      "footer.tagline": "Dhisidda mareegaha casriga ah, nidaamyada mobile-ka ee la ballaarin karo, iyo muuqaallada dhijitaalka ah ee soo jiidashada leh.",
      "footer.status": "Sanadka 4-aad Sayniska Kombiyuutarka • Jaamacadda Hormuud",
      "footer.navHeading": "Qaybaha Bogga",
      "footer.servicesHeading": "Adeegyada",
      "footer.reachHeading": "Xiriir Toos ah",
      "footer.location": "Muqdisho, Soomaaliya",
      "footer.rights": "Dhammaan xuquuqda way dhowran yihiin.",
      "footer.uniPortfolio": "Portfolio-ga Jaamacadda Hormuud",
      "footer.backTop": "Ku noqo kor",

      // Floating
      "floating.whatsappTooltip": "Kula hadal WhatsApp",

      // Modal
      "modal.title": "Farriintu Way Diyaar Tahay!",
      "modal.desc": "Waad ku mahadsan tahay xiriirkaaga, Abdallah Mohamud Abdi wuxuu kugu soo jawaabi doonaa 24 saac gudahood.",
      "modal.close": "Xir"
    },

    ar: {
      // Navbar
      "nav.home": "الرئيسية",
      "nav.about": "من أنا",
      "nav.projects": "المشاريع",
      "nav.services": "الخدمات",
      "nav.skills": "المهارات",
      "nav.certificates": "الشهادات",
      "nav.cv": "السيرة الذاتية",
      "nav.contact": "تواصل معي",
      "nav.letsTalk": "لنتحدث",

      // Hero
      "hero.status": "FULL STACK DEVELOPER & INNOVATOR",
      "hero.greeting": "مرحباً! أنا",
      "hero.description": "مطور ويب متكامل (Full-Stack) ومصمم واجهات وتجربة مستخدم (UI/UX) شغوف ببناء تطبيقات ويب عالية الأداء، وبنى تحتية رقمية قابلة للتوسع، وتصميم واجهات بصرية جذابة ومبتكرة.",
      "hero.btnTouch": "تواصل معي",

      // About
      "about.eyebrow": "نبذة عني",
      "about.heading": "هندسة مواقع الويب الحديثة والأنظمة المتصلة",
      "about.subheading": "مزيج متعدد التخصصات يجمع بين تطوير البرمجيات، وهندسة تطبيقات الموبايل، والتصميم الرقمي الإبداعي.",
      "about.yearsExp": "سنوات من الخبرة البرمجية",
      "about.role": "— مبتكر تقني ومطور برمجيات",
      "about.bio": "أنا عبد الله محمود عبدي، وُلدت في 8 أغسطس 2005 في جدة، المملكة العربية السعودية. طالب شغوف في السنة الرابعة بكلية علوم الحاسوب في جامعة هرمود، مطور برمجيات ومتخصص في تطوير الويب المتكامل، وتطبيقات الهاتف الذكي، وحلول الملتيميديا الإبداعية.",
      "about.body": "ترتكز فلسفتي الهندسية على دمج الأسس المعمارية المتينة مع تجارب المستخدم الأنيقة. سواء كنت أطور منصات ويب عالية الأداء، أو أبني تطبيقات هواتف متعددة المنصات بتصميم عصري متجاوب، أو أصمم أنظمة الهويات البصرية، فإن تركيزي ينصب دائمًا على تقديم حلول رقمية موثوقة وعالية التأثير.",
      "about.highlightUniTitle": "جامعة هرمود",
      "about.highlightUniDesc": "طالب في السنة الرابعة بكلية علوم الحاسوب",
      "about.highlightWebTitle": "تطوير الويب الشامل (Full-Stack)",
      "about.highlightWebDesc": "React, Node.js, Express, REST APIs, SQL/NoSQL",
      "about.highlightMobileTitle": "تطبيقات الهاتف المحمول",
      "about.highlightMobileDesc": "تطبيقات متكاملة لأنظمة iOS و Android",
      "about.highlightLocTitle": "الموقع والنشأة",
      "about.highlightLocDesc": "الميلاد في جدة، السعودية • مقيم في مقديشو، الصومال",
      "about.btnStart": "ابدأ مشروعاً",
      "about.btnWhatsapp": "واتساب مباشر",
      "about.statProjects": "مشاريع منجزة",
      "about.statExperience": "سنوات خبرة",
      "about.statTechnologies": "تقنيات متقنة",
      "about.statDedication": "التزام كامل للعملاء",

      // Projects
      "projects.eyebrow": "أعمالي",
      "projects.heading": "أحدث المشاريع",
      "projects.subheading": "استكشف مجموعة مختارة من تطبيقات الويب، وأنظمة واجهات المستخدم، وتصاميم الهوية البصرية المتقنة.",
      "projects.tabWeb": "الأنظمة وتطبيقات الويب",
      "projects.tabPosters": "البوسترات الجرافيكية",
      "projects.tabMedia": "الفيديو والوسائط",

      "projects.p1Title": "مطعم فور سيزون",
      "projects.p1Sub": "نظام نقاط البيع • ويب شامل",
      "projects.p2Title": "بوابة مياه الصومال",
      "projects.p2Sub": "مرافق عامة • منصة جدول المياه",
      "projects.p3Title": "منصة ضيق كال للدم",
      "projects.p3Sub": "رعاية صحية • بوابة التبرع بالدم",

      "projects.poster1Title": "قمة الصومال التقنية",
      "projects.poster1Sub": "تصميم المؤتمر • بوستر إعلاني",
      "projects.poster2Title": "مجموعة نيكسوس للشركات",
      "projects.poster2Sub": "هوية بصرية • بوسترات طرقية",
      "projects.poster3Title": "سلسلة كافي باي",
      "projects.poster3Sub": "إطلاق منتج • واجهات مالية",
      "projects.poster4Title": "معرض قرن أفريقيا",
      "projects.poster4Sub": "تراث وثقافة • تيبوغرافي فني",

      "projects.media1Title": "إنتاج عبد الله شو",
      "projects.media1Sub": "إنتاج فيديو • ريل رسمي",
      "projects.media2Title": "سرد قصصي للشركات",
      "projects.media2Sub": "إعلان سينمائي • إنتاج رقمي",

      "projects.btnLive": "المنصة الحية",
      "projects.btnSource": "الكود المصدري",
      "projects.btnDemo": "العرض المباشر",
      "projects.btnExplore": "استكشف النظام",
      "projects.btnSpecs": "المواصفات والفيديو",
      "projects.btnDocs": "التوثيق البرمجي",
      "projects.btnShowcase": "طلب المعاينة",
      "projects.btnInquire": "استفسار",
      "projects.btnWatchVideo": "مشاهدة الفيديو",

      // Services
      "services.eyebrow": "ما أقدمه",
      "services.heading": "خدمات هندسية وإبداعية احترافية",
      "services.subheading": "حلول تقنية عالية المستوى مصممة لتسريع نمو الشركات، والمشاريع الناشئة، والمؤسسات الأكاديمية.",
      "services.s1Title": "تطوير الويب المتكامل (Full-Stack)",
      "services.s1Desc": "تطبيقات ويب متجاوبة ومخصصة مبنية باستخدام React و Node.js و Express وهياكل التنسيق الحديثة. سرعة فائقة، تحسين محركات البحث، وقواعد بيانات آمنة.",
      "services.s1Li1": "تطبيقات الصفحة الواحدة (SPA)",
      "services.s1Li2": "هندسة واجهات برمجة التطبيقات (REST APIs)",
      "services.s1Li3": "دمج قواعد البيانات الحديثة",
      "services.s1Action": "توظيف لتطوير الويب",

      "services.s2Title": "هندسة السحابة وواجهات الـ API",
      "services.s2Desc": "أنظمة خلفية متطورة وقابلة للتوسع، معمارية الخدمات المصغرة، تصميم واجهات RESTful، تحسين قواعد البيانات، واستضافة سحابية عالية الاستجابة.",
      "services.s2Li1": "واجهات REST و GraphQL",
      "services.s2Li2": "قواعد البيانات السحابية (SQL & NoSQL)",
      "services.s2Li3": "المصادقة والأمن البرمجي",
      "services.s2Action": "بناء نظام خوادم وسحابة",

      "services.s3Title": "تطوير تطبيقات الهاتف المحمول",
      "services.s3Desc": "واجهات تطبيقات أنيقة تعمل بسلاسة عبر أنظمة iOS و Android مع استجابة فورية، تخزين دون اتصال، وتصميم متجاوب لجميع الشاشات.",
      "services.s3Li1": "واجهات مستخدم متجاوبة",
      "services.s3Li2": "تطبيقات متعددة المنصات",
      "services.s3Li3": "ربط السحابة والـ APIs",
      "services.s3Action": "تطوير تطبيق هاتف",

      "services.s4Title": "تصميم واجهات وتجربة المستخدم (UI/UX)",
      "services.s4Desc": "واجهات رقمية متمحورة حول المستخدم ومصممة بعناية فائقة للتدرج الطباعي، والتوازن البصري، والتفاعلات الدقيقة، وسهولة الوصول.",
      "services.s4Li1": "نماذج وتخطيطات تفاعلية (Wireframes)",
      "services.s4Li2": "أنظمة التصميم ورموزها (Tokens)",
      "services.s4Li3": "تحسين مسارات رحلة المستخدم",
      "services.s4Action": "تصميم تجربة المستخدم",

      "services.s5Title": "الوسائط المتعددة والهويات البصرية",
      "services.s5Desc": "حزم هويات تجارية فريدة، وتصميم شعارات، وتصاميم إعلانية عالية الدقة، ومونتاج الفيديو الاحترافي لتعزيز حضور علامتك التجارية.",
      "services.s5Li1": "تصميم الهويات التجارية",
      "services.s5Li2": "بوسترات تسويقية فائقة الدقة",
      "services.s5Li3": "مونتاج الفيديو والمؤثرات البصرية",
      "services.s5Action": "طلب خدمات الملتيميديا",

      "services.s6Title": "الاستشارات والدعم التقني",
      "services.s6Desc": "إرشاد فني متخصص في المعمارية البرمجية، وإعداد الخوادم، وهيكلة قواعد البيانات، وتوجيه المشاريع التقنية للوصول لأفضل أداء.",
      "services.s6Li1": "استشارات المعمارية البرمجية",
      "services.s6Li2": "هيكلة ونمذجة قواعد البيانات",
      "services.s6Li3": "توجيه وإرشاد المشاريع التقنية",
      "services.s6Action": "حجز جلسة استشارية",

      // Skills
      "skills.eyebrow": "القدرات والمهارات التقنية",
      "skills.heading": "المهارات، أطر العمل والأدوات",
      "skills.subheading": "نظرة شاملة على لغات البرمجة، والتقنيات الحديثة، والأدوات الإبداعية التي أستخدمها يومياً لبناء الحلول الرقمية.",
      "skills.catFrontend": "هندسة الواجهات الأمامية (Frontend)",
      "skills.catBackend": "الخوادم والسحابة (Backend & Cloud)",
      "skills.catMobile": "تطوير تطبيقات الهاتف (Mobile Dev)",
      "skills.catMedia": "الوسائط المتعددة والأدوات",

      // Certificates
      "certificates.eyebrow": "الشهادات والاعتمادات الرسمية",
      "certificates.heading": "الشهادات المعتمدة والموثقة",
      "certificates.subheading": "الشهادات والاعتمادات الأكاديمية والمهنية الرسمية التي حصل عليها عبد الله محمود عبدي في مجالات الذكاء الاصطناعي، وهندسة الأوامر، والابتكار التقني.",
      "certificates.btnPreview": "معاينة",
      "certificates.btnDownload": "تحميل PDF",
      "certificates.btnViewCert": "عرض الشهادة",
      "certificates.btnViewAll": "عرض جميع الشهادات (4)",
      "certificates.btnShowLess": "عرض أقل",
      "certificates.badgeIssuer": "جامعة هرمود • أسبوع التدريب الوطني",
      "certificates.c1Title": "أدوات الذكاء الاصطناعي للحياة اليومية",
      "certificates.c1Program": "الذكاء الاصطناعي للتحول الأكاديمي",
      "certificates.c1Desc": "شهادة رسمية تثبت الكفاءة العملية في توظيف أدوات الذكاء الاصطناعي الحديثة وأتمتة مسارات العمل ورفع الإنتاجية في البيئات الأكاديمية والمهنية.",
      "certificates.c2Title": "إتقان هندسة الأوامر (Prompt Engineering)",
      "certificates.c2Program": "الذكاء الاصطناعي للتحول الأكاديمي",
      "certificates.c2Desc": "شهادة تدريبية متقدمة في صياغة وهندسة أوامر النماذج اللغوية الكبيرة (LLMs)، وتقنيات التفكير التسلسلي، وضبط المخرجات بدقة وكفاءة عالية.",
      "certificates.c3Title": "الذكاء الاصطناعي لريادة الأعمال والعمل الحر",
      "certificates.c3Program": "الذكاء الاصطناعي للتحول الأكاديمي",
      "certificates.c3Desc": "شهادة تخصصية تركز على استخدام أنظمة الذكاء الاصطناعي لتوسيع نطاق خدمات العمل الحر، وتسريع تسليم المشاريع، وإطلاق المشاريع الرقمية.",
      "certificates.c4Title": "التسويق الرقمي المعتمد على الذكاء الاصطناعي",
      "certificates.c4Program": "الذكاء الاصطناعي للتحول الأكاديمي",
      "certificates.c4Desc": "شهادة مهنية تثبت التمكن من استراتيجيات التسويق المدفوعة بالذكاء الاصطناعي، واستهداف الجمهور، وإنشاء المحتوى التسويقي عالي التأثير.",

      // CV
      "cv.eyebrow": "السيرة الذاتية (CV)",
      "cv.heading": "سيرتي الذاتية الرسمية",
      "cv.subheading": "استعرض خلفيتي التقنية المتكاملة، ومسيرتي الأكاديمية في جامعة هرمود، ومحطاتي المهنية، وشهاداتي المعتمدة.",
      "cv.f1": "معمارية تطوير الويب الشامل (الواجهات والخوادم)",
      "cv.f2": "تصميم ونمذجة واجهات وتجربة المستخدم (UI/UX)",
      "cv.f3": "تصميم قواعد البيانات، ربط الـ APIs، والأمن السيبراني",
      "cv.f4": "الدعم الفني وتقنية المعلومات والأنظمة المدمجة",
      "cv.btnDownload": "تحميل السيرة الذاتية (PDF)",
      "cv.btnBio": "طلب السيرة الكاملة",
      "cv.verifiedBadge": "مستند سيرة ذاتية معتمد وموثق",

      // Contact
      "contact.eyebrow": "تواصل معي",
      "contact.heading": "لنناقش مشروعك القادم معاً",
      "contact.subheading": "هل لديك فرصة عمل، استفسار عن تعاقد، أو فكرة مشروع؟ تواصل معي مباشرة عبر النموذج أو فوريًا عبر الواتساب.",
      "contact.directTitle": "معلومات الاتصال المباشر",
      "contact.directDesc": "يسعدني دائمًا مناقشة المشاريع البرمجية الجديدة، تطبيقات الهاتف المتطورة، أو حلول الوسائط المتعددة الإبداعية.",
      "contact.emailLabel": "البريد الإلكتروني",
      "contact.phoneLabel": "رقم الهاتف المباشر",
      "contact.whatsappLabel": "واتساب مباشر ورمز QR",
      "contact.instantChat": "دردشة فورية",
      "contact.locationLabel": "الموقع والجامعة",
      "contact.locationVal": "مقديشو، الصومال (جامعة هرمود)",
      "contact.socialsLabel": "قنوات التواصل الرسمية:",
      "contact.formTitle": "إرسال رسالة مباشرة",
      "contact.nameLabel": "اسمك الكامل",
      "contact.namePlaceholder": "مثال: عبد الله محمود عبدي",
      "contact.emailFieldLabel": "بريدك الإلكتروني",
      "contact.emailPlaceholder": "مثال: abdullamaxmud39@gmail.com",
      "contact.subjectLabel": "الموضوع",
      "contact.subjectPlaceholder": "مطور ويب متكامل ومطور تطبيقات وصانع محتوى",
      "contact.messageLabel": "تفاصيل الرسالة",
      "contact.messagePlaceholder": "أنا مطور برمجيات متكامل ومصمم واجهات متخصص في بناء تطبيقات ويب عالية الأداء وبنى رقمية قابلة للتوسع وتصميم واجهات جذابة.",
      "contact.btnSend": "إرسال الرسالة",
      "contact.btnWhatsapp": "الدردشة عبر واتساب",
      "contact.disclaimer": "تصل رسالتك مباشرة إلى عبد الله محمود عبدي. ستتلقى الرد خلال 24 ساعة.",

      // Footer
      "footer.tagline": "بناء تطبيقات الويب الحديثة، وهندسة تطبيقات الهاتف القابلة للتوسع، وتصميم الواجهات الرقمية الجذابة.",
      "footer.status": "طالب سنة رابعة علوم حاسوب • جامعة هرمود",
      "footer.navHeading": "التنقل السريع",
      "footer.servicesHeading": "الخدمات",
      "footer.reachHeading": "الاتصال المباشر",
      "footer.location": "مقديشو، الصومال",
      "footer.rights": "جميع الحقوق محفوظة.",
      "footer.uniPortfolio": "بورتفوليو جامعة هرمود",
      "footer.backTop": "العودة للأعلى",

      // Floating
      "floating.whatsappTooltip": "دردش عبر واتساب",

      // Modal
      "modal.title": "تم تجهيز الرسالة!",
      "modal.desc": "شكراً لتواصلك، سيقوم عبد الله محمود عبدي بالرد عليك خلال 24 ساعة.",
      "modal.close": "إغلاق"
    }
  };

  // Dynamic typing text lists per language
  const TYPING_ROLES = {
    en: [
      "Creative Multimedia",
      "Full-Stack Developer",
      "UI/UX Designer",
      "Mobile App Developer",
      "Software Engineer"
    ],
    so: [
      "Hal-abuure Multimedia",
      "Hormariye Full-Stack",
      "Naqshadeeye UI/UX",
      "Hormariye Mobile Apps",
      "Injineer Software"
    ],
    ar: [
      "أخصائي وسائط متعددة",
      "مطور ويب متكامل",
      "مصمم واجهات المستخدم",
      "مطور تطبيقات الموبايل",
      "مهندس برمجيات"
    ]
  };

  // ========== STATE & DOM ELEMENTS ==========
  const htmlRoot = document.documentElement;
  const themeToggleBtn = document.getElementById('themeToggle');
  const langSwitcher = document.getElementById('langSwitcher');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langMenu = document.getElementById('langMenu');
  const currentFlag = document.getElementById('currentFlag');
  const currentLangLabel = document.getElementById('currentLangLabel');
  const langMenuItems = document.querySelectorAll('.lang-menu-item');

  // Typing animation state (declared early so setLanguage can safely call restartTypingAnimation)
  const typingElement = document.getElementById('typingText');
  let currentRoleIdx = 0;
  let currentCharIdx = 0;
  let isDeleting = false;
  let typingSpeed = 95;
  let typingTimeoutId = null;

  let currentLang = localStorage.getItem('abdallah_portfolio_lang') || 'en';
  if (!TRANSLATIONS[currentLang]) currentLang = 'en';

  // ========== LANGUAGE SWITCHING LOGIC ==========
  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('abdallah_portfolio_lang', lang);

    // Update HTML root lang and dir attributes (RTL for Arabic)
    htmlRoot.setAttribute('lang', lang);
    if (lang === 'ar') {
      htmlRoot.setAttribute('dir', 'rtl');
    } else {
      htmlRoot.setAttribute('dir', 'ltr');
    }

    // Update button visual
    if (currentFlag) currentFlag.src = FLAGS[lang] || FLAGS.en;
    if (currentLangLabel) currentLangLabel.textContent = lang.toUpperCase();

    // Update active dropdown item
    langMenuItems.forEach(item => {
      if (item.getAttribute('data-lang') === lang) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Translate all text elements with data-i18n (preserving child icons and badges)
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        // If element contains child elements (like icons or count badges), only update its first text node
        if (el.children.length === 0) {
          el.textContent = TRANSLATIONS[lang][key];
        } else {
          // Find text node inside or preserve structure
          let textNodeFound = false;
          for (let node of el.childNodes) {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
              node.nodeValue = " " + TRANSLATIONS[lang][key] + " ";
              textNodeFound = true;
              break;
            }
          }
          if (!textNodeFound) {
            el.textContent = TRANSLATIONS[lang][key];
          }
        }
      }
    });

    // Translate placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        el.setAttribute('placeholder', TRANSLATIONS[lang][key]);
      }
    });

    // Reset and restart typing text in the new language
    restartTypingAnimation();
  }

  // Language Dropdown open/close
  if (langToggleBtn && langMenu) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langMenu.classList.toggle('open');
      langToggleBtn.setAttribute('aria-expanded', isOpen);
    });

    langMenuItems.forEach(item => {
      item.addEventListener('click', () => {
        const selectedLang = item.getAttribute('data-lang');
        setLanguage(selectedLang);
        langMenu.classList.remove('open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (langSwitcher && !langSwitcher.contains(e.target)) {
        langMenu.classList.remove('open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Initial language application
  setLanguage(currentLang);

  // ========== THEME MANAGEMENT (DARK / LIGHT) ==========
  const savedTheme = localStorage.getItem('abdallah_portfolio_theme');
  if (savedTheme) {
    htmlRoot.setAttribute('data-theme', savedTheme);
  } else {
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    htmlRoot.setAttribute('data-theme', prefersLight ? 'light' : 'dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('abdallah_portfolio_theme', newTheme);
    });
  }

  // ========== STICKY NAVBAR & SCROLL SPY ==========
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('backToTop');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Sticky header blur & shadow
    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    // Active link highlighting
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ========== MOBILE HAMBURGER MENU ==========
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  function closeMobileMenu() {
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      if (hamburgerBtn) {
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
      document.body.classList.remove('menu-open');
    }
  }

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('active', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // ========== HERO DYNAMIC TYPING EFFECT (MULTI-LANGUAGE) ==========
  function typeRoleText() {
    if (!typingElement) return;

    const rolesList = TYPING_ROLES[currentLang] || TYPING_ROLES.en;
    const currentRole = rolesList[currentRoleIdx % rolesList.length];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, currentCharIdx - 1);
      currentCharIdx--;
      typingSpeed = 40;
    } else {
      typingElement.textContent = currentRole.substring(0, currentCharIdx + 1);
      currentCharIdx++;
      typingSpeed = 90;
    }

    if (!isDeleting && currentCharIdx === currentRole.length) {
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && currentCharIdx === 0) {
      isDeleting = false;
      currentRoleIdx = (currentRoleIdx + 1) % rolesList.length;
      typingSpeed = 350;
    }

    typingTimeoutId = setTimeout(typeRoleText, typingSpeed);
  }

  function restartTypingAnimation() {
    if (typingTimeoutId) clearTimeout(typingTimeoutId);
    currentCharIdx = 0;
    isDeleting = false;
    currentRoleIdx = 0;
    if (typingElement) typingElement.textContent = "";
    typeRoleText();
  }

  // ========== PROJECT CATEGORY FILTERING (MULTI-TOUCH & INSTANT) ==========
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  function applyProjectFilter(btn) {
    if (!btn) return;
    const filterValue = btn.getAttribute('data-filter');

    // Update active tab styling & aria state
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    // Instantly filter project cards
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filterValue === 'all' || category === filterValue) {
        card.style.display = 'flex';
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.transform = 'translateY(0)';
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
        card.style.visibility = 'hidden';
        card.style.transform = 'translateY(10px)';
      }
    });

    // Pause any playing inline videos when switching tabs
    document.querySelectorAll('.video-project-card .project-video-player').forEach(v => {
      if (!v.paused) {
        v.pause();
      }
    });

    // Reset carousel scroll to start on tab switch
    const track = document.getElementById('projectsTrack');
    if (track) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }

  // Bind click, pointerup, and touchend to ensure responsive touch on every device
  filterBtns.forEach(btn => {
    let touched = false;

    btn.addEventListener('touchend', (e) => {
      e.preventDefault();
      touched = true;
      applyProjectFilter(btn);
      setTimeout(() => { touched = false; }, 300);
    }, { passive: false });

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (touched) return; // Prevent double-trigger from touch emulation
      applyProjectFilter(btn);
    });
  });

  // Apply default filter on initial load for the active tab
  const initialActiveTab = document.querySelector('.filter-tab-btn.active');
  if (initialActiveTab) {
    applyProjectFilter(initialActiveTab);
  }

  // ========== PROJECTS CAROUSEL ARROW NAVIGATION ==========
  const projectsTrack = document.getElementById('projectsTrack');
  const projPrevBtn = document.getElementById('projectsPrevBtn');
  const projNextBtn = document.getElementById('projectsNextBtn');

  if (projectsTrack && projPrevBtn && projNextBtn) {
    projPrevBtn.addEventListener('click', () => {
      const activeCard = projectsTrack.querySelector('.project-card:not([style*="display: none"])');
      const step = activeCard ? activeCard.offsetWidth + 24 : 340;
      projectsTrack.scrollBy({ left: -step, behavior: 'smooth' });
    });

    projNextBtn.addEventListener('click', () => {
      const activeCard = projectsTrack.querySelector('.project-card:not([style*="display: none"])');
      const step = activeCard ? activeCard.offsetWidth + 24 : 340;
      projectsTrack.scrollBy({ left: step, behavior: 'smooth' });
    });
  }

  // ========== WHATSAPP & CONTACT FORM HANDLING ==========
  const contactForm = document.getElementById('portfolioContactForm');
  const btnWhatsappDirect = document.getElementById('btnWhatsappDirect');
  const confirmationModal = document.getElementById('confirmationModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');

  function getFormattedInquiry() {
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const subject = subjectInput ? subjectInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    let greeting = "Hello Abdallah Mohamud Abdi, I would like to discuss a project.";
    let labelName = "👤 Name";
    let labelEmail = "📧 Email";
    let labelSubject = "📌 Subject";
    let labelMsg = "💬 Message";

    if (currentLang === 'so') {
      greeting = "Salaan Abdallah Mohamud Abdi, waxaan jeclaan lahaa inaan mashruuc ka wadahadalno.";
      labelName = "👤 Magaca";
      labelEmail = "📧 Email";
      labelSubject = "📌 Mowduuca";
      labelMsg = "💬 Farriinta";
    } else if (currentLang === 'ar') {
      greeting = "مرحباً عبد الله محمود عبدي، أود مناقشة مشروع معك.";
      labelName = "👤 الاسم";
      labelEmail = "📧 البريد";
      labelSubject = "📌 الموضوع";
      labelMsg = "💬 الرسالة";
    }

    const fullMessage =
`${greeting}

${labelName}: ${name || "Abdallah Mohamud"}
${labelEmail}: ${email || "abdullamaxmud39@gmail.com"}
${labelSubject}: ${subject || "Full-Stack / Mobile App Inquiry"}

${labelMsg}:
${message || "Looking forward to collaborating with you!"}`;

    return { name, email, subject, message, fullMessage };
  }

  // Direct WhatsApp Button Trigger
  if (btnWhatsappDirect) {
    btnWhatsappDirect.addEventListener('click', () => {
      const { fullMessage } = getFormattedInquiry();
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const messageInput = document.getElementById('contactMessage');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        const alertMsg = currentLang === 'so' 
          ? "Fadlan buuxi magacaaga, email-kaaga, iyo farriintaada."
          : (currentLang === 'ar' ? "يرجى تعبئة الاسم والبريد الإلكتروني وتفاصيل الرسالة." : "Please fill in your name, email, and message.");
        alert(alertMsg);
        return;
      }

      // Show confirmation modal
      if (modalTitle && modalDescription && confirmationModal) {
        if (currentLang === 'so') {
          modalTitle.textContent = "Farriintu Way Diyaar Tahay!";
          modalDescription.textContent = "Waad ku mahadsan tahay xiriirkaaga " + nameInput.value.trim() + ". Abdallah Mohamud Abdi wuxuu kugu soo jawaabi doonaa 24 saac gudahood.";
        } else if (currentLang === 'ar') {
          modalTitle.textContent = "تم تجهيز الرسالة!";
          modalDescription.textContent = "شكراً لتواصلك يا " + nameInput.value.trim() + ". سيقوم عبد الله محمود عبدي بالرد عليك خلال 24 ساعة.";
        } else {
          modalTitle.textContent = "Message Prepared, " + nameInput.value.trim() + "!";
          modalDescription.textContent = "Thank you for reaching out. Abdallah Mohamud Abdi will reply via " + emailInput.value.trim() + " within 24 hours.";
        }
        confirmationModal.classList.add('active');
        confirmationModal.setAttribute('aria-hidden', 'false');
      }

      // Automatically forward to WhatsApp with message after a short delay
      setTimeout(() => {
        const { fullMessage } = getFormattedInquiry();
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 1500);

      contactForm.reset();
    });
  }

  // Modal Close
  if (modalCloseBtn && confirmationModal) {
    modalCloseBtn.addEventListener('click', () => {
      confirmationModal.classList.remove('active');
      confirmationModal.setAttribute('aria-hidden', 'true');
    });

    confirmationModal.addEventListener('click', (e) => {
      if (e.target === confirmationModal) {
        confirmationModal.classList.remove('active');
        confirmationModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // ========== CERTIFICATE LIGHTBOX MODAL ==========
  const certModal = document.getElementById('certLightboxModal');
  const certModalImg = document.getElementById('certModalImg');
  const certModalTitle = document.getElementById('certModalTitle');
  const certModalDownload = document.getElementById('certModalDownload');
  const certModalClose = document.getElementById('certModalClose');

  window.openCertModal = function(imageSrc, title, pdfSrc) {
    if (!certModal) return;
    if (certModalImg) {
      certModalImg.src = imageSrc;
      certModalImg.alt = title;
    }
    if (certModalTitle) certModalTitle.textContent = title;
    if (certModalDownload && pdfSrc) {
      certModalDownload.href = pdfSrc;
      certModalDownload.setAttribute('download', pdfSrc.split('/').pop());
    }
    certModal.classList.add('active');
    certModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  window.closeCertModal = function() {
    if (!certModal) return;
    certModal.classList.remove('active');
    certModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (certModalClose) {
    certModalClose.addEventListener('click', window.closeCertModal);
  }

  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal || e.target.classList.contains('cert-modal-backdrop')) {
        window.closeCertModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal && certModal.classList.contains('active')) {
      window.closeCertModal();
    }
  });

  // ========== VIDEO LIGHTBOX MODAL & VIDEO CONTROLS ==========
  const videoModal = document.getElementById('videoLightboxModal');
  const lightboxVideoPlayer = document.getElementById('lightboxVideoPlayer');
  const videoModalTitle = document.getElementById('videoModalTitle');
  const videoModalClose = document.getElementById('videoModalClose');

  window.openVideoModal = function(videoSrc, title) {
    if (!videoModal || !lightboxVideoPlayer) return;
    // Pause any inline videos before opening lightbox
    document.querySelectorAll('.video-project-card .project-video-player').forEach(v => {
      if (!v.paused) v.pause();
    });

    lightboxVideoPlayer.src = videoSrc;
    if (videoModalTitle) videoModalTitle.textContent = title || "Video Showcase";
    videoModal.classList.add('active');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxVideoPlayer.play().catch(() => {});
  };

  window.closeVideoModal = function() {
    if (!videoModal) return;
    if (lightboxVideoPlayer) {
      lightboxVideoPlayer.pause();
      lightboxVideoPlayer.currentTime = 0;
      lightboxVideoPlayer.removeAttribute('src');
      lightboxVideoPlayer.load();
    }
    videoModal.classList.remove('active');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (videoModalClose) {
    videoModalClose.addEventListener('click', window.closeVideoModal);
  }

  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal || e.target.classList.contains('cert-modal-backdrop')) {
        window.closeVideoModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
      window.closeVideoModal();
    }
  });

  // Wire buttons that trigger the video lightbox modal
  document.querySelectorAll('.btn-trigger-video').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const src = btn.getAttribute('data-video-src');
      const title = btn.getAttribute('data-video-title');
      if (src) {
        window.openVideoModal(src, title);
      }
    });
  });

  // Pause other videos when one starts playing
  const allInlineVideos = document.querySelectorAll('.video-project-card .project-video-player');
  allInlineVideos.forEach((video) => {
    video.addEventListener('play', () => {
      allInlineVideos.forEach((otherVideo) => {
        if (otherVideo !== video && !otherVideo.paused) {
          otherVideo.pause();
        }
      });
    });
  });

  // ========== CERTIFICATE TOGGLE (SHOW 2 / VIEW ALL) ==========
  const btnToggleCerts = document.getElementById('btnToggleCerts');
  const btnToggleCertsText = document.getElementById('btnToggleCertsText');
  const btnToggleCertsIcon = document.getElementById('btnToggleCertsIcon');
  const extraCertCards = document.querySelectorAll('.cert-extra-hidden');

  if (btnToggleCerts) {
    btnToggleCerts.addEventListener('click', () => {
      const isExpanded = btnToggleCerts.getAttribute('aria-expanded') === 'true';
      const nextExpanded = !isExpanded;
      btnToggleCerts.setAttribute('aria-expanded', String(nextExpanded));

      extraCertCards.forEach(card => {
        if (nextExpanded) {
          card.classList.add('is-revealed');
        } else {
          card.classList.remove('is-revealed');
        }
      });

      if (btnToggleCertsText) {
        if (nextExpanded) {
          btnToggleCertsText.setAttribute('data-i18n', 'certificates.btnShowLess');
          const lessText = (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang]["certificates.btnShowLess"]) || "Show Less";
          btnToggleCertsText.textContent = lessText;
        } else {
          btnToggleCertsText.setAttribute('data-i18n', 'certificates.btnViewAll');
          const allText = (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang]["certificates.btnViewAll"]) || "View All Certificates (4)";
          btnToggleCertsText.textContent = allText;
        }
      }

      if (btnToggleCertsIcon) {
        if (nextExpanded) {
          btnToggleCertsIcon.classList.remove('fa-chevron-down');
          btnToggleCertsIcon.classList.add('fa-chevron-up');
        } else {
          btnToggleCertsIcon.classList.remove('fa-chevron-up');
          btnToggleCertsIcon.classList.add('fa-chevron-down');
        }
      }
    });
  }

  // ========== LIVE YEAR UPDATE ==========
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear() || "2026";
  }

});
