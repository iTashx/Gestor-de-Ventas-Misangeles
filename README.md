# Sistema de Gestión Misangeles

Sistema completo de gestión de inventario y ventas desarrollado para el negocio Misangeles.

## 🚀 Características

- **Gestión de Productos**: Agregar, editar y eliminar productos con códigos únicos
- **Control de Inventario**: Entradas y salidas con cálculo automático de stock
- **Sistema de Ventas**: Registro de ventas con cálculo automático de IVA
- **Reportes**: Exportación de datos a Excel/CSV
- **Configuración**: Personalización de tasas de cambio, IVA y datos de empresa
- **Diseño Responsive**: Funciona perfectamente en móviles y tablets
- **PWA**: Instalable como aplicación móvil

## 📱 Instalación como App

### Opción 1: PWA Builder (Recomendado)
1. Ve a https://www.pwabuilder.com/
2. Pega la URL de tu repositorio GitHub
3. Personaliza la app (logo, colores, nombre)
4. Genera el APK

### Opción 2: Android Studio
1. Descarga Android Studio
2. Crea un proyecto WebView
3. Carga este index.html
4. Genera el APK

## 🛠️ Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **UI Framework**: Bootstrap 5
- **Iconos**: Font Awesome
- **Notificaciones**: SweetAlert2
- **Almacenamiento**: LocalStorage
- **PWA**: Manifest.json

## 📊 Funcionalidades

### Dashboard
- Estadísticas en tiempo real
- Resumen de ventas del día
- Valor total del inventario
- Productos y entradas recientes

### Productos
- Código único por producto
- Precios al mayor y detal
- Categorización
- Equivalencias (ej: 1 caja = 30 unidades)

### Inventario
- Control de stock automático
- Cálculo de valores en USD y BS
- Alertas de stock bajo
- Trazabilidad completa

### Ventas
- Cálculo automático de IVA (30%)
- Conversión USD a BS automática
- Registro de tipo de venta (Mayor/Detal)
- Historial completo

### Reportes
- Exportación a CSV/Excel
- Estadísticas mensuales
- Análisis de ventas
- Valoración de inventario

## ⚙️ Configuración

### Parámetros del Sistema
- **Tasa de Cambio**: USD a Bolívares (configurable)
- **IVA**: Porcentaje de impuesto (configurable)
- **Empresa**: Nombre y datos de contacto
- **Colores**: Paleta personalizable

### Personalización
- Logo de empresa
- Colores del tema
- Información de contacto
- Configuración de monedas

## 📱 Uso Móvil

La aplicación está optimizada para uso móvil:
- Sidebar colapsible
- Navegación táctil
- Formularios adaptados
- Tablas responsive

## 🔧 Desarrollo

### Estructura de Archivos
```
app_web/
├── index.html          # Aplicación principal
├── manifest.json       # Configuración PWA
├── README.md          # Documentación
└── static/
    └── config.js      # Configuración del sistema
```

### Datos
- Los datos se almacenan en LocalStorage del navegador
- No requiere base de datos externa
- Funciona completamente offline
- Sincronización automática

## 📞 Contacto

- **Desarrollador**: Angel Rojas
- **Email**: angeljrojasm@gmail.com
- **GitHub**: https://github.com/angelrojas

## 📄 Licencia

Este proyecto es propiedad de Misangeles. Todos los derechos reservados.

---

**Sistema Misangeles** - Gestionando tu negocio con excelencia
