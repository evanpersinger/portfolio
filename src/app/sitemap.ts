import type { MetadataRoute } from 'next'
import { siteUrl } from '../data/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/projects', '/pets'].map((path) => ({ url: `${siteUrl}${path}` }))
}
