# Égida Jurídica - Sitio Web Corporativo

## 📋 Descripción del Proyecto

**Égida Jurídica** es un sitio web corporativo para un prestigioso bufete de abogados especializado en servicios legales integrales. El proyecto está desarrollado con tecnologías modernas para ofrecer una experiencia web excepcional, presentando los servicios legales, áreas de práctica, equipo profesional y recursos informativos del bufete.

### 🏢 Sobre Égida Jurídica

Égida Jurídica es un bufete de abogados con más de 15 años de experiencia en el mercado peruano, especializado en:

- **Derecho Empresarial**: Laboral, Comercial, Societario, Administrativo, Regulatorio, Propiedad Intelectual, Tributario, Financiero, Contractual, Cumplimiento Normativo, Inmobiliario y Minero
- **Derecho Civil**: Patrimonial, Sucesiones y Herencia, Propiedades, y Derecho de Familia

## 🚀 Tecnologías Utilizadas

### Framework Principal

- **Astro 5.9.2** - Framework web moderno para sitios de alto rendimiento
- **React 19.1.0** - Biblioteca para componentes interactivos
- **TypeScript** - Tipado estático para JavaScript

### Styling y UI

- **Tailwind CSS 4.1.11** - Framework de CSS utilitario
- **Lucide React 0.516.0** - Iconografía moderna

### Gestión de Estado

- **Zustand 5.0.5** - Gestión de estado ligera y moderna

### Herramientas de Desarrollo

- **ESLint 9.34.0** - Linter para JavaScript/TypeScript
- **Prettier 3.5.3** - Formateador de código
- **Vite** - Herramienta de construcción y desarrollo

### Despliegue

- **Vercel** - Plataforma de despliegue con adaptador oficial de Astro

## 📁 Arquitectura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── shared/          # Componentes compartidos (layout, páginas comunes)
│   └── ui/              # Componentes de interfaz de usuario
├── config/              # Configuraciones del proyecto
│   ├── constants/       # Constantes globales
│   ├── env/            # Configuración de entorno
│   ├── meta/           # Metadatos SEO por página
│   └── routes/         # Configuración de rutas
├── features/            # Funcionalidades organizadas por dominio
│   ├── about/          # Página "Nosotros"
│   ├── blog/           # Sistema de blog
│   ├── contact/        # Página de contacto
│   ├── home/           # Página de inicio
│   ├── practice-areas/ # Áreas de práctica legal
│   ├── resources-legals/ # Recursos legales
│   └── search/         # Funcionalidad de búsqueda
├── layouts/             # Layouts de página
├── pages/              # Páginas del sitio (rutas)
├── styles/             # Estilos globales
└── types/              # Definiciones de tipos TypeScript
```

### 🏗️ Principios Arquitectónicos

1. **Arquitectura por Características**: Cada funcionalidad principal está organizada en su propia carpeta con componentes, hooks, tipos y utilidades relacionadas.

2. **Separación de Responsabilidades**:

   - `components/ui/`: Componentes de interfaz reutilizables
   - `components/shared/`: Componentes compartidos específicos del dominio
   - `features/`: Lógica de negocio organizada por características

3. **Configuración Centralizada**:

   - Metadatos SEO organizados por página
   - Constantes y configuraciones en lugares específicos

4. **Tipado Fuerte**: Uso extensivo de TypeScript para mayor seguridad y mantenibilidad

## ⚙️ Configuración del Proyecto

### Configuración de Astro (`astro.config.mjs`)

```javascript
export default defineConfig({
  site: 'https://egidajuridica.com',
  output: 'server', // Renderizado del lado del servidor
  adapter: vercel(), // Adaptador para Vercel
  integrations: [sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/api': {
          // Proxy para API local
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  },
})
```

### Configuración de TypeScript (`tsconfig.json`)

- Extiende la configuración estricta de Astro
- Configuración de alias de rutas (`@/*` apunta a `src/*`)
- Soporte completo para React JSX

### Configuración de ESLint

- Configuración recomendada para JavaScript
- Plugin específico para Astro
- Reglas personalizadas para mantener consistencia

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Construcción
npm run build        # Construye el proyecto para producción
npm run preview      # Vista previa de la construcción

# Linting
npm run lint         # Ejecuta ESLint
npm run lint:fix     # Ejecuta ESLint y corrige automáticamente

# Astro CLI
npm run astro        # Acceso directo a comandos de Astro
```

## 📦 Instalación y Configuración

### Prerrequisitos

- **Node.js** 18.0 o superior
- **npm** o **yarn** como gestor de paquetes

### Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd egidajuridica-client
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Configurar variables de entorno** (si es necesario):

   ```bash
   # Crear archivo .env.local con las configuraciones necesarias
   ```

4. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

El sitio estará disponible en `http://localhost:4321`

### Construcción para Producción

```bash
# Construir el proyecto
npm run build

# Vista previa de la construcción
npm run preview
```

## 🌐 Funcionalidades Principales

### 📄 Páginas Principales

- **Inicio** (`/`): Página principal con hero, servicios, equipo y testimonios
- **Nosotros** (`/nosotros`): Historia, misión, visión y valores del bufete
- **Áreas de Práctica** (`/areas`): Catálogo de especialidades legales
- **Blog** (`/blog`): Artículos y recursos informativos
- **Recursos Legales** (`/recursos`): Documentos y guías legales
- **Contacto** (`/contacto`): Información de contacto y formulario

### 🔍 Funcionalidades Avanzadas

- **Sistema de Búsqueda**: Búsqueda global en contenido del sitio
- **Filtrado Dinámico**: En blog y recursos legales
- **SEO Optimizado**: Metadatos personalizados por página
- **Responsive Design**: Adaptado para todos los dispositivos
- **Gestión de Estado**: Para filtros y búsquedas
- **Sitemap Automático**: Generación automática para SEO

## 👥 Equipo y Contribuidores

### Equipo Principal

**Equipo Legal Profesional** - _Especialistas en Diversas Áreas del Derecho_

- Más de 15 años de experiencia en derecho empresarial y civil
- Especialistas en derecho corporativo, tributario, penal y familiar
- 📧 Email: contacto@egidajuridica.com
- 🌐 Web: https://egidajuridica.com

### Contribuidores de Desarrollo

Este proyecto ha sido desarrollado siguiendo las mejores prácticas de desarrollo web moderno, con un enfoque en la experiencia del usuario, SEO y mantenibilidad del código.

## 🔧 Configuración de Desarrollo

### Estructura de Componentes

Los componentes siguen una estructura consistente:

```
component-name/
├── index.tsx         # Componente principal (React)
├── index.astro       # Componente principal (Astro)
├── types.ts          # Tipos TypeScript específicos
└── data/            # Datos estáticos (si aplica)
    └── index.ts
```

### Convenciones de Código

- **Nombres de archivos**: kebab-case para carpetas, camelCase para archivos TypeScript
- **Componentes**: PascalCase para nombres de componentes
- **Exports**: Uso de exports nombrados e index.ts para re-exportación
- **Tipos**: Interfaces con sufijo `Props` para props de componentes

### Gestión de Estado

- **Zustand** para estado global (búsquedas, filtros)
- **Props drilling** para estado local simple
- **Hooks personalizados** para lógica reutilizable

## 📈 SEO y Performance

### Optimizaciones SEO

- **Metadatos dinámicos** por página
- **Structured Data** (JSON-LD) para mejor indexación
- **Sitemap automático** generado por Astro
- **URLs semánticas** y amigables
- **Open Graph** y Twitter Cards

### Optimizaciones de Performance

- **Lazy loading** de imágenes
- **Code splitting** automático con Astro
- **Optimización de assets** con Vite
- **Renderizado del lado del servidor** para mejor FCP
- **Compresión de imágenes** automática

## 🚀 Despliegue

El proyecto está configurado para desplegarse automáticamente en **Vercel** con el adaptador oficial de Astro.

### Variables de Entorno de Producción

```bash
# Configurar en Vercel Dashboard o archivo .env.production
SITE_URL=https://egidajuridica.com
```

### Pipeline de Despliegue

1. **Push a main**: Despliegue automático a producción
2. **Pull Requests**: Vista previa automática
3. **Optimizaciones automáticas**: Compresión, minificación, etc.

## 📚 Recursos Adicionales

- [Documentación de Astro](https://docs.astro.build/)
- [Documentación de React](https://react.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [Documentación de Vercel](https://vercel.com/docs)

## 📄 Licencia

Este proyecto es propiedad de **Égida Jurídica** y está destinado exclusivamente para su uso corporativo.

---

**Desarrollado con ❤️ para Égida Jurídica**
