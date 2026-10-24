import type { PageContent, PageKey } from '../types';

/**
 * English guides, written for people arriving in Israel.
 *
 * Every guide opens with the answer, because that is the part a search
 * result and an AI assistant quote. The comparison tables avoid fares:
 * ticket prices change and a wrong number in print is worse than none, so
 * the tables compare what actually differs between the options and stays
 * true — whether it runs on Shabbat, whether it takes you to a door,
 * whether a group and its luggage travel together.
 *
 * Nothing here states a fact about this business that has not been
 * confirmed. Where our own policy is still unanswered it is marked.
 */
const guides: Partial<Record<PageKey, PageContent>> = {
  guidesIndex: {
    title: 'Guides | Travelling Israel by Private Van',
    description:
      'Practical guides to getting around Israel: airport transfers, travelling on Shabbat, and whether to hire a driver or rent a car.',
    breadcrumb: 'Guides',
    h1: 'Guides to getting around Israel',
    intro:
      'What we get asked most, written out properly. These are the answers we give on the phone every week, from 30 years of driving the routes.',
    heroImage: 'pagePrivateDriver',
    heroImageAlt: 'A car on an open road curving through dry hills in northern Israel.',
    included: [],
    body: [],
    routeIds: [],
    faq: [],
    related: ['airportTransfers', 'vanWithDriver', 'privateTours'],
  },

  /* ------------------------------------------------------------------ */
  guideBgJerusalemOptions: {
    title: 'Ben Gurion to Jerusalem: Train, Sherut, Taxi or Van',
    description:
      'The four ways to get from Ben Gurion airport to Jerusalem compared: the train, a shared sherut, a taxi and a private van. What each one suits.',
    breadcrumb: 'Ben Gurion to Jerusalem: your options',
    h1: 'Ben Gurion to Jerusalem: train, sherut, taxi or private van',
    summary:
      'There are four realistic ways to get from Ben Gurion to Jerusalem. The train is the quickest when it runs, but it stops for Shabbat and leaves you at one station. A shared sherut is cheap and goes to your door, but it leaves only when it fills. A taxi suits one or two people travelling light. A private van is the one that takes a whole group and its luggage from the arrivals hall to the door in one go.',
    updated: '2026-10-24',
    intro:
      'This is the question we are asked more than any other. The honest answer is that it depends on how many of you there are, how much luggage you have, and what time you land.',
    heroImage: 'pageJerusalem',
    heroImageAlt:
      'The Western Wall plaza in Jerusalem, with the gold Dome of the Rock behind it.',
    table: {
      caption: 'Ben Gurion to Jerusalem, compared',
      columns: ['', 'Train', 'Sherut', 'Taxi', 'Private van'],
      rows: [
        ['Takes you to a door', 'No, to one station', 'Yes', 'Yes', 'Yes'],
        ['Runs on Shabbat', 'No', 'Limited', 'Yes', 'Ask us'],
        ['Leaves when', 'Fixed timetable', 'When it fills', 'On demand', 'The time you choose'],
        ['Group travels together', 'Yes', 'Shared with strangers', 'Up to 3 or 4', 'Yes'],
        ['Luggage', 'You carry it', 'Shared boot', 'One car boot', 'Whole group together'],
        ['Price is per', 'Person', 'Person', 'Car', 'Van'],
      ],
      note: 'Fares change, so this compares what each option is like rather than what it costs on the day. We quote per van before you book.',
    },
    included: [],
    body: [
      {
        heading: 'The train',
        paragraphs: [
          'A line runs from a station under Terminal 3 to Yitzhak Navon station in Jerusalem. When it is running it is the fastest way into the city, and it is not close.',
          'Two things catch people out. The station in Jerusalem is very deep underground and reached by long escalators, which is slow going with suitcases and children. And the train does not run on Shabbat or on public holidays, which is exactly when a lot of flights land.',
          'From Navon you still need to get to where you are staying, so a Jerusalem taxi or a bus is usually part of the journey.',
        ],
        bullets: [],
      },
      {
        heading: 'The shared taxi, or sherut',
        paragraphs: [
          'A sherut is a shared minibus that collects passengers at the airport and drops each one at their address in Jerusalem. You pay per seat, which makes it good value for one or two people.',
          'The trade-off is time. It leaves when it has enough passengers, not at a set hour, and then it works through everyone else’s addresses before it reaches yours. After a long flight, with a group, that can turn into a long tail on the journey.',
        ],
        bullets: [],
      },
      {
        heading: 'A regular taxi',
        paragraphs: [
          'Straightforward for one to three people with hand luggage. You pay for the car, you leave when you want, and you are dropped at the door.',
          'It stops working as soon as there are four of you with suitcases. At that point you are splitting across two cars, paying two fares, and arriving separately.',
        ],
        bullets: [],
      },
      {
        heading: 'A private van',
        paragraphs: [
          'This is what we do. The driver meets you in the arrivals hall, helps with the luggage, and drives to the address you gave us. Nobody else is collected along the way.',
          'The price is for the vehicle rather than per seat, so it does not change between two passengers and twelve. For a family or a group it usually works out below several taxis, and everyone arrives at the same time.',
        ],
        bullets: [
          'Met inside the arrivals hall',
          'Group and luggage in one vehicle',
          'A price agreed before you book',
          'The departure time is yours',
        ],
      },
      {
        heading: 'Which one to pick',
        paragraphs: [
          'One or two people, hand luggage, a weekday: take the train, and a taxi at the far end.',
          'One or two people, suitcases, no rush: a sherut is good value if you do not mind the wait.',
          'Three or more, or any amount of luggage, or a late arrival, or Shabbat: a private van is the one that works without a plan B.',
        ],
        bullets: [],
      },
    ],
    routeIds: ['tlv-jerusalem'],
    faq: [
      {
        q: 'Does the train to Jerusalem run on Saturday?',
        a: 'No. Israel Railways does not run on Shabbat, from Friday afternoon until Saturday night, or on public holidays. If you land in that window the train is not an option.',
      },
      {
        q: 'How much luggage can we bring in a van?',
        a: 'A whole group’s suitcases travel with the group. If you are carrying something awkward, such as bikes, instruments or sports gear, tell us when you ask for a price so we plan the space.',
      },
      {
        q: 'Can you collect us from a Jerusalem hotel for the flight home?',
        a: 'Yes. Give us the hotel and the flight time and we agree a pickup with you the day before.',
      },
      {
        q: 'What happens if the flight is late?',
        a: '[PLACEHOLDER: describe how you track flights, how long the driver waits, and whether a delay costs anything extra.]',
      },
    ],
    leadsTo: ['bgJerusalem', 'airportTransfers'],
    related: ['bgJerusalem', 'airportTransfers', 'jerusalemDayTour'],
  },

  /* ------------------------------------------------------------------ */
  guideShabbatTravel: {
    title: 'Travelling in Israel on Shabbat: What Runs and What Stops',
    description:
      'Public transport in Israel mostly stops from Friday afternoon to Saturday night. What still runs, what to expect on holidays, and how to plan around it.',
    breadcrumb: 'Travelling on Shabbat',
    h1: 'Travelling in Israel on Shabbat and holidays',
    summary:
      'From Friday afternoon until Saturday after dark, most public transport in Israel stops. Trains do not run at all and most intercity buses stop. Taxis, shared taxis on some routes and private transport keep working, so getting around is perfectly possible, but it has to be arranged rather than assumed.',
    updated: '2026-10-24',
    intro:
      'Visitors are often surprised by how completely the country changes gear on a Friday afternoon. It is not a problem if you know it is coming.',
    heroImage: 'pagePrivateDriver',
    heroImageAlt: 'A car on an open road curving through dry hills in northern Israel.',
    table: {
      caption: 'Shabbat, roughly Friday afternoon to Saturday nightfall',
      columns: ['', 'Friday daytime', 'Shabbat', 'Saturday night'],
      rows: [
        ['Trains', 'Stop early afternoon', 'Not running', 'Resume after dark'],
        ['Intercity buses', 'Last ones early afternoon', 'Mostly not running', 'Resume after dark'],
        ['City buses', 'Reduced, stop early', 'Mostly not running', 'Resume after dark'],
        ['Taxis', 'Running', 'Running', 'Running'],
        ['Private transport', 'Running', 'Ask us', 'Running'],
      ],
      note: 'Exact times shift with sunset, so they are earlier in winter than in summer. Haifa and some other places keep limited services running.',
    },
    included: [],
    body: [
      {
        heading: 'When Shabbat actually is',
        paragraphs: [
          'Shabbat runs from sunset on Friday to nightfall on Saturday. Transport does not stop exactly at sunset: it winds down through Friday afternoon, because drivers have to get home too, and it restarts an hour or so after dark on Saturday.',
          'That means the quiet window is longer than the religious one. In winter, when the sun sets early, the last intercity buses can go in the early afternoon.',
        ],
        bullets: [],
      },
      {
        heading: 'What stops',
        paragraphs: [
          'Trains stop completely. Most intercity and city bus services stop. A good deal of the country closes with them, including many shops and some restaurants, though Tel Aviv keeps far more open than Jerusalem does.',
        ],
        bullets: [],
      },
      {
        heading: 'What keeps running',
        paragraphs: [
          'Taxis work normally. Shared taxis run on some routes, including between the big cities, though less often than on a weekday. Private transport runs.',
          'Haifa is the usual exception on buses: it has kept a limited Shabbat service for a long time. Services run by Arab operators, including in the north and around Jerusalem, also tend to run.',
        ],
        bullets: [],
      },
      {
        heading: 'Holidays are the same, and Yom Kippur is more so',
        paragraphs: [
          'The major Jewish holidays follow the Shabbat pattern, with the same wind-down the afternoon before.',
          'Yom Kippur is different in degree. For about 25 hours the country stops almost completely: no public transport at all, and Ben Gurion airport closes to flights. The roads empty to the point where people walk and cycle on the motorways. If your trip crosses Yom Kippur, plan it as a day where you stay put.',
        ],
        bullets: [],
      },
      {
        heading: 'Planning around it',
        paragraphs: [
          'Flights land on Shabbat all the time, so arriving into a country with no trains running is a normal situation rather than an unlucky one. It just has to be arranged in advance.',
          'The same goes for a Saturday you want to use: a day at the Dead Sea or in the Galilee on Shabbat is entirely doable with a driver, and close to impossible on buses.',
        ],
        bullets: [
          'Book airport transport before you fly if you land Friday or Saturday',
          'Do not plan to move cities by bus or train on Shabbat',
          'Expect a quieter Jerusalem and a busier Tel Aviv',
          'Check whether your trip crosses Yom Kippur',
        ],
      },
    ],
    routeIds: [],
    faq: [
      {
        q: 'Do you drive on Shabbat and holidays?',
        a: '[PLACEHOLDER: confirm your Saturday and holiday availability, and whether it changes the price.]',
      },
      {
        q: 'Can I get from Ben Gurion to Jerusalem on a Saturday?',
        a: 'Yes, by taxi, by shared taxi on some routes, or by private van. Not by train, and not by most buses.',
      },
      {
        q: 'Is the airport open on Shabbat?',
        a: 'Yes, flights run as normal. The exception is Yom Kippur, when Ben Gurion closes for about 25 hours.',
      },
      {
        q: 'When exactly does everything start again?',
        a: 'Roughly an hour after dark on Saturday, so later in summer than in winter. The first services back are usually the intercity buses and trains.',
      },
    ],
    leadsTo: ['privateTransfers', 'airportTransfers'],
    related: ['privateTransfers', 'airportTransfers', 'vanWithDriver'],
  },

  /* ------------------------------------------------------------------ */
  guideDriverOrRental: {
    title: 'Private Driver or Rental Car in Israel: Which to Choose',
    description:
      'Renting a car in Israel or hiring a van with a driver: parking, Shabbat, group size, luggage and jet lag compared, so you can pick the right one.',
    breadcrumb: 'Driver or rental car',
    h1: 'Private driver or rental car in Israel',
    summary:
      'A rental car is the cheaper and more flexible choice for two people touring at their own pace, as long as you are happy to drive and to park. A van with a driver wins as soon as there is a group, real luggage, a tight schedule, or a day where nobody wants to be responsible for parking in central Tel Aviv or driving back in the dark.',
    updated: '2026-10-24',
    intro:
      'Both work. They suit different trips, and the deciding factor is usually parking and group size rather than money.',
    heroImage: 'pagePrivateDriver',
    heroImageAlt: 'A car on an open road curving through dry hills in northern Israel.',
    table: {
      caption: 'Driving yourself against hiring a driver',
      columns: ['', 'Rental car', 'Van with driver'],
      rows: [
        ['Best for', 'One or two people, loose plans', 'Groups, families, fixed schedules'],
        ['Parking', 'Yours to find and pay for', 'Not your problem'],
        ['After a long flight', 'You drive', 'You do not'],
        ['On Shabbat', 'Fine, roads are quiet', 'Fine'],
        ['Luggage', 'A car boot', 'Group and bags together'],
        ['Several cities in a day', 'Tiring', 'Normal'],
        ['Cost shape', 'Per day, plus fuel, parking, insurance', 'Per vehicle, agreed up front'],
      ],
    },
    included: [],
    body: [
      {
        heading: 'Parking is the real decider',
        paragraphs: [
          'Driving between cities in Israel is easy. The motorways are good and the distances are short. What is hard is stopping at the other end.',
          'Central Tel Aviv parking is scarce and the kerbside rules are colour-coded in a way that catches visitors out. Jerusalem’s older districts were not built for cars at all. A day that looks like three stops on a map can turn into three separate hunts for a space.',
        ],
        bullets: [],
      },
      {
        heading: 'Group size changes the maths',
        paragraphs: [
          'For two people a rental car is usually cheaper, and the freedom is worth a lot.',
          'At five or six people you are into a large car or two cars, which means two sets of fuel, two parking problems, and a convoy that loses each other. A single van with a driver is often the simpler and not necessarily dearer answer.',
        ],
        bullets: [],
      },
      {
        heading: 'The day you land',
        paragraphs: [
          'Collecting a hire car straight off a long flight, then driving unfamiliar roads in a country where the signage and the driving style are new to you, is the part most people would skip if they could.',
          'A common middle path is a driver for the airport run and the first day, then a rental car once you have slept.',
        ],
        bullets: [],
      },
      {
        heading: 'Where a driver clearly wins',
        paragraphs: ['Some trips are not close.'],
        bullets: [
          'A day with several stops, where someone must stay with the vehicle',
          'A wine or distillery day, where someone must not drink',
          'Groups above four with luggage',
          'Business days with meetings in three cities',
          'Anyone who would rather not drive abroad at all',
        ],
      },
    ],
    routeIds: [],
    faq: [
      {
        q: 'Can we hire a driver for part of a trip only?',
        a: 'Yes, and many people do: a driver for the airport runs and the long days, and their own car for the rest.',
      },
      {
        q: 'How many hours is a full day with a driver?',
        a: '[PLACEHOLDER: say how many hours a full day covers and what happens if it runs longer.]',
      },
      {
        q: 'Do your drivers guide the tour as well?',
        a: '[PLACEHOLDER: say whether your drivers guide, and whether you can arrange a licensed guide separately.]',
      },
      {
        q: 'Is it hard to drive in Israel as a visitor?',
        a: 'The roads and signage are good and the main signs carry English. The two things visitors mention are assertive city driving and the scarcity of parking.',
      },
    ],
    leadsTo: ['vanWithDriver', 'privateTours'],
    related: ['vanWithDriver', 'privateTours', 'privateTransfers'],
  },
};

export default guides;
