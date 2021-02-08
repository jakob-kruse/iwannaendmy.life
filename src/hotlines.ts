export interface IHotline {
  label: string;
  phone?: string | string[];
  mail?: string;
  website?: string;
  description?: string;
  customAttributes?: {
    label: string;
    values: string | string[];
    hrefPrefix?: string;
  }[];
}

export interface IHotlineCountry {
  name: string;
  code: string;
  hotlines?: IHotline[];
}

export const hotlineCountries: IHotlineCountry[] = [
  {
    name: "Germany",
    code: "de",
    hotlines: [
      {
        label: "Nummer gegen Kummer",
        phone: "116 111",
        website: "https:www.nummergegenkummer.de/",
        description:
          "Der Verein Nummer gegen Kummer e.V. ist die Dachorganisation des größten kostenfreien telefonischen Beratungsangebotes für Kinder, Jugendliche und Eltern in Deutschland",
      },
      {
        label: "TelefonSeelsorge",
        website: "https://www.telefonseelsorge.de/",
        phone: ["0800 1110111", "0800 1110222"],
        description:
          "Die Telefonseelsorge ist eine vorwiegend ehrenamtlich betriebene Hilfseinrichtung zur telefonischen Beratung von Menschen mit Sorgen, Nöten und Krisen, die in vielen Ländern besteht",
      },
    ],
  },
];

/*
 Country Code Reference. Used for flags via https://www.countryflags.io

 dz - Algeria
 ar - Argentina
 am - Armenia
 au - Australia
 at - Austria
 bs - Bahamas
 bd - Bangladesh
 bb - Barbados
 be - Belgium
 bo - Bolivia
 ba - Bosnia
 bw - Botswana
 br - Brazil
 bg - Bulgaria
 ca - Canada
 cn - China
 co - Colombia
 hr - Croatia
 cz - Czech republic
 dk - Denmark
 eg - Egypt
 ee - Estonia
 fi - Finland
 fr - France
 de - Germany
 gh - Ghana
 gr - Greece
 gy - Guyana
 hk - Hong Kong
 hu - Hungary
 in - India
 id - Indonesia
 ir - Iran
 ie - Ireland
 il - Israel
 it - Italy
 jm - Jamaica
 jp - Japan
 jo - Jordan
 lv - Latvia
 lb - Lebanon
 lr - Liberia
 lu - Luxembourg
 my - Malaysia
 mt - Malta
 mu - Mauritius
 mx - Mexico
 nl - Netherlands
 nz - New Zealand
 ng - Nigeria
 no - Norway
 pk - Pakistan
 ph - Philippines
 pl - Poland
 pt - Portugal
 ro - Romania
 ru - Russia
 sa - Saudi Arabia
 rs - Serbia
 sg - Singapore
 es - Spain
 za - South Africa
 ss - South Korea
 lk - Sri Lanka
 sd - Sudan
 se - Sweden
 ch - Switzerland
 th - Thailand
 to - Tonga
 tr - Turkey
 ae - United Arab Emirates
 gb - United Kingdom
 us - United States
*/
