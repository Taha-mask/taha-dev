import { en } from './en';
import { ar } from './ar';

export const languages = {
  en: 'EN',
  ar: 'AR',
};

export const defaultLang = 'en';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

/**
 * The path with the locale prefix stripped off: both '/ar/foo' and '/foo'
 * give '/foo'. Anchored to a whole segment on purpose — a plain
 * replace('/ar', '') would also eat those two letters out of a slug
 * like '/archive'.
 */
export function getBasePath(url: URL) {
  return url.pathname.replace(/^\/ar(?=\/|$)/, '') || '/';
}

/** Where a given base path lives in a given locale. The default locale is
 *  unprefixed (prefixDefaultLocale is false in astro.config.mjs). */
export function getLocalePath(lang: keyof typeof languages, basePath: string) {
  return lang === defaultLang ? basePath : `/${lang}${basePath}`;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t() {
    return lang === 'ar' ? ar : en;
  }
}
