const STORAGE_KEY = "pestle_calculator_state_v2";

const TRANSLATIONS = {
  ru: {
    docTitle: "PESTLE-вычислитель",
    appTitle: "PESTLE-вычислитель",
    appSubtitle: "Анализ макросреды: взвешенные баллы (−25…+25), график и экспорт",
    infoBtn: "Инфо",
    loadDemo: "Загрузить пример",
    clearAll: "Очистить",
    themeDark: "Тема: Тёмная",
    themeLight: "Тема: Светлая",
    favorabilityIndexLabel: "Индекс благоприятности",
    netScoreLabel: "Суммарный балл",
    oppThreatLabel: "Возможности / Угрозы",
    factorsCount: (n) => `Факторов: ${n}`,
    maxMin: (max, min) => `Макс: ${max} · Мин: ${min}`,
    favGood: "Благоприятный фон",
    favTense: "Напряжённый фон",
    favBalanced: "Сбалансированный фон",
    allFactorsTab: (n) => `Все факторы (${n})`,
    allFactorsMeta: "Сводный список по всем 6 направлениям PESTLE. Балл каждого фактора лежит в диапазоне от −25 до +25.",
    factorTitleLabel: "Название фактора",
    factorTitlePlaceholder: "Например: Рост спроса на автоматизацию процессов",
    categoryLabel: "Категория",
    factorTypeLabel: "Тип влияния",
    oppOption: "Возможность (+)",
    threatOption: "Угроза (−)",
    importanceLabel: "Важность",
    impactLabel: "Сила / вероятность",
    horizonLabel: "Горизонт",
    horizons: [
      "Краткосрочный (до 1 года)",
      "Среднесрочный (1–3 года)",
      "Долгосрочный (3+ лет)"
    ],
    scorePreviewLabel: "Балл фактора",
    actionLabel: "Комментарий / план действий",
    actionPlaceholder: "Краткая заметка или шаг по использованию возможности / снижению риска",
    addFactorBtn: "Добавить фактор",
    saveChangesBtn: "Сохранить изменения",
    cancelEditBtn: "Отменить правку",
    filterAll: "Все типы",
    filterOpp: "Только возможности (+)",
    filterThreat: "Только угрозы (−)",
    sortAbsDesc: "По силе влияния (|балл| ↓)",
    sortScoreDesc: "По баллу (от +25 к −25)",
    sortScoreAsc: "По баллу (от −25 к +25)",
    emptyList: "Нет факторов, подходящих под выбранные условия.",
    impShort: "Важность",
    impImpactShort: "Сила",
    editBtn: "Изм.",
    deleteBtn: "Удалить",
    chartTitle: "Визуализация",
    radarMode: "Радар",
    balanceMode: "Баланс",
    topOpportunitiesTitle: "Топ-3 возможности",
    topThreatsTitle: "Топ-3 угрозы",
    noOpps: "Возможности пока не добавлены",
    noThreats: "Угрозы пока не добавлены",
    exportTitle: "Экспорт отчёта",
    copyTextBtn: "Копировать текст",
    copiedBtn: "Скопировано",
    copyErrBtn: "Ошибка",
    downloadCsvBtn: "Скачать CSV",
    downloadJsonBtn: "Скачать JSON",
    savedLocal: "Сохранено локально",
    saveError: "Не удалось сохранить",
    summaryHeader: (net, count) => `PESTLE-сводка | Суммарный балл: ${net} | Факторов: ${count}`,
    csvHeaders: ["Категория", "Фактор", "Тип", "Важность", "Сила", "Балл", "Горизонт", "План действий"],
    oppLabel: "Возможность",
    threatLabel: "Угроза",
    infoModalTitle: "О методике PESTLE и инструкция",
    infoCloseBtn: "Понятно",
    infoContent: {
      aboutTitle: "Что такое PESTLE-анализ",
      aboutText: "PESTLE — инструмент стратегического анализа внешней макросреды, на которую компания или продукт напрямую не влияют, но должны учитывать при планировании.",
      pillars: [
        ["P — Политические", "госрегулирование, налоги, гранты, санкции и политическая стабильность."],
        ["E — Экономические", "инфляция, ставки, курсы валют, платёжеспособность и доступность капитала."],
        ["S — Социальные", "демография, поведение пользователей, культура потребления и тренды труда."],
        ["T — Технологические", "новые платформы, AI/автоматизация, инфраструктура, стандарты и безопасность."],
        ["L — Правовые", "законы о данных, лицензирование, комплаенс, трудовое и антимонопольное право."],
        ["E — Экологические", "ESG-требования, энергоэффективность, климат и устойчивое развитие."]
      ],
      formulaTitle: "Как считается балл (−25…+25)",
      formulaText: "Балл = Тип (+1 / −1) × Важность (1…5) × Сила / вероятность (1…5). Положительные значения усиливают позиции, отрицательные — создают риски.",
      guideTitle: "Как пользоваться калькулятором",
      steps: [
        "Выберите категорию во вкладках или сразу в форме, введите название фактора и укажите тип влияния (возможность или угроза).",
        "Настройте ползунки важности и силы/вероятности — итоговый балл пересчитается автоматически.",
        "Добавьте комментарий или конкретный шаг в план действий и нажмите «Добавить фактор».",
        "Используйте фильтры и сортировку для работы со списком, переключайте режимы «Радар» и «Баланс» на графике.",
        "Скопируйте текстовую сводку или выгрузите данные в CSV / JSON. Все изменения сохраняются в браузере."
      ]
    },
    categories: {
      political: {
        label: "Политические",
        hint: "Налоговая политика, госрегулирование, субсидии, геополитика и стабильность институтов."
      },
      economic: {
        label: "Экономические",
        hint: "Ставки ЦБ, инфляция, курсы валют, покупательная способность и стоимость капитала."
      },
      social: {
        label: "Социальные",
        hint: "Демография, цифровые привычки, требования к удалённой работе и ценностные сдвиги."
      },
      technological: {
        label: "Технологические",
        hint: "AI/LLM-инструменты, облачная инфраструктура, автоматизация, API и кибербезопасность."
      },
      legal: {
        label: "Правовые",
        hint: "Защита персональных данных, лицензирование, трудовое и антимонопольное законодательство."
      },
      environmental: {
        label: "Экологические",
        hint: "Энергопотребление дата-центров, ESG-требования клиентов и углеродный след."
      }
    }
  },

  en: {
    docTitle: "PESTLE Calculator",
    appTitle: "PESTLE Calculator",
    appSubtitle: "Macro-environment analysis: weighted scores (−25…+25), chart & export",
    infoBtn: "Info",
    loadDemo: "Load demo",
    clearAll: "Clear",
    themeDark: "Theme: Dark",
    themeLight: "Theme: Light",
    favorabilityIndexLabel: "Favorability Index",
    netScoreLabel: "Net Score",
    oppThreatLabel: "Opportunities / Threats",
    factorsCount: (n) => `Factors: ${n}`,
    maxMin: (max, min) => `Max: ${max} · Min: ${min}`,
    favGood: "Favorable outlook",
    favTense: "Challenging outlook",
    favBalanced: "Balanced outlook",
    allFactorsTab: (n) => `All factors (${n})`,
    allFactorsMeta: "Combined view across all 6 PESTLE dimensions. Each factor score ranges from −25 to +25.",
    factorTitleLabel: "Factor name",
    factorTitlePlaceholder: "e.g., Growing demand for workflow automation",
    categoryLabel: "Category",
    factorTypeLabel: "Impact type",
    oppOption: "Opportunity (+)",
    threatOption: "Threat (−)",
    importanceLabel: "Importance",
    impactLabel: "Impact / likelihood",
    horizonLabel: "Time horizon",
    horizons: [
      "Short-term (< 1 year)",
      "Medium-term (1–3 years)",
      "Long-term (3+ years)"
    ],
    scorePreviewLabel: "Factor score",
    actionLabel: "Notes / action plan",
    actionPlaceholder: "Key note or action step to capture opportunity or mitigate risk",
    addFactorBtn: "Add factor",
    saveChangesBtn: "Save changes",
    cancelEditBtn: "Cancel edit",
    filterAll: "All types",
    filterOpp: "Opportunities only (+)",
    filterThreat: "Threats only (−)",
    sortAbsDesc: "By impact magnitude (|score| ↓)",
    sortScoreDesc: "By score (+25 to −25)",
    sortScoreAsc: "By score (−25 to +25)",
    emptyList: "No factors match the selected filters.",
    impShort: "Importance",
    impImpactShort: "Impact",
    editBtn: "Edit",
    deleteBtn: "Delete",
    chartTitle: "Visualization",
    radarMode: "Radar",
    balanceMode: "Balance",
    topOpportunitiesTitle: "Top 3 Opportunities",
    topThreatsTitle: "Top 3 Threats",
    noOpps: "No opportunities added yet",
    noThreats: "No threats added yet",
    exportTitle: "Export Report",
    copyTextBtn: "Copy summary",
    copiedBtn: "Copied",
    copyErrBtn: "Error",
    downloadCsvBtn: "Download CSV",
    downloadJsonBtn: "Download JSON",
    savedLocal: "Saved locally",
    saveError: "Save failed",
    summaryHeader: (net, count) => `PESTLE Summary | Net Score: ${net} | Factors: ${count}`,
    csvHeaders: ["Category", "Factor", "Type", "Importance", "Impact", "Score", "Horizon", "Action Plan"],
    oppLabel: "Opportunity",
    threatLabel: "Threat",
    infoModalTitle: "About PESTLE & How to Use",
    infoCloseBtn: "Got it",
    infoContent: {
      aboutTitle: "What is PESTLE Analysis?",
      aboutText: "PESTLE is a strategic framework for evaluating external macro-environmental forces that a business or product cannot directly control but must plan around.",
      pillars: [
        ["P — Political", "government regulation, taxes, grants, trade policies, and political stability."],
        ["E — Economic", "inflation, interest rates, exchange rates, purchasing power, and capital costs."],
        ["S — Social", "demographics, user habits, cultural shifts, and workforce expectations."],
        ["T — Technological", "emerging platforms, AI/automation, infrastructure, standards, and security."],
        ["L — Legal", "data protection laws, licensing, compliance, labor rules, and antitrust."],
        ["E — Environmental", "ESG expectations, energy efficiency, climate impact, and sustainability."]
      ],
      formulaTitle: "How Scores Are Calculated (−25…+25)",
      formulaText: "Score = Type (+1 / −1) × Importance (1…5) × Impact / likelihood (1…5). Positive values represent tailwinds; negative values represent headwinds.",
      guideTitle: "How to Use This Calculator",
      steps: [
        "Pick a category tab or select it in the form, enter a factor title, and choose Opportunity (+) or Threat (−).",
        "Adjust Importance and Impact sliders — the live score preview updates automatically.",
        "Add notes or an action step and click Add factor (or edit/remove existing factors anytime).",
        "Use filters and sorting on the factor list, and switch the chart between Radar and Balance modes.",
        "Copy the text summary or export to CSV / JSON. Everything is saved automatically in your browser."
      ]
    },
    categories: {
      political: {
        label: "Political",
        hint: "Tax policy, regulation, grants, geopolitics, and institutional stability."
      },
      economic: {
        label: "Economic",
        hint: "Interest rates, inflation, exchange rates, purchasing power, and cost of capital."
      },
      social: {
        label: "Social",
        hint: "Demographics, digital habits, remote work expectations, and cultural shifts."
      },
      technological: {
        label: "Technological",
        hint: "AI/LLM tooling, cloud infrastructure, automation, APIs, and cybersecurity."
      },
      legal: {
        label: "Legal",
        hint: "Data privacy laws, licensing, labor rules, compliance, and antitrust regulation."
      },
      environmental: {
        label: "Environmental",
        hint: "Data center power usage, client ESG requirements, and carbon footprint."
      }
    }
  },

  hy: {
    docTitle: "PESTLE Հաշվիչ",
    appTitle: "PESTLE Հաշվիչ",
    appSubtitle: "Մակրոմիջավայրի վերլուծություն՝ կշռված միավորներ (−25…+25), գրաֆիկ և արտահանում",
    infoBtn: "Ինֆո",
    loadDemo: "Բեռնել օրինակ",
    clearAll: "Մաքրել",
    themeDark: "Թեմա՝ Մուգ",
    themeLight: "Թեմա՝ Լուսավոր",
    favorabilityIndexLabel: "Բարենպաստության ինդեքս",
    netScoreLabel: "Ընդհանուր միավոր",
    oppThreatLabel: "Հնարավորություններ / Սպառնալիքներ",
    factorsCount: (n) => `Գործոններ՝ ${n}`,
    maxMin: (max, min) => `Առավելագույն՝ ${max} · Նվազագույն՝ ${min}`,
    favGood: "Բարենպաստ միջավայր",
    favTense: "Լարված միջավայր",
    favBalanced: "Հավասարակշռված միջավայր",
    allFactorsTab: (n) => `Բոլոր գործոնները (${n})`,
    allFactorsMeta: "Ամփոփ ցանկ PESTLE բոլոր 6 ուղղություններով։ Յուրաքանչյուր գործոնի միավորը −25-ից +25 է։",
    factorTitleLabel: "Գործոնի անվանումը",
    factorTitlePlaceholder: "Օր․՝ Գործընթացների ավտոմատացման պահանջարկի աճ",
    categoryLabel: "Կատեգորիա",
    factorTypeLabel: "Ազդեցության տեսակը",
    oppOption: "Հնարավորություն (+)",
    threatOption: "Սպառնալիք (−)",
    importanceLabel: "Կարևորություն",
    impactLabel: "Ուժ / հավանականություն",
    horizonLabel: "Ժամանակային հորիզոն",
    horizons: [
      "Կարճաժամկետ (մինչև 1 տարի)",
      "Միջնաժամկետ (1–3 տարի)",
      "Երկարաժամկետ (3+ տարի)"
    ],
    scorePreviewLabel: "Գործոնի միավոր",
    actionLabel: "Մեկնաբանություն / գործողությունների պլան",
    actionPlaceholder: "Կարճ նշում կամ քայլ՝ հնարավորությունը օգտագործելու կամ ռիսկը նվազեցնելու համար",
    addFactorBtn: "Ավելացնել գործոն",
    saveChangesBtn: "Պահպանել փոփոխությունները",
    cancelEditBtn: "Չեղարկել խմբագրումը",
    filterAll: "Բոլոր տեսակները",
    filterOpp: "Միայն հնարավորություններ (+)",
    filterThreat: "Միայն սպառնալիքներ (−)",
    sortAbsDesc: "Ըստ ազդեցության ուժի (|միավոր| ↓)",
    sortScoreDesc: "Ըստ միավորի (+25-ից −25)",
    sortScoreAsc: "Ըստ միավորի (−25-ից +25)",
    emptyList: "Ընտրված պայմաններին համապատասխան գործոններ չկան։",
    impShort: "Կարևորություն",
    impImpactShort: "Ուժ",
    editBtn: "Փոխել",
    deleteBtn: "Ջնջել",
    chartTitle: "Պատկերացում",
    radarMode: "Ռադար",
    balanceMode: "Հաշվեկշիռ",
    topOpportunitiesTitle: "Թոփ-3 հնարավորություններ",
    topThreatsTitle: "Թոփ-3 սպառնալիքներ",
    noOpps: "Հնարավորություններ դեռ ավելացված չեն",
    noThreats: "Սպառնալիքներ դեռ ավելացված չեն",
    exportTitle: "Հաշվետվության արտահանում",
    copyTextBtn: "Պատճենել տեքստը",
    copiedBtn: "Պատճենվեց",
    copyErrBtn: "Սխալ",
    downloadCsvBtn: "Ներբեռնել CSV",
    downloadJsonBtn: "Ներբեռնել JSON",
    savedLocal: "Պահպանված է տեղային",
    saveError: "Չհաջողվեց պահպանել",
    summaryHeader: (net, count) => `PESTLE ամփոփում | Ընդհանուր միավոր՝ ${net} | Գործոններ՝ ${count}`,
    csvHeaders: ["Կատեգորիա", "Գործոն", "Տեսակ", "Կարևորություն", "Ուժ", "Միավոր", "Հորիզոն", "Գործողությունների պլան"],
    oppLabel: "Հնարավորություն",
    threatLabel: "Սպառնալիք",
    infoModalTitle: "PESTLE մեթոդաբանության մասին և օգտագործման ուղեցույց",
    infoCloseBtn: "Պարզ է",
    infoContent: {
      aboutTitle: "Ի՞նչ է PESTLE վերլուծությունը",
      aboutText: "PESTLE-ը արտաքին մակրոմիջավայրի ռազմավարական վերլուծության գործիք է, որի վրա բիզնեսը կամ պրոդուկտն ուղղակիորեն չեն ազդում, սակայն պետք է հաշվի առնեն պլանավորելիս։",
      pillars: [
        ["P — Քաղաքական", "պետական կարգավորում, հարկեր, դրամաշնորհներ և քաղաքական կայունություն։"],
        ["E — Տնտեսական", "գնաճ, տոկոսադրույքներ, փոխարժեքներ, գնողունակություն և կապիտալի արժեք։"],
        ["S — Սոցիալական", "ժողովրդագրություն, օգտատերերի սովորություններ, մշակույթ և աշխատանքային միտումներ։"],
        ["T — Տեխնոլոգիական", "նոր հարթակներ, AI/ավտոմատացում, ենթակառուցվածք, ստանդարտներ և անվտանգություն։"],
        ["L — Իրավական", "տվյալների պաշտպանություն, լիցենզավորում, համապատասխանեցում (compliance) և աշխատանքային օրենքներ։"],
        ["E — Բնապահպանական", "ESG պահանջներ, էներգաարդյունավետություն, կլիմա և կայուն զարգացում։"]
      ],
      formulaTitle: "Ինչպես է հաշվարկվում միավորը (−25…+25)",
      formulaText: "Միավոր = Տեսակ (+1 / −1) × Կարևորություն (1…5) × Ուժ / հավանականություն (1…5)։ Դրական արժեքները նպաստավոր են, բացասականները՝ ռիսկային։",
      guideTitle: "Ինչպես օգտվել հաշվիչից",
      steps: [
        "Ընտրեք կատեգորիայի ներդիրը կամ ձևում, գրեք գործոնի անվանումը և նշեք տեսակը (հնարավորություն կամ սպառնալիք)։",
        "Կարգավորեք կարևորության և ուժի/հավանականության սահիչները՝ միավորը կհաշվարկվի ինքնաբերաբար։",
        "Ավելացրեք մեկնաբանություն կամ գործողության քայլ և սեղմեք «Ավելացնել գործոն»։",
        "Օգտագործեք ֆիլտրերն ու տեսակավորումը, ինչպես նաև փոխեք գրաֆիկի «Ռադար» և «Հաշվեկշիռ» ռեժիմները։",
        "Պատճենեք տեքստային ամփոփումը կամ արտահանեք CSV / JSON ձևաչափով։ Տվյալները պահվում են բրաուզերում։"
      ]
    },
    categories: {
      political: {
        label: "Քաղաքական",
        hint: "Հարկային քաղաքականություն, պետական կարգավորում, դրամաշնորհներ և ինստիտուցիոնալ կայունություն։"
      },
      economic: {
        label: "Տնտեսական",
        hint: "Տոկոսադրույքներ, գնաճ, փոխարժեքներ, գնողունակություն և կապիտալի արժեք։"
      },
      social: {
        label: "Սոցիալական",
        hint: "Ժողովրդագրություն, թվային սովորություններ, հեռավար աշխատանքի պահանջներ և արժեքային փոփոխություններ։"
      },
      technological: {
        label: "Տեխնոլոգիական",
        hint: "AI/LLM գործիքներ, ամպային ենթակառուցվածք, ավտոմատացում, API և կիբերանվտանգություն։"
      },
      legal: {
        label: "Իրավական",
        hint: "Անձնական տվյալների պաշտպանություն, լիցենզավորում, աշխատանքային և հակամենաշնորհային օրենսդրություն։"
      },
      environmental: {
        label: "Բնապահպանական",
        hint: "Տվյալների կենտրոնների էներգասպառում, հաճախորդների ESG պահանջներ և ածխածնային հետք։"
      }
    }
  }
};

const CATEGORY_KEYS = [
  "political",
  "economic",
  "social",
  "technological",
  "legal",
  "environmental"
];

const DEMO_FACTORS = [
  {
    id: "f-1",
    category: "political",
    title: {
      ru: "Гранты и налоговые льготы для IT/AI-разработчиков",
      en: "Grants and tax incentives for IT/AI developers",
      hy: "Դրամաշնորհներ և հարկային արտոնություններ IT/AI մշակողների համար"
    },
    type: 1,
    importance: 4,
    impact: 4,
    horizonIndex: 1,
    action: {
      ru: "Подготовить заявку на профильные программы поддержки и льготные тарифы.",
      en: "Prepare applications for relevant support programs and preferential regimes.",
      hy: "Պատրաստել հայտ համապատասխան աջակցության ծրագրերի և արտոնությունների համար։"
    }
  },
  {
    id: "f-2",
    category: "economic",
    title: {
      ru: "Высокая стоимость заёмного финансирования",
      en: "Elevated cost of debt financing",
      hy: "Փոխառու ֆինանսավորման բարձր արժեք"
    },
    type: -1,
    importance: 4,
    impact: 4,
    horizonIndex: 0,
    action: {
      ru: "Сфокусироваться на органическом росте MRR и контроле CAC payback.",
      en: "Focus on organic MRR growth and disciplined CAC payback.",
      hy: "Կենտրոնանալ MRR-ի օրգանական աճի և CAC payback-ի վերահսկման վրա։"
    }
  },
  {
    id: "f-3",
    category: "social",
    title: {
      ru: "Рост спроса на автоматизацию рутинного документооборота",
      en: "Rising demand for routine document workflow automation",
      hy: "Առօրյա փաստաթղթաշրջանառության ավտոմատացման պահանջարկի աճ"
    },
    type: 1,
    importance: 5,
    impact: 4,
    horizonIndex: 0,
    action: {
      ru: "Усилить кейсы сокращения времени согласования договоров на лендинге.",
      en: "Highlight contract turnaround time reductions in product case studies.",
      hy: "Առաջին էջում ընդգծել պայմանագրերի հաստատման ժամանակի կրճատման օրինակները։"
    }
  },
  {
    id: "f-4",
    category: "technological",
    title: {
      ru: "Удешевление и ускорение моделей обработки документов",
      en: "Faster and cheaper document-processing models",
      hy: "Փաստաթղթերի մշակման մոդելների արագության աճ և ինքնարժեքի նվազում"
    },
    type: 1,
    importance: 5,
    impact: 5,
    horizonIndex: 1,
    action: {
      ru: "Внедрить маршрутизацию задач между лёгкими и тяжёлыми моделями.",
      en: "Implement smart task routing between lightweight and frontier models.",
      hy: "Ներդնել խնդիրների երթուղավորում թեթև և հզոր մոդելների միջև։"
    }
  },
  {
    id: "f-5",
    category: "legal",
    title: {
      ru: "Ужесточение правил обработки и локализации данных",
      en: "Stricter data processing and localization rules",
      hy: "Տվյալների մշակման և տեղայնացման կանոնների խստացում"
    },
    type: -1,
    importance: 4,
    impact: 4,
    horizonIndex: 1,
    action: {
      ru: "Проверить архитектуру хранения данных и обновить DPA-договоры.",
      en: "Audit storage architecture and update Data Processing Agreements.",
      hy: "Ստուգել տվյալների պահման ճարտարապետությունը և թարմացնել DPA պայմանագրերը։"
    }
  },
  {
    id: "f-6",
    category: "environmental",
    title: {
      ru: "Требования корпоративных клиентов к ESG и энергоэффективности",
      en: "Enterprise client requirements for ESG and energy efficiency",
      hy: "Կորպորատիվ հաճախորդների ESG և էներգաարդյունավետության պահանջներ"
    },
    type: 1,
    importance: 3,
    impact: 3,
    horizonIndex: 2,
    action: {
      ru: "Зафиксировать метрики энергоэффективности инфраструктуры в отчёте безопасности.",
      en: "Document infrastructure energy-efficiency metrics in the trust report.",
      hy: "Ամրագրել ենթակառուցվածքի էներգաարդյունավետության ցուցանիշները անվտանգության հաշվետվության մեջ։"
    }
  }
];

function localizeField(val, lang) {
  if (val && typeof val === "object") {
    return val[lang] || val.ru || val.en || val.hy || "";
  }
  return String(val || "");
}

function createDemoFactors() {
  const stamp = Date.now();
  return DEMO_FACTORS.map((f, idx) => ({
    id: `${f.id}-${stamp}-${idx}`,
    category: f.category,
    title: { ...f.title },
    type: f.type,
    importance: f.importance,
    impact: f.impact,
    horizonIndex: f.horizonIndex,
    action: { ...f.action }
  }));
}

const state = {
  lang: "ru",
  theme: "dark",
  activeTab: "all",
  chartMode: "radar",
  typeFilter: "all",
  sortBy: "absDesc",
  editingId: null,
  factors: createDemoFactors()
};

const els = {
  html: document.documentElement,
  openInfoBtn: document.getElementById("openInfoBtn"),
  infoModal: document.getElementById("infoModal"),
  closeInfoBtn: document.getElementById("closeInfoBtn"),
  okInfoBtn: document.getElementById("okInfoBtn"),
  infoModalBody: document.getElementById("infoModalBody"),
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  loadDemoBtn: document.getElementById("loadDemoBtn"),
  resetAllBtn: document.getElementById("resetAllBtn"),
  favorabilityIndex: document.getElementById("favorabilityIndex"),
  favorabilityCaption: document.getElementById("favorabilityCaption"),
  netScoreValue: document.getElementById("netScoreValue"),
  factorsCountCaption: document.getElementById("factorsCountCaption"),
  oppThreatRatio: document.getElementById("oppThreatRatio"),
  maxMinCaption: document.getElementById("maxMinCaption"),
  categoryTabs: document.getElementById("categoryTabs"),
  categoryMeta: document.getElementById("categoryMeta"),
  factorForm: document.getElementById("factorForm"),
  factorTitle: document.getElementById("factorTitle"),
  factorCategory: document.getElementById("factorCategory"),
  factorType: document.getElementById("factorType"),
  factorImportance: document.getElementById("factorImportance"),
  factorImpact: document.getElementById("factorImpact"),
  factorHorizon: document.getElementById("factorHorizon"),
  importanceOut: document.getElementById("importanceOut"),
  impactOut: document.getElementById("impactOut"),
  scorePreview: document.getElementById("scorePreview"),
  factorAction: document.getElementById("factorAction"),
  submitFactorBtn: document.getElementById("submitFactorBtn"),
  cancelEditBtn: document.getElementById("cancelEditBtn"),
  typeFilter: document.getElementById("typeFilter"),
  sortSelect: document.getElementById("sortSelect"),
  factorsList: document.getElementById("factorsList"),
  canvas: document.getElementById("pestleCanvas"),
  categoryBreakdown: document.getElementById("categoryBreakdown"),
  topOpportunities: document.getElementById("topOpportunities"),
  topThreats: document.getElementById("topThreats"),
  summaryPreview: document.getElementById("summaryPreview"),
  copySummaryBtn: document.getElementById("copySummaryBtn"),
  exportCsvBtn: document.getElementById("exportCsvBtn"),
  exportJsonBtn: document.getElementById("exportJsonBtn"),
  saveStatus: document.getElementById("saveStatus")
};

function t() {
  return TRANSLATIONS[state.lang] || TRANSLATIONS.ru;
}

function calcScore(factor) {
  return Number(factor.type) * Number(factor.importance) * Number(factor.impact);
}

function formatSigned(num) {
  return num > 0 ? `+${num}` : `${num}`;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function saveState(statusMessage) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        lang: state.lang,
        theme: state.theme,
        chartMode: state.chartMode,
        factors: state.factors
      })
    );
    els.saveStatus.textContent = statusMessage || t().savedLocal;
  } catch {
    els.saveStatus.textContent = t().saveError;
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (["ru", "en", "hy"].includes(parsed.lang)) state.lang = parsed.lang;
    if (parsed.theme === "light" || parsed.theme === "dark") state.theme = parsed.theme;
    if (parsed.chartMode === "radar" || parsed.chartMode === "balance") state.chartMode = parsed.chartMode;
    if (Array.isArray(parsed.factors)) state.factors = parsed.factors;
  } catch {
    // Keep defaults
  }
}

function renderInfoModal() {
  const info = t().infoContent;
  const pillarsHtml = info.pillars
    .map(([name, desc]) => `<li><strong>${escapeHtml(name)}</strong> — ${escapeHtml(desc)}</li>`)
    .join("");
  const stepsHtml = info.steps
    .map((step) => `<li>${escapeHtml(step)}</li>`)
    .join("");

  els.infoModalBody.innerHTML = `
    <div class="info-section">
      <h3>${escapeHtml(info.aboutTitle)}</h3>
      <p>${escapeHtml(info.aboutText)}</p>
      <ul class="info-list">${pillarsHtml}</ul>
    </div>

    <div class="info-section">
      <h3>${escapeHtml(info.formulaTitle)}</h3>
      <div class="formula-box">${escapeHtml(info.formulaText)}</div>
    </div>

    <div class="info-section">
      <h3>${escapeHtml(info.guideTitle)}</h3>
      <ol class="info-list">${stepsHtml}</ol>
    </div>
  `;
}

function openInfoModal() {
  renderInfoModal();
  els.infoModal.classList.remove("hidden");
}

function closeInfoModal() {
  els.infoModal.classList.add("hidden");
}

function applyThemeAndLang() {
  const dict = t();
  els.html.setAttribute("data-theme", state.theme);
  els.html.setAttribute("lang", state.lang);
  document.title = dict.docTitle;
  els.themeToggleBtn.textContent = state.theme === "dark" ? dict.themeDark : dict.themeLight;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (typeof dict[key] === "string") {
      node.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (typeof dict[key] === "string") {
      node.placeholder = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === state.lang);
  });

  const selectedCat = els.factorCategory.value || "political";
  els.factorCategory.innerHTML = CATEGORY_KEYS.map(
    (key) => `<option value="${key}">${escapeHtml(dict.categories[key].label)}</option>`
  ).join("");
  els.factorCategory.value = CATEGORY_KEYS.includes(selectedCat) ? selectedCat : "political";

  const selectedType = els.factorType.value || "1";
  els.factorType.innerHTML = `
    <option value="1">${escapeHtml(dict.oppOption)}</option>
    <option value="-1">${escapeHtml(dict.threatOption)}</option>
  `;
  els.factorType.value = selectedType;

  const selectedHorizon = els.factorHorizon.value || "1";
  els.factorHorizon.innerHTML = dict.horizons
    .map((label, idx) => `<option value="${idx}">${escapeHtml(label)}</option>`)
    .join("");
  els.factorHorizon.value = ["0", "1", "2"].includes(selectedHorizon) ? selectedHorizon : "1";

  const currentFilter = state.typeFilter;
  els.typeFilter.innerHTML = `
    <option value="all">${escapeHtml(dict.filterAll)}</option>
    <option value="opportunity">${escapeHtml(dict.filterOpp)}</option>
    <option value="threat">${escapeHtml(dict.filterThreat)}</option>
  `;
  els.typeFilter.value = currentFilter;

  const currentSort = state.sortBy;
  els.sortSelect.innerHTML = `
    <option value="absDesc">${escapeHtml(dict.sortAbsDesc)}</option>
    <option value="scoreDesc">${escapeHtml(dict.sortScoreDesc)}</option>
    <option value="scoreAsc">${escapeHtml(dict.sortScoreAsc)}</option>
  `;
  els.sortSelect.value = currentSort;

  els.submitFactorBtn.textContent = state.editingId ? dict.saveChangesBtn : dict.addFactorBtn;

  if (!els.infoModal.classList.contains("hidden")) {
    renderInfoModal();
  }
}

function updateScorePreview() {
  const imp = Number(els.factorImportance.value);
  const impact = Number(els.factorImpact.value);
  const type = Number(els.factorType.value);
  const score = type * imp * impact;

  els.importanceOut.textContent = imp;
  els.impactOut.textContent = impact;
  els.scorePreview.textContent = formatSigned(score);
  els.scorePreview.style.color = score >= 0 ? "var(--pos)" : "var(--neg)";
}

function resetForm() {
  state.editingId = null;
  els.factorForm.reset();
  els.factorImportance.value = 3;
  els.factorImpact.value = 3;
  els.factorHorizon.value = "1";
  if (state.activeTab !== "all") {
    els.factorCategory.value = state.activeTab;
  }
  els.submitFactorBtn.textContent = t().addFactorBtn;
  els.cancelEditBtn.classList.add("hidden");
  updateScorePreview();
}

function renderTabs() {
  const dict = t();
  const allTab = `<button type="button" class="tab-btn ${state.activeTab === "all" ? "is-active" : ""}" data-tab="all">${escapeHtml(dict.allFactorsTab(state.factors.length))}</button>`;
  const catTabs = CATEGORY_KEYS.map((key) => {
    const count = state.factors.filter((f) => f.category === key).length;
    const active = state.activeTab === key ? "is-active" : "";
    const label = dict.categories[key].label;
    return `<button type="button" class="tab-btn ${active}" data-tab="${key}">${escapeHtml(label)} (${count})</button>`;
  }).join("");

  els.categoryTabs.innerHTML = allTab + catTabs;

  if (state.activeTab === "all") {
    els.categoryMeta.textContent = dict.allFactorsMeta;
  } else {
    const cat = dict.categories[state.activeTab];
    els.categoryMeta.textContent = cat ? `${cat.label}: ${cat.hint}` : "";
  }
}

function getFilteredFactors() {
  return state.factors
    .filter((f) => state.activeTab === "all" || f.category === state.activeTab)
    .filter((f) => {
      if (state.typeFilter === "opportunity") return calcScore(f) > 0;
      if (state.typeFilter === "threat") return calcScore(f) < 0;
      return true;
    })
    .sort((a, b) => {
      const sa = calcScore(a);
      const sb = calcScore(b);
      if (state.sortBy === "scoreDesc") return sb - sa;
      if (state.sortBy === "scoreAsc") return sa - sb;
      return Math.abs(sb) - Math.abs(sa);
    });
}

function renderFactorsList() {
  const dict = t();
  const list = getFilteredFactors();

  if (!list.length) {
    els.factorsList.innerHTML = `<div class="category-meta">${escapeHtml(dict.emptyList)}</div>`;
    return;
  }

  els.factorsList.innerHTML = list
    .map((f) => {
      const score = calcScore(f);
      const catLabel = dict.categories[f.category]?.label || f.category;
      const horizonLabel = dict.horizons[Number(f.horizonIndex)] || dict.horizons[1];
      const titleText = localizeField(f.title, state.lang);
      const actionText = localizeField(f.action, state.lang);
      const pillClass = score >= 0 ? "score-pos" : "score-neg";

      return `
        <article class="factor-item">
          <div>
            <h4 class="factor-title">${escapeHtml(titleText)}</h4>
            <div class="factor-sub">${escapeHtml(catLabel)} · ${escapeHtml(dict.impShort)} ${f.importance}/5 · ${escapeHtml(dict.impImpactShort)} ${f.impact}/5 · ${escapeHtml(horizonLabel)}</div>
            ${actionText ? `<p class="factor-note">${escapeHtml(actionText)}</p>` : ""}
          </div>
          <div class="factor-right">
            <span class="score-pill ${pillClass}">${formatSigned(score)}</span>
            <button type="button" class="icon-btn" data-edit="${f.id}">${escapeHtml(dict.editBtn)}</button>
            <button type="button" class="icon-btn" data-delete="${f.id}">${escapeHtml(dict.deleteBtn)}</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderMetrics() {
  const dict = t();
  const scores = state.factors.map(calcScore);
  const net = scores.reduce((acc, v) => acc + v, 0);
  const opps = scores.filter((v) => v > 0).length;
  const threats = scores.filter((v) => v < 0).length;
  const maxS = scores.length ? Math.max(...scores) : 0;
  const minS = scores.length ? Math.min(...scores) : 0;

  const maxAbs = Math.max(state.factors.length * 25, 25);
  const indexPct = Math.round(Math.min(100, Math.max(0, ((net + maxAbs) / (2 * maxAbs)) * 100)));

  els.favorabilityIndex.textContent = `${indexPct}%`;
  els.favorabilityCaption.textContent =
    indexPct >= 60 ? dict.favGood : indexPct <= 40 ? dict.favTense : dict.favBalanced;

  els.netScoreValue.textContent = formatSigned(net);
  els.netScoreValue.style.color = net > 0 ? "var(--pos)" : net < 0 ? "var(--neg)" : "var(--text)";
  els.factorsCountCaption.textContent = dict.factorsCount(state.factors.length);
  els.oppThreatRatio.textContent = `${opps} / ${threats}`;
  els.maxMinCaption.textContent = dict.maxMin(formatSigned(maxS), formatSigned(minS));
}

function renderCategoryStatsAndTop() {
  const dict = t();
  const byCat = CATEGORY_KEYS.map((key) => {
    const items = state.factors.filter((f) => f.category === key);
    const sum = items.reduce((acc, f) => acc + calcScore(f), 0);
    return {
      id: key,
      label: dict.categories[key].label,
      sum,
      count: items.length
    };
  });

  els.categoryBreakdown.innerHTML = byCat
    .map(
      (c) => `
      <div class="cat-stat">
        <span>${escapeHtml(c.label)}</span>
        <strong style="color:${c.sum > 0 ? "var(--pos)" : c.sum < 0 ? "var(--neg)" : "var(--text)"}">${formatSigned(c.sum)}</strong>
      </div>
    `
    )
    .join("");

  const topOpps = [...state.factors]
    .filter((f) => calcScore(f) > 0)
    .sort((a, b) => calcScore(b) - calcScore(a))
    .slice(0, 3);

  const topThreats = [...state.factors]
    .filter((f) => calcScore(f) < 0)
    .sort((a, b) => calcScore(a) - calcScore(b))
    .slice(0, 3);

  els.topOpportunities.innerHTML = topOpps.length
    ? topOpps
        .map(
          (f) =>
            `<li><span>${escapeHtml(localizeField(f.title, state.lang))}</span><strong class="score-pos">${formatSigned(calcScore(f))}</strong></li>`
        )
        .join("")
    : `<li><span>${escapeHtml(dict.noOpps)}</span></li>`;

  els.topThreats.innerHTML = topThreats.length
    ? topThreats
        .map(
          (f) =>
            `<li><span>${escapeHtml(localizeField(f.title, state.lang))}</span><strong class="score-neg">${formatSigned(calcScore(f))}</strong></li>`
        )
        .join("")
    : `<li><span>${escapeHtml(dict.noThreats)}</span></li>`;

  return byCat;
}

function drawChart(byCat) {
  const canvas = els.canvas;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(280, Math.floor(rect.width || 400));
  const height = 300;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const isDark = state.theme === "dark";
  const gridColor = isDark ? "rgba(148, 163, 184, 0.2)" : "rgba(15, 23, 42, 0.14)";
  const textColor = isDark ? "#e2e8f0" : "#1e293b";
  const accentColor = isDark ? "#38bdf8" : "#0284c7";
  const fontFamily = 'Inter, "Noto Sans Armenian", sans-serif';

  ctx.clearRect(0, 0, width, height);

  if (state.chartMode === "radar") {
    const cx = width / 2;
    const cy = height / 2 + 6;
    const radius = Math.min(width, height) * 0.33;
    const n = byCat.length;
    const maxRange = Math.max(25, ...byCat.map((c) => Math.abs(c.sum)));

    for (let ring = 1; ring <= 3; ring++) {
      const r = (radius * ring) / 3;
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = gridColor;
      ctx.stroke();
    }

    ctx.beginPath();
    byCat.forEach((c, i) => {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      const norm = Math.max(0.08, (c.sum + maxRange) / (2 * maxRange));
      const r = radius * norm;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = isDark ? "rgba(56, 189, 248, 0.25)" : "rgba(2, 132, 199, 0.18)";
    ctx.fill();
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = textColor;
    ctx.font = `600 11.5px ${fontFamily}`;
    ctx.textAlign = "center";
    byCat.forEach((c, i) => {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      const lx = cx + Math.cos(angle) * (radius + 24);
      const ly = cy + Math.sin(angle) * (radius + 24);
      const shortName = c.label.length > 7 ? `${c.label.slice(0, 6)}.` : c.label;
      ctx.fillText(`${shortName} (${formatSigned(c.sum)})`, lx, ly + 4);
    });
  } else {
    const padLeft = 104;
    const padRight = 24;
    const padTop = 18;
    const rowH = (height - padTop - 16) / byCat.length;
    const midX = padLeft + (width - padLeft - padRight) / 2;
    const halfW = (width - padLeft - padRight) / 2 - 8;
    const maxRange = Math.max(25, ...byCat.map((c) => Math.abs(c.sum)));

    ctx.strokeStyle = gridColor;
    ctx.beginPath();
    ctx.moveTo(midX, padTop - 6);
    ctx.lineTo(midX, height - 12);
    ctx.stroke();

    byCat.forEach((c, idx) => {
      const y = padTop + idx * rowH + rowH * 0.2;
      const barH = Math.max(12, rowH * 0.58);
      const w = (Math.abs(c.sum) / maxRange) * halfW;

      ctx.fillStyle = textColor;
      ctx.font = `12px ${fontFamily}`;
      ctx.textAlign = "right";
      ctx.fillText(c.label.slice(0, 14), padLeft - 10, y + barH * 0.72);

      ctx.fillStyle = c.sum >= 0 ? "#22c55e" : "#f43f5e";
      if (c.sum >= 0) {
        ctx.fillRect(midX, y, w, barH);
      } else {
        ctx.fillRect(midX - w, y, w, barH);
      }
    });
  }
}

function updateSummaryText(byCat) {
  const dict = t();
  const net = state.factors.reduce((acc, f) => acc + calcScore(f), 0);
  const lines = [
    dict.summaryHeader(formatSigned(net), state.factors.length),
    ...byCat.map((c) => `- ${c.label}: ${formatSigned(c.sum)} (${c.count})`)
  ];
  els.summaryPreview.textContent = lines.join("\n");
}

function renderAll(statusMessage) {
  applyThemeAndLang();
  renderTabs();
  renderFactorsList();
  renderMetrics();
  const byCat = renderCategoryStatsAndTop();
  drawChart(byCat);
  updateSummaryText(byCat);
  saveState(statusMessage);
}

function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  els.openInfoBtn.addEventListener("click", openInfoModal);
  els.closeInfoBtn.addEventListener("click", closeInfoModal);
  els.okInfoBtn.addEventListener("click", closeInfoModal);

  els.infoModal.addEventListener("click", (e) => {
    if (e.target === els.infoModal) closeInfoModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !els.infoModal.classList.contains("hidden")) {
      closeInfoModal();
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lang = btn.dataset.lang;
      renderAll();
    });
  });

  els.themeToggleBtn.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    renderAll();
  });

  els.loadDemoBtn.addEventListener("click", () => {
    state.factors = createDemoFactors();
    resetForm();
    renderAll();
  });

  els.resetAllBtn.addEventListener("click", () => {
    state.factors = [];
    resetForm();
    renderAll();
  });

  els.categoryTabs.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-tab]");
    if (!btn) return;
    state.activeTab = btn.dataset.tab;
    if (state.activeTab !== "all" && !state.editingId) {
      els.factorCategory.value = state.activeTab;
    }
    renderAll();
  });

  [els.factorImportance, els.factorImpact, els.factorType].forEach((input) => {
    input.addEventListener("input", updateScorePreview);
    input.addEventListener("change", updateScorePreview);
  });

  els.factorForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleVal = els.factorTitle.value.trim();
    if (!titleVal) return;

    const actionVal = els.factorAction.value.trim();
    const category = els.factorCategory.value;
    const type = Number(els.factorType.value);
    const importance = Number(els.factorImportance.value);
    const impact = Number(els.factorImpact.value);
    const horizonIndex = Number(els.factorHorizon.value);

    if (state.editingId) {
      state.factors = state.factors.map((f) => {
        if (f.id !== state.editingId) return f;
        const nextTitle =
          f.title && typeof f.title === "object"
            ? { ...f.title, [state.lang]: titleVal }
            : titleVal;
        const nextAction =
          f.action && typeof f.action === "object"
            ? { ...f.action, [state.lang]: actionVal }
            : actionVal;
        return {
          ...f,
          category,
          type,
          importance,
          impact,
          horizonIndex,
          title: nextTitle,
          action: nextAction
        };
      });
    } else {
      state.factors.push({
        id: `f-${Date.now()}`,
        category,
        type,
        importance,
        impact,
        horizonIndex,
        title: titleVal,
        action: actionVal
      });
    }

    resetForm();
    renderAll();
  });

  els.cancelEditBtn.addEventListener("click", resetForm);

  els.factorsList.addEventListener("click", (e) => {
    const editId = e.target.dataset.edit;
    const delId = e.target.dataset.delete;

    if (editId) {
      const target = state.factors.find((f) => f.id === editId);
      if (!target) return;
      state.editingId = target.id;
      els.factorTitle.value = localizeField(target.title, state.lang);
      els.factorCategory.value = target.category;
      els.factorType.value = String(target.type);
      els.factorImportance.value = target.importance;
      els.factorImpact.value = target.impact;
      els.factorHorizon.value = String(target.horizonIndex ?? 1);
      els.factorAction.value = localizeField(target.action, state.lang);
      els.submitFactorBtn.textContent = t().saveChangesBtn;
      els.cancelEditBtn.classList.remove("hidden");
      updateScorePreview();
    }

    if (delId) {
      state.factors = state.factors.filter((f) => f.id !== delId);
      if (state.editingId === delId) resetForm();
      renderAll();
    }
  });

  els.typeFilter.addEventListener("change", () => {
    state.typeFilter = els.typeFilter.value;
    renderFactorsList();
  });

  els.sortSelect.addEventListener("change", () => {
    state.sortBy = els.sortSelect.value;
    renderFactorsList();
  });

  document.querySelectorAll("[data-chart-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.chartMode = btn.dataset.chartMode;
      document.querySelectorAll("[data-chart-mode]").forEach((b) => {
        b.classList.toggle("is-active", b === btn);
      });
      renderAll();
    });
  });

  els.copySummaryBtn.addEventListener("click", async () => {
    const dict = t();
    try {
      await navigator.clipboard.writeText(els.summaryPreview.textContent);
      els.copySummaryBtn.textContent = dict.copiedBtn;
      setTimeout(() => {
        els.copySummaryBtn.textContent = dict.copyTextBtn;
      }, 1500);
    } catch {
      els.copySummaryBtn.textContent = dict.copyErrBtn;
    }
  });

  els.exportCsvBtn.addEventListener("click", () => {
    const dict = t();
    const rows = [
      dict.csvHeaders.join(";"),
      ...state.factors.map((f) => {
        const cat = dict.categories[f.category]?.label || f.category;
        const typeLabel = calcScore(f) >= 0 ? dict.oppLabel : dict.threatLabel;
        const horizonLabel = dict.horizons[Number(f.horizonIndex)] || dict.horizons[1];
        const titleText = localizeField(f.title, state.lang);
        const actionText = localizeField(f.action, state.lang);
        return [cat, titleText, typeLabel, f.importance, f.impact, calcScore(f), horizonLabel, actionText]
          .map((cell) => `"${String(cell).replaceAll('"', '""')}"`)
          .join(";");
      })
    ];
    downloadFile("pestle-analysis.csv", `\uFEFF${rows.join("\n")}`, "text/csv;charset=utf-8;");
  });

  els.exportJsonBtn.addEventListener("click", () => {
    downloadFile("pestle-analysis.json", JSON.stringify(state.factors, null, 2), "application/json");
  });

  window.addEventListener("resize", () => {
    const dict = t();
    const byCat = CATEGORY_KEYS.map((key) => ({
      id: key,
      label: dict.categories[key].label,
      sum: state.factors.filter((f) => f.category === key).reduce((acc, f) => acc + calcScore(f), 0)
    }));
    drawChart(byCat);
  });
}

loadState();
updateScorePreview();
bindEvents();
renderAll();