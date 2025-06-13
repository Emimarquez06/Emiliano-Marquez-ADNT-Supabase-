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


