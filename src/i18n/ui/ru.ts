import pages from './ru-pages';
import type { Translation } from './index';

/**
 * Russian. Written for two audiences at once: tourists planning a trip and
 * Russian-speaking residents of Israel booking transfers at home.
 *
 * Anything not listed here falls back to English. Step 2 covers the chrome;
 * page bodies arrive in step 4d.
 */
const ru: Translation = {
  common: {
    skipToContent: 'Перейти к содержанию',
    menu: 'Меню',
    closeMenu: 'Закрыть меню',
    callUs: 'Позвонить нам',
    bookOnWhatsapp: 'Заказать в WhatsApp',
    messageOnWhatsapp: 'Написать нам в WhatsApp',
    whatsapp: 'WhatsApp',
    perVan: 'за микроавтобус',
    from: 'от',
    home: 'Главная',
    breadcrumb: 'Навигация',
    languageSwitcher: 'Язык',
  },

  nav: {
    services: 'Услуги',
    routes: 'Маршруты и цены',
    fleet: 'Автопарк',
    reviews: 'Отзывы',
    faq: 'Вопросы',
  },

  hero: {
    eyebrow: 'Микроавтобус с водителем',
    h1: 'Частный микроавтобус с водителем по Израилю',
    subtitle:
      'Трансфер из аэропорта Бен Гурион, микроавтобус с водителем на весь день и поездки по всей стране на Mercedes Sprinter и Savanna.',
    primaryCta: 'Заказать в WhatsApp',
    secondaryCta: 'Маршруты и цены',
  },

  form: {
    title: 'Рассчитать стоимость поездки',
    subtitle: 'Одна цена за весь микроавтобус. Ответим в WhatsApp.',
    service: 'Услуга',
    servicePlaceholder: 'Выберите услугу',
    serviceOptions: {
      'airport-transfer': 'Трансфер из аэропорта',
      'full-day': 'Водитель на весь день',
      'city-to-city': 'Поездка между городами',
    },
    from: 'Откуда',
    fromPlaceholder: 'Аэропорт Бен Гурион',
    to: 'Куда',
    toPlaceholder: 'Иерусалим',
    date: 'Дата',
    passengers: 'Пассажиров',
    name: 'Ваше имя',
    namePlaceholder: 'Имя и фамилия',
    email: 'Электронная почта',
    emailPlaceholder: 'you@example.com',
    notes: 'Что-то ещё?',
    notesPlaceholder: 'Номер рейса, отель, детские кресла, дополнительные остановки',
    submit: 'Узнать цену в WhatsApp',
    submitting: 'Открываем WhatsApp',
    successTitle: 'WhatsApp открывается',
    successBody: 'Если ничего не произошло, нажмите ещё раз или напишите нам напрямую.',
    errorRequired: 'Пожалуйста, заполните это поле.',
    errorEmail: 'Пожалуйста, введите корректный адрес почты.',
    emailCopyNote: 'Копию заявки мы отправляем себе на почту, чтобы ничего не потерялось.',
    genericWhatsappMessage:
      'Здравствуйте, хочу узнать стоимость поездки на частном микроавтобусе.',
  },

  requestQuote: {
    eyebrow: 'Стоимость',
    heading: 'Запросить расчёт',
    intro: 'Напишите, куда и когда вам нужно, и мы вернёмся с ценой за микроавтобус.',
    name: 'Как вас зовут?',
    phone: 'Телефон',
    email: 'Электронная почта',
    message: 'Ваше сообщение',
    messagePlaceholder: 'Ваше сообщение',
    submit: 'Запросить расчёт',
    sending: 'Отправляем',
    successTitle: 'Спасибо, заявка получена.',
    successBody: 'Вернёмся к вам с ценой в ближайшее время.',
    fallbackTitle: 'Сейчас не удалось отправить заявку.',
    fallbackBody: 'Отправьте её в WhatsApp, чтобы она не потерялась.',
    fallbackCta: 'Отправить в WhatsApp',
    errorRequired: 'Пожалуйста, заполните это поле.',
    errorEmail: 'Пожалуйста, введите корректный адрес почты.',
    errorContact: 'Оставьте телефон или адрес почты.',
  },

  cta: {
    heading: 'Готовы, когда вы будете готовы',
    body: 'Напишите даты, и мы вернёмся с ценой за микроавтобус. Спросить можно без предоплаты.',
    primary: 'Заказать в WhatsApp',
    secondary: 'Позвонить',
  },

  footer: {
    contactHeading: 'Контакты',
    pagesHeading: 'Страницы',
    hoursHeading: 'Часы работы',
    phoneLabel: 'Телефон',
    emailLabel: 'Почта',
    whatsappLabel: 'WhatsApp',
    serviceAreaHeading: 'Зона обслуживания',
    serviceArea:
      'Весь Израиль, включая аэропорт Бен Гурион, Иерусалим, Тель-Авив, Мёртвое море, Галилею и Эйлат.',
    rights: 'Все права защищены.',
  },

  notFound: {
    title: 'Страница не найдена',
    heading: 'Мы не нашли такую страницу',
    body: 'Возможно, ссылка устарела. Откройте главную или напишите нам, и мы подскажем.',
    cta: 'На главную',
  },

  pages,
};

export default ru;
