export interface NewsArticle {
  id: number;
  slug: string;
  titleKey: string;
  titleEn: string;
  titleUk: string;
  titleDe: string;
  excerptEn: string;
  excerptUk: string;
  excerptDe: string;
  contentEn: string;
  contentUk: string;
  contentDe: string;
  categoryKey: string;
  date: string;
  readTime: number;
  image: string;
  featured: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "aquavision-artificial-intelligence-for-aquaculture",
    titleKey: "aquavision",
    titleEn: "AquaVision: Artificial Intelligence for a New Quality of Aquaculture in Ukraine",
    titleUk: "AquaVision: штучний інтелект для нової якості аквакультури в Україні",
    titleDe: "AquaVision: Künstliche Intelligenz für eine neue Qualität der Aquakultur in der Ukraine",
    excerptEn: "Global aquaculture stands on the brink of profound changes. We are developing the AquaVision project - a computer vision and behavioral analytics system for shrimp and fish that represents the future of data-driven aquaculture.",
    excerptUk: "Світова аквакультура стоїть на порозі глибоких змін. Ми розпочали розробку проєкту AquaVision — системи комп'ютерного зору та поведінкової аналітики для креветок і риби.",
    excerptDe: "Die globale Aquakultur steht an der Schwelle zu tiefgreifenden Veränderungen. Wir entwickeln das AquaVision-Projekt - ein Computer-Vision- und Verhaltensanalysesystem für Garnelen und Fische.",
    contentEn: `
      <p>Global aquaculture stands on the brink of profound changes. Growing demand for protein products, climate challenges, environmental constraints, and the need for stable production are forcing the industry to seek new, more precise and responsible approaches. One such approach is the implementation of artificial intelligence in aquaculture system management.</p>

      <p>At Neusatz Aqua, we believe that the future of aquaculture lies in data, automation, and deep understanding of biological processes. That's why we have begun developing the AquaVision project — a computer vision and behavioral analytics system for shrimp and fish.</p>

      <h3>Why Behavior is the Key to Effective Aquaculture</h3>
      <p>In traditional systems, most management decisions are based on indirect indicators: water quality, average growth, feed consumption. However, animal behavior is the most sensitive indicator of their physiological state.</p>
      <p>Changes in movement speed, body posture, interactions between individuals, reactions to feed or light often signal:</p>
      <ul>
        <li>Stress or deteriorating conditions</li>
        <li>Onset of diseases</li>
        <li>Spawning readiness</li>
        <li>Aggressive or atypical behavior</li>
      </ul>
      <p>AquaVision allows detecting these signals in real-time, without constant staff presence and without subjective assessments.</p>

      <h3>What is AquaVision</h3>
      <p>AquaVision is an intelligent platform that combines:</p>
      <ul>
        <li>High-resolution video cameras</li>
        <li>Computer vision algorithms</li>
        <li>Machine learning</li>
        <li>Behavioral pattern analysis</li>
        <li>Correlation with environmental parameters</li>
      </ul>
      <p>The system learns to recognize typical and atypical behavior patterns of shrimp and fish, as well as detect events critical for production: stress, activity changes, growth anomalies, or signs of reproduction.</p>
      <p>The first research subject is Litopenaeus vannamei (Pacific white shrimp), with subsequent scaling to other species, including tilapia and sea bass.</p>

      <h3>Why We Are Developing AquaVision in Ukraine</h3>
      <p>Ukraine today is a country not only of challenges but also of unique opportunities for technological development.</p>
      <p>First, Ukrainian aquaculture is at a stage of active formation. This means fewer outdated solutions and more space for implementing modern technologies at a high level from the start.</p>
      <p>Second, the war has forced Ukrainian businesses to be maximally efficient, adaptive, and technologically independent. Automation, reducing operational risks, and precise resource management have become matters of survival.</p>
      <p>Third, Ukraine has a strong engineering and IT ecosystem capable of creating world-class solutions. The combination of biological expertise with engineering and artificial intelligence opens the path to new export-oriented technologies.</p>
      <p>Neusatz Aqua sees its role in integrating Ukraine into the European and global aquaculture technology space, not as a consumer of solutions, but as their developer.</p>

      <h3>European Dimension and Horizon Europe</h3>
      <p>The AquaVision project was submitted for funding under the Horizon Europe program, in a special competition aimed at supporting Ukrainian deep-tech startups and innovative companies.</p>
      <p>This participation for us is not only an opportunity to obtain funding, but also:</p>
      <ul>
        <li>Integration into the European research ecosystem</li>
        <li>Working according to high standards of transparency and ethics</li>
        <li>Collaboration with partners from EU countries</li>
        <li>Creating technology compatible with European approaches to sustainable development and animal welfare</li>
      </ul>
      <p>AquaVision fully aligns with the goals of the European Green Deal, Farm-to-Fork strategy, and Blue Economy development.</p>

      <h3>Practical Benefits for Producers</h3>
      <p>Implementing AI-based behavioral analytics provides real advantages:</p>
      <ul>
        <li>Early problem detection instead of reacting to consequences</li>
        <li>Reduced mortality and losses</li>
        <li>Optimization of feeding and energy consumption</li>
        <li>Improved incubation results</li>
        <li>Enhanced animal welfare</li>
        <li>Accumulation of unique data for further optimization</li>
      </ul>

      <h3>Looking to the Future</h3>
      <p>AquaVision is just the first step. In the future, we envision development of:</p>
      <ul>
        <li>Digital twins of aquaculture systems</li>
        <li>Prediction of reproductive cycles</li>
        <li>Automated recommendations for farm management</li>
        <li>Integration with breeding and genetic programs</li>
      </ul>
      <p>We believe that high-tech aquaculture can and should develop in Ukraine, even in difficult times. Such projects shape the economy of the future — resilient, innovative, and integrated into the global context.</p>
    `,
    contentUk: `
      <p>Світова аквакультура стоїть на порозі глибоких змін. Зростаючий попит на білкову продукцію, кліматичні виклики, екологічні обмеження та потреба у стабільному виробництві змушують галузь шукати нові, більш точні й відповідальні підходи. Одним із таких підходів є впровадження штучного інтелекту в управління аквакультурними системами.</p>

      <p>У Neusatz Aqua ми переконані, що майбутнє аквакультури — за даними, автоматизацією та глибоким розумінням біологічних процесів. Саме тому ми розпочали розробку проєкту AquaVision — системи комп'ютерного зору та поведінкової аналітики для креветок і риби.</p>

      <h3>Чому поведінка — ключ до ефективної аквакультури</h3>
      <p>У традиційних системах більшість управлінських рішень ґрунтується на непрямих показниках: якості води, середньому рості, споживанні корму. Проте саме поведінка тварин є найчутливішим індикатором їхнього фізіологічного стану.</p>
      <p>Зміни у швидкості руху, пози тіла, взаємодії між особинами, реакції на корм або світло часто сигналізують про:</p>
      <ul>
        <li>стрес або погіршення умов</li>
        <li>початок захворювань</li>
        <li>готовність до нересту</li>
        <li>агресивну або атипову поведінку</li>
      </ul>
      <p>AquaVision дозволяє виявляти ці сигнали в реальному часі, без постійної присутності персоналу та без суб'єктивних оцінок.</p>

      <h3>Що таке AquaVision</h3>
      <p>AquaVision — це інтелектуальна платформа, яка поєднує:</p>
      <ul>
        <li>відеокамери високої роздільної здатності</li>
        <li>алгоритми комп'ютерного зору</li>
        <li>машинне навчання</li>
        <li>аналіз поведінкових патернів</li>
        <li>кореляцію з параметрами середовища</li>
      </ul>
      <p>Система навчається розпізнавати типові й нетипові моделі поведінки креветок та риби, а також виявляти події, які мають критичне значення для виробництва: стрес, зміни активності, аномалії росту або ознаки розмноження.</p>
      <p>Першим об'єктом дослідження є Litopenaeus vannamei (тихоокеанська біла креветка), з подальшим масштабуванням на інші види, зокрема тілапію та морського окуня.</p>

      <h3>Чому ми розвиваємо AquaVision саме в Україні</h3>
      <p>Україна сьогодні — це країна не лише викликів, а й унікальних можливостей для технологічного розвитку.</p>
      <p>По-перше, українська аквакультура знаходиться на етапі активного формування. Це означає менше застарілих рішень і більше простору для впровадження сучасних технологій одразу на високому рівні.</p>
      <p>По-друге, війна змусила український бізнес бути максимально ефективним, адаптивним і технологічно незалежним. Автоматизація, зниження операційних ризиків і точне управління ресурсами стали питанням виживання.</p>
      <p>По-третє, Україна має сильну інженерну та ІТ-екосистему, здатну створювати рішення світового рівня. Поєднання біологічної експертизи з інженерією та штучним інтелектом відкриває шлях до нових експортно-орієнтованих технологій.</p>
      <p>Neusatz Aqua бачить свою роль у тому, щоб інтегрувати Україну в європейський та глобальний технологічний простір аквакультури, не як споживача рішень, а як їхнього розробника.</p>

      <h3>Європейський вимір та Horizon Europe</h3>
      <p>Проєкт AquaVision був поданий на фінансування в межах програми Horizon Europe, у спеціальному конкурсі, спрямованому на підтримку українських deep-tech стартапів та інноваційних компаній.</p>
      <p>Ця участь для нас — не лише можливість отримати фінансування, а й:</p>
      <ul>
        <li>інтеграція в європейську дослідницьку екосистему</li>
        <li>робота за високими стандартами прозорості та етики</li>
        <li>співпраця з партнерами з країн ЄС</li>
        <li>створення технології, сумісної з європейськими підходами до сталого розвитку та добробуту тварин</li>
      </ul>
      <p>AquaVision повністю відповідає цілям Європейського зеленого курсу, стратегії Farm-to-Fork та розвитку Blue Economy.</p>

      <h3>Практичні переваги для виробників</h3>
      <p>Впровадження поведінкової аналітики на базі ШІ дає реальні переваги:</p>
      <ul>
        <li>раннє виявлення проблем замість реагування на наслідки</li>
        <li>зниження смертності та втрат</li>
        <li>оптимізація годівлі та енергоспоживання</li>
        <li>покращення результатів інкубації</li>
        <li>підвищення добробуту тварин</li>
        <li>накопичення унікальних даних для подальшої оптимізації</li>
      </ul>

      <h3>Погляд у майбутнє</h3>
      <p>AquaVision — це лише перший крок. У перспективі ми бачимо розвиток:</p>
      <ul>
        <li>цифрових двійників аквакультурних систем</li>
        <li>прогнозування репродуктивних циклів</li>
        <li>автоматизованих рекомендацій для управління фермою</li>
        <li>інтеграції з селекційними та генетичними програмами</li>
      </ul>
      <p>Ми віримо, що високотехнологічна аквакультура може і повинна розвиватися в Україні, навіть у складні часи. Саме такі проєкти формують економіку майбутнього — стійку, інноваційну та інтегровану у світовий контекст.</p>
    `,
    contentDe: `
      <p>Die globale Aquakultur steht an der Schwelle zu tiefgreifenden Veränderungen. Die wachsende Nachfrage nach Proteinprodukten, klimatische Herausforderungen, Umweltbeschränkungen und der Bedarf an stabiler Produktion zwingen die Branche, neue, präzisere und verantwortungsvollere Ansätze zu suchen. Ein solcher Ansatz ist die Implementierung von künstlicher Intelligenz im Aquakultur-Systemmanagement.</p>

      <p>Bei Neusatz Aqua sind wir überzeugt, dass die Zukunft der Aquakultur in Daten, Automatisierung und tiefem Verständnis biologischer Prozesse liegt. Deshalb haben wir mit der Entwicklung des AquaVision-Projekts begonnen — eines Computer-Vision- und Verhaltensanalysesystems für Garnelen und Fische.</p>

      <h3>Warum Verhalten der Schlüssel zu effektiver Aquakultur ist</h3>
      <p>In traditionellen Systemen basieren die meisten Managemententscheidungen auf indirekten Indikatoren: Wasserqualität, durchschnittliches Wachstum, Futterverbrauch. Jedoch ist das Tierverhalten der empfindlichste Indikator für ihren physiologischen Zustand.</p>
      <p>Veränderungen in der Bewegungsgeschwindigkeit, Körperhaltung, Interaktionen zwischen Individuen, Reaktionen auf Futter oder Licht signalisieren oft:</p>
      <ul>
        <li>Stress oder sich verschlechternde Bedingungen</li>
        <li>Beginn von Krankheiten</li>
        <li>Laichbereitschaft</li>
        <li>Aggressives oder atypisches Verhalten</li>
      </ul>
      <p>AquaVision ermöglicht die Erkennung dieser Signale in Echtzeit, ohne ständige Personalanwesenheit und ohne subjektive Bewertungen.</p>

      <h3>Was ist AquaVision</h3>
      <p>AquaVision ist eine intelligente Plattform, die kombiniert:</p>
      <ul>
        <li>Hochauflösende Videokameras</li>
        <li>Computer-Vision-Algorithmen</li>
        <li>Maschinelles Lernen</li>
        <li>Analyse von Verhaltensmustern</li>
        <li>Korrelation mit Umgebungsparametern</li>
      </ul>
      <p>Das System lernt, typische und atypische Verhaltensmuster von Garnelen und Fischen zu erkennen sowie für die Produktion kritische Ereignisse zu erkennen: Stress, Aktivitätsänderungen, Wachstumsanomalien oder Anzeichen von Reproduktion.</p>
      <p>Das erste Forschungsobjekt ist Litopenaeus vannamei (Pazifische Weiße Garnele), mit anschließender Skalierung auf andere Arten, einschließlich Tilapia und Wolfsbarsch.</p>

      <h3>Warum wir AquaVision in der Ukraine entwickeln</h3>
      <p>Die Ukraine ist heute ein Land nicht nur der Herausforderungen, sondern auch einzigartiger Möglichkeiten für technologische Entwicklung.</p>
      <p>Erstens befindet sich die ukrainische Aquakultur in einer Phase aktiver Formierung. Dies bedeutet weniger veraltete Lösungen und mehr Raum für die Implementierung moderner Technologien auf hohem Niveau von Anfang an.</p>
      <p>Zweitens hat der Krieg ukrainische Unternehmen gezwungen, maximal effizient, anpassungsfähig und technologisch unabhängig zu sein. Automatisierung, Reduzierung operativer Risiken und präzises Ressourcenmanagement sind zu Überlebensfragen geworden.</p>
      <p>Drittens verfügt die Ukraine über ein starkes Ingenieur- und IT-Ökosystem, das in der Lage ist, Lösungen von Weltklasse zu schaffen. Die Kombination von biologischer Expertise mit Ingenieurwesen und künstlicher Intelligenz öffnet den Weg zu neuen exportorientierten Technologien.</p>
      <p>Neusatz Aqua sieht seine Rolle darin, die Ukraine in den europäischen und globalen Technologieraum der Aquakultur zu integrieren, nicht als Verbraucher von Lösungen, sondern als deren Entwickler.</p>

      <h3>Europäische Dimension und Horizon Europe</h3>
      <p>Das AquaVision-Projekt wurde im Rahmen des Horizon Europe-Programms zur Finanzierung eingereicht, in einem speziellen Wettbewerb zur Unterstützung ukrainischer Deep-Tech-Startups und innovativer Unternehmen.</p>
      <p>Diese Teilnahme ist für uns nicht nur eine Möglichkeit zur Finanzierung, sondern auch:</p>
      <ul>
        <li>Integration in das europäische Forschungsökosystem</li>
        <li>Arbeit nach hohen Standards von Transparenz und Ethik</li>
        <li>Zusammenarbeit mit Partnern aus EU-Ländern</li>
        <li>Schaffung von Technologie, die mit europäischen Ansätzen zu nachhaltiger Entwicklung und Tierwohl kompatibel ist</li>
      </ul>
      <p>AquaVision entspricht vollständig den Zielen des Europäischen Green Deal, der Farm-to-Fork-Strategie und der Blue Economy-Entwicklung.</p>

      <h3>Praktische Vorteile für Produzenten</h3>
      <p>Die Implementierung KI-basierter Verhaltensanalytik bietet echte Vorteile:</p>
      <ul>
        <li>Früherkennung von Problemen statt Reaktion auf Folgen</li>
        <li>Reduzierte Sterblichkeit und Verluste</li>
        <li>Optimierung von Fütterung und Energieverbrauch</li>
        <li>Verbesserte Inkubationsergebnisse</li>
        <li>Erhöhtes Tierwohl</li>
        <li>Akkumulation einzigartiger Daten für weitere Optimierung</li>
      </ul>

      <h3>Blick in die Zukunft</h3>
      <p>AquaVision ist nur der erste Schritt. In Zukunft sehen wir die Entwicklung von:</p>
      <ul>
        <li>Digitalen Zwillingen von Aquakultursystemen</li>
        <li>Vorhersage von Reproduktionszyklen</li>
        <li>Automatisierten Empfehlungen für das Farm-Management</li>
        <li>Integration mit Zucht- und Genetikprogrammen</li>
      </ul>
      <p>Wir glauben, dass sich Hightech-Aquakultur in der Ukraine entwickeln kann und sollte, auch in schwierigen Zeiten. Solche Projekte prägen die Wirtschaft der Zukunft — widerstandsfähig, innovativ und in den globalen Kontext integriert.</p>
    `,
    categoryKey: "research",
    date: "2025-11-01",
    readTime: 8,
    image: "/news-aquavision.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "ai-powered-monitoring-system-deployed",
    titleKey: "ai-monitoring",
    titleEn: "AI-Powered Monitoring System Successfully Deployed",
    titleUk: "Система моніторингу на базі ШІ успішно впроваджена",
    titleDe: "KI-gestütztes Überwachungssystem erfolgreich eingesetzt",
    excerptEn: "Our state-of-the-art computer vision system is now operational, providing 24/7 behavioral monitoring of broodstock and larvae. Early results show a 15% improvement in welfare metrics.",
    excerptUk: "Наша найсучасніша система комп'ютерного зору тепер працює, забезпечуючи цілодобовий моніторинг поведінки маточного стада та личинок. Ранні результати показують 15% покращення показників добробуту.",
    excerptDe: "Unser hochmodernes Computer-Vision-System ist jetzt in Betrieb und bietet eine 24/7-Verhaltensüberwachung von Brutbeständen und Larven. Erste Ergebnisse zeigen eine 15%ige Verbesserung der Wohlfahrtsmetriken.",
    contentEn: `
      <p>We are thrilled to announce the successful deployment of our AI-powered monitoring system at the Neusatz Aqua hatchery facility in Progresivka, Mykolaiv region.</p>

      <h3>A Breakthrough in Aquaculture Technology</h3>
      <p>Our state-of-the-art computer vision system represents a significant leap forward in aquaculture monitoring technology. Using advanced neural networks trained on thousands of hours of shrimp behavior data, the system can now:</p>
      <ul>
        <li>Detect stress indicators in real-time</li>
        <li>Monitor spawning events automatically</li>
        <li>Track feeding behavior patterns</li>
        <li>Identify health anomalies before they become critical</li>
      </ul>

      <h3>Early Results</h3>
      <p>In the first month of operation, we've observed a 15% improvement in welfare metrics across our broodstock population. The system's 24/7 monitoring capability has allowed our team to respond to potential issues within minutes rather than hours.</p>

      <h3>What's Next</h3>
      <p>We're now working on integrating the AI system with our digital twin technology, which will enable predictive modeling of hatchery conditions and further optimize our breeding protocols.</p>
    `,
    contentUk: `
      <p>Ми раді повідомити про успішне впровадження нашої системи моніторингу на базі штучного інтелекту на потужностях інкубатору Neusatz Aqua в Прогресівці, Миколаївська область.</p>

      <h3>Прорив у технології аквакультури</h3>
      <p>Наша найсучасніша система комп'ютерного зору являє собою значний крок вперед у технології моніторингу аквакультури. Використовуючи передові нейронні мережі, навчені на тисячах годин даних про поведінку креветок, система тепер може:</p>
      <ul>
        <li>Виявляти індикатори стресу в реальному часі</li>
        <li>Автоматично відстежувати нерестові події</li>
        <li>Відстежувати моделі харчової поведінки</li>
        <li>Ідентифікувати аномалії здоров'я до того, як вони стануть критичними</li>
      </ul>

      <h3>Ранні результати</h3>
      <p>За перший місяць роботи ми спостерігали 15% покращення показників добробуту серед нашого маточного стада. Можливість цілодобового моніторингу системи дозволила нашій команді реагувати на потенційні проблеми за лічені хвилини, а не години.</p>

      <h3>Що далі</h3>
      <p>Зараз ми працюємо над інтеграцією системи ШІ з нашою технологією цифрового двійника, що дозволить прогнозне моделювання умов інкубатору та подальшу оптимізацію наших протоколів розведення.</p>
    `,
    contentDe: `
      <p>Wir freuen uns, die erfolgreiche Implementierung unseres KI-gestützten Überwachungssystems in der Neusatz Aqua Brüterei in Progresivka, Region Mykolajiw, bekannt zu geben.</p>

      <h3>Ein Durchbruch in der Aquakultur-Technologie</h3>
      <p>Unser hochmodernes Computer-Vision-System stellt einen bedeutenden Fortschritt in der Aquakultur-Überwachungstechnologie dar. Mit fortschrittlichen neuronalen Netzwerken, die auf Tausenden von Stunden Garnelenverhaltens-Daten trainiert wurden, kann das System jetzt:</p>
      <ul>
        <li>Stressindikatoren in Echtzeit erkennen</li>
        <li>Laichereignisse automatisch überwachen</li>
        <li>Fressverhaltensmuster verfolgen</li>
        <li>Gesundheitsanomalien identifizieren, bevor sie kritisch werden</li>
      </ul>

      <h3>Frühe Ergebnisse</h3>
      <p>Im ersten Betriebsmonat haben wir eine 15%ige Verbesserung der Wohlfahrtsmetriken bei unserer Brutbestandspopulation beobachtet. Die 24/7-Überwachungsfähigkeit des Systems hat es unserem Team ermöglicht, auf potenzielle Probleme innerhalb von Minuten statt Stunden zu reagieren.</p>

      <h3>Was kommt als Nächstes</h3>
      <p>Wir arbeiten jetzt daran, das KI-System mit unserer Digital-Twin-Technologie zu integrieren, was eine prädiktive Modellierung der Brütereibedingungen ermöglichen und unsere Zuchtprotokolle weiter optimieren wird.</p>
    `,
    categoryKey: "research",
    date: "2025-10-15",
    readTime: 5,
    image: "/news-ai-monitoring.jpg",
    featured: true,
  },
  {
    id: 3,
    slug: "hatchery-construction-reaches-major-milestone",
    titleKey: "construction-milestone",
    titleEn: "Hatchery Construction Reaches Major Milestone",
    titleUk: "Будівництво інкубатору досягло важливої віхи",
    titleDe: "Brüterei-Bau erreicht wichtigen Meilenstein",
    excerptEn: "Phase 2 of our facility construction is complete, with advanced water treatment systems and larval rearing tanks now fully operational. We're on track for first postlarvae production in Q1 2026.",
    excerptUk: "Друга фаза будівництва нашого об'єкту завершена, сучасні системи очищення води та резервуари для вирощування личинок тепер повністю функціонують. Ми на шляху до першого виробництва постличинок у Q1 2026.",
    excerptDe: "Phase 2 unseres Anlagenbaus ist abgeschlossen, mit fortschrittlichen Wasseraufbereitungssystemen und Larvenaufzuchtbecken, die jetzt voll funktionsfähig sind. Wir sind auf Kurs für die erste Postlarven-Produktion im Q1 2026.",
    contentEn: `
      <p>We are proud to announce the completion of Phase 2 construction at our Neusatz Aqua hatchery facility, marking a significant milestone in our journey to become Ukraine's premier Vannamei shrimp hatchery.</p>

      <h3>Completed Infrastructure</h3>
      <p>The second phase of construction has delivered several critical components of our hatchery infrastructure:</p>
      <ul>
        <li>Advanced water treatment and recirculation systems</li>
        <li>State-of-the-art larval rearing tanks with precise environmental controls</li>
        <li>Upgraded biosecurity facilities including multi-stage decontamination zones</li>
        <li>Expanded AI monitoring coverage throughout the facility</li>
      </ul>

      <h3>Sustainability Features</h3>
      <p>Our new water treatment systems feature industry-leading recirculation technology, reducing water consumption by up to 90% compared to traditional flow-through systems. This aligns with our commitment to sustainable aquaculture practices.</p>

      <h3>Timeline</h3>
      <p>With Phase 2 complete, we remain on schedule for first postlarvae production in Q1 2026. Phase 3 construction, focusing on expanded broodstock facilities, will commence in early 2026.</p>
    `,
    contentUk: `
      <p>Ми з гордістю повідомляємо про завершення другої фази будівництва нашого інкубатору Neusatz Aqua, що знаменує важливу віху на нашому шляху до статусу провідного українського інкубатору креветок Ваннамей.</p>

      <h3>Завершена інфраструктура</h3>
      <p>Друга фаза будівництва забезпечила кілька критичних компонентів інфраструктури нашого інкубатору:</p>
      <ul>
        <li>Сучасні системи очищення та рециркуляції води</li>
        <li>Найсучасніші резервуари для вирощування личинок з точним контролем середовища</li>
        <li>Оновлені біобезпекові об'єкти, включаючи багатоступеневі зони знезараження</li>
        <li>Розширене покриття моніторингу ШІ по всьому об'єкту</li>
      </ul>

      <h3>Особливості сталості</h3>
      <p>Наші нові системи очищення води оснащені провідною в галузі технологією рециркуляції, що зменшує споживання води до 90% порівняно з традиційними проточними системами. Це відповідає нашій відданості практикам сталої аквакультури.</p>

      <h3>Часова шкала</h3>
      <p>Із завершенням другої фази ми залишаємося за графіком для першого виробництва постличинок у Q1 2026. Будівництво третьої фази, зосереджене на розширенні об'єктів для маточного стада, розпочнеться на початку 2026 року.</p>
    `,
    contentDe: `
      <p>Wir sind stolz, den Abschluss der Phase 2 des Baus unserer Neusatz Aqua Brüterei bekannt zu geben, was einen bedeutenden Meilenstein auf unserem Weg zur führenden Vannamei-Garnelen-Brüterei der Ukraine markiert.</p>

      <h3>Fertiggestellte Infrastruktur</h3>
      <p>Die zweite Bauphase hat mehrere kritische Komponenten unserer Brüterei-Infrastruktur geliefert:</p>
      <ul>
        <li>Fortschrittliche Wasseraufbereitungs- und Rezirkulationssysteme</li>
        <li>Hochmoderne Larvenaufzuchtbecken mit präziser Umgebungskontrolle</li>
        <li>Aufgerüstete Biosicherheitseinrichtungen einschließlich mehrstufiger Dekontaminationszonen</li>
        <li>Erweiterte KI-Überwachungsabdeckung in der gesamten Anlage</li>
      </ul>

      <h3>Nachhaltigkeitsmerkmale</h3>
      <p>Unsere neuen Wasseraufbereitungssysteme verfügen über branchenführende Rezirkulationstechnologie, die den Wasserverbrauch im Vergleich zu traditionellen Durchflusssystemen um bis zu 90% reduziert. Dies entspricht unserem Engagement für nachhaltige Aquakulturpraktiken.</p>

      <h3>Zeitplan</h3>
      <p>Mit dem Abschluss von Phase 2 bleiben wir im Zeitplan für die erste Postlarven-Produktion im Q1 2026. Der Bau von Phase 3, der sich auf erweiterte Brutbestandseinrichtungen konzentriert, wird Anfang 2026 beginnen.</p>
    `,
    categoryKey: "facility",
    date: "2025-10-08",
    readTime: 4,
    image: "/news-construction.jpg",
    featured: false,
  },
  {
    id: 4,
    slug: "global-marine-research-network-joins-alliance",
    titleKey: "marine-research",
    titleEn: "Global Marine Research Network Joins Our Alliance",
    titleUk: "Глобальна мережа морських досліджень приєднується до нашого альянсу",
    titleDe: "Globales Meeresforschungsnetzwerk tritt unserem Bündnis bei",
    excerptEn: "We welcome the Global Marine Research Network as a collaborator, expanding our access to shared field data and marine science expertise for shrimp welfare studies.",
    excerptUk: "Ми вітаємо Глобальну мережу морських досліджень як співробітника, розширюючи наш доступ до спільних польових даних та експертизи морських наук для досліджень добробуту креветок.",
    excerptDe: "Wir begrüßen das Globale Meeresforschungsnetzwerk als Kooperationspartner und erweitern damit unseren Zugang zu gemeinsamen Felddaten und meereswissenschaftlicher Expertise für Garnelen-Wohlfahrtsstudien.",
    contentEn: `
      <p>Neusatz Aqua is excited to announce a new research collaboration with the Global Marine Research Network, a prestigious international consortium of marine science institutions.</p>

      <h3>Partnership Benefits</h3>
      <p>This collaboration will provide Neusatz Aqua with:</p>
      <ul>
        <li>Access to shared field data from marine research stations worldwide</li>
        <li>Collaboration opportunities with leading marine biologists and aquaculture scientists</li>
        <li>Joint research projects on shrimp welfare and sustainable breeding practices</li>
        <li>Knowledge exchange programs for our technical staff</li>
      </ul>

      <h3>Research Focus</h3>
      <p>Our initial joint research will focus on understanding the behavioral patterns of Vannamei shrimp in controlled environments, with particular emphasis on stress reduction and optimal breeding conditions.</p>

      <h3>Looking Forward</h3>
      <p>This partnership strengthens our position as a leader in science-driven aquaculture and reinforces our commitment to continuous innovation in shrimp breeding technology.</p>
    `,
    contentUk: `
      <p>Neusatz Aqua з радістю повідомляє про нову дослідницьку співпрацю з Глобальною мережею морських досліджень, престижним міжнародним консорціумом установ морських наук.</p>

      <h3>Переваги партнерства</h3>
      <p>Ця співпраця надасть Neusatz Aqua:</p>
      <ul>
        <li>Доступ до спільних польових даних з морських дослідницьких станцій по всьому світу</li>
        <li>Можливості співпраці з провідними морськими біологами та вченими аквакультури</li>
        <li>Спільні дослідницькі проєкти з добробуту креветок та практик сталого розведення</li>
        <li>Програми обміну знаннями для нашого технічного персоналу</li>
      </ul>

      <h3>Фокус дослідження</h3>
      <p>Наше початкове спільне дослідження буде зосереджене на розумінні поведінкових моделей креветок Ваннамей у контрольованих середовищах, з особливим акцентом на зниженні стресу та оптимальних умовах розведення.</p>

      <h3>Погляд у майбутнє</h3>
      <p>Це партнерство зміцнює нашу позицію лідера в науково-орієнтованій аквакультурі та підкріплює нашу відданість безперервним інноваціям у технології розведення креветок.</p>
    `,
    contentDe: `
      <p>Neusatz Aqua freut sich, eine neue Forschungskooperation mit dem Globalen Meeresforschungsnetzwerk bekannt zu geben, einem renommierten internationalen Konsortium von Meereswissenschaftsinstituten.</p>

      <h3>Vorteile der Partnerschaft</h3>
      <p>Diese Zusammenarbeit wird Neusatz Aqua Folgendes bieten:</p>
      <ul>
        <li>Zugang zu gemeinsamen Felddaten von Meeresforschungsstationen weltweit</li>
        <li>Kooperationsmöglichkeiten mit führenden Meeresbiologen und Aquakulturwissenschaftlern</li>
        <li>Gemeinsame Forschungsprojekte zum Garnelen-Wohlfahrt und nachhaltige Zuchtpraktiken</li>
        <li>Wissensaustauschprogramme für unser technisches Personal</li>
      </ul>

      <h3>Forschungsschwerpunkt</h3>
      <p>Unsere erste gemeinsame Forschung wird sich auf das Verständnis der Verhaltensmuster von Vannamei-Garnelen in kontrollierten Umgebungen konzentrieren, mit besonderem Schwerpunkt auf Stressreduktion und optimalen Zuchtbedingungen.</p>

      <h3>Blick in die Zukunft</h3>
      <p>Diese Partnerschaft stärkt unsere Position als Marktführer in der wissenschaftsorientierten Aquakultur und unterstreicht unser Engagement für kontinuierliche Innovation in der Garnelenzuchttechnologie.</p>
    `,
    categoryKey: "research",
    date: "2025-09-28",
    readTime: 3,
    image: "/news-marine-research.jpg",
    featured: false,
  },
  {
    id: 5,
    slug: "local-employment-initiative-creates-25-new-jobs",
    titleKey: "local-jobs",
    titleEn: "Local Employment Initiative Creates 25 New Jobs",
    titleUk: "Ініціатива місцевого працевлаштування створює 25 нових робочих місць",
    titleDe: "Lokale Beschäftigungsinitiative schafft 25 neue Arbeitsplätze",
    excerptEn: "Our commitment to community prosperity continues with the creation of 25 new positions in the Mykolaiv region. We're offering competitive wages, training programs, and career development opportunities.",
    excerptUk: "Наша відданість процвітанню громади продовжується зі створенням 25 нових посад у Миколаївській області. Ми пропонуємо конкурентну заробітну плату, програми навчання та можливості кар'єрного розвитку.",
    excerptDe: "Unser Engagement für den Wohlstand der Gemeinschaft setzt sich mit der Schaffung von 25 neuen Stellen in der Region Mykolajiw fort. Wir bieten wettbewerbsfähige Löhne, Schulungsprogramme und Karriereentwicklungsmöglichkeiten.",
    contentEn: `
      <p>Neusatz Aqua is proud to announce the creation of 25 new employment positions as part of our ongoing commitment to community development in the Mykolaiv region.</p>

      <h3>New Positions</h3>
      <p>The new roles span various departments within our hatchery operation:</p>
      <ul>
        <li>10 positions in hatchery operations and maintenance</li>
        <li>5 positions in quality control and biosecurity</li>
        <li>5 positions in technical support and IT</li>
        <li>3 positions in administration and logistics</li>
        <li>2 positions in research and development</li>
      </ul>

      <h3>Competitive Benefits</h3>
      <p>All positions offer wages above the regional average, comprehensive health benefits, and access to our professional development programs. We believe in investing in our people as the foundation of our success.</p>

      <h3>Training Programs</h3>
      <p>New employees will participate in our comprehensive training program covering aquaculture fundamentals, biosecurity protocols, and our AI-powered monitoring systems. We're committed to building a skilled workforce for the future of Ukrainian aquaculture.</p>
    `,
    contentUk: `
      <p>Neusatz Aqua з гордістю повідомляє про створення 25 нових робочих місць як частину нашої постійної відданості розвитку громади в Миколаївській області.</p>

      <h3>Нові посади</h3>
      <p>Нові ролі охоплюють різні відділи нашого інкубатору:</p>
      <ul>
        <li>10 посад в операційній діяльності та обслуговуванні інкубатору</li>
        <li>5 посад у контролі якості та біобезпеці</li>
        <li>5 посад у технічній підтримці та ІТ</li>
        <li>3 посади в адміністрації та логістиці</li>
        <li>2 посади в дослідженнях та розробках</li>
      </ul>

      <h3>Конкурентні переваги</h3>
      <p>Усі посади пропонують заробітну плату вище середньої по регіону, комплексні медичні пільги та доступ до наших програм професійного розвитку. Ми віримо в інвестування в наших людей як основу нашого успіху.</p>

      <h3>Програми навчання</h3>
      <p>Нові працівники братимуть участь у нашій комплексній програмі навчання, що охоплює основи аквакультури, протоколи біобезпеки та наші системи моніторингу на базі ШІ. Ми віддані побудові кваліфікованої робочої сили для майбутнього української аквакультури.</p>
    `,
    contentDe: `
      <p>Neusatz Aqua ist stolz, die Schaffung von 25 neuen Arbeitsplätzen als Teil unseres fortlaufenden Engagements für die Gemeindeentwicklung in der Region Mykolajiw bekannt zu geben.</p>

      <h3>Neue Positionen</h3>
      <p>Die neuen Rollen erstrecken sich über verschiedene Abteilungen unseres Brüterei-Betriebs:</p>
      <ul>
        <li>10 Positionen im Brüterei-Betrieb und Wartung</li>
        <li>5 Positionen in Qualitätskontrolle und Biosicherheit</li>
        <li>5 Positionen im technischen Support und IT</li>
        <li>3 Positionen in Verwaltung und Logistik</li>
        <li>2 Positionen in Forschung und Entwicklung</li>
      </ul>

      <h3>Wettbewerbsfähige Vorteile</h3>
      <p>Alle Positionen bieten Löhne über dem regionalen Durchschnitt, umfassende Gesundheitsleistungen und Zugang zu unseren beruflichen Entwicklungsprogrammen. Wir glauben daran, in unsere Mitarbeiter als Grundlage unseres Erfolgs zu investieren.</p>

      <h3>Schulungsprogramme</h3>
      <p>Neue Mitarbeiter werden an unserem umfassenden Schulungsprogramm teilnehmen, das Aquakultur-Grundlagen, Biosicherheitsprotokolle und unsere KI-gestützten Überwachungssysteme abdeckt. Wir sind bestrebt, eine qualifizierte Belegschaft für die Zukunft der ukrainischen Aquakultur aufzubauen.</p>
    `,
    categoryKey: "community",
    date: "2025-09-20",
    readTime: 4,
    image: "/news-jobs.jpg",
    featured: false,
  },
  {
    id: 6,
    slug: "gender-equality-plan-receives-horizon-europe-approval",
    titleKey: "gep-approval",
    titleEn: "Gender Equality Plan Receives Horizon Europe Approval",
    titleUk: "План гендерної рівності отримав схвалення Horizon Europe",
    titleDe: "Geschlechtergleichstellungsplan erhält Horizon Europe Genehmigung",
    excerptEn: "Our comprehensive Gender Equality Plan has been approved by Horizon Europe, demonstrating our commitment to diversity, inclusion, and equal opportunities in aquaculture innovation.",
    excerptUk: "Наш комплексний План гендерної рівності був схвалений Horizon Europe, демонструючи нашу відданість різноманітності, інклюзії та рівним можливостям в інноваціях аквакультури.",
    excerptDe: "Unser umfassender Geschlechtergleichstellungsplan wurde von Horizon Europe genehmigt und zeigt unser Engagement für Vielfalt, Inklusion und Chancengleichheit in der Aquakultur-Innovation.",
    contentEn: `
      <p>We are pleased to announce that our Gender Equality Plan (GEP) has received formal approval from Horizon Europe, the European Union's key funding programme for research and innovation.</p>

      <h3>Our Commitment</h3>
      <p>The approved GEP demonstrates Neusatz Aqua's commitment to:</p>
      <ul>
        <li>Equal opportunities in recruitment and career progression</li>
        <li>Work-life balance and family-friendly policies</li>
        <li>Gender balance in leadership and decision-making</li>
        <li>Prevention of gender-based harassment</li>
        <li>Integration of gender perspectives in our research</li>
      </ul>

      <h3>Implementation</h3>
      <p>Our GEP is coordinated by our HR Manager under CEO supervision, with annual reviews and updates to ensure continuous improvement. All staff receive gender equality awareness training.</p>

      <h3>Future Opportunities</h3>
      <p>This approval opens doors for participation in EU-funded research projects and reinforces our position as a responsible, forward-thinking organization in the aquaculture industry.</p>
    `,
    contentUk: `
      <p>Ми раді повідомити, що наш План гендерної рівності (ПГР) отримав офіційне схвалення від Horizon Europe, ключової програми фінансування Європейського Союзу для досліджень та інновацій.</p>

      <h3>Наша відданість</h3>
      <p>Схвалений ПГР демонструє відданість Neusatz Aqua:</p>
      <ul>
        <li>Рівним можливостям у найманні та кар'єрному просуванні</li>
        <li>Балансу між роботою та особистим життям та сімейно-орієнтованій політиці</li>
        <li>Гендерному балансу в керівництві та прийнятті рішень</li>
        <li>Запобіганню гендерних домагань</li>
        <li>Інтеграції гендерних перспектив у наших дослідженнях</li>
      </ul>

      <h3>Впровадження</h3>
      <p>Наш ПГР координується нашим HR-менеджером під керівництвом CEO, з щорічними переглядами та оновленнями для забезпечення постійного вдосконалення. Весь персонал проходить навчання з усвідомлення гендерної рівності.</p>

      <h3>Майбутні можливості</h3>
      <p>Це схвалення відкриває двері для участі в дослідницьких проєктах, що фінансуються ЄС, і зміцнює нашу позицію як відповідальної, прогресивної організації в індустрії аквакультури.</p>
    `,
    contentDe: `
      <p>Wir freuen uns bekannt zu geben, dass unser Geschlechtergleichstellungsplan (GEP) die formelle Genehmigung von Horizon Europe erhalten hat, dem wichtigsten Förderprogramm der Europäischen Union für Forschung und Innovation.</p>

      <h3>Unser Engagement</h3>
      <p>Der genehmigte GEP zeigt das Engagement von Neusatz Aqua für:</p>
      <ul>
        <li>Chancengleichheit bei Einstellung und Karriereentwicklung</li>
        <li>Work-Life-Balance und familienfreundliche Richtlinien</li>
        <li>Geschlechterbalance in Führung und Entscheidungsfindung</li>
        <li>Prävention von geschlechtsbezogener Belästigung</li>
        <li>Integration von Geschlechterperspektiven in unsere Forschung</li>
      </ul>

      <h3>Implementierung</h3>
      <p>Unser GEP wird von unserem HR-Manager unter Aufsicht des CEO koordiniert, mit jährlichen Überprüfungen und Aktualisierungen zur Gewährleistung kontinuierlicher Verbesserung. Alle Mitarbeiter erhalten Schulungen zum Bewusstsein für Geschlechtergleichstellung.</p>

      <h3>Zukünftige Möglichkeiten</h3>
      <p>Diese Genehmigung öffnet Türen für die Teilnahme an EU-finanzierten Forschungsprojekten und stärkt unsere Position als verantwortungsvolle, zukunftsorientierte Organisation in der Aquakultur-Industrie.</p>
    `,
    categoryKey: "community",
    date: "2025-09-12",
    readTime: 3,
    image: "/news-gep.jpg",
    featured: false,
  },
  {
    id: 7,
    slug: "first-batch-of-broodstock-arrives-from-certified-suppliers",
    titleKey: "broodstock-arrival",
    titleEn: "First Batch of Broodstock Arrives from Certified Suppliers",
    titleUk: "Перша партія маточного стада прибула від сертифікованих постачальників",
    titleDe: "Erste Charge Brutbestand von zertifizierten Lieferanten eingetroffen",
    excerptEn: "We've successfully received our first shipment of SPF (Specific Pathogen Free) Vannamei broodstock from internationally certified suppliers. Biosecurity protocols performed flawlessly.",
    excerptUk: "Ми успішно отримали нашу першу партію SPF (вільних від специфічних патогенів) маточного стада Ваннамей від міжнародно сертифікованих постачальників. Протоколи біобезпеки спрацювали бездоганно.",
    excerptDe: "Wir haben erfolgreich unsere erste Lieferung von SPF (Specific Pathogen Free) Vannamei-Brutbestand von international zertifizierten Lieferanten erhalten. Die Biosicherheitsprotokolle funktionierten einwandfrei.",
    contentEn: `
      <p>A significant milestone was reached today as Neusatz Aqua received its first shipment of SPF (Specific Pathogen Free) Vannamei broodstock from our internationally certified suppliers.</p>

      <h3>Quality Assurance</h3>
      <p>The broodstock shipment met all our rigorous quality standards:</p>
      <ul>
        <li>Full SPF certification from accredited laboratories</li>
        <li>Complete health documentation and genetic lineage records</li>
        <li>Optimal condition after transport with zero mortality</li>
        <li>Successful completion of our quarantine protocols</li>
      </ul>

      <h3>Biosecurity Success</h3>
      <p>Our multi-stage biosecurity protocols performed flawlessly during the reception process. All broodstock passed through our decontamination zones and are now acclimating in dedicated quarantine tanks under 24/7 AI monitoring.</p>

      <h3>Next Steps</h3>
      <p>The broodstock will complete a 30-day quarantine period with regular health assessments before being transferred to our main maturation facilities. We expect to begin spawning trials in Q4 2025.</p>
    `,
    contentUk: `
      <p>Сьогодні досягнуто значної віхи: Neusatz Aqua отримала першу партію SPF (вільного від специфічних патогенів) маточного стада Ваннамей від наших міжнародно сертифікованих постачальників.</p>

      <h3>Забезпечення якості</h3>
      <p>Партія маточного стада відповідала всім нашим суворим стандартам якості:</p>
      <ul>
        <li>Повна SPF сертифікація від акредитованих лабораторій</li>
        <li>Повна документація про здоров'я та записи генетичної лінії</li>
        <li>Оптимальний стан після транспортування з нульовою смертністю</li>
        <li>Успішне завершення наших карантинних протоколів</li>
      </ul>

      <h3>Успіх біобезпеки</h3>
      <p>Наші багатоступеневі протоколи біобезпеки спрацювали бездоганно під час процесу прийому. Все маточне стадо пройшло через наші зони знезараження і зараз акліматизується у спеціальних карантинних резервуарах під цілодобовим моніторингом ШІ.</p>

      <h3>Наступні кроки</h3>
      <p>Маточне стадо завершить 30-денний карантинний період з регулярними оцінками здоров'я перед переведенням до наших основних об'єктів дозрівання. Ми очікуємо розпочати нерестові випробування у Q4 2025.</p>
    `,
    contentDe: `
      <p>Ein bedeutender Meilenstein wurde heute erreicht, als Neusatz Aqua seine erste Lieferung von SPF (Specific Pathogen Free) Vannamei-Brutbestand von unseren international zertifizierten Lieferanten erhielt.</p>

      <h3>Qualitätssicherung</h3>
      <p>Die Brutbestand-Lieferung erfüllte alle unsere strengen Qualitätsstandards:</p>
      <ul>
        <li>Vollständige SPF-Zertifizierung von akkreditierten Laboren</li>
        <li>Vollständige Gesundheitsdokumentation und genetische Abstammungsaufzeichnungen</li>
        <li>Optimaler Zustand nach dem Transport mit null Sterblichkeit</li>
        <li>Erfolgreicher Abschluss unserer Quarantäneprotokolle</li>
      </ul>

      <h3>Biosicherheits-Erfolg</h3>
      <p>Unsere mehrstufigen Biosicherheitsprotokolle funktionierten während des Empfangsprozesses einwandfrei. Alle Brutbestände durchliefen unsere Dekontaminationszonen und akklimatisieren sich jetzt in speziellen Quarantänebecken unter 24/7 KI-Überwachung.</p>

      <h3>Nächste Schritte</h3>
      <p>Der Brutbestand wird eine 30-tägige Quarantänezeit mit regelmäßigen Gesundheitsbewertungen absolvieren, bevor er in unsere Hauptreifungseinrichtungen überführt wird. Wir erwarten, im Q4 2025 mit Laichversuchen zu beginnen.</p>
    `,
    categoryKey: "facility",
    date: "2025-08-30",
    readTime: 5,
    image: "/sustainability_shrimp.jpg",
    featured: false,
  },
];

export function getArticleById(id: number): NewsArticle | undefined {
  return newsArticles.find(article => article.id === id);
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug);
}

export function getFeaturedArticles(): NewsArticle[] {
  return newsArticles.filter(article => article.featured);
}

export function getRegularArticles(): NewsArticle[] {
  return newsArticles.filter(article => !article.featured);
}
