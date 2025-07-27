export function stripHtml(markup: string): string {
  const tagRegex = /<(?!(?:\/)?(?:b|i|strong|em)\b)[^>]+>/gi;
  let strippedMarkup = markup.replace(tagRegex, "");

  // Replace common HTML entities with their character equivalents
  strippedMarkup = strippedMarkup.replace(/&nbsp;/gi, " ");
  strippedMarkup = strippedMarkup.replace(/&amp;/gi, "&");
  strippedMarkup = strippedMarkup.replace(/&lt;/gi, "<");
  strippedMarkup = strippedMarkup.replace(/&gt;/gi, ">");
  strippedMarkup = strippedMarkup.replace(/&quot;/gi, '"');
  strippedMarkup = strippedMarkup.replace(/&apos;/gi, "'"); // Or use "&#39;"

  return strippedMarkup;
}
