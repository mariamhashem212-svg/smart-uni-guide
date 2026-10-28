/* =========================================
   UniMate AI
   الأقسام + الفيديوهات + اختبار الميول
========================================= */

/* 1. بيانات الأقسام السبعة */

const departments = [
  {
    id: "computer-ar",
    title: "إعداد معلم الحاسب الآلي (عربي)",
    icon: "💻",
    short: "البرمجة وقواعد البيانات والشبكات وتكنولوجيا المعلومات.",
    description:
      "يجمع القسم بين علوم الحاسب والعلوم التربوية، بهدف إعداد خريج يستطيع فهم التكنولوجيا وتوظيفها في التعليم والعمل التقني.",
    subjects: [
      "أساسيات البرمجة ولغات مثل Python وJava وC++.",
      "هياكل البيانات والخوارزميات وتحليل النظم.",
      "قواعد البيانات وSQL وتطوير مواقع الويب.",
      "شبكات الحاسب ونظم التشغيل وأساسيات الأمن السيبراني.",
      "تصميم البرمجيات والوسائط المتعددة التعليمية.",
      "طرق تدريس الحاسب وعلم النفس التربوي والقياس والتقويم."
    ],
    goals: [
      "تنمية التفكير المنطقي وحل المشكلات.",
      "إكساب الطلاب مهارات برمجية وتطبيقية.",
      "توظيف التكنولوجيا في البيئات التعليمية."
    ],
    careers: [
      "معلم حاسب آلي وتكنولوجيا معلومات.",
      "مطور مواقع أو برمجيات وفق المهارات المكتسبة.",
      "دعم فني ومساندة تقنية.",
      "مصمم وسائط متعددة ومحتوى تعليمي رقمي."
    ],
    video: "https://drive.google.com/uc?export=view&id=1cJV-uLAOugdFXcpI7Iv3ayJcN7YEL6EH"
  },

  {
    id: "computer-en",
    title: "إعداد معلم الحاسب الآلي (إنجليزي)",
    icon: "🌐",
    short: "الحاسب الآلي وتكنولوجيا التعليم باللغة الإنجليزية.",
    description:
      "يركز البرنامج المتميز على علوم الحاسب وتكنولوجيا التعليم، مع الاهتمام باللغة الإنجليزية والمصطلحات والمراجع التقنية.",
    subjects: [
      "البرمجة وحل المشكلات.",
      "قواعد البيانات والشبكات ونظم التشغيل.",
      "تطوير المواقع والبرمجيات.",
      "تكنولوجيا التعليم وتصميم الوسائط الرقمية.",
      "المصطلحات التقنية والتواصل باللغة الإنجليزية."
    ],
    goals: [
      "تنمية الكفاءة التقنية واللغوية.",
      "التعامل مع المراجع والأدوات التقنية باللغة الإنجليزية.",
      "إعداد خريجين قادرين على تطوير مهاراتهم باستمرار."
    ],
    careers: [
      "التدريس في مدارس اللغات وفق شروط التوظيف.",
      "تطوير المواقع والبرمجيات.",
      "الدعم التقني والعمل في الشركات.",
      "العمل الحر عن بُعد وفق المهارات المطلوبة."
    ],
    video: "https://drive.google.com/uc?export=view&id=1zILndFALoWLL5Avo3vJ7KeCCj5g7RQ2e"
  },

  {
    id: "e-learning",
    title: "أخصائي التعلم الإلكتروني",
    icon: "🧠",
    short: "تصميم المحتوى التعليمي والمنصات الرقمية والتعلم عن بُعد.",
    description:
      "يهتم القسم بتوظيف التكنولوجيا في تطوير العملية التعليمية، وتصميم تجارب تعلم رقمية وتفاعلية تناسب احتياجات المتعلمين.",
    subjects: [
      "تصميم وإنتاج المقررات الإلكترونية.",
      "الوسائط المتعددة التعليمية.",
      "بيئات التعلم الافتراضية والتعلم المدمج.",
      "نظم إدارة التعلم LMS مثل Moodle.",
      "تصميم الأنشطة والاختبارات الإلكترونية.",
      "توظيف تقنيات الويب والذكاء الاصطناعي في التعليم."
    ],
    goals: [
      "تحويل المحتوى التقليدي إلى محتوى رقمي تفاعلي.",
      "تطوير مهارات التصميم التعليمي.",
      "إدارة بيئات التعلم الإلكترونية."
    ],
    careers: [
      "أخصائي تعلم إلكتروني.",
      "مصمم تعليمي Instructional Designer.",
      "منتج محتوى تعليمي رقمي.",
      "دعم وإدارة منصات التعلم LMS."
    ],
    video: "https://drive.google.com/uc?export=view&id=1CWAAad46_57yRVnNSmDtA2zPD0ytbmjS"
  },

  {
    id: "home-economics",
    title: "الاقتصاد المنزلي",
    icon: "🥗",
    short: "التغذية وعلوم الأطعمة والملابس وإدارة موارد الأسرة.",
    description:
      "يجمع القسم بين الجوانب العملية والعلمية المتعلقة بالغذاء والملابس والنسيج وإدارة موارد الأسرة والصحة العامة.",
    subjects: [
      "التغذية وعلوم الأطعمة.",
      "أساسيات سلامة الغذاء وجودته.",
      "الملابس والنسيج وتصميم الأزياء.",
      "إدارة شؤون الأسرة والمسكن.",
      "الأعمال اليدوية والصناعات الصغيرة.",
      "موضوعات الصحة العامة وفق الخطة الدراسية."
    ],
    goals: [
      "تنمية مهارات إدارة الموارد الأسرية.",
      "التعرف على مبادئ الغذاء السليم وجودته.",
      "اكتساب مهارات تطبيقية في النسيج والأعمال اليدوية."
    ],
    careers: [
      "التدريس وفق المؤهل وشروط التوظيف.",
      "مجالات الغذاء والجودة وفق التخصص والتأهيل.",
      "تصميم الأزياء ومجالات النسيج.",
      "المشروعات الصغيرة والحرف اليدوية."
    ],
    video: "https://drive.google.com/uc?export=view&id=1y2FmclpFONExOJpR8zKE26BNhRXudhF3"
  },

  {
    id: "art-education",
    title: "التربية الفنية",
    icon: "🎨",
    short: "الرسم والتصميم والخزف والنحت والفنون التشكيلية.",
    description:
      "يركز القسم على تنمية الإبداع والتعبير البصري من خلال دراسة الفنون التشكيلية والتطبيق العملي باستخدام خامات وتقنيات متنوعة.",
    subjects: [
      "الرسم والتصوير.",
      "التصميم والزخرفة.",
      "النحت والخزف.",
      "أشغال المعادن والحلي.",
      "الطباعة والنسيج الفني.",
      "التصميم الجرافيكي والفنون اليدوية."
    ],
    goals: [
      "تنمية الحس الجمالي والإبداع.",
      "تطوير مهارات التصميم والتعبير البصري.",
      "اكتساب القدرة على إنتاج أعمال فنية متكاملة."
    ],
    careers: [
      "التدريس في مجال التربية الفنية وفق شروط التوظيف.",
      "التصميم الجرافيكي والفنون التشكيلية.",
      "مجالات الخزف والحلي والأعمال اليدوية.",
      "مراكز الفنون والإبداع وتنظيم المعارض."
    ],
    video: "https://drive.google.com/uc?export=view&id=1qB-DoxJSd6hghbh1Jpk1Yw1M1nY3BCFH"
  },

  {
    id: "educational-media",
    title: "الإعلام التربوي",
    icon: "🎙️",
    short: "الصحافة والإذاعة والتلفزيون والمسرح المدرسي.",
    description:
      "يجمع القسم بين العلوم التربوية ومهارات الإعلام والاتصال، مع دراسة مجالات مثل الصحافة والإذاعة والتلفزيون والمسرح المدرسي.",
    subjects: [
      "التحرير الصحفي وإعداد المواد الإعلامية.",
      "التصوير والإخراج الإعلامي.",
      "التقديم والإعداد الإذاعي والتلفزيوني.",
      "التمثيل والإخراج المسرحي وفق الشعبة.",
      "الأنشطة الإعلامية والثقافية المدرسية.",
      "مهارات الاتصال والعرض والتعبير."
    ],
    goals: [
      "تنمية مهارات الاتصال والتعبير.",
      "إعداد محتوى إعلامي وتربوي مناسب.",
      "تنمية المشاركة في الأنشطة المدرسية والثقافية."
    ],
    careers: [
      "الإعلام والصحافة المدرسية.",
      "إعداد المحتوى والتحرير والإنتاج الإعلامي.",
      "العلاقات العامة وفق المؤهلات المطلوبة.",
      "مجالات المسرح والأنشطة الثقافية."
    ],
    video: "https://drive.google.com/uc?export=view&id=1qt50YEjxI8yNTrlOj0McWlsXPjol10k3"
  },

  {
    id: "music-education",
    title: "التربية الموسيقية",
    icon: "🎼",
    short: "النظريات الموسيقية والإيقاع والتدريب والعزف.",
    description:
      "يجمع القسم بين الدراسة النظرية والتدريب العملي على المهارات الموسيقية، بهدف تنمية التذوق الفني وإعداد متخصصين في التربية الموسيقية.",
    subjects: [
      "النظريات الموسيقية العربية والغربية.",
      "الصولفيج والتدريب السمعي.",
      "الإيقاع الحركي والتدريب الصوتي.",
      "التدريب على الآلات الموسيقية.",
      "القيادة الموسيقية والفرق.",
      "التذوق الفني وتطبيقات الموسيقى في التعليم."
    ],
    goals: [
      "تنمية المهارات الموسيقية والسمعية.",
      "اكتشاف المواهب وتنميتها.",
      "اكتساب مهارات تعليم الموسيقى وقيادة الفرق."
    ],
    careers: [
      "التدريس في مجال التربية الموسيقية وفق شروط التوظيف.",
      "التدريب الموسيقي.",
      "العزف والأداء ضمن الفرق الموسيقية.",
      "العمل في الأنشطة والمراكز الموسيقية."
    ],
    video: "https://drive.google.com/uc?export=view&id=1BXpQI3_NUVazIEfVP_LkMf"
  }
];


/* 2. عرض بطاقات الأقسام */

const departmentGrid = document.getElementById("departmentGrid");
const departmentDetails = document.getElementById("departmentDetails");
const departmentContent = document.getElementById("departmentContent");
const closeDetails = document.getElementById("closeDetails");

function renderDepartments() {
  if (!departmentGrid) return;

  departmentGrid.innerHTML = departments.map(department => `
    <article class="department-card">
      <div class="department-icon">${department.icon}</div>
      <h3>${department.title}</h3>
      <p>${department.short}</p>
      <button
        class="btn primary"
        type="button"
        data-department="${department.id}"
      >
        اعرف تفاصيل القسم
      </button>
    </article>
  `).join("");
}


/* 3. إنشاء قوائم المعلومات والفيديو لكل قسم */

function createList(items) {
  return `
    <ul class="detail-list">
      ${items.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;
}


function showDepartment(departmentId) {
  const department = departments.find(item => item.id === departmentId);

  if (!department || !departmentDetails || !departmentContent) return;

  departmentContent.innerHTML = `
    <h2 class="detail-title">
      ${department.icon} ${department.title}
    </h2>

    <div class="department-video-card">
      <h3>🎬 الفيديو التعريفي بالقسم</h3>
      <p>شاهدي الفيديو للتعرف على القسم ومجالاته.</p>

      <video controls playsinline preload="metadata" crossorigin="anonymous">
        <source src="${department.video}" type="video/mp4">
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      <p class="video-caption">
        فيديو تعريفي بقسم ${department.title}.
      </p>

      <p class="video-missing" hidden>
        تعذر تشغيل الفيديو. تأكدي من الاتصال بالإنترنت ومن صلاحيات رابط درايف.
      </p>
    </div>

    <div class="department-description">
      <h3 class="detail-subtitle">📖 نبذة عن القسم</h3>
      <p class="detail-description">${department.description}</p>

      <h3 class="detail-subtitle">📚 طبيعة الدراسة والمواد</h3>
      ${createList(department.subjects)}

      <h3 class="detail-subtitle">🎯 أهداف القسم</h3>
      ${createList(department.goals)}

      <h3 class="detail-subtitle">💼 مجالات العمل المستقبلية</h3>
      ${createList(department.careers)}
    </div>
  `;

  const video = departmentContent.querySelector("video");
  const missingMessage = departmentContent.querySelector(".video-missing");

  video.addEventListener("error", () => {
    missingMessage.hidden = false;
  });

  departmentDetails.hidden = false;

  departmentDetails.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


/* 4. الضغط على زر تفاصيل أي قسم */

if (departmentGrid) {
  departmentGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-department]");

    if (!button) return;

    showDepartment(button.dataset.department);
  });
}


/* 5. زر العودة إلى قائمة الأقسام */

if (closeDetails) {
  closeDetails.addEventListener("click", () => {
    if (departmentDetails) departmentDetails.hidden = true;

    document.getElementById("departments")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}


/* 6. تشغيل صوت الفيديو الترحيبي بعد ضغط الزائر */

const introVideo = document.getElementById("introVideo");
const enableIntroSound = document.getElementById("enableIntroSound");
const introMessage = document.getElementById("introMessage");

if (enableIntroSound && introVideo) {
  enableIntroSound.addEventListener("click", async () => {
    introVideo.muted = false;
    introVideo.volume = 1;

    try {
      await introVideo.play();

      if (introMessage) {
        introMessage.textContent = "الصوت يعمل الآن 🎧";
      }
    } catch (error) {
      introVideo.muted = true;

      if (introMessage) {
        introMessage.textContent =
          "اضغطي على زر التشغيل داخل الفيديو، وتأكدي أن الملف موجود.";
      }
    }
  });
}


/* 7. قائمة الموبايل */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}


/* 8. بيانات اختبار الميول */

const questions = [
  {
    title: "ما النشاط الذي تستمتعين به أكثر؟",
    answers: [
      { text: "البرمجة وحل المشكلات", type: "computer" },
      { text: "تصميم الدروس والمحتوى الرقمي", type: "elearning" },
      { text: "الرسم والتصميم والأعمال الفنية", type: "art" },
      { text: "الموسيقى والعزف", type: "music" },
      { text: "التصوير والإعلام والتقديم", type: "media" },
      { text: "التغذية والملابس وإدارة المنزل", type: "home" }
    ]
  },
  {
    title: "أي مشروع تختارين تنفيذه؟",
    answers: [
      { text: "موقع إلكتروني أو برنامج", type: "computer" },
      { text: "درس إلكتروني تفاعلي", type: "elearning" },
      { text: "لوحة أو تصميم فني", type: "art" },
      { text: "مقطوعة موسيقية", type: "music" },
      { text: "فيديو أو تقرير إعلامي", type: "media" },
      { text: "مشروع في الغذاء أو النسيج", type: "home" }
    ]
  },
  {
    title: "أي مهارة تريدين تطويرها؟",
    answers: [
      { text: "البرمجة والتكنولوجيا", type: "computer" },
      { text: "التعليم الإلكتروني", type: "elearning" },
      { text: "الإبداع البصري", type: "art" },
      { text: "الأداء الموسيقي", type: "music" },
      { text: "التواصل والإنتاج الإعلامي", type: "media" },
      { text: "التصميم والتغذية والتطبيقات المنزلية", type: "home" }
    ]
  },
  {
    title: "أي بيئة عمل تفضلين؟",
    answers: [
      { text: "شركة تقنية أو مجال البرمجة", type: "computer" },
      { text: "منصة أو مؤسسة تعليمية رقمية", type: "elearning" },
      { text: "استوديو تصميم أو ورشة فنية", type: "art" },
      { text: "مركز أو نشاط موسيقي", type: "music" },
      { text: "مؤسسة إعلامية أو فريق محتوى", type: "media" },
      { text: "مشروعات الغذاء أو الملابس", type: "home" }
    ]
  },
  {
    title: "أي مادة تجذب اهتمامك أكثر؟",
    answers: [
      { text: "الحاسب والبرمجة", type: "computer" },
      { text: "التكنولوجيا في التعليم", type: "elearning" },
      { text: "الفنون والتصميم", type: "art" },
      { text: "الموسيقى والإيقاع", type: "music" },
      { text: "الإعلام والصحافة والمسرح", type: "media" },
      { text: "التغذية والاقتصاد المنزلي", type: "home" }
    ]
  }
];

const questionArea = document.getElementById("questionArea");
const questionCount = document.getElementById("questionCount");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");
const previousQuestion = document.getElementById("previousQuestion");
const nextQuestion = document.getElementById("nextQuestion");
const quizResult = document.getElementById("quizResult");

let currentQuestion = 0;
let selectedAnswers = Array(questions.length).fill(null);

const resultDepartments = {
  computer: {
    title: "إعداد معلم الحاسب الآلي",
    description: "قد يناسبك استكشاف البرمجة والتكنولوجيا.",
    ids: ["computer-ar", "computer-en"]
  },
  elearning: {
    title: "أخصائي التعلم الإلكتروني",
    description: "قد يناسبك تصميم المحتوى والتجارب التعليمية الرقمية.",
    ids: ["e-learning"]
  },
  art: {
    title: "التربية الفنية",
    description: "قد يناسبك التصميم والفنون والإبداع البصري.",
    ids: ["art-education"]
  },
  music: {
    title: "التربية الموسيقية",
    description: "قد يناسبك استكشاف الموسيقى والتدريب السمعي.",
    ids: ["music-education"]
  },
  media: {
    title: "الإعلام التربوي",
    description: "قد يناسبك الإعلام والتواصل وإنتاج المحتوى.",
    ids: ["educational-media"]
  },
  home: {
    title: "الاقتصاد المنزلي",
    description: "قد يناسبك استكشاف التغذية والنسيج وإدارة الموارد.",
    ids: ["home-economics"]
  }
};

function renderQuestion() {
  if (!questionArea) return;

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  questionCount.textContent =
    `السؤال ${currentQuestion + 1} من ${questions.length}`;

  progressPercent.textContent = `${progress}%`;
  progressBar.style.width = `${progress}%`;

  questionArea.innerHTML = `
    <h3 class="question-title">${question.title}</h3>
    <div class="answers">
      ${question.answers.map((answer, index) => `
        <label class="answer-option">
          <input
            type="radio"
            name="quizAnswer"
            value="${answer.type}"
            ${selectedAnswers[currentQuestion] === answer.type ? "checked" : ""}
          >
          <span>${answer.text}</span>
        </label>
      `).join("")}
    </div>
  `;

  previousQuestion.disabled = currentQuestion === 0;
  nextQuestion.textContent =
    currentQuestion === questions.length - 1
      ? "اعرف النتيجة"
      : "التالي";

  quizResult.innerHTML = "";
}

function showQuizResult() {
  const scores = {};

  selectedAnswers.forEach(type => {
    if (type) scores[type] = (scores[type] || 0) + 1;
  });

  if (selectedAnswers.some(answer => !answer)) {
    quizResult.innerHTML = `
      <p class="video-missing">
        اختاري إجابة لكل سؤال قبل عرض النتيجة.
      </p>
    `;
    return;
  }

  const highestScore = Math.max(...Object.values(scores));
  const winners = Object.keys(scores).filter(
    type => scores[type] === highestScore
  );

  quizResult.innerHTML = `
    <div class="result-card">
      <h3>نتيجة استرشادية لميولك ✨</h3>
      <p>
        ${winners.map(type => resultDepartments[type].title).join("، ")}
      </p>
      ${winners.map(type => `
        <p>${resultDepartments[type].description}</p>
        ${resultDepartments[type].ids.map(id => `
          <button
            type="button"
            class="btn secondary quiz-department-link"
            data-result-department="${id}"
          >
            اكتشفي القسم
          </button>
        `).join("")}
      `).join("")}
      <p>
        النتيجة ليست حكمًا نهائيًا على قدراتك أو اختيارك الجامعي.
        قارني بين المواد الدراسية واهتماماتك قبل اتخاذ القرار.
      </p>
      <button type="button" class="btn primary" id="retryQuiz">
        إعادة الاختبار
      </button>
    </div>
  `;

  questionArea.innerHTML = "";
  previousQuestion.disabled = true;
  nextQuestion.disabled = true;

  quizResult.querySelectorAll("[data-result-department]").forEach(button => {
    button.addEventListener("click", () => {
      const departmentId = button.dataset.resultDepartment;
      showDepartment(departmentId);
    });
  });

  document.getElementById("retryQuiz")?.addEventListener("click", () => {
    currentQuestion = 0;
    selectedAnswers = Array(questions.length).fill(null);
    nextQuestion.disabled = false;
    renderQuestion();
  });
}

if (
  questionArea &&
  questionCount &&
  progressPercent &&
  progressBar &&
  previousQuestion &&
  nextQuestion &&
  quizResult
) {
  renderQuestion();

  questionArea.addEventListener("change", event => {
    if (event.target.name === "quizAnswer") {
      selectedAnswers[currentQuestion] = event.target.value;
    }
  });

  previousQuestion.addEventListener("click", () => {
    if (currentQuestion > 0) {
      currentQuestion--;
      renderQuestion();
    }
  });

  nextQuestion.addEventListener("click", () => {
    if (selectedAnswers[currentQuestion] === null) {
      quizResult.innerHTML = `
        <p class="video-missing">اختاري إجابة أولًا للمتابعة.</p>
      `;
      return;
    }

    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      renderQuestion();
    } else {
      showQuizResult();
    }
  });
}


/* 9. سنة حقوق النشر */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* 10. تشغيل الموقع */

renderDepartments();

