const topics = [
  {
    id: "introducao",
    title: "Introdução",
    menuTitle: "Introdução",
    cardTitle: "Introdução",
    area: "Enquadramento",
    intro: "Apresentação do percurso, objetivos e organização da aprendizagem.",
    image: "../assets/img/ufcd0693-capa-site.png",
    url: "conteudos/introducao.html",
    showInContents: false
  },
  {
    id: "gestao-eletronica-documentos",
    title: "Gestão eletrónica de documentos",
    menuTitle: "Gestão de documentos",
    cardTitle: "Gestão eletrónica de documentos",
    area: "Organização digital",
    intro: "Organizar documentos, agendas, pastas e critérios de indexação.",
    image: "../assets/img/ufcd0693-capa-site.png",
    url: "conteudos/gestao-eletronica-documentos.html",
    items: ["Agenda eletrónica", "Correio eletrónico", "Organização de pastas", "Indexação"]
  },
  {
    id: "mensagens-eletronicas",
    title: "Mensagens eletrónicas",
    menuTitle: "Mensagens eletrónicas",
    cardTitle: "Mensagens eletrónicas",
    area: "Comunicação digital",
    intro: "Criar, enviar, receber, arquivar, reencaminhar e eliminar mensagens.",
    image: "../assets/img/ufcd0693-capa-site.png",
    url: "conteudos/mensagens-eletronicas.html"
  },
  {
    id: "pesquisa-avancada-web",
    title: "Métodos e técnicas de pesquisa avançada na web",
    menuTitle: "Pesquisa avançada",
    cardTitle: "Pesquisa avançada na web",
    area: "Pesquisa e validação",
    intro: "Pesquisar com operadores, avaliar fontes e validar informação online.",
    image: "../assets/img/ufcd0693-capa-site.png",
    url: "conteudos/pesquisa-avancada-web.html"
  },
  {
    id: "configuracao-conta-google",
    title: "Configuração da Conta Google",
    menuTitle: "Conta Google",
    cardTitle: "Configuração da Conta Google",
    area: "Identidade digital",
    intro: "Criar, configurar e proteger uma Conta Google e os serviços associados.",
    image: "../assets/img/ufcd0693-capa-site.png",
    url: "conteudos/configuracao-conta-google.html"
  }
];

const contentMenuGroups = [
  {
    title: "Gestão eletrónica de documentos",
    theme: "representation",
    parentTopicId: "gestao-eletronica-documentos",
    children: [
      { topicId: "configuracao-conta-google" }
    ]
  },
  { title: "Mensagens eletrónicas", theme: "representation", children: [{ topicId: "mensagens-eletronicas" }] },
  { title: "Pesquisa avançada na web", theme: "database", children: [{ topicId: "pesquisa-avancada-web" }] }
];

const DEFAULT_APPS_SCRIPT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwTZTbLAY7RLR8RSbX3ogc6WT1J8DJZdgDRq_FUD055ByJm2eXvJ8zYzKIGSb1RYxAjaw/exec";
const DEFAULT_APPS_SCRIPT_SPREADSHEET_ID = "14xWArQOzb-1fZ4QxZXjuoJK1dxhjWmbwWmF7lsK-a9o";
const APPS_SCRIPT_WEB_APP_URL = window.UFCD0693_APPS_SCRIPT_URL || DEFAULT_APPS_SCRIPT_WEB_APP_URL;
const APPS_SCRIPT_SPREADSHEET_ID = window.UFCD0693_SPREADSHEET_ID || DEFAULT_APPS_SCRIPT_SPREADSHEET_ID;

const activities = [
  {
    id: "controlo-teams",
    title: "Partilha de ecrã",
    menuTitle: "Partilha de ecrã",
    intro: "Tabela simples para acompanhar quantas vezes cada formando já partilhou o ecrã nas reuniões Teams.",
    url: "atividades/controlo-teams.html"
  },
  {
    id: "brainstorming",
    title: "Brainstorming",
    intro: "Atividade inicial para recolher ideias, expectativas e conhecimentos prévios antes de aprofundar os conteúdos.",
    url: "atividades/brainstorming.html",
    focus: "Exploração inicial",
    duration: "30 a 45 minutos",
    product: "Mapa inicial com expectativas, dúvidas e conhecimentos prévios sobre correio eletrónico, organização digital e pesquisa na web.",
    mentimeterUrl: "https://www.mentimeter.com/app/presentation/alrxyowitp4y7uzqu57vfi6txose8977/embed",
    participationUrl: "https://www.menti.com/al7y28mtmwqm",
    padletUrl: "https://padlet.com/embed/6w91ggh9dum7qhle",
    qrCode: "assets/img/mentimeter_qr_code_0693.png",
    steps: [
      {
        title: "Apresentação da UFCD",
        text: "Identificar o objetivo, a duração e a organização geral da formação."
      },
      {
        title: "Expectativas dos formandos",
        text: "Recolher ideias sobre o que cada pessoa espera aprender ou melhorar."
      },
      {
        title: "Conhecimentos prévios",
        text: "Perceber experiências anteriores com correio eletrónico, agenda eletrónica, organização de documentos e pesquisa na web."
      },
      {
        title: "Mapa inicial de temas",
        text: "Organizar contributos em torno de comunicação digital, gestão de documentos, agenda eletrónica e pesquisa online."
      },
      {
        title: "Síntese e próximos passos",
        text: "Registar conclusões iniciais e preparar a passagem para os primeiros conteúdos."
      }
    ],
    evidence: [
      "Lista de ideias recolhidas",
      "Dúvidas iniciais identificadas",
      "Temas que exigem maior acompanhamento"
    ]
  },
  {
    id: "tarefas-grupo",
    title: "Tarefas de Grupo",
    intro: "Em cada atividade diária, a tarefa de grupo serve para construir vocabulário técnico no glossário colaborativo.",
    url: "atividades/tarefas-grupo.html",
    focus: "Tarefa de grupo",
    duration: "A definir pelo formador",
    product: "Definição simples e exemplo prático para a palavra atribuída à sala.",
    steps: [
      {
        title: "Organização do grupo",
        text: "Distribuir funções simples: recolha de dados, registo, revisão e apresentação."
      },
      {
        title: "Tarefa de glossário",
        text: "Criar uma definição simples, por palavras próprias, para o termo atribuído à sala."
      },
      {
        title: "Exemplo prático",
        text: "Acrescentar um exemplo simples ligado à utilização diária de ferramentas digitais."
      },
      {
        title: "Preparação da apresentação",
        text: "Organizar a explicação do processo seguido e das decisões tomadas pelo grupo."
      },
      {
        title: "Partilha e revisão",
        text: "Apresentar a tarefa realizada, ouvir comentários e ajustar o produto final quando necessário."
      }
    ],
    evidence: [
      "Ficheiro ou registo produzido pelo grupo",
      "Breve síntese das decisões tomadas",
      "Participação dos elementos do grupo"
    ]
  },
  {
    id: "tarefas-individuais",
    title: "Tarefas Individuais",
    intro: "Em cada atividade diária, a tarefa individual serve para consolidar a aprendizagem e produzir evidências da tarefa realizada.",
    url: "atividades/tarefas-individuais.html",
    focus: "Tarefa individual",
    duration: "A definir pelo formador",
    product: "Evidência individual guardada na Drive, no Padlet ou no espaço indicado no Moodle, conforme a tarefa do dia.",
    steps: [
      {
        title: "Leitura da tarefa",
        text: "Confirmar o objetivo, os dados a utilizar e o resultado esperado."
      },
      {
        title: "Execução prática",
        text: "Aplicar procedimentos de criação, edição, formatação, organização ou manutenção de dados."
      },
      {
        title: "Verificação",
        text: "Rever se o ficheiro, registo ou resposta cumpre o pedido da tarefa."
      },
      {
        title: "Síntese individual",
        text: "Registar dificuldades, soluções encontradas e aspetos a melhorar."
      }
    ],
    evidence: [
      "Ficheiro ou resposta individual",
      "Registo das etapas realizadas",
      "Síntese curta da aprendizagem"
    ]
  },
  {
    id: "projeto-final-apresentacao",
    title: "Projeto Final — Do Click ao Guardar",
    menuTitle: "Projeto Final",
    intro: "Construção progressiva de um Padlet individual com as evidências e reflexões das Tarefas Individuais.",
    url: "atividades/projeto-final-apresentacao.html",
    focus: "Projeto Final em Padlet",
    duration: "Ao longo da UFCD",
    product: "Padlet individual em formato Colunas, organizado como Projeto Final da UFCD 0693.",
    steps: [
      {
        title: "Criar a conta Google",
        text: "Criar ou usar uma conta Google no formato nome+numeroIEFP@gmail.com antes de criar o Padlet."
      },
      {
        title: "Criar o Padlet",
        text: "Criar um Padlet individual em formato Colunas, com título no formato nomeNºIefp."
      },
      {
        title: "Registar expetativas",
        text: "Adicionar um primeiro post com 3 a 5 frases sobre o que espera aprender na UFCD."
      },
      {
        title: "Organizar evidências",
        text: "Criar uma coluna por tarefa e publicar as respetivas evidências, explicações e reflexões."
      },
      {
        title: "Partilhar no Moodle",
        text: "Publicar o link no fórum indicado, evitando anexos quando essa for a orientação da tarefa."
      },
      {
        title: "Atualizar ao longo da formação",
        text: "Atualizar o Projeto Final ao longo da UFCD e verificar, no final, a organização e o funcionamento das ligações."
      }
    ],
    evidence: [
      "Link do Padlet individual",
      "Posts de expetativas e reflexão",
      "Evidências das tarefas realizadas",
      "Organização clara por colunas"
    ]
  }
];

const evaluations = [
  {
    id: "avaliacao-diagnostica",
    title: "Avaliação Diagnóstica",
    menuTitle: "Diagnóstica",
    intro: "Espaço preparado para avaliação inicial dos conhecimentos sobre correio eletrónico, organização digital e pesquisa na web.",
    url: "avaliacoes/avaliacao-diagnostica.html",
    children: ["resultados-diagnostica"],
    embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0693/00-diagnostico.html",
    embedTitle: "DIAG_1"
  },
  {
    id: "resultados-diagnostica",
    parentId: "avaliacao-diagnostica",
    title: "Resultados da Avaliação Diagnóstica",
    menuTitle: "Resultados",
    intro: "Relatório com a leitura global das respostas recolhidas na avaliação diagnóstica.",
    url: "avaliacoes/resultados-diagnostica.html"
  },
  {
    id: "avaliacao-sumativa",
    title: "Avaliação Sumativa",
    menuTitle: "Sumativa",
    intro: "Espaço preparado para a avaliação final das aprendizagens da UFCD.",
    url: "avaliacoes/avaliacao-sumativa.html",
    embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0693/02-sumativa.html",
    embedTitle: "SUM_1"
  },
  {
    id: "autoavaliacao-final",
    title: "Autoavaliação Final",
    menuTitle: "Autoavaliação",
    intro: "Espaço preparado para reflexão final sobre competências adquiridas.",
    url: "avaliacoes/autoavaliacao-final.html",
    embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0693/04-autoavaliacao-final.html",
    embedTitle: "AUTO_1"
  },
  {
    id: "avaliacao-entre-pares",
    title: "Avaliação Entre Pares",
    menuTitle: "Entre Pares",
    intro: "Espaço preparado para avaliação entre pares.",
    url: "avaliacoes/avaliacao-entre-pares.html",
    embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0693/03-entre-pares.html",
    embedTitle: "Avaliação colaborativa"
  },
  {
    id: "avaliacao-formacao",
    title: "Avaliação da Formação",
    menuTitle: "Formação",
    intro: "Espaço preparado para avaliação da formação.",
    url: "avaliacoes/avaliacao-formacao.html",
    embedUrl: "https://avaliacoes-formacao.netlify.app/avaliacao-formacao.html?codigo_ufcd=0693",
    embedTitle: "Avaliação final da formação"
  }
];

const groupTasks = [
  {
    title: "TG Dia 1 - Conceitos gerais",
    topic: "Conceitos gerais",
    url: "atividades/tarefas-grupo.html",
    intro: "Construir definições simples para conceitos gerais ligados à comunicação e organização digital.",
    words: [
      ["Pesquisa on-line", "Sala 1"],
      ["Documento digital", "Sala 2"],
      ["Correio eletrónico", "Sala 3"],
      ["Agenda eletrónica", "Sala 4"]
    ]
  },
  {
    title: "TG Dia 2 - Pesquisa Web",
    topic: "Pesquisa Web",
    url: "atividades/tarefas-grupo.html",
    intro: "Clarificar vocabulário essencial para pesquisar informação na web e avaliar resultados.",
    words: [
      ["Motor de pesquisa", "Sala 1"],
      ["Palavra-chave", "Sala 2"],
      ["Fonte de informação", "Sala 3"],
      ["Fiabilidade", "Sala 4"]
    ]
  },
  {
    title: "TG Dia 3 - Organização Digital",
    topic: "Organização Digital",
    url: "atividades/tarefas-grupo.html",
    intro: "Registar conceitos ligados à organização de ficheiros, pastas e arquivo digital.",
    words: [
      ["Pasta", "Sala 1"],
      ["Subpasta", "Sala 2"],
      ["Nomeação de ficheiros", "Sala 3"],
      ["Arquivo digital", "Sala 4"]
    ]
  },
  {
    title: "TG Dia 4 - Agenda Eletrónica",
    topic: "Agenda Eletrónica",
    url: "atividades/tarefas-grupo.html",
    intro: "Definir conceitos úteis para criar e gerir compromissos numa agenda eletrónica.",
    words: [
      ["Evento", "Sala 1"],
      ["Lembrete", "Sala 2"],
      ["Tarefa", "Sala 3"],
      ["Recorrência", "Sala 4"]
    ]
  },
  {
    title: "TG Dia 5 - Correio Eletrónico",
    topic: "Correio Eletrónico",
    url: "atividades/tarefas-grupo.html",
    intro: "Explorar termos essenciais para criar uma mensagem de correio eletrónico corretamente.",
    words: [
      ["Destinatário", "Sala 1"],
      ["Assunto", "Sala 2"],
      ["CC", "Sala 3"],
      ["BCC/CCO", "Sala 4"]
    ]
  },
  {
    title: "TG Dia 6 - Gestão de Mensagens",
    topic: "Gestão de Mensagens",
    url: "atividades/tarefas-grupo.html",
    intro: "Definir conceitos relacionados com a organização, segurança e circulação de mensagens eletrónicas.",
    words: [
      ["Arquivar", "Sala 1"],
      ["Reencaminhar", "Sala 2"],
      ["Spam", "Sala 3"],
      ["Phishing", "Sala 4"]
    ]
  },
  {
    title: "TG Dia 7 - Revisão final",
    topic: "Revisão final",
    url: "atividades/tarefas-grupo.html",
    intro: "Fechar o glossário com conceitos de revisão ligados à organização, pesquisa, tempo e segurança.",
    words: [
      ["Organização digital", "Sala 1"],
      ["Informação fiável", "Sala 2"],
      ["Gestão do tempo", "Sala 3"],
      ["Segurança da informação", "Sala 4"]
    ]
  }
];

const glossaryUrl = "https://fad.iefp.pt/mod/glossary/view.php?id=412744";

const individualTasks = [
  {
    id: "tarefa-individual-1",
    pdfUrl: "assets/pdfs/TI1.pdf",
    url: "atividades/tarefas-individuais.html",
    forumUrl: "https://fad.iefp.pt/mod/forum/discuss.php?d=55427",
    title: "TI 1 - Avaliação diagnóstica e Padlet individual",
    intro: "Avaliação diagnóstica + criação de Padlet individual (formato Colunas) com expetativas iniciais.",
    evidence: "Publica o link do Padlet no Fórum “Padlets individuais” do Moodle, sem anexos.",
    locked: true,
    prompts: [
      "Cria ou usa uma conta Google no formato nome+numeroIEFP@gmail.com.",
      "Realiza a avaliação diagnóstica indicada pela formadora.",
      "Cria um Padlet individual em formato Colunas.",
      "Dá ao Padlet um título no formato nomeNºIefp.",
      "Cria pelo menos a coluna Expectativas.",
      "Adiciona um primeiro post com 3 a 5 frases sobre o que esperas aprender.",
      "Partilha o Padlet com permissão para escrever e copia o link."
    ]
  },
  {
    id: "tarefa-individual-2",
    pdfUrl: "assets/pdfs/TI2.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI 2 - Organização digital da ação na Google Drive",
    intro: "Completar a estrutura de pastas da ação 26109, guardá-la na Google Drive e registar a organização no Padlet e no Moodle.",
    context: [
      "Ao longo da ação serão produzidos documentos, atividades e evidências associados a diferentes UFCD. Para evitar ficheiros dispersos ou difíceis de localizar, será utilizada uma estrutura comum de pastas.",
      "A numeração permite manter as UFCD pela ordem em que são realizadas. A Google Drive permite guardar a estrutura na conta da formação, aceder-lhe a partir de diferentes equipamentos e continuar a mesma lógica nas UFCD seguintes."
    ],
    objective: "Criar e completar uma estrutura de pastas para organizar os documentos da ação 26109 e guardá-la na Google Drive pessoal.",
    tools: ["Conta Google criada na sessão anterior", "Explorador de ficheiros", "Google Drive", "Padlet individual", "Moodle"],
    steps: [
      { title: "Confirmar a estrutura na Google Drive", items: ["Inicia sessão na conta Google da formação e abre a Google Drive.", "Confirma que a pasta 26109 está disponível em “O meu disco”.", "Verifica se contém 01-0753, 02-0693 e 03-0754.", "Se alguma pasta estiver em falta, cria-a antes de continuar."], code: ["26109", "├── 01-0753", "├── 02-0693", "└── 03-0754"] },
      { title: "Organizar a pasta da UFCD atual", text: "Dentro de 02-0693, cria as subpastas abaixo. Conteúdos destina-se aos materiais disponibilizados; Atividades aos ficheiros em desenvolvimento; Evidências às versões finais e capturas.", code: ["02-0693", "├── 01-Conteúdos", "├── 02-Atividades", "└── 03-Evidências"] },
      { title: "Acrescentar um ficheiro", items: ["Escolhe um ficheiro relacionado com a formação.", "Confirma se o nome identifica o conteúdo e, se necessário, renomeia-o.", "Coloca-o na subpasta adequada e confirma que abre corretamente na Google Drive."] }
    ],
    expected: ["Pasta 26109 disponível na conta Google correta.", "Pastas 01-0753, 02-0693 e 03-0754.", "Subpastas Conteúdos, Atividades e Evidências dentro de 02-0693.", "Pelo menos um ficheiro colocado na subpasta adequada."],
    files: ["Faz uma captura da pasta 26109 e outra do interior de 02-0693.", "Oculta ficheiros pessoais ou outros dados privados.", "Guarda em 26109/02-0693/03-Evidências.", "Nomes sugeridos: TI2_Estrutura_Acao_Nome.png e TI2_Pasta_0693_Nome.png."],
    padlet: { column: "TI 2 — Organização digital da ação", post: "Organização da minha Google Drive", items: ["Inclui uma ou duas capturas.", "Explica a lógica de organização e a utilidade da numeração.", "Indica a vantagem de guardar a pasta na Drive.", "Refere como poderás continuar a estrutura nas próximas UFCD.", "Escreve aproximadamente 100 a 150 palavras."] },
    moodle: "No Fórum da TI 2, confirma a realização e indica que estrutura criaste, que subpastas acrescentaste, onde guardaste a pasta, qual foi a principal vantagem e se sentiste alguma dificuldade. Termina com a ligação para o Padlet. Não anexes ficheiros.",
    checklist: ["A pasta 26109 está na conta Google correta.", "As três pastas das UFCD estão criadas.", "02-0693 contém as três subpastas.", "Existe pelo menos um ficheiro na subpasta adequada.", "As capturas estão guardadas em 03-Evidências.", "A coluna e o post da TI 2 estão no Padlet.", "A resposta foi publicada no Moodle e a ligação funciona."]
  },
  {
    id: "tarefa-individual-3",
    pdfUrl: "assets/pdfs/TI3.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI 3 - Organização da formação no Google Calendar",
    intro: "Criar um calendário para a ação, registar eventos e tarefas, configurar notificações e associar um ficheiro da Google Drive.",
    context: ["Uma agenda eletrónica permite reunir compromissos, tarefas, prazos e documentos num único espaço. Nesta tarefa, o Google Calendar será utilizado para organizar a formação e será ligado à estrutura criada na Google Drive."],
    objective: "Criar um calendário para a ação 26109, registar eventos e tarefas, configurar notificações e associar um ficheiro da Google Drive a um evento.",
    tools: ["Conta Google da formação", "Google Calendar", "Google Drive com a pasta 26109/02-0693", "Padlet individual", "Moodle"],
    preparation: ["Confirma que estás na conta Google correta.", "Verifica se existe pelo menos um ficheiro em 26109/02-0693.", "Evita utilizar compromissos pessoais reais nas capturas."],
    steps: [
      { title: "Criar o calendário", items: ["Cria um novo calendário com o nome Ação 26109.", "Adiciona uma descrição relacionada com as sessões, tarefas e compromissos da ação.", "Escolhe uma cor para identificar os eventos da formação."] },
      { title: "Criar os eventos", text: "Cria pelo menos cinco eventos relacionados com a formação: sessão, realização de uma TI, revisão de conteúdos, organização de evidências ou verificação do Moodle.", items: ["Preenche título, data, hora e descrição.", "Indica “On-line” quando adequado.", "Aplica a cor do calendário da ação.", "Configura uma notificação em pelo menos dois eventos."] },
      { title: "Explorar funcionalidades", items: ["Cria um evento recorrente, se o horário o permitir.", "Edita um evento depois de o guardar e altera a data ou a hora.", "Cria uma tarefa com prazo e experimenta marcá-la como concluída."] },
      { title: "Associar um ficheiro da Drive", items: ["Abre um evento e seleciona Editar ou Mais opções.", "Na área da descrição, adiciona um anexo da Google Drive.", "Abre 26109/02-0693, seleciona um ficheiro e guarda o evento.", "Confirma que o ficheiro abre a partir do Calendar."] }
    ],
    note: "Se o evento não tiver convidados, o ficheiro mantém-se privado. Antes de publicar capturas, oculta eventos pessoais, endereços e outros dados privados.",
    expected: ["Calendário Ação 26109 criado e identificado por uma cor.", "Pelo menos cinco eventos.", "Notificações configuradas.", "Um evento recorrente e uma tarefa.", "Um ficheiro da Drive associado a um evento."],
    files: ["Captura 1: vista do calendário com os eventos.", "Captura 2: detalhe de um evento com descrição, notificação e ficheiro associado.", "Guarda em 26109/02-0693/03-Evidências com nomes TI3_Calendario_Nome.png e TI3_Evento_Drive_Nome.png."],
    padlet: { column: "TI 3 — Agenda eletrónica", post: "Organização da formação no Google Calendar", items: ["Inclui as duas capturas.", "Explica como organizaste os eventos.", "Refere a utilidade das cores e notificações.", "Distingue evento de tarefa.", "Explica a vantagem de associar um ficheiro da Drive.", "Escreve aproximadamente 100 a 150 palavras."] },
    moodle: "Confirma que criaste o calendário, os eventos, as notificações, a tarefa e a associação à Drive. Indica a funcionalidade mais útil e acrescenta a ligação para o Padlet. Não anexes ficheiros.",
    checklist: ["O calendário Ação 26109 foi criado.", "Existem pelo menos cinco eventos.", "Foram configuradas notificações.", "Existe um evento recorrente e uma tarefa.", "Um ficheiro da Drive está associado a um evento.", "As capturas não mostram dados privados.", "A coluna da TI 3 e o registo no Moodle estão completos."]
  },
  {
    id: "tarefa-individual-4",
    pdfUrl: "assets/pdfs/TI4.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI 4 - Comunicação profissional através do Gmail",
    intro: "Enviar uma mensagem profissional a um/a colega do grupo, partilhar um ficheiro da Drive, receber uma mensagem e responder.",
    context: ["O correio eletrónico é uma ferramenta de comunicação profissional. Cada formando/a envia uma mensagem a um/a colega do grupo, recebe uma mensagem de outro/a colega e responde a confirmar a receção."],
    objective: "Criar, enviar, receber e responder a uma mensagem profissional, confirmando o destinatário, o assunto, o conteúdo e o acesso ao ficheiro partilhado.",
    tools: ["Gmail da conta Google da formação", "Google Drive", "Ficheiro em 26109/02-0693/03-Evidências", "Padlet individual", "Moodle"],
    preparation: ["A formadora organiza o envio em cadeia dentro de cada grupo, garantindo que todos enviam e recebem uma mensagem.", "Confirma o endereço do/a colega antes de escrever.", "Seleciona uma evidência da TI 2 ou TI 3 e verifica se não contém dados pessoais visíveis."],
    steps: [
      { title: "Criar a mensagem", items: ["No Gmail, escolhe Compor e introduz o endereço confirmado do/a colega.", "Usa o assunto: Ação 26109 | TI 4 — Partilha de evidência.", "Inclui saudação, enquadramento, indicação do ficheiro, pedido de confirmação, despedida e nome."] },
      { title: "Inserir o ficheiro da Google Drive", items: ["Seleciona Inserir ficheiros com o Drive.", "Abre 26109/02-0693/03-Evidências e escolhe o ficheiro.", "Insere como ligação da Drive ou anexo, conforme a opção disponível.", "Confirma as permissões, se surgir um aviso."] },
      { title: "Verificar e enviar", items: ["Confirma o endereço, o assunto, a clareza da mensagem, o nome do ficheiro e a presença do anexo ou ligação.", "Envia e verifica a mensagem na pasta Enviados."] },
      { title: "Receber e responder", items: ["Abre a mensagem recebida de outro/a colega do grupo.", "Confirma se o ficheiro pode ser aberto.", "Responde a confirmar a receção e o acesso ao ficheiro."] },
      { title: "Conhecer CC e CCO", text: "A formadora demonstra a diferença entre CC e CCO. A exploração pode ser feita numa mensagem guardada como rascunho, sem necessidade de enviar endereços adicionais." }
    ],
    note: "Modelo orientador: “Olá, [nome]. No âmbito da TI 4 da ação 26109, envio uma evidência de uma atividade realizada na UFCD 0693. Agradeço que confirmes a receção e indiques se conseguiste abrir o ficheiro. Com os melhores cumprimentos, [nome].” O texto deve ser adaptado.",
    files: ["Captura da mensagem na pasta Enviados.", "Captura da resposta recebida.", "Oculta endereços e outros dados pessoais.", "Guarda em 26109/02-0693/03-Evidências."],
    padlet: { column: "TI 4 — Comunicação profissional", post: "Envio e receção de uma mensagem profissional", items: ["Inclui as capturas tratadas.", "Explica os cuidados aplicados antes do envio.", "Refere a diferença entre anexo e ligação da Drive.", "Indica a utilidade do assunto e da confirmação da receção.", "Regista a principal aprendizagem ou dificuldade."] },
    moodle: "Confirma que enviaste, recebeste e respondeste a uma mensagem profissional e que partilhaste um ficheiro da Drive. Acrescenta uma breve aprendizagem e a ligação para o Padlet, sem anexos.",
    checklist: ["O destinatário pertence ao grupo e foi confirmado.", "A mensagem tem assunto e estrutura profissional.", "O ficheiro foi inserido a partir da Drive.", "A mensagem aparece em Enviados.", "A mensagem recebida e o ficheiro foram verificados.", "Foi enviada uma resposta de confirmação.", "Os dados pessoais foram ocultados nas capturas.", "Padlet e Moodle estão atualizados."]
  },
  {
    id: "tarefa-individual-5",
    pdfUrl: "assets/pdfs/TI5.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI 5 - Gestão da caixa de correio no Gmail",
    intro: "Organizar e gerir as mensagens da TI 4 com etiquetas, filtro, arquivo, reencaminhamento, eliminação e recuperação.",
    context: ["Depois de criar, enviar e receber mensagens, é necessário organizar a caixa de correio. As mensagens da TI 4 serão utilizadas para experimentar as principais operações de gestão."],
    objective: "Aplicar procedimentos de organização e gestão de mensagens no Gmail, utilizando exemplos produzidos durante a formação.",
    tools: ["Gmail da conta da formação", "Mensagens da TI 4", "Google Drive", "Padlet individual", "Moodle"],
    steps: [
      { title: "Criar etiquetas", items: ["Cria a etiqueta principal 26109.", "Dentro dela, cria a etiqueta subordinada 02-0693.", "Aplica 02-0693 às mensagens enviadas e recebidas na TI 4."], code: ["26109", "└── 02-0693"] },
      { title: "Destacar uma mensagem", items: ["Seleciona uma mensagem da TI 4.", "Marca-a com estrela e confirma que aparece em Com estrela."] },
      { title: "Criar um filtro", items: ["Cria um filtro pelo assunto Ação 26109 ou TI 4, ou pelo endereço de um/a colega do grupo.", "Configura-o para aplicar automaticamente a etiqueta 02-0693.", "Seleciona Nunca marcar como spam, se a opção estiver disponível."] },
      { title: "Arquivar e localizar", items: ["Arquiva uma mensagem da TI 4.", "Confirma que sai da caixa de entrada.", "Localiza-a através da etiqueta ou pesquisa e volta a colocá-la na caixa de entrada."] },
      { title: "Reencaminhar", text: "Reencaminha uma mensagem da TI 4 para outro/a colega do grupo. Antes do conteúdo reencaminhado, explica que se trata de uma demonstração da TI 5 e que não é necessária ação adicional." },
      { title: "Eliminar e recuperar", items: ["Cria ou utiliza uma mensagem de teste sem informação importante.", "Envia-a para o Lixo.", "Abre o Lixo, recupera a mensagem e confirma onde ficou disponível.", "Se adequado, elimina-a definitivamente no final."] }
    ],
    note: "Não utilizes mensagens pessoais, importantes ou com informação confidencial para demonstrar eliminação e recuperação.",
    expected: ["Etiquetas 26109 e 02-0693.", "Mensagens classificadas.", "Um filtro automático.", "Uma mensagem destacada.", "Procedimentos de arquivo, localização, reencaminhamento, eliminação e recuperação realizados."],
    files: ["Captura das etiquetas e mensagens organizadas.", "Captura das condições e ações do filtro, sem expor endereços.", "Breve registo dos procedimentos realizados.", "Guarda em 26109/02-0693/03-Evidências."],
    padlet: { column: "TI 5 — Gestão da caixa de correio", post: "Organização da minha caixa de correio", items: ["Inclui as capturas necessárias.", "Explica a utilidade das etiquetas e do filtro.", "Descreve como localizaste uma mensagem arquivada.", "Indica os cuidados antes de eliminar ou reencaminhar mensagens."] },
    moodle: "Confirma que criaste etiquetas e filtro e que praticaste arquivo, reencaminhamento, eliminação e recuperação. Indica a funcionalidade mais útil e acrescenta a ligação para o Padlet, sem anexos.",
    checklist: ["As etiquetas estão criadas e aplicadas.", "O filtro tem critérios e ações corretos.", "Uma mensagem foi marcada com estrela.", "O arquivo e a localização foram testados.", "O reencaminhamento inclui contexto.", "A eliminação foi feita apenas com mensagem de teste.", "As capturas protegem os dados pessoais.", "Padlet e Moodle estão atualizados."]
  },
  {
    id: "tarefa-individual-6",
    pdfUrl: "assets/pdfs/TI6.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI 6 - Pesquisa avançada e validação da informação",
    intro: "Realizar pesquisas avançadas, comparar resultados, selecionar fontes e justificar a avaliação da sua fiabilidade.",
    context: ["Pesquisar não é apenas escrever palavras num motor de pesquisa. É necessário formular expressões adequadas, usar operadores, comparar resultados e avaliar se as fontes são atuais, pertinentes e fiáveis."],
    objective: "Realizar pesquisas avançadas, registar as estratégias utilizadas, selecionar fontes relevantes e justificar a avaliação da sua fiabilidade.",
    tools: ["Conta Google da formação", "Motor de pesquisa Google", "Google Docs", "Google Drive", "Padlet individual", "Moodle"],
    steps: [
      { title: "Criar o documento de trabalho", items: ["Abre 26109/02-0693/02-Atividades.", "Cria um Documento Google com o nome TI6_Pesquisa_Avancada_Nome.", "Inclui tema, expressões, fontes, avaliação da fiabilidade e conclusão."] },
      { title: "Escolher um tema", text: "Escolhe um tema relacionado com segurança no correio eletrónico, phishing, organização digital, armazenamento na nuvem, proteção de dados ou utilização profissional da Google Drive." },
      { title: "Realizar as pesquisas", text: "Realiza pelo menos três pesquisas, usando operadores ou estratégias diferentes, e compara uma pesquisa simples com outra mais restrita.", code: ["“identificar phishing”", "“identificar phishing” site:cncs.gov.pt", "phishing filetype:pdf"] },
      { title: "Registar e avaliar as fontes", text: "Para cada pesquisa, regista expressão, título e ligação, entidade ou autor, data, informação relevante e motivo pelo qual a fonte parece fiável ou pouco fiável.", items: ["Autoria ou entidade responsável.", "Atualidade da informação.", "Objetivo e possível intenção da página.", "Existência de referências.", "Coerência com outras fontes credíveis.", "Pertinência para o tema."] },
      { title: "Escrever a conclusão", text: "Escreve 100 a 150 palavras sobre a pesquisa mais útil, o operador que mais ajudou, os critérios de fiabilidade e os cuidados antes de utilizar ou partilhar informação." },
      { title: "Guardar a evidência", items: ["Confirma que o Documento Google está em 26109/02-0693/02-Atividades.", "Transfere ou guarda uma cópia em PDF.", "Coloca o PDF em 26109/02-0693/03-Evidências com o nome TI6_Pesquisa_Avancada_Nome.pdf."] }
    ],
    padlet: { column: "TI 6 — Pesquisa avançada", post: "Pesquisa e validação da informação", items: ["Inclui uma captura do Documento Google.", "Regista as três expressões.", "Apresenta as fontes selecionadas e uma breve avaliação.", "Inclui a conclusão.", "Adiciona a ligação para o documento apenas se as permissões estiverem corretas."] },
    moodle: "Indica o tema, as estratégias utilizadas, a principal diferença entre pesquisa simples e avançada e o critério de fiabilidade mais importante. Acrescenta a ligação para o Padlet, sem anexos.",
    checklist: ["O Documento Google está em 02-Atividades.", "Foram realizadas pelo menos três pesquisas.", "As expressões e fontes estão registadas.", "A fiabilidade foi justificada.", "A conclusão tem 100 a 150 palavras.", "O PDF está em 03-Evidências.", "As permissões foram verificadas.", "Padlet e Moodle estão atualizados."]
  },
  {
    id: "tarefa-individual-7",
    pdfUrl: "assets/pdfs/TI7.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI 7 - Autoavaliação, reflexão final e organização das evidências",
    intro: "Rever o percurso, concluir o Projeto Final, realizar as avaliações finais e refletir sobre as aprendizagens.",
    context: ["A última tarefa permite rever o percurso, avaliar as aprendizagens e concluir o Projeto Final. Antes da reflexão, é necessário confirmar que a Google Drive e o Padlet estão organizados e que as evidências podem ser consultadas."],
    objective: "Realizar a autoavaliação, organizar as evidências finais e refletir sobre as competências desenvolvidas e a sua aplicação no dia a dia.",
    tools: ["Google Drive", "Padlet individual", "Moodle", "Instrumento de autoavaliação final", "Avaliação da formação"],
    steps: [
      { title: "Rever a Google Drive", items: ["Abre 26109/02-0693.", "Confirma as subpastas Conteúdos, Atividades e Evidências.", "Verifica os nomes dos ficheiros e elimina duplicações desnecessárias.", "Confirma que os ficheiros finais abrem."] },
      { title: "Rever o Padlet", items: ["Confirma que existe uma coluna para cada TI.", "Verifica se cada coluna contém evidência, explicação e reflexão.", "Corrige títulos, imagens ilegíveis, ligações e dados pessoais visíveis.", "Ordena as colunas pela sequência das tarefas."] },
      { title: "Realizar as avaliações finais", items: ["Preenche a autoavaliação final indicada pela formadora.", "Preenche a avaliação da formação.", "Confirma a submissão antes de fechar cada formulário."] },
      { title: "Escrever a reflexão final", text: "Escreve uma reflexão curta, clara e pessoal.", items: ["O que aprendeste sobre organização digital, agenda, correio eletrónico e pesquisa?", "Que tarefa foi mais útil e porquê?", "Que dificuldade sentiste e como a ultrapassaste?", "Como aplicarás estas competências?", "Que competência gostarias de continuar a desenvolver?"] },
      { title: "Concluir e verificar a partilha", items: ["Publica a reflexão na coluna TI 7.", "Confirma que a ligação geral do Padlet funciona numa janela privada ou noutro navegador.", "Mantém o Padlet disponível para futura partilha no e-portefólio da ação."] }
    ],
    expected: ["Padlet completo e organizado.", "Reflexão final publicada.", "Autoavaliação e avaliação da formação submetidas.", "Ligação funcional registada no Moodle."],
    padlet: { column: "TI 7 — Autoavaliação e reflexão final", post: "Reflexão final", items: ["Inclui a reflexão final.", "Confirma a organização das restantes colunas.", "Verifica imagens, textos, ligações e proteção de dados pessoais."] },
    moodle: "Publica a reflexão final no Fórum indicado ou, se existir um espaço específico, confirma a conclusão e acrescenta a ligação para o Padlet. Não anexes novamente as evidências já organizadas no Projeto Final.",
    checklist: ["A pasta 02-0693 está organizada.", "Todos os ficheiros finais abrem.", "Existe uma coluna do Padlet para cada TI.", "As evidências estão legíveis e sem dados pessoais.", "As reflexões estão completas.", "A autoavaliação foi submetida.", "A avaliação da formação foi submetida.", "A reflexão final foi publicada.", "A ligação para o Padlet funciona."]
  }
];

const resources = [
  {
    id: "manual",
    title: "Manual de formação",
    intro: "Manual da UFCD 0693 para consulta e descarregamento.",
    url: "recursos/manual.html",
    pdfUrl: "Manual/Manual_Formacao_UFCD_0693.pdf"
  }
];

const mainMenuItems = [
  { key: "inicio", label: "Início" },
  { key: "objetivos", label: "Objetivos" },
  { key: "metodologia", label: "Metodologia" },
  { key: "conteudos", label: "Conteúdos" },
  { key: "atividades", label: "Atividades" },
  { key: "avaliacao", label: "Avaliação" },
  { key: "recursos", label: "Recursos" },
  { key: "eportfolio", label: "Site dos E-Portefólios" }
];

const siteVisibility = {
  menuPrincipal: Object.fromEntries(mainMenuItems.map((item) => [item.key, true])),
  conteudos: Object.fromEntries(topics.map((topic) => [topic.id, true])),
  atividades: Object.fromEntries(activities.map((activity) => [activity.id, true])),
  avaliacao: Object.fromEntries(evaluations.map((evaluation) => [evaluation.id, true])),
  recursos: Object.fromEntries(resources.map((resource) => [resource.id, true])),
  ficheirosExcel: Object.fromEntries(resources.flatMap((resource) => [...(resource.videos || []), ...(resource.downloadFiles || [])]).map((file) => [file.id, true])),
  assistentesGpt: Object.fromEntries(resources.filter((resource) => resource.gptUrl).map((resource) => [resource.id, true])),
  tarefasGrupo: Object.fromEntries(groupTasks.map((task) => [task.title, true])),
  tarefasIndividuais: Object.fromEntries(individualTasks.map((task) => [task.title, true]))
};

const siteVisibilitySections = {
  menuPrincipal: true,
  conteudos: true,
  atividades: true,
  avaliacao: true,
  recursos: true,
  ficheirosExcel: true,
  assistentesGpt: true,
  tarefasGrupo: true,
  tarefasIndividuais: true
};

const siteVisibilitySectionMeta = {
  menuPrincipal: { secao: "menu_principal", chave: "secao-menu-principal", titulo: "Menu principal", tipo: "secao", ordem: 1 },
  conteudos: { secao: "conteudos", chave: "secao-conteudos", titulo: "Conteúdos", tipo: "secao", ordem: 10 },
  atividades: { secao: "atividades", chave: "secao-atividades", titulo: "Atividades", tipo: "secao", ordem: 20 },
  avaliacao: { secao: "avaliacao", chave: "secao-avaliacao", titulo: "Avaliação", tipo: "secao", ordem: 30 },
  recursos: { secao: "recursos", chave: "secao-recursos", titulo: "Recursos", tipo: "secao", ordem: 40 },
  ficheirosExcel: { secao: "ficheiros_excel", chave: "secao-ficheiros-excel", titulo: "Ficheiros Excel", tipo: "secao", ordem: 45 },
  assistentesGpt: { secao: "assistentes_gpt", chave: "secao-assistentes-gpt", titulo: "Assistentes GPT", tipo: "secao", ordem: 48 },
  tarefasGrupo: { secao: "tarefas_grupo", chave: "secao-tarefas-grupo", titulo: "Tarefas de grupo", tipo: "secao", ordem: 50 },
  tarefasIndividuais: { secao: "tarefas_individuais", chave: "secao-tarefas-individuais", titulo: "Tarefas individuais", tipo: "secao", ordem: 60 }
};

const SITE_VISIBILITY_STORAGE_KEY = "ufcd0693-site-visibility-v1";
const SITE_LINKS_STORAGE_KEY = "ufcd0693-site-links-v1";
const APPS_SCRIPT_SPREADSHEET_GID = "1240441816";
let siteControlItems = [];
let siteControlItemsBuilding = false;
let siteVisibilityRemoteLoaded = false;
let siteVisibilityRemoteLoading = null;

const siteLinks = {
  gammas: Object.fromEntries(topics.map((topic) => [topic.id, topic.gammaUrl || ""])),
  glossaryUrl,
  forums: {}
};

function getBasePath() {
  const path = window.location.pathname;
  return path.includes("/conteudos/") || path.includes("/atividades/") || path.includes("/avaliacoes/") || path.includes("/recursos/") ? "../" : "";
}

function construirUrlEmbedAvaliacao(embedUrl) {
  if (!embedUrl || !APPS_SCRIPT_SPREADSHEET_ID) return embedUrl;

  try {
    const url = new URL(embedUrl, window.location.href);
    url.searchParams.set("spreadsheet_id", APPS_SCRIPT_SPREADSHEET_ID);
    url.searchParams.set("spreadsheetId", APPS_SCRIPT_SPREADSHEET_ID);
    url.searchParams.set("gid", APPS_SCRIPT_SPREADSHEET_GID);
    url.searchParams.set("spreadsheet_gid", APPS_SCRIPT_SPREADSHEET_GID);
    return url.toString();
  } catch (error) {
    const separator = embedUrl.includes("?") ? "&" : "?";
    return `${embedUrl}${separator}spreadsheet_id=${encodeURIComponent(APPS_SCRIPT_SPREADSHEET_ID)}`;
  }
}

function topicById(id) {
  return topics.find((topic) => topic.id === id);
}

function isSectionVisible(section) {
  return siteVisibilitySections[section] !== false;
}

function isItemVisible(section, key) {
  return isSectionVisible(section) && siteVisibility[section]?.[key] !== false;
}

function normalizarVisivel(value, fallback = true) {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  const text = String(value || "").trim().toLowerCase();
  if (!text) return fallback;
  if (["true", "sim", "s", "1", "yes", "visivel", "visível"].includes(text)) return true;
  if (["false", "nao", "não", "n", "0", "no", "oculto"].includes(text)) return false;
  return fallback;
}

function criarItemVisibilidade(secao, chave, titulo, url, tipo, nivel, visivel, ordem, options = {}) {
  const linkValue = options.linkValue || "";
  return {
    secao,
    chave,
    titulo,
    url: url || "",
    gammaUrl: linkValue,
    tipo,
    nivel,
    visivel: visivel !== false,
    ordem,
    linkValue,
    linkLabel: options.linkLabel || "",
    linkPlaceholder: options.linkPlaceholder || ""
  };
}

function obterConstituicaoVisibilidadeSite() {
  const itens = [];
  const adicionarSecao = (section) => {
    const meta = siteVisibilitySectionMeta[section];
    itens.push(criarItemVisibilidade(meta.secao, meta.chave, meta.titulo, "", meta.tipo, "secao", siteVisibilitySections[section], meta.ordem));
  };
  const adicionarItem = (section, key, titulo, url, tipo, ordem, options = {}) => {
    const meta = siteVisibilitySectionMeta[section];
    itens.push(criarItemVisibilidade(meta.secao, key, titulo, url, tipo, "item", siteVisibility[section]?.[key.replace(/^(menu|conteudo|atividade|avaliacao|recurso|ficheiro-excel|assistente-gpt|tarefa-grupo|tarefa-individual)-/, "")], ordem, options));
  };

  adicionarSecao("menuPrincipal");
  mainMenuItems.forEach((item, index) => {
    const url = item.key === "inicio" ? "index.html#inicio" : item.key === "eportfolio" ? "atividades/identidade-visual.html" : `index.html#${item.key}`;
    adicionarItem("menuPrincipal", `menu-${item.key}`, item.label, url, "menu", 2 + index);
  });

  adicionarSecao("conteudos");
  topics.filter((topic) => topic.showInContents !== false).forEach((topic, index) => adicionarItem("conteudos", `conteudo-${topic.id}`, topic.cardTitle || topic.title, topic.url, "conteudo", 11 + index, {
    linkValue: obterGammaUrl(topic),
    linkLabel: "Gamma",
    linkPlaceholder: "https://...gamma.site/..."
  }));

  adicionarSecao("atividades");
  activities.forEach((activity, index) => adicionarItem("atividades", `atividade-${activity.id}`, activity.menuTitle || activity.title, activity.url, "atividade", 21 + index));

  adicionarSecao("avaliacao");
  evaluations.forEach((evaluation, index) => adicionarItem("avaliacao", `avaliacao-${evaluation.id}`, evaluation.menuTitle || evaluation.title, evaluation.url, "avaliacao", 31 + index));

  adicionarSecao("recursos");
  resources.forEach((resource, index) => adicionarItem("recursos", `recurso-${resource.id}`, resource.title, resource.url, "recurso", 41 + index));

  adicionarSecao("ficheirosExcel");
  resources.flatMap((resource) => [...(resource.videos || []), ...(resource.downloadFiles || [])]).forEach((file, index) => adicionarItem("ficheirosExcel", `ficheiro-excel-${file.id}`, file.title, file.path, file.path.endsWith(".mp4") ? "video_excel" : "ficheiro_excel", 45.1 + index));

  adicionarSecao("assistentesGpt");
  resources.filter((resource) => resource.gptUrl).forEach((resource, index) => adicionarItem("assistentesGpt", `assistente-gpt-${resource.id}`, resource.title, resource.gptUrl, "assistente_gpt", 48.1 + index));

  adicionarSecao("tarefasGrupo");
  groupTasks.forEach((task, index) => adicionarItem("tarefasGrupo", `tarefa-grupo-${task.title}`, task.title, "atividades/tarefas-grupo.html", "tarefa_grupo", 51 + index, {
    linkValue: obterGlossarioUrl(),
    linkLabel: "Glossário",
    linkPlaceholder: "https://fad.iefp.pt/mod/glossary/view.php?id=..."
  }));

  adicionarSecao("tarefasIndividuais");
  individualTasks.forEach((task, index) => adicionarItem("tarefasIndividuais", `tarefa-individual-${task.title}`, task.title, "atividades/tarefas-individuais.html", "tarefa_individual", 61 + index, {
    linkValue: obterForumUrl(task),
    linkLabel: "Fórum",
    linkPlaceholder: "https://fad.iefp.pt/mod/forum/discuss.php?d=..."
  }));

  return itens;
}

function criarMapaVisibilidadePlano() {
  return Object.fromEntries(obterConstituicaoVisibilidadeSite().map((item) => [item.chave, item.visivel !== false]));
}

function obterItemControloPadrao() {
  siteControlItemsBuilding = true;
  try {
    return obterConstituicaoVisibilidadeSite();
  } finally {
    siteControlItemsBuilding = false;
  }
}

function normalizarItemControlo(item) {
  if (!item || typeof item !== "object") return null;
  const chave = item.chave || item.key || "";
  if (!chave) return null;
  const linkValue = item.linkValue || item.gammaUrl || item.moodleUrl || item.urlMoodle || item.moodle || item.link || "";
  return {
    secao: item.secao || item.section || "",
    chave,
    titulo: item.titulo || item.title || "",
    url: item.url || "",
    gammaUrl: item.gammaUrl || "",
    tipo: item.tipo || item.type || "",
    nivel: item.nivel || item.level || "",
    visivel: normalizarVisivel(item.visivel ?? item.visible, true),
    ordem: Number(item.ordem || item.order || 0),
    linkValue: /^https?:\/\//i.test(String(linkValue)) ? String(linkValue) : "",
    linkLabel: item.linkLabel || "",
    linkPlaceholder: item.linkPlaceholder || ""
  };
}

function obterLinkItemControloRemoto(saved, fallback) {
  const explicitLink = saved?.linkValue || saved?.gammaUrl || saved?.moodleUrl || saved?.urlMoodle || saved?.moodle || saved?.link || "";
  if (/^https?:\/\//i.test(String(explicitLink))) return String(explicitLink);

  const savedUrl = String(saved?.url || "");
  const type = saved?.tipo || saved?.type || fallback?.tipo || fallback?.type || "";
  const usesUrlAsExternalLink = ["conteudo", "tarefa_grupo", "tarefa_individual", "avaliacao"].includes(type);
  if (usesUrlAsExternalLink && /^https?:\/\//i.test(savedUrl)) return savedUrl;

  return fallback?.linkValue || "";
}

function atualizarItensControloSite(remoteItems = []) {
  const savedByKey = new Map((remoteItems || [])
    .map(normalizarItemControlo)
    .filter(Boolean)
    .map((item) => [item.chave, item]));

  siteControlItems = obterItemControloPadrao().map((item) => {
    const saved = savedByKey.get(item.chave);
    if (!saved) return item;
    return {
      ...item,
      url: saved.url || item.url,
      gammaUrl: saved.gammaUrl || item.gammaUrl || "",
      visivel: normalizarVisivel(saved.visivel, item.visivel),
      linkValue: obterLinkItemControloRemoto(saved, item)
    };
  });

  return siteControlItems;
}

function obterItensControloSite() {
  if (siteControlItemsBuilding) return siteControlItems;
  if (!siteControlItems.length) {
    siteControlItems = obterItemControloPadrao();
  }
  return siteControlItems;
}

function obterItemControlo(chave) {
  return obterItensControloSite().find((item) => item.chave === chave);
}

function obterLinkControlo(chave) {
  return obterItemControlo(chave)?.linkValue || "";
}

function obterSecaoIndexPorSubmenu() {
  return {
    "submenu-conteudos": "conteudos",
    "submenu-atividades": "atividades",
    "submenu-avaliacao": "avaliacao",
    "submenu-recursos": "recursos"
  };
}

function abrirSubmenuPrincipal(submenuId) {
  document.querySelectorAll(".nav-parent").forEach((button) => {
    button.setAttribute("aria-expanded", String(button.getAttribute("aria-controls") === submenuId));
  });

  document.querySelectorAll(".submenu").forEach((submenu) => {
    submenu.classList.toggle("open", submenu.id === submenuId);
  });
}

function abrirMenuPeloHashDoIndex() {
  if (document.body.dataset.page !== "home") return;

  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const submenuId = Object.entries(obterSecaoIndexPorSubmenu())
    .find(([, sectionId]) => sectionId === hash)?.[0];

  if (submenuId) abrirSubmenuPrincipal(submenuId);
}

function setupMenu() {
  const homeSectionBySubmenu = obterSecaoIndexPorSubmenu();

  document.querySelectorAll(".nav-parent").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
  document.querySelectorAll(".submenu").forEach((submenu) => {
    submenu.classList.remove("open");
  });

  document.querySelectorAll(".nav-parent").forEach((button) => {
    button.addEventListener("click", () => {
      const submenuId = button.getAttribute("aria-controls");
      const sectionId = homeSectionBySubmenu[submenuId];

      if (submenuId) abrirSubmenuPrincipal(submenuId);

      if (!sectionId) return;

      if (document.body.dataset.page !== "home") {
        window.location.href = `${getBasePath()}index.html#${sectionId}`;
        return;
      }

      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${sectionId}`);
    });
  });

  const toggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const fecharMenu = () => {
    document.body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
  };

  toggle?.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("menu-open")) return;
    if (sidebar?.contains(event.target) || toggle?.contains(event.target)) return;
    fecharMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
      fecharMenu();
    }
  });
}

function manterMenuAtivoAberto() {
  const topicId = document.body.dataset.topic || "";
  const activityId = document.body.dataset.activity || "";
  const resourceId = document.body.dataset.resource || "";
  let submenuId = "";
  let activeUrl = "";

  if (topicId) {
    const topic = topicById(topicId);
    submenuId = "submenu-conteudos";
    activeUrl = topic?.url || "";
  } else if (activityId) {
    const evaluation = evaluations.find((item) => item.id === activityId);
    const activity = activities.find((item) => item.id === activityId);
    submenuId = evaluation ? "submenu-avaliacao" : "submenu-atividades";
    activeUrl = (evaluation || activity)?.url || "";
  } else if (resourceId) {
    const resource = resources.find((item) => item.id === resourceId);
    submenuId = "submenu-recursos";
    activeUrl = resource?.url || "";
  }

  if (!submenuId) return;

  document.querySelectorAll(".nav-parent").forEach((button) => {
    const active = button.getAttribute("aria-controls") === submenuId;
    button.setAttribute("aria-expanded", String(active));
  });

  document.querySelectorAll(".submenu").forEach((submenu) => {
    submenu.classList.toggle("open", submenu.id === submenuId);
  });

  if (activeUrl) {
    document.querySelectorAll(`#${submenuId} a`).forEach((link) => {
      link.classList.toggle("active", Boolean(link.getAttribute("href")?.endsWith(activeUrl)));
    });
  }

  if (topicId) {
    document.querySelectorAll("#submenu-conteudos button.submenu-heading").forEach((button) => {
      const children = button.nextElementSibling;
      const hasActiveTopic = Boolean(children?.querySelector(`a[href$="${activeUrl}"]`));
      button.setAttribute("aria-expanded", String(hasActiveTopic));
      if (children) children.hidden = !hasActiveTopic;
    });
  }
}

function renderContentMenus() {
  const menus = document.querySelectorAll("#submenu-conteudos");
  menus.forEach((menu) => {
    if (!isSectionVisible("conteudos")) {
      menu.innerHTML = "";
      return;
    }

    menu.innerHTML = contentMenuGroups.map((group) => {
      const visibleChildren = group.children
        .map((child) => topicById(child.topicId))
        .filter((topic) => topic && isItemVisible("conteudos", topic.id));

      const parentTopic = group.parentTopicId ? topicById(group.parentTopicId) : null;
      const parentVisible = parentTopic && isItemVisible("conteudos", parentTopic.id);

      if (parentTopic) {
        if (!parentVisible && !visibleChildren.length) return "";
        return `
      ${parentVisible ? `<a class="submenu-heading submenu-heading-${group.theme}" href="${getBasePath()}${parentTopic.url}">
        <span>${group.title}</span>
      </a>` : ""}
      ${visibleChildren.length ? `<div class="submenu-group-children content-child-links">
        ${visibleChildren.map((topic) => `<a href="${getBasePath()}${topic.url}">${topic.menuTitle || topic.title}</a>`).join("")}
      </div>` : ""}
    `;
      }
      if (!visibleChildren.length) return "";

      if (visibleChildren.length === 1) {
        const topic = visibleChildren[0];
        return `
      <a class="submenu-heading submenu-heading-${group.theme}" href="${getBasePath()}${topic.url}">
        <span>${group.title}</span>
      </a>
    `;
      }

      return `
      <button class="submenu-heading submenu-heading-${group.theme}" type="button" aria-expanded="false">
        <span>${group.title}</span>
        <b aria-hidden="true">▾</b>
      </button>
      <div class="submenu-group-children" hidden>
        ${visibleChildren.map((topic) => `<a href="${getBasePath()}${topic.url}">${topic.menuTitle || topic.title}</a>`).join("")}
      </div>
    `;
    }).join("");
  });

  document.querySelectorAll("button.submenu-heading").forEach((button) => {
    button.addEventListener("click", () => {
      const children = button.nextElementSibling;
      const expanded = button.getAttribute("aria-expanded") === "true";
      document.querySelectorAll("button.submenu-heading").forEach((otherButton) => {
        if (otherButton === button) return;
        otherButton.setAttribute("aria-expanded", "false");
        if (otherButton.nextElementSibling) otherButton.nextElementSibling.hidden = true;
      });
      button.setAttribute("aria-expanded", String(!expanded));
      if (children) children.hidden = expanded;
    });
  });
}

function renderActivityMenus() {
  document.querySelectorAll(".activity-submenu").forEach((menu) => {
    if (!isSectionVisible("atividades")) {
      menu.innerHTML = "";
      return;
    }

    menu.innerHTML = activities.filter((activity) => isItemVisible("atividades", activity.id)).map((activity) => `
      <a href="${getBasePath()}${activity.url}">${activity.menuTitle || activity.title}</a>
    `).join("");
  });
}

function renderEvaluationMenus() {
  document.querySelectorAll(".evaluation-submenu").forEach((menu) => {
    if (!isSectionVisible("avaliacao")) {
      menu.innerHTML = "";
      return;
    }

    const currentEvaluation = document.body.dataset.activity || "";
    menu.innerHTML = evaluations
      .filter((evaluation) => !evaluation.parentId && isItemVisible("avaliacao", evaluation.id))
      .map((evaluation) => {
        const children = evaluations.filter((child) => child.parentId === evaluation.id && isItemVisible("avaliacao", child.id));
        const isActive = currentEvaluation === evaluation.id;
        const childLinks = children.map((child) => `
          <a href="${getBasePath()}${child.url}" class="${currentEvaluation === child.id ? "active" : ""}">${child.menuTitle || child.title}</a>
        `).join("");

        if (!children.length) {
          return `<a href="${getBasePath()}${evaluation.url}" class="${isActive ? "active" : ""}">${evaluation.menuTitle || evaluation.title}</a>`;
        }

        return `
          <a href="${getBasePath()}${evaluation.url}" class="${isActive ? "active" : ""}">${evaluation.menuTitle || evaluation.title}</a>
          <div class="submenu-group-children evaluation-child-links">
            ${childLinks}
          </div>
        `;
      }).join("");
  });
}

function renderResourceMenus() {
  document.querySelectorAll(".resource-submenu").forEach((menu) => {
    if (!isSectionVisible("recursos")) {
      menu.innerHTML = "";
      return;
    }

    const currentResource = document.body.dataset.resource || "";
    menu.innerHTML = resources
      .filter((resource) => !resource.parentId && isItemVisible("recursos", resource.id))
      .map((resource) => {
        const children = resources.filter((child) => {
          if (child.parentId !== resource.id || !isItemVisible("recursos", child.id)) return false;
          if (child.gptUrl && !isItemVisible("assistentesGpt", child.id)) return false;
          return true;
        });
        const isActive = currentResource === resource.id;
        const childLinks = children.map((child) => `
          <a href="${getBasePath()}${child.url}" class="${child.menuIcon ? "submenu-icon-link" : ""} ${currentResource === child.id ? "active" : ""}">
            ${child.menuIcon ? `<img src="${getBasePath()}${child.menuIcon}" alt="" aria-hidden="true">` : ""}
            <span>${child.menuTitle || child.title}</span>
          </a>
        `).join("");

        if (!children.length) {
          return `<a href="${getBasePath()}${resource.url}" class="${isActive ? "active" : ""}">${resource.title}</a>`;
        }

        return `
          <a href="${getBasePath()}${resource.url}" class="${isActive ? "active" : ""}">${resource.title}</a>
          <div class="submenu-group-children resource-child-links">
            ${childLinks}
          </div>
        `;
      }).join("");
  });
}

function renderHomeCards() {
  const grid = document.getElementById("home-content-grid");
  if (!grid) return;

  grid.innerHTML = topics.filter((topic) => topic.showInContents !== false).map((topic) => `
    <article class="content-card ${topic.id === "pesquisa-avancada-web" ? "database-card" : "spreadsheet-card"}">
      <a href="${topic.url}">
        <span>${topic.area}</span>
        <h3>${topic.cardTitle}</h3>
        <p>${topic.intro}</p>
      </a>
    </article>
  `).join("");
}

function renderConteudosIndex() {
  const grid = document.getElementById("conteudos-index-grid");
  if (!grid) return;

  grid.innerHTML = contentMenuGroups.map((group) => `
    <article class="card group-task-card">
      <p class="eyebrow">${group.title}</p>
      <div class="resource-list">
        ${group.children.map((child) => {
          const topic = topicById(child.topicId);
          return topic ? `
            <article class="card">
              <h3><a href="${topic.url}">${topic.title}</a></h3>
              <p>${topic.intro}</p>
            </article>
          ` : "";
        }).join("")}
      </div>
    </article>
  `).join("");
}

function setupFloatingActions() {
  document.querySelectorAll("[data-action='top']").forEach((button) => {
    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  });
  document.querySelectorAll("[data-action='print']").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });
}

function setupModals() {
  const closeModal = (modal) => {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  document.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-modal-open]");
    if (opener) {
      const modal = document.getElementById(opener.dataset.modalOpen);
      if (!modal) return;
      modal.hidden = false;
      document.body.classList.add("modal-open");
      modal.querySelector("[data-modal-close]")?.focus();
      return;
    }

    const modal = event.target.closest(".modal-backdrop");
    if (modal && (event.target === modal || event.target.closest("[data-modal-close]"))) {
      closeModal(modal);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    document.querySelectorAll(".modal-backdrop:not([hidden])").forEach(closeModal);
  });
}

function getControlState() {
  try {
    return JSON.parse(localStorage.getItem("ufcd0693-control-state")) || {};
  } catch {
    return {};
  }
}

function saveControlState(state) {
  localStorage.setItem("ufcd0693-control-state", JSON.stringify(state));
}

function carregarVisibilidadeDoSite() {
  try {
    aplicarVisibilidadeDoSite(JSON.parse(localStorage.getItem(SITE_VISIBILITY_STORAGE_KEY) || "{}"));
  } catch {
    // Mantém a configuração inicial quando o browser não permite ler localStorage.
  }
}

function aplicarVisibilidadeDoSite(saved) {
  Object.entries(saved || {}).forEach(([section, values]) => {
    if (section === "secoes" && values) {
      Object.entries(values).forEach(([key, value]) => {
        if (key in siteVisibilitySections && typeof value === "boolean") {
          siteVisibilitySections[key] = value;
        }
      });
      return;
    }

    if (!siteVisibility[section] || !values) return;
    Object.entries(values).forEach(([key, value]) => {
      if (key in siteVisibility[section] && typeof value === "boolean") {
        siteVisibility[section][key] = value;
      }
    });
  });
}

function aplicarLinkItemControlo(item) {
  if (!item || typeof item !== "object") return false;
  const chave = String(item.chave || item.key || "");
  const tipo = String(item.tipo || item.type || "").toLowerCase();
  const titulo = String(item.titulo || item.title || "");
  const valor = String(item.linkValue || item.link || item.gammaUrl || item.moodleUrl || item.urlMoodle || item.moodle || "");
  const urlExterno = valor || (/^https?:\/\//i.test(String(item.url || "")) ? String(item.url) : "");
  if (!urlExterno) return false;
  let alterou = false;

  if (tipo === "conteudo" || chave.startsWith("conteudo-")) {
    const topicId = chave.replace(/^conteudo-/, "");
    if (topicId in siteLinks.gammas && siteLinks.gammas[topicId] !== urlExterno) {
      siteLinks.gammas[topicId] = urlExterno;
      alterou = true;
    }
  }

  if (tipo === "tarefa_grupo" || chave.startsWith("tarefa-grupo-") || chave === "secao-tarefas-grupo") {
    if (siteLinks.glossaryUrl !== urlExterno) {
      siteLinks.glossaryUrl = urlExterno;
      alterou = true;
    }
  }

  if (tipo === "tarefa_individual" || chave.startsWith("tarefa-individual-")) {
    const taskKey = chave.replace(/^tarefa-individual-/, "");
    const task = individualTasks.find((itemTask) => itemTask.id === taskKey || itemTask.title === taskKey || itemTask.title === titulo);
    const keys = task ? [task.id, task.title] : [taskKey, titulo].filter(Boolean);
    keys.forEach((key) => {
      if (siteLinks.forums[key] !== urlExterno) {
        siteLinks.forums[key] = urlExterno;
        alterou = true;
      }
    });
  }

  return alterou;
}

function aplicarItemVisibilidadeRemota(item) {
  aplicarLinkItemControlo(item);
  if (!item || typeof item.visivel !== "boolean") return;

  const chave = String(item.chave || "");
  const metaEntry = Object.entries(siteVisibilitySectionMeta).find(([, meta]) => meta.chave === chave);
  if (metaEntry) {
    siteVisibilitySections[metaEntry[0]] = item.visivel;
    return;
  }

  const mappings = [
    { prefix: "menu-", section: "menuPrincipal" },
    { prefix: "conteudo-", section: "conteudos" },
    { prefix: "atividade-", section: "atividades" },
    { prefix: "avaliacao-", section: "avaliacao" },
    { prefix: "recurso-", section: "recursos" },
    { prefix: "ficheiro-excel-", section: "ficheirosExcel" },
    { prefix: "assistente-gpt-", section: "assistentesGpt" },
    { prefix: "tarefa-grupo-", section: "tarefasGrupo" },
    { prefix: "tarefa-individual-", section: "tarefasIndividuais" }
  ];

  const mapping = mappings.find((candidate) => chave.startsWith(candidate.prefix));
  if (!mapping) return;

  const key = chave.slice(mapping.prefix.length);
  if (siteVisibility[mapping.section] && key in siteVisibility[mapping.section]) {
    siteVisibility[mapping.section][key] = item.visivel;
  }
}

function aplicarItensVisibilidadeRemota(itens) {
  if (!Array.isArray(itens)) return;
  atualizarItensControloSite(itens);
  let linksAlterados = false;
  itens.forEach((item) => {
    linksAlterados = aplicarLinkItemControlo(item) || linksAlterados;
    aplicarItemVisibilidadeRemota(item);
  });
  if (linksAlterados) guardarLinksDoSite();
}

function atualizarSuperficiesVisiveisDoSite() {
  renderContentMenus();
  renderActivityMenus();
  renderEvaluationMenus();
  renderResourceMenus();
  renderHomeCards();
  renderConteudosIndex();

  if (document.getElementById("topic-root")) {
    renderTopicPage();
  }

  if (document.getElementById("activity-root")) {
    renderActivityPage();
  }

  if (document.getElementById("resource-root")) {
    renderResourcePage();
  }

  manterMenuAtivoAberto();
  abrirMenuPeloHashDoIndex();
}

function guardarVisibilidadeDoSite() {
  try {
    localStorage.setItem(SITE_VISIBILITY_STORAGE_KEY, JSON.stringify({
      secoes: siteVisibilitySections,
      ...siteVisibility
    }));
  } catch {
    // A página continua funcional mesmo que não seja possível guardar no browser.
  }
}

function carregarLinksDoSite() {
  try {
    const saved = JSON.parse(localStorage.getItem(SITE_LINKS_STORAGE_KEY) || "{}");
    aplicarLinksDoSite(saved);
  } catch {
    // Mantém os valores de base quando não é possível ler localStorage.
  }
}

function aplicarLinksDoSite(links) {
  if (!links || typeof links !== "object") return false;
  let alterou = false;

  const obterCampo = (item, nomes) => {
    if (!item || typeof item !== "object") return "";
    const entradas = Object.entries(item);
    const nomesNormalizados = nomes.map((nome) => nome.toLowerCase());
    const entrada = entradas.find(([key]) => nomesNormalizados.includes(key.toLowerCase()));
    return entrada ? entrada[1] : "";
  };
  const obterValorLink = (item) => {
    const valorExterno = obterCampo(item, ["gammaUrl", "linkValue", "moodleUrl", "urlMoodle", "moodle", "link", "href", "valor", "value", "ligacao", "ligação"]);
    if (valorExterno) return valorExterno;
    const url = String(obterCampo(item, ["url"]) || "");
    return /^https?:\/\//i.test(url) ? url : "";
  };
  const obterChaveLink = (item) => obterCampo(item, ["key", "chave", "id", "linkKey", "titulo", "title", "tarefa"]);
  const obterTipoLink = (item) => String(obterCampo(item, ["linkType", "tipo", "tipo_link", "secao", "seção", "categoria"])).toLowerCase();
  const guardarForum = (key, value) => {
    const novoValor = String(value || "");
    const task = individualTasks.find((item) => item.id === key || item.title === key);
    const chaves = task ? [task.id, task.title] : [key];
    chaves.filter(Boolean).forEach((chave) => {
      if (siteLinks.forums[chave] !== novoValor) {
        siteLinks.forums[chave] = novoValor;
        alterou = true;
      }
    });
  };

  if (Array.isArray(links)) {
    links.forEach((item) => {
      const tipo = obterTipoLink(item);
      const key = obterChaveLink(item);
      const value = obterValorLink(item);

      if (!value) return;

      if ((tipo.includes("gamma") || tipo.includes("conteudo")) && key in siteLinks.gammas) {
        const novoValor = String(value || "");
        if (siteLinks.gammas[key] !== novoValor) {
          siteLinks.gammas[key] = novoValor;
          alterou = true;
        }
      } else if (tipo.includes("gloss")) {
        const novoValor = String(value || "");
        if (siteLinks.glossaryUrl !== novoValor) {
          siteLinks.glossaryUrl = novoValor;
          alterou = true;
        }
      } else if (tipo.includes("forum") || tipo.includes("tarefa")) {
        guardarForum(key, value);
      }
    });

    return alterou;
  }

  if (Array.isArray(links.itens)) {
    alterou = aplicarLinksDoSite(links.itens) || alterou;
  }

  if (links.gammas && typeof links.gammas === "object") {
    Object.entries(links.gammas).forEach(([key, value]) => {
      if (key in siteLinks.gammas) {
        const novoValor = String(value || "");
        if (siteLinks.gammas[key] !== novoValor) {
          siteLinks.gammas[key] = novoValor;
          alterou = true;
        }
      }
    });
  }

  if (typeof links.glossaryUrl === "string" && siteLinks.glossaryUrl !== links.glossaryUrl) {
    siteLinks.glossaryUrl = links.glossaryUrl;
    alterou = true;
  }

  if (links.forums && typeof links.forums === "object") {
    Object.entries(links.forums).forEach(([key, value]) => {
      guardarForum(key, value);
    });
  }

  return alterou;
}

function guardarLinksDoSite() {
  try {
    localStorage.setItem(SITE_LINKS_STORAGE_KEY, JSON.stringify(siteLinks));
  } catch {
    // A página continua funcional mesmo que não seja possível guardar no browser.
  }
}

function obterGammaUrl(topic) {
  return obterLinkControlo(`conteudo-${topic.id}`) || siteLinks.gammas[topic.id] || topic.gammaUrl || "";
}

function obterGlossarioUrl() {
  return obterLinkControlo("secao-tarefas-grupo")
    || groupTasks.map((task) => obterLinkControlo(`tarefa-grupo-${task.title}`)).find(Boolean)
    || siteLinks.glossaryUrl
    || glossaryUrl
    || "";
}

function obterUrlTopicoForum(valor) {
  const url = String(valor || "").trim();
  return /^https:\/\/fad\.iefp\.pt\/mod\/forum\/discuss\.php\?d=\d+/i.test(url) ? url : "";
}

function obterForumUrl(task) {
  return obterUrlTopicoForum(obterLinkControlo(`tarefa-individual-${task.title}`))
    || obterUrlTopicoForum(siteLinks.forums[task.id])
    || obterUrlTopicoForum(siteLinks.forums[task.title])
    || obterUrlTopicoForum(task.forumUrl)
    || "";
}

window.addEventListener("storage", (event) => {
  if (!event.newValue) return;

  try {
    if (event.key === SITE_VISIBILITY_STORAGE_KEY) {
      aplicarVisibilidadeDoSite(JSON.parse(event.newValue));
      atualizarSuperficiesVisiveisDoSite();
    }

    if (event.key === SITE_LINKS_STORAGE_KEY && aplicarLinksDoSite(JSON.parse(event.newValue))) {
      atualizarSuperficiesVisiveisDoSite();
    }
  } catch {
    // Mantém o estado atual se a alteração recebida não puder ser lida.
  }
});

async function carregarVisibilidadeRemotaDoSite() {
  if (!APPS_SCRIPT_WEB_APP_URL) return false;
  if (siteVisibilityRemoteLoaded) return true;
  if (siteVisibilityRemoteLoading) return siteVisibilityRemoteLoading;

  siteVisibilityRemoteLoading = obterJsonAppsScript({ acao: "visibilidade_site" })
    .then((dados) => {
      if (dados?.sucesso && Array.isArray(dados.itens)) {
        aplicarItensVisibilidadeRemota(dados.itens);
        guardarVisibilidadeDoSite();
        siteVisibilityRemoteLoaded = true;
        return true;
      }

      if (dados?.sucesso && dados.visibilidade) {
        aplicarVisibilidadeDoSite(dados.visibilidade);
        guardarVisibilidadeDoSite();
        siteVisibilityRemoteLoaded = true;
        return true;
      }
      siteVisibilityRemoteLoaded = true;
      return false;
    })
    .catch(() => {
      siteVisibilityRemoteLoaded = true;
      return false;
    })
    .finally(() => {
      siteVisibilityRemoteLoading = null;
    });

  return siteVisibilityRemoteLoading;
}

async function guardarVisibilidadeRemotaDoSite() {
  if (!APPS_SCRIPT_WEB_APP_URL) return;

  try {
    const constituicao = obterConstituicaoVisibilidadeSite().map((item) => ({
      secao: item.secao,
      chave: item.chave,
      titulo: item.titulo,
      url: item.url || "",
      gammaUrl: item.gammaUrl || item.linkValue || "",
      tipo: item.tipo,
      nivel: item.nivel,
      visivel: item.visivel !== false,
      ordem: item.ordem
    }));
    const dados = new URLSearchParams();
    dados.set("acao", "guardar_visibilidade_site");
    dados.set("spreadsheet_id", APPS_SCRIPT_SPREADSHEET_ID);
    dados.set("constituicao", JSON.stringify(constituicao));
    dados.set("visibilidade", JSON.stringify(criarMapaVisibilidadePlano()));

    await fetch(APPS_SCRIPT_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: dados
    });
  } catch {
    // Mantém a versão local se a ligação remota falhar.
  }
}

function renderSiteVisibilityControls() {
  const renderOption = (section, item) => {
    const checked = siteVisibility[section][item.key] !== false ? "checked" : "";
    const linkField = item.linkType ? `
      <label class="site-control-link-field">
        <span>${escapeHtml(item.linkLabel || "Link")}</span>
        <input
          type="url"
          value="${escapeHtml(item.linkValue || "")}"
          placeholder="${escapeHtml(item.linkPlaceholder || "https://...")}"
          data-link-control
          data-link-type="${escapeHtml(item.linkType)}"
          ${item.linkKey ? `data-key="${escapeHtml(item.linkKey)}"` : ""}>
      </label>
    ` : "";

    if (linkField) {
      return `
        <div class="site-control-option-container">
          <label class="site-control-option">
            <input type="checkbox" data-visibility-control data-section="${section}" data-key="${escapeHtml(item.key)}" ${checked}>
            <span>${escapeHtml(item.label)}</span>
          </label>
          ${linkField}
        </div>
      `;
    }

    return `
      <label class="site-control-option">
        <input type="checkbox" data-visibility-control data-section="${section}" data-key="${escapeHtml(item.key)}" ${checked}>
        <span>${escapeHtml(item.label)}</span>
      </label>
    `;
  };

  const renderStandaloneLink = (item) => `
    <div class="site-control-option-container site-control-option-section">
      <label class="site-control-option">
        <span>${escapeHtml(item.label)}</span>
      </label>
      <label class="site-control-link-field">
        <span>${escapeHtml(item.linkLabel || "Link")}</span>
        <input
          type="url"
          value="${escapeHtml(item.linkValue || "")}"
          placeholder="${escapeHtml(item.linkPlaceholder || "https://...")}"
          data-link-control
          data-link-type="${escapeHtml(item.linkType)}"
          ${item.linkKey ? `data-key="${escapeHtml(item.linkKey)}"` : ""}>
      </label>
    </div>
  `;

  const renderGroup = (title, section, items, options = {}) => `
    <details class="site-control-group">
      <summary>
        <span>${title}</span>
        <small>${items.length} itens</small>
      </summary>
      ${options.before ? `<div class="site-control-group-body">${options.before}</div>` : ""}
      <div class="site-control-options">
        ${items.map((item) => renderOption(section, item)).join("")}
      </div>
    </details>
  `;

  const contentItems = topics.filter((topic) => topic.showInContents !== false).map((topic) => ({
    key: topic.id,
    label: topic.cardTitle,
    linkType: "gamma",
    linkKey: topic.id,
    linkLabel: "Gamma",
    linkValue: obterGammaUrl(topic),
    linkPlaceholder: "https://...gamma.site/..."
  }));
  const menuItems = mainMenuItems.map((item) => ({ key: item.key, label: item.label }));
  const activityItems = activities.map((activity) => ({ key: activity.id, label: activity.menuTitle || activity.title }));
  const evaluationItems = evaluations.map((evaluation) => ({ key: evaluation.id, label: evaluation.menuTitle || evaluation.title }));
  const resourceItems = resources.map((resource) => ({ key: resource.id, label: resource.title }));
  const excelFileItems = resources.flatMap((resource) => [...(resource.videos || []), ...(resource.downloadFiles || [])]).map((file) => ({ key: file.id, label: file.title }));
  const gptItems = resources.filter((resource) => resource.gptUrl).map((resource) => ({ key: resource.id, label: resource.title }));
  const groupItems = groupTasks.map((task) => ({ key: task.title, label: task.title }));
  const glossaryField = renderStandaloneLink({
    label: "Glossário Moodle das tarefas de grupo",
    linkType: "glossary",
    linkLabel: "Glossário",
    linkValue: obterGlossarioUrl(),
    linkPlaceholder: "https://fad.iefp.pt/mod/glossary/view.php?id=..."
  });
  const individualItems = individualTasks.map((task) => ({
    key: task.title,
    label: task.title,
    linkType: "forum",
    linkKey: task.id,
    linkLabel: "Fórum",
    linkValue: obterForumUrl(task),
    linkPlaceholder: "https://fad.iefp.pt/mod/forum/discuss.php?d=..."
  }));

  return `
    <div class="card site-control-card">
      <div class="site-control-heading">
        <div>
          <p class="eyebrow">Disponibilização e ligações</p>
          <h2>Gestão de materiais</h2>
        </div>
        <div>
          <p>Ativa conteúdos/tarefas e associa os links externos usados durante a formação.</p>
          <button class="small-button" type="button" data-action="save-site-visibility">Guardar na Apps Script</button>
        </div>
      </div>
      <div class="site-control-grid">
        ${renderGroup("Menu principal", "menuPrincipal", menuItems)}
        ${renderGroup("Conteúdos", "conteudos", contentItems)}
        ${renderGroup("Atividades", "atividades", activityItems)}
        ${renderGroup("Avaliação", "avaliacao", evaluationItems)}
        ${renderGroup("Recursos", "recursos", resourceItems)}
        ${renderGroup("Ficheiros Excel", "ficheirosExcel", excelFileItems)}
        ${renderGroup("Assistentes GPT", "assistentesGpt", gptItems)}
        ${renderGroup("Tarefas de Grupo", "tarefasGrupo", groupItems, { before: glossaryField })}
        ${renderGroup("Tarefas Individuais", "tarefasIndividuais", individualItems)}
      </div>
      <div class="site-control-actions">
        <button class="small-button" type="button" data-action="save-site-visibility">Guardar na Apps Script</button>
      </div>
      <p class="teams-control-status" data-site-control-status>Alterações guardadas neste browser.</p>
    </div>
  `;
}

function atualizarControlosVisibilidadeDoSite(root) {
  root.querySelectorAll("[data-visibility-control]").forEach((input) => {
    const section = input.dataset.section;
    const key = input.dataset.key;
    if (siteVisibility[section] && key in siteVisibility[section]) {
      input.checked = siteVisibility[section][key] !== false;
    }
  });

  root.querySelectorAll("[data-link-control]").forEach((input) => {
    const type = input.dataset.linkType;
    const key = input.dataset.key;
    if (type === "gamma" && key in siteLinks.gammas) {
      input.value = siteLinks.gammas[key] || "";
    } else if (type === "glossary") {
      input.value = siteLinks.glossaryUrl || "";
    } else if (type === "forum" && key) {
      const task = individualTasks.find((item) => item.id === key || item.title === key);
      input.value = task ? obterForumUrl(task) : siteLinks.forums[key] || "";
    }
  });
}

function renderTeamsControl(root, options = {}) {
  const compact = Boolean(options.compact);
  const publicView = Boolean(options.publicView);

  root.innerHTML = `
    <section class="section task-page-section teams-control-section ${compact ? "compact-page-section" : ""}">
      <div class="section-inner">
        <details class="teams-page-accordion" open>
          <summary>
            <span class="teams-accordion-copy">
              <span class="eyebrow">Teams</span>
              <strong>Partilha de ecrã</strong>
              <small>Tabela simples para acompanhar quantas vezes cada formando já partilhou o ecrã nas reuniões Teams.</small>
            </span>
          </summary>

          <div class="teams-accordion-body">
            <div class="teams-control-layout teams-control-layout-simple">
              <article class="card teams-summary-card">
                <p class="eyebrow">Resumo</p>
                <div class="teams-summary-grid">
                  <span><strong data-teams-total>0</strong><em>Total</em></span>
                  <span><strong data-teams-done>0</strong><em>Já partilharam</em></span>
                  <span><strong data-teams-missing>0</strong><em>Ainda sem partilha</em></span>
                </div>
                <p class="teams-config-note" data-teams-config-note></p>
                <p class="teams-control-status" data-teams-status></p>
              </article>
            </div>

            <div class="card teams-table-card">
              <div class="teams-table-heading">
                <div>
                  <p class="eyebrow">Mapa</p>
                  <h2>Formandos</h2>
                </div>
                ${publicView ? "" : `<label class="teams-toggle">
                  <input type="checkbox" data-action="teams-show-inactive">
                  <span>Mostrar desativados</span>
                </label>`}
              </div>
              <div class="teams-table-wrap">
                <table class="teams-control-table ${publicView ? "teams-public-table" : ""}">
                  <thead>
                    <tr>
                      <th>Nome do formando</th>
                      <th>N.º de partilhas</th>
                      <th>Último registo</th>
                      ${publicView ? "" : "<th>Estado</th>"}
                      ${publicView ? "" : "<th>Partilhas</th>"}
                    </tr>
                  </thead>
                  <tbody data-teams-table-body>
                    <tr><td colspan="${publicView ? "3" : "5"}">Ainda não existem formandos carregados.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </details>

        ${publicView ? "" : `
          <details class="teams-page-accordion site-control-accordion">
            <summary>
              <span class="teams-accordion-copy">
                <span class="eyebrow">Gestão de materiais</span>
                <strong>Gestão de materiais</strong>
                <small>Disponibiliza conteúdos, tarefas e ligações externas usadas na formação.</small>
              </span>
            </summary>
            <div class="teams-accordion-body">
              ${renderSiteVisibilityControls()}
            </div>
          </details>
        `}
      </div>
    </section>
  `;

  root.dataset.teamsPublicView = publicView ? "true" : "false";
  setupTeamsAccordions(root);
  setupTeamsControl(root);
}

function setupTeamsAccordions(root) {
  const accordions = [...root.querySelectorAll(".teams-page-accordion")];
  if (!accordions.length) return;

  accordions.forEach((accordion) => {
    accordion.addEventListener("toggle", () => {
      if (!accordion.open) return;
      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== accordion) {
          otherAccordion.open = false;
        }
      });
    });
  });
}

async function setupTeamsControl(root) {
  const status = root.querySelector("[data-teams-status]");
  const configNote = root.querySelector("[data-teams-config-note]");
  const controlStatus = root.querySelector("[data-site-control-status]");

  if (!APPS_SCRIPT_WEB_APP_URL) {
    if (configNote) {
      configNote.textContent = "Ligação ao Apps Script ainda não configurada. A página está pronta, mas precisa do URL da Web App para carregar formandos e guardar partilhas.";
    }
    if (status) {
      status.textContent = "Configura o URL da Web App do Apps Script em APPS_SCRIPT_WEB_APP_URL.";
    }
  }

  if (controlStatus) controlStatus.textContent = "A carregar visibilidade e ligações do site...";
  const visibilidadeRemotaOk = await carregarVisibilidadeRemotaDoSite();
  atualizarControlosVisibilidadeDoSite(root);
  if (controlStatus) {
    controlStatus.textContent = visibilidadeRemotaOk
      ? "Visibilidade e ligações carregadas da configuração central."
      : "Alterações guardadas neste browser. A configuração central ainda não respondeu.";
  }

  await carregarDadosTeams(root);

  if (APPS_SCRIPT_WEB_APP_URL) {
    window.setInterval(() => carregarDadosTeams(root), 30000);
  }

  root.addEventListener("click", async (event) => {
    const saveVisibilityButton = event.target.closest('[data-action="save-site-visibility"]');
    if (saveVisibilityButton) {
      const controlStatus = root.querySelector("[data-site-control-status]");
      if (controlStatus) controlStatus.textContent = "A enviar constituição e ligações do site para a Apps Script...";
      guardarVisibilidadeDoSite();
      guardarLinksDoSite();
      await guardarVisibilidadeRemotaDoSite();
      if (controlStatus) {
        controlStatus.textContent = `Pedido enviado para a Apps Script: ${obterConstituicaoVisibilidadeSite().length} itens e ligações do site. Confirma as folhas de controlo.`;
      }
      return;
    }

    const button = event.target.closest("[data-teams-action]");
    if (!button) return;
    await registarAcaoPartilhaEcra(root, button.dataset.nome || "", button.dataset.teamsAction || "incrementar");
  });

  root.addEventListener("change", (event) => {
    if (event.target.matches('[data-action="teams-show-inactive"]')) {
      root.dataset.showInactiveTeams = event.target.checked ? "true" : "false";
      carregarDadosTeams(root);
      return;
    }

    if (event.target.matches("[data-visibility-control]")) {
      const section = event.target.dataset.section;
      const key = event.target.dataset.key;
      if (siteVisibility[section] && key in siteVisibility[section]) {
        siteVisibility[section][key] = event.target.checked;
        guardarVisibilidadeDoSite();
        guardarVisibilidadeRemotaDoSite();
        const controlStatus = root.querySelector("[data-site-control-status]");
        if (controlStatus) controlStatus.textContent = "Visibilidade atualizada. As páginas abertas do site recebem a alteração; se necessário, recarrega a página para confirmar.";
      }
    }

    if (event.target.matches("[data-link-control]")) {
      const type = event.target.dataset.linkType;
      const key = event.target.dataset.key;
      const value = event.target.value.trim();
      let controlKey = "";

      if (type === "gamma" && key in siteLinks.gammas) {
        siteLinks.gammas[key] = value;
        controlKey = `conteudo-${key}`;
      } else if (type === "glossary") {
        siteLinks.glossaryUrl = value;
        controlKey = "secao-tarefas-grupo";
      } else if (type === "forum" && key) {
        siteLinks.forums[key] = value;
        const task = individualTasks.find((item) => item.id === key || item.title === key);
        controlKey = task ? `tarefa-individual-${task.title}` : key;
      }

      const controlItem = controlKey ? obterItemControlo(controlKey) : null;
      if (controlItem) {
        controlItem.linkValue = value;
        controlItem.gammaUrl = value;
      }

      guardarLinksDoSite();
      const controlStatus = root.querySelector("[data-site-control-status]");
      if (controlStatus) controlStatus.textContent = "Ligação guardada neste browser. Usa o botão Guardar para enviar para a Apps Script.";
    }
  });
}

async function carregarDadosTeams(root) {
  if (!APPS_SCRIPT_WEB_APP_URL) {
    preencherTabelaTeams(root, [], []);
    atualizarResumoTeams(root, [], []);
    return;
  }

  const status = root.querySelector("[data-teams-status]");

  try {
    const [formandos, registos] = await Promise.all([
      obterJsonAppsScript({ acao: "formandos" }),
      obterJsonAppsScript({ acao: "registos", questionario: "Partilha de ecrã" })
    ]);

    preencherTabelaTeams(root, formandos.formandos || [], registos.registos || []);
    atualizarResumoTeams(root, registos.registos || [], formandos.formandos || []);

    if (status) status.textContent = "Dados carregados.";
  } catch (erro) {
    if (status) status.textContent = "Não foi possível carregar dados do Apps Script.";
  }
}

function preencherTabelaTeams(root, formandos, registos) {
  const tbody = root.querySelector("[data-teams-table-body]");
  if (!tbody) return;

  const nomes = obterNomesTeams(formandos, registos);
  const estado = calcularEstadoPartilhaTeams(registos);
  const publicView = root.dataset.teamsPublicView === "true";
  const mostrarDesativados = root.dataset.showInactiveTeams === "true";
  const nomesVisiveis = nomes.filter((nome) => mostrarDesativados || estado[nome]?.ativo !== false);
  const colspan = publicView ? 3 : 5;

  if (!nomesVisiveis.length) {
    tbody.innerHTML = `<tr><td colspan="${colspan}">Ainda não existem formandos carregados.</td></tr>`;
    return;
  }

  const maxPartilhas = Math.max(...nomesVisiveis.map((nome) => estado[nome]?.total || 0), 0);

  tbody.innerHTML = nomesVisiveis.map((nome) => {
    const dados = estado[nome] || { total: 0, ultimo: "", ativo: true };
    const ativo = dados.ativo !== false;
    const total = dados.total || 0;
    const percentagem = maxPartilhas > 0 ? Math.max((total / maxPartilhas) * 100, 6) : 0;
    const barClass = total === 0 ? "is-zero" : total === maxPartilhas ? "is-max" : "is-mid";
    return `
    <tr class="${ativo ? "" : "teams-row-inactive"}">
      <td>${escapeHtml(nome)}</td>
      <td>
        <div class="teams-share-meter ${barClass}" style="--share-level: ${percentagem}%">
          <strong>${total > 0 ? total : ""}</strong>
          <span aria-hidden="true"></span>
        </div>
      </td>
      <td>${escapeHtml(formatarDataTeams(dados.ultimo || ""))}</td>
      ${publicView ? "" : `
      <td>
        <div class="teams-state-actions">
          <button class="small-button teams-status-button teams-activate-button" type="button" data-teams-action="ativar" data-nome="${escapeHtml(nome)}" ${ativo ? "disabled" : ""}>Ativar</button>
          <button class="small-button teams-status-button teams-deactivate-button" type="button" data-teams-action="desativar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"}>Desativar</button>
        </div>
      </td>
      `}
      ${publicView ? "" : `<td>
        <div class="teams-actions">
          <button class="small-button teams-count-button teams-plus-button" type="button" data-teams-action="incrementar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"} aria-label="Adicionar partilha de ${escapeHtml(nome)}">+</button>
          <button class="small-button teams-count-button teams-minus-button" type="button" data-teams-action="decrementar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"} aria-label="Remover uma partilha de ${escapeHtml(nome)}">-</button>
        </div>
      </td>`}
    </tr>
  `;
  }).join("");
}

function atualizarResumoTeams(root, registos, formandos = []) {
  const nomes = obterNomesTeams(formandos, registos);
  const estado = calcularEstadoPartilhaTeams(registos);
  const nomesAtivos = nomes.filter((nome) => estado[nome]?.ativo !== false);
  const apresentaram = nomesAtivos.filter((nome) => (estado[nome]?.total || 0) > 0);

  const total = nomesAtivos.length;
  const done = apresentaram.length;
  const missing = Math.max(total - done, 0);

  const totalEl = root.querySelector("[data-teams-total]");
  const doneEl = root.querySelector("[data-teams-done]");
  const missingEl = root.querySelector("[data-teams-missing]");

  if (totalEl) totalEl.textContent = String(total);
  if (doneEl) doneEl.textContent = String(done);
  if (missingEl) missingEl.textContent = String(missing);
}

function obterNomesTeams(formandos, registos) {
  const nomes = new Set(formandos.filter(Boolean));
  registos.forEach((registo) => {
    if (registo["Nome do formando"]) nomes.add(registo["Nome do formando"]);
  });
  return Array.from(nomes).sort((a, b) => a.localeCompare(b, "pt-PT"));
}

function normalizarAcaoTeams(valor) {
  return String(valor || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function calcularEstadoPartilhaTeams(registos) {
  return registos.reduce((acc, registo) => {
    const nome = registo["Nome do formando"];
    if (!nome) return acc;

    if (!acc[nome]) {
      acc[nome] = { total: 0, ultimo: "", ativo: true };
    }

    const acao = normalizarAcaoTeams(registo["Ação"] || registo.Acao || registo["Acção"] || registo["Partilha de ecrã"]);

    if (acao === "desativar" || acao === "desativado") {
      acc[nome].ativo = false;
    } else if (acao === "ativar" || acao === "ativo") {
      acc[nome].ativo = true;
    } else if (acao === "decrementar" || acao === "remover" || acao === "removida" || acao === "removido" || acao === "nao" || acao === "não" || acao === "-1") {
      acc[nome].total = Math.max((acc[nome].total || 0) - 1, 0);
      acc[nome].ultimo = registo["Data da reunião"] || registo.Data || acc[nome].ultimo;
    } else if (acao === "" || acao === "sim" || acao === "incrementar" || acao === "+1") {
      acc[nome].total += 1;
      acc[nome].ultimo = registo["Data da reunião"] || registo.Data || acc[nome].ultimo;
    }

    return acc;
  }, {});
}

async function registarAcaoPartilhaEcra(root, nome, acao) {
  const status = root.querySelector("[data-teams-status]");

  if (!nome) {
    if (status) status.textContent = "Não foi possível identificar o formando.";
    return;
  }

  if (!APPS_SCRIPT_WEB_APP_URL) {
    if (status) status.textContent = "Não foi possível guardar: falta configurar o URL do Apps Script.";
    return;
  }

  try {
    await fetch(APPS_SCRIPT_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        spreadsheet_id: APPS_SCRIPT_SPREADSHEET_ID,
        questionario: "Partilha de ecrã",
        respostas: {
          "Nome do formando": nome,
          "Data da reunião": new Date().toISOString().slice(0, 10),
          "Partilha de ecrã": obterValorPartilhaTeams(acao),
          "Ação": acao
        }
      }),
      headers: { "Content-Type": "text/plain;charset=utf-8" }
    });

    if (status) status.textContent = mensagemAcaoPartilhaTeams(nome, acao);
    await aguardar(1200);
    await carregarDadosTeams(root);
  } catch (erro) {
    if (status) status.textContent = "Não foi possível guardar a alteração.";
  }
}

function mensagemAcaoPartilhaTeams(nome, acao) {
  if (acao === "decrementar") return `Foi removida uma partilha de ${nome}.`;
  if (acao === "desativar") return `${nome} foi desativado da lista.`;
  if (acao === "ativar") return `${nome} voltou à lista ativa.`;
  return `Partilha registada para ${nome}.`;
}

function obterValorPartilhaTeams(acao) {
  if (acao === "decrementar") return "Removida";
  if (acao === "desativar") return "Desativar";
  if (acao === "ativar") return "Ativar";
  return "Sim";
}

function formatarDataTeams(valor) {
  const texto = String(valor || "").trim();
  if (!texto) return "";

  if (/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
    const [ano, mes, dia] = texto.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  const data = new Date(texto);
  if (!Number.isNaN(data.getTime())) {
    return data.toLocaleDateString("pt-PT");
  }

  return texto.split("T")[0] || texto;
}

function aguardar(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function obterJsonAppsScript(params) {
  const url = new URL(APPS_SCRIPT_WEB_APP_URL);
  if (APPS_SCRIPT_SPREADSHEET_ID) {
    url.searchParams.set("spreadsheet_id", APPS_SCRIPT_SPREADSHEET_ID);
  }
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  return obterJsonp(url.toString());
}

function obterJsonp(url) {
  return new Promise((resolve, reject) => {
    const callbackName = `ufcd0693Callback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const separator = url.includes("?") ? "&" : "?";
    const timeoutId = window.setTimeout(() => {
      delete window[callbackName];
      script.remove();
      reject(new Error("Tempo excedido ao carregar dados do Apps Script."));
    }, 3500);

    window[callbackName] = (dados) => {
      window.clearTimeout(timeoutId);
      delete window[callbackName];
      script.remove();
      resolve(dados);
    };

    script.onerror = () => {
      window.clearTimeout(timeoutId);
      delete window[callbackName];
      script.remove();
      reject(new Error("Não foi possível carregar dados do Apps Script."));
    };

    script.src = `${url}${separator}callback=${callbackName}`;
    document.body.appendChild(script);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getGammaEmbedUrl(url) {
  if (!url) return "";
  if (!url.includes("gamma.app/docs/")) return url;
  const id = url.split("-").pop();
  return `https://gamma.app/embed/${id}`;
}

function renderGammaContentPage(root, topic, embedUrl) {
  const frameUrl = getGammaEmbedUrl(embedUrl);
  document.body.classList.add("gamma-view");
  root.innerHTML = `
    <section class="gamma-section content-gamma-full" aria-label="${escapeHtml(topic.cardTitle || topic.title)}">
      <iframe
        class="external-frame full-page-frame gamma-content-frame"
        src="${escapeHtml(frameUrl)}"
        title="${escapeHtml(topic.cardTitle || topic.title)}"
        loading="lazy"
        allow="fullscreen"
        allowfullscreen>
      </iframe>
    </section>
  `;
}

function renderTopicPage() {
  const root = document.getElementById("topic-root");
  if (!root) return;

  const topic = topicById(document.body.dataset.topic) || topics[0];
  const gammaUrl = obterGammaUrl(topic);
  const gammaDisponivel = Boolean(gammaUrl && isItemVisible("conteudos", topic.id));
  document.body.classList.toggle("gamma-view", gammaDisponivel);
  document.title = `UFCD 0693 | ${topic.title}`;
  document.querySelectorAll("#submenu-conteudos a").forEach((link) => {
    const active = link.getAttribute("href")?.endsWith(topic.url);
    link.classList.toggle("active", Boolean(active));
  });

  if (gammaDisponivel) {
    renderGammaContentPage(root, topic, gammaUrl);
    return;
  }

  const topicItems = Array.isArray(topic.items) && topic.items.length
    ? `
          <article class="card">
            <h2>Subconteúdos</h2>
            <ul class="clean-list">
              ${topic.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>
    `
    : "";

  root.innerHTML = `
    <section class="hero content-hero no-image-hero">
      <div class="hero-content">
        <h1>${topic.cardTitle}</h1>
        <p>${topic.intro}</p>
      </div>
    </section>

    <section class="section">
      <div class="lesson-layout">
        <div class="lesson-stack">
          <article class="card placeholder-note">
            <h2>Conteúdo para disponibilização</h2>
            <p>Esta página está integrada na estrutura do site e será disponibilizada de acordo com o controlo definido pelo formador.</p>
          </article>
          ${topicItems}
          <article class="card">
            <h2>1. Enquadramento</h2>
            <p>Espaço reservado para explicar o tema com linguagem simples e exemplos ligados à utilização prática de correio eletrónico, documentos digitais e pesquisa na web.</p>
          </article>
          <article class="card">
            <h2>2. Exemplo orientado</h2>
            <p>Espaço reservado para uma demonstração passo a passo, adequada ao nível introdutório da UFCD.</p>
          </article>
          <article class="card activity-card">
            <p class="eyebrow">Atividade</p>
            <h2>Experimenta</h2>
            <p>Espaço reservado para uma tarefa curta que permita aplicar este conteúdo.</p>
          </article>
        </div>
        <aside class="card aside-box">
          <h3>Nesta página</h3>
          <ul class="clean-list">
            ${topic.items?.length ? "<li>Subconteúdos</li>" : ""}
            <li>Enquadramento</li>
            <li>Exemplo orientado</li>
            <li>Atividade</li>
            <li>Síntese</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function renderActivityPage() {
  const root = document.getElementById("activity-root") || document.getElementById("evaluation-root");
  if (!root) return;

  const evaluationIds = {
    diagnostica: "avaliacao-diagnostica",
    "resultados-diagnostica": "resultados-diagnostica",
    sumativa: "avaliacao-sumativa",
    "entre-pares": "avaliacao-entre-pares",
    "autoavaliacao-final": "autoavaliacao-final",
    formacao: "avaliacao-formacao"
  };
  const activityId = document.body.dataset.activity;
  const evaluationId = evaluationIds[document.body.dataset.evaluation] || document.body.dataset.evaluation;
  const activity = activities.find((item) => item.id === activityId)
    || evaluations.find((item) => item.id === activityId)
    || evaluations.find((item) => item.id === evaluationId)
    || activities[0];
  const isEvaluation = evaluations.some((item) => item.id === activity.id);
  document.title = `UFCD 0693 | ${activity.title}`;

  const activeSubmenu = document.getElementById(isEvaluation ? "submenu-avaliacao" : "submenu-atividades");
  activeSubmenu?.querySelectorAll("a").forEach((link) => {
    const active = link.getAttribute("href")?.endsWith(activity.url);
    link.classList.toggle("active", Boolean(active));
  });

  if (activity.id === "controlo-teams") {
    renderTeamsControl(root, {
      compact: document.body.dataset.depth === "embed",
      publicView: document.body.dataset.depth !== "embed"
    });
    return;
  }

  if (activity.id === "projeto-final-apresentacao") {
    const projectColumns = [
      ["TI 1 — Apresentação e expetativas", "Criação do Padlet, apresentação inicial e expetativas em relação à formação."],
      ["TI 2 — Organização digital da ação", "Estrutura de pastas criada na Google Drive e reflexão sobre os critérios de organização."],
      ["TI 3 — Agenda eletrónica", "Eventos, tarefas, notificações e ligação entre o Google Calendar e a Google Drive."],
      ["TI 4 — Comunicação profissional", "Envio, receção e resposta a uma mensagem profissional através do Gmail."],
      ["TI 5 — Gestão da caixa de correio", "Etiquetas, filtro, arquivo, reencaminhamento, eliminação e recuperação de mensagens."],
      ["TI 6 — Pesquisa avançada", "Expressões de pesquisa, fontes consultadas e avaliação da fiabilidade da informação."],
      ["TI 7 — Autoavaliação e reflexão final", "Autoavaliação, síntese das aprendizagens, dificuldades, estratégias e aplicação das competências."]
    ];

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Projeto Final</p>
            <h1>Do Click ao Guardar</h1>
            <p class="lead">O Projeto Final consiste na construção progressiva de um Padlet individual com as evidências e reflexões das Tarefas Individuais realizadas ao longo da UFCD 0693.</p>
          </div>

          <div class="activity-meta-grid">
            <article class="card activity-meta-card">
              <p class="eyebrow">Formato</p>
              <h3>Padlet em Colunas</h3>
            </article>
            <article class="card activity-meta-card">
              <p class="eyebrow">Desenvolvimento</p>
              <h3>Ao longo da UFCD</h3>
            </article>
            <article class="card activity-meta-card">
              <p class="eyebrow">Registo</p>
              <h3>Ligação no Moodle</h3>
            </article>
          </div>

          <article class="card activity-card">
            <p class="eyebrow">Objetivo</p>
            <h2>Construir um registo digital organizado das atividades realizadas</h2>
            <p>Cada Tarefa Individual corresponde a uma coluna do Padlet. Nessa coluna devem ser publicadas as evidências solicitadas, uma breve explicação do trabalho e uma reflexão sobre a aprendizagem realizada.</p>
            <p>O Padlet completo constitui o Projeto Final da UFCD 0693.</p>
            <div class="presentation-strip">
              <span>Google Drive</span>
              <span>Google Calendar</span>
              <span>Gmail</span>
              <span>Pesquisa web</span>
              <span>Padlet</span>
              <span>Moodle</span>
            </div>
          </article>

          <details class="task-overview-card" open>
            <summary>
              <span class="task-module-copy">
                <strong>Estrutura do Padlet</strong>
                <small>Uma coluna própria para cada Tarefa Individual.</small>
              </span>
              <span class="task-module-mark" aria-hidden="true">PADLET</span>
            </summary>
            <div class="task-module-body">
              <p>O Padlet deve ter uma coluna identificada para cada Tarefa Individual, da TI 1 à TI 7. A primeira coluna reúne a apresentação inicial e as expetativas; a última reúne a autoavaliação e a reflexão final.</p>
            </div>
          </details>

          <div class="task-module-list">
            ${projectColumns.map(([title, text], index) => `
              <details class="task-module-card" ${index === 0 ? "open" : ""}>
                <summary>
                  <span class="task-module-copy">
                    <strong>${title}</strong>
                    <small>${text}</small>
                  </span>
                  <span class="task-module-mark" aria-hidden="true">${index + 1}</span>
                </summary>
                <div class="task-module-body">
                  <p>${text}</p>
                </div>
              </details>
            `).join("")}
          </div>

          <div class="activity-output-grid">
            <article class="card">
              <p class="eyebrow">Em cada coluna</p>
              <h3>Evidência, explicação e reflexão</h3>
              <ul class="clean-list task-prompt-list">
                <li>Título da tarefa.</li>
                <li>Breve explicação do trabalho realizado.</li>
                <li>Capturas de ecrã ou outras evidências solicitadas.</li>
                <li>Ferramentas utilizadas.</li>
                <li>Principal aprendizagem e dificuldade sentida, quando aplicável.</li>
                <li>Proteção dos dados pessoais antes da publicação.</li>
              </ul>
            </article>

            <article class="card">
              <p class="eyebrow">Google Drive</p>
              <h3>Organização dos ficheiros</h3>
              <p>Os ficheiros da UFCD devem ser guardados em <strong>26109/02-0693</strong>, usando as subpastas Conteúdos, Atividades e Evidências.</p>
              <p>A Google Drive guarda os ficheiros; o Padlet apresenta as evidências selecionadas e as respetivas reflexões.</p>
            </article>

            <article class="card">
              <p class="eyebrow">Moodle</p>
              <h3>Registo de cada tarefa</h3>
              <p>Depois de cada TI, publicar no Fórum correspondente uma confirmação da realização, uma breve síntese, a principal aprendizagem e a ligação para o Padlet, sem anexos.</p>
            </article>
          </div>

          <article class="card activity-card">
            <p class="eyebrow">Verificação final</p>
            <h2>Confirmar antes de concluir</h2>
            <ul class="clean-list task-prompt-list">
              <li>Todas as colunas previstas estão criadas.</li>
              <li>As evidências estão organizadas na coluna correta.</li>
              <li>As imagens e os textos são legíveis.</li>
              <li>Não existem dados pessoais visíveis.</li>
              <li>As reflexões estão completas.</li>
              <li>A ligação publicada no Moodle funciona.</li>
              <li>O Padlet apresenta uma organização visual coerente.</li>
            </ul>
          </article>

          <article class="card">
            <p class="eyebrow">Partilha posterior</p>
            <h3>Ligação ao e-portefólio</h3>
            <p>Depois de concluído, o Projeto Final poderá ser partilhado no e-portefólio da ação como evidência do trabalho desenvolvido na UFCD 0693.</p>
          </article>
        </div>
      </section>
    `;
    return;
  }

  if (activity.id === "tarefas-grupo") {
    const overviewItems = [
      "A formação está organizada em 7 dias de trabalho.",
      "Abrir o harmónio correspondente ao tema tratado no dia.",
      "Cada sala trabalha apenas a palavra que lhe está atribuída.",
      "Explicar o significado por palavras próprias.",
      "Acrescentar um exemplo simples quando fizer sentido.",
      "Registar o contributo no glossário colaborativo."
    ];

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <details class="task-overview-card">
            <summary>
              <span class="task-module-copy">
                <strong>Glossário colaborativo</strong>
                <small>Todos os dias se acrescentam novos termos, definições e exemplos para construir uma base comum de vocabulário técnico.</small>
              </span>
              <span class="task-module-mark" aria-hidden="true">TG</span>
            </summary>
            <div class="task-module-body">
              <p>Nesta atividade vamos construir, ao longo dos 7 dias da UFCD 0693, um glossário colaborativo.</p>
              <ul class="moodle-like-list">
                ${overviewItems.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </details>

          <div class="task-module-list">
            ${groupTasks.filter((task) => isItemVisible("tarefasGrupo", task.title)).map((task, index) => `
              <details class="task-module-card">
                <summary>
                  <span class="task-module-copy">
                    <strong>${task.title || task.topic}</strong>
                    <small>${task.intro}</small>
                  </span>
                  <span class="task-module-mark" aria-hidden="true">TG ${index + 1}</span>
                </summary>

                <div class="task-module-body">
                  <p>Tema associado: ${task.topic}.</p>
                  <p>Cada termo deve ser trabalhado com uma definição clara, linguagem acessível e, sempre que possível, um exemplo simples.</p>

                  <div class="task-block">
                    <strong>Palavras a trabalhar</strong>
                    <div class="word-list">
                      ${task.words.map(([word, group]) => `<span><strong>${word}</strong> ${group}</span>`).join("")}
                    </div>
                  </div>

                  <div class="embed-fallback resource-action-row align-right">
                    ${obterGlossarioUrl() ? `<a class="small-button orange" href="${obterGlossarioUrl()}" target="_top">Abrir glossário</a>` : ""}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (activity.id === "tarefas-individuais") {
    const renderList = (items = [], className = "clean-list task-prompt-list") =>
      items.length ? `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";

    const getEssentialSteps = (task) => (task.steps || []).map((part) => {
      const instruction = part.text || part.items?.[0] || "Realiza o procedimento indicado no PDF da tarefa.";
      return `<strong>${part.title}:</strong> ${instruction}`;
    });
    const getTaskPdfUrl = (task) => task.pdfUrl ? `${getBasePath()}${task.pdfUrl}` : "";

    const renderTaskPdfButton = (task) => task.pdfUrl
      ? `<button class="small-button" type="button" data-modal-open="pdf-${task.id}">Abrir PDF da TI</button>`
      : "";

    const renderTaskPdfModal = (task) => {
      const pdfUrl = getTaskPdfUrl(task);
      return pdfUrl ? `
        <div class="modal-backdrop task-pdf-modal-backdrop" id="pdf-${task.id}" hidden>
          <div class="modal task-pdf-modal" role="dialog" aria-modal="true" aria-labelledby="pdf-${task.id}-title">
            <div class="task-pdf-modal-header">
              <h2 id="pdf-${task.id}-title">${task.title}</h2>
              <button class="modal-close task-pdf-close" type="button" data-modal-close aria-label="Fechar janela">&times;</button>
            </div>
            <iframe class="pdf-frame task-pdf-frame" src="${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1" title="PDF - ${task.title}"></iframe>
            <div class="modal-actions">
              <a class="small-button orange" href="${pdfUrl}">Abrir PDF</a>
            </div>
          </div>
        </div>
      ` : "";
    };

    const renderSimplifiedTask = (task) => `
      <div class="detailed-task-content simplified-task-content">
        <div class="task-block">
          <strong>Objetivo</strong>
          <p>${task.objective}</p>
        </div>

        <div class="task-block">
          <strong>O que fazer</strong>
          ${renderList(getEssentialSteps(task))}
        </div>

        ${task.padlet ? `
          <div class="task-block">
            <strong>Padlet — ${task.padlet.column}</strong>
            <p>Cria o post <strong>“${task.padlet.post}”</strong> e publica as evidências e a breve reflexão solicitadas no PDF da tarefa.</p>
          </div>
        ` : ""}

        <div class="task-block">
          <strong>Moodle</strong>
          <p>${task.moodle}</p>
        </div>

        <aside class="task-note-box">
          <strong>Instruções completas</strong>
          <p>Consulta o PDF da tarefa para veres todos os passos, exemplos, ficheiros e critérios de verificação.</p>
        </aside>

        <div class="embed-fallback resource-action-row align-right">
          ${renderTaskPdfButton(task)}
          ${obterForumUrl(task) ? `<a class="small-button orange" href="${obterForumUrl(task)}" target="_top">Abrir tarefa no Moodle</a>` : `<span class="task-link-pending">Ligação a confirmar pela formadora.</span>`}
        </div>

        ${renderTaskPdfModal(task)}

      </div>
    `;

    const overviewItems = [
      "Utilizar a conta Google criada para a formação.",
      "Guardar os ficheiros nas pastas adequadas da Google Drive.",
      "Criar uma coluna própria no Padlet para cada Tarefa Individual.",
      "Publicar no Moodle uma breve síntese e a ligação para o Padlet, sem anexos.",
      "Ocultar dados pessoais antes de publicar capturas de ecrã."
    ];

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Atividades</p>
            <h1>Tarefas Individuais</h1>
            <p class="lead">Atividades práticas desenvolvidas com a conta Google, organizadas na Google Drive e registadas no Padlet e no Moodle.</p>
          </div>

          <details class="task-overview-card" open>
            <summary>
              <span class="task-module-copy">
                <strong>Como realizar as Tarefas Individuais</strong>
                <small>Cada tarefa produz evidências para uma coluna própria do Projeto Final em Padlet.</small>
              </span>
              <span class="task-module-mark" aria-hidden="true">TI</span>
            </summary>
            <div class="task-module-body">
              <ul class="moodle-like-list">
                ${overviewItems.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </details>

          <div class="task-module-list individual-task-list">
            ${individualTasks.filter((task) => isItemVisible("tarefasIndividuais", task.title)).map((task, index) => `
              <details class="task-module-card individual-task-card" ${index === 0 ? "" : ""}>
                <summary>
                  <span class="task-module-copy">
                    <strong>${task.title}</strong>
                    <small>${task.intro}</small>
                  </span>
                  <span class="task-module-mark" aria-hidden="true">TI ${index + 1}</span>
                </summary>

                <div class="task-module-body">
                  ${task.locked ? `
                    <aside class="task-note-box locked-task-note">
                      <strong>Tarefa já realizada</strong>
                      <p>O conteúdo da TI 1 foi preservado e não deve ser alterado.</p>
                    </aside>
                    <div class="task-block">
                      <strong>Orientações</strong>
                      ${renderList(task.prompts)}
                    </div>
                    <div class="task-block">
                      <strong>Evidência</strong>
                      <p>${task.evidence}</p>
                    </div>
                    <div class="embed-fallback resource-action-row align-right">
                      ${renderTaskPdfButton(task)}
                      ${obterForumUrl(task) ? `<a class="small-button orange" href="${obterForumUrl(task)}" target="_top">Abrir tarefa no Moodle</a>` : ""}
                    </div>
                    ${renderTaskPdfModal(task)}
                  ` : renderSimplifiedTask(task)}
                </div>
              </details>
            `).join("")}
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (!isEvaluation) {
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Atividades</p>
            <h1>${activity.title}</h1>
            <p class="lead">${activity.intro}</p>
          </div>

          <div class="activity-meta-grid">
            <article class="card activity-meta-card">
              <p class="eyebrow">Foco</p>
              <h3>${activity.focus}</h3>
            </article>
            <article class="card activity-meta-card">
              <p class="eyebrow">Duração</p>
              <h3>${activity.duration}</h3>
            </article>
          </div>

          <details class="card group-task-card task-details-card">
            <summary>
              <span>
                <h3>Etapas da atividade</h3>
                <p>Consulta a sequência proposta para esta atividade diária.</p>
              </span>
              <span class="accordion-icon" aria-hidden="true"></span>
            </summary>
            <ol class="agenda-list">
              ${activity.steps.map((step) => `
                <li><strong>${step.title}</strong><span>${step.text}</span></li>
              `).join("")}
            </ol>
          </details>

          <div class="activity-output-grid">
            <article class="card activity-card">
              <p class="eyebrow">Produto esperado</p>
              <h3>Resultado da atividade</h3>
              <p>${activity.product}</p>
            </article>

            <article class="card">
              <p class="eyebrow">Evidências</p>
              <h3>Registos a guardar</h3>
              <ul class="clean-list">
                ${activity.evidence.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>
          </div>

          ${activity.mentimeterUrl ? `
            <section class="embedded-page-shell mentimeter-embed-block" aria-label="Mentimeter - ${activity.title}">
              <div class="mentimeter-frame-wrap">
                <iframe
                  class="mentimeter-frame"
                  sandbox="allow-popups allow-scripts allow-same-origin allow-presentation"
                  allowfullscreen="true"
                  allowtransparency="true"
                  frameborder="0"
                  src="${activity.mentimeterUrl}"
                  title="Mentimeter - Brainstorming UFCD 0693"></iframe>
              </div>
              <div class="embed-fallback">
                <a class="small-button" href="${activity.mentimeterUrl}">Abrir apresentação</a>
                ${activity.participationUrl ? `<a class="small-button orange" href="${activity.participationUrl}">Participar</a>` : ""}
                ${activity.qrCode ? `<button class="small-button" type="button" data-modal-open="mentimeter-qr-modal">Mostrar QR Code</button>` : ""}
              </div>
              ${activity.qrCode ? `
                <div class="modal-backdrop qr-modal-backdrop" id="mentimeter-qr-modal" hidden>
                  <div class="modal qr-modal" role="dialog" aria-modal="true" aria-labelledby="mentimeter-qr-title">
                    <button class="modal-close" type="button" data-modal-close aria-label="Fechar janela">&times;</button>
                    <h2 id="mentimeter-qr-title">Participar no brainstorming</h2>
                    <p>Usa o QR Code para aceder à nuvem de palavras no telemóvel.</p>
                    <img src="${getBasePath()}${activity.qrCode}" alt="QR Code para participar no Mentimeter">
                    ${activity.participationUrl ? `<a class="small-button orange" href="${activity.participationUrl}">Abrir ligação de participação</a>` : ""}
                  </div>
                </div>
              ` : ""}
            </section>
          ` : ""}

          ${activity.padletUrl ? `
            <section class="embedded-page-shell padlet-embed-block" aria-label="Padlet - ${activity.title}">
              <div class="section-heading task-page-heading embedded-tool-heading">
                <p class="eyebrow">Padlet</p>
                <h2>Registo colaborativo</h2>
                <p class="lead">Espaço para recolher contributos, ideias e sínteses da turma durante a atividade.</p>
              </div>
              <iframe
                class="external-frame padlet-frame"
                src="${activity.padletUrl}"
                title="Padlet - Brainstorming UFCD 0693"
                loading="lazy"></iframe>
              <div class="embed-fallback">
                <a class="small-button" href="${activity.padletUrl}">Abrir Padlet</a>
              </div>
            </section>
          ` : ""}
        </div>
      </section>
    `;
    return;
  }

  root.innerHTML = `
    <section class="section task-page-section">
        <div class="section-inner">
          ${isEvaluation && activity.embedUrl ? "" : `
            <div class="section-heading task-page-heading">
            ${isEvaluation ? `
            <h1>${activity.title}</h1>
            ` : `
            <p class="eyebrow">Atividades</p>
            <h1>${activity.title}</h1>
            <p class="lead">${activity.intro}</p>
            `}
          </div>
          `}
        ${activity.embedUrl ? `
          <article class="card embedded-evaluation-card">
            <div class="embedded-resource">
              <iframe
                class="external-frame evaluation-frame"
                src="${construirUrlEmbedAvaliacao(activity.embedUrl)}"
                width="100%"
                height="900"
                style="border:0;"
                loading="lazy"
                referrerpolicy="unsafe-url"
                title="${activity.embedTitle || activity.title}"></iframe>
            </div>
          </article>
        ` : `
          <article class="card group-task-card">
            <p class="eyebrow">A preparar</p>
            <h3>Espaço reservado</h3>
            <p>Esta página está pronta para receber instruções, critérios, ficheiros de apoio ou formulários associados à atividade.</p>
          </article>
        `}
      </div>
    </section>
  `;
}

function renderResourcePage() {
  const root = document.getElementById("resource-root");
  if (!root) return;

  const resource = resources.find((item) => item.id === document.body.dataset.resource) || resources[0];
  document.title = `UFCD 0693 | ${resource.title}`;

  if (resource.gptUrl) {
    if (!isItemVisible("assistentesGpt", resource.id)) {
      root.innerHTML = `
        <section class="section task-page-section">
          <div class="section-inner">
            <article class="card group-task-card">
              <p class="eyebrow">Recurso</p>
              <h1>${resource.title}</h1>
              <p>Este assistente ainda não está disponível.</p>
            </article>
          </div>
        </section>
      `;
      return;
    }

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Recursos</p>
            <h1 class="resource-title-with-icon">
              <a href="${resource.gptUrl}">
                ${resource.menuIcon ? `<img src="${getBasePath()}${resource.menuIcon}" alt="" aria-hidden="true">` : ""}
                <span>${resource.title}</span>
              </a>
            </h1>
            <p class="lead">Este assistente serve para apoiar o estudo dos utilitários complementares, ajudando a esclarecer dúvidas, rever procedimentos e orientar a realização das tarefas.</p>
          </div>

          <div class="resource-list">
            <article class="card group-task-card">
              <p class="eyebrow">Como utilizar</p>
              <h3>Antes de abrir o assistente</h3>
              <ul class="clean-list task-prompt-list">
                <li>Identifica o conteúdo ou atividade em que estás a trabalhar.</li>
                <li>Escreve a tua dúvida de forma clara e concreta.</li>
                <li>Indica o que já tentaste fazer ou compreender.</li>
                <li>Pede explicações passo a passo sempre que precisares.</li>
              </ul>
            </article>

            <article class="card group-task-card">
              <p class="eyebrow">Boas práticas</p>
              <h3>Usa como apoio à aprendizagem</h3>
              <p>O assistente deve ajudar a pensar, rever e melhorar respostas. Não deve substituir o teu trabalho: usa as sugestões para compreender melhor os procedimentos e depois constrói a tua própria resposta.</p>
            </article>

            <article class="card group-task-card">
              <p class="eyebrow">Acesso</p>
              <h3>Abrir assistente</h3>
              <p>O assistente abre numa nova aba do navegador. Poderá ser necessário iniciar sessão no ChatGPT.</p>
              <div class="embed-fallback resource-action-row align-right">
                <a class="small-button" href="${resource.gptUrl}">Abrir assistente</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (resource.pdfUrl) {
    const pdfUrl = `${getBasePath()}${resource.pdfUrl}`;
    root.innerHTML = `
      <section class="pdf-reader-shell" aria-label="Leitor do manual em PDF">
        <iframe class="pdf-frame native-pdf-frame" src="${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1" title="Manual da UFCD 0693"></iframe>
        <div class="pdf-fallback">
          <a class="small-button" href="${pdfUrl}">Abrir PDF</a>
          <a class="small-button orange" href="${pdfUrl}" download>Descarregar PDF</a>
        </div>
      </section>
    `;
    return;
  }

  if (resource.downloadFiles || resource.videos) {
    const visibleVideos = (resource.videos || []).filter((video) => isItemVisible("ficheirosExcel", video.id));
    const visibleFiles = (resource.downloadFiles || []).filter((file) => isItemVisible("ficheirosExcel", file.id));
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Recursos</p>
            <h1>${resource.title}</h1>
            <p class="lead">${resource.intro}</p>
          </div>

          ${visibleVideos.length ? `
            <div class="video-resource-list">
              ${visibleVideos.map((video) => {
                const videoUrl = `${getBasePath()}${video.path}`;
                return `
                  <article class="card video-resource-card">
                    <div>
                      <p class="eyebrow">Vídeo</p>
                      <h3>${video.title}</h3>
                      <p>${video.description}</p>
                    </div>
                    <video class="resource-video" controls preload="metadata">
                      <source src="${videoUrl}" type="video/mp4">
                      O teu navegador não permite reproduzir este vídeo.
                    </video>
                  </article>
                `;
              }).join("")}
            </div>
          ` : ""}

          <div class="download-resource-list">
            ${visibleFiles.length ? visibleFiles.map((file, index) => {
              const fileUrl = `${getBasePath()}${file.path}`;
              return `
                <article class="card download-resource-card">
                  <span class="download-resource-number">${index + 1}</span>
                  <div>
                    <h3>${file.title}</h3>
                    <p>${file.description}</p>
                  </div>
                  <a class="small-button" href="${fileUrl}" download>Descarregar ficheiro</a>
                </article>
              `;
            }).join("") : `
              <article class="card group-task-card">
                <p class="eyebrow">Ficheiros</p>
                <h3>A disponibilizar</h3>
                <p>Os ficheiros serão disponibilizados gradualmente pelo formador.</p>
              </article>
            `}
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (resource.externalUrl) {
    root.innerHTML = `
      <section class="embedded-page-shell resource-full-page-shell" aria-label="${resource.title}">
        <iframe class="external-frame full-page-frame resource-full-page-frame" src="${resource.externalUrl}" title="${resource.title}" loading="lazy"></iframe>
      </section>
    `;
    return;
  }

  root.innerHTML = `
    <section class="section task-page-section">
      <div class="section-inner">
        <div class="section-heading task-page-heading">
          <p class="eyebrow">Recursos</p>
          <h1>${resource.title}</h1>
          <p class="lead">${resource.intro}</p>
        </div>
        <article class="card group-task-card">
          <p class="eyebrow">A preparar</p>
          <h3>Espaço reservado</h3>
          <p>Este espaço ficará ligado aos materiais de apoio reais da UFCD 0693.</p>
        </article>
      </div>
    </section>
  `;
}

function renderStandaloneTeamsControlPage() {
  const root = document.getElementById("teams-control-root");
  if (!root) return;

  document.title = "UFCD 0693 | Partilha de ecrã";
  renderTeamsControl(root, { compact: false, publicView: false });
}

async function inicializarVisibilidadeRemotaDoSite(options = {}) {
  const visibilidadeRemotaOk = await carregarVisibilidadeRemotaDoSite();
  if (!visibilidadeRemotaOk) return;

  if (options.render !== false) {
    atualizarSuperficiesVisiveisDoSite();
  }

  const teamsRoot = document.getElementById("activity-root") || document.getElementById("teams-control-root");
  if (teamsRoot) {
    atualizarControlosVisibilidadeDoSite(teamsRoot);
  }
}

async function inicializarSite() {
  carregarVisibilidadeDoSite();
  carregarLinksDoSite();

  renderContentMenus();
  renderActivityMenus();
  renderEvaluationMenus();
  renderResourceMenus();
  setupMenu();
  setupFloatingActions();
  renderHomeCards();
  renderConteudosIndex();
  renderTopicPage();
  renderActivityPage();
  renderResourcePage();
  renderStandaloneTeamsControlPage();
  setupModals();
  manterMenuAtivoAberto();
  abrirMenuPeloHashDoIndex();

  inicializarVisibilidadeRemotaDoSite();
}

inicializarSite();
