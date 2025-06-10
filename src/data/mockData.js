const mockData = {
  proyectos: [
    {
      id: "p1",
      nombre: "AGUA POTABLE Y SANEAMIENTO BÁSICO",
      descripcion: "Mejoramiento de infraestructura de agua potable y saneamiento rural.",
      fecha_creacion: "02 de septiembre de 2023",
      autor: "AguaMinvivienda",
      resumen: {
        fuentes: [
          {
            nombre: "MINVIVIENDA_AGUA_RURAL",
            codigo: "23585624-795-8523",
            actualizacion: "25 de septiembre de 2023, 5:24 a. m.",
            estado: "Conectado",
          },
        ],
        paneles: [{ nombre: "Cobertura Rural", total: 8 }],
        tableros: [{ nombre: "Indicadores por Departamento", total: 15 }],
      },
    },
    {
      id: "p2",
      nombre: "GESTIÓN INTEGRAL DEL RECURSO HÍDRICO",
      descripcion: "Centraliza datos de monitoreo de cuencas hidrográficas.",
      fecha_creacion: "15 de julio de 2023",
      autor: "MinAmbiente",
      resumen: {
        fuentes: [
          {
            nombre: "INVENTARIO_CUENCAS",
            codigo: "78942567-983-1233",
            actualizacion: "03 de octubre de 2023, 2:13 p. m.",
            estado: "Conectado",
          },
        ],
        paneles: [{ nombre: "Estado por Cuenca", total: 5 }],
        tableros: [{ nombre: "Mapa Interactivo", total: 9 }],
      },
    },
    {
      id: "p3",
      nombre: "CALIDAD DEL AIRE URBANO",
      descripcion: "Monitoreo y análisis de la calidad del aire en zonas urbanas.",
      fecha_creacion: "10 de agosto de 2023",
      autor: "IDEAM",
      resumen: {
        fuentes: [
          {
            nombre: "CALIDAD_AIRE_URBANO",
            codigo: "45612378-456-1123",
            actualizacion: "01 de octubre de 2023, 10:15 a. m.",
            estado: "Conectado",
          },
        ],
        paneles: [{ nombre: "Estaciones de Monitoreo", total: 12 }],
        tableros: [{ nombre: "Índice AQI Nacional", total: 10 }],
      },
    },
    {
      id: "p4",
      nombre: "VULNERABILIDAD CLIMÁTICA",
      descripcion: "Evaluación de zonas vulnerables ante eventos climáticos extremos.",
      fecha_creacion: "05 de junio de 2023",
      autor: "Unidad Gestión del Riesgo",
      resumen: {
        fuentes: [
          {
            nombre: "RIESGO_CLIMATICO",
            codigo: "56789321-999-0001",
            actualizacion: "30 de septiembre de 2023, 9:30 a. m.",
            estado: "Conectado",
          },
        ],
        paneles: [{ nombre: "Zonas de Riesgo", total: 6 }],
        tableros: [{ nombre: "Alertas Tempranas", total: 7 }],
      },
    },
    {
      id: "p5",
      nombre: "GESTIÓN DE RESIDUOS SÓLIDOS",
      descripcion: "Información centralizada sobre manejo de residuos en municipios.",
      fecha_creacion: "12 de abril de 2023",
      autor: "MinAmbiente",
      resumen: {
        fuentes: [
          {
            nombre: "RESIDUOS_SOLIDOS_MUNICIPALES",
            codigo: "90234123-111-2212",
            actualizacion: "05 de octubre de 2023, 11:00 a. m.",
            estado: "Conectado",
          },
        ],
        paneles: [{ nombre: "Cobertura de Recolección", total: 9 }],
        tableros: [{ nombre: "Indicadores por Municipio", total: 12 }],
      },
    },
    {
      id: "p6",
      nombre: "EFICIENCIA ENERGÉTICA",
      descripcion: "Promoción de buenas prácticas y proyectos de ahorro energético.",
      fecha_creacion: "22 de mayo de 2023",
      autor: "UPME",
      resumen: {
        fuentes: [
          {
            nombre: "ENERGIA_EFICIENTE",
            codigo: "13579842-321-1234",
            actualizacion: "28 de septiembre de 2023, 8:45 a. m.",
            estado: "Conectado",
          },
        ],
        paneles: [{ nombre: "Proyectos por Región", total: 4 }],
        tableros: [{ nombre: "Reducción de Consumo", total: 6 }],
      },
    },
    {
      id: "p7",
      nombre: "ACCESO A INTERNET RURAL",
      descripcion: "Datos sobre conectividad en zonas rurales del país.",
      fecha_creacion: "30 de marzo de 2023",
      autor: "MinTIC",
      resumen: {
        fuentes: [
          {
            nombre: "CONECTIVIDAD_RURAL",
            codigo: "74185296-754-9512",
            actualizacion: "04 de octubre de 2023, 4:55 p. m.",
            estado: "Conectado",
          },
        ],
        paneles: [{ nombre: "Cobertura de Internet", total: 7 }],
        tableros: [{ nombre: "Evolución de Usuarios", total: 11 }],
      },
    },
    {
      id: "p8",
      nombre: "PROTECCIÓN DE BOSQUES",
      descripcion: "Vigilancia de la deforestación y conservación forestal.",
      fecha_creacion: "18 de febrero de 2023",
      autor: "IDEAM",
      resumen: {
        fuentes: [
          {
            nombre: "DEFORESTACION_CONTROL",
            codigo: "32145678-963-1478",
            actualizacion: "29 de septiembre de 2023, 7:40 a. m.",
            estado: "Conectado",
          },
        ],
        paneles: [{ nombre: "Áreas Protegidas", total: 5 }],
        tableros: [{ nombre: "Alertas de Deforestación", total: 8 }],
      },
    },
    {
      id: "p9",
      nombre: "EDUCACIÓN AMBIENTAL",
      descripcion: "Proyectos educativos sobre sostenibilidad y medio ambiente.",
      fecha_creacion: "09 de enero de 2023",
      autor: "MinEducación",
      resumen: {
        fuentes: [
          {
            nombre: "PROGRAMAS_AMBIENTALES",
            codigo: "15948723-852-3691",
            actualizacion: "27 de septiembre de 2023, 6:12 a. m.",
            estado: "Conectado",
          },
        ],
        paneles: [{ nombre: "Instituciones Vinculadas", total: 20 }],
        tableros: [{ nombre: "Cobertura Educativa", total: 14 }],
      },
    },
    {
      id: "p10",
      nombre: "GESTIÓN DEL RIESGO DE DESASTRES",
      descripcion: "Información integrada para la respuesta ante desastres naturales.",
      fecha_creacion: "20 de octubre de 2023",
      autor: "UNGRD",
      resumen: {
        fuentes: [
          {
            nombre: "DATOS_EMERGENCIAS",
            codigo: "75315942-478-6321",
            actualizacion: "06 de octubre de 2023, 3:33 p. m.",
            estado: "Conectado",
          },
        ],
        paneles: [{ nombre: "Eventos Registrados", total: 16 }],
        tableros: [{ nombre: "Mapa de Emergencias", total: 13 }],
      },
    },
  ],
};

export default mockData;
