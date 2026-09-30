import { FLEET, PLACEHOLDER, TRACK_RECORD } from '../../config/site';
import type { PageContent, PageKey } from '../types';

/**
 * English page content for the whole page map.
 *
 * One clear topic per page. The primary keyword from section 5 of the brief
 * appears in the title, the H1, the URL, the first paragraph and one H2;
 * secondary keywords sit in the H2s, the body and the FAQ where they read
 * naturally. Nothing is repeated for its own sake.
 *
 * Trip times and distances are placeholders: the brief supplies none, and a
 * drive time is a claim a customer will hold us to. `npm run build` lists
 * every one still outstanding.
 */

const SEATS = FLEET.seats;
const VEHICLE = 'Mercedes Sprinter or Savanna';

/** Alt text describes the photograph, not the page it happens to sit on. */
const ALT = {
  // NOTE: src/assets/main-pic.jpg is currently a dealership listing photo
  // carrying a "Chicago Motor Cars" watermark. Replace it with a photograph
  // of an actual company van and this line stays correct.
  heroPoster: 'A black long-wheelbase Mercedes Sprinter passenger van, seen from the side.',
  pageAirport: 'The arrivals walkway at Ben Gurion Airport, lit through its glass roof.',
  pageJerusalem: 'The Western Wall plaza in Jerusalem, with the gold Dome of the Rock behind it.',
  pageDeadSea: 'The cliffs of Masada rising above the desert plain, with the Dead Sea beyond.',
  pagePrivateDriver: 'A car on an open road curving through dry hills in northern Israel.',
  pageContact: 'The Tel Aviv shoreline and skyline seen from Jaffa.',
  pageGalilee: 'Green hills above the Sea of Galilee with the lake in the distance.',
  fleetExterior: 'A white passenger van photographed from the front three-quarter angle.',
  serviceFullDay: 'A driver standing beside the open side door of a passenger van.',
  serviceCityToCity: 'A white passenger van on a highway through open countryside in Israel.',
} as const;

/** Every route page carries the same fact block, with its own numbers. */
const tripFacts = (duration: string, distance: string) => ({
  duration,
  distance,
  vehicle: VEHICLE,
  seats: SEATS,
});

const AIRPORT_INCLUDED = [
  'Pickup inside the Ben Gurion arrivals hall',
  'Help with luggage to and from the van',
  'Door to door, with no other passengers',
  'One price for the whole van, agreed before you book',
];

const DAY_INCLUDED = [
  'Hotel pickup and drop-off',
  'The van and driver stay with you all day',
  'You set the route and the pace',
  'One price for the whole van, not per person',
];

const pages: Record<PageKey, PageContent> = {
  /* ---------------------------------------------------------------- */
  /* Home                                                              */
  /* ---------------------------------------------------------------- */
  home: {
    title: 'Private Van with Driver in Israel | Israel Private Van',
    description:
      'Private van and driver across Israel. Ben Gurion airport transfers, full days with a driver, and rides anywhere in the country.',
    breadcrumb: 'Home',
    h1: 'Private van with driver in Israel',
    intro:
      'Ben Gurion airport transfers, a van and driver for the day, and private rides anywhere in the country.',
    heroImage: 'heroPoster',
    heroImageAlt: ALT.heroPoster,
    included: [],
    body: [],
    routeIds: [],
    faq: [],
    related: [],
  },

  /* ---------------------------------------------------------------- */
  /* Airport transfers: hub                                            */
  /* ---------------------------------------------------------------- */
  airportTransfers: {
    title: 'Ben Gurion Airport Transfer | Private Van and Driver',
    description:
      'Private Ben Gurion airport transfer by van. Pickup at arrivals, one price for the whole van, English-speaking driver to your door.',
    breadcrumb: 'Airport transfers',
    h1: 'Ben Gurion airport transfer by private van',
    intro:
      'We meet you in the Ben Gurion arrivals hall and drive you straight to your door. The van is private, the price covers the whole vehicle, and the driver speaks English, Hebrew and Russian.',
    heroImage: 'pageAirport',
    heroImageAlt: ALT.pageAirport,
    included: AIRPORT_INCLUDED,
    body: [
      {
        heading: 'What a private airport transfer includes',
        paragraphs: [
          'Your driver waits in the arrivals hall and helps with the luggage. Nobody else is picked up along the way, so the van goes from the terminal to your address and nowhere else.',
          'The price covers the vehicle and the driver for the journey. It does not change if two of you travel or twelve, which usually makes a van cheaper than several airport taxis once a group is more than four people.',
        ],
        bullets: [],
      },
      {
        heading: 'Transfers to the airport as well',
        paragraphs: [
          'We drive to Ben Gurion as often as we drive from it. Give us your flight time and your pickup address and we will agree a collection time with you in advance.',
          '[PLACEHOLDER: add how far ahead of a flight you recommend leaving, if you want to publish that guidance.]',
        ],
        bullets: [],
      },
      {
        heading: 'Night flights and early mornings',
        paragraphs: [
          'Ben Gurion is busiest very late and very early, which is exactly when public transport thins out. We run at those hours.',
          '[PLACEHOLDER: confirm your night and Shabbat availability, and whether either changes the price.]',
        ],
        bullets: [],
      },
    ],
    routeIds: ['tlv-jerusalem', 'tlv-telaviv', 'tlv-haifa', 'tlv-deadsea', 'tlv-eilat'],
    faq: [
      {
        q: 'Where does the driver wait at Ben Gurion?',
        a: 'In the arrivals hall. [PLACEHOLDER: add the exact meeting point and how travellers will recognise the driver.]',
      },
      {
        q: 'What happens if my flight is delayed?',
        a: '[PLACEHOLDER: describe how you track flights, how long the driver waits, and whether a delay costs anything extra.]',
      },
      {
        q: 'How much luggage fits?',
        a: `Each van takes ${FLEET.luggage} large suitcases alongside ${SEATS} passengers. Tell us in advance about bikes, instruments or sports gear so we can plan the space.`,
      },
      {
        q: 'Can you carry a group larger than one van?',
        a: 'Yes. We send more than one van and the group arrives together.',
      },
      {
        q: 'Do you have child seats?',
        a: '[PLACEHOLDER: say which child and booster seats you can supply, and whether they cost extra.]',
      },
    ],
    related: ['bgJerusalem', 'bgTelAviv', 'vanWithDriver'],
    serviceType: 'Airport transfer',
  },

  /* ---------------------------------------------------------------- */
  /* Airport routes                                                    */
  /* ---------------------------------------------------------------- */
  bgJerusalem: {
    title: 'Ben Gurion to Jerusalem Transfer | Private Van',
    description:
      'Private transfer from Ben Gurion airport to Jerusalem by van. Pickup at arrivals, door to door, one price for the whole van including the driver.',
    breadcrumb: 'Ben Gurion to Jerusalem',
    h1: 'Ben Gurion to Jerusalem transfer',
    intro:
      'A private van from the Ben Gurion arrivals hall to any address in Jerusalem. One price for the vehicle, whoever is travelling, with help for the luggage at both ends.',
    heroImage: 'pageJerusalem',
    heroImageAlt: ALT.pageJerusalem,
    trip: tripFacts(
      '[PLACEHOLDER: confirm typical drive time]',
      '[PLACEHOLDER: confirm distance]',
    ),
    included: AIRPORT_INCLUDED,
    body: [
      {
        heading: 'Ben Gurion to Jerusalem by private van',
        paragraphs: [
          'Jerusalem is the most common run we make from the airport. The road climbs steadily out of the coastal plain, and the last stretch into the city is slow at rush hour, so we plan the pickup around your landing time rather than the timetable.',
          'We drop at hotels, apartments, guesthouses and private addresses anywhere in the city, including the Old City gates where larger vehicles cannot always reach the door.',
        ],
        bullets: [],
      },
      {
        heading: 'Why a van rather than a taxi',
        paragraphs: [
          'A family with suitcases rarely fits in one airport taxi. Splitting across two cars means two fares, two drivers and no guarantee you arrive together.',
          `One van seats ${SEATS} with the luggage, so the group stays in one vehicle at one price.`,
        ],
        bullets: [],
      },
    ],
    routeIds: ['tlv-jerusalem'],
    faq: [
      {
        q: 'How long does the drive take?',
        a: '[PLACEHOLDER: confirm typical drive time, and how much longer it takes at rush hour.]',
      },
      {
        q: 'Can you collect us from a Jerusalem hotel for the return?',
        a: 'Yes. Give us the hotel and your flight time and we will agree a pickup with you the day before.',
      },
      {
        q: 'Do you drive into the Old City?',
        a: 'We drop at the nearest gate a van can reach, then it is a short walk. Tell us which quarter you are staying in and we will pick the closest point.',
      },
    ],
    hub: 'airportTransfers',
    related: ['airportTransfers', 'jerusalemDayTour', 'bgTelAviv'],
    serviceType: 'Airport transfer',
  },

  bgTelAviv: {
    title: 'Ben Gurion to Tel Aviv Transfer | Private Van',
    description:
      'Private transfer from Ben Gurion airport to Tel Aviv by van. Pickup at arrivals, straight to your hotel or apartment, one price for the whole van.',
    breadcrumb: 'Ben Gurion to Tel Aviv',
    h1: 'Ben Gurion to Tel Aviv transfer',
    intro:
      'The shortest run we make, and the one where a private van saves the most bother. We meet you at arrivals and drive to any address in Tel Aviv or Jaffa.',
    heroImage: 'pageContact',
    heroImageAlt: ALT.pageContact,
    trip: tripFacts(
      '[PLACEHOLDER: confirm typical drive time]',
      '[PLACEHOLDER: confirm distance]',
    ),
    included: AIRPORT_INCLUDED,
    body: [
      {
        heading: 'Tel Aviv airport transfer, door to door',
        paragraphs: [
          'Tel Aviv is close enough to the airport that the journey is short, and awkward enough that the last hundred metres matter. Many of the seafront streets are one way, and a lot of apartment buildings have no obvious place to stop.',
          'Give us the exact address and we will work out where to pull in rather than leaving you on a corner with the bags.',
        ],
        bullets: [],
      },
      {
        heading: 'Late arrivals',
        paragraphs: [
          'A good share of flights into Ben Gurion land after midnight, when the train has stopped and the taxi queue is long.',
          '[PLACEHOLDER: confirm your night availability and whether a night pickup changes the price.]',
        ],
        bullets: [],
      },
    ],
    routeIds: ['tlv-telaviv'],
    faq: [
      {
        q: 'How long does the drive take?',
        a: '[PLACEHOLDER: confirm typical drive time, and how much longer it takes at rush hour.]',
      },
      {
        q: 'Is a van worth it for two people?',
        a: 'If you are travelling light, a taxi may be cheaper. A van earns its keep when there is a group, a lot of luggage, or a late arrival with children.',
      },
      {
        q: 'Can you pick up from a Tel Aviv apartment for the return?',
        a: 'Yes, anywhere in the city. Send the address and the flight time and we will agree a pickup.',
      },
    ],
    hub: 'airportTransfers',
    related: ['airportTransfers', 'bgJerusalem', 'privateTransfers'],
    serviceType: 'Airport transfer',
  },

  bgHaifa: {
    title: 'Ben Gurion to Haifa Transfer | Private Van',
    description:
      'Private transfer from Ben Gurion airport to Haifa by van. Door to door along the coast, one price for the whole van including the driver.',
    breadcrumb: 'Ben Gurion to Haifa',
    h1: 'Ben Gurion to Haifa transfer',
    intro:
      'A private van from Ben Gurion up the coast to Haifa, the Krayot or anywhere on Mount Carmel. One price for the vehicle, door to door.',
    heroImage: 'pagePrivateDriver',
    heroImageAlt: ALT.pagePrivateDriver,
    trip: tripFacts(
      '[PLACEHOLDER: confirm typical drive time]',
      '[PLACEHOLDER: confirm distance]',
    ),
    included: AIRPORT_INCLUDED,
    body: [
      {
        heading: 'Ben Gurion to Haifa by private van',
        paragraphs: [
          'The road north runs along the coast most of the way. It is a straightforward drive, but a long one with luggage and children, and the alternative is a train with a change and a taxi at the far end.',
          'Haifa itself is built up a mountain, so the address matters: the difference between the port and the top of the Carmel is a serious climb.',
        ],
        bullets: [],
      },
      {
        heading: 'Cruise passengers',
        paragraphs: [
          'Haifa port is a common drop for us. If you are joining or leaving a ship, tell us the terminal and the time you need to be there.',
          '[PLACEHOLDER: confirm whether you meet cruise passengers at the port and where.]',
        ],
        bullets: [],
      },
    ],
    routeIds: ['tlv-haifa'],
    faq: [
      {
        q: 'How long does the drive take?',
        a: '[PLACEHOLDER: confirm typical drive time from Ben Gurion to Haifa.]',
      },
      {
        q: 'Can you drop at Haifa port?',
        a: 'Yes. Give us the terminal and the boarding time and we will plan the pickup around it.',
      },
      {
        q: 'Do you serve Akko, Nahariya and the north coast?',
        a: 'Yes, anywhere in the country. Send us the address and we will quote for it.',
      },
    ],
    hub: 'airportTransfers',
    related: ['airportTransfers', 'galileeDayTour', 'privateTransfers'],
    serviceType: 'Airport transfer',
  },

  bgDeadSea: {
    title: 'Ben Gurion to Dead Sea Transfer | Private Van',
    description:
      'Private transfer from Ben Gurion airport to the Dead Sea by van. Hotels at Ein Bokek and Neve Zohar, door to door, one price for the whole van.',
    breadcrumb: 'Ben Gurion to Dead Sea',
    h1: 'Ben Gurion to Dead Sea transfer',
    intro:
      'A private van from the airport down to the Dead Sea hotels. It is a long descent through the desert, and a far easier trip in one vehicle than by bus with a change.',
    heroImage: 'pageDeadSea',
    heroImageAlt: ALT.pageDeadSea,
    trip: tripFacts(
      '[PLACEHOLDER: confirm typical drive time]',
      '[PLACEHOLDER: confirm distance]',
    ),
    included: AIRPORT_INCLUDED,
    body: [
      {
        heading: 'Ben Gurion to the Dead Sea by private van',
        paragraphs: [
          'The road drops from the hills around Jerusalem to the lowest place on land, and there is very little in between. Public transport covers it, but with a change and a wait, which is a hard trip straight off a long flight.',
          'We drive to the hotel strip at Ein Bokek, to Neve Zohar, and to the kibbutz guesthouses further north along the shore.',
        ],
        bullets: [],
      },
      {
        heading: 'Adding a stop on the way',
        paragraphs: [
          'Groups often break the drive at Masada or Ein Gedi rather than doubling back another day. Tell us before you book and we will include the stop in the price.',
        ],
        bullets: [],
      },
    ],
    routeIds: ['tlv-deadsea'],
    faq: [
      {
        q: 'How long does the drive take?',
        a: '[PLACEHOLDER: confirm typical drive time from Ben Gurion to the Dead Sea hotels.]',
      },
      {
        q: 'Can we stop at Masada on the way?',
        a: 'Yes. Say so when you ask for a price and we will build the stop into the quote rather than charging for it later.',
      },
      {
        q: 'Which hotels do you serve?',
        a: 'All of them, at Ein Bokek and Neve Zohar, plus the guesthouses further up the shore. Give us the hotel name.',
      },
    ],
    hub: 'airportTransfers',
    related: ['airportTransfers', 'deadSeaMasadaTour', 'bgEilat'],
    serviceType: 'Airport transfer',
  },

  bgEilat: {
    title: 'Ben Gurion to Eilat Transfer | Private Van',
    description:
      'Private transfer from Ben Gurion airport to Eilat by van. A long desert drive in one vehicle, door to door, one price including the driver.',
    breadcrumb: 'Ben Gurion to Eilat',
    h1: 'Ben Gurion to Eilat transfer',
    intro:
      'The longest run on our list, straight down through the Negev to the Red Sea. One van, one driver, one price, with stops where you want them.',
    heroImage: 'pagePrivateDriver',
    heroImageAlt: ALT.pagePrivateDriver,
    trip: tripFacts(
      '[PLACEHOLDER: confirm typical drive time]',
      '[PLACEHOLDER: confirm distance]',
    ),
    included: AIRPORT_INCLUDED,
    body: [
      {
        heading: 'Ben Gurion to Eilat by private van',
        paragraphs: [
          'This is a serious drive through the desert. In a private van you stop when you want, the luggage stays with you, and you are dropped at the hotel door rather than at a bus station.',
          'It also works in reverse for an early flight out of Ben Gurion, where the alternative is an overnight bus.',
        ],
        bullets: [],
      },
      {
        heading: 'Breaking the journey',
        paragraphs: [
          'Mitzpe Ramon and the Ramon Crater sit roughly halfway and make a natural stop. Groups sometimes turn the transfer into a slow day with two or three stops instead of driving straight through.',
          'Tell us what you would like to see and we will tell you honestly whether it fits.',
        ],
        bullets: [],
      },
    ],
    routeIds: ['tlv-eilat'],
    faq: [
      {
        q: 'How long does the drive take?',
        a: '[PLACEHOLDER: confirm typical drive time from Ben Gurion to Eilat.]',
      },
      {
        q: 'Can we stop along the way?',
        a: 'Yes. Mitzpe Ramon is the usual one. Ask when you book so the time is in the quote.',
      },
      {
        q: 'Do you cross to Taba or Aqaba?',
        a: '[PLACEHOLDER: confirm whether you drive to the Egyptian and Jordanian border crossings.]',
      },
    ],
    hub: 'airportTransfers',
    related: ['airportTransfers', 'bgDeadSea', 'privateTransfers'],
    serviceType: 'Airport transfer',
  },

  /* ---------------------------------------------------------------- */
  /* Van with driver                                                   */
  /* ---------------------------------------------------------------- */
  vanWithDriver: {
    title: 'Private Van with Driver Israel | Full Day Hire',
    description:
      'Hire a private van with driver in Israel for a full day. You set the route, the driver stays with you, and one price covers the whole vehicle.',
    breadcrumb: 'Van with driver',
    h1: 'Private van with driver in Israel',
    intro:
      'Keep the van and the driver for a whole day and go where you like. Good for families, small groups and anyone who would rather not drive on unfamiliar roads.',
    heroImage: 'pagePrivateDriver',
    heroImageAlt: ALT.pagePrivateDriver,
    included: DAY_INCLUDED,
    body: [
      {
        heading: 'A full day with a driver',
        paragraphs: [
          'The van is yours for the day. You choose where to go, how long to stay, and when to move on. Bags, shopping and coats stay in the vehicle between stops.',
          'Most groups book a driver for the day because the alternative is three separate taxis, a hire car nobody wants to park, or a coach tour that leaves when it leaves.',
        ],
        bullets: [],
      },
      {
        heading: 'Who books a van and driver for the day',
        paragraphs: [
          'Families covering several places in one day. Business visitors with meetings in three cities. Groups who want a guide to join them and need somewhere to put everyone.',
          `Our drivers speak Hebrew, English and Russian, so a Russian-speaking group is not left working things out in a second language.`,
        ],
        bullets: [],
      },
      {
        heading: 'How long a day runs',
        paragraphs: [
          '[PLACEHOLDER: say how many hours a full day covers, what happens if the day runs longer, and how overtime is charged.]',
        ],
        bullets: [],
      },
    ],
    routeIds: [],
    faq: [
      {
        q: 'How many hours is a full day?',
        a: '[PLACEHOLDER: say how many hours a full day covers and what happens if it runs longer.]',
      },
      {
        q: 'Does the driver act as a guide?',
        a: '[PLACEHOLDER: say whether your drivers guide, and whether you can arrange a licensed guide separately.]',
      },
      {
        q: 'Can we change the plan during the day?',
        a: 'Usually. Tell the driver what you have in mind and they will say whether it fits the time you have booked.',
      },
      {
        q: 'Can we book the same driver for several days?',
        a: 'Yes, and most people do once they have met them. Say so when you ask for a price.',
      },
    ],
    related: ['privateTours', 'businessTransportation', 'privateTransfers'],
    serviceType: 'Private van with driver',
  },

  /* ---------------------------------------------------------------- */
  /* Tours: hub                                                        */
  /* ---------------------------------------------------------------- */
  privateTours: {
    title: 'Private Tours Israel | Van and Driver for the Day',
    description:
      'Private tours of Israel by van with your own driver. Jerusalem, the Dead Sea and Masada, and the Galilee, at your own pace with hotel pickup.',
    breadcrumb: 'Private tours',
    h1: 'Private tours of Israel',
    intro:
      'A private day tour with a van and driver of your own. No group to keep up with, no fixed departure, and the route is yours to set.',
    heroImage: 'pageJerusalem',
    heroImageAlt: ALT.pageJerusalem,
    included: DAY_INCLUDED,
    body: [
      {
        heading: 'What a private day tour is like',
        paragraphs: [
          'We collect you from your hotel in the morning and bring you back when you are ready to stop. Between those two points the day is yours.',
          'The driver moves the van between stops, so you are never walking back to where you parked, and there is somewhere to leave coats and shopping.',
        ],
        bullets: [],
      },
      {
        heading: 'Tours with a licensed guide',
        paragraphs: [
          'Some groups want the history as well as the driving. We can collect a guide with you, or work alongside one you have already booked.',
          '[PLACEHOLDER: say whether you can arrange a licensed guide, and roughly what that adds.]',
        ],
        bullets: [],
      },
    ],
    routeIds: [],
    faq: [
      {
        q: 'Are entry tickets included?',
        a: '[PLACEHOLDER: say which entry fees, if any, are included in the price.]',
      },
      {
        q: 'Can you build a tour we have planned ourselves?',
        a: 'Yes. Send us the list of places and roughly when you need to be back, and we will tell you what fits comfortably in a day.',
      },
      {
        q: 'Do you run tours on Shabbat?',
        a: '[PLACEHOLDER: confirm your Saturday and holiday availability.]',
      },
    ],
    related: ['jerusalemDayTour', 'deadSeaMasadaTour', 'galileeDayTour'],
    serviceType: 'Private day tour',
  },

  /* ---------------------------------------------------------------- */
  /* Tours                                                             */
  /* ---------------------------------------------------------------- */
  jerusalemDayTour: {
    title: 'Jerusalem Day Tour Private | Van with Driver',
    description:
      'A private Jerusalem day tour by van with your own driver. Pickup from Tel Aviv, Ben Gurion or your hotel, at your own pace with no group to follow.',
    breadcrumb: 'Jerusalem day tour',
    h1: 'Private Jerusalem day tour',
    intro:
      'Spend the day in Jerusalem with a van and driver of your own. We collect you from your hotel and bring you back when you are ready to leave.',
    heroImage: 'pageJerusalem',
    heroImageAlt: ALT.pageJerusalem,
    included: DAY_INCLUDED,
    body: [
      {
        heading: 'How a private Jerusalem day tour works',
        paragraphs: [
          'We pick you up in the morning from Tel Aviv, Ben Gurion or wherever you are staying. The driver stays with you for the day, moving the van between stops so you are not retracing your steps.',
          'You decide what to see and how long to spend. If you have a guide booked, we will collect them too.',
        ],
        bullets: [],
      },
      {
        heading: 'Where most groups go',
        paragraphs: [
          'The Old City and the viewpoint on the Mount of Olives are on almost every day. Many add Yad Vashem, the Israel Museum or the City of David.',
          '[PLACEHOLDER: add a suggested itinerary once you have one you are happy to publish, including which entry fees you do and do not cover.]',
        ],
        bullets: [],
      },
    ],
    routeIds: ['telaviv-jerusalem', 'tlv-jerusalem', 'jerusalem-deadsea'],
    faq: [
      {
        q: 'Are entry tickets included?',
        a: '[PLACEHOLDER: say which entry fees, if any, are included.]',
      },
      {
        q: 'Can we do Jerusalem and the Dead Sea in one day?',
        a: 'Some groups do. It makes a long day. Tell us how early you are willing to start and we will say honestly whether it works.',
      },
      {
        q: 'What should we wear?',
        a: 'Several sites in the Old City ask visitors to cover shoulders and knees. Comfortable shoes help, because the Old City is cobbled and hilly.',
      },
    ],
    hub: 'privateTours',
    related: ['privateTours', 'deadSeaMasadaTour', 'bgJerusalem'],
    serviceType: 'Private day tour',
  },

  deadSeaMasadaTour: {
    title: 'Dead Sea and Masada Private Tour | Van and Driver',
    description:
      'A private Dead Sea and Masada tour by van. Pickup from Jerusalem, Tel Aviv or your hotel, your own driver, and one price for the whole van.',
    breadcrumb: 'Dead Sea and Masada',
    h1: 'Dead Sea and Masada private tour',
    intro:
      'Masada in the morning, the Dead Sea in the afternoon, and a van waiting at both. No coach timetable to keep to.',
    heroImage: 'pageDeadSea',
    heroImageAlt: ALT.pageDeadSea,
    included: DAY_INCLUDED,
    body: [
      {
        heading: 'A typical Dead Sea and Masada day',
        paragraphs: [
          'Groups usually start early to reach Masada before the heat, then spend the afternoon at the Dead Sea. The driver stays with the van, so towels and bags can be left behind while you swim.',
          'Ein Gedi sits between the two if you want a walk, and we can add it when the timing allows.',
        ],
        bullets: [],
      },
      {
        heading: 'Things worth knowing',
        paragraphs: [
          'The Dead Sea is hot for most of the year and there is almost no shade at Masada. Bring water, a hat and sunscreen, and sandals you can walk into the water with, because the salt crystals on the shore are sharp.',
          '[PLACEHOLDER: say whether the price includes the Masada cable car, beach entry, or anything else.]',
        ],
        bullets: [],
      },
    ],
    routeIds: ['jerusalem-deadsea', 'tlv-deadsea'],
    faq: [
      {
        q: 'Is the Masada cable car included?',
        a: '[PLACEHOLDER: say whether the cable car and site entry are included in your price.]',
      },
      {
        q: 'Which Dead Sea beach do you use?',
        a: '[PLACEHOLDER: name the beach or beaches you normally use and whether entry is paid.]',
      },
      {
        q: 'How early do we need to start?',
        a: 'Early enough to be on Masada before the sun is high. [PLACEHOLDER: give the pickup time you normally recommend.]',
      },
    ],
    hub: 'privateTours',
    related: ['privateTours', 'jerusalemDayTour', 'bgDeadSea'],
    serviceType: 'Private day tour',
  },

  galileeDayTour: {
    title: 'Galilee Day Tour Private | Van with Driver',
    description:
      'A private Galilee tour by van with your own driver. The Sea of Galilee, Nazareth and the north of Israel, at your own pace with hotel pickup.',
    breadcrumb: 'Galilee day tour',
    h1: 'Galilee private day tour',
    intro:
      'The north of Israel in a day, with a van and driver of your own. The Galilee is spread out, which is exactly why a van helps.',
    heroImage: 'pageGalilee',
    heroImageAlt: ALT.pageGalilee,
    included: DAY_INCLUDED,
    body: [
      {
        heading: 'What a Galilee day can cover',
        paragraphs: [
          'Most days are built around the Sea of Galilee, with Nazareth, Capernaum, the Jordan River or a viewpoint in the Golan added to it.',
          'Tell us what matters to you and roughly when you need to be back, and we will tell you what fits without rushing.',
        ],
        bullets: [],
      },
      {
        heading: 'Christian sites in the Galilee',
        paragraphs: [
          'Nazareth, Capernaum, Tabgha and the Mount of Beatitudes sit close enough together to see in one day, and a van makes that practical in a way that buses do not.',
          'If you are travelling with a church group we can put on more than one vehicle.',
        ],
        bullets: [],
      },
      {
        heading: 'Staying in the north',
        paragraphs: [
          'If you are based in Tiberias or the Galilee rather than driving up for the day, we can start from your hotel and cover more ground.',
          '[PLACEHOLDER: say whether you offer multi-day trips in the north and how those are priced.]',
        ],
        bullets: [],
      },
    ],
    routeIds: ['tlv-tiberias', 'tlv-haifa'],
    faq: [
      {
        q: 'Is a Galilee day trip from Tel Aviv too long?',
        a: '[PLACEHOLDER: give your honest view, with the approximate drive time each way.]',
      },
      {
        q: 'Can we visit the Golan Heights?',
        a: 'It can usually be added. Tell us which sites you have in mind and we will say whether they fit the day.',
      },
      {
        q: 'Do you go to Nazareth?',
        a: 'Yes. Nazareth is a common stop and we can build the route around it.',
      },
    ],
    hub: 'privateTours',
    related: ['privateTours', 'bgHaifa', 'jerusalemDayTour'],
    serviceType: 'Private day tour',
  },

  /* ---------------------------------------------------------------- */
  /* Audience pages                                                    */
  /* ---------------------------------------------------------------- */
  weddingTransportation: {
    title: 'Wedding Transportation Israel | Guest Shuttle',
    description:
      'Wedding transportation in Israel. Shuttle your guests to the venue and home again in Mercedes Sprinter and Savanna vans with professional drivers.',
    breadcrumb: 'Weddings',
    h1: 'Wedding transportation in Israel',
    intro:
      'Getting guests to the venue and home again, without anyone driving. We run shuttles for weddings anywhere in the country.',
    heroImage: 'serviceFullDay',
    heroImageAlt: ALT.serviceFullDay,
    included: [
      'Pickup from one or more collection points',
      'As many runs as the guest list needs',
      'A driver who stays for the return journey',
      'One price agreed before the day',
    ],
    body: [
      {
        heading: 'Guest transport, there and back',
        paragraphs: [
          'Most of the work is the journey home. Guests who have been drinking need a way back, and taxis at midnight in the middle of nowhere are not a plan.',
          'We collect from a meeting point in town, run as many trips as the numbers need, and wait for the end of the evening.',
        ],
        bullets: [],
      },
      {
        heading: 'Planning the runs',
        paragraphs: [
          'Tell us the venue, the ceremony time, roughly how many guests need transport and where they are coming from. We will work out how many vans and how many runs that takes.',
          'Booking early matters more for weddings than for anything else we do, because the dates cluster.',
        ],
        bullets: [],
      },
    ],
    routeIds: [],
    faq: [
      {
        q: 'How far in advance should we book?',
        a: '[PLACEHOLDER: say how far ahead wedding bookings should be made, especially in high season.]',
      },
      {
        q: 'Can the van wait until the end of the evening?',
        a: 'Yes. That is usually the point. Tell us when the evening is likely to finish and we will price for the wait.',
      },
      {
        q: 'Can you collect guests from more than one place?',
        a: 'Yes. Several collection points is normal when guests are spread across a few cities.',
      },
      {
        q: 'Do you cover events other than weddings?',
        a: 'Yes. Bar mitzvahs, brit milah, company evenings and anything else where guests need a lift both ways.',
      },
    ],
    related: ['privateTransfers', 'businessTransportation', 'vanWithDriver'],
    serviceType: 'Event and wedding transport',
  },

  artistBandTransportation: {
    title: 'Artist and Band Transportation Israel',
    description:
      'Transport for artists, bands and production crews in Israel. Vans for the group and the gear, airport runs, venues and hotels, with discreet drivers.',
    breadcrumb: 'Artists and bands',
    h1: 'Artist and band transportation in Israel',
    intro:
      'Moving performers, crew and equipment between the airport, the hotel and the venue. We work to the schedule the production gives us.',
    heroImage: 'serviceCityToCity',
    heroImageAlt: ALT.serviceCityToCity,
    included: [
      'Airport pickup for the group and the gear',
      'Runs between hotel, venue and rehearsal',
      'Drivers who wait as long as the schedule needs',
      'One point of contact for the whole booking',
    ],
    body: [
      {
        heading: 'Touring logistics',
        paragraphs: [
          'A show has a schedule and it does not move. Load-in, soundcheck, doors. Transport either fits around that or it becomes the problem.',
          'We take the running order from the tour manager and work to it, including the parts that happen at four in the morning.',
        ],
        bullets: [],
      },
      {
        heading: 'People and equipment',
        paragraphs: [
          'A Sprinter takes a band and its hand luggage comfortably. Backline and flight cases usually want a vehicle of their own, and we will say so rather than pretending it all fits.',
          'Tell us what is travelling and we will put on the right number of vans.',
        ],
        bullets: [],
      },
      {
        heading: 'Discretion',
        paragraphs: [
          'Our drivers work with production crews regularly. Nobody posts about who was in the van.',
        ],
        bullets: [],
      },
    ],
    routeIds: [],
    faq: [
      {
        q: 'Can you carry instruments and equipment?',
        a: 'Yes. Tell us the case list so we can work out whether the gear needs its own vehicle.',
      },
      {
        q: 'Can drivers work overnight?',
        a: '[PLACEHOLDER: confirm your overnight availability and how night work is charged.]',
      },
      {
        q: 'Do you work with production companies on a retainer?',
        a: 'Yes. For a run of dates it is usually simpler to agree the whole schedule and one price up front.',
      },
    ],
    related: ['businessTransportation', 'vanWithDriver', 'privateTransfers'],
    serviceType: 'Artist and crew transport',
  },

  businessTransportation: {
    title: 'Business Transportation Israel | Corporate Transfer',
    description:
      'Corporate transportation in Israel. Executive airport transfers, delegation transport and conference shuttles in Mercedes Sprinter and Savanna vans.',
    breadcrumb: 'Business',
    h1: 'Business transportation in Israel',
    intro:
      'Airport transfers, delegation transport and conference shuttles for companies. One vehicle, one driver, one invoice.',
    heroImage: 'pageContact',
    heroImageAlt: ALT.pageContact,
    included: [
      'Meet and greet at Ben Gurion arrivals',
      'A driver for the day, or for the whole visit',
      'Transport between offices, hotels and venues',
      'One agreed price, invoiced to the company',
    ],
    body: [
      {
        heading: 'Visiting delegations',
        paragraphs: [
          'A delegation that lands together should travel together. We meet the flight, take everyone to the hotel, and stay with the group for as long as the visit runs.',
          'Meetings in Tel Aviv, Herzliya and Jerusalem in one day is a normal ask, and much easier with a driver who waits outside than with taxis booked on the hoof.',
        ],
        bullets: [],
      },
      {
        heading: 'Conferences and company events',
        paragraphs: [
          'Shuttles between the hotel and the venue, runs to the airport at the end, and transport for a company evening out.',
          'Tell us the numbers and the schedule and we will work out the vehicles.',
        ],
        bullets: [],
      },
      {
        heading: 'Invoicing',
        paragraphs: [
          '[PLACEHOLDER: describe how you invoice companies, what payment terms you offer, and whether you can hold an account.]',
        ],
        bullets: [],
      },
    ],
    routeIds: [],
    faq: [
      {
        q: 'Can you invoice the company rather than the traveller?',
        a: '[PLACEHOLDER: confirm your invoicing and payment terms for companies.]',
      },
      {
        q: 'Do you offer meet and greet at Ben Gurion?',
        a: 'Yes. The driver waits in the arrivals hall. [PLACEHOLDER: add the exact meeting point and whether a name board is used.]',
      },
      {
        q: 'Can we book the same driver for a whole visit?',
        a: 'Yes, and it usually works better. The driver learns the schedule and you stop explaining it.',
      },
    ],
    related: ['airportTransfers', 'vanWithDriver', 'artistBandTransportation'],
    serviceType: 'Corporate transport',
  },

  privateTransfers: {
    title: 'Private Transfers Israel | Van and Driver',
    description:
      'Private transfers anywhere in Israel by van. City to city, hotel to hotel, ports and border crossings, with one price for the whole vehicle.',
    breadcrumb: 'Private transfers',
    h1: 'Private transfers anywhere in Israel',
    intro:
      'One-way rides between any two places in the country. Hotel to hotel, city to port, or out to a border crossing.',
    heroImage: 'pagePrivateDriver',
    heroImageAlt: ALT.pagePrivateDriver,
    included: [
      'Door to door, with no other passengers',
      'Help with the luggage at both ends',
      'One price for the whole van including the driver',
      'Anywhere in Israel',
    ],
    body: [
      {
        heading: 'City to city by private van',
        paragraphs: [
          'Not every journey is to or from an airport. Moving a group from Jerusalem to Tiberias, or from a hotel to a cruise terminal, is the same job with different addresses.',
          'Send the pickup point and the destination and we will reply with a price for the vehicle.',
        ],
        bullets: [],
      },
      {
        heading: 'Group transport',
        paragraphs: [
          `A single van seats ${SEATS} with luggage. For more than that we run several vehicles together so the whole group moves at once.`,
          'This is what we do for school trips, family events and company outings.',
        ],
        bullets: [],
      },
    ],
    routeIds: ['jerusalem-deadsea', 'telaviv-jerusalem', 'tlv-haifa', 'tlv-tiberias'],
    faq: [
      {
        q: 'Do you drive to border crossings?',
        a: '[PLACEHOLDER: confirm which border crossings you serve.]',
      },
      {
        q: 'Is the price per person or per van?',
        a: 'Per van. You are paying for the vehicle and the driver, not for a seat.',
      },
      {
        q: 'Can you collect from a private address?',
        a: 'Yes, anywhere in the country. Send us the address.',
      },
    ],
    related: ['vanWithDriver', 'airportTransfers', 'businessTransportation'],
    serviceType: 'Private transfer',
  },

  /* ---------------------------------------------------------------- */
  /* Information pages                                                 */
  /* ---------------------------------------------------------------- */
  fleet: {
    title: 'Our Fleet | Mercedes Sprinter and Savanna Vans',
    description:
      'The vans we drive: Mercedes Sprinter and Savanna, air conditioned and cleaned between trips, with room for the group and the luggage together.',
    breadcrumb: 'Fleet',
    h1: 'Mercedes Sprinter and Savanna vans',
    intro:
      'The vehicles we actually drive. Air conditioned, cleaned between trips, and big enough that nobody holds a suitcase on their lap.',
    heroImage: 'fleetExterior',
    heroImageAlt: ALT.fleetExterior,
    included: [],
    body: [
      {
        heading: 'What we drive',
        paragraphs: [
          `We run Mercedes Sprinter and Savanna vans. Each seats ${SEATS} passengers with ${FLEET.luggage} large suitcases, so a group and its luggage travel in one vehicle.`,
          'For a group too big for one van we send more than one and everyone arrives together.',
        ],
        bullets: [
          'Air conditioning',
          'USB charging',
          'Bottled water',
          'Child seats on request',
        ],
      },
      {
        heading: 'Maintenance and licensing',
        paragraphs: [
          '[PLACEHOLDER: describe how the vans are maintained and inspected, and note the operator licence and insurance you hold.]',
        ],
        bullets: [],
      },
    ],
    routeIds: [],
    faq: [
      {
        q: 'How many passengers fit in one van?',
        a: `${SEATS} passengers with luggage. [PLACEHOLDER: confirm the seat count for the Sprinter and the Savanna separately if they differ.]`,
      },
      {
        q: 'Are there child seats?',
        a: '[PLACEHOLDER: say which child and booster seats you can supply, and whether they cost extra.]',
      },
      {
        q: 'Is there room for a wheelchair?',
        a: '[PLACEHOLDER: confirm whether any vehicle is wheelchair accessible.]',
      },
    ],
    showFleet: true,
    related: ['vanWithDriver', 'privateTransfers', 'about'],
  },

  about: {
    title: 'About Israel Private Van | 30 Years on the Road',
    description:
      'Israel Private Van is run by Amir Levi Transportation Services, based in Holon and driving across Israel for 30 years.',
    breadcrumb: 'About',
    h1: `Driving in Israel for ${TRACK_RECORD.yearsInBusiness} years`,
    intro: `Israel Private Van is the transport service of Amir Levi Transportation Services, based in Holon and working across the whole country. We have been doing this for ${TRACK_RECORD.yearsInBusiness} years.`,
    heroImage: 'heroPoster',
    heroImageAlt: ALT.heroPoster,
    included: [],
    body: [
      {
        heading: 'Who we are',
        paragraphs: [
          `Amir Levi Transportation Services has been running vans in Israel for ${TRACK_RECORD.yearsInBusiness} years. We are based in Holon and drive everywhere in the country, from Ben Gurion to Eilat and from the coast to the Golan.`,
          `We have over ${TRACK_RECORD.regularCustomersOver} regular customers. Most of the work comes from people who have used us before, or from someone they told.`,
        ],
        bullets: [],
      },
      {
        heading: 'How we work',
        paragraphs: [
          'One price for the whole van, agreed before you book. The driver stays with you for the job. If something will not fit in the day you have, we say so rather than finding out halfway through.',
          'Our drivers speak Hebrew, English and Russian.',
        ],
        bullets: [],
      },
    ],
    routeIds: [],
    faq: [],
    related: ['fleet', 'contact', 'privateTransfers'],
  },

  faq: {
    title: 'FAQ | Private Van and Driver in Israel',
    description:
      'Common questions about booking a private van and driver in Israel: luggage, child seats, flight delays, night pickups, payment and availability.',
    breadcrumb: 'FAQ',
    h1: 'Frequently asked questions',
    intro:
      'The questions we are asked most often. If yours is not here, send it to us on WhatsApp and we will answer it.',
    heroImage: 'pageContact',
    heroImageAlt: ALT.pageContact,
    included: [],
    body: [],
    routeIds: [],
    faq: [
      {
        q: 'Is the price per person or per van?',
        a: 'Per van. You are paying for the vehicle and the driver, not for a seat, so the price is the same whether two of you travel or the van is full.',
      },
      {
        q: 'How many people fit in one van?',
        a: `Each van seats ${SEATS} passengers with room for ${FLEET.luggage} large suitcases. For a bigger group we send more than one van so everyone travels together.`,
      },
      {
        q: 'Where do we meet you at Ben Gurion?',
        a: 'In the arrivals hall. [PLACEHOLDER: add the exact meeting point and how travellers will recognise the driver.]',
      },
      {
        q: 'What happens if my flight is delayed?',
        a: '[PLACEHOLDER: describe how you track flights, how long the driver waits, and whether a delay costs anything extra.]',
      },
      {
        q: 'Do you drive at night?',
        a: '[PLACEHOLDER: confirm your night availability and whether a night pickup changes the price.]',
      },
      {
        q: 'Do you drive on Shabbat and holidays?',
        a: '[PLACEHOLDER: confirm your Saturday and holiday availability.]',
      },
      {
        q: 'How do I pay?',
        a: '[PLACEHOLDER: list the payment methods you accept and say whether payment is due before or after the trip.]',
      },
      {
        q: 'Do you have child seats?',
        a: '[PLACEHOLDER: say which child and booster seats you can supply, and whether they cost extra.]',
      },
      {
        q: 'What languages do the drivers speak?',
        a: 'Hebrew, English and Russian.',
      },
      {
        q: 'Can we stop along the way?',
        a: 'On a full day with a driver, yes. The van is yours and you set the route. On a one-way transfer, tell us about any stops in advance so they are in the price.',
      },
    ],
    related: ['contact', 'airportTransfers', 'vanWithDriver'],
  },

  contact: {
    title: 'Contact | Private Van and Driver in Israel',
    description:
      'Get in touch about a private van and driver in Israel. Message us on WhatsApp, call, or send the form and we will reply with a price.',
    breadcrumb: 'Contact',
    h1: 'Contact us',
    intro:
      'WhatsApp is the fastest way to reach us. You can also call, email, or fill in the form and we will come back to you.',
    heroImage: 'pageContact',
    heroImageAlt: ALT.pageContact,
    included: [],
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
    related: ['airportTransfers', 'vanWithDriver', 'faq'],
  },
};

export default pages;
export { PLACEHOLDER };
