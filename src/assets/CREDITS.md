# Photo credits

Photographs on this site come from Wikimedia Commons and Openverse. Every one is either in
the public domain or under a Creative Commons Attribution (CC BY) licence —
no share-alike, no non-commercial, no no-derivatives terms.

**CC BY requires visible attribution.** Crediting the photographers somewhere a
visitor can reach — a credits page, or a line in the footer — is a condition of
the licence, not a courtesy. Every image below was cropped and resized to fit
its slot, which counts as a change and is noted here as the licence asks.

| Used as | Subject | Photographer | Licence | Source |
| --- | --- | --- | --- | --- |
| `src/assets/hero-poster.jpg` | Dead Sea at dusk, looking across to the mountains of Jordan | Jorge Láscar | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dead_Sea_at_dusk_and_Jordan_(11663612103).jpg) |
| `src/assets/page-jerusalem-day-tour.jpg` | Western Wall plaza with the Dome of the Rock behind it | Sustructu, stitched by Marku1988 | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dome_of_the_rock-Wailing_wall.jpg) |
| `src/assets/page-dead-sea-masada.jpg` | The cliffs of Masada above the Dead Sea | jimmyweee | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Masada_and_the_Dead_Sea_(5563926377).jpg) |
| `src/assets/page-private-driver-israel.jpg` | Open road through dry hills in Israel | bertconcepts | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Israel_(10712955073).jpg) |
| `src/assets/page-ben-gurion-airport-transfer.jpg` | Daylit arrivals walkway at Ben Gurion Airport | Sarah Stierch | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ben_Gurion_International_Airport_Walkway_-_Sarah_Stierch.jpg) |
| `src/assets/page-contact.jpg` | Tel Aviv shoreline seen from Jaffa | רוני קניגסברג (Roni Kenigsberg), PikiWiki Israel | [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:143476_jaffa_PikiWiki_Israel.jpg) |
| `public/og-default.jpg` | Panorama of the Old City of Jerusalem | 365grad | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Panorama_Jerusalem_Tempelberg.jpg) |
| `src/assets/service-airport-transfer.jpg` | The control towers and terminals of Ben Gurion Airport | דוידי ורדי (Davidi Vardi), PikiWiki Israel | [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:138758_atc_towers_PikiWiki_Israel.jpg) |
| `src/assets/service-full-day.jpg` | The Tower of David and the Ottoman city walls of Jerusalem at dusk | Jorge Láscar | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:The_Tower_of_David,_The_Citadel_and_the_impressive_16th_century_Ottoman_city_walls,_Jerusalem_Old_City_(10351163283).jpg) |

| `src/assets/card-airport-transfer.jpg` | Travellers wheeling suitcases through an airport departures hall | digital cat  | CC BY 2.0 | [source](https://www.flickr.com/photos/14646075@N03/4581765179) |
| `src/assets/card-business-travel.jpg` | A business traveller walking through an airport terminal with bags | Nicola since 1972 | CC BY 2.0 | [source](https://www.flickr.com/photos/15216811@N06/6751768291) |
| `src/assets/card-private-tours.jpg` | Walkers on a desert trail in Israel | כאמל ברג'ותי | CC BY 2.5 | [source](https://commons.wikimedia.org/wiki/File%3APikiWiki_Israel_30640_Agriculture_in_Israel.jpg) |
| `src/assets/card-wedding.jpg` | A white tulle bow tied to a wedding car | zeevveez | CC BY 2.0 | [source](https://www.flickr.com/photos/29001414@N00/10341112593) |
| `src/assets/card-artists.jpg` | A crowd in front of a lit concert stage | Incase. | CC BY 2.0 | [source](https://www.flickr.com/photos/62021300@N00/2720494170) |

Changes made: cropped and resized to the dimensions the layout needs, and
re-encoded as progressive JPEG. Astro then derives the AVIF and WebP versions
that ship.

## Still placeholders

These slots are **not** filled with stock photography, on purpose:

- `fleet-*.jpg` (6 images) — the page says "3 Mercedes-Benz Sprinters" and
  "the same vans on every trip". Illustrating that with a stranger's van would
  be a claim about the business that is not true. These must be photographs of
  the actual fleet.
- `page-galilee.jpg` — Wikimedia Commons' Galilee photography is almost all
  historical black and white; nothing suitable was found.

## Why two of the three service cards show places, not vans

`service-*.jpg` sit on cards that describe what the business sells, so the
obvious picture is a van. There is no freely licensed one to use. Every CC BY
or CC0 passenger van on Commons and Openverse is somebody else's vehicle in
somebody else's livery — a UK community minibus, a German shuttle — and
putting one on a card headed "our van, your driver" is a claim about the
fleet that is not true. The only ones that look right are CC BY-SA, which
this project does not take.

So the airport and full-day cards show where the service goes instead: the
arrivals walkway at Ben Gurion, Jerusalem at dusk. True, licensed, and
recognisably Israel. The third card now carries a supplied Sprinter
photograph — see below.

## Supplied photographs, licence unconfirmed

These are not from Commons or Openverse. They came with the project and are
in use now, but none of them has a licence on file, and several carry marks
of the listing they were taken from:

| Used as | Subject | Note |
| --- | --- | --- |
| `src/assets/service-city-to-city.jpg` | Black Mercedes-Benz Sprinter, front quarter | Cropped from `2024-Mercedes-Benz-Sprinter.jpg`; shot on a vehicle lot, other cars visible behind |
| `src/assets/black-sprinter-forward-01.jpg` | Black Sprinter, front quarter (hero) | Reads as a dealer or upfitter listing photo |
| `src/assets/main-pic.jpg` | Black Sprinter, side on | Visibly watermarked "Chicago Motor Cars" |
| `src/assets/stick-driver.jpg` | Black Sprinter outside a building | Reads as a dealer listing photo |
| `src/assets/wedding-van.jpg` | Van dressed for a wedding | Provenance unknown |

Two things to settle before this site starts buying traffic: whether there is
permission to use each of these, and whether they show vehicles the business
actually operates. Photographs of the real fleet solve both at once.
