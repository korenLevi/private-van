import { FLEET } from '../../config/site';
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
    whatsappTemplate:
      'Здравствуйте, хочу узнать стоимость поездки на частном микроавтобусе.\n\nУслуга: {service}\nОткуда: {from}\nКуда: {to}\nДата: {date}\nПассажиров: {passengers}\nИмя: {name}\n{notes}',
    whatsappNotesPrefix: 'Примечания: ',
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
    whatsappTemplate:
      'Здравствуйте, хочу узнать стоимость поездки на частном микроавтобусе.\n\nИмя: {name}\nТелефон: {phone}\nПочта: {email}\n\n{message}',
  },

  cta: {
    heading: 'Готовы, когда вы будете готовы',
    body: 'Напишите даты, и мы вернёмся с ценой за микроавтобус. Спросить можно без предоплаты.',
    primary: 'Заказать в WhatsApp',
    secondary: 'Позвонить',
  },

  footer: {
    tagline: 'Частный микроавтобус с водителем по Израилю, 30 лет на дорогах. Трансферы из аэропорта, водитель на день и поездки по всей стране.',
    contactHeading: 'Контакты',
    servicesHeading: 'Услуги',
    toursHeading: 'Экскурсии',
    companyHeading: 'Компания',
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
  trust: [
    { icon: 'van', label: 'Новые Mercedes Sprinter и Savanna' },
    { icon: 'plane', label: 'Встреча в зале прилёта Бен Гурион' },
    { icon: 'clock', label: '30 лет на дорогах' },
    { icon: 'pin', label: 'По всему Израилю' },
  ],

  trip: {
    heading: 'Детали поездки',
    duration: 'Время в пути',
    distance: 'Расстояние',
    vehicle: 'Автомобиль',
    seats: 'Мест',
    included: 'Что входит в цену',
  },

  related: {
    heading: 'Похожие страницы',
    backToHub: 'Назад к разделу',
  },

  services: {
    eyebrow: 'Что мы делаем',
    heading: 'Три способа поехать с нами',
    intro:
      'Каждая поездка частная. Машина ваша, водитель остаётся с вами, никаких попутчиков и фиксированного расписания.',
    items: [
      {
        id: 'airport-transfer',
        title: 'Трансфер из аэропорта Бен Гурион',
        body: 'Мы встречаем вас в зале прилёта и везём прямо в отель или квартиру. Одна цена за машину, группа и багаж едут вместе.',
        image: 'serviceAirport',
        imageAlt: 'Прилетевшие пассажиры идут к выдаче багажа в аэропорту Бен Гурион.',
        pageKey: 'airportTransfers',
        linkLabel: 'Трансфер из аэропорта',
      },
      {
        id: 'full-day',
        title: 'Микроавтобус с водителем на день',
        body: 'Машина и водитель ваши на весь день, маршрут выбираете вы. Подходит семьям и небольшим группам, которые хотят успеть несколько мест.',
        image: 'serviceFullDay',
        imageAlt: 'Башня Давида и стены Старого города Иерусалима в сумерках, над дорогой.',
        pageKey: 'vanWithDriver',
        linkLabel: 'Водитель на день',
      },
      {
        id: 'city-to-city',
        title: 'Частные трансферы по всей стране',
        body: 'Поездки в одну сторону между городами, отелями, портами и погранпереходами. Скажите откуда и куда, и мы дадим цену.',
        image: 'serviceCityToCity',
        imageAlt: 'Чёрный пассажирский микроавтобус Mercedes-Benz Sprinter, вид спереди сбоку.',
        pageKey: 'privateTransfers',
        linkLabel: 'Частные трансферы',
      },
    ],
  },

  routes: {
    eyebrow: 'Маршруты и цены',
    heading: 'Популярные маршруты',
    intro:
      'Цены указаны за весь микроавтобус, в одну сторону, вместе с водителем. Скажите точное место подачи, и мы подтвердим цену до заказа.',
    priceLabel: 'от',
    perVan: 'за микроавтобус',
    durationLabel: 'Время в пути',
    ctaLabel: 'Спросить о маршруте',
    notListed: 'Едете куда-то ещё?',
    notListedBody: 'Мы возим по всему Израилю. Пришлите точку подачи и адрес назначения, и мы вернёмся с ценой.',
    notListedCta: 'Запросить цену',
    askMessage: 'Здравствуйте, сколько стоит поездка на частном микроавтобусе по маршруту {from} — {to}?',
    routeNames: {
      'Ben Gurion Airport': 'Аэропорт Бен Гурион',
      Jerusalem: 'Иерусалим',
      'Tel Aviv': 'Тель-Авив',
      'Dead Sea': 'Мёртвое море',
      Haifa: 'Хайфа',
      Tiberias: 'Тверия',
      Eilat: 'Эйлат',
    },
  },

  how: {
    eyebrow: 'Как это работает',
    heading: 'Три шага, без регистрации',
    steps: [
      {
        title: 'Расскажите о поездке',
        body: 'Напишите дату, место подачи и куда вам нужно. Быстрее всего через WhatsApp.',
      },
      {
        title: 'Мы присылаем цену',
        body: 'Вы получаете цену за весь микроавтобус вместе с водителем, поэтому стоимость известна заранее.',
      },
      {
        title: 'Встречаете водителя',
        body: 'Накануне мы подтверждаем детали подачи, и водитель приезжает в оговорённое время и место.',
      },
    ],
  },

  fleet: {
    eyebrow: 'Автопарк',
    heading: 'Mercedes Sprinter и Savanna',
    intro: 'С кондиционером, убранные между поездками и достаточно просторные, чтобы никто не держал чемодан на коленях.',
    amenitiesHeading: 'В каждой машине',
    videoHeading: 'Взгляд изнутри',
    videoCta: 'Смотреть',
    specs: [
      { label: 'Автомобили', value: 'Sprinter и Savanna' },
      { label: 'Мест', value: FLEET.seats },
      { label: 'Больших чемоданов', value: FLEET.luggage },
      { label: 'Год выпуска', value: FLEET.modelYear },
    ],
    amenities: ['Кондиционер', 'Зарядка USB', 'Бутилированная вода', 'Детские кресла по запросу'],
  },

  reviews: { eyebrow: 'Отзывы', heading: 'Что говорят пассажиры', intro: '' },

  faq: {
    eyebrow: 'Вопросы',
    heading: 'Частые вопросы',
    intro: 'Если вашего вопроса здесь нет, напишите нам в WhatsApp.',
  },

  offerings: {
    eyebrow: 'Что мы делаем',
    heading: 'Что мы предлагаем',
    headingAccent: 'нашим клиентам',
    previous: 'Предыдущие услуги',
    next: 'Ещё услуги',
    goTo: 'Перейти к услуге',
    items: [
      {
        pageKey: 'airportTransfers',
        label: 'Трансферы в аэропорт Бен Гурион и обратно',
        image: 'cardAirportTransfer',
        imageAlt: 'Пассажиры с чемоданами в зале вылета аэропорта.',
      },
      {
        pageKey: 'vanWithDriver',
        label: 'Микроавтобус с водителем на день',
        image: 'stickDriver',
        imageAlt: 'Автомобиль на открытой дороге среди сухих холмов на севере Израиля.',
      },
      {
        pageKey: 'privateTours',
        label: 'Индивидуальные экскурсии по стране',
        image: 'cardPrivateTours',
        imageAlt: 'Путешественники на пустынной тропе в Израиле.',
      },
      {
        pageKey: 'deadSeaMasadaTour',
        label: 'Поездки на Мёртвое море и Масаду',
        image: 'pageDeadSea',
        imageAlt: 'Скалы Масады над пустынной равниной, вдали Мёртвое море.',
      },
      {
        pageKey: 'businessTransportation',
        label: 'Транспорт для бизнеса и делегаций',
        image: 'cardBusinessTravel',
        imageAlt: 'Деловой пассажир идёт по терминалу аэропорта с багажом.',
      },
      {
        pageKey: 'weddingTransportation',
        label: 'Свадьбы и мероприятия',
        image: 'weddingVan',
        imageAlt: 'Белый бант из фатина на свадебном автомобиле.',
      },
      {
        pageKey: 'artistBandTransportation',
        label: 'Артисты, группы и съёмочные команды',
        image: 'cardArtists',
        imageAlt: 'Публика перед освещённой концертной сценой.',
      },
    ],
  },

  pages,
};

export default ru;
