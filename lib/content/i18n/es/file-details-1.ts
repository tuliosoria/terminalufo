import type { FileDetail } from "../../types";

export const fileDetails: Record<string, FileDetail> = {
  "varginha-001": {
    excerpt:
      "Cuarenta y siete minutos de audio. Dos médicos identificados en la grabación. La tercera voz —la que imparte instrucciones— nunca es identificada.",
    artifacts: [
      { label: "Duración", value: "00:47:13" },
      { label: "Formato", value: "MP3, 128 kbps, estéreo" },
      { label: "Procedencia", value: "Carga anónima, archivo del sótano de hospital regional" },
      { label: "Cadena de custodia", value: "Interrumpida — la primera aparición es la propia carga" }
    ],
    sections: [
      {
        heading: "Procedencia",
        body: [
          "El archivo emergió en un tablero regional de intercambio de archivos en 2018, publicado por una cuenta creada y abandonada el mismo día. Los metadatos integrados en la carga original sitúan el dispositivo de grabación dentro de una habitación cerrada, de paredes sólidas, de aproximadamente doce metros cuadrados. La reverberación de fondo es compatible con azulejos y acero inoxidable.",
          "Un ingeniero de audio contratado por un investigador independiente concluyó que la grabación se realizó con un solo dictáfono de bajo costo, casi con certeza oculto. No hay cortes en los primeros treinta y seis minutos. Los últimos once minutos contienen tres pausas separadas que han sido recortadas digitalmente en lugar de regrabadas."
        ]
      },
      {
        heading: "Voces en la grabación",
        body: [
          "Dos voces masculinas adultas se identifican mutuamente por apellido durante los primeros seis minutos. Ambos nombres corresponden a médicos de los que se sabe que estaban en plantilla en un hospital regional en enero de 1996. Ninguno ha hablado públicamente sobre la noche en cuestión. Uno falleció en 2004; el otro ha rechazado todos los intentos de contacto.",
          "Una tercera voz se escucha intermitentemente a partir del minuto nueve. Esta voz nunca se identifica, imparte únicamente instrucciones breves, y habla con un registro y cadencia que el ingeniero describió como «calmada hasta el punto de resultar inapropiada para el procedimiento narrado». Esta voz es la única que se dirige directamente al sujeto."
        ]
      },
      {
        heading: "Vocalizaciones del sujeto",
        body: [
          "A partir del minuto 36:14, la grabación capta sonidos atribuidos al sujeto del procedimiento. No son humanos, no son felinos y no coinciden con ninguna especie de fauna silvestre que el ingeniero haya podido obtener para comparación. Los sonidos son tonales, de banda estrecha, y aparecen en grupos pautados de tres.",
          "En el minuto 41:02, se escucha a uno de los médicos decir, en portugués, «sabe que estamos aquí». La tercera voz responde de inmediato y la grabación se corta un cuarto de segundo después. El audio restante es de carácter procedimental hasta el final."
        ]
      }
    ],
    handlerNote:
      "No publicamos el archivo de audio de este archivo. La transcripción anterior está compuesta a partir de notas tomadas por personas que afirman haber escuchado el original.",
    related: ["varginha-002", "varginha-006", "varginha-019"]
  },

  "varginha-002": {
    excerpt:
      "Tenía treinta y un años. Se lavó las manos siete veces. No ha vuelto a hablar con su hermana desde que terminó el turno de mañana.",
    artifacts: [
      { label: "Edad de la testigo (1996)", value: "31" },
      { label: "Función", value: "Enfermera de sala de trauma, hospital regional" },
      { label: "Duración de la entrevista", value: "1 hora 12 minutos" },
      { label: "Estado de identidad", value: "Sellada a petición de la testigo" }
    ],
    sections: [
      {
        heading: "Condiciones de revelación",
        body: [
          "La testigo accedió a una única entrevista grabada en 1996, con la condición explícita de que su nombre y lugar de trabajo nunca se asociaran a la transcripción. Ambas condiciones se han respetado. No ha concedido ninguna entrevista posterior a ninguna parte en los veintiocho años transcurridos desde entonces.",
          "Accedió a la grabación original únicamente después de que el entrevistador llegara solo y no presentara más equipo de grabación que un solo casete de audio. El casete está en manos de un tercero en sobre sellado."
        ]
      },
      {
        heading: "Lo que recuerda",
        body: [
          "Describe haber sido solicitada, sin explicación, para asistir en el traslado de «un paciente bajo sujeción» desde una entrada de servicio a una sala interior a la que nunca había tenido autorización de acceso. Le dijeron que el paciente estaba contaminado y le entregaron guantes pero ningún otro equipo de protección.",
          "Se produjo un breve contacto cuando el miembro derecho del paciente cayó de la camilla mientras ella ayudaba a reposicionarlo. Describe tres dedos alargados sin pulgar oponible, una muñeca que articulaba en dos planos que le resultó difícil describir, y una temperatura cutánea notablemente inferior a la suya.",
          "El olor, dice, es lo que no puede olvidar. Lo compara con el ozono tras una tormenta eléctrica, mezclado con el olor a cobre húmedo de una hemorragia arterial. Se lavó las manos repetidamente durante el resto de su turno y de nuevo en casa."
        ]
      },
      {
        heading: "Después de aquella noche",
        body: [
          "Dejó el hospital en el plazo de cuatro meses. No ha vuelto a trabajar en entorno clínico. La transcripción de admisión señala que durante la entrevista se detuvo dos veces por períodos superiores a noventa segundos y que el entrevistador no la interrumpió durante esas pausas."
        ]
      }
    ],
    related: ["varginha-001", "varginha-017", "varginha-019"]
  },

  "varginha-003": {
    excerpt:
      "Cuarenta y siete entradas en siete años. La ciudad no tiene puerto. La ciudad no tiene base. La ciudad sí tiene un pequeño hospital con sótano.",
    artifacts: [
      { label: "Período cubierto", value: "Ene 1996 – Dic 2003" },
      { label: "Visitas distintas registradas", value: "47" },
      { label: "Programas de cobertura citados", value: "3 (agrícola, meteorológico, cultural)" },
      { label: "Registros de anfitrión correspondientes", value: "0" }
    ],
    sections: [
      {
        heading: "Patrón de desplazamiento",
        body: [
          "El registro compilado se basa en comprobantes de viaje, solicitudes de reembolso de viáticos y facturas de alquiler de automóviles que fueron publicados como parte de una respuesta de auditoría no relacionada. Se realizaron cuarenta y siete viajes distintos por personal uniformado de la misma dependencia naval extranjera a la región de Minas Gerais a lo largo del período de siete años cubierto por la auditoría.",
          "Los cuarenta y siete viajes parten y regresan por el mismo aeródromo regional, que no tiene tráfico militar habitual. Treinta y uno de los viajes están programados para comenzar o finalizar en una fecha dentro de los siete días posteriores al 20 de enero."
        ]
      },
      {
        heading: "Historias de cobertura",
        body: [
          "Se citan tres programas de cobertura en los cuarenta y siete viajes: un intercambio agrícola, una iniciativa de cooperación meteorológica y un programa de enlace cultural. Ninguno de los tres programas tiene registro correspondiente en la institución anfitriona brasileña nombrada. Dos de los tres no tienen registro de existencia en ninguna base de datos de organismos extranjeros.",
          "El tercer programa —el meteorológico— es real, pero su calendario de viajes publicado para el mismo período no incluye ninguno de los viajes listados en la respuesta de auditoría."
        ]
      },
      {
        heading: "Preguntas abiertas",
        body: [
          "La auditoría cubre únicamente los siete años de 1996 a 2003 porque el auditor solicitante no amplió el período. Ignoramos si las visitas se interrumpieron en 2003 o si cambió la forma de llevar los registros. El personal nombrado en los comprobantes se ha jubilado o fue transferido fuera de la dependencia; solo uno es localizable. No responde la correspondencia."
        ]
      }
    ],
    related: ["varginha-018", "varginha-028", "varginha-014"]
  },

  "varginha-004": {
    excerpt:
      "Examinó al sujeto durante diecinueve minutos en 1996. Dice que el sujeto le habló todas las noches durante once años después.",
    artifacts: [
      { label: "Testigo", value: "Cirujano regional (fallecido en 2009)" },
      { label: "Fecha de grabación", value: "2007-06-19" },
      { label: "Duración", value: "1 hora 47 minutos" },
      { label: "En poder de", value: "Notaría, sur de Minas Gerais" }
    ],
    sections: [
      {
        heading: "El depósito",
        body: [
          "El testigo grabó el testimonio solo, en una sola sesión, en su estudio doméstico en junio de 2007. Entregó el casete personalmente a un notario la semana siguiente junto con instrucciones escritas de que no debía publicarse hasta dos años después de su muerte. Falleció en 2009. Las instrucciones fueron respetadas.",
          "La declaración de entrega del notario señala que el testigo se mostró lúcido, dio confirmación oral clara del contenido el día del depósito y rechazó una oferta de revisar o acortar la grabación antes de sellarla."
        ]
      },
      {
        heading: "Contenido de la grabación",
        body: [
          "El testigo describe un breve examen realizado en 1996, ordenado por un oficial superior al que no reconoció, de un sujeto al que solo se le permitió ver de la cintura para arriba. Consigna pulso, frecuencia respiratoria y temperatura superficial, todos los cuales le resultó imposible conciliar con cualquier fisiología humana o de mamífero conocido.",
          "A continuación describe los sueños. Comenzaron la misma semana y continuaron todas las noches sin excepción hasta el año 2007. Dice que los sueños tempranos eran solo impresiones: presión, atención, la sensación de ser leído. Dice que los sueños posteriores eran estructurados: preguntas, respuestas, instrucciones que se le pedía repetidamente que recordara.",
          "Recita aproximadamente cuarenta minutos de material que dice le fue transmitido en sueños. Señala con cuidado, en dos ocasiones, que no comprende la mayor parte de lo que recita, solo que se le indicó que lo repitiera con exactitud."
        ]
      },
      {
        heading: "Lo que la grabación no contiene",
        body: [
          "El testigo no nombra al paciente, la instalación, el oficial superior ni ninguna otra persona presente en el examen. No ofrece una ubicación más específica que «las tierras altas del sur». No especula sobre el origen del sujeto ni el significado del material onírico. Concluye la grabación con la frase: «He hecho lo que se me pidió»."
        ]
      }
    ],
    related: ["varginha-001", "varginha-006", "varginha-029"]
  },

  "varginha-005": {
    excerpt:
      "Once meses de diferencia. Las mismas coordenadas. La misma estación. El mismo ángulo solar. Los edificios han desaparecido y los árboles no corresponden.",
    artifacts: [
      { label: "Pasada anterior", value: "Abril 2013" },
      { label: "Pasada posterior", value: "Marzo 2014" },
      { label: "Resolución del mosaico (posterior)", value: "Inconsistente con los mosaicos circundantes" },
      { label: "Proveedor", value: "Agregador comercial de imágenes (rechazó declarar)" }
    ],
    sections: [
      {
        heading: "Lo que muestra la imagen anterior",
        body: [
          "Un terreno vallado de aproximadamente dos mil metros cuadrados. Tres vehículos aparcados a lo largo del borde occidental. Una estructura cubierta ocupa el tercio oriental de la parcela. El vallado es coherente con un perímetro de instalación reciente; la vegetación en la base del vallado aún no se ha recuperado del despeje."
        ]
      },
      {
        heading: "Lo que muestra la imagen posterior",
        body: [
          "La misma parcela representada como un mosaico de dosel de baja resolución, inconsistente con las imágenes circundantes, que son de alta resolución y adecuadas a la estación. El vallado ha desaparecido. Los vehículos han desaparecido. La estructura cubierta ha desaparecido. El mosaico ha sido remuestreado de una manera que un analista de imágenes contratado para la comparación describió como «sustitución cosmética, no redacción».",
          "La sustitución está delimitada casi exactamente por la línea de vallado de la imagen anterior. No se extiende a parcelas vecinas."
        ]
      },
      {
        heading: "Lo que dice el proveedor",
        body: [
          "El agregador comercial de imágenes rechazó hacer comentarios sobre la comparación y eliminó ambas imágenes del acceso público en un plazo de setenta y dos horas tras la publicación de la comparación. La imagen anterior permanece en archivos privados. La imagen posterior no se ha reproducido en ningún lugar que hayamos podido localizar."
        ]
      }
    ],
    related: ["varginha-008", "varginha-014", "varginha-023"]
  },

  "varginha-006": {
    excerpt:
      "Esperó a que la morfina hiciera efecto. Primero pidió al sacerdote. Luego pidió la grabadora.",
    artifacts: [
      { label: "Testigo", value: "Sargento retirado, Ejército Brasileño" },
      { label: "Fecha de grabación", value: "2019-11-04" },
      { label: "Duración", value: "2 horas 03 minutos" },
      { label: "Publicado por", value: "Familiar adulto, 2023" }
    ],
    sections: [
      {
        heading: "Contexto",
        body: [
          "La grabación se realizó en una habitación de hospicio en el sureste de Brasil. El testigo se encontraba a tres días de su muerte y era consciente de ello. En la habitación estaban el testigo, un sacerdote que había solicitado específicamente, y un familiar adulto que manejaba una pequeña grabadora de consumo. No había ningún otro personal presente."
        ]
      },
      {
        heading: "Lo que dice haber hecho",
        body: [
          "Describe haber participado, como parte de un equipo de traslado de siete soldados rasos y dos oficiales, en el movimiento de tres sujetos desde un punto de retención a un tráiler refrigerado en espera, en las primeras horas del 22 de enero de 1996. Precisa que dos de los sujetos estaban vivos en el momento del traslado y uno no.",
          "Describe a los sujetos vivos como sujetados, sedados y respirando. Describe al sujeto fallecido como ya en un contenedor sellado que había sido entregado por separado. Dice que recibió instrucciones de no mirar a ninguno de los tres por más tiempo del necesario para completar su parte del traslado y que obedeció esa instrucción salvo en un momento, que describe."
        ]
      },
      {
        heading: "Lo que solicita",
        body: [
          "En dos ocasiones durante la grabación, el testigo pide al sacerdote que confirme que el acto de grabar cuenta como confesión. El sacerdote responde cada vez que el testigo no debe preocuparse por esa distinción en esta etapa.",
          "Hacia el final, el testigo pide al familiar que no publique la grabación durante al menos cuatro años, de modo que ninguna persona que estuvo presente aquella noche pueda ser obligada a responder preguntas mientras él siga vivo para corroborar. El familiar respetó esa petición."
        ]
      }
    ],
    related: ["varginha-008", "varginha-013", "varginha-022"]
  },

  "varginha-007": {
    excerpt:
      "Nueve portaobjetos de vidrio. Una etiqueta escrita a mano. El lote de subasta estuvo en línea menos de cuatro horas.",
    artifacts: [
      { label: "Cantidad del lote", value: "9 portaobjetos de microscopio" },
      { label: "Etiqueta", value: "V-1 (escrita a mano)" },
      { label: "Cadena de fecha en los portaobjetos", value: "Dentro del período del evento de Varginha" },
      { label: "Duración del anuncio", value: "Menos de 4 horas antes de su retirada" }
    ],
    sections: [
      {
        heading: "Cómo se encontró el anuncio",
        body: [
          "Un aficionado a la patología del norte de Europa tenía configurada una búsqueda guardada de anuncios de subastas de bienes que contuvieran la frase «espécimen no identificado». La búsqueda devolvió el anuncio dos minutos después de su publicación en una pequeña plataforma de subastas regional que gestionaba ventas de patrimonios médicos.",
          "El aficionado fotografió la página del anuncio y las imágenes del catálogo y guardó ambas antes de realizar una puja. Cuarenta minutos después de su puja, el vendedor retiró el anuncio y lo reemplazó por un lote de cristalería genérica con el mismo número de lote."
        ]
      },
      {
        heading: "Lo que muestra el catálogo",
        body: [
          "Nueve portaobjetos de vidrio para microscopio dispuestos en un soporte de madera. Cada portaobjetos lleva una pequeña etiqueta adhesiva con la designación manuscrita «V-1» y una cadena de fecha de seis caracteres correspondiente a una fecha dentro del período documentado del evento de Varginha. Los portaobjetos parecen contener secciones de tejido preparadas; la resolución es demasiado baja para identificar el tejido.",
          "El patrimonio al que se atribuyeron los portaobjetos pertenecía a un patólogo que se había jubilado a finales de la década de 1990 y que no tenía ninguna conexión pública con Brasil ni con los eventos. La familia superviviente del patólogo, contactada posteriormente, dijo que les habían dicho que los portaobjetos eran «materiales de referencia» y habían encargado a la casa de subastas que los liquidara junto con el resto del patrimonio."
        ]
      },
      {
        heading: "Dónde están los portaobjetos ahora",
        body: [
          "La casa de subastas se niega a hablar del lote. El vendedor del lote de la venta del patrimonio no parece existir bajo el nombre indicado. La familia del patólogo ha dejado de responder a las consultas. Los propios portaobjetos no han aparecido en ningún anuncio posterior."
        ]
      }
    ],
    related: ["varginha-012", "varginha-025", "varginha-027"]
  },

  "varginha-008": {
    excerpt:
      "Hizo destellar sus luces dos veces. El sedán de cabecera respondió con destellos. Lo siguieron durante diecinueve kilómetros sin que nadie dijera nada por la radio CB.",
    artifacts: [
      { label: "Fecha observada", value: "1996-01-22, 04:40 hora local" },
      { label: "Vehículo", value: "Semirremolque refrigerado, sin identificación" },
      { label: "Escolta", value: "Dos sedanes sin marcas, placas federales" },
      { label: "Distancia seguida", value: "19 km" }
    ],
    sections: [
      {
        heading: "El conductor",
        body: [
          "Un periodista independiente realizó tres entrevistas con un conductor de larga distancia que se negó a ser identificado y que desde entonces ha dejado de responder. El conductor conocía la ruta y declaró que nunca antes había visto vehículos de escolta con placas federales operando sin luces ni marcas en ese tramo de carretera a ninguna hora."
        ]
      },
      {
        heading: "Lo que vio",
        body: [
          "Se acercó al convoy por detrás a aproximadamente las 04:40 hora local. El tráiler no llevaba nombre de transportista, logotipo de tractora ni número de identificación. Los dos sedanes, uno adelante y otro detrás del tráiler, llevaban placas federales y operaban sin balizas giratorias, sin marcas de escolta estándar y sin comunicación en las frecuencias de camioneros que él monitoreaba.",
          "Cuando redujo la distancia al sedán trasero, este disminuyó su velocidad para igualar la suya, el conductor de ese sedán le indicó con la mano plana que se retirara, y él obedeció. Continuó siguiendo al convoy a una distancia de aproximadamente trescientos metros durante los siguientes diecinueve kilómetros, momento en el que el convoy se desvió de la carretera hacia un camino de servicio sin señalizar y él continuó por su ruta."
        ]
      },
      {
        heading: "Lo que no pudo establecer",
        body: [
          "No podía ver al conductor del tráiler. No pudo leer la placa de serie del tráiler desde su distancia. No fotografió el convoy. El destino del convoy no es conocido."
        ]
      }
    ],
    related: ["varginha-014", "varginha-006", "varginha-026"]
  },

  "varginha-009": {
    excerpt:
      "Ochenta y tres segundos en un escáner de aficionado. Dos voces, un número, una frase que no ha desaparecido: signos vitales estables.",
    artifacts: [
      { label: "Fecha de captura", value: "1996-01-21" },
      { label: "Duración", value: "00:01:23" },
      { label: "Banda", value: "Asignación militar regional" },
      { label: "Operador", value: "Aficionado, identificado solo por indicativo" }
    ],
    sections: [
      {
        heading: "Cómo ocurrió la captura",
        body: [
          "El operador aficionado grababa habitualmente barridos de las asignaciones militares regionales como parte de un registro personal de escucha. El segmento de ochenta y tres segundos forma parte de una grabación más larga que no contiene nada más de interés. El operador no se dio cuenta de que el segmento era inusual hasta que un colega lo señaló a la semana siguiente."
        ]
      },
      {
        heading: "Lo que se dice",
        body: [
          "La primera voz, identificada internamente como Locutor A, da una actualización logística concisa en fraseología militar estandarizada. Hace referencia a «carga uno» y «carga dos» como elementos separados pero vinculados que se desplazan por la misma ruta. Solicita confirmación de que los «signos vitales» de la carga dos permanecen «estables» y pide «sedación adicional en espera para ambos».",
          "La segunda voz, Locutor B, responde, confirma los signos vitales y dice: «la sedación está preparada, se informará sobre los intervalos». El intercambio concluye sin señal de cierre."
        ]
      },
      {
        heading: "Lo que no podemos hacer con esto",
        body: [
          "La captura no ha sido autenticada de forma independiente. No existe ninguna entrada correspondiente en ningún registro oficial de comunicaciones militares para la fecha y la banda en cuestión, lo que es en sí mismo notable pero no concluyente. El operador se negó a publicar la cinta original y trabajamos a partir de una copia digitalizada de una copia."
        ]
      }
    ],
    related: ["varginha-006", "varginha-008", "varginha-022"]
  },

  "varginha-010": {
    excerpt:
      "Una paciente de ocho años describió, sin que se le preguntara, una criatura que dijo haber visto detrás de la cerca del patio escolar. El médico escribió al margen: coincide con otras tres declaraciones esta semana.",
    artifacts: [
      { label: "Documento", value: "Página única del registro de admisión" },
      { label: "Edad del paciente", value: "8" },
      { label: "Nota al margen", value: "coincide con otras 3 declaraciones esta semana" },
      { label: "Expediente del paciente", value: "No incluido en la publicación" }
    ],
    sections: [
      {
        heading: "La publicación",
        body: [
          "La página fue publicada en 2011 en respuesta a una solicitud regional de acceso a información pública que buscaba registros de admisión de salud mental pediátrica de enero y febrero de 1996. La página es la única de aproximadamente ciento ochenta páginas de la publicación que contiene alguna referencia a los eventos. El expediente del paciente asociado no fue incluido en la publicación y no ha sido facilitado desde entonces."
        ]
      },
      {
        heading: "Lo que dice la entrada",
        body: [
          "La nota de admisión, con la letra del pediatra, registra que el paciente describió, sin que se le pidiera, una pequeña figura bípeda con ojos rojos que había visto cerca de la cerca de su patio escolar camino a casa desde la escuela. El paciente indicó que la figura no se movió cuando se detuvo a mirarla y que no se lo había contado a sus padres porque no quería que pensaran que estaba mintiendo.",
          "La nota al margen, con la misma letra, dice: «coincide con otras 3 declaraciones esta semana». No hay ninguna anotación adicional."
        ]
      },
      {
        heading: "Lo que seguimos intentando encontrar",
        body: [
          "Las otras tres declaraciones a las que hace referencia el pediatra no están incluidas en la publicación. El pediatra se jubiló en 2003 y no ha respondido a las solicitudes de aclaración. La escuela es identificable por la dirección del paciente, pero los registros escolares del período ya no están disponibles."
        ]
      }
    ],
    related: ["varginha-021", "varginha-024", "varginha-002"]
  }
};
