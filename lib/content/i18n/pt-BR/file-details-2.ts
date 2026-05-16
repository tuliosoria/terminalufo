import type { FileDetail } from "../../types";

export const fileDetails: Record<string, FileDetail> = {
  "varginha-011": {
    excerpt:
      "Quatro páginas. Sessenta por cento suprimidas. Os fragmentos visíveis são suficientes para fazer um responsável por exposição hospitalar deixar a sala.",
    artifacts: [
      { label: "Número de páginas", value: "4" },
      { label: "Percentual suprimido (estimado)", value: "≈60%" },
      { label: "Trechos visíveis", value: "exposição nível três; dois funcionários em quarentena; recomendar extensão do cordão" },
      { label: "Signatários", value: "Completamente suprimidos" }
    ],
    sections: [
      {
        heading: "O que é visível",
        body: [
          "O cabeçalho identifica o documento como um registro de incidente de defesa civil referente a uma área de preparação de perímetro. A data é 24 de janeiro de 1996. O campo de localização foi riscado. O bloco de assinatura do oficial responsável ao pé da página quatro foi suprimido. O bloco do co-signatário na página um foi suprimido.",
          "O texto visível do corpo é fragmentário. Três frases se repetem: \"exposição nível três\", \"dois funcionários em quarentena\" e \"recomendar extensão do cordão\". A expressão \"apenas químico\" aparece uma vez e foi riscada à mão antes da supressão."
        ]
      },
      {
        heading: "O que as supressões implicam",
        body: [
          "Um arquivista consultado sobre o documento observou que o padrão de supressão não é compatível com a prática de defesa civil em 1996, que tipicamente riscava apenas nomes e localizações. Neste documento, a supressão remove verbos, modificadores e descritores completos do incidente. Na avaliação do arquivista, o documento foi suprimido por uma agência diferente antes da divulgação."
        ]
      },
      {
        heading: "O que não estamos fazendo",
        body: [
          "Não estamos publicando a imagem original do documento. Os fragmentos visíveis são suficientes para identificar a área de preparação para qualquer pessoa que estivesse presente, e nos comprometemos com a fonte a não tornar essa identificação possível."
        ]
      }
    ],
    related: ["varginha-017", "varginha-027", "varginha-018"]
  },

  "varginha-012": {
    excerpt:
      "O papel timbrado do laboratório foi removido antes da digitalização. A conclusão não foi. Nenhum alinhamento significativo com qualquer genoma de referência disponível ao analista.",
    artifacts: [
      { label: "Designação da amostra", value: "VRG-A" },
      { label: "Conclusão", value: "Nenhum alinhamento significativo com qualquer genoma de referência" },
      { label: "Extensão do memorando", value: "1 página" },
      { label: "Status do papel timbrado", value: "Removido antes do vazamento" }
    ],
    sections: [
      {
        heading: "Procedência do memorando",
        body: [
          "O memorando foi entregue a um pesquisador independente em 2003 por um ex-contratado de um laboratório de biotecnologia que havia sido solicitado a realizar um sequenciamento em uma amostra numerada sem ser informado de sua origem. O contratado declarou que a amostra havia sido entregue pessoalmente, em uma caixa térmica lacrada, por um mensageiro que aguardou a conclusão do processo e então partiu com o material original."
        ]
      },
      {
        heading: "Resultados registrados no memorando",
        body: [
          "O memorando confirma que a amostra era biológica e estruturalmente íntegra, que a extração produziu ácido nucleico utilizável e que as leituras de sequenciamento passaram pelos controles de qualidade padrão. O alinhamento com os bancos de dados de referência disponíveis ao analista na época não produziu correspondências significativas nem no espaço de sequência nuclear nem no mitocondrial.",
          "O memorando recomenda \"revisão externa por uma instituição com acesso a painéis de referência além dos nossos\" e \"isolamento imediato do volume restante da amostra até que tal revisão seja realizada\". O bloco de recomendação é a única parte do memorando com as iniciais do analista."
        ]
      },
      {
        heading: "O que aconteceu depois",
        body: [
          "O contratado afirma que nunca recebeu qualquer comunicação sobre revisão externa e que a amostra não foi devolvida ao laboratório. O próprio laboratório mudou de nome duas vezes desde então, e o analista original deixou o campo. Não conseguimos localizar a amostra original."
        ]
      }
    ],
    related: ["varginha-007", "varginha-025", "varginha-013"]
  },

  "varginha-013": {
    excerpt:
      "Duas páginas. Assinado apenas com iniciais. Endereçado a um diretor que nunca nomeia. Ele os chama, duas vezes, de \"os corpos\".",
    artifacts: [
      { label: "Documento", value: "Carta de demissão, 2 páginas" },
      { label: "Assinatura", value: "Apenas iniciais" },
      { label: "Destinatário", value: "Diretor regional não identificado" },
      { label: "Procedência", value: "Contestada — a carta apareceu em dois arquivos distintos" }
    ],
    sections: [
      {
        heading: "Status de autenticação",
        body: [
          "A carta apareceu em pelo menos dois arquivos privados não relacionados, com envelopes de acompanhamento levemente diferentes. Não conseguimos autenticar nenhuma das cópias. Dois analistas de caligrafia separados, solicitados a comparar as iniciais com amostras conhecidas, recusaram-se a emitir parecer, com base em que as iniciais isoladas são insuficientes como evidência."
        ]
      },
      {
        heading: "O que a carta diz",
        body: [
          "O autor escreve que não pode mais continuar em seu papel por causa de \"o que fizemos com os corpos\" recuperados durante uma operação em janeiro de 1996 nas terras altas do sul do Brasil. Ele faz referência a três restos mortais. Faz referência a um local de incineração costeiro, que segundo ele foi escolhido por não deixar rastro recuperável. Não nomeia o local.",
          "Ele escreve que acreditava, na época, que os falecidos eram uma questão de segurança nacional. Escreve que não acredita mais que os falecidos fossem propriedade de qualquer nação. Escreve que as famílias, se existem famílias, jamais serão informadas."
        ]
      },
      {
        heading: "O que não é estabelecido",
        body: [
          "Mesmo que a carta seja autêntica, ela nos diz apenas que um autor acreditava que três sujeitos haviam morrido e que seus restos mortais haviam sido descartados de forma intencionalmente irreversível. Não estabelece o que eram os sujeitos, de onde vieram, nem quem mais tinha conhecimento."
        ]
      }
    ],
    related: ["varginha-006", "varginha-027", "varginha-022"]
  },

  "varginha-014": {
    excerpt:
      "Quatro motores. Sem plano de voo. Noventa e dois minutos em solo. A equipe do terminal foi instruída a permanecer dentro.",
    artifacts: [
      { label: "Tipo de aeronave", value: "C-130 Hercules" },
      { label: "Plano de voo registrado", value: "Nenhum" },
      { label: "Tempo em solo", value: "01:32" },
      { label: "Registros alfandegários", value: "Nenhum" }
    ],
    sections: [
      {
        heading: "O registro da torre",
        body: [
          "O registro da torre é breve. Documenta o pouso de um transporte militar de quatro motores em um aeródromo regional no início da noite de 23 de janeiro de 1996. A aeronave não apresentou plano de voo, não registrou indicativo de chamada e não respondeu às consultas padrão na frequência de solo. A equipe da torre o registrou porque era obrigada a fazê-lo."
        ]
      },
      {
        heading: "O que foi dito à equipe de terra",
        body: [
          "Os operadores de carga e a equipe de abastecimento foram instruídos pelo gerente do aeródromo, pessoalmente, a permanecer dentro do terminal até a partida da aeronave. A instrução foi dada sem explicação. O gerente faleceu. Os operadores que conseguimos contatar afirmam que obedeceram à instrução sem questionar e que nenhum deles viu a carga sendo embarcada ou desembarcada."
        ]
      },
      {
        heading: "O que não aconteceu",
        body: [
          "Nenhum registro alfandegário foi apresentado para a aeronave, em nenhuma direção. Nenhuma fatura de combustível foi emitida para o aeródromo. Nenhuma reclamação de ruído foi registrada junto à autoridade local, apesar do horário tardio — o que um ex-controlador da torre apontou como incomum para aquele tipo de aeronave. A direção de partida não foi registrada."
        ]
      }
    ],
    related: ["varginha-003", "varginha-008", "varginha-028"]
  },

  "varginha-015": {
    excerpt:
      "A fotografia foi enviada pelo correio em 1997. O envelope não tinha remetente. A redação a guardou por vinte e sete anos.",
    artifacts: [
      { label: "Formato", value: "Fotografia colorida, 4×6 polegadas" },
      { label: "Carimbo postal", value: "Regional, data ilegível" },
      { label: "Endereço de retorno", value: "Nenhum" },
      { label: "Autenticação independente", value: "Não realizada até o momento" }
    ],
    sections: [
      {
        heading: "O envio",
        body: [
          "Um pequeno jornal regional recebeu um envelope sem identificação em abril de 1997 contendo uma única fotografia colorida subexposta e nenhum outro conteúdo. O envelope não tinha endereço de retorno. O carimbo postal indicava origem regional, mas a data estava ilegível no recebimento. A redação conservou tanto a fotografia quanto o envelope e os mantém em arquivo lacrado desde então."
        ]
      },
      {
        heading: "O que a fotografia mostra",
        body: [
          "Uma mão enluvada, fotografada em close contra uma superfície de aço inoxidável, segurando um objeto oblongo de aproximadamente o tamanho do crânio de uma criança. O objeto é escuro e apresenta duas depressões assimétricas que um editor fotográfico descreveu como \"cavidades oculares aproximadamente nas posições corretas, mas erradas\". Três pequenas protuberâncias dispostas dorsalmente completam a semelhança com descrições fornecidas por outras testemunhas.",
          "A luva é uma luva cirúrgica padrão. A superfície sob o objeto é compatível com uma mesa de patologia hospitalar. Não há escala de referência na imagem e as bordas da fotografia apresentam granulação uniforme."
        ]
      },
      {
        heading: "Por que não foi autenticada",
        body: [
          "A autenticação independente exigiria coleta destrutiva de amostras da fotografia e exposição do original a laboratórios comerciais nos quais a redação não confia para devolver o material. A redação declarou, em registro, que permitirá a autenticação apenas por uma instituição que concorde por escrito em manter a custódia do original em condições de arquivo lacrado. Nenhuma instituição aceitou essas condições até o momento."
        ]
      }
    ],
    related: ["varginha-007", "varginha-025", "varginha-017"]
  },

  "varginha-016": {
    excerpt:
      "Dezoito bovinos em duas semanas. Cada um exsanguinado por pequenas incisões circulares. Nenhum deles tocado por algo que deixasse pegada.",
    artifacts: [
      { label: "Animais afetados", value: "18 bovinos" },
      { label: "Período", value: "21 jan – 02 fev 1996" },
      { label: "Propriedades afetadas", value: "4" },
      { label: "Atividade de predadores registrada", value: "Nenhuma em qualquer cena" }
    ],
    sections: [
      {
        heading: "O registro",
        body: [
          "O livro de registros cobre a prática veterinária rotineira de um único veterinário rural atendendo quatro propriedades em um raio de quinze quilômetros do centro de Varginha. As páginas referentes às duas semanas seguintes aos eventos de 20 de janeiro registram dezoito mortes de bovinos — número excepcionalmente alto para uma única clínica em um único período de duas semanas."
        ]
      },
      {
        heading: "Padrão das mortes",
        body: [
          "Cada animal foi encontrado exsanguinado. O veterinário registrou o mesmo achado para todos os dezoito: exsanguinação completa por pequenas incisões circulares de diâmetro consistente, localizadas na parte inferior do pescoço ou, em três casos, na dobra inguinal. Ele anotou que as incisões pareciam ter sido feitas post-mortem em cinco casos e ante-mortem nos treze restantes.",
          "Ele registrou a ausência de marcas de predadores em cada carcaça. Registrou a ausência de rastros de qualquer espécie em cada cena, incluindo suas próprias pegadas quando chegou a um local em menos de uma hora após a morte. O solo estava úmido de chuva recente em três das cenas."
        ]
      },
      {
        heading: "Após o período",
        body: [
          "O padrão cessou em 2 de fevereiro de 1996. O livro de registros do veterinário continua por mais dezesseis anos, sem que ocorresse novamente qualquer agrupamento comparável no mesmo circuito. Ele se aposentou em 2012 e o registro foi arquivado como parte de um projeto regional de preservação de prontuários veterinários."
        ]
      }
    ],
    related: ["varginha-024", "varginha-023", "varginha-019"]
  },

  "varginha-017": {
    excerpt:
      "02:14 da manhã. Porta de serviço. Traje NBC completo. O identificador hospitalar no quadro foi suprimido pela fonte — não por nós.",
    artifacts: [
      { label: "Horário do quadro", value: "02:14:07" },
      { label: "Sujeito", value: "Figura única, equipamento de proteção NBC completo" },
      { label: "Quadros no conjunto original", value: "17 (declarados)" },
      { label: "Divulgado para", value: "Grupo de transparência cívica, condições restritas" }
    ],
    sections: [
      {
        heading: "Condições da fonte",
        body: [
          "Um grupo de transparência cívica recebeu dezessete quadros estáticos de uma única fonte em 2009, acompanhados de condições escritas limitando a forma como os quadros poderiam ser reproduzidos. O identificador hospitalar visível na gravação original foi suprimido pela fonte antes da entrega; o grupo respeitou essa supressão em todas as reproduções."
        ]
      },
      {
        heading: "O que o quadro mostra",
        body: [
          "Uma figura única em equipamento de proteção nuclear-biológico-químico completo, saindo por uma porta de serviço identificada com um número. A figura não carrega carga visível nem identificação visível no traje. O horário coincide com a noite que outras testemunhas identificaram de forma independente como a noite de uma das transferências.",
          "Os dezesseis quadros restantes do conjunto, que não vimos, são descritos pela fonte como mostrando figuras semelhantes entrando e saindo pela mesma porta ao longo da mesma noite. A fonte não divulgou o restante do conjunto."
        ]
      },
      {
        heading: "O que não podemos informar",
        body: [
          "Não podemos informar qual hospital. O grupo que detém os quadros não nos diz, e a fonte não os informa. Podemos dizer que o identificador de porta visível no quadro é compatível com uma entrada de serviço hospitalar, que o traje é compatível com equipamento civil de biocontenção disponível em 1996, e que o quadro é internamente consistente com o horário que apresenta."
        ]
      }
    ],
    related: ["varginha-002", "varginha-019", "varginha-011"]
  },

  "varginha-018": {
    excerpt:
      "Página única. Linha de assunto intacta. Bloco de destinatário intacto. O corpo solicita especialização em contenção nuclear, biológica e química com doze horas de antecedência.",
    artifacts: [
      { label: "Tipo de documento", value: "Cabo diplomático" },
      { label: "Páginas", value: "1" },
      { label: "Linha de assunto", value: "Visível (texto literal não divulgado)" },
      { label: "Divulgado via FOIA", value: "2015" }
    ],
    sections: [
      {
        heading: "O que consta na página",
        body: [
          "O cabo é uma página única em papel timbrado diplomático padrão. O cabeçalho está intacto. A linha de assunto é visível. O bloco de destinatário é visível. O corpo do cabo resume uma solicitação recebida de um oficial de ligação brasileiro, pessoalmente e fora de qualquer programa estabelecido, pedindo acesso com curto prazo a especialistas estrangeiros em contenção nuclear, biológica e química.",
          "O oficial redator do cabo observa que a solicitação \"é incomum em escopo, não está associada a nenhum exercício ou intercâmbio programado, e foi transmitida verbalmente com o pedido de que nenhum registro escrito fosse criado por nenhuma das partes\". O próprio cabo é o registro escrito criado a despeito desse pedido."
        ]
      },
      {
        heading: "O que o cabo não diz",
        body: [
          "O cabo não nomeia o incidente que motivou a solicitação. Não nomeia o oficial solicitante. Não indica se a solicitação foi atendida, recusada ou encaminhada. Não faz referência a Varginha pelo nome nem pela região.",
          "No entanto, traz um carimbo de data dentro da janela documentada dos eventos de Varginha e um comprovante de encaminhamento indicando que foi enviado a dois destinatários cujos cargos têm responsabilidades compatíveis com resposta NBC."
        ]
      },
      {
        heading: "O que aconteceu no lado estrangeiro",
        body: [
          "Solicitações subsequentes via FOIA em busca de cabos de resposta, memorandos de coordenação interna ou relatórios de avaliação pós-ação relacionados a esta solicitação não produziram registros responsivos. A resposta padrão da agência a tais solicitações é que nenhum registro responsivo foi localizado. Reapresentamos o pedido três vezes com escopos diferentes."
        ]
      }
    ],
    related: ["varginha-003", "varginha-014", "varginha-028"]
  },

  "varginha-019": {
    excerpt:
      "O hospital operou sob pressão negativa em apenas duas noites. Ambas as noites coincidem com as datas indicadas pelas testemunhas para as transferências. Não há explicação procedimental no registro de manutenção.",
    artifacts: [
      { label: "Sistema", value: "HVAC hospitalar, unidade regional" },
      { label: "Janela analisada", value: "Janeiro – março de 1996" },
      { label: "Eventos de inversão de pressão", value: "2" },
      { label: "Datas de transferência declaradas por testemunhas", value: "Ambas as inversões coincidem" }
    ],
    sections: [
      {
        heading: "Origem dos dados",
        body: [
          "Os dados foram fornecidos em 2005 por um contratado de manutenção que havia conservado os registros de serviço de seu trabalho em um hospital regional durante o período relevante. O contratado faleceu em 2014. Seu espólio liberou os registros com a condição de que o hospital não fosse identificado publicamente."
        ]
      },
      {
        heading: "O que as leituras mostram",
        body: [
          "O registro do HVAC mostra dois eventos distintos de inversão de pressão durante a janela de análise. Em cada evento, uma ala do hospital foi colocada sob pressão negativa em relação aos corredores adjacentes por um período de duas a quatro horas. Os dois eventos ocorrem em datas que coincidem com declarações de testemunhas obtidas de forma independente sobre a transferência de sujeitos pelo hospital.",
          "As anotações de trabalho do contratado para ambos os eventos registram \"conforme solicitação, fora do registro\", expressão que ele descreveu em entrevista como uma frase que usava quando era instruído a realizar trabalho sem registrar o motivo."
        ]
      },
      {
        heading: "Por que isso importa",
        body: [
          "O isolamento por pressão negativa é o controle ambiental padrão para o manuseio de material biologicamente perigoso, e não é utilizado na operação hospitalar rotineira fora de salas de isolamento designadas. Os dois eventos aqui registrados não ocorreram em uma sala de isolamento designada. Ocorreram em um corredor de serviço adjacente a uma doca de carga subterrânea."
        ]
      }
    ],
    related: ["varginha-002", "varginha-017", "varginha-001"]
  },

  "varginha-020": {
    excerpt:
      "Ele chegou sem agendamento. Ficou quatro horas. O bispo não se pronunciou do púlpito sobre nada naquele mês.",
    artifacts: [
      { label: "Data da visita", value: "1996-01-27" },
      { label: "Visitante", value: "Enviado sênior (afiliação institucional não divulgada)" },
      { label: "Duração", value: "≈4 horas" },
      { label: "Fonte", value: "Secretária diocesana, identidade preservada" }
    ],
    sections: [
      {
        heading: "A chegada",
        body: [
          "Uma ex-secretária diocesana, que serviu ao bispado regional por quinze anos e se aposentou em 2002, concedeu uma única entrevista gravada em 2014 descrevendo uma visita não anunciada ocorrida na manhã de 27 de janeiro de 1996. O visitante era identificável por uniforme e credencial como um enviado sênior de fora do país. Foi admitido sem agendamento prévio por instrução permanente do bispo."
        ]
      },
      {
        heading: "O que a testemunha observou",
        body: [
          "O enviado e o bispo se reuniram no escritório privado do bispo por aproximadamente quatro horas. A testemunha foi instruída a suspender todas as ligações e não admitir ninguém. Ela não estava presente na reunião e não sabe o que foi discutido. Sabe que o enviado chegou com uma única maleta trancada e partiu com a mesma maleta ainda trancada.",
          "Após a reunião, o bispo convocou seus funcionários seniores e os instruiu a se absterem de qualquer comentário público sobre \"eventos recentes na região\" até novo aviso. A instrução não foi suspensa durante o tempo restante da testemunha na diocese."
        ]
      },
      {
        heading: "O que não podemos estabelecer",
        body: [
          "Não podemos estabelecer o que foi discutido. Não podemos estabelecer o que havia na maleta. Não podemos estabelecer se a instituição do enviado manteve algum relacionamento contínuo com a diocese. O bispo faleceu. O enviado, conforme identificado no relato da testemunha, não pode ser localizado de forma confiável em nenhum diretório que pesquisamos."
        ]
      }
    ],
    related: ["varginha-013", "varginha-018", "varginha-029"]
  }
};
