import { getAllProperties } from '@/lib/properties'

function toAbsolute(origin: string, path: string) {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

export async function GET(request: Request) {
  const origin = new URL(request.url).origin

  const staticPages = ['/', '/projects', '/about', '/contact', '/properties']

  const properties = getAllProperties()

  const entries = [
    ...staticPages.map((p) => ({ loc: `${origin}${p}`, images: [] })),
    ...properties.map((p) => ({
      loc: `${origin}/properties/${p.id}`,
      images: [
        ...(p.image ? [toAbsolute(origin, p.image)] : []),
        ...(Array.isArray(p.gallery) ? p.gallery.map((g) => toAbsolute(origin, g)) : []),
      ].filter(Boolean),
    })),
  ]

  const lastmod = new Date().toISOString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries
    .map((entry) => {
      const imagesXml = (entry.images || [])
        .map((img) => `    <image:image>\n      <image:loc>${img}</image:loc>\n    </image:image>`)
        .join('\n')

      return `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n${imagesXml ? imagesXml + '\n' : ''}  </url>`
    })
    .join('\n')}\n</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
