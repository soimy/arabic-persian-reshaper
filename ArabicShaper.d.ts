/**
 * Replaces Arabic letters with their contextual presentation forms
 * using the Arabic character map, so the text displays joined where the
 * renderer doesn't shape it. Forms come from Unicode Arabic Presentation
 * Forms-B, or Forms-A for letters Forms-B lacks (such as پ چ ژ ک گ ی).
 * Characters outside the map are returned unchanged.
 */
export declare function convertArabic(normal: string): string;

/**
 * Converts the presentation forms in the Arabic character map (Forms-A
 * and Forms-B) back to their base letters, splitting lam-alef ligatures
 * into lam and alef. Characters outside the map are returned unchanged.
 */
export declare function convertArabicBack(apfb: string): string;
