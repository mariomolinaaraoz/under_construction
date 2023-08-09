import './globals.css'
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
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      
    </html>
  )
}
