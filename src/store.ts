import { readable } from "svelte/store";

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

export const hotlineCountries = readable(
  {
    status: "Loading",
    data: [] as IHotlineCountry[],
  },
  function start(set) {
    fetch(`https://api.iwannendmy.life/countries`).then(async (res) => {
      if (res.status === 200) {
        set({
          status: null,
          data: await res.json(),
        });
        return;
      }

      if (res.status === 403) {
        set({
          status: "Your dont have permission to view the hotlines",
          data: [],
        });
        return;
      }

      set({
        status: res.statusText,
        data: [],
      });
    });
  },
);
