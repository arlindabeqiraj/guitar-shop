export const languages = ["en", "sq"] as const;

export const fallbackLng = "en";

export type Language = (typeof languages)[number];

export const defaultNS = "common";

export function getOptions(
  lng: Language = fallbackLng,
  ns: string = defaultNS
) {
  return {
    lng,

    fallbackLng,

    ns: [ns],
    defaultNS,
  };
}
