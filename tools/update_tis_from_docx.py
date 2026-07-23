from __future__ import annotations

import json
import re
from pathlib import Path

from docx import Document


ROOT = Path(__file__).resolve().parents[1]
DOCX = ROOT / "Manual" / "UFCD0754_Tarefas_Individuais.docx"
APP_JS = ROOT / "assets" / "app.js"
MOODLE = ROOT / "moodle.html"
STYLES = ROOT / "assets" / "styles.css"


WORK_FILES = {
    1: [
        {
            "title": "Documento de expetativas iniciais",
            "expectedName": "Criado pelo/a formando/a",
            "available": False,
            "note": "Criado diretamente pelo/a formando/a; não há ficheiro interativo para descarregar.",
        }
    ],
    2: [
        {
            "number": "01",
            "title": "Bem-vindo ao Word",
            "expectedName": "01_Bem-vindo_ao_Word.docx",
            "wordUrl": "assets/ficheiros/Word/01_Bem-vindo_ao_Word.docx",
        }
    ],
    3: [
        {
            "number": "02",
            "title": "Formatação",
            "expectedName": "02_Formatação.docx",
            "wordUrl": "assets/ficheiros/Word/02_Formatação.docx",
        },
        {
            "number": "03",
            "title": "Listas",
            "expectedName": "03_Listas.docx",
            "wordUrl": "assets/ficheiros/Word/03_Listas.docx",
        },
    ],
    4: [
        {
            "number": "04",
            "title": "Revisão",
            "expectedName": "04_Revisao.docx",
            "wordUrl": "assets/ficheiros/Word/04_Revisao.docx",
        }
    ],
    5: [
        {
            "number": "05",
            "title": "Tabulações",
            "expectedName": "05_Tabulacoes.docx",
            "wordUrl": "assets/ficheiros/Word/05_Tabulacoes.docx",
        },
        {
            "number": "06",
            "title": "Impressão",
            "expectedName": "06_Impressao.docx",
            "wordUrl": "assets/ficheiros/Word/06_Impressao.docx",
        },
    ],
    6: [
        {
            "number": "07",
            "title": "Tabelas",
            "expectedName": "07_Tabelas.docx",
            "wordUrl": "assets/ficheiros/Word/07_Tabelas.docx",
        }
    ],
    7: [
        {
            "number": "08",
            "title": "Colunas",
            "expectedName": "08_Colunas.docx",
            "wordUrl": "assets/ficheiros/Word/08_Colunas.docx",
        },
        {
            "number": "09",
            "title": "Elementos visuais",
            "expectedName": "09_Elementos_visuais.docx",
            "wordUrl": "assets/ficheiros/Word/09_Elementos_visuais.docx",
        },
    ],
    8: [
        {
            "number": "10",
            "title": "Cabeçalhos e rodapés",
            "expectedName": "10_Cabecalhos_e_rodapes.docx",
            "wordUrl": "assets/ficheiros/Word/10_Cabecalhos_e_rodapes.docx",
        },
        {
            "number": "11",
            "title": "Configuração de página",
            "expectedName": "11_Configuracao_de_pagina.docx",
            "wordUrl": "assets/ficheiros/Word/11_Configuracao_de_pagina.docx",
        },
    ],
    9: [
        {
            "number": "12",
            "title": "Estilos e documentos longos",
            "expectedName": "12_Estilos_e_documentos_longos.docx",
            "wordUrl": "assets/ficheiros/Word/12_Estilos_e_documentos_longos.docx",
        }
    ],
    10: [
        {
            "number": "13",
            "title": "Inserir o seu primeiro índice",
            "expectedName": "13_Inserir_indice.docx",
            "wordUrl": "assets/ficheiros/Word/13_Inserir_indice.docx",
        },
        {
            "number": "14",
            "title": "Navegação e referências",
            "expectedName": "14_Navegacao_e_referencias.docx",
            "wordUrl": "assets/ficheiros/Word/14_Navegacao_e_referencias.docx",
        },
    ],
    11: [
        {
            "number": "15",
            "title": "Reunir documentos",
            "expectedName": "15_Reunir_documentos.docx",
            "wordUrl": "assets/ficheiros/Word/15_Reunir_documentos.docx",
        },
        {
            "number": "16",
            "title": "Revisão entre pares",
            "expectedName": "16_Revisao_entre_pares.docx",
            "wordUrl": "assets/ficheiros/Word/16_Revisao_entre_pares.docx",
        },
    ],
    12: [
        {
            "title": "Projeto final",
            "expectedName": "Documento reunido, uniformizado e revisto pelo/a formando/a",
            "available": False,
            "note": "Não há ficheiro interativo novo; o projeto final resulta da reunião, revisão e uniformização dos ficheiros práticos trabalhados.",
        }
    ],
}


SECTION_TO_FIELD = {
    "Objetivo": "objective",
    "O que fazer": "steps",
    "Registo no Moodle": "moodleRecord",
    "Registo da tarefa": "evidence",
    "Verificação antes de concluir": "checklist",
}


def iter_doc_blocks(doc: Document):
    for paragraph in doc.paragraphs:
        text = " ".join(paragraph.text.split())
        if text:
            yield paragraph.style.name, text


def normalise_title(text: str) -> str:
    return text.replace("—", "-")


def parse_tasks():
    tasks = []
    current = None
    current_field = None

    for style, text in iter_doc_blocks(Document(DOCX)):
        if style == "Heading 1" and re.match(r"TI\d+\s+[—-]", text):
            if current:
                tasks.append(current)
            number = int(re.search(r"TI(\d+)", text).group(1))
            current = {
                "number": number,
                "id": f"tarefa-individual-{number}",
                "url": "atividades/tarefas-individuais.html",
                "title": normalise_title(text),
                "intro": "",
                "objective": "",
                "steps": [],
                "moodleRecord": "",
                "evidence": "",
                "checklist": [],
                "forumUrls": "__FORUM_URLS__",
            }
            current_field = None
            continue

        if not current:
            continue

        if style == "Heading 2":
            current_field = SECTION_TO_FIELD.get(text)
            continue

        if current_field == "objective":
            current["objective"] = text
            if not current["intro"]:
                current["intro"] = text
        elif current_field == "steps":
            current["steps"].append({"title": infer_step_title(text), "text": text})
        elif current_field == "moodleRecord":
            current["moodleRecord"] = join_sentence(current["moodleRecord"], text)
        elif current_field == "evidence":
            current["evidence"] = join_sentence(current["evidence"], text)
        elif current_field == "checklist":
            current["checklist"].append(text.replace("☐", "").strip())

    if current:
        tasks.append(current)

    for task in tasks:
        number = task["number"]
        if number == 2:
            for step in task.get("steps", []):
                step["text"] = step["text"].replace(
                    "Executar operações de seleção, copiar, cortar, colar, anular e repetir, utilizando pelo menos quatro atalhos de teclado.",
                    "Executar operações de seleção, copiar, cortar, colar, anular e repetir, aplicando comandos adequados ao contexto.",
                )
            task["moodleRecord"] = task.get("moodleRecord", "").replace(
                "Indicar quatro atalhos utilizados e explicar, em 2 a 4 frases, a diferença entre «Guardar» e «Guardar como».",
                "Explicar, em 2 a 4 frases, a diferença entre «Guardar» e «Guardar como» e indicar uma decisão tomada durante a tarefa.",
            )
            task["checklist"] = [item for item in task.get("checklist", []) if item != "Pelo menos quatro atalhos utilizados."]
        if number == 10:
            for step in task.get("steps", []):
                step["text"] = step["text"].replace(
                    "Realizar «Inserir o seu primeiro índice.docx» e guardar como «2026-07_13_Indice_PrimeiroNome.docx».",
                    "Realizar «13_Inserir_indice.docx» e guardar como «2026-07_13_Indice_PrimeiroNome.docx».",
                )
        if number == 12:
            for step in task.get("steps", []):
                step["text"] = step["text"].replace(
                    "Criar uma nova cópia do ficheiro anterior com o nome «2026-07_11_Projeto_Final_Ana.docx».",
                    "Criar o documento final a partir do conjunto de ficheiros práticos já trabalhados e guardar como «2026-07_Projeto_Final_PrimeiroNome.docx».",
                ).replace(
                    "Configurar o documento em «Dobra de livro» (Esquema → Margens → Margens Personalizadas → Várias páginas → Dobra de livro). Exportar a versão final para PDF, mantendo a disposição das páginas, e guardar o ficheiro na pasta partilhada da Drive com o nome «2026-07_11_Projeto_Final_Ana.pdf».",
                    "Exportar a versão final para PDF, verificar a leitura e guardar o ficheiro na pasta partilhada da Drive com o nome «2026-07_Projeto_Final_PrimeiroNome.pdf». A opção «Dobra de livro» fica como recurso complementar, apenas se for indicada pela formadora.",
                )
            task["evidence"] = task.get("evidence", "").replace(
                "DOCX final e PDF em Dobra de livro guardados na Drive; ligação de leitura publicada no Moodle.",
                "DOCX final, PDF, reflexão final e ligação de leitura testada e publicada no Moodle.",
            )
            task["checklist"] = [item for item in task.get("checklist", []) if item != "PDF exportado mantendo a Dobra de livro."]
        pdf_rel = f"assets/pdfs/TI{number:02d}.pdf"
        task["pdfUrl"] = pdf_rel if (ROOT / pdf_rel).exists() else ""
        task["workFiles"] = resolve_work_files(number)
        task.pop("number")

    if len(tasks) != 12:
        raise RuntimeError(f"Esperava 12 TIs, mas encontrei {len(tasks)}.")
    return tasks


def infer_step_title(text: str) -> str:
    match = re.match(r"(Realizar|Abrir|Criar|Indicar|Responder|Rever|Confirmar|Utilizar|Executar|Melhorar|Inserir|Ativar|Guardar|Configurar|Alterar|Verificar|Publicar|Testar|Ler|Acrescentar|Nas definições)", text)
    if match:
        return match.group(1)
    return "Realizar"


def join_sentence(existing: str, text: str) -> str:
    return f"{existing} {text}".strip() if existing else text


def resolve_work_files(number: int):
    result = []
    for file in WORK_FILES.get(number, []):
        item = dict(file)
        if "wordUrl" in item:
            primary_exists = (ROOT / item["wordUrl"]).exists()
            fallback = item.get("fallbackWordUrl")
            if not primary_exists and fallback and (ROOT / fallback).exists():
                item["wordUrl"] = fallback
                primary_exists = True
            if not primary_exists and item.get("number"):
                matches = sorted((ROOT / "assets" / "ficheiros" / "Word").glob(f"{item['number']}_*.docx"))
                if matches:
                    item["wordUrl"] = matches[0].relative_to(ROOT).as_posix()
                    primary_exists = True
            item["available"] = primary_exists
            item.pop("fallbackWordUrl", None)
        if "referencePdfUrl" in item and not (ROOT / item["referencePdfUrl"]).exists():
            item.pop("referencePdfUrl")
        result.append(item)
    return result


def js_array(tasks):
    text = json.dumps(tasks, ensure_ascii=False, indent=2)
    return text.replace('"__FORUM_URLS__"', "individualTaskForumUrls")


def replace_between(text: str, start_marker: str, end_marker: str, replacement: str) -> str:
    start = text.index(start_marker)
    end = text.index(end_marker, start)
    return text[:start] + replacement + "\n" + text[end:]


def update_app(tasks):
    app = APP_JS.read_text(encoding="utf-8")
    app = replace_between(
        app,
        "const individualTasks = [",
        "const resources = [",
        "const individualTasks = " + js_array(tasks) + ";",
    )

    app = re.sub(
        r'    const renderTaskPdfButton = \(task\) => task\.pdfUrl\n      \? `[^`]+`\n      : "";\n',
        '    const renderTaskPdfButton = (task, label = "Ver instruções — PDF") => task.pdfUrl\n'
        '      ? `<button class="small-button" type="button" data-modal-open="pdf-${task.id}">${label}</button>`\n'
        '      : `<span class="task-link-pending">PDF brevemente disponível</span>`;\n',
        app,
    )

    forum_block = re.search(
        r'    const renderForumButtons = \(task\) => \{\n.*?    \};\n',
        app,
        flags=re.S,
    ).group(0)
    if "const renderTaskFiles" in app:
        app = re.sub(
            r'\n    const renderTaskFiles = \(task\) => \{\n.*?\n    \};\n\n    const renderChecklist = \(task\).*?;\n',
            "\n" + RENDER_TASK_FILES,
            app,
            flags=re.S,
        )
    else:
        app = app.replace(forum_block, forum_block + RENDER_TASK_FILES)

    app = re.sub(
        r'    const renderSimplifiedTask = \(task\) => `\n.*?\n    `;\n\n    const overviewItems = \[',
        RENDER_SIMPLIFIED + "\n\n    const overviewItems = [",
        app,
        flags=re.S,
    )

    overview = [
        "Usar o ficheiro prático indicado em cada tarefa e guardar o resultado na pasta definida.",
        "Respeitar rigorosamente o nome indicado em cada enunciado e utilizar apenas o primeiro nome.",
        "Guardar os ficheiros na estrutura definida pela formadora, mantendo a organização entre computador e Google Drive.",
        "Efetuar no Moodle o registo específico solicitado em cada tarefa.",
        "Confirmar, antes de concluir, se o ficheiro está completo, legível e funcional.",
    ]
    app = re.sub(
        r'    const overviewItems = \[\n.*?\n    \];',
        "    const overviewItems = " + json.dumps(overview, ensure_ascii=False, indent=6).replace("\n", "\n    ") + ";",
        app,
        flags=re.S,
    )

    if "const renderTiMaterialsStatus" not in app:
        app = app.replace(INDIVIDUAL_ITEMS_OLD, INDIVIDUAL_ITEMS_NEW)
        app = app.replace(
            '${renderGroup("Tarefas Individuais", "tarefasIndividuais", individualItems)}',
            '${renderGroup("Tarefas Individuais", "tarefasIndividuais", individualItems, { before: renderTiMaterialsStatus() })}',
        )

    APP_JS.write_text(app, encoding="utf-8")


RENDER_TASK_FILES = r'''

    const renderTaskFiles = (task) => {
      const files = (task.workFiles || []).filter((file) => file.wordUrl || file.available !== false);
      return files.map((file) => {
        const label = `${file.number ? `${file.number} — ` : ""}${file.title}`;
        return file.available && file.wordUrl
          ? `<a class="small-button" href="${getBasePath()}${file.wordUrl}" target="_top" download>Descarregar ${label}</a>`
          : `<span class="task-link-pending">${label}: ficheiro brevemente disponível</span>`;
      }).join("");
    };
'''



RENDER_SIMPLIFIED = r'''    const renderSimplifiedTask = (task) => `
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
          ${renderTaskPdfButton(task, "Abrir PDF da TI")}
          ${renderTaskFiles(task)}
          ${renderForumButtons(task)}
        </div>

        ${renderTaskPdfModal(task)}

      </div>
    `;'''



INDIVIDUAL_ITEMS_OLD = '''  const individualItems = individualTasks.map((task) => ({
    key: task.id,
    label: task.title,
    linkType: "forum",
    linkKey: task.id,
    linkLabel: "Fórum",
    linkValue: obterForumUrl(task),
    linkPlaceholder: "https://fad.iefp.pt/mod/forum/discuss.php?d=..."
  }));
'''

INDIVIDUAL_ITEMS_NEW = INDIVIDUAL_ITEMS_OLD + r'''  const renderTiMaterialsStatus = () => `
    <div class="site-control-materials-status">
      <h3>Estado dos ficheiros das TIs</h3>
      ${individualTasks.map((task) => {
        const pdfStatus = task.pdfUrl ? "PDF OK" : "PDF em falta";
        const wordFiles = task.workFiles || [];
        const wordStatus = wordFiles.length
          ? wordFiles.map((file) => `${file.title}: ${file.available && file.wordUrl ? "Word OK" : "Word em falta"}`).join(" · ")
          : "Sem ficheiro Word associado";
        return `<p><strong>${task.title}</strong><br><span>${pdfStatus}</span><span>${wordStatus}</span></p>`;
      }).join("")}
    </div>
  `;
'''


def update_moodle(tasks):
    moodle = MOODLE.read_text(encoding="utf-8")
    moodle_tasks = [
        {
            "title": task["title"],
            "objective": task["objective"],
            "steps": [step["text"] for step in task["steps"]],
            "moodleRecord": task["moodleRecord"],
            "delivery": task["evidence"],
            "pdfUrl": task.get("pdfUrl", ""),
            "workFiles": task.get("workFiles", []),
        }
        for task in tasks
    ]
    moodle = replace_between(
        moodle,
        "      const tiTasks=",
        "      function cardStart",
        "      const tiTasks=" + json.dumps(moodle_tasks, ensure_ascii=False, indent=8) + ";",
    )
    moodle = re.sub(
        r"      function renderMoodleFileLinks\(task\)\{.*?\}\n      function renderTiHtml\(task,index\)\{.*?\}\n      function escapeHtml",
        MOODLE_RENDER + "\n      function escapeHtml",
        moodle,
        flags=re.S,
    )
    MOODLE.write_text(moodle, encoding="utf-8")


MOODLE_RENDER = r'''      function renderTiHtml(task,index){const accent=index<6?colors.lightBlue:colors.darkBlue;return cardStart(accent)+'<h3 style="margin:0 0 12px;color:'+colors.blue+';font-size:24px;line-height:1.2;font-weight:900;">'+task.title+'</h3><p style="margin:0 0 14px;line-height:1.6;"><strong>Objetivo:</strong> '+task.objective+'</p><p style="margin:0 0 8px;font-weight:900;color:'+colors.darkBlue+';">O que fazer:</p><ul style="margin:0;padding-left:22px;line-height:1.7;">'+task.steps.map(step=>'<li>'+step+'</li>').join('')+'</ul>'+cardEnd()}'''


def update_styles():
    css = STYLES.read_text(encoding="utf-8")
    if ".task-files-block {" in css:
        return
    marker = "@media (max-width: 720px) {\n  .detailed-task-content {"
    css = css.replace(marker, CSS_ADDITION + "\n" + marker)
    STYLES.write_text(css, encoding="utf-8")


CSS_ADDITION = r'''
.task-files-block {
  display: grid;
  gap: 12px;
}

.task-file-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  padding: 12px;
  border: 1px solid var(--color-border, #d1d5db);
  border-radius: 10px;
  background: var(--color-surface, #ffffff);
}

.task-file-row-primary {
  border-left: 4px solid var(--color-primary, #2b579a);
}

.task-file-row small,
.task-file-row p {
  display: block;
  margin: 4px 0 0;
  color: var(--color-text-muted, #6b7280);
}

.task-file-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.small-button.secondary-link {
  background: var(--color-accent, #1c3f73);
}

.site-control-materials-status {
  display: grid;
  gap: 8px;
  padding: 12px;
  border: 1px solid var(--color-border, #d1d5db);
  border-left: 5px solid var(--color-primary, #2b579a);
  border-radius: 10px;
  background: var(--color-surface, #ffffff);
}

.site-control-materials-status h3 {
  margin: 0 0 4px;
  color: var(--color-primary, #2b579a);
  font-size: 1rem;
}

.site-control-materials-status p {
  margin: 0;
  padding: 8px 0;
  border-top: 1px solid var(--color-border, #d1d5db);
}

.site-control-materials-status p:first-of-type {
  border-top: 0;
}

.site-control-materials-status span {
  display: inline-block;
  margin: 4px 10px 0 0;
  color: var(--color-text-muted, #6b7280);
  font-size: 0.9rem;
}

@media (max-width: 720px) {
  .task-file-row {
    grid-template-columns: 1fr;
  }

  .task-file-actions {
    justify-content: flex-start;
  }
}
'''


def main():
    tasks = parse_tasks()
    update_app(tasks)
    update_moodle(tasks)
    update_styles()
    print(json.dumps({
        "tasks": len(tasks),
        "pdfs": sum(1 for task in tasks if task.get("pdfUrl")),
        "availableWordFiles": sum(
            1
            for task in tasks
            for file in task.get("workFiles", [])
            if file.get("available") and file.get("wordUrl")
        ),
    }, ensure_ascii=False))


if __name__ == "__main__":
    main()
