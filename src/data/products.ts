
import { type Product } from "@/types/product"; // Assuming type definition exists or I'll imply it. Actually I'll just export the array directly as before to avoid type errors if the type file is missing.

export const products = [
    // --- Diagnóstico ---
    {
        id: "pad-ix-link",
        name: "PAD IX Link",
        images: ["/images/diagnostico/pad-ix-link/pad-ix-link_1.png"],
        features: [
            "+110 Marcas de vehículos",
            "Topología de Red",
            "3 Años de Actualizaciones",
            "Pantalla de 13.6\"",
            "SmartLink VCI"
        ],
        highlight: true,
        category: "diagnostico",
        marketing: {
            slogan: "Potencia sin límites.",
            description: "El scanner más avanzado del mercado. Diseñado para enfrentar cualquier desafío automotriz con velocidad y precisión absoluta.",
            heroImage: "/images/diagnostico/pad-ix-link/pad-ix-link_1.png",
            bentoGrid: [
                {
                    title: "Rendimiento Extremo",
                    description: "Procesador de 8 núcleos con 12GB de RAM.",
                    colSpan: 2
                },
                {
                    title: "Visualización Perfecta",
                    description: "Pantalla de 13.6 pulgadas.",
                    colSpan: 1
                },
                {
                    title: "SmartLink VCI",
                    description: "Soporte J2534, DoIP y CAN FD.",
                    colSpan: 1
                },
                {
                    title: "Mapeo de Topología",
                    description: "Visualiza el estado de la red.",
                    colSpan: 2
                }
            ]
        }
    },
    {
        id: "pro3-link",
        name: "PRO3 LINK",
        images: ["/images/diagnostico/pro3-link/pro3-link_1.png"],
        features: [
            "Diagnóstico Inteligente",
            "Soporte J2534",
            "VCI Smartlink C",
            "Cobertura total"
        ],
        category: "diagnostico"
    },
    {
        id: "pro-se",
        name: "PRO SE",
        images: ["/images/diagnostico/pro-se/pro-se_1.png"],
        features: [
            "Diagnóstico completo",
            "3 Años actualizaciones",
            "Hardware robusto"
        ],
        category: "diagnostico"
    },

    // --- Elevadores ---
    {
        id: "tlt-235-sb",
        name: "TLT235SB",
        images: ["/images/elevadores/tlt-235-sb/tlt-235-sb_1.png"],
        features: ["2 Columnas", "3.5 Toneladas", "Base de piso", "Desbloqueo manual"],
        category: "elevadores"
    },
    {
        id: "tlt-240-sb",
        name: "TLT240SB",
        images: ["/images/elevadores/tlt-240-sb/tlt-240-sb_1.png"],
        features: ["2 Columnas", "4.0 Toneladas", "Base de piso", "Desbloqueo manual"],
        category: "elevadores"
    },
    {
        id: "tlt-240-sc",
        name: "TLT240SC",
        images: ["/images/elevadores/tlt-240-sc/tlt-240-sc_1.png"],
        features: ["2 Columnas", "4.0 Toneladas", "Clear Floor", "Desbloqueo manual"],
        category: "elevadores"
    },
    {
        id: "tlt-440-e",
        name: "TLT440E",
        images: ["/images/elevadores/tlt-440-e/tlt-440-e_1.png"],
        features: ["4 Columnas", "4.0 Toneladas", "Económico", "Para alineación"],
        category: "elevadores"
    },
    {
        id: "tlt-440-w",
        name: "TLT440W",
        images: ["/images/elevadores/tlt-440-w/tlt-440-w_1.png"],
        features: ["4 Columnas", "4.0 Toneladas", "Versión Ancha", "Para alineación"],
        category: "elevadores"
    },
    {
        id: "tlt-455-w",
        name: "TLT455W",
        images: ["/images/elevadores/tlt-455-w/tlt-455-w_1.png"],
        features: ["4 Columnas", "5.5 Toneladas", "Heavy Duty", "Para vehículos pesados"],
        category: "elevadores"
    },
    {
        id: "tlt-630-af",
        name: "TLT630AF",
        images: ["/images/elevadores/tlt-630-af/tlt-630-af_1.png"],
        features: ["Tijera", "3.0 Toneladas", "Sobre piso", "Perfil bajo"],
        category: "elevadores"
    },
    {
        id: "tlt-632-af",
        name: "TLT632AF",
        images: ["/images/elevadores/tlt-632-af/tlt-632-af_1.png"],
        features: ["Tijera", "3.2 Toneladas", "Sobre piso", "Para alineación"],
        category: "elevadores"
    },
    {
        id: "tlt-830-wa",
        name: "TLT830WA",
        images: ["/images/elevadores/tlt-830-wa/tlt-830-wa_1.png"],
        features: ["Tijera", "3.0 Toneladas", "Embutido", "Para alineación"],
        category: "elevadores"
    },

    // --- Alineadoras ---
    {
        id: "wa861",
        name: "WA861",
        images: ["/images/alineadoras/WA861/WA861.png"],
        features: ["Alineadora 3D", "Alta precisión", "Cámaras HD"],
        category: "alineadoras"
    },
    {
        id: "wa861-lite",
        name: "WA861 LITE",
        images: ["/images/alineadoras/WA861-LITE/WA861-LITE.png"],
        features: ["Alineadora 3D", "Diseño compacto", "Fácil operación"],
        category: "alineadoras"
    },
    {
        id: "wa861-pro",
        name: "WA861 PRO",
        images: ["/images/alineadoras/WA861-PRO/WA861-PRO.png"],
        features: ["Alineadora 3D Profesional", "Torre motorizada", "Máxima eficiencia"],
        category: "alineadoras"
    },

    // --- Programadores ---
    {
        id: "x-431-key-programmer",
        name: "Key Programmer",
        images: ["/images/programadores/key-programmer/key-programmer_1.png"],
        features: ["Programador de llaves", "Lectura de chips", "Clonación"],
        category: "programadores"
    },
    {
        id: "x-431-ecu-tcu",
        name: "ECU & TCU Prog",
        images: ["/images/programadores/x-431-ecu-tcu/x-431-ecu-tcu_1.png"],
        features: ["Clonación de ECUs", "Reprogramación TCU", "Modo Bench"],
        category: "programadores"
    },
    {
        id: "x-431-immo-pro",
        name: "IMMO PRO",
        images: ["/images/programadores/x-431-immo-pro/x-431-immo-pro_1.png"],
        features: ["Inmovilizador Avanzado", "Programación de llaves", "Diagnóstico"],
        category: "programadores"
    },
    {
        id: "x-prog-3",
        name: "X-PROG 3",
        images: ["/images/programadores/x-prog-3/x-prog-3_1.png"],
        features: ["Lectura EEPROM/MCU", "Programación de llaves", "Compatible X-431"],
        category: "programadores"
    },

    // --- TPMS ---
    {
        id: "crt-511-v2",
        name: "CRT 511 V2",
        images: ["/images/tpms/crt-511-v2/crt-511-v2_1.png"],
        features: ["TPMS Completo", "Activación de sensores", "Programación", "Diagnóstico OBD"],
        category: "tpms"
    },

    // --- DIY ---
    {
        id: "creader-359",
        name: "Creader 359",
        images: ["/images/diy/creader-359/creader-359_1.png"],
        features: ["Diagnóstico esencial", "Reset de servicios", "Fácil uso"],
        category: "diy"
    },
    {
        id: "creader-elite",
        name: "Creader Elite",
        images: ["/images/diy/creader-elite/creader-elite_1.png"],
        features: ["Diagnóstico completo", "Pantalla táctil", "Actualización WiFi"],
        category: "diy"
    },

    // --- Accesorios ---
    {
        id: "o2-2-scopebox",
        name: "O2-2 Scopebox",
        images: ["/images/accesorios/o2-2-scopebox/o2-2-scopebox_1.png"],
        features: ["Osciloscopio 4 canales", "Análisis de señales", "Add-on X-431"],
        category: "accesorios"
    },
    {
        id: "s2-2-sensorbox",
        name: "S2-2 Sensorbox",
        images: ["/images/accesorios/s2-2-sensorbox/s2-2-sensorbox_1.png"],
        features: ["Simulación de sensores", "Pruebas eléctricas", "Diagnóstico preciso"],
        category: "accesorios"
    },
    {
        id: "tit-202-pro",
        name: "TIT-202 PRO",
        images: ["/images/accesorios/tit-202-pro/tit-202-pro_1.png"],
        features: ["Cámara térmica", "Detección de calor", "Alta resolución"],
        category: "accesorios"
    },

    // --- Aire Acondicionado ---
    {
        id: "ac519",
        name: "AC519",
        images: ["/images/aire-acondicionado/ac519/ac519_1.png"],
        features: ["Servicio A/C", " Recuperación y Carga", "Automático"],
        category: "aire-acondicionado"
    },
    {
        id: "atf501",
        name: "ATF501",
        images: ["/images/aire-acondicionado/atf501/atf501_1.png"],
        features: ["Cambio de aceite transmisión", "Limpieza", "Automático"],
        category: "aire-acondicionado"
    },
    {
        id: "atf601",
        name: "ATF601",
        images: ["/images/aire-acondicionado/atf601/atf601_1.png"],
        features: ["Servicio transmisión pro", "Base de datos", "Pantalla táctil"],
        category: "aire-acondicionado"
    },
    {
        id: "eoc70",
        name: "EOC70",
        images: ["/images/aire-acondicionado/eoc70/eoc70_1.png"],
        features: ["Limpieza de motor", "Descarbonización", "Eficiente"],
        category: "aire-acondicionado"
    },

    // --- Carros de Herramientas ---
    {
        id: "tt116",
        name: "TT116",
        images: ["/images/carros-herramientas/tt116/tt116_1.png"],
        features: ["Carro de herramientas", "7 Cajones", "Herramientas incluidas"],
        category: "carros-herramientas"
    },
    {
        id: "tt430",
        name: "TT430",
        images: ["/images/carros-herramientas/tt430/tt430_1.png"],
        features: ["Carro de taller", "Robusto", "Alta capacidad"],
        category: "carros-herramientas"
    },

    // --- Herramientas EV ---
    {
        id: "ce39",
        name: "CE39",
        images: ["/images/herramientas-ev/ce39/ce39_1.png"],
        features: ["Cargador EV", "Portátil", "Carga rápida"],
        category: "herramientas-ev"
    },
    {
        id: "dp901",
        name: "DP901",
        images: ["/images/herramientas-ev/dp901/dp901_1.png"],
        features: ["Fuente de poder", "Programación", "Estable"],
        category: "herramientas-ev"
    },
    {
        id: "eb240",
        name: "EB240",
        images: ["/images/herramientas-ev/eb240/eb240_1.png"],
        features: ["Ecualizador de baterías", "Mantenimiento EV", "Preciso"],
        category: "herramientas-ev"
    },
    {
        id: "eb480",
        name: "EB480",
        images: ["/images/herramientas-ev/eb480/eb480_1.png"],
        features: ["Ecualizador de baterías", "Alto voltaje", "Profesional"],
        category: "herramientas-ev"
    },
    {
        id: "irt01",
        name: "IRT01",
        images: ["/images/herramientas-ev/irt01/irt01_1.png"],
        features: ["Tester de aislamiento", "Seguridad EV", "Alta tensión"],
        category: "herramientas-ev"
    },
    {
        id: "lt150",
        name: "LT150",
        images: ["/images/herramientas-ev/lt150/lt150_1.png"],
        features: ["Tester de fugas", "Baterías EV", "Seguro"],
        category: "herramientas-ev"
    },

    // --- Limpia Inyectores ---
    {
        id: "cnc-603a",
        name: "CNC-603A",
        images: ["/images/limpia-inyectores/cnc-603a/cnc-603a_1.png"],
        features: ["Limpieza de inyectores", "Ultrasonido", "Banco de prueba"],
        category: "limpia-inyectores"
    },
    {
        id: "cnc-603lite",
        name: "CNC-603 LITE",
        images: ["/images/limpia-inyectores/cnc-603lite/cnc-603lite_1.png"],
        features: ["Limpieza de inyectores", "Compacto", "Eficiente"],
        category: "limpia-inyectores"
    },
    {
        id: "cnc-605a",
        name: "CNC-605A",
        images: ["/images/limpia-inyectores/cnc-605a/cnc-605a_1.png"],
        features: ["Limpieza GDI", "Alta presión", "Profesional"],
        category: "limpia-inyectores"
    },
    {
        id: "cnc-605ap",
        name: "CNC-605AP",
        images: ["/images/limpia-inyectores/cnc-605ap/cnc-605ap_1.png"],
        features: ["Limpieza GDI", "Pneumático", "Alta tecnología"],
        category: "limpia-inyectores"
    }
];
