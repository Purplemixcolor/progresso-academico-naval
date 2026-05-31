# Progresso Academico - Engenharia Naval

Aplicativo para acompanhar conclusao do curso, previsao de formatura, materias liberadas, abertura por periodo, pre-requisitos, atrasos, optativas, boletim, faltas e coeficiente.

## Como usar

Abra `index.html` no navegador. Os dados ficam salvos no `localStorage` do proprio navegador.

Para usar como app instalavel, rode por um servidor local ou publique a pasta em um host HTTPS. Depois abra no celular ou PC e use a opcao "Instalar app" do navegador.

## Sincronizacao entre celular e PC

O app ja tem suporte a sincronizacao via Supabase. Para ativar:

1. Crie um projeto gratuito no Supabase.
2. No SQL Editor do Supabase, execute o conteudo de `supabase-schema.sql`.
3. Em Project Settings > API Keys, copie a Project URL e a publishable key ou anon public key.
4. No app, clique no icone de nuvem, cole esses dois campos e salve.
5. Crie uma conta ou entre com e-mail e senha.

Este projeto ja esta configurado com a URL e a chave publica do Supabase criado para o app. A tela de nuvem continua existindo para trocar a configuracao se voce criar outro projeto. Com a conta conectada, alteracoes feitas no celular ou no PC sao salvas na tabela `academic_progress` e puxadas na proxima sincronizacao.

## Recursos

- Percentual de conclusao por creditos.
- Previsao de formatura por simulacao semestre a semestre, considerando pre-requisitos, materias atrasadas, bloqueios, paridade de oferta por serie e limite de materias por periodo.
- Lista de materias liberadas conforme pre-requisitos concluidos.
- Periodo previsto de abertura de cada materia.
- Indicacao de materias atrasadas e desde qual periodo.
- Abas por barra inferior: painel, materias, fluxograma, horario, optativas, boletim e notas.
- Mapa de fluxo por periodo sem setas cruzadas, com destaque de pre-requisitos e materias liberadas ao selecionar uma disciplina.
- Grade horaria editavel para as disciplinas do semestre vigente.
- Aba de boletim para AP1, AP2, PF, faltas, frequencia e registro de dias faltosos.
- Registro de notas por disciplina e calculo de coeficiente estimado por creditos.
- Instalacao como PWA e sincronizacao opcional por Supabase.
- Edicao, inclusao e exclusao de materias.
- Importacao e exportacao dos dados em JSON.

## Base atual

A base inicial foi ajustada com o Historico Escolar Parcial emitido em 30/05/2026, com o Horario Academico 2025/2 de Engenharia Naval e com a grade completa em imagem. O app considera:

- Curriculo ENV_2013.
- Entrada 2024/1.
- 5o periodo atual.
- 282 creditos obrigatorios e 12 creditos optativos exigidos.
- Disciplinas aprovadas, matriculadas e pendentes conforme o historico.
- Aba de optativas com quatro slots; em cada slot e possivel escolher a disciplina, status e nota.

## Observacao

A matriz segue os dados disponiveis nos PDFs e continua editavel. A grade completa nao tinha texto extraivel, entao as setas foram lidas visualmente a partir da imagem renderizada.
