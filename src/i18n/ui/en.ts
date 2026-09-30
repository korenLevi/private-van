import { BUSINESS, FLEET, CONTACT } from '../../config/site';
import type { PageContent, PageKey } from '../types';

/**
 * English copy for the whole site.
 *
 * To add a language, copy this file, translate the strings *and the `slug`
 * values*, then register it in ./index.ts. TypeScript will flag anything you
 * miss, because every other dictionary is typed against this one.
 *
 * Content rules followed here: no invented prices, counts, reviews or
 * policies. Anything that needs a real-world answer is written as a bracketed
 * PLACEHOLDER note saying exactly what to supply. `npm run check:placeholders`
 * lists every one still outstanding.
 */
const en = {
  /* ---------------------------------------------------------------- */
  /* Chrome                                                            */
  /* ---------------------------------------------------------------- */
  common: {
    skipToContent: 'Skip to content',
    menu: 'Menu',
    closeMenu: 'Close menu',
    callUs: 'Call us',
    bookOnWhatsapp: 'Book on WhatsApp',
    messageOnWhatsapp: 'Message us on WhatsApp',
    whatsapp: 'WhatsApp',
    perVan: 'per van',
    from: 'From',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    languageSwitcher: 'Language',
  },

  nav: {
    services: 'Services',
    routes: 'Routes & Prices',
    fleet: 'Our Fleet',
    reviews: 'Reviews',
    faq: 'FAQ',
  },

  /* ---------------------------------------------------------------- */
  /* Home — hero                                                       */
  /* ---------------------------------------------------------------- */
  hero: {
    eyebrow: 'Private van and driver',
    h1: 'Your private van and driver in Israel',
    subtitle:
      'Ben Gurion Airport transfers, full-day private tours and rides anywhere in Israel, in a new Mercedes Sprinter with an English-speaking driver.',
    videoAlt:
      'A white Mercedes Sprinter van on an Israeli highway at dusk, filmed from the roadside.',
    posterAlt:
      'The Dead Sea at dusk, with the mountains of Jordan on the far shore.',
    primaryCta: 'Book on WhatsApp',
    secondaryCta: 'See routes and prices',
  },

  /* ---------------------------------------------------------------- */
  /* Home — quote form                                                 */
  /* ---------------------------------------------------------------- */
  form: {
    title: 'Get a price for your trip',
    subtitle: 'One price for the whole van. We reply on WhatsApp.',
    service: 'Service',
    servicePlaceholder: 'Choose a service',
    serviceOptions: {
      'airport-transfer': 'Airport transfer',
      'full-day': 'Full day with driver',
      'city-to-city': 'City to city',
    },
    from: 'From',
    fromPlaceholder: 'Ben Gurion Airport',
    to: 'To',
    toPlaceholder: 'Jerusalem',
    date: 'Date',
    passengers: 'Passengers',
    name: 'Your name',
    namePlaceholder: 'First and last name',
    email: 'Email',
    emailPlaceholder: 'you@example.com',
    notes: 'Anything else?',
    notesPlaceholder: 'Flight number, hotel, child seats, extra stops',
    submit: 'Get a price on WhatsApp',
    submitting: 'Opening WhatsApp…',
    successTitle: 'WhatsApp is opening',
    successBody:
      'If nothing happened, tap the button again or message us directly.',
    errorRequired: 'Please fill in this field.',
    errorEmail: 'Please enter a valid email address.',
    emailCopyNote:
      'We send a copy of your request to ourselves by email so nothing gets lost.',
    passengerSuffix: 'passengers',
    passengerSuffixOne: 'passenger',
    /** Template for the WhatsApp message. {token} values are filled in. */
    whatsappTemplate:
      'Hi, I would like a price for a private van.\n\nService: {service}\nFrom: {from}\nTo: {to}\nDate: {date}\nPassengers: {passengers}\nName: {name}\n{notes}',
    whatsappNotesPrefix: 'Notes: ',
    /** Message behind the floating WhatsApp button and header button. */
    genericWhatsappMessage:
      'Hi, I would like a price for a private van and driver in Israel.',
  },

  /* ---------------------------------------------------------------- */
  /* Home — trust strip                                                */
  /* ---------------------------------------------------------------- */
  trust: [
    { icon: 'van', label: `${FLEET.vanCount} new Mercedes Sprinters` },
    { icon: 'plane', label: 'Pickup at Ben Gurion arrivals' },
    { icon: 'clock', label: 'Full day or one way' },
    { icon: 'pin', label: 'Anywhere in Israel' },
  ],

  /* ---------------------------------------------------------------- */
  /* Home — services                                                   */
  /* ---------------------------------------------------------------- */
  services: {
    eyebrow: 'What we do',
    heading: 'Three ways to travel with us',
    intro:
      'Every trip is private. The van is yours and the driver stays with you, so there are no other passengers and no fixed departure times.',
    items: [
      {
        id: 'airport-transfer',
        title: 'Ben Gurion Airport Transfers',
        body: 'We pick you up at arrivals and drive you straight to your hotel or apartment. One price for the whole van, so the group and the luggage stay together.',
        image: 'pageAirport',
        imageAlt:
          'Travellers loading suitcases into a white Mercedes Sprinter van outside an airport terminal.',
        pageKey: 'airportTransfer',
        linkLabel: 'Airport transfers',
      },
      {
        id: 'full-day',
        title: 'Private Van with Driver, Full Day',
        body: 'Keep the van and driver for the day and set your own route. Good for families and small groups who want to see several places without changing vehicles.',
        image: 'serviceFullDay',
        imageAlt:
          'Driver standing beside the open side door of a Mercedes Sprinter van on a quiet street.',
        pageKey: 'privateDriver',
        linkLabel: 'Private driver',
      },
      {
        id: 'city-to-city',
        title: 'Transfers Anywhere in Israel',
        body: 'One-way rides between cities, hotels, ports and border crossings. Tell us where you are and where you need to be, and we will give you a price.',
        image: 'serviceCityToCity',
        imageAlt:
          'White Mercedes Sprinter van driving along a highway through open countryside in Israel.',
        pageKey: 'privateDriver',
        linkLabel: 'City to city',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Home — routes                                                     */
  /* ---------------------------------------------------------------- */
  routes: {
    eyebrow: 'Routes & prices',
    heading: 'Popular routes',
    intro:
      'Prices are for the whole van, one way, including the driver. Tell us your exact pickup point and we will confirm the price before you book.',
    priceLabel: 'From',
    perVan: 'per van',
    durationLabel: 'Drive time',
    ctaLabel: 'Ask about this route',
    notListed: 'Going somewhere else?',
    notListedBody:
      'We drive anywhere in Israel. Send us your pickup point and destination and we will reply with a price.',
    notListedCta: 'Ask for a price',
    routeNames: {
      'Ben Gurion Airport': 'Ben Gurion Airport',
      Jerusalem: 'Jerusalem',
      'Tel Aviv': 'Tel Aviv',
      'Dead Sea': 'Dead Sea',
      Haifa: 'Haifa',
      Tiberias: 'Tiberias',
      Eilat: 'Eilat',
    } as Record<string, string>,
  },

  /* ---------------------------------------------------------------- */
  /* Home — fleet                                                      */
  /* ---------------------------------------------------------------- */
  fleet: {
    eyebrow: 'Our fleet',
    heading: `${FLEET.vanCount} Mercedes-Benz Sprinters`,
    intro:
      'The same vans on every trip. Air conditioned, cleaned between rides, and big enough that nobody has to hold a suitcase on their lap.',
    specs: [
      { label: 'Vehicle', value: FLEET.vehicleName },
      { label: 'Passenger seats', value: FLEET.seats },
      { label: 'Large suitcases', value: FLEET.luggage },
      { label: 'Model year', value: FLEET.modelYear },
    ],
    amenitiesHeading: 'In every van',
    videoHeading: 'A look inside the van',
    videoCta: 'Play video',
    videoAlt: 'Video thumbnail showing the inside of the Mercedes Sprinter van.',
    gallery: [
      {
        image: 'fleetExterior',
        alt: 'White Mercedes Sprinter van photographed from the front three-quarter angle.',
      },
      {
        image: 'fleetInterior',
        alt: 'Passenger seats inside the Mercedes Sprinter van, in rows of three.',
      },
      {
        image: 'fleetLuggage',
        alt: 'Suitcases stacked in the rear luggage area of the Sprinter van.',
      },
      {
        image: 'fleetSideDoor',
        alt: 'Open sliding side door of the Sprinter van with the boarding step down.',
      },
      {
        image: 'fleetSeatsDetail',
        alt: 'Close view of a headrest and seatbelt inside the Sprinter van.',
      },
      {
        image: 'fleetOnRoad',
        alt: 'The Sprinter van parked at a viewpoint overlooking hills in Israel.',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Home — how it works                                               */
  /* ---------------------------------------------------------------- */
  how: {
    eyebrow: 'How it works',
    heading: 'Three steps, no account needed',
    steps: [
      {
        title: 'Tell us about the trip',
        body: 'Send the date, your pickup point and where you want to go. WhatsApp is usually the fastest way to reach us.',
      },
      {
        title: 'We send you a price',
        body: 'You get a price for the whole van with the driver included, so you know the cost before you agree to anything.',
      },
      {
        title: 'Meet your driver',
        body: 'We confirm the pickup details with you the day before, then the driver meets you at the agreed time and place.',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Home — reviews                                                    */
  /* ---------------------------------------------------------------- */
  reviews: {
    eyebrow: 'Reviews',
    heading: 'What travellers say',
    intro: '',
    placeholderNotice:
      'Development only: these are placeholder reviews. Replace them in src/data/reviews.json, then set arePlaceholders to false. This notice never appears in a production build.',
    ratingLabel: 'Rating',
    outOf: 'out of 5',
  },

  /* ---------------------------------------------------------------- */
  /* Home — FAQ                                                        */
  /* ---------------------------------------------------------------- */
  faq: {
    eyebrow: 'Questions',
    heading: 'Frequently asked questions',
    intro: 'If your question is not here, send it to us on WhatsApp.',
    items: [
      {
        q: 'How many people fit in one van?',
        a: `Each ${FLEET.vehicleName} seats ${FLEET.seats} passengers with room for ${FLEET.luggage} large suitcases. We run ${FLEET.vanCount} vans, so a larger group can still travel together.`,
      },
      {
        q: 'Is the price per person or per van?',
        a: 'Per van. You are paying for the vehicle and the driver, not for a seat, so the price is the same whether two of you travel or the van is full.',
      },
      {
        q: 'Where do we meet you at Ben Gurion Airport?',
        a: 'We pick up at the arrivals hall. [PLACEHOLDER — add the exact meeting point and how travellers will recognise the driver.]',
      },
      {
        q: 'What happens if my flight is delayed?',
        a: '[PLACEHOLDER — describe how you track flights, how long the driver waits, and whether a delay costs anything extra.]',
      },
      {
        q: 'How do I pay?',
        a: '[PLACEHOLDER — list the payment methods you accept and say whether payment is due before or after the trip.]',
      },
      {
        q: 'Do you have child seats?',
        a: '[PLACEHOLDER — say which child and booster seats you can supply, and whether they cost extra.]',
      },
      {
        q: 'What languages does the driver speak?',
        a: `Our drivers speak ${BUSINESS.languages.join(' and ')}.`,
      },
      {
        q: 'Can we stop along the way?',
        a: 'On a full day with a driver, yes — the van and driver are yours for the day and you set the route. On a one-way transfer, tell us about any stops in advance so we can include them in the price.',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Home — request a quote form                                       */
  /* ---------------------------------------------------------------- */
  requestQuote: {
    eyebrow: 'Get a price',
    heading: 'Request a quote',
    intro:
      'Tell us where you are going and when, and we will come back with a price for the van.',
    /* Labels are read by screen readers; the same words show as placeholders. */
    name: 'What is your name?',
    phone: 'Phone Number',
    email: 'Email Address',
    message: 'Your message',
    messagePlaceholder: 'Your message',
    submit: 'Request a Quote',
    sending: 'Sending…',
    successTitle: 'Thank you, we have your request.',
    successBody: 'We will get back to you with a price as soon as we can.',
    fallbackTitle: 'We could not send that just now.',
    fallbackBody:
      'Send it to us on WhatsApp instead so your request does not get lost.',
    fallbackCta: 'Send on WhatsApp',
    errorRequired: 'Please fill in this field.',
    errorEmail: 'Please enter a valid email address.',
    errorContact: 'Please give us a phone number or an email address.',
    /* Used for the WhatsApp fallback when the email copy does not go through. */
    whatsappTemplate:
      'Hi, I would like a price for a private van.\n\nName: {name}\nPhone: {phone}\nEmail: {email}\n\n{message}',
  },

  /* ---------------------------------------------------------------- */
  /* Home — CTA band                                                   */
  /* ---------------------------------------------------------------- */
  cta: {
    heading: 'Ready when you are',
    body: 'Send us your dates and we will come back with a price for the van. No deposit to ask a question.',
    primary: 'Book on WhatsApp',
    secondary: `Call ${CONTACT.phoneDisplay}`,
  },

  /* ---------------------------------------------------------------- */
  /* Footer                                                            */
  /* ---------------------------------------------------------------- */
  footer: {
    tagline:
      'A family-run private van and driver service in Israel, for travellers who would rather not work out the buses.',
    contactHeading: 'Contact',
    pagesHeading: 'Pages',
    hoursHeading: 'Hours',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    serviceAreaHeading: 'Service area',
    serviceArea: 'All of Israel, including Ben Gurion Airport, Jerusalem, Tel Aviv, the Dead Sea, Galilee and Eilat.',
    rights: 'All rights reserved.',
  },

  /* ---------------------------------------------------------------- */
  /* Pages — SEO metadata, slugs and body content                      */
  /* ---------------------------------------------------------------- */
  pages: {
    home: {
      slug: '',
      title: 'Private Van and Driver in Israel | IsraelPrivateVan',
      description:
        'Private van with an English-speaking driver in Israel. Ben Gurion Airport transfers, full-day private tours and one-way rides anywhere in the country, in a new Mercedes Sprinter.',
      breadcrumb: 'Home',
      h1: 'Your private van and driver in Israel',
      heroImage: 'heroPoster',
      heroImageAlt:
        'The Dead Sea at dusk, with the mountains of Jordan on the far shore.',
      lead: '',
      body: [],
      routeIds: [],
      faq: [],
    },

    airportTransfer: {
      slug: 'ben-gurion-airport-transfer',
      title: 'Ben Gurion Airport Transfer | Private Van and Driver',
      description:
        'Book a private Ben Gurion Airport transfer in a Mercedes Sprinter van. Pickup at arrivals, one price for the whole van, and an English-speaking driver to your hotel anywhere in Israel.',
      breadcrumb: 'Ben Gurion Airport Transfer',
      h1: 'Ben Gurion Airport transfer by private van',
      heroImage: 'pageAirport',
      heroImageAlt:
        'The arrivals walkway at Ben Gurion Airport, lit through its glass roof.',
      lead: 'Land, find your driver, and go straight to your hotel. No taxi queue, no working out the train, and no splitting the group across two cars.',
      body: [
        {
          heading: 'What the transfer includes',
          paragraphs: [
            'We meet arriving passengers in the Ben Gurion arrivals hall and take you and your luggage directly to the address you give us. The van is private: nobody else is picked up along the way.',
            'The price covers the vehicle and the driver for the journey, so it does not change if there are two of you or twelve.',
          ],
          bullets: [
            'Pickup at the arrivals hall',
            'Help with luggage to and from the van',
            'Door-to-door, no other stops unless you ask for them',
            'One price for the whole van, agreed before you book',
          ],
        },
        {
          heading: 'Departures as well as arrivals',
          paragraphs: [
            'We also drive to the airport. Tell us your flight time and where we are collecting you, and we will agree a pickup time with you in advance.',
            '[PLACEHOLDER — add how far ahead of a flight you recommend leaving, if you want to give that guidance.]',
          ],
          bullets: [],
        },
      ],
      routeIds: [
        'tlv-jerusalem',
        'tlv-telaviv',
        'tlv-deadsea',
        'tlv-haifa',
        'tlv-tiberias',
        'tlv-eilat',
      ],
      faq: [
        {
          q: 'Where does the driver wait at Ben Gurion?',
          a: 'We pick up at the arrivals hall. [PLACEHOLDER — add the exact meeting point and how travellers will recognise the driver.]',
        },
        {
          q: 'What if my flight lands early or late?',
          a: '[PLACEHOLDER — describe how you handle early and late arrivals and any waiting charge.]',
        },
        {
          q: 'Can you fit our luggage?',
          a: `Each van takes ${FLEET.luggage} large suitcases alongside ${FLEET.seats} passengers. If you are carrying more than that — bikes, instruments, sports gear — tell us when you ask for a price.`,
        },
      ],
    },

    privateDriver: {
      slug: 'private-driver-israel',
      title: 'Private Driver in Israel | Van and Driver by the Day',
      description:
        'Hire a private driver in Israel with a Mercedes Sprinter van. Keep the van for a full day or book a one-way ride between any two places in the country.',
      breadcrumb: 'Private Driver Israel',
      h1: 'Private driver in Israel',
      heroImage: 'pagePrivateDriver',
      heroImageAlt:
        'A car on an open road curving through dry hills in northern Israel.',
      lead: 'Hire the van and the driver together, for a day or for a single journey. You decide where to go and how long to stay.',
      body: [
        {
          heading: 'A full day with a driver',
          paragraphs: [
            'The van and driver are yours for the day. You set the route, stop where you want, and leave your bags in the van between stops.',
            'This works well for families and small groups covering several places in one day, or for anyone who would rather not drive on unfamiliar roads.',
          ],
          bullets: [
            'You choose the route and the pace',
            'Luggage and shopping stay in the van',
            'The driver waits at each stop',
            'One price for the day, for the whole van',
          ],
        },
        {
          heading: 'One-way rides between cities',
          paragraphs: [
            'If you only need to get from one place to another, we do that too — hotel to hotel, city to port, or anywhere else in Israel.',
            'Send us the pickup point and destination and we will reply with a price for the van.',
          ],
          bullets: [],
        },
      ],
      routeIds: ['jerusalem-deadsea', 'telaviv-jerusalem', 'tlv-haifa', 'tlv-eilat'],
      faq: [
        {
          q: 'How long is a full day?',
          a: '[PLACEHOLDER — say how many hours a full day covers and what happens if the day runs longer.]',
        },
        {
          q: 'Does the driver guide the tour?',
          a: '[PLACEHOLDER — say whether your drivers act as guides, and whether you can arrange a licensed guide separately.]',
        },
        {
          q: 'Can we change the plan on the day?',
          a: 'Usually yes. Tell the driver what you would like to do and they will say whether it fits in the time you have booked.',
        },
      ],
    },

    jerusalemTour: {
      slug: 'jerusalem-day-tour-private',
      title: 'Private Jerusalem Day Tour | Van and Driver from Tel Aviv',
      description:
        'A private Jerusalem day tour by van with your own driver. Pickup from Tel Aviv, Ben Gurion Airport or your hotel, at your own pace and with no group to keep up with.',
      breadcrumb: 'Jerusalem Day Tour',
      h1: 'Private Jerusalem day tour',
      heroImage: 'pageJerusalem',
      heroImageAlt:
        'The Western Wall plaza in Jerusalem, with the gold Dome of the Rock behind it.',
      lead: 'Spend the day in Jerusalem with a van and driver of your own. We collect you from your hotel and bring you back when you are ready to leave.',
      body: [
        {
          heading: 'How the day works',
          paragraphs: [
            'We pick you up in the morning from Tel Aviv, Ben Gurion Airport or wherever you are staying, and drive to Jerusalem. The driver stays with you for the day, moving the van between stops so you are not walking back to where you started.',
            'You decide what to see and how long to spend at each place. If you have a guide booked, we will collect them too.',
          ],
          bullets: [
            'Hotel pickup and drop-off',
            'You set the itinerary',
            'The driver moves the van between stops',
            'One price for the whole van',
          ],
        },
        {
          heading: 'Where people usually go',
          paragraphs: [
            'Most visitors want the Old City and the viewpoint on the Mount of Olives, and many add Yad Vashem or the Israel Museum. Tell us what matters to you and we will work out a sensible order.',
            '[PLACEHOLDER — add a suggested itinerary here once you have one you are happy to publish, including entry fees you do or do not cover.]',
          ],
          bullets: [],
        },
      ],
      routeIds: ['telaviv-jerusalem', 'tlv-jerusalem', 'jerusalem-deadsea'],
      faq: [
        {
          q: 'Do you include entry tickets?',
          a: '[PLACEHOLDER — say which entry fees, if any, are included in the price.]',
        },
        {
          q: 'Can we do Jerusalem and the Dead Sea in one day?',
          a: 'Some groups do. It makes for a long day, so tell us how early you are willing to start and we will say honestly whether it works.',
        },
        {
          q: 'What should we wear?',
          a: 'Several religious sites in the Old City ask visitors to cover shoulders and knees. Comfortable shoes help — the Old City is cobbled and hilly.',
        },
      ],
    },

    deadSeaTour: {
      slug: 'dead-sea-masada-private-tour',
      title: 'Dead Sea and Masada Private Tour | Private Van and Driver',
      description:
        'A private Dead Sea and Masada tour by van, with pickup from Jerusalem, Tel Aviv or your hotel. Your own driver, your own timing, and one price for the whole van.',
      breadcrumb: 'Dead Sea & Masada Tour',
      h1: 'Dead Sea and Masada private tour',
      heroImage: 'pageDeadSea',
      heroImageAlt:
        'The cliffs of Masada rising above the desert plain, with the Dead Sea beyond.',
      lead: 'Masada in the morning, the Dead Sea in the afternoon, and a van waiting for you at both. No coach timetable to keep to.',
      body: [
        {
          heading: 'A typical day',
          paragraphs: [
            'Groups usually start early to reach Masada before the heat, then spend the afternoon at the Dead Sea. The driver stays with the van, so you can leave towels and bags behind while you swim.',
            'Ein Gedi is close by if you want a walk between the two, and we can add it if the timing works.',
          ],
          bullets: [
            'Early start to beat the heat at Masada',
            'Van and driver wait at each stop',
            'Somewhere to leave your things while you swim',
            'Pickup and drop-off at your hotel',
          ],
        },
        {
          heading: 'Things worth knowing',
          paragraphs: [
            'The Dead Sea area is hot for most of the year and there is very little shade at Masada. Bring water, a hat and sunscreen, and sandals you can walk into the water with — the salt crystals on the shore are sharp.',
            '[PLACEHOLDER — add whether the price includes the Masada cable car, beach entry, or anything else.]',
          ],
          bullets: [],
        },
      ],
      routeIds: ['jerusalem-deadsea', 'tlv-deadsea'],
      faq: [
        {
          q: 'Is the cable car at Masada included?',
          a: '[PLACEHOLDER — say whether the cable car and site entry are included in your price.]',
        },
        {
          q: 'Which Dead Sea beach do you go to?',
          a: '[PLACEHOLDER — name the beach or beaches you normally use and whether entry is paid.]',
        },
        {
          q: 'How long is the drive?',
          a: '[PLACEHOLDER — add approximate drive times from Jerusalem and from Tel Aviv.]',
        },
      ],
    },

    galileeTour: {
      slug: 'galilee-private-tour',
      title: 'Galilee Private Tour | Van and Driver for the Day',
      description:
        'A private Galilee tour by van with your own driver. The Sea of Galilee, Nazareth, the Golan and the north of Israel, at your own pace and with hotel pickup.',
      breadcrumb: 'Galilee Tour',
      h1: 'Galilee private tour',
      heroImage: 'pageGalilee',
      heroImageAlt:
        'Green hills above the Sea of Galilee with the lake visible in the distance.',
      lead: 'The north of Israel in a day, with a van and driver of your own. Good for groups who want to cover ground without renting a car.',
      body: [
        {
          heading: 'What a Galilee day can cover',
          paragraphs: [
            'The Galilee is spread out, which is exactly why a van helps. Most groups build a day around the Sea of Galilee and add Nazareth, Capernaum, the Jordan River or a viewpoint in the Golan Heights.',
            'Tell us what you want to see and roughly when you need to be back, and we will tell you what fits comfortably in the day.',
          ],
          bullets: [
            'Hotel pickup, including from Tel Aviv and Jerusalem',
            'You choose the stops',
            'The driver waits at each one',
            'One price for the whole van',
          ],
        },
        {
          heading: 'Staying in the north',
          paragraphs: [
            'If you are staying in Tiberias or the Galilee rather than driving up for the day, we can start from your hotel and cover more ground.',
            '[PLACEHOLDER — add whether you offer multi-day trips in the north and how those are priced.]',
          ],
          bullets: [],
        },
      ],
      routeIds: ['tlv-tiberias', 'tlv-haifa'],
      faq: [
        {
          q: 'Is a Galilee day trip from Tel Aviv too long?',
          a: '[PLACEHOLDER — give your honest view, with the approximate drive time each way.]',
        },
        {
          q: 'Can we visit the Golan Heights?',
          a: 'It can usually be added to a Galilee day. Tell us which sites you have in mind and we will say whether they fit.',
        },
        {
          q: 'Do you go to Nazareth?',
          a: 'Yes, Nazareth is a common stop on a Galilee day and we can build the route around it.',
        },
      ],
    },

    contact: {
      slug: 'contact',
      title: 'Contact IsraelPrivateVan | Private Van and Driver in Israel',
      description:
        'Get in touch about a private van and driver in Israel. Message us on WhatsApp, call, or send the quote form and we will reply with a price for your trip.',
      breadcrumb: 'Contact',
      h1: 'Contact us',
      heroImage: 'pageContact',
      heroImageAlt:
        'The Tel Aviv shoreline and skyline seen from Jaffa.',
      lead: 'WhatsApp is the fastest way to reach us. You can also call, email, or fill in the form and we will come back to you.',
      body: [
        {
          heading: 'Before you write',
          paragraphs: [
            'It helps if you can tell us the date, how many people are travelling, where we are collecting you and where you want to go. With that we can usually send a price straight away.',
            'If you are arriving on a flight, the flight number is useful too.',
          ],
          bullets: [],
        },
      ],
      routeIds: [],
      faq: [],
    },
  } satisfies Record<PageKey, PageContent>,

  /* ---------------------------------------------------------------- */
  /* Schema.org descriptions                                           */
  /* ---------------------------------------------------------------- */
  schema: {
    businessDescription:
      'Family-run private van and driver service in Israel. Ben Gurion Airport transfers, full-day private tours and one-way rides anywhere in the country, in Mercedes Sprinter vans with English-speaking drivers.',
    serviceType: 'Private van and driver hire',
    areaServed: 'Israel',
  },

  /* ---------------------------------------------------------------- */
  /* 404                                                               */
  /* ---------------------------------------------------------------- */
  notFound: {
    title: 'Page not found',
    heading: 'We could not find that page',
    body: 'The link may be out of date. Try the home page, or message us and we will point you in the right direction.',
    cta: 'Go to the home page',
  },
} as const;

export default en;
