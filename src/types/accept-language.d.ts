declare module "accept-language" {
  function languages(langs: string[]): void;
  function get(header: string | null): string | null;

  const acceptLanguage: {
    languages: typeof languages;
    get: typeof get;
  };

  export { languages, get };
  export default acceptLanguage;
}
