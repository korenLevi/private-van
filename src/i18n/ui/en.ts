import { BUSINESS, FLEET, CONTACT, TRACK_RECORD } from '../../config/site';
import guides from './en-guides';
import pages from './en-pages';

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
    h1: 'Israel Private Van: a private van and driver anywhere in Israel',
    subtitle:
      'Ben Gurion Airport transfers, full-day private tours and rides anywhere in Israel, in a new Mercedes Sprinter with an English-speaking driver.',
    videoAlt:
      'A white Mercedes Sprinter van on an Israeli highway at dusk, filmed from the roadside.',
    posterAlt: 'A black Mercedes Sprinter passenger van parked on a road under a blue sky.',
    primaryCta: 'Book on WhatsApp',
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
    { icon: 'van', label: 'New Mercedes Sprinter and Savanna vans' },
    { icon: 'plane', label: 'Pickup at Ben Gurion arrivals' },
    { icon: 'clock', label: `${TRACK_RECORD.yearsInBusiness} years on the road` },
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
        image: 'serviceAirport',
        imageAlt:
          'Arriving passengers walking towards baggage claim at Ben Gurion Airport.',
        pageKey: 'airportTransfers',
        linkLabel: 'Airport transfers',
      },
      {
        id: 'full-day',
        title: 'Private Van with Driver, Full Day',
        body: 'Keep the van and driver for the day and set your own route. Good for families and small groups who want to see several places without changing vehicles.',
        image: 'serviceFullDay',
        imageAlt:
          'The Tower of David and the Old City walls of Jerusalem lit at dusk, above the road below.',
        pageKey: 'vanWithDriver',
        linkLabel: 'Private driver',
      },
      {
        id: 'city-to-city',
        title: 'Transfers Anywhere in Israel',
        body: 'One-way rides between cities, hotels, ports and border crossings. Tell us where you are and where you need to be, and we will give you a price.',
        image: 'serviceCityToCity',
        imageAlt:
          'A black Mercedes-Benz Sprinter passenger van, seen from the front quarter.',
        pageKey: 'privateTransfers',
        linkLabel: 'Private transfers',
      },
    ],
  },


  /* ---------------------------------------------------------------- */
  /* Home — what we offer carousel                                     */
  /* ---------------------------------------------------------------- */
  offerings: {
    eyebrow: 'What we do',
    heading: 'What we provide',
    headingAccent: 'for our customers',
    previous: 'Previous services',
    next: 'More services',
    goTo: 'Go to service',
    items: [
      {
        pageKey: 'airportTransfers',
        label: 'Ben Gurion airport transfers',
        image: 'cardAirportTransfer',
        imageAlt: 'Travellers wheeling suitcases through an airport departures hall.',
      },
      {
        pageKey: 'vanWithDriver',
        label: 'Van with a driver for the day',
        image: 'stickDriver',
        imageAlt: 'A car on an open road curving through dry hills in northern Israel.',
      },
      {
        pageKey: 'privateTours',
        label: 'Private tours across the country',
        image: 'cardPrivateTours',
        imageAlt: 'Walkers on a desert trail in Israel.',
      },
      {
        pageKey: 'deadSeaMasadaTour',
        label: 'Dead Sea and Masada day trips',
        image: 'pageDeadSea',
        imageAlt: 'The cliffs of Masada rising above the desert plain, with the Dead Sea beyond.',
      },
      {
        pageKey: 'businessTransportation',
        label: 'Business and delegation transport',
        image: 'cardBusinessTravel',
        imageAlt: 'A business traveller walking through an airport terminal with bags.',
      },
      {
        pageKey: 'weddingTransportation',
        label: 'Weddings and events',
        image: 'weddingVan',
        imageAlt: 'A white tulle bow tied to a wedding car.',
      },
      {
        pageKey: 'artistBandTransportation',
        label: 'Artists, bands and crews',
        image: 'cardArtists',
        imageAlt: 'A crowd in front of a lit concert stage.',
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
      'Prices depend on the route, the hour and the size of the group, so we quote each trip rather than publish a list. Every quote is for the whole van, including the driver. Send us your pickup point and destination and we will reply with a price.',
    priceLabel: 'Price',
    /** Prices are quoted per job, never published. */
    priceOnRequest: 'On request',
    perVan: 'For the whole van, by WhatsApp',
    durationLabel: 'Drive time',
    ctaLabel: 'Ask about this route',
    notListed: 'Going somewhere else?',
    notListedBody:
      'We drive anywhere in Israel. Send us your pickup point and destination and we will reply with a price.',
    notListedCta: 'Ask for a price',
    /** WhatsApp message behind each route's button. {from} and {to} are filled in. */
    askMessage: 'Hi, what is the price for a private van from {from} to {to}?',
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
    heading: 'Mercedes Sprinter and Savanna vans',
    intro:
      'Air conditioned, cleaned between rides, and big enough that nobody has to hold a suitcase on their lap.',
    specs: [
      { label: 'Vehicles', value: 'Sprinter and Savanna' },
      { label: 'Passenger seats', value: FLEET.seats },
      { label: 'Model years', value: FLEET.modelYear },
      { label: 'Available', value: '24/7' },
    ],
    amenitiesHeading: 'In every van',
    amenities: [
      'Air conditioning',
      'USB charging',
      'Bottled water',
      'Child seats on request',
    ],
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
        a: `Between 12 and 15 passengers, depending on the van. For a bigger group we send more than one van so everyone travels together.`,
      },
      {
        q: 'Is the price per person or per van?',
        a: 'Per van. You are paying for the vehicle and the driver, not for a seat, so the price is the same whether two of you travel or the van is full.',
      },
      {
        q: 'Where do we meet you at Ben Gurion Airport?',
        a: 'Right where you walk out of arrivals. The van is waiting at the terminal exit, so there is no shuttle bus or car park to find.',
      },
      {
        q: 'What happens if my flight is delayed?',
        a: 'We track your flight and follow any delay, so the driver arrives for the time you actually land rather than the time on the ticket.',
      },
      {
        q: 'Do you drive at night and on Shabbat?',
        a: 'Yes. We work around the clock, every day of the year, including Shabbat and holidays, when trains and most buses in Israel do not run.',
      },
      {
        q: 'Do you have child seats?',
        a: 'Yes, at an extra charge. Tell us the ages of the children when you book and we will bring the right seats.',
      },
      {
        q: 'What languages does the driver speak?',
        a: `Our drivers speak ${BUSINESS.languages.join(' and ')}.`,
      },
      {
        q: 'Can we stop along the way?',
        a: 'On a full day with a driver, yes. The van and driver are yours for the day and you set the route. On a one-way transfer, tell us about any stops in advance so we can include them in the price.',
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
  /* Guides                                                            */
  /* ---------------------------------------------------------------- */
  guides: {
    eyebrow: 'Guide',
    indexEyebrow: 'Guides',
    summaryLabel: 'In short',
    updatedLabel: 'Updated',
    readGuide: 'Read the guide',
    allGuides: 'All guides',
    moreGuides: 'More guides',
    helpHeading: 'Still deciding?',
    helpBody: 'Send us the dates and the group size and we will tell you what fits, even if the answer is that you do not need us.',
  },

  /* ---------------------------------------------------------------- */
  /* Route facts and related pages                                     */
  /* ---------------------------------------------------------------- */
  trip: {
    heading: 'Trip details',
    vehicle: 'Vehicle',
    seats: 'Seats',
    pickup: 'Pickup',
    availability: 'Available',
    included: 'What the price includes',
  },

  related: {
    heading: 'Related pages',
    backToHub: 'Back to',
  },

  /* ---------------------------------------------------------------- */
  /* Home — CTA band                                                   */
  /* ---------------------------------------------------------------- */
  cta: {
    heading: 'Ready when you are',
    body: 'Send us your dates and we will come back with a price for the van. No deposit to ask a question.',
    primary: 'Book on WhatsApp',
    secondary: 'Call',
  },

  /* ---------------------------------------------------------------- */
  /* Footer                                                            */
  /* ---------------------------------------------------------------- */
  footer: {
    tagline: `Private van and driver across Israel, ${TRACK_RECORD.yearsInBusiness} years on the road. Airport transfers, full days with a driver and rides anywhere in the country.`,
    contactHeading: 'Contact',
    pagesHeading: 'Pages',
    servicesHeading: 'Services',
    toursHeading: 'Tours',
    companyHeading: 'Company',
    hoursHeading: 'Hours',
    hoursText: 'Open 24/7, including nights, Shabbat and holidays',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    serviceAreaHeading: 'Service area',
    serviceArea: 'All of Israel, including Ben Gurion Airport, Jerusalem, Tel Aviv, the Dead Sea, Galilee and Eilat.',
    rights: 'All rights reserved.',
  },

  /** Service pages and guides share one map, keyed the same way. */
  pages: { ...pages, ...guides },

  /* ---------------------------------------------------------------- */
  /* Schema.org descriptions                                           */
  /* ---------------------------------------------------------------- */
  schema: {
    businessDescription:
      `Private van and driver service in Israel, ${TRACK_RECORD.yearsInBusiness} years on the road. Ben Gurion airport transfers, full-day private tours and rides anywhere in the country, in Mercedes Sprinter and Savanna vans.`,
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
