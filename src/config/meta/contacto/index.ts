export const contactMeta = {
  title: 'Contacto - Égida Jurídica',
  description:
    'Contáctanos para una consulta gratuita. Especialistas en derecho civil, penal y laboral. Estamos aquí para ayudarte con tu caso legal.',
  keywords: [
    'contacto abogados',
    'consulta gratuita',
    'asesoría legal',
    'égida jurídica',
    'abogados especialistas',
  ],
  image: '/og-image.jpg',
  canonical: '/contacto',
  type: 'website',
  robots: 'index, follow',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contacto - Égida Jurídica',
    description: 'Página de contacto para consultas legales',
    url: 'https://egidajuridica.com/contacto',
    mainEntity: {
      '@type': 'Organization',
      name: 'Égida Jurídica',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1234567890',
        contactType: 'customer service',
        availableLanguage: 'Spanish',
      },
    },
  },
}
