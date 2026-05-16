import type { FileDetail } from "../../types";

export const fileDetails: Record<string, FileDetail> = {
  "varginha-011": {
    excerpt:
      "Cuatro páginas. Sesenta por ciento en negro. Los fragmentos visibles son suficientes para que un responsable de exposición hospitalaria abandone la sala.",
    artifacts: [
      { label: "Número de páginas", value: "4" },
      { label: "Porcentaje redactado (estimado)", value: "≈60%" },
      { label: "Frases visibles", value: "exposición nivel tres; dos efectivos en cuarentena; se recomienda ampliar el cordón" },
      { label: "Firmantes", value: "Completamente redactados" }
    ],
    sections: [
      {
        heading: "Qué es visible",
        body: [
          "La barra de encabezado identifica el informe como un expediente de incidente de defensa civil que cubre una zona de estacionamiento perimetral. La fecha es el 24 de enero de 1996. El campo de localización ha sido tachado en negro. El bloque de firma del oficial informante al pie de la página cuatro ha sido tachado en negro. El bloque del contrafirmante en la página uno ha sido tachado en negro.",
          "El texto del cuerpo visible es fragmentario. Tres frases se repiten: «exposición nivel tres», «dos efectivos en cuarentena» y «se recomienda ampliar el cordón». La frase «solo químico» aparece una vez y ha sido tachada a mano con bolígrafo antes de la redacción."
        ]
      },
      {
        heading: "Lo que implican las redacciones",
        body: [
          "Un archivista consultado sobre el documento señaló que el patrón de redacción no es coherente con la práctica de defensa civil de 1996, que habitualmente solo tachaba nombres y ubicaciones. La redacción de este documento elimina verbos, modificadores y descriptores completos del incidente. La opinión del archivista es que el documento fue redactado por un organismo diferente antes de su divulgación."
        ]
      },
      {
        heading: "Lo que no hacemos",
        body: [
          "No publicamos la imagen del documento original. Los fragmentos visibles son suficientes para identificar la zona de estacionamiento a cualquiera que hubiera estado presente, y nos hemos comprometido con la fuente a no hacer posible esa identificación."
        ]
      }
    ],
    related: ["varginha-017", "varginha-027", "varginha-018"]
  },

  "varginha-012": {
    excerpt:
      "El membrete del laboratorio fue recortado antes del escaneado. La conclusión no lo fue. Sin alineación significativa con ningún genoma de referencia disponible para el analista.",
    artifacts: [
      { label: "Designación de muestra", value: "VRG-A" },
      { label: "Conclusión", value: "Sin alineación significativa con ningún genoma de referencia" },
      { label: "Extensión del memorando", value: "1 página" },
      { label: "Estado del membrete", value: "Eliminado antes de la filtración" }
    ],
    sections: [
      {
        heading: "Procedencia del memorando",
        body: [
          "El memorando fue entregado a un investigador independiente en 2003 por un ex contratista de un laboratorio de biotecnología al que se le había solicitado realizar una secuenciación de una muestra numerada sin revelarle su origen. El contratista declaró que la muestra había sido entregada en persona, en una nevera sellada, por un mensajero que esperó a que finalizara la secuenciación y luego se marchó con el material original."
        ]
      },
      {
        heading: "Hallazgos recogidos en el memorando",
        body: [
          "El memorando confirma que la muestra era biológica y estructuralmente íntegra, que la extracción produjo ácido nucleico utilizable y que las lecturas de secuencia superaron los controles de calidad estándar. El paso de alineación con las bases de datos de referencia disponibles para el analista en ese momento no produjo coincidencias significativas ni en el espacio de secuencias nucleares ni en el mitocondrial.",
          "El memorando recomienda «revisión externa por parte de una institución con acceso a paneles de referencia más allá de los nuestros» y «aislamiento inmediato del volumen restante de muestra a la espera de dicha revisión». El bloque de recomendaciones es la única parte del memorando que lleva las iniciales del analista."
        ]
      },
      {
        heading: "Qué ocurrió después",
        body: [
          "El contratista afirma que nunca recibió comunicación alguna sobre una revisión externa y que la muestra no fue devuelta al laboratorio. El laboratorio en sí ha cambiado de nombre dos veces desde entonces y el analista original ha abandonado el sector. No hemos podido localizar la muestra original."
        ]
      }
    ],
    related: ["varginha-007", "varginha-025", "varginha-013"]
  },

  "varginha-013": {
    excerpt:
      "Dos páginas. Firmada solo con iniciales. Dirigida a un director al que nunca nombra. Los llama, en dos ocasiones, «los cuerpos».",
    artifacts: [
      { label: "Documento", value: "Carta de renuncia, 2 páginas" },
      { label: "Firma", value: "Solo iniciales" },
      { label: "Destinatario", value: "Director regional sin identificar" },
      { label: "Procedencia", value: "Disputada — la carta ha aparecido en dos archivos distintos" }
    ],
    sections: [
      {
        heading: "Estado de autenticación",
        body: [
          "La carta ha aparecido en al menos dos archivos privados no relacionados, con sobres adjuntos ligeramente diferentes. No hemos podido autenticar ninguna de las copias. Dos peritos caligráficos distintos, a quienes se solicitó comparar las iniciales con muestras conocidas, se han negado a emitir un dictamen aduciendo que las iniciales por sí solas son prueba insuficiente."
        ]
      },
      {
        heading: "Qué dice la carta",
        body: [
          "El autor escribe que ya no puede continuar en su cargo a causa de «lo que hicimos con los cuerpos» recuperados durante una operación de enero de 1996 en el altiplano meridional brasileño. Hace referencia a tres restos. Menciona un emplazamiento de incineración costero, que según él fue elegido porque no dejaría rastro recuperable. No nombra el emplazamiento.",
          "Escribe que en su momento creyó que los fallecidos eran un asunto de seguridad nacional. Escribe que ya no cree que los fallecidos fueran propiedad de ninguna nación. Escribe que las familias, si es que existen familias, nunca serán informadas."
        ]
      },
      {
        heading: "Lo que no establece",
        body: [
          "Aunque la carta sea auténtica, solo nos dice que un autor creyó que tres sujetos habían muerto y que sus restos habían sido eliminados de un modo concebido para ser irreversible. No establece qué eran los sujetos, de dónde procedían ni quién más lo sabía."
        ]
      }
    ],
    related: ["varginha-006", "varginha-027", "varginha-022"]
  },

  "varginha-014": {
    excerpt:
      "Cuatro motores. Sin plan de vuelo. Noventa y dos minutos en tierra. Al personal de la terminal se le ordenó permanecer en el interior.",
    artifacts: [
      { label: "Tipo de aeronave", value: "C-130 Hercules" },
      { label: "Plan de vuelo presentado", value: "Ninguno" },
      { label: "Tiempo en tierra", value: "01:32" },
      { label: "Declaraciones aduaneras", value: "Ninguna" }
    ],
    sections: [
      {
        heading: "El registro de la torre",
        body: [
          "La entrada del registro de la torre es escueta. Recoge el aterrizaje de un transporte militar de cuatro motores en un aeródromo regional durante la tarde-noche del 23 de enero de 1996. La aeronave no presentó plan de vuelo, no registró indicativo de llamada y no respondió a las consultas estándar de frecuencia de tierra. El personal de la torre lo registró porque estaba obligado a hacerlo."
        ]
      },
      {
        heading: "Qué se indicó al personal de tierra",
        body: [
          "Los manipuladores de carga y el personal de repostaje recibieron instrucciones del jefe del aeródromo, en persona, para que permanecieran en el interior del edificio terminal hasta que la aeronave hubiera partido. La instrucción se dio sin explicación. El jefe ha fallecido desde entonces. Los manipuladores con quienes hemos podido contactar afirman que obedecieron la instrucción sin preguntar el motivo y que ninguno de ellos vio la carga cargada o descargada."
        ]
      },
      {
        heading: "Lo que no ocurrió",
        body: [
          "No se presentó ninguna declaración aduanera para la aeronave, ni en ninguna dirección. No se emitió ninguna factura de combustible para el aeródromo. No se registró ninguna queja por ruido ante la autoridad local pese a la hora tardía, lo que un ex controlador de torre señaló como inusual para ese tipo de aeronave. La dirección de salida no fue registrada."
        ]
      }
    ],
    related: ["varginha-003", "varginha-008", "varginha-028"]
  },

  "varginha-015": {
    excerpt:
      "La copia fue enviada por correo en 1997. El sobre no tenía remite. La redacción ha conservado ambos durante veintisiete años.",
    artifacts: [
      { label: "Formato", value: "Copia en color, 4×6 pulgadas" },
      { label: "Matasellos", value: "Regional, fecha borrosa" },
      { label: "Dirección de remite", value: "Ninguna" },
      { label: "Autenticación independiente", value: "No realizada hasta la fecha" }
    ],
    sections: [
      {
        heading: "El envío",
        body: [
          "Un pequeño periódico regional recibió en abril de 1997 un sobre sin identificar que contenía una única fotografía en color subexpuesta y ningún otro contenido. El sobre no tenía dirección de remite. El matasellos indicaba un origen regional, pero la fecha quedó borrosa al recibirlo. La redacción conservó tanto la copia como el sobre y los ha guardado en un archivo sellado desde entonces."
        ]
      },
      {
        heading: "Qué muestra la copia",
        body: [
          "Una mano enguantada, fotografiada a corta distancia sobre una superficie de acero inoxidable, sosteniendo un objeto oblongo de aproximadamente el tamaño del cráneo de un niño. El objeto es de color oscuro y presenta dos depresiones asimétricas que un editor fotográfico presente describió como «cavidades oculares en lugares aproximadamente correctos, pero incorrectos». Tres pequeñas protuberancias dispuestas dorsalmente completan el parecido con las descripciones dadas por otros testigos.",
          "El guante es un guante quirúrgico estándar. La superficie bajo el objeto es coherente con una mesa de patología hospitalaria. No hay barra de escala en la imagen y los bordes de la copia muestran grano uniforme."
        ]
      },
      {
        heading: "Por qué no ha sido autenticada",
        body: [
          "La autenticación independiente requeriría un muestreo destructivo de la copia y la exposición del original a laboratorios comerciales en los que la redacción no confía para la devolución del material. La redacción ha declarado, públicamente y para el registro, que solo permitirá la autenticación por parte de una institución que acepte por escrito conservar la custodia del original en condiciones selladas. Ninguna institución ha aceptado aún esas condiciones."
        ]
      }
    ],
    related: ["varginha-007", "varginha-025", "varginha-017"]
  },

  "varginha-016": {
    excerpt:
      "Dieciocho cabezas de ganado en dos semanas. Cada una exsanguinada a través de pequeñas incisiones circulares. Ninguna de ellas tocada por nada que dejara huella.",
    artifacts: [
      { label: "Animales afectados", value: "18 cabezas de ganado" },
      { label: "Período", value: "21 ene – 02 feb 1996" },
      { label: "Propiedades afectadas", value: "4" },
      { label: "Actividad depredadora registrada", value: "Ninguna en ningún lugar del hallazgo" }
    ],
    sections: [
      {
        heading: "El libro de registros",
        body: [
          "El libro de registros abarca la práctica veterinaria habitual de un único veterinario rural que atiende cuatro propiedades en un radio de quince kilómetros del centro de Varginha. Las páginas correspondientes a las dos semanas posteriores a los sucesos del 20 de enero registran dieciocho muertes de ganado, un número inusualmente elevado para una sola consulta en una quincena."
        ]
      },
      {
        heading: "Patrón de las muertes",
        body: [
          "Cada animal fue hallado exsanguinado. El veterinario anotó el mismo hallazgo para los dieciocho: exsanguinación completa a través de pequeñas incisiones circulares de diámetro uniforme, ubicadas en la parte inferior del cuello o, en tres casos, en el pliegue inguinal. Señaló que las incisiones parecían haber sido realizadas post mortem en cinco casos y ante mortem en los trece restantes.",
          "Registró la ausencia de marcas de depredadores en todos los cadáveres. Registró la ausencia de rastros de cualquier especie en todos los lugares del hallazgo, incluidas sus propias huellas al llegar a un emplazamiento en menos de una hora tras la muerte. El suelo estaba mojado por lluvias recientes en tres de los escenarios."
        ]
      },
      {
        heading: "Después de la quincena",
        body: [
          "El patrón cesó el 2 de febrero de 1996. El libro de registros del veterinario continúa durante otros dieciséis años sin que se produjera nunca más un agrupamiento comparable en el mismo circuito. Se jubiló en 2012 y el libro fue archivado como parte de un proyecto regional de preservación de registros veterinarios."
        ]
      }
    ],
    related: ["varginha-024", "varginha-023", "varginha-019"]
  },

  "varginha-017": {
    excerpt:
      "02:14 de la madrugada. Puerta de servicio. Traje NBC completo. El identificador del hospital en el fotograma ha sido tachado por la fuente — no por nosotros.",
    artifacts: [
      { label: "Marca de tiempo del fotograma", value: "02:14:07" },
      { label: "Sujeto", value: "Una figura, equipo de protección NBC completo" },
      { label: "Fotogramas en el conjunto fuente", value: "17 (declarados)" },
      { label: "Entregado a", value: "Grupo de transparencia cívica, condiciones selladas" }
    ],
    sections: [
      {
        heading: "Condiciones de la fuente",
        body: [
          "Un grupo de transparencia cívica recibió diecisiete fotogramas fijos de una única fuente en 2009, junto con condiciones escritas que limitaban la forma en que podían reproducirse. El identificador del hospital visible en la transmisión original fue tachado por la fuente antes de la entrega; el grupo ha respetado esa redacción en todas las reproducciones."
        ]
      },
      {
        heading: "Qué muestra el fotograma",
        body: [
          "Una figura solitaria con equipo de protección nuclear-biológico-química completo, saliendo por una puerta de servicio identificada con un número. La figura no porta carga visible ni identificación visible en el traje. La marca de tiempo coincide con la noche que otros testigos han identificado de forma independiente como la noche de uno de los traslados.",
          "Los dieciséis fotogramas restantes del conjunto, que no hemos visto, son descritos por la fuente como imágenes de figuras similares que entran y salen por la misma puerta durante la misma noche. La fuente no ha publicado el resto del conjunto."
        ]
      },
      {
        heading: "Lo que no podemos decirle",
        body: [
          "No podemos decirle qué hospital es. El grupo que custodia los fotogramas no nos lo dirá, y la fuente no se lo dirá a ellos. Sí podemos decirle que el identificador de puerta visible en el fotograma es coherente con una entrada de servicio hospitalaria, que el traje es coherente con equipos de biocontención civil disponibles en 1996, y que el fotograma es internamente coherente con la marca de tiempo que lleva."
        ]
      }
    ],
    related: ["varginha-002", "varginha-019", "varginha-011"]
  },

  "varginha-018": {
    excerpt:
      "Una sola página. Línea de asunto intacta. Bloque de destinatario intacto. El cuerpo solicita experiencia en contención nuclear, biológica y química con doce horas de aviso.",
    artifacts: [
      { label: "Tipo de documento", value: "Cable diplomático" },
      { label: "Páginas", value: "1" },
      { label: "Línea de asunto", value: "Visible (texto literal no divulgado)" },
      { label: "Publicado bajo FOIA", value: "2015" }
    ],
    sections: [
      {
        heading: "Qué contiene la página",
        body: [
          "El cable es una página única en papel con membrete diplomático estándar. El encabezado está íntegro. La línea de asunto es visible. El bloque de destinatario es visible. El cuerpo del cable resume una solicitud recibida de un oficial de enlace brasileño, en persona y al margen de cualquier programa establecido, para acceso a corto plazo a especialistas extranjeros en contención nuclear, biológica y química.",
          "El oficial redactor del cable señala que la solicitud «es inusual en su alcance, no está asociada a ningún ejercicio o intercambio programado, y fue transmitida oralmente con el requerimiento de que no se creara ningún registro escrito en ninguna de las partes». El propio cable es el registro escrito que se creó a pesar de ese requerimiento."
        ]
      },
      {
        heading: "Lo que el cable no dice",
        body: [
          "El cable no menciona el incidente que da origen a la solicitud. No nombra al oficial solicitante. No indica si la solicitud fue aceptada, rechazada o derivada. No hace referencia a Varginha por nombre ni por región.",
          "Sin embargo, lleva un sello de fecha dentro de la ventana temporal documentada del suceso de Varginha y un resguardo de distribución que indica que fue remitido a dos destinatarios cuyos despachos tienen responsabilidades coherentes con la respuesta NBC."
        ]
      },
      {
        heading: "Qué ocurrió en el lado extranjero",
        body: [
          "Las solicitudes FOIA posteriores en busca de cables de respuesta, memorandos de coordinación interna o informes de análisis post-acción relacionados con esta solicitud no han producido registros relevantes. La respuesta estándar del organismo a dichas solicitudes es que no se localizaron registros pertinentes. Hemos vuelto a presentar la solicitud tres veces con diferentes alcances."
        ]
      }
    ],
    related: ["varginha-003", "varginha-014", "varginha-028"]
  },

  "varginha-019": {
    excerpt:
      "El hospital operó en presión negativa solo dos noches. Ambas noches coinciden con las fechas que los testigos señalan para los traslados. No hay ninguna explicación de procedimiento en el registro de mantenimiento.",
    artifacts: [
      { label: "Sistema", value: "HVAC hospitalario, instalación regional" },
      { label: "Período analizado", value: "Enero – marzo 1996" },
      { label: "Eventos de inversión de presión", value: "2" },
      { label: "Fechas de traslado declaradas por testigos", value: "Ambas inversiones coinciden" }
    ],
    sections: [
      {
        heading: "Origen de los datos",
        body: [
          "Los datos fueron proporcionados en 2005 por un contratista de mantenimiento que había conservado los registros de servicio de su trabajo en un hospital regional durante el período relevante. El contratista falleció en 2014. Su herencia cedió los registros con la condición de que el hospital no fuera nombrado públicamente."
        ]
      },
      {
        heading: "Qué muestran las lecturas",
        body: [
          "El registro HVAC muestra dos eventos distintos de inversión de presión durante el período de análisis. En cada evento, un ala del hospital fue colocada bajo presión negativa respecto a los pasillos adyacentes durante un período de entre dos y cuatro horas. Los dos eventos ocurren en fechas que coinciden con declaraciones testimoniales obtenidas de forma independiente sobre el traslado de sujetos a través del hospital.",
          "Las notas de trabajo del contratista para ambos eventos dicen «a petición, no para el registro», expresión que el contratista describió en entrevista como la frase que usaba cuando recibía instrucciones de realizar un trabajo sin registrar el motivo."
        ]
      },
      {
        heading: "Por qué esto importa",
        body: [
          "El aislamiento de presión negativa es el control ambiental estándar para la manipulación de material biológicamente peligroso, y no se utiliza en la operación hospitalaria habitual fuera de las salas de aislamiento designadas. Los dos eventos aquí registrados no se produjeron en una sala de aislamiento designada. Se produjeron en un pasillo de servicio adyacente a un muelle de carga en el sótano."
        ]
      }
    ],
    related: ["varginha-002", "varginha-017", "varginha-001"]
  },

  "varginha-020": {
    excerpt:
      "Llegó sin cita previa. Permaneció cuatro horas. El obispo no habló desde el púlpito sobre nada ese mes.",
    artifacts: [
      { label: "Fecha de la visita", value: "1996-01-27" },
      { label: "Visitante", value: "Enviado de alto rango (afiliación institucional retenida)" },
      { label: "Duración", value: "≈4 horas" },
      { label: "Fuente", value: "Secretaria diocesana, identidad retenida" }
    ],
    sections: [
      {
        heading: "La llegada",
        body: [
          "Una ex secretaria diocesana, que sirvió al obispado regional durante quince años y se jubiló en 2002, concedió una única entrevista grabada en 2014 en la que describió una visita no anunciada que tuvo lugar la mañana del 27 de enero de 1996. El visitante era identificable por su uniforme y credencial como un enviado de alto rango procedente del extranjero. Fue admitido sin cita previa por instrucción permanente del obispo."
        ]
      },
      {
        heading: "Lo que presenció la testigo",
        body: [
          "El enviado y el obispo se reunieron en el despacho privado del obispo durante aproximadamente cuatro horas. A la testigo se le indicó que retuviera todas las llamadas y no admitiera a nadie. No estuvo presente en la reunión y desconoce qué se trató. Sí sabe que el enviado llegó con un maletín cerrado con llave y partió con el mismo maletín aún cerrado.",
          "Tras la reunión, el obispo convocó a su personal de alto rango y les instruyó para que se abstuvieran de cualquier comentario público sobre «los sucesos recientes en la región» hasta nuevo aviso. La instrucción no fue levantada durante el tiempo restante de la testigo en la diócesis."
        ]
      },
      {
        heading: "Lo que no podemos establecer",
        body: [
          "No podemos establecer qué se trató. No podemos establecer qué había en el maletín. No podemos establecer si la institución del enviado mantuvo alguna relación continuada con la diócesis. El obispo ha fallecido. El enviado, tal como figura en el testimonio de la testigo, no puede ser localizado de forma fiable en ningún directorio que hayamos consultado."
        ]
      }
    ],
    related: ["varginha-013", "varginha-018", "varginha-029"]
  }
};
