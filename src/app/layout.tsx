import './globals.css'
import Head from 'next/head';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {    
  // Agregar propiedades Open Graph
  ogTitle: 'Mario Molina - Steel Detailer',
  ogDescription: 'Providing top-quality steel detailing services for various industries.',
  ogImage: 'https://www.steeldetailer.com.ar/_next/image?url=%2Flogo.png&w=128&q=75', // Ruta de la imagen de vista previa para compartir en redes sociales
  ogUrl: 'https://www.steeldetailer.com.ar', // URL canónica de la página  
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
        <title>Mario Moina - Steel Detailer</title>
        <meta name="description" content='Mario Molina - Steel Detailer, provides steel detailing services for industry and steel fabricators. Among our services are Industrial steel detailing, Structural steel detailing, Miscellaneous steel detailing, Shop drawing production, BIM modeling and Fabrication support.'/>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.ogUrl} />
        {/* Links for manifest, favicon, and icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
    </>
  )
}
