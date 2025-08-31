// ===============================================================================
//                    CONFIGURACIÓN PERSONALIZABLE DEL SISTEMA
//                    SISTEMA MISANGELES
// ===============================================================================

const SYSTEM_CONFIG = {
    // ===== INFORMACIÓN DE LA EMPRESA =====
    empresa: {
        nombre: "Sistema Misangeles",
        nombreComercial: "Misangeles",
        descripcion: "Sistema de gestión de inventario y ventas",
        slogan: "Gestionando tu negocio con excelencia",
        version: "1.0",
        desarrollador: "Angel Rojas",
        fechaLanzamiento: "2025",
        website: "https://misangeles.com",
        email: "angeljrojasm@gmail.com",
        telefono: "+58 14128422856",
        direccion: "Venezuela",
        github: "https://github.com/angelrojas",
        linkedin: "https://linkedin.com/in/angelrojas",
        
        moneda: "USD",
        monedaLocal: "BS",
        idioma: "es"
    },

    // ===== CONFIGURACIÓN DEL SISTEMA =====
    sistema: {
        nombreAplicacion: "Sistema Misangeles",
        nombreCorto: "Misangeles",
        icono: "fas fa-store",
        colorPrimario: "#366092",
        colorSecundario: "#E7E6E6",
        colorExito: "#00B050",
        colorAdvertencia: "#FFC000",
        colorPeligro: "#C00000",
        colorInfo: "#17a2b8",
        tema: "default",
        modoOscuro: false,
        animaciones: true,
        notificaciones: true,
        sonidos: false,
        autoGuardado: true,
        intervaloAutoGuardado: 30000, // 30 segundos
        maximoRegistros: 1000,
        paginacion: 25
    },

    // ===== CONFIGURACIÓN DE IMPUESTOS =====
    impuestos: {
        ivaPorcentaje: 30,
        ivaNombre: "IVA",
        ivaDescripcion: "Impuesto al Valor Agregado",
        otrosImpuestos: [],
        exentoIva: false,
        calculoAutomatico: true
    },

    // ===== CONFIGURACIÓN DE MONEDAS =====
    monedas: {
        principal: "USD",
        local: "BS",
        tasaCambio: 35.50,
        tasaCambioAutomatica: false,
        urlTasaCambio: "https://api.exchangerate-api.com/v4/latest/USD",
        actualizacionAutomatica: true,
        intervaloActualizacion: 3600000 // 1 hora
    },

    // ===== CONFIGURACIÓN DE INVENTARIO =====
    inventario: {
        controlStock: true,
        stockMinimo: 10,
        stockMaximo: 1000,
        alertasStock: true,
        codigosAutomaticos: true,
        prefijoCodigo: "",
        sufijoCodigo: "",
        formatoCodigo: "AUTO",
        categorias: [
            "Alimentos",
            "Bebidas",
            "Limpieza",
            "Higiene",
            "Golosinas",
            "Hogar",
            "Otros"
        ],
        unidades: [
            "Unidad",
            "Kilogramo",
            "Litro",
            "Metro",
            "Docena",
            "Caja",
            "Paquete",
            "Botella"
        ]
    },

    // ===== CONFIGURACIÓN DE VENTAS =====
    ventas: {
        numeracionAutomatica: true,
        prefijoFactura: "FAC-",
        sufijoFactura: "",
        formatoFactura: "AUTO",
        descuentos: true,
        maximoDescuento: 50,
        comisiones: false,
        porcentajeComision: 0,
        clientes: true,
        historialCliente: true,
        creditos: false,
        plazoCredito: 30,
        intereses: false,
        porcentajeInteres: 0
    },

    // ===== CONFIGURACIÓN DE REPORTES =====
    reportes: {
        formato: "PDF",
        formatoAlternativo: "EXCEL",
        logoReporte: true,
        piePagina: true,
        encabezado: true,
        filtros: true,
        graficos: true,
        exportacion: true,
        programacion: false,
        emailAutomatico: false,
        intervalos: [
            "Diario",
            "Semanal",
            "Mensual",
            "Trimestral",
            "Anual"
        ]
    },

    // ===== CONFIGURACIÓN DE SEGURIDAD =====
    seguridad: {
        autenticacion: false,
        usuarios: false,
        roles: false,
        permisos: false,
        encriptacion: false,
        backup: true,
        backupAutomatico: false,
        intervaloBackup: 86400000, // 24 horas
        maximoBackups: 10,
        ubicacionBackup: "./backups/"
    },

    // ===== CONFIGURACIÓN DE INTERFAZ =====
    interfaz: {
        tema: "default",
        colores: "default",
        fuentes: "default",
        iconos: "FontAwesome",
        layout: "sidebar",
        sidebar: true,
        navbar: true,
        footer: true,
        breadcrumbs: true,
        tooltips: true,
        responsive: true,
        modoMovil: false
    },

    // ===== CONFIGURACIÓN DE NOTIFICACIONES =====
    notificaciones: {
        activas: true,
        tipo: "toast",
        posicion: "top-right",
        duracion: 5000,
        sonido: false,
        email: false,
        push: false,
        eventos: [
            "stock_bajo",
            "venta_nueva",
            "entrada_nueva",
            "error_sistema",
            "backup_completado"
        ]
    },

    // ===== CONFIGURACIÓN DE INTEGRACIÓN =====
    integracion: {
        api: false,
        webhook: false,
        sincronizacion: false,
        nube: false,
        dispositivos: false,
        impresoras: false,
        escaners: false,
        balanzas: false
    },

    // ===== CONFIGURACIÓN DE MANTENIMIENTO =====
    mantenimiento: {
        modoMantenimiento: false,
        mensajeMantenimiento: "Sistema en mantenimiento. Volveremos pronto.",
        actualizaciones: false,
        versiones: false,
        logs: true,
        nivelLog: "INFO",
        maximoLogs: 10000,
        rotacionLogs: true
    }
};

// ===== FUNCIONES DE CONFIGURACIÓN =====

// Obtener configuración
function getConfig(seccion, clave) {
    if (seccion && clave) {
        return SYSTEM_CONFIG[seccion]?.[clave];
    } else if (seccion) {
        return SYSTEM_CONFIG[seccion];
    }
    return SYSTEM_CONFIG;
}

// Establecer configuración
function setConfig(seccion, clave, valor) {
    if (SYSTEM_CONFIG[seccion]) {
        SYSTEM_CONFIG[seccion][clave] = valor;
        guardarConfiguracionLocal();
        return true;
    }
    return false;
}

// Guardar configuración en localStorage
function guardarConfiguracionLocal() {
    try {
        localStorage.setItem('misangeles_config', JSON.stringify(SYSTEM_CONFIG));
        return true;
    } catch (error) {
        console.error('Error al guardar configuración:', error);
        return false;
    }
}

// Cargar configuración desde localStorage
function cargarConfiguracionLocal() {
    try {
        const configGuardada = localStorage.getItem('misangeles_config');
        if (configGuardada) {
            const config = JSON.parse(configGuardada);
            Object.assign(SYSTEM_CONFIG, config);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error al cargar configuración:', error);
        return false;
    }
}

// Restaurar configuración por defecto
function restaurarConfiguracionPorDefecto() {
    try {
        localStorage.removeItem('misangeles_config');
        location.reload();
        return true;
    } catch (error) {
        console.error('Error al restaurar configuración:', error);
        return false;
    }
}

// Exportar configuración
function exportarConfiguracion() {
    try {
        const configStr = JSON.stringify(SYSTEM_CONFIG, null, 2);
        const blob = new Blob([configStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `misangeles_config_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        return true;
    } catch (error) {
        console.error('Error al exportar configuración:', error);
        return false;
    }
}

// Importar configuración
function importarConfiguracion(archivo) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const config = JSON.parse(e.target.result);
                Object.assign(SYSTEM_CONFIG, config);
                guardarConfiguracionLocal();
                resolve(true);
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = reject;
        reader.readAsText(archivo);
    });
}

// Aplicar configuración al sistema
function aplicarConfiguracion() {
    // Aplicar colores
    document.documentElement.style.setProperty('--primary-color', SYSTEM_CONFIG.sistema.colorPrimario);
    document.documentElement.style.setProperty('--secondary-color', SYSTEM_CONFIG.sistema.colorSecundario);
    document.documentElement.style.setProperty('--success-color', SYSTEM_CONFIG.sistema.colorExito);
    document.documentElement.style.setProperty('--warning-color', SYSTEM_CONFIG.sistema.colorAdvertencia);
    document.documentElement.style.setProperty('--danger-color', SYSTEM_CONFIG.sistema.colorPeligro);
    document.documentElement.style.setProperty('--info-color', SYSTEM_CONFIG.sistema.colorInfo);

    // Aplicar nombre de empresa
    const elementosNombre = document.querySelectorAll('.empresa-nombre');
    elementosNombre.forEach(elemento => {
        elemento.textContent = SYSTEM_CONFIG.empresa.nombreComercial;
    });

    // Aplicar logo
    if (SYSTEM_CONFIG.empresa.logo) {
        const logoElement = document.querySelector('.empresa-logo');
        if (logoElement) {
            logoElement.src = SYSTEM_CONFIG.empresa.logo;
            logoElement.style.display = 'block';
        }
    }

    // Aplicar tema
    if (SYSTEM_CONFIG.sistema.modoOscuro) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    // Aplicar animaciones
    if (!SYSTEM_CONFIG.sistema.animaciones) {
        document.body.classList.add('no-animations');
    } else {
        document.body.classList.remove('no-animations');
    }
}

// Inicializar configuración
function inicializarConfiguracion() {
    cargarConfiguracionLocal();
    aplicarConfiguracion();
    
    // Configurar eventos
    document.addEventListener('DOMContentLoaded', function() {
        aplicarConfiguracion();
    });
}

// ===== EXPORTAR FUNCIONES =====
window.SystemConfig = {
    get: getConfig,
    set: setConfig,
    save: guardarConfiguracionLocal,
    load: cargarConfiguracionLocal,
    restore: restaurarConfiguracionPorDefecto,
    export: exportarConfiguracion,
    import: importarConfiguracion,
    apply: aplicarConfiguracion,
    init: inicializarConfiguracion,
    config: SYSTEM_CONFIG
};

// Inicializar automáticamente
inicializarConfiguracion();
