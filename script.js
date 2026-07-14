/* 
   ==========================================================================
   Portfolio Logic & Interaction - Abdalla Mohamud
   ========================================================================== 
*/

// Multi-language translation database
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        
        hero_greeting: "Welcome to my space",
        hero_name_prefix: "Hi, I am ",
        hero_name: "Abdalla Mohamud",
        hero_desc: "A creative full-stack developer and graphic designer. I bridge the gap between robust backend structures and visually captivating frontend experiences.",
        btn_hire: "Hire Me",
        btn_work: "View Work",
        
        floating_exp_title: "Full-Stack Dev",
        floating_exp_sub: "Web applications",
        floating_proj_title: "Graphic Designer",
        floating_proj_sub: "Branding & layouts",
        
        about_subtitle: "My Story",
        about_title: "About Me",
        about_intro: "I am a multi-disciplinary professional specializing in both technical and creative directions.",
        about_p1: "With a strong foundation in full-stack web development, I love constructing scalable, modern web systems. I am passionate about clean architectures and optimal databases, writing clean code using React, Node.js, and modern styling systems.",
        about_p2: "Simultaneously, my graphic design expertise enables me to construct unique visual identities, branding layouts, and vector illustrations. I believe functional code should always be wrapped in visually stunning aesthetics.",
        
        lang_headline: "Languages I Speak",
        lang_somali: "Somali",
        lang_somali_level: "Native Speaker",
        lang_arabic: "Arabic",
        lang_arabic_level: "Fluent Speaker",
        lang_english: "English",
        lang_english_level: "Professional Proficiency",
        
        card_experience_title: "Modern Tech",
        card_experience_desc: "Utilizing modern web stacks to build robust apps.",
        card_projects_title: "Graphic Arts",
        card_projects_desc: "Polished designs, typography, and vectors.",
        card_support_title: "High Support",
        card_support_desc: "Active communication and delivery speed.",
        card_design_title: "Responsive UI",
        card_design_desc: "Interfaces that display perfectly on any screen.",
        
        skills_subtitle: "My Expertise",
        skills_title: "Skills & Technologies",
        tab_development: "Development",
        tab_design: "Design",
        
        skill_level_expert: "Expert",
        skill_level_advanced: "Advanced",
        skill_level_intermediate: "Intermediate",
        
        projects_subtitle: "Recent Work",
        projects_title: "Featured Projects",
        filter_all: "All Work",
        filter_web: "Web Development",
        filter_design: "Graphic Design",
        
        proj_tag_web: "Web App",
        proj_tag_design: "Graphic / Branding",
        
        proj1_title: "Modern E-Commerce Portal",
        proj1_desc: "A fully responsive online shopping application built with React, featuring animated product grids and dark mode.",
        proj2_title: "Vector Logo Branding",
        proj2_desc: "A premium corporate visual identity suite featuring vector patterns, color palettes, and print mockups.",
        proj3_title: "Task Scheduler dashboard",
        proj3_desc: "A clean productivity platform with drag-and-drop mechanics, interactive charts, and Node.js server.",
        proj4_title: "Sleek Editorial Layout",
        proj4_desc: "A premium graphic editorial layout containing customized grids, vector illustrations, and typographic hierarchies.",
        proj5_title: "Interactive Weather Hub",
        proj5_desc: "A dynamic weather client utilizing third-party REST APIs, featuring custom weather graphics and animations.",
        proj6_title: "Minimalist Identity Design",
        proj6_desc: "Minimalist corporate business cards and stationery designs using geometric vectors and custom typography.",
        
        contact_subtitle: "Get In Touch",
        contact_title: "Let's Connect",
        contact_headline: "Have a project in mind or just want to chat?",
        contact_subtext: "Feel free to reach out through my direct links or use the message form. I'm always open to discussing new opportunities.",
        
        social_wa_user: "WhatsApp Chat",
        social_fb_user: "Facebook Profile",
        social_ig_user: "@zulthanabdalla",
        social_sc_user: "Snapchat Add",
        social_gh_user: "GitHub Profile",
        social_ph_user: "+252 61 3496697",
        
        form_placeholder_name: "Your Name",
        form_placeholder_email: "Your Email",
        form_placeholder_subject: "Subject",
        form_placeholder_message: "Your Message",
        
        form_label_name: "Name",
        form_label_email: "Email",
        form_label_subject: "Subject",
        form_label_message: "Message",
        
        btn_send: "Send Message",
        
        modal_title: "Message Sent!",
        modal_text: "Thank you for reaching out, Abdalla will respond to you as soon as possible.",
        modal_btn_close: "Close"
    },
    so: {
        nav_home: "Hoyga",
        nav_about: "Nagu Saabsan",
        nav_skills: "Xirfadaha",
        nav_projects: "Mashaariicda",
        nav_contact: "La Xiriir",
        
        hero_greeting: "Ku soo dhowow booskayga",
        hero_name_prefix: "Haye, Waxaan ahay ",
        hero_name: "Abdalla Mohamud",
        hero_desc: "Hore-iyo-Gadaal soo-saare mareegaha iyo naqshadeeye garaafikada. Waxaan isku xiraa qaab-dhismeedka adag ee dhabarka iyo khibradaha naqshadeynta ee hore.",
        btn_hire: "Ila Xiriir",
        btn_work: "Eeg Shaqada",
        
        floating_exp_title: "Hore & Gadaal Dev",
        floating_exp_sub: "Soo-saarka Mareegaha",
        floating_proj_title: "Naqshadeeye",
        floating_proj_sub: "Habaynta & Garaafikada",
        
        about_subtitle: "Taariikhdayda",
        about_title: "Nagu Saabsan",
        about_intro: "Waxaan ahay xirfadle dhinacyo badan ku taqasusay oo diiradda saara dhinacyada farsamada iyo hal-abuurka.",
        about_p1: "Anigoo leh aasaas adag oo ku saabsan horumarinta mareegaha, waxaan jecelahay dhisidda nidaamyo mareegyo oo casri ah oo ballaaran kara. Waxaan aad u xiiseeyaa qaab-dhismeedka nadiifka ah iyo xog-ururinta ugu habboon, anigoo adeegsanaya React, Node.js, iyo nidaamyada casriga ah ee naqshadaynta.",
        about_p2: "Isla mar ahaantaana, khibraddayda naqshadeynta garaafikada waxay ii saamaxaysaa inaan abuuro aqoonsiyo muuqaal ah oo gaar ah, qaabaynta summada, iyo sawirrada vector-ka. Waxaan aaminsanahay in koodhka shaqaynaya mar walba lagu duubo bilic aad u qurux badan.",
        
        lang_headline: "Luuqadaha aan Ku Hadlo",
        lang_somali: "Soomaali",
        lang_somali_level: "Af-Hooyo",
        lang_arabic: "Carabi",
        lang_arabic_level: "Aad u Fiican",
        lang_english: "Ingiriis",
        lang_english_level: "Aqoonta Xirfadeed",
        
        card_experience_title: "Teknoolojiyad Casri ah",
        card_experience_desc: "Adeegsiga agabka casriga ah si loo dhiso mareegaha ugu fiican.",
        card_projects_title: "Naqshadaynta Garaafikada",
        card_projects_desc: "Naqshado heersare ah, habaynta qoraalka, iyo vector-ka.",
        card_support_title: "Taageero Sare",
        card_support_desc: "Wada-xiriir firfircoon iyo gaarsiinta shaqada oo degdeg ah.",
        card_design_title: "Shaashad Kasta Ku Habboon",
        card_design_desc: "Interface-yo si fiican ugu soo bandhiga shaashad kasta.",
        
        skills_subtitle: "Xirfadahayga",
        skills_title: "Xirfadaha & Teknoolojiyada",
        tab_development: "Horumarinta",
        tab_design: "Naqshadaynta",
        
        skill_level_expert: "Heer Sare",
        skill_level_advanced: "Aad u Fiican",
        skill_level_intermediate: "Dhexdhexaad",
        
        projects_subtitle: "Shaqooyinkii Ugu Dambeeyay",
        projects_title: "Mashaariicda La Doortay",
        filter_all: "Dhammaan",
        filter_web: "Horumarinta Mareegaha",
        filter_design: "Naqshadaynta Garaafikada",
        
        proj_tag_web: "Mareeg App",
        proj_tag_design: "Garaafik / Summadayn",
        
        proj1_title: "Suuq Online oo Casri ah",
        proj1_desc: "Codsiga dukaamaysiga internetka oo si buuxda u jawaabaya oo lagu dhisay React, oo leh alaabooyin dhaqaaqa iyo habka habeenkii.",
        proj2_title: "Summadaynta Logo Vector",
        proj2_desc: "Aqoonsi muuqaal shirkadeed oo heersare ah oo ay ku jiraan qaabab vector ah, palettes midab, iyo naqshado daabacan.",
        proj3_title: "Dashboard Qorshaynta Hawlaha",
        proj3_desc: "Madal waxsoosaar nadiif ah oo leh farsamooyinka jiidista, jaantusyo isdhexgal ah, iyo server-ka Node.js.",
        proj4_title: "Habaynta Majaladda oo Qurux Badan",
        proj4_desc: "Naqshadaynta garaafikada oo leh shabaqyo gaar ah, sawirro vector ah, iyo kala-sarreynta qoraalka.",
        proj5_title: "Codsiga Cimilada ee Isdhexgalka ah",
        proj5_desc: "Macmiil cimilo firfircoon oo adeegsanaya API-yada dibadda, oo leh sawirro cimilo iyo animations gaar ah.",
        proj6_title: "Naqshadaynta Aqoonsiga Fudud",
        proj6_desc: "Kaararka ganacsiga shirkadda oo fudud iyo naqshadaynta qalabka xafiiska iyadoo la adeegsanayo vector joomatari.",
        
        contact_subtitle: "Ila Soo Xiriir",
        contact_title: "Aynu Xiriirno",
        contact_headline: "Ma haysaa mashruuc aad ka fekereyso mise kaliya waxaad rabtaa inaad sheekaysato?",
        contact_subtext: "Xor u noqo inaad nagula soo xiriirto xiriiriyeyaashayada tooska ah ama isticmaal foomka fariinta. Had iyo jeer waxaan u furanahay ka doodista fursadaha cusub.",
        
        social_wa_user: "Kala hadal WhatsApp",
        social_fb_user: "Profile-ka Facebook",
        social_ig_user: "@zulthanabdalla",
        social_sc_user: "Ku dar Snapchat",
        social_gh_user: "Profile-ka GitHub",
        social_ph_user: "+252 61 3496697",
        
        form_placeholder_name: "Magacaaga",
        form_placeholder_email: "Emailkaaga",
        form_placeholder_subject: "Mawduuca",
        form_placeholder_message: "Fariintaada",
        
        form_label_name: "Magaca",
        form_label_email: "Emailka",
        form_label_subject: "Mawduuca",
        form_label_message: "Fariinta",
        
        btn_send: "Dir Fariinta",
        
        modal_title: "Fariintii Waa La Diray!",
        modal_text: "Waad ku mahadsan tahay xiriirkaaga, Cabdalla wuxuu kugu soo jawaabi doonaa sida ugu dhaqsiyaha badan.",
        modal_btn_close: "Xidh"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من أنا",
        nav_skills: "المهارات",
        nav_projects: "المشاريع",
        nav_contact: "اتصل بي",
        
        hero_greeting: "مرحباً بك في عالمي الخاص",
        hero_name_prefix: "أهلاً، أنا ",
        hero_name: "عبد الله محمود",
        hero_desc: "مطور ويب متكامل ومصمم جرافيك محترف. أقوم بالربط بين البنيات البرمجية القوية وتجارب المستخدم الرائعة والجذابة بصرياً.",
        btn_hire: "وظفني",
        btn_work: "عرض أعمالي",
        
        floating_exp_title: "مطور ويب متكامل",
        floating_exp_sub: "تطبيقات ومواقع الويب",
        floating_proj_title: "مصمم جرافيك",
        floating_proj_sub: "الهويات البصرية والتخطيط",
        
        about_subtitle: "قصتي",
        about_title: "من أنا",
        about_intro: "أنا محترف متعدد التخصصات أجمع بين الاتجاهات التقنية والإبداعية.",
        about_p1: "بفضل خلفيتي القوية في تطوير الويب الشامل، أحب بناء أنظمة ويب حديثة وقابلة للتوسع. لدي شغف بالبنيات البرمجية النظيفة وقواعد البيانات المثالية، وأكتب كوداً برمجياً أنيقاً باستخدام React و Node.js وأنظمة التنسيق الحديثة.",
        about_p2: "في الوقت نفسه، تتيح لي خبرتي في تصميم الجرافيك بناء هويات بصرية فريدة، وتنسيقات العلامات التجارية، ورسومات المتجهات الفنية (Vector). أؤمن بأن الكود الفعال يجب أن يكون دائماً مغلفاً بجماليات بصرية مذهلة.",
        
        lang_headline: "اللغات التي أتحدثها",
        lang_somali: "الصومالية",
        lang_somali_level: "اللغة الأم",
        lang_arabic: "العربية",
        lang_arabic_level: "متحدث بطلاقة",
        lang_english: "الإنجليزية",
        lang_english_level: "كفاءة مهنية ممتازة",
        
        card_experience_title: "تقنيات حديثة",
        card_experience_desc: "استخدام أحدث تقنيات الويب لبناء تطبيقات قوية وسريعة.",
        card_projects_title: "الفنون البصرية",
        card_projects_desc: "تصاميم مصقولة، تنسيق خطوط متطور، ورسومات فيكتور.",
        card_support_title: "دعم متميز",
        card_support_desc: "تواصل فعال ومستمر مع سرعة والتزام في تسليم المشاريع.",
        card_design_title: "واجهات متجاوبة",
        card_design_desc: "واجهات مستخدم مذهلة تتكيف وتعمل بامتياز على جميع الشاشات.",
        
        skills_subtitle: "مجال خبرتي",
        skills_title: "المهارات والتقنيات",
        tab_development: "التطوير والبرمجة",
        tab_design: "التصميم الإبداعي",
        
        skill_level_expert: "خبير",
        skill_level_advanced: "متقدم",
        skill_level_intermediate: "متوسط",
        
        projects_subtitle: "أحدث الأعمال",
        projects_title: "مشاريع مميزة",
        filter_all: "جميع الأعمال",
        filter_web: "تطوير الويب",
        filter_design: "تصميم الجرافيك",
        
        proj_tag_web: "تطبيق ويب",
        proj_tag_design: "جرافيك وعلامات تجارية",
        
        proj1_title: "بوابة تجارة إلكترونية حديثة",
        proj1_desc: "تطبيق تسوق إلكتروني متجاوب بالكامل تم بناؤه باستخدام React، ويتميز بشبكات منتجات متحركة ووضع ليلي.",
        proj2_title: "هوية بصرية ورسومات متجهة",
        proj2_desc: "مجموعة هوية بصرية متميزة للشركات تتضمن أنماط فيكتور، لوحات ألوان، ونماذج مطبوعات واقعية.",
        proj3_title: "لوحة تحكم لجدولة المهام",
        proj3_desc: "منصة إنتاجية ممتازة مع ميكانيكا السحب والإفلات، ورسوم بيانية تفاعلية، وخادم Node.js.",
        proj4_title: "تنسيق مجلة مطبوعة فاخر",
        proj4_desc: "تصميم مجلة تخطيطية متميز يحتوي على شبكات مخصصة ورسومات متجهة وتسلسلات هرمية للخطوط.",
        proj5_title: "تطبيق الطقس التفاعلي",
        proj5_desc: "عميل طقس ديناميكي يستخدم واجهات برمجة تطبيقات REST الخارجية، مع رسومات متحركة مخصصة.",
        proj6_title: "تصميم هويات شركات مبسط",
        proj6_desc: "بطاقات عمل ومستندات شركات مبسطة وأنيقة باستخدام أشكال هندسية متجهة وتنسيق خطوط مخصص.",
        
        contact_subtitle: "تواصل معي",
        contact_title: "لنبدأ الحوار",
        contact_headline: "هل لديك فكرة مشروع أو ترغب في مناقشة عمل؟",
        contact_subtext: "لا تتردد في الاتصال بي مباشرة عبر الروابط المتاحة أو ملء نموذج الرسائل. أنا متوفر ومستعد دائماً لاستكشاف فرص جديدة.",
        
        social_wa_user: "دردشة واتساب",
        social_fb_user: "حساب فيسبوك",
        social_ig_user: "@zulthanabdalla",
        social_sc_user: "إضافة سناب شات",
        social_gh_user: "الملف الشخصي على GitHub",
        social_ph_user: "+252 61 3496697",
        
        form_placeholder_name: "اسمك الكريم",
        form_placeholder_email: "بريدك الإلكتروني",
        form_placeholder_subject: "الموضوع",
        form_placeholder_message: "نص الرسالة",
        
        form_label_name: "الاسم",
        form_label_email: "البريد الإلكتروني",
        form_label_subject: "الموضوع",
        form_label_message: "الرسالة",
        
        btn_send: "إرسال الرسالة",
        
        modal_title: "تم الإرسال بنجاح!",
        modal_text: "شكرًا لتواصلك معي، سيرد عليك عبد الله في أقرب وقت ممكن.",
        modal_btn_close: "إغلاق"
    }
};

// Words for the dynamic typing animation by language
const typingWords = {
    en: ["Full-Stack Web Developer", "Graphic Designer", "Creative Thinker"],
    so: ["Horumariyaha Mareegaha", "Naqshadeeyaha Garaafikada", "Fikir Kiciye"],
    ar: ["مطور ويب متكامل", "مصمم جرافيك محترف", "مفكر مبدع"]
};

// Global state variables
let currentLang = localStorage.getItem('portfolio_lang') || 'en';
let currentTheme = localStorage.getItem('portfolio_theme') || 'dark';

// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');
const langOpts = document.querySelectorAll('.lang-opt');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillTabBtns = document.querySelectorAll('.tab-btn');
const skillsPanes = document.querySelectorAll('.skills-pane');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contact-form');
const modalOverlay = document.getElementById('modal-overlay');
const modalCloseBtn = document.getElementById('modal-close-btn');

// ==========================================================================
// Theme Toggling Logic
// ==========================================================================
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('portfolio_theme', currentTheme);
}

// ==========================================================================
// Language Switching Logic
// ==========================================================================
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    
    // Set html attributes
    document.documentElement.setAttribute('lang', lang);
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
    
    // Update active state in dropdown UI
    langOpts.forEach(opt => {
        if (opt.getAttribute('data-lang') === lang) {
            opt.classList.add('active');
            // Update button label
            langBtn.innerHTML = `<i class="fas fa-globe"></i> <span>${opt.textContent.trim()}</span>`;
        } else {
            opt.classList.remove('active');
        }
    });

    // Translate page content
    const translateElements = document.querySelectorAll('[data-translate]');
    translateElements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Translate inputs/placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Restart typing animation with new language words
    resetTypingAnimation();
    
    // Re-trigger language progress bars animation
    animateLangBars();
}

// Animate Language Progress Bars when scrolled to About
function animateLangBars() {
    const progressBars = document.querySelectorAll('.lang-progress');
    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = '0%'; // Reset first
        setTimeout(() => {
            bar.style.width = targetWidth; // Animate
        }, 100);
    });
}

// ==========================================================================
// Multi-lingual Typing Animation System
// ==========================================================================
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout = null;
const typingElement = document.getElementById('typing-text');

function handleTyping() {
    const words = typingWords[currentLang] || typingWords['en'];
    const currentWord = words[typingIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = 100; // Normal typing speed
    
    if (isDeleting) {
        delay /= 2; // Deleting speed
    }

    if (!isDeleting && charIndex === currentWord.length) {
        delay = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingIndex = (typingIndex + 1) % words.length;
        delay = 500; // Pause before starting next word
    }

    typingTimeout = setTimeout(handleTyping, delay);
}

function resetTypingAnimation() {
    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }
    typingIndex = 0;
    charIndex = 0;
    isDeleting = false;
    if (typingElement) {
        handleTyping();
    }
}

// ==========================================================================
// Skills Tab Panels Toggling
// ==========================================================================
skillTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Toggle tab button active classes
        skillTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Switch tab contents
        const targetTab = btn.getAttribute('data-tab');
        skillsPanes.forEach(pane => {
            if (pane.id === targetTab) {
                pane.classList.add('active');
            } else {
                pane.classList.remove('active');
            }
        });
    });
});

// ==========================================================================
// Project Cards Category Filtering
// ==========================================================================
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Toggle filter button active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'flex';
                // Trigger tiny fade in animation
                card.style.animation = 'none';
                card.offsetHeight; // Trigger reflow
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ==========================================================================
// Scroll Reveal Observer
// ==========================================================================
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Special trigger: language progress bars load animation
            if (entry.target.id === 'about') {
                animateLangBars();
            }
            
            // Unobserve once loaded to improve performance
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));
}

// Active Nav Link highlight on Scroll
const sectionElements = document.querySelectorAll('section[id]');
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, {
    threshold: 0.5,
    rootMargin: "-80px 0px 0px 0px"
});

sectionElements.forEach(section => navObserver.observe(section));

// ==========================================================================
// Contact Form & Modals
// ==========================================================================
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Retrieve values
        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const subject = document.getElementById('form-subject').value.trim();
        const message = document.getElementById('form-message').value.trim();
        
        // Simple client validations
        if (!name || !email || !subject || !message) {
            return;
        }
        
        // Open Success popup dialog
        modalOverlay.classList.add('show');
        
        // Clear the fields
        contactForm.reset();
        
        // Un-float floating labels by clearing input focus class
        const inputs = contactForm.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.blur();
        });
    });
}

if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('show');
    });
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('show');
        }
    });
}

// ==========================================================================
// Mobile Nav Menu Toggling
// ==========================================================================
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
}

// Close mobile menu when nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-bars';
        }
    });
});

// Dropdown Language Selector Toggle
if (langBtn) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });
}

document.addEventListener('click', () => {
    if (langDropdown) {
        langDropdown.classList.remove('show');
    }
});

langOpts.forEach(opt => {
    opt.addEventListener('click', () => {
        const lang = opt.getAttribute('data-lang');
        changeLanguage(lang);
        langDropdown.classList.remove('show');
    });
});

// ==========================================================================
// Initialization
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    changeLanguage(currentLang);
    initScrollReveal();
    
    // Add event listener to theme switcher button
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
});
