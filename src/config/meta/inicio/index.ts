export const homeMeta = {
  title: 'Inicio - Égida Jurídica',
  description:
    'Bufete de abogados especializado en derecho civil, penal, laboral y más. Más de 20 años de experiencia. Consulta gratuita disponible.',
  keywords: [
    'abogados',
    'derecho civil',
    'derecho penal',
    'derecho laboral',
    'asesoría legal',
    'bufete',
  ],
  image: '/og-image.jpg',
  canonical: '/',
  type: 'website',
  robots: 'index, follow',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Égida Jurídica',
    description: 'Bufete de abogados especializado en múltiples áreas del derecho',
    url: 'https://egidajuridica.com',
    telephone: '+1234567890',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Principal 123',
      addressLocality: 'Ciudad',
      addressCountry: 'MX',
    },
    areaServed: 'MX',
    serviceType: ['Derecho Civil', 'Derecho Penal', 'Derecho Laboral'],
  },
}
