declare module "accept-language" {
  function languages(langs: string[]): void;
  function get(header: string | null): string | null;

  export { languages, get };
  export default { languages, get };
}
