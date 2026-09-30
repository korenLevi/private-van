/**
 * Image registry.
 *
 * Every photo the site uses is imported here so Astro can process it into
 * AVIF/WebP at several widths and emit the width/height that keeps layout
 * shift at zero. Content files refer to images by key, never by path.
 *
 * To use a real photo, overwrite the file of the same name in this folder.
 * The keys, and therefore every reference in the site, stay the same.
 */
import heroPoster from './black-sprinter-forward-01.jpg';

import serviceAirport from './service-airport-transfer.jpg';
import serviceFullDay from './service-full-day.jpg';
import serviceCityToCity from './service-city-to-city.jpg';

import fleetExterior from './fleet-exterior.jpg';
import fleetInterior from './fleet-interior.jpg';
import fleetLuggage from './fleet-luggage.jpg';
import fleetSideDoor from './fleet-side-door.jpg';
import fleetSeatsDetail from './fleet-seats-detail.jpg';
import fleetOnRoad from './fleet-on-road.jpg';

import cardAirportTransfer from './card-airport-transfer.jpg';
import cardBusinessTravel from './card-business-travel.jpg';
import cardPrivateTours from './card-private-tours.jpg';
import cardWedding from './card-wedding.jpg';
import cardArtists from './card-artists.jpg';

import pageAirport from './page-ben-gurion-airport-transfer.jpg';
import pagePrivateDriver from './page-private-driver-israel.jpg';
import pageJerusalem from './page-jerusalem-day-tour.jpg';
import pageDeadSea from './page-dead-sea-masada.jpg';
import pageGalilee from './page-galilee.jpg';
import pageContact from './page-contact.jpg';

export const IMAGES = {
  heroPoster,

  // Service carousel cards, cropped 4:5
  cardAirportTransfer,
  cardBusinessTravel,
  cardPrivateTours,
  cardWedding,
  cardArtists,

  serviceAirport,
  serviceFullDay,
  serviceCityToCity,

  fleetExterior,
  fleetInterior,
  fleetLuggage,
  fleetSideDoor,
  fleetSeatsDetail,
  fleetOnRoad,

  pageAirport,
  pagePrivateDriver,
  pageJerusalem,
  pageDeadSea,
  pageGalilee,
  pageContact,
} as const;

export type ImageKey = keyof typeof IMAGES;

/** Look up an image by key, falling back to the hero so a typo never breaks a build. */
export function getImage(key: string) {
  return IMAGES[key as ImageKey] ?? IMAGES.heroPoster;
}
