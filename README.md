# SokoDB Web

Sitio web corporativo para **SokoDB**, desarrollado con Next.js, TypeScript, Tailwind CSS y formulario de contacto conectado mediante SMTP.

El sitio presenta el portafolio de servicios de SokoDB enfocado en consultoría especializada en tecnologías de la información, plataformas de datos, servicios administrados, integración, automatización, analítica e infraestructura empresarial.

## Stack tecnológico

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Nodemailer
- Zod
- Lucide React

## Rutas principales

- `/`
- `/servicios`
- `/nosotros`
- `/contacto`
- `/aviso-de-privacidad`

## Funcionalidades principales

- Sitio corporativo responsive.
- Header con navegación desktop y menú móvil.
- Footer con enlaces de navegación, servicios y contacto.
- Carrusel de logotipos de tecnologías.
- Botón flotante de WhatsApp.
- Formulario de contacto con validación.
- Envío de correos mediante SMTP.
- Protección antispam básica mediante honeypot.
- Página de aviso de privacidad.

## Variables de entorno

El proyecto requiere variables de entorno para el envío de correos.

Crear un archivo `.env.local` en la raíz del proyecto tomando como referencia `.env.example`.

```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=
SMTP_PASS=

CONTACT_TO_EMAIL=contacto@sokodb.com.mx
CONTACT_FROM_EMAIL="SokoDB <contacto@sokodb.com.mx>"
```

Notas:

- `SMTP_USER` debe ser el correo real usado para autenticar SMTP.
- `SMTP_PASS` debe ser la contraseña real del buzón o contraseña de aplicación, según el proveedor.
- `CONTACT_FROM_EMAIL` debe coincidir con el buzón autenticado o con un remitente permitido por el proveedor SMTP.
- `.env.local` no debe subirse al repositorio.

## Instalación local

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

El sitio estará disponible en:

```txt
http://localhost:3000
```

## Validaciones

Antes de hacer commit o deploy, ejecutar:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Si el build local falla por memoria, se puede intentar:

```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

## Ejecutar build de producción local

Después de construir el proyecto:

```bash
npm run start
```

Luego revisar:

```txt
http://localhost:3000
```

## Despliegue

El proyecto está preparado para desplegarse en Vercel.

Antes del despliegue se deben configurar en Vercel las mismas variables de entorno definidas en `.env.example`:

```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=
SMTP_PASS=

CONTACT_TO_EMAIL=contacto@sokodb.com.mx
CONTACT_FROM_EMAIL="SokoDB <contacto@sokodb.com.mx>"
```

Después de configurar variables de entorno, realizar redeploy para que Vercel las tome correctamente.

## Estructura general

```txt
src/
  app/
    actions/
    aviso-de-privacidad/
    contacto/
    nosotros/
    servicios/
    globals.css
    layout.tsx
    page.tsx

  components/
    cards/
    layout/
    sections/
    shared/
    ui/

  content/
    navigation.ts
    services.ts
    social.ts
    technologies.ts

  lib/
    utils.ts

public/
  brand/
    technologies/
```

## Recomendaciones antes de publicar

Antes de conectar el dominio final:

- Validar que todas las rutas carguen correctamente.
- Probar el formulario de contacto en producción.
- Confirmar que el correo llegue al destinatario correcto.
- Revisar el botón flotante de WhatsApp.
- Verificar enlaces sociales.
- Revisar responsive en móvil, tablet y escritorio.
- Confirmar que el aviso de privacidad esté enlazado desde formulario y footer.
- Validar que no existan textos temporales o contenido pendiente.

## Contacto

Sitio desarrollado para SokoDB.

Correo de contacto:

```txt
luis.flores@sokodb.com.mx
```