export const titleToSlug = (name: string) =>
  name.toLowerCase().trim().replace(/\s+/g, '-')

export const slugToTitle = (slug: string) =>
  slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
