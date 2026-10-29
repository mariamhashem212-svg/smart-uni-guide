/* =========================================
   UniMate AI
   الأقسام + الفيديوهات + اختبار الميول
========================================= */

/* 1. بيانات الأقسام السبعة مع روابط التضمين المباشر */

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
    videoId: "1cJV-ulAOugdFxCpl7Iv3ayJcN7YEL6EH"
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
    videoId: "1zILndFALoWLL5Avo3vJ7KeCCj5g7RQ2e"
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
    videoId: "1CWAAad46_57yRVnNSmDtA2zPD0ytbmjS"
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
    videoId: "1y2FmclpFONExOJpR8zKE26BNhRXudhF3"
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
    videoId: "1qB-DoxJSd6hghbh1Jpk1Yw1M1nY3BCFH"
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
    videoId: "1qt50YEjxI8yNTrlOj0McWlsXPjol10k3"
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
    videoId: "1BXpQI3_NUVazIEfVP_LkMf-vOCvqqG_c"
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


/* 3. إنشاء قوائم المعلومات والفيديو لكل قسم (باستخدام iframe لعرض درايف بسلاسة) */

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

      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; background: #000; margin-bottom: 15px;">
        <iframe 
          src="https://drive.google.com/file/d/${department.videoId}/preview" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
          allow="autoplay" 
          allowfullscreen>
        </iframe>
      </div>

      <p class="video-caption">
        فيديو تعريفي بقسم ${department.title}.
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
      introVideo.muted = true

