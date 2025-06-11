const mockData = {
  proyectos: [
    {
      id: "p1",
      nombre: "AGUA POTABLE Y SANEAMIENTO BÁSICO",
      descripcion: "No registra",
      fecha_creacion: "22 de septiembre de 2023, 5:03 a. m.",
      fecha_ultima_modificacion: "No registra",
      autor: "admin.AguaMinvivienda",
      grupo_proyecto: "AguaMinvivienda",
      fuentes_datos_disponibles: "e7fc20a4-f795-4b32-a1ee-1e7d3be06c1",
      resumen: {
        fuentes: [
          {
            nombre: "MINVIVIENDA_AGUA_SANEAMIENTO",
            descripcion: "No registra",
            fecha_creacion: "25 de septiembre de 2023, 5:54 a. m.",
            fecha_ultima_modificacion: "26 de septiembre de 2023, 6:54 a. m.",
            autor: "admin_creanagi"
          },
          {
            nombre: "DANE_POBLACION_RURAL",
            descripcion: "No registra",
            fecha_creacion: "20 de septiembre de 2023, 3:22 p. m.",
            fecha_ultima_modificacion: "25 de septiembre de 2023, 8:30 a. m.",
            autor: "dane_integration"
          },
          {
            nombre: "SSPD_CALIDAD_AGUA",
            descripcion: "No registra",
            fecha_creacion: "18 de septiembre de 2023, 10:15 a. m.",
            fecha_ultima_modificacion: "24 de septiembre de 2023, 5:45 p. m.",
            autor: "sspd_connector"
          }
        ],
        paneles: [
          {
            nombre: "ESTADO AL CORTE DE LOS PROYECTOS EN SEGUIMIENTO",
            descripcion: "No registra",
            fecha_creacion: "25 de septiembre de 2023, 5:54 a. m.",
            fecha_ultima_modificacion: "26 de septiembre de 2023, 6:54 a. m.",
            autor: "admin_creanagi"
          },
          {
            nombre: "COBERTURA DEPARTAMENTAL AGUA",
            descripcion: "No registra",
            fecha_creacion: "20 de septiembre de 2023, 2:15 p. m.",
            fecha_ultima_modificacion: "23 de septiembre de 2023, 4:30 p. m.",
            autor: "analyst_agua"
          }
        ],
        tableros: [
          {
            nombre: "INDICADORES EN MATERIA DE AGUA POTABLE Y SANEAMIENTO BÁSICO V1",
            descripcion: "No registra",
            fecha_creacion: "26 de septiembre de 2023, 3:57 a. m.",
            fecha_ultima_modificacion: "26 de septiembre de 2023, 3:57 a. m.",
            autor: "admin_creanagi"
          },
          {
            nombre: "SEGUIMIENTO FINANCIERO PROYECTOS",
            descripcion: "No registra",
            fecha_creacion: "22 de septiembre de 2023, 1:30 p. m.",
            fecha_ultima_modificacion: "25 de septiembre de 2023, 11:20 a. m.",
            autor: "financial_controller"
          },
          {
            nombre: "IMPACTO SOCIAL COMUNIDADES",
            descripcion: "No registra",
            fecha_creacion: "19 de septiembre de 2023, 2:45 p. m.",
            fecha_ultima_modificacion: "24 de septiembre de 2023, 9:15 a. m.",
            autor: "impact_analyst"
          }
        ]
      }
    },
    {
      id: "p2",
      nombre: "VIVIENDA RURAL SOSTENIBLE",
      descripcion: "No registra",
      fecha_creacion: "15 de agosto de 2023, 9:30 a. m.",
      fecha_ultima_modificacion: "No registra",
      autor: "coord.ViviendaRural",
      grupo_proyecto: "ViviendaRural",
      fuentes_datos_disponibles: "a3bc15d7-e892-4f21-b7ee-2f8a9ce04b9",
      resumen: {
        fuentes: [
          {
            nombre: "MINVIVIENDA_CONSTRUCCION_RURAL",
            descripcion: "No registra",
            fecha_creacion: "16 de agosto de 2023, 8:45 a. m.",
            fecha_ultima_modificacion: "28 de agosto de 2023, 10:30 a. m.",
            autor: "rural_coordinator"
          },
          {
            nombre: "IGAC_CATASTRO_RURAL",
            descripcion: "No registra",
            fecha_creacion: "12 de agosto de 2023, 2:15 p. m.",
            fecha_ultima_modificacion: "25 de agosto de 2023, 4:20 p. m.",
            autor: "igac_integration"
          }
        ],
        paneles: [
          {
            nombre: "AVANCE CONSTRUCCION VIVIENDAS",
            descripcion: "No registra",
            fecha_creacion: "17 de agosto de 2023, 11:20 a. m.",
            fecha_ultima_modificacion: "29 de agosto de 2023, 3:45 p. m.",
            autor: "construction_manager"
          },
          {
            nombre: "BENEFICIARIOS POR MUNICIPIO",
            descripcion: "No registra",
            fecha_creacion: "14 de agosto de 2023, 9:10 a. m.",
            fecha_ultima_modificacion: "26 de agosto de 2023, 1:25 p. m.",
            autor: "social_analyst"
          },
          {
            nombre: "CALIDAD MATERIALES CONSTRUCCION",
            descripcion: "No registra",
            fecha_creacion: "18 de agosto de 2023, 4:35 p. m.",
            fecha_ultima_modificacion: "27 de agosto de 2023, 8:50 a. m.",
            autor: "quality_inspector"
          }
        ],
        tableros: [
          {
            nombre: "INDICADORES VIVIENDA RURAL V2",
            descripcion: "No registra",
            fecha_creacion: "20 de agosto de 2023, 10:15 a. m.",
            fecha_ultima_modificacion: "30 de agosto de 2023, 2:40 p. m.",
            autor: "rural_coordinator"
          }
        ]
      }
    },
    {
      id: "p3",
      nombre: "MEJORAMIENTO URBANO INTEGRAL",
      descripcion: "No registra",
      fecha_creacion: "03 de octubre de 2023, 7:20 a. m.",
      fecha_ultima_modificacion: "No registra",
      autor: "urban.development",
      grupo_proyecto: "Desarrollourbano",
      fuentes_datos_disponibles: "f7d92e48-c156-4a83-9d4e-5b2f8e9c7a1d",
      resumen: {
        fuentes: [
          {
            nombre: "FINDETER_PROYECTOS_URBANOS",
            descripcion: "No registra",
            fecha_creacion: "04 de octubre de 2023, 8:30 a. m.",
            fecha_ultima_modificacion: "15 de octubre de 2023, 11:45 a. m.",
            autor: "findeter_api"
          },
          {
            nombre: "ALCALDIAS_MUNICIPALES",
            descripcion: "No registra",
            fecha_creacion: "02 de octubre de 2023, 3:15 p. m.",
            fecha_ultima_modificacion: "12 de octubre de 2023, 9:20 a. m.",
            autor: "municipal_integration"
          },
          {
            nombre: "CONTRALORIA_SEGUIMIENTO",
            descripcion: "No registra",
            fecha_creacion: "05 de octubre de 2023, 1:40 p. m.",
            fecha_ultima_modificacion: "14 de octubre de 2023, 4:55 p. m.",
            autor: "oversight_system"
          },
          {
            nombre: "INVIAS_INFRAESTRUCTURA",
            descripcion: "No registra",
            fecha_creacion: "01 de octubre de 2023, 10:25 a. m.",
            fecha_ultima_modificación: "13 de octubre de 2023, 6:30 p. m.",
            autor: "invias_connector"
          }
        ],
        paneles: [
          {
            nombre: "PROYECTOS URBANOS EN EJECUCION",
            descripcion: "No registra",
            fecha_creacion: "06 de octubre de 2023, 9:50 a. m.",
            fecha_ultima_modificacion: "16 de octubre de 2023, 2:15 p. m.",
            autor: "urban_manager"
          }
        ],
        tableros: [
          {
            nombre: "DASHBOARD MEJORAMIENTO URBANO",
            descripcion: "No registra",
            fecha_creacion: "08 de octubre de 2023, 11:30 a. m.",
            fecha_ultima_modificacion: "17 de octubre de 2023, 5:45 p. m.",
            autor: "urban.development"
          },
          {
            nombre: "INDICADORES CALIDAD VIDA URBANA",
            descripcion: "No registra",
            fecha_creacion: "07 de octubre de 2023, 2:20 p. m.",
            fecha_ultima_modificacion: "16 de octubre de 2023, 8:10 a. m.",
            autor: "quality_life_analyst"
          }
        ]
      }
    },
    {
      id: "p4",
      nombre: "TITULACION DE PREDIOS RURALES",
      descripcion: "No registra",
      fecha_creacion: "11 de julio de 2023, 4:15 p. m.",
      fecha_ultima_modificacion: "No registra",
      autor: "legal.agrarian",
      grupo_proyecto: "TierrasRurales",
      fuentes_datos_disponibles: "b8e43f29-d267-4c94-a1f5-6c3d7e8f9b2a",
      resumen: {
        fuentes: [
          {
            nombre: "ANT_TITULOS_RURALES",
            descripcion: "No registra",
            fecha_creacion: "12 de julio de 2023, 10:30 a. m.",
            fecha_ultima_modificacion: "25 de julio de 2023, 3:20 p. m.",
            autor: "ant_integration"
          }
        ],
        paneles: [
          {
            nombre: "TITULOS EXPEDIDOS POR REGION",
            descripcion: "No registra",
            fecha_creacion: "14 de julio de 2023, 8:45 a. m.",
            fecha_ultima_modificacion: "26 de julio de 2023, 1:50 p. m.",
            autor: "legal_analyst"
          },
          {
            nombre: "PROCESO FORMALIZACION PREDIAL",
            descripcion: "No registra",
            fecha_creacion: "13 de julio de 2023, 2:10 p. m.",
            fecha_ultima_modificacion: "24 de julio de 2023, 11:35 a. m.",
            autor: "formalization_team"
          },
          {
            nombre: "BENEFICIARIOS CAMPESINOS",
            descripcion: "No registra",
            fecha_creacion: "15 de julio de 2023, 9:25 a. m.",
            fecha_ultima_modificacion: "27 de julio de 2023, 4:40 p. m.",
            autor: "rural_social_worker"
          },
          {
            nombre: "CONFLICTOS TERRITORIALES",
            descripcion: "No registra",
            fecha_creacion: "16 de julio de 2023, 3:55 p. m.",
            fecha_ultima_modificacion: "28 de julio de 2023, 10:15 a. m.",
            autor: "conflict_resolver"
          }
        ],
        tableros: [
          {
            nombre: "SEGUIMIENTO TITULACION PREDIAL",
            descripcion: "No registra",
            fecha_creacion: "18 de julio de 2023, 11:40 a. m.",
            fecha_ultima_modificacion: "29 de julio de 2023, 6:25 p. m.",
            autor: "legal.agrarian"
          },
          {
            nombre: "IMPACTO FORMALIZACION TIERRAS",
            descripcion: "No registra",
            fecha_creacion: "17 de julio de 2023, 1:30 p. m.",
            fecha_ultima_modificacion: "28 de julio de 2023, 9:45 a. m.",
            autor: "impact_evaluator"
          },
          {
            nombre: "PRODUCTIVIDAD AGRICOLA POST-TITULO",
            descripcion: "No registra",
            fecha_creacion: "19 de julio de 2023, 4:20 p. m.",
            fecha_ultima_modificacion: "30 de julio de 2023, 2:55 p. m.",
            autor: "agricultural_economist"
          }
        ]
      }
    },
    {
      id: "p5",
      nombre: "SUBSIDIOS VIVIENDA VIS",
      descripcion: "No registra",
      fecha_creacion: "28 de junio de 2023, 2:45 p. m.",
      fecha_ultima_modificacion: "No registra",
      autor: "subsidies.manager",
      grupo_proyecto: "ViviendaSocial",
      fuentes_datos_disponibles: "c9f54g38-e378-5d05-b2g6-7d4e8f9g0c3b",
      resumen: {
        fuentes: [
          {
            nombre: "FONVIVIENDA_SUBSIDIOS",
            descripcion: "No registra",
            fecha_creacion: "29 de junio de 2023, 9:20 a. m.",
            fecha_ultima_modificacion: "10 de julio de 2023, 4:35 p. m.",
            autor: "fonvivienda_api"
          },
          {
            nombre: "CAJAS_COMPENSACION",
            descripcion: "No registra",
            fecha_creacion: "27 de junio de 2023, 11:50 a. m.",
            fecha_ultima_modificacion: "08 de julio de 2023, 2:15 p. m.",
            autor: "compensation_funds"
          },
          {
            nombre: "BANCOS_CREDITO_HIPOTECARIO",
            descripcion: "No registra",
            fecha_creacion: "30 de junio de 2023, 3:40 p. m.",
            fecha_ultima_modificacion: "11 de julio de 2023, 8:25 a. m.",
            autor: "banking_integration"
          }
        ],
        paneles: [
          {
            nombre: "SUBSIDIOS ASIGNADOS MENSUAL",
            descripcion: "No registra",
            fecha_creacion: "01 de julio de 2023, 10:15 a. m.",
            fecha_ultima_modificacion: "12 de julio de 2023, 5:30 p. m.",
            autor: "monthly_reporter"
          },
          {
            nombre: "CONSTRUCTORES VIS ACTIVOS",
            descripcion: "No registra",
            fecha_creacion: "02 de julio de 2023, 1:25 p. m.",
            fecha_ultima_modificacion: "13 de julio de 2023, 9:40 a. m.",
            autor: "constructor_monitor"
          }
        ],
        tableros: [
          {
            nombre: "GESTION SUBSIDIOS VIS 2023",
            descripcion: "No registra",
            fecha_creacion: "04 de julio de 2023, 8:50 a. m.",
            fecha_ultima_modificacion: "14 de julio de 2023, 3:45 p. m.",
            autor: "subsidies.manager"
          },
          {
            nombre: "DEFICIT HABITACIONAL URBANO",
            descripcion: "No registra",
            fecha_creacion: "03 de julio de 2023, 2:35 p. m.",
            fecha_ultima_modificacion: "13 de julio de 2023, 11:20 a. m.",
            autor: "housing_deficit_analyst"
          }
        ]
      }
    },
    {
      id: "p6",
      nombre: "CIUDADES SOSTENIBLES",
      descripcion: "No registra",
      fecha_creacion: "14 de mayo de 2023, 11:30 a. m.",
      fecha_ultima_modificacion: "No registra",
      autor: "sustainability.coord",
      grupo_proyecto: "CiudadesSostenibles",
      fuentes_datos_disponibles: "d0g65h49-f489-6e16-c3h7-8e5f9g0h1d4c",
      resumen: {
        fuentes: [
          {
            nombre: "IDEAM_CALIDAD_AIRE",
            descripcion: "No registra",
            fecha_creacion: "15 de mayo de 2023, 7:45 a. m.",
            fecha_ultima_modificacion: "28 de mayo de 2023, 1:20 p. m.",
            autor: "ideam_sensors"
          },
          {
            nombre: "UPME_ENERGIA_RENOVABLE",
            descripcion: "No registra",
            fecha_creacion: "13 de mayo de 2023, 4:10 p. m.",
            fecha_ultima_modificacion: "26 de mayo de 2023, 10:35 a. m.",
            autor: "upme_renewable"
          }
        ],
        paneles: [
          {
            nombre: "INDICADORES SOSTENIBILIDAD URBANA",
            descripcion: "No registra",
            fecha_creacion: "16 de mayo de 2023, 9:55 a. m.",
            fecha_ultima_modificacion: "29 de mayo de 2023, 3:15 p. m.",
            autor: "sustainability_analyst"
          },
          {
            nombre: "CONSUMO ENERGETICO EDIFICACIONES",
            descripcion: "No registra",
            fecha_creacion: "17 de mayo de 2023, 2:20 p. m.",
            fecha_ultima_modificacion: "30 de mayo de 2023, 8:40 a. m.",
            autor: "energy_monitor"
          },
          {
            nombre: "GESTION RESIDUOS SOLIDOS",
            descripcion: "No registra",
            fecha_creacion: "18 de mayo de 2023, 1:45 p. m.",
            fecha_ultima_modificacion: "31 de mayo de 2023, 11:50 a. m.",
            autor: "waste_coordinator"
          }
        ],
        tableros: [
          {
            nombre: "CIUDADES VERDES COLOMBIA",
            descripcion: "No registra",
            fecha_creacion: "20 de mayo de 2023, 10:30 a. m.",
            fecha_ultima_modificacion: "01 de junio de 2023, 4:25 p. m.",
            autor: "sustainability.coord"
          }
        ]
      }
    },
    {
      id: "p7",
      nombre: "GESTION DEL RIESGO HABITACIONAL",
      descripcion: "No registra",
      fecha_creacion: "07 de abril de 2023, 3:20 p. m.",
      fecha_ultima_modificacion: "No registra",
      autor: "risk.management",
      grupo_proyecto: "GestionRiesgo",
      fuentes_datos_disponibles: "e1h76i50-g590-7f27-d4i8-9f6g0h1i2e5d",
      resumen: {
        fuentes: [
          {
            nombre: "UNGRD_EMERGENCIAS",
            descripcion: "No registra",
            fecha_creacion: "08 de abril de 2023, 8:15 a. m.",
            fecha_ultima_modificacion: "20 de abril de 2023, 2:30 p. m.",
            autor: "ungrd_alerts"
          },
          {
            nombre: "INGEOMINAS_GEOLOGICO",
            descripcion: "No registra",
            fecha_creacion: "06 de abril de 2023, 1:40 p. m.",
            fecha_ultima_modificacion: "18 de abril de 2023, 9:55 a. m.",
            autor: "geological_survey"
          },
          {
            nombre: "IDEAM_HIDROMETEOROLOGIA",
            descripcion: "No registra",
            fecha_creacion: "09 de abril de 2023, 11:25 a. m.",
            fecha_ultima_modificacion: "21 de abril de 2023, 4:10 p. m.",
            autor: "hydro_weather"
          }
        ],
        paneles: [
          {
            nombre: "ALERTAS TEMPRANAS VIVIENDA",
            descripcion: "No registra",
            fecha_creacion: "10 de abril de 2023, 9:30 a. m.",
            fecha_ultima_modificacion: "22 de abril de 2023, 1:45 p. m.",
            autor: "early_warning_system"
          }
        ],
        tableros: [
          {
            nombre: "MAPA RIESGO HABITACIONAL",
            descripcion: "No registra",
            fecha_creacion: "12 de abril de 2023, 2:50 p. m.",
            fecha_ultima_modificacion: "24 de abril de 2023, 10:15 a. m.",
            autor: "risk.management"
          },
          {
            nombre: "VULNERABILIDAD SISMICA EDIFICACIONES",
            descripcion: "No registra",
            fecha_creacion: "11 de abril de 2023, 4:35 p. m.",
            fecha_ultima_modificacion: "23 de abril de 2023, 8:20 a. m.",
            autor: "seismic_engineer"
          },
          {
            nombre: "REASENTAMIENTOS POR RIESGO",
            descripcion: "No registra",
            fecha_creacion: "13 de abril de 2023, 10:05 a. m.",
            fecha_ultima_modificacion: "25 de abril de 2023, 3:40 p. m.",
            autor: "resettlement_coordinator"
          },
          {
            nombre: "FONDOS EMERGENCIA HABITACIONAL",
            descripcion: "No registra",
            fecha_creación: "14 de abril de 2023, 1:15 p. m.",
            fecha_ultima_modificacion: "26 de abril de 2023, 11:30 a. m.",
            autor: "emergency_funds"
          }
        ]
      }
    },
    {
      id: "p8",
      nombre: "CONSTRUCCION EQUIPAMIENTOS PUBLICOS",
      descripcion: "No registra",
      fecha_creacion: "23 de marzo de 2023, 8:40 a. m.",
      fecha_ultima_modificacion: "No registra",
      autor: "public.infrastructure",
      grupo_proyecto: "EquipamientosPublicos",
      fuentes_datos_disponibles: "f2i87j61-h601-8g38-e5j9-0g7h1i2j3f6e",
      resumen: {
        fuentes: [
          {
            nombre: "MEN_INFRAESTRUCTURA_EDUCATIVA",
            descripcion: "No registra",
            fecha_creacion: "24 de marzo de 2023, 10:20 a. m.",
            fecha_ultima_modificacion: "05 de abril de 2023, 3:45 p. m.",
            autor: "education_infrastructure"
          },
          {
            nombre: "MINSALUD_CENTROS_SALUD",
            descripcion: "No registra",
            fecha_creacion: "22 de marzo de 2023, 2:15 p. m.",
            fecha_ultima_modificacion: "03 de abril de 2023, 9:30 a. m.",
            autor: "health_facilities"
          }
        ],
        paneles: [
          {
            nombre: "COLEGIOS EN CONSTRUCCION",
            descripcion: "No registra",
            fecha_creacion: "25 de marzo de 2023, 11:50 a. m.",
            fecha_ultima_modificacion: "06 de abril de 2023, 4:20 p. m.",
            autor: "school_construction"
          },
          {
            nombre: "CENTROS SALUD RURALES",
            descripcion: "No registra",
            fecha_creacion: "26 de marzo de 2023, 9:10 a. m.",
            fecha_ultima_modificacion: "07 de abril de 2023, 1:35 p. m.",
            autor: "rural_health_centers"
          },
          {
            nombre: "BIBLIOTECAS PUBLICAS NUEVAS",
            descripcion: "No registra",
            fecha_creacion: "27 de marzo de 2023, 3:25 p. m.",
            fecha_ultima_modificacion: "08 de abril de 2023, 10:50 a. m.",
            autor: "public_libraries"
          },
          {
            nombre: "POLIDEPORTIVOS COMUNITARIOS",
            descripcion: "No registra",
            fecha_creacion: "28 de marzo de 2023, 1:40 p. m.",
            fecha_ultima_modificacion: "09 de abril de 2023, 8:15 a. m.",
            autor: "community_sports"
          },
          {
            nombre: "CASAS CULTURA MUNICIPALES",
            descripcion: "No registra",
            fecha_creacion: "29 de marzo de 2023, 4:55 p. m.",
            fecha_ultima_modificacion: "10 de abril de 2023, 2:40 p. m.",
            autor: "cultural_houses"
          }
        ],
        tableros: [
          {
            nombre: "INFRAESTRUCTURA SOCIAL PUBLICA",
            descripcion: "No registra",
            fecha_creacion: "31 de marzo de 2023, 10:30 a. m.",
            fecha_ultima_modificacion: "11 de abril de 2023, 5:15 p. m.",
            autor: "public.infrastructure"
          },
          {
            nombre: "COBERTURA SERVICIOS PUBLICOS",
            descripcion: "No registra",
            fecha_creacion: "30 de marzo de 2023, 2:45 p. m.",
            fecha_ultima_modificacion: "10 de abril de 2023, 11:20 a. m.",
            autor: "public_services_analyst"
          }
        ]
      }
    },
    {
      id: "p9",
      nombre: "NORMATIVIDAD Y REGULACION URBANA",
      descripcion: "No registra",
      fecha_creacion: "16 de febrero de 2023, 1:10 p. m.",
      fecha_ultima_modificacion: "No registra",
      autor: "regulatory.affairs",
      grupo_proyecto: "RegulacionUrbana",
      fuentes_datos_disponibles: "g3j98k72-i712-9h49-f6k0-1h8i2j3k4g7f",
      resumen: {
        fuentes: [
          {
            nombre: "POT_MUNICIPALES",
            descripcion: "No registra",
            fecha_creacion: "17 de febrero de 2023, 9:35 a. m.",
            fecha_ultima_modificacion: "02 de marzo de 2023, 2:50 p. m.",
            autor: "municipal_planning"
          }
        ],
        paneles: [
          {
            nombre: "ACTUALIZACION PLANES ORDENAMIENTO",
            descripcion: "No registra",
            fecha_creacion: "18 de febrero de 2023, 11:20 a. m.",
            fecha_ultima_modificacion: "03 de marzo de 2023, 4:15 p. m.",
            autor: "planning_coordinator"
          },
          {
            nombre: "LICENCIAS CONSTRUCCION EXPEDIDAS",
            descripcion: "No registra",
            fecha_creacion: "19 de febrero de 2023, 3:45 p. m.",
            fecha_ultima_modificacion: "04 de marzo de 2023, 10:30 a. m.",
            autor: "licensing_office"
          },
          {
            nombre: "CONTROL URBANO MUNICIPAL",
            descripcion: "No registra",
            fecha_creacion: "20 de febrero de 2023, 8:25 a. m.",
            fecha_ultima_modificacion: "05 de marzo de 2023, 1:40 p. m.",
            autor: "urban_control"
          }
        ],
        tableros: [
          {
            nombre: "CUMPLIMIENTO NORMATIVO POT",
            descripcion: "No registra",
            fecha_creacion: "22 de febrero de 2023, 10:15 a. m.",
            fecha_ultima_modificacion: "06 de marzo de 2023, 3:25 p. m.",
            autor: "regulatory.affairs"
          }
        ]
      }
    }
  ]
};


  export default mockData;

