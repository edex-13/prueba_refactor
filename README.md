# React Webpack Application

Una aplicación React moderna construida con Webpack y dockerizada para fácil despliegue.

## 🚀 Despliegue Rápido

Para desplegar la aplicación, ejecuta estos **3 comandos**:

```bash
# 1. Construir la imagen Docker
docker-compose build

# 2. Levantar el contenedor
docker-compose up -d

```



Una vez desplegada, la aplicación estará disponible en:
- **URL:** http://localhost:3000



### Desarrollo local (sin Docker)
```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm start

# Construir para producción
npm run build
```

## 📁 Estructura del Proyecto

```
├── src/                    # Código fuente de React
├── public/                 # Archivos públicos
├── webpack.config.js       # Configuración de Webpack
├── package.json           # Dependencias y scripts
├── Dockerfile             # Configuración Docker
├── docker-compose.yml     # Orquestación de contenedores
├── nginx.conf             # Configuración del servidor web
├── deploy.sh              # Script de despliegue automatizado
├── .dockerignore          # Archivos ignorados por Docker
└── README.md              # Este archivo
```


- La aplicación se construye automáticamente durante el proceso Docker
- Los archivos estáticos se sirven con caché optimizado
- El contenedor se reinicia automáticamente en caso de fallo
- Puerto 3000 mapeado para acceso local


