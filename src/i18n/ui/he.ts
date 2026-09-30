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
    h1: 'ואן פרטי עם נהג בכל הארץ',
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
    contactHeading: 'יצירת קשר',
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
};

export default he;
