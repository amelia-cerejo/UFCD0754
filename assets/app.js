const UFCD = {
  code: "0754",
  title: "Processador de Texto",
  hours: "50 horas",
  action: "26109",
  driveFolder: "26109/03-0754"
};

const pendingLinks = {
  appsScriptUrl: window.UFCD0754_PENDING_LINKS?.appsScriptUrl || "PENDENTE_UFCD0754_APPS_SCRIPT_URL",
  spreadsheetId: window.UFCD0754_PENDING_LINKS?.spreadsheetId || "PENDENTE_UFCD0754_SPREADSHEET_ID",
  mentimeterEmbedUrl: "https://www.mentimeter.com/app/presentation/alfbbg1d39wqoma1jbvcvpbirv9hyatr/embed",
  mentimeterParticipationUrl: "https://www.menti.com/ald495rdgkt3",
  glossaryUrl: /^https?:\/\//i.test(window.UFCD0754_PENDING_LINKS?.glossaryUrl || "") ? window.UFCD0754_PENDING_LINKS.glossaryUrl : "",
  individualTaskForumUrls: Array.isArray(window.UFCD0754_PENDING_LINKS?.individualTaskForumUrls)
    ? window.UFCD0754_PENDING_LINKS.individualTaskForumUrls.filter((url) => /^https?:\/\//i.test(url))
    : [],
  manualPdf: window.UFCD0754_PENDING_LINKS?.manualPdf || ""
};

const topics = [
  { id: "introducao", title: "Introdução", menuTitle: "Introdução", cardTitle: "Introdução ao processador de texto", area: "Enquadramento", intro: "Organização da UFCD, objetivos, metodologia e forma de construir o documento final.", image: "../assets/img/ufcd0754-capa-site.png", url: "conteudos/introducao.html", showInContents: false },
  { id: "ambiente-trabalho", title: "Introdução", menuTitle: "Introdução", cardTitle: "Introdução ao processador de texto", intro: "Primeiro contacto com o Word: compreender para que serve um processador de texto, reconhecer a janela principal, inserir texto e utilizar a visualização e a ajuda.", image: "../assets/img/ufcd0754-capa-site.png", url: "conteudos/ambiente-trabalho.html", items: ["Finalidade do processador de texto", "Janela principal do Word", "Inserção de texto com o teclado", "Modos de visualização básicos", "Ajuda e pesquisa de comandos"] },
  { id: "edicao-texto", title: "Operações básicas", menuTitle: "Operações básicas", cardTitle: "Operações básicas", intro: "Criar, guardar e abrir documentos, selecionar texto, anular e repetir ações.", image: "../assets/img/ufcd0754-capa-site.png", url: "conteudos/edicao-texto.html", items: ["Criação, gravação e abertura de documentos", "Seleção de texto", "Anulação e repetição de ações"] },
  { id: "formatacao-caracteres-paragrafos", title: "Formatações", menuTitle: "Formatações", cardTitle: "Formatações", intro: "Aplicar formatações ao documento, ao tipo de letra e aos parágrafos; utilizar tabelas predefinidas, listas, limites e sombreados.", image: "../assets/img/ufcd0754-capa-site.png", url: "conteudos/formatacao-caracteres-paragrafos.html", items: ["Formatações globais do documento", "Formatação do tipo de letra", "Formatações de parágrafo", "Utilização das tabelas pré-definidas", "Criação de listas", "Limites e sombreados"] },
  { id: "ferramentas-revisao", title: "Edição e revisão de texto", menuTitle: "Edição e revisão", cardTitle: "Edição e revisão de texto", intro: "Trabalhar com vários documentos, copiar texto, verificar a ortografia e localizar ou substituir conteúdo.", image: "../assets/img/ufcd0754-capa-site.png", url: "conteudos/ferramentas-revisao.html", items: ["Múltiplos documentos abertos", "Cópia do texto", "Verificação ortográfica", "Comando «localizar e substituir»"] },
  { id: "impressao-exportacao", title: "Impressão", menuTitle: "Impressão", cardTitle: "Impressão", intro: "Preparar e verificar o documento antes da impressão.", image: "../assets/img/ufcd0754-capa-site.png", url: "conteudos/impressao-exportacao.html" },
  { id: "tabelas-colunas", title: "Tabulações, tabelas e colunas", menuTitle: "Tabulações e tabelas", cardTitle: "Tabulações, tabelas e colunas", intro: "Organizar informação através de tabulações, tabelas e colunas de texto.", image: "../assets/img/ufcd0754-capa-site.png", url: "conteudos/tabelas-colunas.html" },
  { id: "imagens-objetos", title: "Melhorar o aspeto visual", menuTitle: "Aspeto visual", cardTitle: "Melhorar o aspeto visual", intro: "Integrar elementos visuais e melhorar a apresentação do documento.", image: "../assets/img/ufcd0754-capa-site.png", url: "conteudos/imagens-objetos.html" },
  { id: "estruturacao-documentos", title: "Documentos longos", menuTitle: "Documentos longos", cardTitle: "Documentos longos", intro: "Estruturar e organizar documentos extensos para facilitar a consulta e atualização.", image: "../assets/img/ufcd0754-capa-site.png", url: "conteudos/estruturacao-documentos.html" },
  { id: "boas-praticas", title: "Percorrer rapidamente um documento", menuTitle: "Percorrer documentos", cardTitle: "Percorrer rapidamente um documento", intro: "Utilizar formas rápidas de navegação em documentos extensos.", image: "../assets/img/ufcd0754-capa-site.png", url: "conteudos/boas-praticas.html" }
];

const contentLessons = {
  "ambiente-trabalho": {
    summary: "Nesta introdução, o formando situa o processador de texto como ferramenta de criação, edição, formatação, revisão e partilha de documentos profissionais. O objetivo é ganhar orientação dentro do Word antes de avançar para operações e formatações mais específicas.",
    sections: [
      { title: "Para que serve um processador de texto", text: "Um processador de texto permite transformar ideias, apontamentos e informação em documentos legíveis, organizados e prontos a comunicar. No contexto profissional, é usado para cartas, relatórios, atas, currículos, formulários, procedimentos e outros documentos formais.", points: ["Criar documentos novos a partir de uma página em branco ou de um modelo.", "Editar texto sem refazer o documento de início.", "Formatar títulos, parágrafos, listas, tabelas e elementos visuais.", "Rever, guardar, exportar para PDF e partilhar o resultado final."] },
      { title: "Reconhecer a janela principal do Word", text: "Antes de trabalhar no documento, é importante saber onde estão os comandos principais. A janela do Word organiza as ferramentas por separadores no friso, apresenta a área de escrita ao centro e mostra informação útil na barra de estado.", points: ["Barra de título: identifica o documento aberto.", "Friso: reúne separadores como Base, Inserir, Estrutura, Disposição, Referências, Rever e Ver.", "Área do documento: local onde se escreve e organiza o conteúdo.", "Barra de estado: mostra páginas, palavras, idioma, modos de visualização e zoom."] },
      { title: "Inserir texto com o teclado", text: "O texto é inserido no ponto onde está o cursor. A escrita deve ser feita de forma contínua, deixando o Word mudar automaticamente de linha. A tecla Enter cria um novo parágrafo; não deve ser usada para forçar espaçamentos visuais.", points: ["Usar Espaço apenas entre palavras.", "Usar Enter para terminar um parágrafo.", "Usar Backspace para apagar à esquerda do cursor e Delete para apagar à direita.", "Ativar marcas de formatação quando for necessário perceber espaços, tabulações e parágrafos."] },
      { title: "Modos de visualização e ajuda", text: "Os modos de visualização alteram a forma como o documento aparece no ecrã, sem mudar o conteúdo. A ajuda e a pesquisa de comandos permitem encontrar rapidamente uma ferramenta quando ainda não se sabe onde está.", points: ["Usar Esquema de Impressão para ver o documento como será apresentado em papel ou PDF.", "Ajustar o zoom para trabalhar com conforto, sem alterar o tamanho real do texto.", "Utilizar a caixa de pesquisa/ajuda para localizar comandos pelo nome da tarefa."] }
    ],
    practice: "Abrir o Word, identificar no ecrã a barra de título, o friso, a área do documento e a barra de estado; escrever dois pequenos parágrafos; testar o zoom, um modo de visualização e a pesquisa de um comando."
  },
  "edicao-texto": {
    summary: "As operações básicas permitem iniciar um documento, guardá-lo corretamente, voltar a abri-lo e corrigir ações sem perder o trabalho realizado.",
    sections: [
      { title: "Criação, gravação e abertura de documentos", text: "Um documento pode ser criado em branco ou a partir de um modelo. Na primeira gravação é necessário escolher a localização, o nome e o formato do ficheiro.", points: ["Usar nomes claros e coerentes.", "Confirmar a pasta antes de guardar.", "Distinguir Guardar de Guardar Como."] },
      { title: "Seleção de texto", text: "Antes de copiar, eliminar ou formatar, é necessário selecionar o texto. A seleção pode abranger um carácter, uma palavra, uma linha, um parágrafo ou todo o documento.", points: ["Arrastar o rato para selecionar uma parte específica.", "Usar duplo clique para selecionar uma palavra.", "Usar Ctrl+A para selecionar todo o documento."] },
      { title: "Anulação e repetição de ações", text: "Anular recua nas últimas ações realizadas. Repetir volta a aplicar uma ação anulada ou repete a última operação, conforme o contexto.", points: ["Usar Ctrl+Z para anular.", "Usar Ctrl+Y para repetir ou refazer.", "Guardar regularmente, mesmo quando a gravação automática está ativa."] }
    ],
    practice: "Criar um documento, guardá-lo com o nome indicado, escrever e selecionar texto, testar copiar, cortar, colar, anular e repetir."
  },
  "formatacao-caracteres-paragrafos": {
    summary: "A formatação melhora a legibilidade e cria uma apresentação coerente. Deve ser aplicada com critério, evitando excesso de cores, tipos de letra ou efeitos.",
    sections: [
      { title: "Documento, tipo de letra e parágrafo", text: "As formatações globais definem aspetos como margens, orientação e tamanho da página. A formatação do tipo de letra atua nos caracteres; a formatação de parágrafo controla alinhamento, avanços, espaçamento e entrelinha.", points: ["Definir primeiro a estrutura global do documento.", "Usar poucos tipos e tamanhos de letra.", "Aplicar espaçamento de parágrafo em vez de linhas vazias."] },
      { title: "Tabelas predefinidas e listas", text: "As tabelas predefinidas ajudam a organizar informação em linhas e colunas. As listas com marcas ou numeração apresentam itens e sequências de forma clara.", points: ["Escolher uma tabela adequada ao tipo de informação.", "Usar marcas para itens sem ordem.", "Usar numeração para etapas ou prioridades."] },
      { title: "Limites e sombreados", text: "Os limites criam linhas em redor de texto, parágrafos ou tabelas. Os sombreados aplicam uma cor de fundo e podem destacar informação importante.", points: ["Aplicar destaque apenas onde acrescenta significado.", "Garantir contraste suficiente entre texto e fundo.", "Manter o mesmo estilo em elementos equivalentes."] }
    ],
    practice: "Formatar um título e dois parágrafos, criar uma lista, aplicar limites e sombreado e comparar o resultado antes e depois."
  },
  "ferramentas-revisao": {
    summary: "A edição e a revisão permitem melhorar o conteúdo, corrigir erros e trabalhar com maior rapidez em documentos simples ou extensos.",
    sections: [
      { title: "Múltiplos documentos abertos e cópia de texto", text: "É possível manter vários documentos abertos e alternar entre eles. O texto selecionado pode ser copiado ou movido dentro do mesmo documento ou entre documentos.", points: ["Confirmar qual é o documento ativo.", "Usar Copiar quando o original deve permanecer.", "Usar Cortar quando o conteúdo deve mudar de lugar."] },
      { title: "Verificação ortográfica", text: "O corretor identifica possíveis erros ortográficos e gramaticais, mas as sugestões devem ser analisadas. O idioma de revisão tem de corresponder ao idioma do texto.", points: ["Definir Português (Portugal) como idioma de revisão.", "Ler a frase completa antes de aceitar uma sugestão.", "Adicionar ao dicionário apenas palavras corretas."] },
      { title: "Localizar e substituir", text: "Localizar procura palavras ou expressões. Localizar e substituir permite trocar ocorrências de forma individual ou em todo o documento.", points: ["Rever cada ocorrência quando a substituição puder alterar o sentido.", "Usar Mais opções para controlar maiúsculas, palavras completas ou formatação.", "Guardar uma cópia antes de substituições extensas."] }
    ],
    practice: "Abrir dois documentos, copiar um parágrafo entre eles, executar a revisão ortográfica e substituir uma palavra repetida."
  },
  "impressao-exportacao": {
    summary: "Antes de imprimir, é necessário confirmar a apresentação das páginas e escolher apenas as opções adequadas ao resultado pretendido.",
    sections: [
      { title: "Pré-visualização", text: "A pré-visualização mostra como o documento ficará em papel e permite detetar páginas vazias, cortes, margens inadequadas ou quebras mal colocadas.", points: ["Percorrer todas as páginas.", "Confirmar cabeçalhos, rodapés e numeração.", "Verificar tabelas e imagens junto às margens."] },
      { title: "Definições de impressão", text: "É possível escolher a impressora, o número de cópias, as páginas, a orientação, o tamanho do papel, as margens e a impressão de um ou dos dois lados.", points: ["Imprimir apenas as páginas necessárias.", "Confirmar a orientação Retrato ou Paisagem.", "Usar frente e verso quando for adequado."] },
      { title: "Verificação final", text: "A impressão deve ser o último passo, depois de guardar e rever o documento. Quando não é necessária uma cópia em papel, o PDF preserva melhor a apresentação para partilha.", points: ["Guardar as alterações antes de imprimir.", "Confirmar a impressora selecionada.", "Gerar primeiro um PDF quando for necessário validar o resultado."] }
    ],
    practice: "Abrir a pré-visualização de impressão, identificar as definições disponíveis e explicar quais utilizaria para imprimir apenas duas páginas."
  },
  "tabelas-colunas": {
    summary: "Tabulações, tabelas e colunas organizam informação de formas diferentes. A escolha depende do tipo e da quantidade de conteúdo.",
    sections: [
      { title: "Tabulações", text: "As tabulações alinham texto em posições definidas na régua. Podem ser à esquerda, ao centro, à direita ou decimal e podem incluir carateres de preenchimento.", points: ["Mostrar a régua antes de definir tabulações.", "Escolher o alinhamento adequado aos dados.", "Não substituir tabulações por vários espaços."] },
      { title: "Tabelas", text: "As tabelas organizam informação em linhas, colunas e células. Podem ser inseridas, redimensionadas, formatadas e alteradas através da adição, eliminação ou união de células.", points: ["Usar uma linha de cabeçalho clara.", "Ajustar larguras ao conteúdo.", "Evitar tabelas excessivamente complexas."] },
      { title: "Colunas de texto", text: "As colunas distribuem o texto verticalmente, como num jornal ou boletim. As quebras de coluna permitem controlar onde começa a coluna seguinte.", points: ["Selecionar apenas o texto que deve ficar em colunas.", "Definir número, largura e espaçamento.", "Usar uma quebra de coluna quando necessário."] }
    ],
    practice: "Criar um alinhamento com tabulações, inserir uma tabela simples e formatar um pequeno texto em duas colunas."
  },
  "imagens-objetos": {
    summary: "Imagens e outros elementos visuais podem tornar o documento mais claro e apelativo, desde que tenham uma função e não prejudiquem a leitura.",
    sections: [
      { title: "Inserir e dimensionar imagens", text: "Uma imagem deve ser inserida no local adequado e redimensionada pelas alças dos cantos para preservar as proporções.", points: ["Utilizar imagens com qualidade suficiente.", "Manter as proporções originais.", "Evitar imagens desfocadas ou decorativas em excesso."] },
      { title: "Disposição do texto", text: "A disposição controla a relação entre a imagem e o texto. «Em linha com o texto» trata a imagem como um carácter; outras opções, como «Quadrado», permitem que o texto contorne a imagem.", points: ["Escolher a opção de acordo com o resultado pretendido.", "Confirmar a posição depois de editar o texto.", "Usar alinhamento e espaçamento consistentes."] },
      { title: "Aspeto visual e legibilidade", text: "Formas, caixas de texto, ícones e cores devem apoiar a hierarquia da informação. Um documento profissional mantém consistência e espaço em branco suficiente.", points: ["Criar contraste entre títulos e corpo do texto.", "Alinhar elementos relacionados.", "Rever o documento a diferentes níveis de zoom."] }
    ],
    practice: "Inserir uma imagem, testar «Em linha com o texto» e «Quadrado», redimensioná-la e justificar qual opção melhora a página."
  },
  "estruturacao-documentos": {
    summary: "Os documentos longos exigem uma estrutura consistente para poderem ser atualizados, percorridos e compreendidos com facilidade.",
    sections: [
      { title: "Títulos e estilos", text: "Os estilos aplicam em conjunto várias características de formatação. Os estilos Título 1, Título 2 e Título 3 criam uma hierarquia que o Word consegue reconhecer.", points: ["Usar Título 1 nas divisões principais.", "Manter níveis de título coerentes.", "Alterar o estilo em vez de formatar cada título manualmente."] },
      { title: "Quebras, cabeçalhos e rodapés", text: "As quebras controlam a passagem para uma nova página ou secção. Cabeçalhos e rodapés apresentam informação repetida, como título, autor, data ou número de página.", points: ["Usar quebra de página em vez de vários Enter.", "Criar secções apenas quando forem necessárias definições diferentes.", "Verificar a primeira página e as páginas pares e ímpares."] },
      { title: "Índice automático", text: "O índice automático é criado a partir dos estilos de título. Depois de alterar o documento, deve ser atualizado para apresentar os títulos e números de página corretos.", points: ["Aplicar os estilos antes de inserir o índice.", "Escolher o local adequado para o índice.", "Atualizar toda a tabela antes da entrega."] }
    ],
    practice: "Aplicar estilos a três níveis de títulos, inserir uma quebra de página, numerar as páginas e criar um índice automático."
  },
  "boas-praticas": {
    summary: "Num documento extenso, a navegação rápida reduz o tempo de procura e ajuda a verificar a estrutura antes da entrega.",
    sections: [
      { title: "Painel de Navegação", text: "O Painel de Navegação apresenta os títulos do documento quando foram utilizados estilos. Um clique num título desloca diretamente para essa parte.", points: ["Ativar o painel no separador Ver.", "Confirmar a hierarquia dos títulos.", "Arrastar títulos apenas quando se pretende reorganizar o documento."] },
      { title: "Procurar no documento", text: "A pesquisa permite localizar palavras, expressões, títulos, páginas ou outros elementos sem percorrer o documento manualmente.", points: ["Usar Ctrl+F para abrir a pesquisa.", "Escrever uma expressão suficientemente específica.", "Percorrer os resultados e confirmar o contexto."] },
      { title: "Atalhos de deslocação", text: "O teclado e a barra de deslocamento permitem chegar rapidamente ao início, ao fim ou a diferentes páginas do documento.", points: ["Usar Ctrl+Home para ir ao início.", "Usar Ctrl+End para ir ao fim.", "Combinar pesquisa e Painel de Navegação em documentos longos."] }
    ],
    practice: "Abrir um documento longo, ativar o Painel de Navegação, procurar uma expressão e deslocar-se para o início e para o fim usando atalhos."
  }
};

const contentMenuGroups = topics
  .filter((topic) => topic.showInContents !== false)
  .map((topic) => ({
    title: topic.title,
    theme: "representation",
    children: [{ topicId: topic.id }]
  }));

const DEFAULT_APPS_SCRIPT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwTZTbLAY7RLR8RSbX3ogc6WT1J8DJZdgDRq_FUD055ByJm2eXvJ8zYzKIGSb1RYxAjaw/exec";
const DEFAULT_APPS_SCRIPT_SPREADSHEET_ID = "14xWArQOzb-1fZ4QxZXjuoJK1dxhjWmbwWmF7lsK-a9o";
const APPS_SCRIPT_WEB_APP_URL = window.UFCD0754_APPS_SCRIPT_URL || DEFAULT_APPS_SCRIPT_WEB_APP_URL;
const APPS_SCRIPT_SPREADSHEET_ID = window.UFCD0754_SPREADSHEET_ID || DEFAULT_APPS_SCRIPT_SPREADSHEET_ID;

const activities = [
  { id: "controlo-teams", title: "Partilha de ecrã", menuTitle: "Partilha de ecrã", intro: "Tabela simples para acompanhar a participação prática nas sessões síncronas.", url: "atividades/controlo-teams.html" },
  { id: "mentimeter-inicial", title: "Escreve 3 palavras", menuTitle: "Brainstorming", intro: "Quando pensas num processador de texto, que três palavras te vêm à cabeça?", url: "atividades/mentimeter-inicial.html", focus: "Nuvem de palavras inicial", duration: "", product: "Resposta no Mentimeter: três palavras associadas a processador de texto.", mentimeterUrl: pendingLinks.mentimeterEmbedUrl, participationUrl: pendingLinks.mentimeterParticipationUrl, padletUrl: "", qrCode: "assets/img/mentimeter_qr_code_0754.png", steps: [{ title: "Pergunta", text: "Quando pensas num processador de texto, que três palavras te vêm à cabeça?" }], evidence: ["Nuvem de palavras inicial"] },
  { id: "tarefas-grupo", title: "Glossário - Tarefas de Grupo", menuTitle: "Tarefas de Grupo", intro: "Tarefas de grupo para construir vocabulário técnico no glossário do Moodle.", url: "atividades/tarefas-grupo.html", focus: "Glossário colaborativo", duration: "A partir do segundo dia", product: "Definição curta, exemplo prático e aplicação ao documento final.", steps: [{ title: "Distribuir funções", text: "Cada grupo recolhe, escreve, revê e publica a sua entrada." }, { title: "Definir o conceito", text: "A definição deve ser simples, correta e aplicada ao processador de texto." }, { title: "Publicar no Moodle", text: "A entrada fica registada no glossário indicado pela formadora." }], evidence: ["Entrada no glossário", "Exemplo prático", "Revisão pelos colegas"] },
  { id: "tarefas-individuais", title: "Tarefas Individuais", intro: "Resumo das tarefas práticas; as instruções completas são disponibilizadas em PDF.", url: "atividades/tarefas-individuais.html", focus: "Trabalho individual", duration: "A partir do segundo dia", product: "Versões sucessivas do documento «Bem-vindo ao Word», guardadas na Drive.", steps: [{ title: "Ler o enunciado", text: "Confirmar o objetivo e consultar o PDF da tarefa." }, { title: "Melhorar o documento", text: "Criar uma nova versão e aplicar as operações indicadas." }, { title: "Guardar", text: "Guardar a versão na pasta partilhada da Drive." }], evidence: ["Documento atualizado", "Versão guardada na Drive"] },
  { id: "projeto-final-apresentacao", title: "Projeto Final - Documento profissional", menuTitle: "Projeto Final", intro: "Construção progressiva do documento «Bem-vindo ao Word», desenvolvido e revisto ao longo da UFCD.", url: "atividades/projeto-final-apresentacao.html", focus: "Projeto individual", duration: "Ao longo da UFCD", product: "Documento final formatado, revisto e exportado para PDF.", steps: [{ title: "Partir do ficheiro-base", text: "Abrir o documento fornecido e criar a primeira cópia de trabalho." }, { title: "Criar versões sucessivas", text: "Aplicar em cada TI os conteúdos trabalhados e guardar uma nova versão na Drive." }, { title: "Rever e auditar", text: "Aplicar a lista de verificação e receber a auditoria de um colega." }, { title: "Finalizar", text: "Exportar o documento final para PDF e partilhar a ligação de leitura." }], evidence: ["Versões na Drive", "Documento editável", "PDF final", "Reflexão final"] }
];

const evaluations = [
  { id: "avaliacao-diagnostica", title: "Avaliação Diagnóstica", menuTitle: "Diagnóstica", intro: "Avaliação inicial dos conhecimentos sobre processador de texto e documentos profissionais.", url: "avaliacoes/avaliacao-diagnostica.html", children: ["resultados-diagnostica"], embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0754/00-diagnostico.html", embedTitle: "DIAG_1" },
  { id: "resultados-diagnostica", parentId: "avaliacao-diagnostica", title: "Resultados da Avaliação Diagnóstica", menuTitle: "Resultados", intro: "Leitura global das respostas recolhidas na avaliação diagnóstica.", url: "avaliacoes/resultados-diagnostica.html" },
  { id: "avaliacao-sumativa", title: "Avaliação Sumativa", menuTitle: "Sumativa", intro: "Avaliação final das aprendizagens da UFCD 0754.", url: "avaliacoes/avaliacao-sumativa.html", embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0754/02-sumativa.html", embedTitle: "SUM_1" },
  { id: "autoavaliacao-final", title: "Autoavaliação Final", menuTitle: "Autoavaliação", intro: "Reflexão final sobre as competências desenvolvidas, comparável com a avaliação diagnóstica.", url: "avaliacoes/autoavaliacao-final.html", embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0754/04-autoavaliacao-final.html", embedTitle: "AUTO_1" },
  { id: "avaliacao-entre-pares", title: "Avaliação Entre Pares - Auditoria", menuTitle: "Entre pares", intro: "Auditoria de qualidade ao projeto final de um colega.", url: "avaliacoes/avaliacao-entre-pares.html", embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0754/03-entre-pares.html", embedTitle: "Auditoria de qualidade" },
  { id: "avaliacao-formacao", title: "Avaliação da Formação", menuTitle: "Formação", intro: "Feedback sobre a qualidade da formação, separado da autoavaliação das aprendizagens.", url: "avaliacoes/avaliacao-formacao.html", embedUrl: "https://avaliacoes-formacao.netlify.app/avaliacao-formacao.html?codigo_ufcd=0754", embedTitle: "Avaliação da formação" }
];

const groupTasks = [
  { title: "TG01 - Ambiente do processador de texto", topic: "Ambiente", url: "atividades/tarefas-grupo.html", intro: "Definir conceitos essenciais da interface e da gestão inicial de documentos.", words: [["Faixa de opções", "Grupo 1"], ["Documento", "Grupo 2"], ["Modelo", "Grupo 3"], ["Guardar como", "Grupo 4"]] },
  { title: "TG02 - Edição de texto", topic: "Edição", url: "atividades/tarefas-grupo.html", intro: "Clarificar ações de edição usadas na produção de texto.", words: [["Selecionar", "Grupo 1"], ["Copiar", "Grupo 2"], ["Substituir", "Grupo 3"], ["Anular", "Grupo 4"]] },
  { title: "TG03 - Formatação de texto", topic: "Formatação", url: "atividades/tarefas-grupo.html", intro: "Construir definições sobre formatação de caracteres e parágrafos.", words: [["Tipo de letra", "Grupo 1"], ["Alinhamento", "Grupo 2"], ["Espaçamento", "Grupo 3"], ["Lista", "Grupo 4"]] },
  { title: "TG04 - Estilos e estrutura", topic: "Estrutura", url: "atividades/tarefas-grupo.html", intro: "Relacionar estilos com documentos organizados e fáceis de atualizar.", words: [["Estilo", "Grupo 1"], ["Título", "Grupo 2"], ["Cabeçalho", "Grupo 3"], ["Índice automático", "Grupo 4"]] },
  { title: "TG05 - Tabelas", topic: "Tabelas", url: "atividades/tarefas-grupo.html", intro: "Definir termos usados na criação e formatação de tabelas.", words: [["Tabela", "Grupo 1"], ["Linha", "Grupo 2"], ["Coluna", "Grupo 3"], ["Célula", "Grupo 4"]] },
  { title: "TG06 - Imagens e objetos", topic: "Objetos", url: "atividades/tarefas-grupo.html", intro: "Explorar elementos gráficos e respetiva integração no texto.", words: [["Imagem", "Grupo 1"], ["Legenda", "Grupo 2"], ["Disposição do texto", "Grupo 3"], ["Caixa de texto", "Grupo 4"]] },
  { title: "TG07 - Revisão", topic: "Revisão", url: "atividades/tarefas-grupo.html", intro: "Definir ferramentas de revisão e correção de documentos.", words: [["Corretor ortográfico", "Grupo 1"], ["Comentário", "Grupo 2"], ["Controlar alterações", "Grupo 3"], ["Comparar documentos", "Grupo 4"]] },
  { title: "TG08 - Paginação", topic: "Paginação", url: "atividades/tarefas-grupo.html", intro: "Organizar conceitos ligados à apresentação por páginas.", words: [["Margem", "Grupo 1"], ["Orientação", "Grupo 2"], ["Quebra de página", "Grupo 3"], ["Numeração", "Grupo 4"]] },
  { title: "TG09 - Exportação", topic: "Exportação", url: "atividades/tarefas-grupo.html", intro: "Clarificar formatos e cuidados antes da partilha.", words: [["PDF", "Grupo 1"], ["Impressão", "Grupo 2"], ["Compatibilidade", "Grupo 3"], ["Partilha", "Grupo 4"]] },
  { title: "TG10 - Qualidade visual", topic: "Qualidade", url: "atividades/tarefas-grupo.html", intro: "Identificar critérios de clareza e coerência visual.", words: [["Consistência", "Grupo 1"], ["Legibilidade", "Grupo 2"], ["Hierarquia visual", "Grupo 3"], ["Alinhamento", "Grupo 4"]] },
  { title: "TG11 - Preparação da apresentação final", topic: "Apresentação", url: "atividades/tarefas-grupo.html", intro: "Preparar a explicação do processo seguido no projeto final.", words: [["Síntese", "Grupo 1"], ["Evidência", "Grupo 2"], ["Versão final", "Grupo 3"], ["Reflexão", "Grupo 4"]] },
  { title: "TG12 - Auditoria de qualidade ao projeto", topic: "Auditoria", url: "atividades/tarefas-grupo.html", intro: "Cada elemento avalia o projeto de um colega, verificando organização, correção, qualidade visual, funcionamento, conteúdo e cumprimento dos requisitos.", words: [["Organização", "Grupo 1"], ["Correção", "Grupo 2"], ["Qualidade visual", "Grupo 3"], ["Cumprimento dos requisitos", "Grupo 4"]] }
];

const glossaryUrl = pendingLinks.glossaryUrl;
const individualTaskForumUrls = pendingLinks.individualTaskForumUrls;

const individualTasks = [
  {
    id: "tarefa-individual-1",
    pdfUrl: "assets/pdfs/TI01.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI1 - Registar as expetativas iniciais",
    intro: "Publica\u00e7\u00e3o inicial no Padlet individual sobre conhecimentos pr\u00e9vios, metas e dificuldades esperadas.",
    objective: "Identificar as expetativas, os conhecimentos pr\u00e9vios e as metas pessoais para a aprendizagem do processador de texto.",
    steps: [
      { title: "Publicar", text: "Criar uma publica\u00e7\u00e3o na primeira coluna do Padlet individual." },
      { title: "Identificar", text: "Indicar o nome e escrever o t\u00edtulo \u00abAs minhas expetativas\u00bb." },
      { title: "Responder", text: "Escrever entre 80 e 120 palavras sobre o que j\u00e1 sei fazer no Word, o que quero aprender, em que situa\u00e7\u00f5es pretendo utilizar estas aprendizagens e qual poder\u00e1 ser a minha principal dificuldade." },
      { title: "Rever", text: "Rever ortografia e pontua\u00e7\u00e3o antes de publicar." },
      { title: "Concluir", text: "Confirmar se a publica\u00e7\u00e3o ficou vis\u00edvel no Padlet." }
    ],
    evidence: "Publica\u00e7\u00e3o \u00abAs minhas expetativas\u00bb no Padlet individual.",
    padlet: { column: "Primeira coluna do Padlet individual", post: "As minhas expetativas" },
    moodle: "Usar a liga\u00e7\u00e3o da TI no Moodle indicada pela formadora para confirmar ou acompanhar a tarefa.",
    forumUrls: individualTaskForumUrls
  },
  {
    id: "tarefa-individual-2",
    pdfUrl: "assets/pdfs/TI02.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI2 - Bem-vindo ao Word - opera\u00e7\u00f5es b\u00e1sicas",
    intro: "Criar a primeira c\u00f3pia do ficheiro-base e praticar opera\u00e7\u00f5es b\u00e1sicas no Word.",
    objective: "Explorar a interface do Word e executar opera\u00e7\u00f5es b\u00e1sicas no ficheiro fornecido, aproximando o resultado do modelo em PDF.",
    steps: [
      { title: "Preparar", text: "Abrir o ficheiro-base \u00abBem-vindo ao Word.docx\u00bb e guardar como \u00ab2026-07_01_Bem-vindo ao Word.docx\u00bb." },
      { title: "Explorar", text: "Identificar friso, separadores, barra de ferramentas, barra de estado e controlos de visualiza\u00e7\u00e3o." },
      { title: "Praticar", text: "Selecionar, copiar, cortar, colar, anular e repetir." },
      { title: "Concluir", text: "Guardar na Drive e comparar com o PDF de refer\u00eancia." }
    ],
    evidence: "Captura do documento aberto no Word e frase com as opera\u00e7\u00f5es utilizadas.",
    padlet: { column: "Padlet individual", post: "Opera\u00e7\u00f5es b\u00e1sicas" },
    moodle: "Usar a liga\u00e7\u00e3o da TI no Moodle indicada pela formadora para confirmar ou acompanhar a tarefa.",
    forumUrls: individualTaskForumUrls
  },
  {
    id: "tarefa-individual-3",
    pdfUrl: "assets/pdfs/TI03.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI3 - Bem-vindo ao Word - formata\u00e7\u00e3o do texto",
    intro: "Criar nova vers\u00e3o e aplicar formata\u00e7\u00e3o de texto, par\u00e1grafos, realce e estilos.",
    objective: "Formatar o documento de acordo com o modelo, utilizando tipos de letra, alinhamentos, realce e estilos do Word.",
    steps: [
      { title: "Preparar", text: "Criar a c\u00f3pia \u00ab2026-07_02_Bem-vindo ao Word.docx\u00bb." },
      { title: "Formatar", text: "Ajustar letra, alinhamento, avan\u00e7os, espa\u00e7amento e entrelinha." },
      { title: "Aplicar estilos", text: "Usar T\u00edtulo 1 e T\u00edtulo 2 nos t\u00edtulos e subt\u00edtulos." },
      { title: "Concluir", text: "Comparar com o PDF e guardar na Drive." }
    ],
    evidence: "Captura com t\u00edtulo, subt\u00edtulo e par\u00e1grafo formatado, com explica\u00e7\u00e3o de duas op\u00e7\u00f5es aplicadas.",
    padlet: { column: "Padlet individual", post: "Formata\u00e7\u00e3o do texto" },
    moodle: "Usar a liga\u00e7\u00e3o da TI no Moodle indicada pela formadora para confirmar ou acompanhar a tarefa.",
    forumUrls: individualTaskForumUrls
  },
  {
    id: "tarefa-individual-4",
    pdfUrl: "assets/pdfs/TI04.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI4 - Bem-vindo ao Word - listas, edi\u00e7\u00e3o e revis\u00e3o",
    intro: "Criar nova vers\u00e3o, organizar listas e usar ferramentas de edi\u00e7\u00e3o e revis\u00e3o.",
    objective: "Organizar os conte\u00fados com listas e melhorar o texto atrav\u00e9s das ferramentas de edi\u00e7\u00e3o e revis\u00e3o.",
    steps: [
      { title: "Preparar", text: "Criar a c\u00f3pia \u00ab2026-07_03_Bem-vindo ao Word.docx\u00bb." },
      { title: "Listas", text: "Reproduzir listas com marcas, listas numeradas e uma lista de m\u00faltiplos n\u00edveis." },
      { title: "Editar", text: "Usar Localizar e Localizar e substituir." },
      { title: "Rever", text: "Executar revis\u00e3o ortogr\u00e1fica e gramatical, consultar sin\u00f3nimos e inserir um coment\u00e1rio." }
    ],
    evidence: "Captura das listas e indica\u00e7\u00e3o das ferramentas de revis\u00e3o utilizadas.",
    padlet: { column: "Padlet individual", post: "Listas, edi\u00e7\u00e3o e revis\u00e3o" },
    moodle: "Usar a liga\u00e7\u00e3o da TI no Moodle indicada pela formadora para confirmar ou acompanhar a tarefa.",
    forumUrls: individualTaskForumUrls
  },
  {
    id: "tarefa-individual-5",
    pdfUrl: "assets/pdfs/TI05.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI5 - Preparar o documento para impress\u00e3o",
    intro: "Configurar p\u00e1gina, margens, orienta\u00e7\u00e3o, quebras e pr\u00e9-visualiza\u00e7\u00e3o de impress\u00e3o.",
    objective: "Configurar a p\u00e1gina e verificar o documento antes da impress\u00e3o ou exporta\u00e7\u00e3o.",
    steps: [
      { title: "Preparar", text: "Criar a c\u00f3pia \u00ab2026-07_04_Bem-vindo ao Word.docx\u00bb." },
      { title: "Configurar", text: "Confirmar papel, orienta\u00e7\u00e3o e margens." },
      { title: "Paginar", text: "Inserir quebras de p\u00e1gina quando necess\u00e1rio e evitar p\u00e1ginas vazias." },
      { title: "Concluir", text: "Verificar a pr\u00e9-visualiza\u00e7\u00e3o de impress\u00e3o, corrigir problemas e guardar." }
    ],
    evidence: "Captura da pr\u00e9-visualiza\u00e7\u00e3o com tamanho do papel, orienta\u00e7\u00e3o e margens utilizados.",
    padlet: { column: "Padlet individual", post: "Prepara\u00e7\u00e3o para impress\u00e3o" },
    moodle: "Usar a liga\u00e7\u00e3o da TI no Moodle indicada pela formadora para confirmar ou acompanhar a tarefa.",
    forumUrls: individualTaskForumUrls
  },
  {
    id: "tarefa-individual-6",
    pdfUrl: "assets/pdfs/TI06.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI6 - Organizar informa\u00e7\u00e3o com tabula\u00e7\u00f5es",
    intro: "Utilizar a r\u00e9gua, marcas de formata\u00e7\u00e3o e diferentes tipos de tabula\u00e7\u00e3o.",
    objective: "Utilizar diferentes tipos de tabula\u00e7\u00e3o para alinhar informa\u00e7\u00e3o sem recorrer a espa\u00e7os consecutivos.",
    steps: [
      { title: "Preparar", text: "Criar a c\u00f3pia \u00ab2026-07_05_Bem-vindo ao Word.docx\u00bb." },
      { title: "Ativar apoios", text: "Ativar a r\u00e9gua e as marcas de formata\u00e7\u00e3o." },
      { title: "Criar listagem", text: "Acrescentar pelo menos oito atalhos do Word e a respetiva fun\u00e7\u00e3o." },
      { title: "Alinhar", text: "Usar tabula\u00e7\u00f5es \u00e0 esquerda, \u00e0 direita, decimal e com car\u00e1ter de preenchimento." }
    ],
    evidence: "Captura da listagem alinhada e explica\u00e7\u00e3o sobre a vantagem das tabula\u00e7\u00f5es face aos espa\u00e7os.",
    padlet: { column: "Padlet individual", post: "Tabula\u00e7\u00f5es" },
    moodle: "Usar a liga\u00e7\u00e3o da TI no Moodle indicada pela formadora para confirmar ou acompanhar a tarefa.",
    forumUrls: individualTaskForumUrls
  },
  {
    id: "tarefa-individual-7",
    pdfUrl: "assets/pdfs/TI07.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI7 - Bem-vindo ao Word - tabelas",
    intro: "Inserir, completar e formatar tabelas, melhorando legibilidade e estrutura.",
    objective: "Inserir e formatar as tabelas do exerc\u00edcio, respeitando a estrutura e melhorando a legibilidade.",
    steps: [
      { title: "Preparar", text: "Criar a c\u00f3pia \u00ab2026-07_06_Bem-vindo ao Word.docx\u00bb." },
      { title: "Inserir tabelas", text: "Inserir ou completar as tabelas apresentadas no PDF de refer\u00eancia." },
      { title: "Ajustar", text: "Adicionar ou eliminar linha/coluna, unir c\u00e9lulas e ajustar larguras." },
      { title: "Formatar", text: "Aplicar estilo de tabela, limites e sombreados apenas quando ajudarem a leitura." }
    ],
    evidence: "Captura da tabela final e indica\u00e7\u00e3o de tr\u00eas decis\u00f5es de estrutura ou formata\u00e7\u00e3o.",
    padlet: { column: "Padlet individual", post: "Tabelas" },
    moodle: "Usar a liga\u00e7\u00e3o da TI no Moodle indicada pela formadora para confirmar ou acompanhar a tarefa.",
    forumUrls: individualTaskForumUrls
  },
  {
    id: "tarefa-individual-8",
    pdfUrl: "assets/pdfs/TI08.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI8 - Organizar texto em colunas",
    intro: "Aplicar colunas e quebras a uma sec\u00e7\u00e3o espec\u00edfica, mantendo o restante documento organizado.",
    objective: "Aplicar colunas e quebras apenas a uma parte do documento, preservando a organiza\u00e7\u00e3o das restantes p\u00e1ginas.",
    steps: [
      { title: "Preparar", text: "Criar a c\u00f3pia \u00ab2026-07_07_Bem-vindo ao Word.docx\u00bb." },
      { title: "Selecionar", text: "Apresentar uma sec\u00e7\u00e3o adequada em duas colunas." },
      { title: "Controlar quebras", text: "Usar quebras de sec\u00e7\u00e3o e uma quebra de coluna." },
      { title: "Concluir", text: "Ajustar espa\u00e7o entre colunas, linha separadora se necess\u00e1rio, e confirmar a ordem de leitura." }
    ],
    evidence: "Captura da p\u00e1gina e explica\u00e7\u00e3o da fun\u00e7\u00e3o da quebra de sec\u00e7\u00e3o e da quebra de coluna.",
    padlet: { column: "Padlet individual", post: "Colunas" },
    moodle: "Usar a liga\u00e7\u00e3o da TI no Moodle indicada pela formadora para confirmar ou acompanhar a tarefa.",
    forumUrls: individualTaskForumUrls
  },
  {
    id: "tarefa-individual-9",
    pdfUrl: "assets/pdfs/TI09.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI9 - Bem-vindo ao Word - melhorar o aspeto visual",
    intro: "Ajustar imagens e elementos visuais, mantendo clareza e fidelidade ao modelo.",
    objective: "Ajustar imagens e outros elementos visuais, mantendo a fidelidade ao modelo e a clareza do documento.",
    steps: [
      { title: "Preparar", text: "Criar a c\u00f3pia \u00ab2026-07_08_Bem-vindo ao Word.docx\u00bb." },
      { title: "Ajustar imagens", text: "Inserir ou ajustar imagens, redimensionando e recortando sem deformar." },
      { title: "Moldar texto", text: "Testar op\u00e7\u00f5es de disposi\u00e7\u00e3o como \u00abEm linha com o texto\u00bb e \u00abQuadrado\u00bb." },
      { title: "Melhorar", text: "Acrescentar caixa de texto, forma ou \u00edcone com fun\u00e7\u00e3o informativa e verificar contraste." }
    ],
    evidence: "Captura antes/depois da melhoria visual e identifica\u00e7\u00e3o dos recursos utilizados.",
    padlet: { column: "Padlet individual", post: "Melhoria visual" },
    moodle: "Usar a liga\u00e7\u00e3o da TI no Moodle indicada pela formadora para confirmar ou acompanhar a tarefa.",
    forumUrls: individualTaskForumUrls
  },
  {
    id: "tarefa-individual-10",
    pdfUrl: "assets/pdfs/TI10.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI10 - Estruturar um documento longo",
    intro: "Uniformizar t\u00edtulos, quebras, cabe\u00e7alho, rodap\u00e9, pagina\u00e7\u00e3o e navega\u00e7\u00e3o.",
    objective: "Preparar o documento para funcionar como um documento longo, com estrutura uniforme e elementos autom\u00e1ticos.",
    steps: [
      { title: "Preparar", text: "Criar a c\u00f3pia \u00ab2026-07_09_Bem-vindo ao Word.docx\u00bb." },
      { title: "Rever estilos", text: "Aplicar corretamente T\u00edtulo 1, T\u00edtulo 2 e, quando necess\u00e1rio, T\u00edtulo 3." },
      { title: "Organizar p\u00e1ginas", text: "Usar quebras de p\u00e1gina, cabe\u00e7alho, rodap\u00e9 e numera\u00e7\u00e3o autom\u00e1tica." },
      { title: "Confirmar", text: "Configurar primeira p\u00e1gina diferente e verificar o Painel de Navega\u00e7\u00e3o." }
    ],
    evidence: "Capturas dos estilos/Painel de Navega\u00e7\u00e3o e do cabe\u00e7alho, rodap\u00e9 ou numera\u00e7\u00e3o.",
    padlet: { column: "Padlet individual", post: "Documento longo" },
    moodle: "Usar a liga\u00e7\u00e3o da TI no Moodle indicada pela formadora para confirmar ou acompanhar a tarefa.",
    forumUrls: individualTaskForumUrls
  },
  {
    id: "tarefa-individual-11",
    pdfUrl: "assets/pdfs/TI11.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI11 - Inserir e atualizar o primeiro \u00cdndice",
    intro: "Executar o tutorial do \u00cdndice e aplicar navega\u00e7\u00e3o r\u00e1pida no documento.",
    objective: "Executar o tutorial do \u00cdndice e aplicar ao documento ferramentas que permitem navegar rapidamente.",
    steps: [
      { title: "Realizar tutorial", text: "Inserir \u00cdndice, atualizar n\u00fameros de p\u00e1gina, aplicar t\u00edtulos, atualizar tudo e personalizar preenchimento." },
      { title: "Preparar", text: "Criar a c\u00f3pia \u00ab2026-07_10_Bem-vindo ao Word.docx\u00bb." },
      { title: "Inserir \u00cdndice", text: "Criar uma p\u00e1gina para o \u00cdndice ap\u00f3s a capa e gerar \u00cdndice autom\u00e1tico." },
      { title: "Testar navega\u00e7\u00e3o", text: "Usar Painel de Navega\u00e7\u00e3o, pesquisa, Ir para, marcador e hiperliga\u00e7\u00e3o interna ou refer\u00eancia cruzada." }
    ],
    evidence: "Captura do \u00cdndice e do Painel de Navega\u00e7\u00e3o, com explica\u00e7\u00e3o sobre atualizar n\u00fameros de p\u00e1gina ou todo o \u00cdndice.",
    padlet: { column: "Padlet individual", post: "\u00cdndice autom\u00e1tico" },
    moodle: "Usar a liga\u00e7\u00e3o da TI no Moodle indicada pela formadora para confirmar ou acompanhar a tarefa.",
    forumUrls: individualTaskForumUrls
  },
  {
    id: "tarefa-individual-12",
    pdfUrl: "assets/pdfs/TI12.pdf",
    url: "atividades/tarefas-individuais.html",
    title: "TI12 - Concluir, partilhar e refletir",
    intro: "Finalizar o DOCX, exportar PDF, partilhar com permiss\u00f5es de leitura e refletir sobre o percurso.",
    objective: "Concluir o projeto, disponibilizar o PDF com permiss\u00f5es de leitura e refletir sobre a evolu\u00e7\u00e3o das aprendizagens.",
    steps: [
      { title: "Preparar", text: "Guardar \u00ab2026-07_11_Bem-vindo ao Word.docx\u00bb e aplicar corre\u00e7\u00f5es pertinentes." },
      { title: "Verificar", text: "Executar revis\u00e3o, atualizar \u00cdndice, confirmar pagina\u00e7\u00e3o e pr\u00e9-visualiza\u00e7\u00e3o de impress\u00e3o." },
      { title: "Exportar", text: "Guardar o PDF \u00ab2026-07_12_Bem-vindo ao Word.pdf\u00bb na Drive." },
      { title: "Partilhar e refletir", text: "Definir permiss\u00e3o de Leitor, testar a liga\u00e7\u00e3o e escrever a reflex\u00e3o final de 150 a 200 palavras." }
    ],
    evidence: "Liga\u00e7\u00e3o de leitura para o PDF final e reflex\u00e3o final.",
    padlet: { column: "Padlet individual", post: "PDF final e reflex\u00e3o" },
    moodle: "Usar a liga\u00e7\u00e3o da TI no Moodle indicada pela formadora para confirmar ou acompanhar a tarefa.",
    forumUrls: individualTaskForumUrls
  }
];

const resources = [
  { id: "manual", title: "Manual de formação", intro: "Manual de Formação da UFCD 0754 em PDF.", url: "recursos/manual.html", pdfUrl: "assets/pdfs/Ufcd 0754 Manual.pdf" },
  { id: "modelos", parentId: "manual", title: "Modelos de documentos", intro: "Área reservada para modelos, exemplos e ficheiros de trabalho.", url: "recursos/manual.html" }
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

const SITE_VISIBILITY_STORAGE_KEY = "ufcd0754-site-visibility-v1";
const SITE_LINKS_STORAGE_KEY = "ufcd0754-site-links-v1";
const APPS_SCRIPT_SPREADSHEET_GID = "1240441816";
let siteControlItems = [];
let siteControlItemsBuilding = false;
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

function renderPortfolioMenuLink() {
  document.querySelectorAll(".side-nav").forEach((menu) => {
    menu.querySelectorAll(".portfolio-site-link").forEach((link) => link.remove());

    if (!isItemVisible("menuPrincipal", "eportfolio")) return;

    const link = document.createElement("a");
    link.className = "portfolio-site-link";
    link.href = "https://26109-e-portfolio.netlify.app/";
    link.textContent = "Site dos E-Portefólios";
    link.target = "_top";

    if (window.location.pathname.endsWith("/atividades/identidade-visual.html")) {
      link.classList.add("active");
      link.href = "https://26109-e-portfolio.netlify.app/";
    }

    menu.appendChild(link);
  });
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
    const url = item.key === "inicio" ? "index.html#inicio" : item.key === "eportfolio" ? "https://26109-e-portfolio.netlify.app/" : `index.html#${item.key}`;
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
      <a href="${topic.url}"><h3>${topic.cardTitle}</h3>
        <p>${topic.intro}</p>
      </a>
    </article>
  `).join("");
}

function renderConteudosIndex() {
  const grid = document.getElementById("conteudos-index-grid");
  if (!grid) return;

  grid.innerHTML = topics.filter((topic) => topic.showInContents !== false).map((topic) => `
    <article class="card">
      <h3><a href="${topic.url}">${topic.title}</a></h3>
      <p>${topic.intro}</p>
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
    return JSON.parse(localStorage.getItem("ufcd0754-control-state")) || {};
  } catch {
    return {};
  }
}

function saveControlState(state) {
  localStorage.setItem("ufcd0754-control-state", JSON.stringify(state));
}

function limparEstadoLocalDoSite() {
  try {
    localStorage.removeItem(SITE_VISIBILITY_STORAGE_KEY);
    localStorage.removeItem(SITE_LINKS_STORAGE_KEY);
  } catch {
    // A Sheet continua a ser a fonte principal mesmo sem acesso ao localStorage.
  }
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
  void linksAlterados;
}

function atualizarSuperficiesVisiveisDoSite() {
  renderPortfolioMenuLink();
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

function obterForumUrls(task) {
  const urls = [];
  const adicionar = (url) => {
    const normalizado = obterUrlTopicoForum(url);
    if (normalizado && !urls.includes(normalizado)) urls.push(normalizado);
  };

  adicionar(obterLinkControlo(`tarefa-individual-${task.title}`));
  adicionar(siteLinks.forums[task.id]);
  adicionar(siteLinks.forums[task.title]);
  adicionar(task.forumUrl);
  (task.forumUrls || []).forEach(adicionar);

  return urls;
}

function obterForumUrl(task) {
  return obterForumUrls(task)[0] || "";
}

window.addEventListener("storage", (event) => {
  if (APPS_SCRIPT_WEB_APP_URL && (event.key === SITE_VISIBILITY_STORAGE_KEY || event.key === SITE_LINKS_STORAGE_KEY)) return;
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

async function carregarVisibilidadeRemotaDoSite(options = {}) {
  if (!APPS_SCRIPT_WEB_APP_URL) return false;
  if (siteVisibilityRemoteLoading && !options.force) return siteVisibilityRemoteLoading;

  siteVisibilityRemoteLoading = obterJsonAppsScript({ acao: "visibilidade_site" })
    .then((dados) => {
      if (dados?.sucesso && Array.isArray(dados.itens)) {
        aplicarItensVisibilidadeRemota(dados.itens);
        limparEstadoLocalDoSite();
        return true;
      }

      if (dados?.sucesso && dados.visibilidade) {
        aplicarVisibilidadeDoSite(dados.visibilidade);
        limparEstadoLocalDoSite();
        return true;
      }
      return false;
    })
    .catch(() => {
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
      await guardarVisibilidadeRemotaDoSite();
      limparEstadoLocalDoSite();
      await aguardar(900);
      await carregarVisibilidadeRemotaDoSite({ force: true });
      atualizarSuperficiesVisiveisDoSite();
      atualizarControlosVisibilidadeDoSite(root);
      if (controlStatus) {
        controlStatus.textContent = `Configuração recarregada da Sheet: ${obterConstituicaoVisibilidadeSite().length} itens e ligações do site.`;
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
        const controlStatus = root.querySelector("[data-site-control-status]");
        if (controlStatus) controlStatus.textContent = "Visibilidade alterada neste ecrã. Usa Guardar para enviar para a Sheet.";
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

      const controlStatus = root.querySelector("[data-site-control-status]");
      if (controlStatus) controlStatus.textContent = "Ligação alterada neste ecrã. Usa Guardar para enviar para a Sheet.";
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
  url.searchParams.set("_", String(Date.now()));
  return obterJsonp(url.toString());
}

function obterJsonp(url) {
  return new Promise((resolve, reject) => {
    const callbackName = `ufcd0754Callback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
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
  document.title = `UFCD 0754 | ${topic.title}`;
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
  const lesson = contentLessons[topic.id];
  const lessonSections = lesson?.sections?.map((section, index) => `
          <article class="card">
            <p class="eyebrow">${String(index + 1).padStart(2, "0")}</p>
            <h2>${escapeHtml(section.title)}</h2>
            <p>${escapeHtml(section.text)}</p>
            ${section.points?.length ? `
              <ul class="clean-list">
                ${section.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
              </ul>
            ` : ""}
          </article>
  `).join("") || "";

  root.innerHTML = `
    <section class="hero content-hero no-image-hero compact-content-hero">
      <div class="hero-content">
        <h1>${topic.cardTitle}</h1>
        <p>${topic.intro}</p>
      </div>
    </section>

    <section class="section content-page-section">
      <div class="lesson-layout">
        <div class="lesson-stack">
          ${topicItems}
          ${lesson ? `
            <article class="card">
              <p class="eyebrow">Enquadramento</p>
              <h2>O essencial</h2>
              <p>${escapeHtml(lesson.summary)}</p>
            </article>
            ${lessonSections}
          ` : `
            <article class="card">
              <h2>Enquadramento</h2>
              <p>${escapeHtml(topic.intro)}</p>
            </article>
          `}
          <article class="card activity-card">
            <p class="eyebrow">Atividade</p>
            <h2>Experimenta</h2>
            <p>${escapeHtml(lesson?.practice || "Aplica este conteúdo no documento de trabalho e confirma o resultado.")}</p>
          </article>
          <article class="card">
            <p class="eyebrow">Síntese</p>
            <h2>Antes de avançar</h2>
            <p>Confirma se consegues identificar os comandos utilizados, explicar a sua finalidade e repetir o procedimento no teu documento sem depender do exemplo.</p>
          </article>
        </div>
        <aside class="card aside-box">
          <h3>Nesta página</h3>
          <ul class="clean-list">
            ${topic.items?.length ? "<li>Subconteúdos</li>" : ""}
            <li>O essencial</li>
            ${lesson?.sections?.map((section) => `<li>${escapeHtml(section.title)}</li>`).join("") || ""}
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
  document.title = `UFCD 0754 | ${activity.title}`;

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
      ["Ficheiro-base", "Documento «Bem-vindo ao Word» fornecido pela formadora."],
      ["Versões de trabalho", "Nova cópia do documento em cada tarefa, identificada com a nomenclatura indicada."],
      ["Revisão e auditoria", "Verificação final e auditoria de qualidade realizada por um colega."],
      ["Entrega final", "Documento editável e versão final em PDF, com ligação de leitura."]
    ];

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Projeto Final</p>
            <h1>Documento Profissional</h1>
            <p class="lead">O Projeto Final consiste na construção progressiva do documento «Bem-vindo ao Word», melhorado através das Tarefas Individuais realizadas ao longo da UFCD 0754.</p>
          </div>

          <div class="activity-meta-grid">
            <article class="card activity-meta-card">
              <p class="eyebrow">Formato</p>
              <h3>Documento Word e PDF</h3>
            </article>
            <article class="card activity-meta-card">
              <p class="eyebrow">Desenvolvimento</p>
              <h3>Ao longo da UFCD</h3>
            </article>
            <article class="card activity-meta-card">
              <p class="eyebrow">Registo</p>
              <h3>Ficheiros na Drive</h3>
            </article>
          </div>

          <article class="card activity-card">
            <p class="eyebrow">Objetivo</p>
            <h2>Construir progressivamente um documento profissional</h2>
            <p>A partir da TI2, cada tarefa parte do ficheiro anterior e origina uma nova versão do documento «Bem-vindo ao Word».</p>
            <p>A versão final editável e o respetivo PDF constituem o Projeto Final da UFCD 0754.</p>
            <div class="presentation-strip">
              <span>Google Drive</span>
              <span>Microsoft Word</span>
              <span>Revisão</span>
              <span>Formatação</span>
              <span>PDF</span>
              <span>Partilha</span>
            </div>
          </article>

          <details class="task-overview-card" open>
            <summary>
              <span class="task-module-copy">
                <strong>Estrutura do trabalho</strong>
                <small>Uma versão identificada para cada etapa do documento.</small>
              </span>
              <span class="task-module-mark" aria-hidden="true">DOCX</span>
            </summary>
            <div class="task-module-body">
              <p>As versões devem ser guardadas na pasta partilhada da Drive, mantendo o ficheiro anterior e usando a nomenclatura indicada em cada tarefa.</p>
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
              <p>Os ficheiros da UFCD devem ser guardados em <strong>26109/03-0754</strong>, usando as subpastas Conteúdos, Atividades e Evidências.</p>
              <p>A Google Drive guarda as versões sucessivas, o documento editável final e o PDF de leitura.</p>
            </article>

            <article class="card">
              <p class="eyebrow">Moodle</p>
              <h3>Orientações das tarefas</h3>
              <p>Consultar no Moodle o PDF com as instruções completas de cada TI e realizar o trabalho no ficheiro indicado.</p>
            </article>
          </div>

          <article class="card activity-card">
            <p class="eyebrow">Verificação final</p>
            <h2>Confirmar antes de concluir</h2>
            <ul class="clean-list task-prompt-list">
              <li>Todas as versões previstas estão guardadas.</li>
              <li>Os nomes dos ficheiros respeitam a nomenclatura indicada.</li>
              <li>O texto, as tabelas e as imagens são legíveis.</li>
              <li>A ortografia e a formatação foram revistas.</li>
              <li>O documento editável final abre corretamente.</li>
              <li>O PDF final está atualizado e a ligação de leitura funciona.</li>
            </ul>
          </article>
        </div>
      </section>
    `;
    return;
  }

  if (activity.id === "tarefas-grupo") {
    const overviewItems = [
      "As tarefas de grupo começam no segundo dia da UFCD.",
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
              <p>Nesta atividade vamos construir um glossário colaborativo ao longo da UFCD 0754, com início no segundo dia.</p>
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
                  <p><strong>Instruções:</strong> cada grupo trabalha a palavra atribuída, escreve uma definição clara por palavras próprias, acrescenta um exemplo ligado ao processador de texto e revê a entrada antes da publicação.</p>
                  <p><strong>Evidência:</strong> entrada publicada no Glossário do Moodle com palavra, definição, exemplo e identificação do grupo.</p>
                  <p><strong>Publicação:</strong> Glossário do Moodle.</p>

                  <div class="task-block">
                    <strong>Palavras a trabalhar</strong>
                    <div class="word-list">
                      ${task.words.map(([word, group]) => `<span><strong>${word}</strong> ${group}</span>`).join("")}
                    </div>
                  </div>

                  <div class="embed-fallback resource-action-row align-right">
                    ${obterGlossarioUrl() ? `<a class="small-button orange" href="${obterGlossarioUrl()}" target="_top">Abrir glossário</a>` : `<span class="task-link-pending">Ligação ao Glossário a disponibilizar.</span>`}
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
            <div class="task-pdf-fallback" role="note">
              <strong>PDF da tarefa</strong>
              <p>Alguns browsers bloqueiam leitores PDF embutidos quando o site está dentro do Google Sites. Usa o botão abaixo para abrir o ficheiro na mesma janela.</p>
            </div>
            <div class="modal-actions">
              <a class="small-button orange" href="${pdfUrl}" target="_top">Abrir PDF</a>
            </div>
          </div>
        </div>
      ` : "";
    };

    const renderForumButtons = (task) => {
      const urls = obterForumUrls(task);
      if (!urls.length) return `<span class="task-link-pending">Liga\u00e7\u00e3o a confirmar pela formadora.</span>`;
      return urls.map((url, index) => `<a class="small-button orange" href="${url}" target="_top">Abrir f\u00f3rum ${index + 1}</a>`).join("");
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



        <aside class="task-note-box">
          <strong>Instruções completas</strong>
          <p>Consulta o PDF da tarefa para veres todos os passos, exemplos, ficheiros e critérios de verificação.</p>
        </aside>

        <div class="embed-fallback resource-action-row align-right">
          ${renderTaskPdfButton(task)}
        </div>

        ${renderTaskPdfModal(task)}

      </div>
    `;

    const overviewItems = [
      "Utilizar a conta Google criada para a formação.",
      "Guardar os ficheiros nas pastas adequadas da Google Drive.",
      "Criar uma nova versão do documento em cada Tarefa Individual.",
      "Usar a nomenclatura indicada e manter as versões anteriores.",
      "Ocultar dados pessoais antes de publicar capturas de ecrã."
    ];

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Atividades</p>
            <h1>Tarefas Individuais</h1>
            <p class="lead">Atividades práticas realizadas no Word e organizadas na pasta partilhada da Google Drive.</p>
          </div>

          <details class="task-overview-card" open>
            <summary>
              <span class="task-module-copy">
                <strong>Como realizar as Tarefas Individuais</strong>
                <small>O site apresenta um resumo; as instruções completas de cada tarefa são disponibilizadas em PDF.</small>
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
            ${activity.duration ? `<article class="card activity-meta-card">
              <p class="eyebrow">Duração</p>
              <h3>${activity.duration}</h3>
            </article>` : ""}
          </div>

          <details class="card group-task-card task-details-card">
            <summary>
              <span>
                <h3>${activity.id === "mentimeter-inicial" ? "Pergunta" : "Etapas da atividade"}</h3>
                <p>${activity.id === "mentimeter-inicial" ? activity.intro : "Consulta a sequência proposta para esta atividade diária."}</p>
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
                  title="Mentimeter - Escreve 3 palavras"></iframe>
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
                    <h2 id="mentimeter-qr-title">Participar no Mentimeter inicial</h2>
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
                title="Padlet - UFCD 0754"
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
  document.title = `UFCD 0754 | ${resource.title}`;

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
        <div class="pdf-open-card"><strong>Manual em PDF</strong><p>Se o leitor PDF for bloqueado pelo browser, abre o ficheiro diretamente na mesma janela.</p></div>
        <div class="pdf-fallback">
          <a class="small-button" href="${pdfUrl}" target="_top">Abrir PDF</a>
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
          <p>Este espaço ficará ligado aos materiais de apoio reais da UFCD 0754.</p>
        </article>
      </div>
    </section>
  `;
}

function renderStandaloneTeamsControlPage() {
  const root = document.getElementById("teams-control-root");
  if (!root) return;

  document.title = "UFCD 0754 | Partilha de ecrã";
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
  const visibilidadeRemotaOk = await carregarVisibilidadeRemotaDoSite();

  if (!visibilidadeRemotaOk) {
    carregarVisibilidadeDoSite();
    carregarLinksDoSite();
  }

  renderContentMenus();
  renderActivityMenus();
  renderEvaluationMenus();
  renderResourceMenus();
  renderPortfolioMenuLink();
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
}

inicializarSite();







