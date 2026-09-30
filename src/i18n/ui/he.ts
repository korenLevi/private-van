import { FLEET } from '../../config/site';
import pages from './he-pages';
import type { Translation } from './index';

/**
 * Hebrew. Anything not listed here falls back to English, so this file can
 * grow a section at a time without ever breaking a build.
 *
 * Hebrew is the site's RTL language: `dir="rtl"` comes from the locale
 * registry, so no string here needs directional markup.
 *
 * Step 2 covers the chrome. Page bodies arrive in step 4c.
 */
const he: Translation = {
  common: {
    skipToContent: 'דילוג לתוכן',
    menu: 'תפריט',
    closeMenu: 'סגירת התפריט',
    callUs: 'להתקשר אלינו',
    bookOnWhatsapp: 'הזמנה בוואטסאפ',
    messageOnWhatsapp: 'שליחת הודעה בוואטסאפ',
    whatsapp: 'וואטסאפ',
    perVan: 'לרכב',
    from: 'החל מ',
    home: 'דף הבית',
    breadcrumb: 'מסלול ניווט',
    languageSwitcher: 'שפה',
  },

  nav: {
    services: 'שירותים',
    routes: 'מסלולים ומחירים',
    fleet: 'הצי שלנו',
    reviews: 'ביקורות',
    faq: 'שאלות נפוצות',
  },

  hero: {
    eyebrow: 'ואן פרטי עם נהג',
    h1: 'ואן פרטי עם נהג לכל חלקי הארץ',
    subtitle:
      'הסעות לנתב"ג, ואן עם נהג צמוד ליום שלם והסעות פרטיות בכל רחבי ישראל, ברכבי מרצדס ספרינטר וסוואנה.',
    primaryCta: 'הזמנה בוואטסאפ',
    secondaryCta: 'מסלולים ומחירים',
  },

  form: {
    title: 'קבלת הצעת מחיר',
    subtitle: 'מחיר אחד לרכב כולו. נחזור אליכם בוואטסאפ.',
    service: 'סוג השירות',
    servicePlaceholder: 'בחרו שירות',
    serviceOptions: {
      'airport-transfer': 'הסעה לנתב"ג',
      'full-day': 'ואן עם נהג ליום שלם',
      'city-to-city': 'הסעה בין ערים',
    },
    from: 'מוצא',
    fromPlaceholder: 'נמל התעופה בן גוריון',
    to: 'יעד',
    toPlaceholder: 'ירושלים',
    date: 'תאריך',
    passengers: 'מספר נוסעים',
    name: 'שם',
    namePlaceholder: 'שם פרטי ומשפחה',
    email: 'אימייל',
    emailPlaceholder: 'you@example.com',
    notes: 'פרטים נוספים',
    notesPlaceholder: 'מספר טיסה, בית מלון, כיסאות בטיחות, עצירות נוספות',
    submit: 'קבלת מחיר בוואטסאפ',
    submitting: 'פותח את וואטסאפ',
    successTitle: 'וואטסאפ נפתח',
    successBody: 'אם לא קרה כלום, לחצו שוב או שלחו לנו הודעה ישירות.',
    errorRequired: 'נא למלא שדה זה.',
    errorEmail: 'נא להזין כתובת אימייל תקינה.',
    emailCopyNote: 'עותק של הפנייה נשלח אלינו גם במייל, כדי ששום בקשה לא תלך לאיבוד.',
    genericWhatsappMessage: 'שלום, אשמח לקבל הצעת מחיר להסעה בוואן פרטי.',
  },

  requestQuote: {
    eyebrow: 'הצעת מחיר',
    heading: 'בקשת הצעת מחיר',
    intro: 'ספרו לנו לאן ומתי, ונחזור אליכם עם מחיר לרכב.',
    name: 'מה שמכם?',
    phone: 'טלפון',
    email: 'אימייל',
    message: 'ההודעה שלכם',
    messagePlaceholder: 'ההודעה שלכם',
    submit: 'בקשת הצעת מחיר',
    sending: 'שולח',
    successTitle: 'תודה, הבקשה התקבלה.',
    successBody: 'נחזור אליכם עם מחיר בהקדם.',
    fallbackTitle: 'לא הצלחנו לשלוח את הבקשה כרגע.',
    fallbackBody: 'אפשר לשלוח אותה בוואטסאפ, כדי שלא תלך לאיבוד.',
    fallbackCta: 'שליחה בוואטסאפ',
    errorRequired: 'נא למלא שדה זה.',
    errorEmail: 'נא להזין כתובת אימייל תקינה.',
    errorContact: 'נא להשאיר טלפון או אימייל.',
  },

  cta: {
    heading: 'מוכנים כשתהיו',
    body: 'שלחו לנו תאריכים ונחזור עם מחיר לרכב. אין צורך במקדמה כדי לשאול.',
    primary: 'הזמנה בוואטסאפ',
    secondary: 'להתקשר',
  },

  footer: {
    tagline: 'ואן פרטי עם נהג בכל הארץ, 30 שנה על הכביש. הסעות לנתב"ג, ימים שלמים עם נהג צמוד והסעות לכל מקום.',
    contactHeading: 'יצירת קשר',
    servicesHeading: 'שירותים',
    toursHeading: 'טיולים',
    companyHeading: 'החברה',
    pagesHeading: 'עמודים',
    hoursHeading: 'שעות פעילות',
    phoneLabel: 'טלפון',
    emailLabel: 'אימייל',
    whatsappLabel: 'וואטסאפ',
    serviceAreaHeading: 'אזור השירות',
    serviceArea: 'כל הארץ, כולל נתב"ג, ירושלים, תל אביב, ים המלח, הגליל ואילת.',
    rights: 'כל הזכויות שמורות.',
  },

  notFound: {
    title: 'הדף לא נמצא',
    heading: 'לא הצלחנו למצוא את הדף הזה',
    body: 'ייתכן שהקישור אינו מעודכן. נסו את דף הבית, או שלחו לנו הודעה ונכוון אתכם.',
    cta: 'מעבר לדף הבית',
  },
  trust: [
    { icon: 'van', label: 'רכבי מרצדס ספרינטר וסוואנה חדשים' },
    { icon: 'plane', label: 'איסוף באולם הנכנסים בנתב"ג' },
    { icon: 'clock', label: '30 שנה על הכביש' },
    { icon: 'pin', label: 'לכל מקום בארץ' },
  ],

  trip: {
    heading: 'פרטי הנסיעה',
    duration: 'זמן נסיעה',
    distance: 'מרחק',
    vehicle: 'רכב',
    seats: 'מקומות',
    included: 'מה כולל המחיר',
  },

  related: {
    heading: 'עמודים קשורים',
    backToHub: 'חזרה אל',
  },

  services: {
    eyebrow: 'מה אנחנו עושים',
    heading: 'שלוש דרכים לנסוע איתנו',
    intro:
      'כל נסיעה היא פרטית. הרכב שלכם והנהג נשאר איתכם, כך שאין נוסעים אחרים ואין שעות יציאה קבועות.',
    items: [
      {
        id: 'airport-transfer',
        title: 'הסעות לנתב"ג',
        body: 'אנחנו אוספים אתכם באולם הנכנסים ונוסעים ישירות למלון או לבית. מחיר אחד לרכב כולו, כך שהקבוצה והמזוודות נשארות יחד.',
        image: 'serviceAirport',
        imageAlt: 'נוסעים מעמיסים מזוודות לוואן לבן מחוץ לטרמינל.',
        pageKey: 'airportTransfers',
        linkLabel: 'הסעות לנתב"ג',
      },
      {
        id: 'full-day',
        title: 'ואן עם נהג ליום שלם',
        body: 'הוואן והנהג שלכם ליום שלם, ואתם קובעים את המסלול. מתאים למשפחות ולקבוצות שרוצות לכסות כמה מקומות בלי להחליף רכב.',
        image: 'serviceFullDay',
        imageAlt: 'נהג עומד ליד דלת הצד הפתוחה של ואן נוסעים.',
        pageKey: 'vanWithDriver',
        linkLabel: 'ואן עם נהג',
      },
      {
        id: 'city-to-city',
        title: 'הסעות פרטיות בכל הארץ',
        body: 'נסיעות בכיוון אחד בין ערים, מלונות, נמלים ומעברי גבול. תגידו לנו מאיפה ולאן ונחזור עם מחיר.',
        image: 'serviceCityToCity',
        imageAlt: 'ואן נוסעים לבן בכביש מהיר באזור פתוח בישראל.',
        pageKey: 'privateTransfers',
        linkLabel: 'הסעות פרטיות',
      },
    ],
  },

  routes: {
    eyebrow: 'מסלולים ומחירים',
    heading: 'מסלולים נפוצים',
    intro:
      'המחירים הם לרכב כולו, לכיוון אחד, כולל נהג. תגידו לנו את נקודת האיסוף המדויקת ונאשר את המחיר לפני ההזמנה.',
    priceLabel: 'החל מ',
    perVan: 'לרכב',
    durationLabel: 'זמן נסיעה',
    ctaLabel: 'לשאול על המסלול',
    notListed: 'נוסעים למקום אחר?',
    notListedBody: 'אנחנו נוסעים לכל מקום בארץ. שלחו נקודת איסוף ויעד ונחזור עם מחיר.',
    notListedCta: 'לבקש מחיר',
    routeNames: {
      'Ben Gurion Airport': 'נתב"ג',
      Jerusalem: 'ירושלים',
      'Tel Aviv': 'תל אביב',
      'Dead Sea': 'ים המלח',
      Haifa: 'חיפה',
      Tiberias: 'טבריה',
      Eilat: 'אילת',
    },
  },

  how: {
    eyebrow: 'איך זה עובד',
    heading: 'שלושה שלבים, בלי הרשמה',
    steps: [
      {
        title: 'ספרו לנו על הנסיעה',
        body: 'שלחו את התאריך, את נקודת האיסוף ולאן אתם רוצים להגיע. וואטסאפ היא בדרך כלל הדרך המהירה ביותר.',
      },
      {
        title: 'אנחנו שולחים מחיר',
        body: 'תקבלו מחיר לרכב כולו כולל נהג, כך שאתם יודעים את העלות לפני שאתם מתחייבים.',
      },
      {
        title: 'נפגשים עם הנהג',
        body: 'אנחנו מאשרים איתכם את פרטי האיסוף יום קודם, והנהג מגיע בשעה ובמקום שסוכמו.',
      },
    ],
  },

  fleet: {
    eyebrow: 'הצי שלנו',
    heading: 'רכבי מרצדס ספרינטר וסוואנה',
    intro: 'ממוזגים, מנוקים בין נסיעות, וגדולים מספיק כדי שאף אחד לא יחזיק מזוודה על הברכיים.',
    amenitiesHeading: 'בכל רכב',
    videoHeading: 'מבט מבפנים',
    videoCta: 'לצפייה',
    specs: [
      { label: 'רכבים', value: 'ספרינטר וסוואנה' },
      { label: 'מספר מקומות', value: FLEET.seats },
      { label: 'מזוודות גדולות', value: FLEET.luggage },
      { label: 'שנת ייצור', value: FLEET.modelYear },
    ],
    amenities: ['מיזוג אוויר', 'עמדות טעינה USB', 'מים בבקבוקים', 'כיסאות בטיחות לפי בקשה'],
  },

  reviews: { eyebrow: 'ביקורות', heading: 'מה אומרים עלינו', intro: '' },

  faq: {
    eyebrow: 'שאלות',
    heading: 'שאלות נפוצות',
    intro: 'אם השאלה שלכם לא כאן, שלחו לנו אותה בוואטסאפ.',
  },

  offerings: {
    eyebrow: 'מה אנחנו עושים',
    heading: 'מה אנחנו מציעים',
    headingAccent: 'ללקוחות שלנו',
    previous: 'שירותים קודמים',
    next: 'שירותים נוספים',
    goTo: 'מעבר לשירות',
    items: [
      {
        pageKey: 'airportTransfers',
        label: 'הסעות לנתב"ג וממנו',
        image: 'pageAirport',
        imageAlt: 'אולם הנוסעים הנכנסים בנתב"ג, מואר באור יום דרך גג הזכוכית.',
      },
      {
        pageKey: 'vanWithDriver',
        label: 'ואן עם נהג צמוד ליום שלם',
        image: 'pagePrivateDriver',
        imageAlt: 'מכונית בכביש פתוח המתפתל בין גבעות יבשות בצפון הארץ.',
      },
      {
        pageKey: 'privateTours',
        label: 'סיורים פרטיים בכל הארץ',
        image: 'pageJerusalem',
        imageAlt: 'רחבת הכותל המערבי בירושלים, עם כיפת הסלע הזהובה מאחור.',
      },
      {
        pageKey: 'deadSeaMasadaTour',
        label: 'טיולי יום לים המלח ומצדה',
        image: 'pageDeadSea',
        imageAlt: 'צוקי מצדה מעל מישור המדבר, עם ים המלח ברקע.',
      },
      {
        pageKey: 'businessTransportation',
        label: 'הסעות לאנשי עסקים ולמשלחות',
        image: 'pageContact',
        imageAlt: 'קו החוף והקו הרקיע של תל אביב, במבט מיפו.',
      },
      {
        pageKey: 'weddingTransportation',
        label: 'הסעות לחתונות ולאירועים',
        image: 'serviceFullDay',
        imageAlt: 'נהג עומד ליד דלת הצד הפתוחה של ואן נוסעים.',
      },
      {
        pageKey: 'artistBandTransportation',
        label: 'הסעות אומנים, להקות וצוותי הפקה',
        image: 'serviceCityToCity',
        imageAlt: 'ואן נוסעים לבן בכביש מהיר באזור פתוח בישראל.',
      },
    ],
  },

  pages,
};

export default he;
