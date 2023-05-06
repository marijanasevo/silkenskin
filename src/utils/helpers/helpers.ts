export function formatCamelCasedName(name: string): string {
  const formattedName = name.replace(/([a-z])([A-Z])/g, "$1 $2"); // separate camelCase
  return formattedName.charAt(0).toUpperCase() + formattedName.slice(1); // capitalize first letter
}

export const formatStrForSlug = (str: string) =>
  str.replace(/[\s:,]+/g, "-").toLowerCase();

export const replaceHyphenWithSpace = (str: string) => str.replace(/-/g, " ");
