# Aplicación de Autenticación con React y Supabase

Una aplicación React que incluye autenticación de usuarios y un juego interactivo de ruleta utilizando las funciones Edge de Supabase.

## Características

- Página de inicio de sesión con autenticación de Supabase
- Página de registro de usuarios con Supabase
- Juego interactivo de ruleta con 4 colores (Rojo, Azul, Verde, Amarillo)
- Integración de funciones Edge para la lógica de giro de la ruleta

## Requisitos Previos

- Node.js instalado (versión 18 o superior)
- npm instalado

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Emimarquez06/Emiliano-Marquez-ADNT-Supabase-.git
```

2. Navega a la carpeta del proyecto:
```bash
cd Emiliano-Marquez-ADNT-Supabase-
```

3. Instala las dependencias:
```bash
npm install
```

4. Configura las variables de entorno:
Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:
```
VITE_SUPABASE_URL=tu-url-de-supabase
VITE_SUPABASE_ANON_KEY=tu-key-anonima-de-supabase
```

5. Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Uso

1. Regístrate o inicia sesión con tu cuenta de Supabase
2. Una vez autenticado, podrás acceder a la página principal con la ruleta
3. Haz clic en el botón "Girar" para activar la ruleta
4. La ruleta girará y mostrará un color aleatorio
5. Puedes seguir jugando cuantas veces quieras
6. Para cerrar sesión, usa el botón "Logout"

## Tecnologías Utilizadas

- React 18
- Vite
- TypeScript
- React Router DOM
- Supabase
- CSS3

## Estructura del Proyecto

```
src/
├── components/
│   └── Wheel.tsx
├── pages/
│   └── Home.tsx
├── lib/
│   └── supabaseClient.ts
├── types/
│   ├── react.d.ts
│   ├── react-router.d.ts
│   └── supabase.d.ts
└── supabase/
    └── functions/
        └── spin-wheel/
            └── index.ts
```

## Funcionalidad de la Ruleta

La ruleta tiene 4 colores:
- Rojo
- Azul
- Verde
- Amarillo

La lógica de giro está implementada en una función Edge de Supabase que:
1. Genera un color aleatorio
2. Registra el giro en la base de datos
3. Devuelve el resultado al frontend

## Licencia

MIT License
- Home page with logout functionality
- Routing between pages

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Supabase account and project

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Configure your Supabase credentials:
   - Create a file named `.env.local` in the project root
   - Add the following environment variables:
   ```
   VITE_SUPABASE_URL=https://your_project_id.supabase.co
   VITE_SUPABASE_ANON_KEY=your_VITE_SUPABASE_ANON_KEY
   ```
   - Replace `your_VITE_SUPABASE_ANON_KEY` with your actual Supabase anon/public key

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Technologies Used

- React
- TypeScript
- React Router
- Vite
- Supabase (Authentication & Backend)

## Project Structure

```
src/
  ├── lib/
  │   └── supabaseClient.ts
  ├── components/
  │   └── Wheel.tsx
  ├── pages/
  │   ├── Home.tsx
  │   ├── Login.tsx
  │   └── Signup.tsx
  ├── App.tsx
  ├── App.css
  ├── config.ts
  ├── main.tsx
  └── index.css
```

## Notes

- You must set up your own Supabase project and configure the environment variables for authentication to work
- For production, ensure you properly secure your environment variables
- Consider implementing additional features like password reset, email verification, and profile management
=======
# Emiliano-Marquez-ADNT-Supabase-
>>>>>>> 251e3fea719863cef71125fa4961f5ea294f6c01
