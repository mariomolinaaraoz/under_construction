import './globals.css'
import Head from 'next/head';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mario Moina - Steel Detailer',
  description: 'Mario Molina - Steel Detailer, provides steel detailing services for industry and steel fabricators. Among our services are Industrial steel detailing, Structural steel detailing, Miscellaneous steel detailing, Shop drawing production, BIM modeling and Fabrication support.',
  // Agregar propiedades Open Graph
  ogTitle: 'Mario Molina - Steel Detailer',
  ogDescription: 'Providing top-quality steel detailing services for various industries.',
  ogImage: 'https://www.steeldetailer.com.ar/_next/image?url=%2Flogo.png&w=128&q=75', // Ruta de la imagen de vista previa para compartir en redes sociales
  ogUrl: 'https://www.steeldetailer.com.ar', // URL canónica de la página
  // Agregar favicon
  manifest: '/site.webmanifest', // Link to the site.webmanifest
  favicon: '/favicon.ico', // Link to the favicon
  favicon32: '/favicon-32x32.png', // Link to the favicon 32x32
  favicon16: '/favicon-16x16.png', // Link to the favicon 16x16  
  appleTouchIcon: '/apple-touch-icon.png' // Link to the apple-touch-icon
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <body className={inter.className}>{children}</body>      
    </html>
    <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.ogUrl} />
        {/* Links for manifest, favicon, and icons */}
        <link rel="manifest" href={metadata.manifest} />
        <link rel="icon" href={metadata.favicon} />
        <link rel="apple-touch-icon" sizes="180x180" href={metadata.appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={metadata.favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={metadata.favicon16} />
      </Head>
    </>
  )
}
