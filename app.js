const STORAGE_KEY = "app-medicao-engenharia-naval-v8";
const SYNC_CONFIG_KEY = "progresso-academico-sync-config";
const DEFAULT_SYNC_CONFIG = {
  url: "https://zecpfnxpeeejdnhkcwdt.supabase.co",
  anonKey: "sb_publishable_lJpsJu-6vS9t9EW98yYt3g_fncBDMf7",
};

const TCC1_PREREQS = [
  "estbas001",
  "estbas002",
  "estbas003",
  "estbas004",
  "estbas005",
  "estbas006",
  "estbas007",
  "estecp001",
  "estbas008",
  "estbas009",
  "estbas010",
  "estbas011",
  "estbas012",
  "estbas013",
  "estbas017",
  "estecp002",
  "estbas015",
  "estbas016",
  "esteme002",
  "estbas014",
  "esteci002",
  "estbas049",
  "estenv001",
  "estenv002",
  "estbas018",
  "estbas019",
  "estbas020",
  "esteme004",
  "estenv003",
  "esteme003",
  "esteel055",
  "estenv004",
  "esteme008",
  "estemt010",
  "esteme018",
  "estenv005",
  "estenv006",
  "estenv007",
  "estenv024",
  "estenv009",
  "estenv010",
  "estenv011",
  "estenv012",
  "estenv013",
  "estenv014",
  "estenv015",
];

const INTERNSHIP1_PREREQS = [
  ...TCC1_PREREQS,
  "estenv017",
  "estenv018",
  "estenv019",
  "estenv020",
  "estenv021",
  "estenv022",
  "estenv023",
];

const defaultState = {
  settings: {
    startDate: "2024-01",
    currentPeriod: 5,
    capacity: 6,
    requiredCredits: 294,
    monthsPerPeriod: 6,
    semesterLabel: "2026/1",
  },
  schedule: [
    sch("estenv024"),
    sch("estemt010"),
    sch("estenv112"),
    sch("esteme018"),
    sch("estenv005"),
    sch("estenv006"),
    sch("esteel055"),
    sch("estenv007"),
    sch("estenv003"),
  ],
  optativeChoices: {
    optativa1: "estenv112",
    optativa2: "",
    optativa3: "",
    optativa4: "",
  },
  termReport: {
    esteel055: { ap1: 8.5, ap2: 8.5, pf: "", baseAbsences: 4 },
    estenv003: { ap1: "", ap2: "", pf: "", baseAbsences: 0 },
    esteme018: { ap1: 9.4, ap2: "", pf: "", baseAbsences: 0 },
    estemt010: { ap1: "", ap2: "", pf: "", baseAbsences: 0 },
    estenv005: { ap1: "", ap2: "", pf: "", baseAbsences: 0 },
    estenv006: { ap1: 3.9, ap2: "", pf: "", baseAbsences: 0 },
    estenv007: { ap1: 4.0, ap2: "", pf: "", baseAbsences: 0 },
    estenv024: { ap1: "", ap2: "", pf: "", baseAbsences: 0 },
    estenv112: { ap1: 5.6, ap2: "", pf: "", baseAbsences: 0 },
  },
  absenceLog: [],
  subjects: [
    s("estbas001", "Álgebra Linear I", "ESTBAS001", 1, 4, [], "done", 2, 9.5),
    s("estbas002", "Cálculo I", "ESTBAS002", 1, 6, [], "done", 4, 8.75),
    s("estbas003", "Introdução à Engenharia", "ESTBAS003", 1, 2, [], "done", 1, 9),
    s("estbas004", "Introdução às Ciências do Ambiente", "ESTBAS004", 1, 2, [], "done", 1, 8),
    s("estbas005", "Química Geral", "ESTBAS005", 1, 4, [], "done", 1, 8.75),
    s("estbas006", "Comunicação e Expressão", "ESTBAS006", 1, 4, [], "done", 1, 6.73),
    s("estbas007", "Física I", "ESTBAS007", 1, 4, [], "done", 1, 9.63),
    s("estecp001", "Linguagem de Programação I", "ESTECP001", 1, 4, [], "done", 1, 6.27),
    s("estbas008", "Álgebra Linear II", "ESTBAS008", 2, 4, ["estbas001"]),
    s("estbas009", "Cálculo II", "ESTBAS009", 2, 5, ["estbas002"], "done", 5, 7.5),
    s("estbas010", "Desenho Básico", "ESTBAS010", 2, 3, [], "done", 2, 9),
    s("estbas011", "Introdução à Administração", "ESTBAS011", 2, 3, [], "done", 4, 9),
    s("estbas012", "Probabilidade e Estatística", "ESTBAS012", 2, 4, ["estbas002"], "done", 5, 9.6),
    s("estbas013", "Física II", "ESTBAS013", 2, 4, ["estbas007"], "done", 2, 8),
    s("estbas017", "Introdução à Economia", "ESTBAS017", 2, 3, [], "done", 4, 9.25),
    s("estecp002", "Linguagem de Programação II", "ESTECP002", 2, 4, ["estecp001"], "done", 2, 9.25),
    s("estbas014", "Cálculo III", "ESTBAS014", 3, 5, ["estbas009"]),
    s("estbas015", "Física III", "ESTBAS015", 3, 4, ["estbas013"], "done", 4, 7.67),
    s("estbas016", "Laboratório de Física I", "ESTBAS016", 3, 1, ["estbas007"], "done", 3, 6.6),
    s("estbas049", "Cálculo Numérico", "ESTBAS049", 3, 4, ["estbas009"], "pending", null, null, "ESN0509"),
    s("estenv001", "Fundamentos de Engenharia Naval", "ESTENV001", 3, 3, ["estbas003"], "done", 3, 7.8),
    s("estenv002", "Ciência e Engenharia dos Materiais", "ESTENV002", 3, 4, ["estbas005"], "done", 3, 7.6),
    s("esteme002", "Introdução à Manufatura Mecânica", "ESTEME002", 3, 4, ["estbas010"], "done", 3, 8),
    s("esteme008", "Termodinâmica", "ESTEME008", 3, 6, ["esteme003"], "done", 4, 7),
    s("esteel055", "Eletricidade Geral", "ESTEEL055", 4, 4, ["estbas015"], "doing"),
    s("estbas018", "Física IV", "ESTBAS018", 4, 4, ["estbas015"], "done", 4, 8),
    s("estbas019", "Cálculo IV", "ESTBAS019", 4, 4, ["estbas014"]),
    s("estbas020", "Laboratório de Física II", "ESTBAS020", 4, 1, ["estbas016"]),
    s("esteci002", "Mecânica I", "ESTECI002", 4, 4, ["estbas013"], "done", 2, 6),
    s("esteme003", "Mecânica II", "ESTEME003", 4, 4, ["esteci002"], "done", 4, 7.75),
    s("esteme004", "Mecânica dos Fluidos", "ESTEME004", 4, 4, ["esteci002"], "done", 3, 7.67),
    s("estenv003", "Mecânica dos Sólidos para Engenharia Naval", "ESTENV003", 4, 4, ["estbas009"], "doing", null, null, "ESTEME001"),
    s("estenv004", "Pesquisa Operacional", "ESTENV004", 4, 3, ["estbas049"]),
    s("estenv005", "Desenho Assistido por Computador", "ESTENV005", 5, 4, ["estbas010"], "doing"),
    s("estenv006", "Hidrodinâmica I", "ESTENV006", 5, 3, ["esteme004"], "doing"),
    s("estenv007", "Arquitetura Naval I", "ESTENV007", 5, 5, ["estenv001", "estbas010"], "doing"),
    s("estenv024", "Engenharia Econômica", "ESTENV024", 5, 3, ["estbas017"], "doing", null, null, "ESTENV008"),
    s("esteme018", "Elementos de Máquinas", "ESTEME018", 5, 4, ["esteme003"], "doing"),
    s("estemt010", "Gestão de Projetos", "ESTEMT010", 5, 4, ["estbas011"], "doing"),
    s("estenv112", "Regulamentação Marítima Internacional", "ESTENV112", 5, 3, ["estenv013"], "doing", null, null, "", "optative", true),
    s("estenv101", "Normas de Autoridades Marítimas", "ESTENV101", 9, 3, ["estenv010"], "pending", null, null, "", "optative", true),
    s("estenv102", "Língua Brasileira de Sinais", "ESTENV102", 9, 3, [], "pending", null, null, "", "optative", true),
    s("estenv103", "Sistema de Posicionamento Dinâmico e Instrumentação de Bordo", "ESTENV103", 9, 3, ["estenv009"], "pending", null, null, "", "optative", true),
    s("estenv104", "Corrosão e Proteção", "ESTENV104", 9, 3, ["estenv019"], "pending", null, null, "", "optative", true),
    s("estenv105", "Ensaios Não Destrutivos na Construção Naval", "ESTENV105", 9, 3, ["estenv022"], "pending", null, null, "", "optative", true),
    s("estenv106", "Manutenção e Reparo Naval", "ESTENV106", 9, 3, ["estenv010"], "pending", null, null, "", "optative", true),
    s("estenv107", "Embarcações de Alta Velocidade", "ESTENV107", 9, 3, ["estenv022"], "pending", null, null, "", "optative", true),
    s("estenv108", "Refrigeração e Climatização em Navios", "ESTENV108", 9, 3, ["estenv015"], "pending", null, null, "", "optative", true),
    s("estenv109", "Metrologia", "ESTENV109", 9, 3, [], "pending", null, null, "", "optative", true),
    s("estenv110", "Motores Estacionários e Navais", "ESTENV110", 9, 3, ["estenv009"], "pending", null, null, "", "optative", true),
    s("estenv111", "Tecnologia de Soldagem de Materiais Utilizados em Embarcações Marítimas", "ESTENV111", 9, 3, ["estenv019"], "pending", null, null, "", "optative", true),
    s("estenv113", "Dragagem", "ESTENV113", 9, 3, ["estenv019"], "pending", null, null, "", "optative", true),
    s("estenv114", "Tubulações Industriais", "ESTENV114", 9, 3, ["estenv021"], "pending", null, null, "", "optative", true),
    s("estenv115", "Refrigeração Industrial", "ESTENV115", 9, 3, ["estenv021"], "pending", null, null, "", "optative", true),
    s("estenv116", "Sistemas de Gestão Ambiental", "ESTENV116", 9, 3, ["estemt010"], "pending", null, null, "", "optative", true),
    s("estenv117", "Economia e Finanças Marítimas", "ESTENV117", 9, 3, ["estenv024"], "pending", null, null, "", "optative", true),
    s("estenv118", "Tópicos Avançados em Estruturas Navais", "ESTENV118", 9, 3, ["estenv022"], "pending", null, null, "", "optative", true),
    s("estenv119", "Empreendedorismo", "ESTENV119", 9, 3, ["estenv017"], "pending", null, null, "", "optative", true),
    s("estenv009", "Dinâmica de Sistemas Navais", "ESTENV009", 6, 6, ["esteme003"]),
    s("estenv010", "Arquitetura Naval II", "ESTENV010", 6, 4, ["estenv007", "estenv006"]),
    s("estenv011", "Hidrodinâmica II", "ESTENV011", 6, 4, ["estenv006"]),
    s("estenv012", "Máquinas Marítimas I", "ESTENV012", 6, 4, ["esteme018"]),
    s("estenv013", "Prática Profissional e Ética", "ESTENV013", 6, 2, ["estenv001"], "done", 4, 10),
    s("estenv014", "Resistência Estrutural I", "ESTENV014", 6, 4, ["estenv003"]),
    s("estenv015", "Transferência de Calor", "ESTENV015", 6, 4, ["esteme008"], "pending", null, null, "ESTEME013"),
    s("estenv100", "Segurança do Trabalho", "ESTENV100", 6, 3, ["estenv013"], "planned", null, null, "", "optative", true),
    s("estenv017", "Administração da Produção", "ESTENV017", 7, 3, ["estenv024"], "pending", null, null, "ESTBAS024"),
    s("estenv018", "Controle e Automação Naval", "ESTENV018", 7, 4, ["estbas019"]),
    s("estenv019", "Hidrovias", "ESTENV019", 7, 3, ["estenv006"]),
    s("estenv020", "Métodos Computacionais Aplicados à Engenharia Naval I", "ESTENV020", 7, 4, ["estenv003"]),
    s("estenv021", "Máquinas Marítimas II", "ESTENV021", 7, 4, ["estenv012"]),
    s("estenv022", "Resistência Estrutural II", "ESTENV022", 7, 4, ["estenv014"]),
    s("estenv023", "Logística e Transporte", "ESTENV023", 7, 4, ["estenv024"]),
    s("estenv025", "Portos", "ESTENV025", 8, 4, ["estenv019"]),
    s("estenv027", "Métodos Computacionais Aplicados à Engenharia Naval II", "ESTENV027", 8, 4, ["estenv020"]),
    s("estenv028", "Máquinas Marítimas III", "ESTENV028", 8, 4, ["estenv021"]),
    s("estenv029", "Processos Estocásticos", "ESTENV029", 8, 4, ["estbas012", "estenv020"]),
    s("estenv030", "Construção Naval", "ESTENV030", 8, 4, ["estenv017", "estenv024"]),
    s("estenv036", "Projeto Naval I", "ESTENV036", 8, 6, ["estenv010"], "pending", null, null, "ESTENV026"),
    s("estenv031", "Trabalho de Conclusão de Curso I - Engenharia Naval", "ESTENV031", 9, 2, TCC1_PREREQS),
    s("estenv033", "Estágio Supervisionado em Engenharia Naval I", "ESTENV033", 9, 15, INTERNSHIP1_PREREQS),
    s("estenv037", "Projeto Naval II", "ESTENV037", 9, 6, ["estenv036"], "pending", null, null, "ESTENV032"),
    s("estenv034", "Trabalho de Conclusão de Curso II - Engenharia Naval", "ESTENV034", 10, 2, ["estenv031"]),
    s("estenv035", "Estágio Supervisionado em Engenharia Naval II", "ESTENV035", 10, 15, ["estenv033"]),
    s("esteme063", "Processos de Soldagem", "ESTEME063", 4, 5, ["estenv002"], "done", 4, 9.1),
    s("optativa1", "Optativa I", "OPT1", 5, 3, [], "doing", null, null, "", "optative"),
    s("optativa2", "Optativa II", "OPT2", 7, 3, [], "pending", null, null, "", "optative"),
    s("optativa3", "Optativa III", "OPT3", 8, 3, [], "pending", null, null, "", "optative"),
    s("optativa4", "Optativa IV", "OPT4", 8, 3, [], "pending", null, null, "", "optative"),
  ],
};

function s(id, name, code, idealPeriod, credits, prereqs = [], status = "pending", completedPeriod = null, grade = null, equivalence = "", category = "required", selectableOptative = false) {
  return { id, name, code, idealPeriod, credits, prereqs, status, completedPeriod, grade, equivalence, category, selectableOptative };
}

function sch(subjectId, days = "", time = "", room = "", note = "Matriculado no semestre vigente") {
  return { subjectId, days, time, room, note };
}

let syncClient = null;
let syncUser = null;
let syncTimer = null;
let syncEnabled = false;
let state = loadState();
migrateState();
let flowSelectedId = "estenv007";

const els = {
  startDate: document.querySelector("#startDate"),
  currentPeriod: document.querySelector("#currentPeriod"),
  capacity: document.querySelector("#capacity"),
  requiredCredits: document.querySelector("#requiredCredits"),
  monthsPerPeriod: document.querySelector("#monthsPerPeriod"),
  completionPct: document.querySelector("#completionPct"),
  progressFill: document.querySelector("#progressFill"),
  creditsDone: document.querySelector("#creditsDone"),
  subjectsDone: document.querySelector("#subjectsDone"),
  pendingCount: document.querySelector("#pendingCount"),
  doneSubjectCount: document.querySelector("#doneSubjectCount"),
  doingSubjectCount: document.querySelector("#doingSubjectCount"),
  plannedSubjectCount: document.querySelector("#plannedSubjectCount"),
  pendingSubjectCount: document.querySelector("#pendingSubjectCount"),
  courseCoef: document.querySelector("#courseCoef"),
  graduationDate: document.querySelector("#graduationDate"),
  lateCount: document.querySelector("#lateCount"),
  openCount: document.querySelector("#openCount"),
  openList: document.querySelector("#openList"),
  lateBadge: document.querySelector("#lateBadge"),
  lateList: document.querySelector("#lateList"),
  subjectGrid: document.querySelector("#subjectGrid"),
  optativeSlots: document.querySelector("#optativeSlots"),
  flowchartView: document.querySelector("#flowchartView"),
  flowchartGrid: document.querySelector("#flowchartGrid"),
  flowDetails: document.querySelector("#flowDetails"),
  flowSearchInput: document.querySelector("#flowSearchInput"),
  flowStatusFilter: document.querySelector("#flowStatusFilter"),
  scheduleCount: document.querySelector("#scheduleCount"),
  scheduleGrid: document.querySelector("#scheduleGrid"),
  gradesCoef: document.querySelector("#gradesCoef"),
  gradedCount: document.querySelector("#gradedCount"),
  gradedCredits: document.querySelector("#gradedCredits"),
  gradeRowsCount: document.querySelector("#gradeRowsCount"),
  gradesTableBody: document.querySelector("#gradesTableBody"),
  termAverage: document.querySelector("#termAverage"),
  termAbsences: document.querySelector("#termAbsences"),
  lowestFrequency: document.querySelector("#lowestFrequency"),
  reportTableBody: document.querySelector("#reportTableBody"),
  absenceCount: document.querySelector("#absenceCount"),
  absenceLogCount: document.querySelector("#absenceLogCount"),
  absenceLog: document.querySelector("#absenceLog"),
  absenceForm: document.querySelector("#absenceForm"),
  absenceDate: document.querySelector("#absenceDate"),
  absenceSubject: document.querySelector("#absenceSubject"),
  absenceClasses: document.querySelector("#absenceClasses"),
  absenceNote: document.querySelector("#absenceNote"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  addSubjectBtn: document.querySelector("#addSubjectBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  importInput: document.querySelector("#importInput"),
  resetBtn: document.querySelector("#resetBtn"),
  syncBtn: document.querySelector("#syncBtn"),
  syncDialog: document.querySelector("#syncDialog"),
  syncForm: document.querySelector("#syncForm"),
  syncStatus: document.querySelector("#syncStatus"),
  closeSyncBtn: document.querySelector("#closeSyncBtn"),
  supabaseUrl: document.querySelector("#supabaseUrl"),
  supabaseAnonKey: document.querySelector("#supabaseAnonKey"),
  syncEmail: document.querySelector("#syncEmail"),
  syncPassword: document.querySelector("#syncPassword"),
  saveSyncConfigBtn: document.querySelector("#saveSyncConfigBtn"),
  signUpBtn: document.querySelector("#signUpBtn"),
  signInBtn: document.querySelector("#signInBtn"),
  signOutBtn: document.querySelector("#signOutBtn"),
  syncNowBtn: document.querySelector("#syncNowBtn"),
  dialog: document.querySelector("#subjectDialog"),
  form: document.querySelector("#subjectForm"),
  dialogTitle: document.querySelector("#dialogTitle"),
  subjectId: document.querySelector("#subjectId"),
  subjectName: document.querySelector("#subjectName"),
  subjectCode: document.querySelector("#subjectCode"),
  subjectPeriod: document.querySelector("#subjectPeriod"),
  subjectCredits: document.querySelector("#subjectCredits"),
  subjectPrereqs: document.querySelector("#subjectPrereqs"),
  deleteSubjectBtn: document.querySelector("#deleteSubjectBtn"),
  closeDialogBtn: document.querySelector("#closeDialogBtn"),
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(defaultState);
  try {
    return JSON.parse(saved);
  } catch {
    return structuredClone(defaultState);
  }
}

function migrateState({ silent = false } = {}) {
  state.meta = { updatedAt: new Date().toISOString(), ...state.meta };
  state.settings = { ...defaultState.settings, ...state.settings };
  state.schedule ||= structuredClone(defaultState.schedule);
  state.optativeChoices = { ...defaultState.optativeChoices, ...state.optativeChoices };
  state.termReport = { ...structuredClone(defaultState.termReport), ...state.termReport };
  state.absenceLog ||= [];
  state.subjects = state.subjects.map((subject) => {
    const { chance, priority, ...cleanSubject } = subject;
    return { grade: null, equivalence: "", category: "required", selectableOptative: false, ...cleanSubject };
  });
  if (silent) persistLocalOnly();
  else persist();
}

function persist() {
  state.meta = { ...state.meta, updatedAt: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  queueCloudSave();
}

function persistLocalOnly() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadSyncConfig() {
  try {
    return { ...DEFAULT_SYNC_CONFIG, ...(JSON.parse(localStorage.getItem(SYNC_CONFIG_KEY)) || {}) };
  } catch {
    return { ...DEFAULT_SYNC_CONFIG };
  }
}

function setSyncStatus(message) {
  if (els.syncStatus) els.syncStatus.textContent = message;
}

function queueCloudSave() {
  if (!syncEnabled || !syncClient || !syncUser) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(() => pushCloudState(), 900);
}

async function pushCloudState() {
  if (!syncEnabled || !syncClient || !syncUser) return;
  const updatedAt = state.meta?.updatedAt || new Date().toISOString();
  const { error } = await syncClient.from("academic_progress").upsert({
    user_id: syncUser.id,
    data: state,
    updated_at: updatedAt,
  });
  setSyncStatus(error ? error.message : `Sincronizado em ${new Date().toLocaleTimeString("pt-BR")}.`);
}

async function syncNow() {
  if (!syncClient || !syncUser) {
    setSyncStatus("Entre na conta para sincronizar.");
    return;
  }
  const pulled = await pullCloudState();
  if (!pulled) await pushCloudState();
}

function registerPwa() {
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

function saveSyncConfig() {
  const config = {
    url: els.supabaseUrl.value.trim(),
    anonKey: els.supabaseAnonKey.value.trim(),
  };
  localStorage.setItem(SYNC_CONFIG_KEY, JSON.stringify(config));
  setupSyncClient();
  setSyncStatus("Configuração salva.");
}

async function setupSyncClient() {
  const config = loadSyncConfig();
  els.supabaseUrl.value = config.url || "";
  els.supabaseAnonKey.value = config.anonKey || "";
  if (!config.url || !config.anonKey || !window.supabase) {
    syncClient = null;
    syncUser = null;
    syncEnabled = false;
    setSyncStatus("Modo local. Configure o Supabase para sincronizar.");
    return;
  }
  syncClient = window.supabase.createClient(config.url, config.anonKey);
  syncClient.auth.onAuthStateChange((_event, session) => {
    syncUser = session?.user || null;
    syncEnabled = Boolean(syncUser);
  });
  const { data, error } = await syncClient.auth.getSession();
  if (error) {
    setSyncStatus(error.message);
    return;
  }
  syncUser = data.session?.user || null;
  syncEnabled = Boolean(syncUser);
  setSyncStatus(syncUser ? `Conectado: ${syncUser.email}` : "Configuração pronta. Entre com sua conta.");
}

async function signUp() {
  if (!syncClient) await setupSyncClient();
  if (!syncClient) return setSyncStatus("Salve a URL e a anon key do Supabase primeiro.");
  const email = els.syncEmail.value.trim();
  const password = els.syncPassword.value;
  const { data, error } = await syncClient.auth.signUp({ email, password });
  if (error) return setSyncStatus(error.message);
  syncUser = data.user;
  syncEnabled = Boolean(syncUser);
  setSyncStatus("Conta criada. Se o Supabase pedir confirmação, confirme no e-mail antes de entrar.");
}

async function signIn() {
  if (!syncClient) await setupSyncClient();
  if (!syncClient) return setSyncStatus("Salve a URL e a anon key do Supabase primeiro.");
  const email = els.syncEmail.value.trim();
  const password = els.syncPassword.value;
  const { data, error } = await syncClient.auth.signInWithPassword({ email, password });
  if (error) return setSyncStatus(error.message);
  syncUser = data.user;
  syncEnabled = true;
  setSyncStatus(`Conectado: ${syncUser.email}`);
  await syncNow();
}

async function signOut() {
  if (syncClient) await syncClient.auth.signOut();
  syncUser = null;
  syncEnabled = false;
  setSyncStatus("Você saiu. O app continua em modo local.");
}

async function pullCloudState() {
  if (!syncEnabled || !syncClient || !syncUser) return false;
  const { data, error } = await syncClient
    .from("academic_progress")
    .select("data, updated_at")
    .eq("user_id", syncUser.id)
    .maybeSingle();
  if (error) {
    setSyncStatus(error.message);
    return false;
  }
  if (!data?.data) return false;
  const localTime = Date.parse(state.meta?.updatedAt || 0);
  const remoteTime = Date.parse(data.updated_at || data.data.meta?.updatedAt || 0);
  if (remoteTime > localTime) {
    state = data.data;
    migrateState({ silent: true });
    render();
    setSyncStatus("Dados baixados da nuvem.");
    return true;
  }
  return false;
}

function subjectMap() {
  return new Map(state.subjects.map((subject) => [subject.id, subject]));
}

function prereqsDone(subject) {
  const byId = subjectMap();
  return effectivePrereqs(subject).every((id) => byId.get(id)?.status === "done");
}

function totalCatalogCredits() {
  return forecastSubjects().reduce((sum, subject) => sum + Number(subject.credits), 0);
}

function openingPeriod(subject, cache = new Map()) {
  if (cache.has(subject.id)) return cache.get(subject.id);
  const byId = subjectMap();
  if (subject.status === "done") return subject.completedPeriod || effectiveIdealPeriod(subject);
  if (subject.status === "doing") return Number(state.settings.currentPeriod);
  const prereqPeriods = effectivePrereqs(subject).map((id) => {
    const prereq = byId.get(id);
    if (!prereq) return 0;
    if (prereq.status === "done") return prereq.completedPeriod || prereq.idealPeriod;
    if (prereq.status === "doing") return state.settings.currentPeriod;
    return Math.max(prereq.idealPeriod, openingPeriod(prereq, cache));
  });
  const earliest = Math.max(effectiveIdealPeriod(subject), Number(state.settings.currentPeriod), 1 + Math.max(0, ...prereqPeriods));
  const opens = nextOfferedPeriod(subject, earliest);
  cache.set(subject.id, opens);
  return opens;
}

function statusFor(subject) {
  if (subject.status === "done") return { key: "done", label: "Concluída" };
  if (subject.status === "doing") return { key: "doing", label: "Em curso" };
  if (subject.status === "planned") return { key: "planned", label: "Planejada" };
  if (prereqsDone(subject)) return { key: "open", label: "Liberada" };
  return { key: "blocked", label: "Bloqueada" };
}

function isLate(subject) {
  return subject.status !== "done" && subject.idealPeriod < Number(state.settings.currentPeriod);
}

function formatPeriodDate(period) {
  const [year, month] = state.settings.startDate.split("-").map(Number);
  const date = new Date(year, month - 1 + (period - 1) * Number(state.settings.monthsPerPeriod), 1);
  return date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
}

function chosenOptative(slotId) {
  const chosenId = state.optativeChoices?.[slotId];
  return chosenId ? subjectMap().get(chosenId) : null;
}

function effectivePrereqs(subject) {
  const chosen = subject.id.startsWith("optativa") ? chosenOptative(subject.id) : null;
  return chosen?.prereqs || subject.prereqs || [];
}

function effectiveIdealPeriod(subject) {
  const chosen = subject.id.startsWith("optativa") ? chosenOptative(subject.id) : null;
  return Number(chosen?.idealPeriod || subject.idealPeriod);
}

function isOfferedInPeriod(subject, period) {
  const ideal = effectiveIdealPeriod(subject);
  return period % 2 === ideal % 2;
}

function nextOfferedPeriod(subject, minPeriod) {
  let period = Math.max(1, Math.ceil(minPeriod));
  if (!isOfferedInPeriod(subject, period)) period += 1;
  return period;
}

function forecastSubjects() {
  return state.subjects.filter((subject) => !subject.selectableOptative);
}

function buildForecastPlan() {
  const currentPeriod = Number(state.settings.currentPeriod);
  const capacity = Math.max(1, Number(state.settings.capacity) || 6);
  const subjects = forecastSubjects();
  const byId = new Map(subjects.map((subject) => [subject.id, subject]));
  const doneAt = new Map();
  const plan = [];

  subjects.forEach((subject) => {
    if (subject.status === "done") doneAt.set(subject.id, subject.completedPeriod || effectiveIdealPeriod(subject));
    if (subject.status === "doing") doneAt.set(subject.id, currentPeriod);
  });

  let guard = 0;
  while (doneAt.size < subjects.length && guard < 40) {
    guard += 1;
    const period = currentPeriod + guard;
    const candidates = subjects
      .filter((subject) => !doneAt.has(subject.id))
      .filter((subject) => isOfferedInPeriod(subject, period))
      .filter((subject) =>
        effectivePrereqs(subject).every((id) => {
          if (!byId.has(id)) return true;
          return doneAt.has(id) && doneAt.get(id) < period;
        })
      )
      .sort((a, b) => forecastPriority(a, period) - forecastPriority(b, period));

    const selected = candidates.slice(0, capacity);
    selected.forEach((subject) => doneAt.set(subject.id, period));
    plan.push({ period, subjects: selected.map((subject) => subject.id) });
  }

  return {
    graduationPeriod: Math.max(currentPeriod, ...doneAt.values()),
    plan,
    unresolved: subjects.filter((subject) => !doneAt.has(subject.id)).map((subject) => subject.id),
  };
}

function forecastPriority(subject, period) {
  const latePenalty = subject.idealPeriod < period ? -100 : 0;
  const plannedPenalty = subject.status === "planned" ? -30 : 0;
  const blockerPenalty = -dependentsOf(subject.id).length * 2;
  return latePenalty + plannedPenalty + blockerPenalty + effectiveIdealPeriod(subject);
}

function forecastGraduationPeriod() {
  return buildForecastPlan().graduationPeriod;
}

function coefficient() {
  const graded = state.subjects.filter((subject) => subject.grade !== null && subject.grade !== "" && Number.isFinite(Number(subject.grade)));
  const credits = graded.reduce((sum, subject) => sum + Number(subject.credits), 0);
  const weighted = graded.reduce((sum, subject) => sum + Number(subject.grade) * Number(subject.credits), 0);
  return {
    value: credits ? weighted / credits : null,
    count: graded.length,
    credits,
  };
}

function render() {
  renderSettings();
  const totalCredits = Number(state.settings.requiredCredits) || totalCatalogCredits();
  const trackSubjects = forecastSubjects();
  const doneCredits = trackSubjects
    .filter((subject) => subject.status === "done")
    .reduce((sum, subject) => sum + Number(subject.credits), 0);
  const subjectStats = {
    total: trackSubjects.length,
    done: trackSubjects.filter((subject) => subject.status === "done").length,
    doing: trackSubjects.filter((subject) => subject.status === "doing").length,
    planned: trackSubjects.filter((subject) => subject.status === "planned").length,
    pending: trackSubjects.filter((subject) => subject.status !== "done").length,
  };
  const pct = totalCredits ? Math.round((doneCredits / totalCredits) * 100) : 0;
  const openSubjects = state.subjects.filter(
    (subject) => subject.status !== "done" && prereqsDone(subject) && isOfferedInPeriod(subject, Number(state.settings.currentPeriod))
  );
  const lateSubjects = state.subjects.filter(isLate);
  const cr = coefficient();

  els.completionPct.textContent = `${pct}%`;
  els.progressFill.style.width = `${pct}%`;
  els.creditsDone.textContent = `${doneCredits} / ${totalCredits}`;
  els.subjectsDone.textContent = `${subjectStats.done} / ${subjectStats.total}`;
  els.pendingCount.textContent = subjectStats.pending;
  els.doneSubjectCount.textContent = subjectStats.done;
  els.doingSubjectCount.textContent = subjectStats.doing;
  els.plannedSubjectCount.textContent = subjectStats.planned;
  els.pendingSubjectCount.textContent = subjectStats.pending;
  els.courseCoef.textContent = cr.value === null ? "-" : cr.value.toFixed(3);
  els.graduationDate.textContent = formatPeriodDate(forecastGraduationPeriod());
  els.lateCount.textContent = lateSubjects.length;
  els.openCount.textContent = openSubjects.length;
  els.lateBadge.textContent = lateSubjects.length;

  renderCompactList(els.openList, openSubjects, (subject) => `Abre no ${openingPeriod(subject)}º período`);
  renderCompactList(els.lateList, lateSubjects, (subject) => `Atrasada desde o ${subject.idealPeriod}º período`);
  renderSubjects();
  renderOptatives();
  renderSchedule();
  renderReport();
  renderGrades();
  if (window.lucide) window.lucide.createIcons();
}

function renderSettings() {
  els.startDate.value = state.settings.startDate;
  els.currentPeriod.value = state.settings.currentPeriod;
  els.capacity.value = state.settings.capacity;
  els.requiredCredits.value = state.settings.requiredCredits || totalCatalogCredits();
  els.monthsPerPeriod.value = state.settings.monthsPerPeriod;
}

function renderCompactList(container, subjects, meta) {
  if (!subjects.length) {
    container.innerHTML = `<div class="empty">Nenhuma matéria nesta lista.</div>`;
    return;
  }
  container.innerHTML = subjects
    .slice()
    .sort((a, b) => a.idealPeriod - b.idealPeriod || a.name.localeCompare(b.name))
    .map((subject) => `<div class="compact-item"><strong>${subject.name}</strong><span>${meta(subject)}</span></div>`)
    .join("");
}

function renderSubjects() {
  const filtered = getFilteredSubjects();
  if (!filtered.length) {
    els.subjectGrid.innerHTML = `<div class="empty">Nenhuma matéria encontrada.</div>`;
    els.flowchartGrid.innerHTML = `<div class="empty">Nenhuma matéria encontrada.</div>`;
    return;
  }

  els.subjectGrid.innerHTML = filtered.filter((subject) => !subject.selectableOptative && !subject.id.startsWith("optativa")).map((subject) => subjectCard(subject, subjectMap())).join("");
  renderFlowchart(getFlowSubjects());
}

function renderOptatives() {
  const byId = subjectMap();
  const options = state.subjects
    .filter((subject) => subject.selectableOptative)
    .sort((a, b) => a.name.localeCompare(b.name));
  const slots = [
    ["optativa1", "Optativa I"],
    ["optativa2", "Optativa II"],
    ["optativa3", "Optativa III"],
    ["optativa4", "Optativa IV"],
  ];
  els.optativeSlots.innerHTML = slots
    .map(([slotId, label]) => {
      const selectedId = state.optativeChoices[slotId] || "";
      const selected = byId.get(selectedId);
      const slotSubject = byId.get(slotId);
      const slotStatus = slotSubject?.status || "pending";
      return `
        <article class="optative-slot" data-optative-card="${slotId}">
          <h3>${label}</h3>
          <label>
            Disciplina cursada
            <select data-optative-slot="${slotId}">
              <option value="">Escolher matéria</option>
              ${options.map((subject) => `<option value="${subject.id}" ${subject.id === selectedId ? "selected" : ""}>${subject.name}</option>`).join("")}
            </select>
          </label>
          <span>${selected ? `${selected.code} · optativa normalmente do 9º/10º` : "Ainda sem escolha"}</span>
          <div class="optative-slot-actions">
            <button class="${slotStatus === "pending" ? "active" : ""}" type="button" data-optative-status="pending">Pendente</button>
            <button class="${slotStatus === "planned" ? "active" : ""}" type="button" data-optative-status="planned">Plano</button>
            <button class="${slotStatus === "doing" ? "active" : ""}" type="button" data-optative-status="doing">Curso</button>
            <button class="${slotStatus === "done" ? "active" : ""}" type="button" data-optative-status="done">Feita</button>
          </div>
          <label>
            Nota
            <input data-optative-grade="${slotId}" type="number" min="0" max="10" step="0.01" value="${slotSubject?.grade ?? ""}" placeholder="0-10" />
          </label>
        </article>
      `;
    })
    .join("");
}

function getFilteredSubjects() {
  const query = els.searchInput.value.trim().toLowerCase();
  const filter = els.statusFilter.value;
  const byId = subjectMap();
  return state.subjects
    .filter((subject) => {
      const status = statusFor(subject).key;
      const prereqText = subject.prereqs.map((id) => byId.get(id)?.name || id).join(" ");
      const matchesQuery = [subject.name, subject.code, prereqText].join(" ").toLowerCase().includes(query);
      const matchesFilter = filter === "all" || status === filter || (filter === "late" && isLate(subject));
      return matchesQuery && matchesFilter;
    })
    .sort((a, b) => a.idealPeriod - b.idealPeriod || a.name.localeCompare(b.name));
}

function renderFlowchart(subjects) {
  const byPeriod = new Map();
  subjects.forEach((subject) => {
    const period = Number(subject.idealPeriod);
    if (!byPeriod.has(period)) byPeriod.set(period, []);
    byPeriod.get(period).push(subject);
  });

  const periods = Array.from({ length: 10 }, (_, index) => index + 1);
  els.flowchartGrid.innerHTML = periods
    .map((period) => {
      const periodSubjects = (byPeriod.get(period) || []).sort((a, b) => a.name.localeCompare(b.name));
      const nodes = periodSubjects.map(flowNode).join("");
      return `<section class="period-column"><div class="period-title">${period}º</div>${nodes}</section>`;
    })
    .join("");

  renderFlowDetails();
}

function getFlowSubjects() {
  const query = els.flowSearchInput.value.trim().toLowerCase();
  const filter = els.flowStatusFilter.value;
  return state.subjects
    .filter((subject) => !subject.selectableOptative)
    .filter((subject) => {
      const status = statusFor(subject).key;
      const matchesQuery = !query || [subject.name, subject.code].join(" ").toLowerCase().includes(query);
      const matchesFilter = filter === "all" || status === filter || (filter === "late" && isLate(subject));
      return matchesQuery && matchesFilter;
    })
    .sort((a, b) => a.idealPeriod - b.idealPeriod || a.name.localeCompare(b.name));
}

function dependentsOf(subjectId) {
  return state.subjects.filter((subject) => subject.prereqs.includes(subjectId));
}

function flowRelatedSet() {
  const related = new Set();
  if (!flowSelectedId) return related;
  const selected = subjectMap().get(flowSelectedId);
  if (!selected) return related;
  related.add(flowSelectedId);
  selected.prereqs.forEach((id) => related.add(id));
  dependentsOf(flowSelectedId).forEach((subject) => related.add(subject.id));
  return related;
}

function renderFlowDetails() {
  const byId = subjectMap();
  const selected = byId.get(flowSelectedId) || state.subjects[0];
  if (!selected) {
    els.flowDetails.innerHTML = `<div class="empty">Nenhuma matéria encontrada.</div>`;
    return;
  }
  flowSelectedId = selected.id;
  const status = statusFor(selected);
  const prereqs = selected.prereqs.map((id) => byId.get(id)).filter(Boolean);
  const dependents = dependentsOf(selected.id);
  const prereqContent = selected.prereqs.length > 12
    ? `<p class="flow-muted">${selected.prereqs.length} pré-requisitos oficiais. Use a lista de matérias para conferir todos.</p>`
    : flowDetailsButtons(prereqs, "Sem pré-requisitos");
  const missing = prereqs.filter((subject) => subject.status !== "done");
  els.flowDetails.innerHTML = `
    <div>
      <h2>${selected.name}</h2>
      <span class="status-pill status-${status.key}">${status.label}</span>
    </div>
    <p class="flow-muted">${selected.code} · ${selected.credits} créditos · ${selected.idealPeriod}º período</p>
    ${selected.equivalence ? `<p class="flow-muted">Equivalência: ${selected.equivalence}</p>` : ""}
    <div>
      <h2>Leitura rápida</h2>
      <div class="flow-path">
        <div class="flow-path-item">${missing.length ? `${missing.length} requisito(s) ainda pendente(s)` : "Requisitos diretos resolvidos"}</div>
        <div class="flow-path-item">${dependents.length ? `Libera ${dependents.length} matéria(s) cadastrada(s)` : "Não abre novas matérias obrigatórias"}</div>
      </div>
    </div>
    <div>
      <h2>Pré-requisitos</h2>
      <div class="flow-details-list">
        ${prereqContent}
      </div>
    </div>
    <div>
      <h2>Libera depois</h2>
      <div class="flow-details-list">
        ${flowDetailsButtons(dependents, "Não libera outra matéria cadastrada")}
      </div>
    </div>
  `;
}

function flowDetailsButtons(subjects, emptyText) {
  if (!subjects.length) return `<p class="flow-muted">${emptyText}</p>`;
  return subjects
    .sort((a, b) => a.idealPeriod - b.idealPeriod || a.name.localeCompare(b.name))
    .map((subject) => `<button type="button" data-flow-jump="${subject.id}">${subject.name}</button>`)
    .join("");
}

function flowNode(subject) {
  const status = statusFor(subject);
  const late = isLate(subject) ? " late" : "";
  const selectedSubject = subjectMap().get(flowSelectedId);
  const selected = subject.id === flowSelectedId ? " selected" : "";
  const prereq = selectedSubject?.prereqs.includes(subject.id) ? " prereq" : "";
  const dependent = dependentsOf(flowSelectedId).some((item) => item.id === subject.id) ? " dependent" : "";
  const unrelated = flowSelectedId && !selected && !prereq && !dependent ? " unrelated" : "";
  const blockedCount = subject.prereqs.filter((id) => subjectMap().get(id)?.status !== "done").length;
  const role = selected ? "Selecionada" : prereq ? "Pré-requisito" : dependent ? "Próxima" : isLate(subject) ? "Atrasada" : status.label;
  const badge = subject.prereqs.length ? `${blockedCount}/${subject.prereqs.length} faltando` : "sem requisito";
  return `
    <article class="flow-node status-${status.key}${late}${selected}${prereq}${dependent}${unrelated}" data-flow-id="${subject.id}" title="${subject.name}">
      <em>${role}</em>
      <strong>${subject.name}</strong>
      <span>${subject.code} · ${subject.credits} cr</span>
      <small>${badge}</small>
    </article>
  `;
}

function subjectCard(subject, byId) {
  const status = statusFor(subject);
  const prereqs = subject.prereqs.length ? subject.prereqs.map((id) => byId.get(id)?.name || id).join(", ") : "Sem pré-requisitos";
  const effectiveOpening = openingPeriod(subject);
  const offeringText = isOfferedInPeriod(subject, Number(state.settings.currentPeriod)) ? "abre em períodos como o atual" : `próxima oferta ${effectiveOpening}º`;
  const lateText = isLate(subject) ? `<span>Atrasada desde o ${subject.idealPeriod}º período</span>` : "";
  const gradeText = subject.grade !== null && subject.grade !== "" && Number.isFinite(Number(subject.grade)) ? `<span>Nota: ${Number(subject.grade).toFixed(2)}</span>` : "";
  const equivalenceText = subject.equivalence ? `<span>Equivalência: ${subject.equivalence}</span>` : "";

  return `
    <article class="subject-card" data-id="${subject.id}">
      <header>
        <div>
          <h3 class="subject-title">${subject.name}</h3>
          <span class="subject-code">${subject.code}</span>
        </div>
        <span class="status-pill status-${status.key}">${status.label}</span>
      </header>
      <div class="subject-meta">
        <span>Período ideal: ${subject.idealPeriod}º</span>
        <span>Abre no: ${effectiveOpening}º período (${formatPeriodDate(effectiveOpening)})</span>
        <span>Oferta: ${offeringText}</span>
        <span>Créditos: ${subject.credits}</span>
        ${equivalenceText}
        ${gradeText}
        ${lateText}
      </div>
      <div class="prereq-list"><strong>Pré-requisitos:</strong> ${prereqs}</div>
      <div class="card-actions">
        <button class="${subject.status === "pending" ? "active" : ""}" data-action="status" data-status="pending">Pendente</button>
        <button class="${subject.status === "planned" ? "active" : ""}" data-action="status" data-status="planned">Plano</button>
        <button class="${subject.status === "doing" ? "active" : ""}" data-action="status" data-status="doing">Curso</button>
        <button class="${subject.status === "done" ? "active" : ""}" data-action="status" data-status="done">Feita</button>
        <button data-action="edit" title="Editar"><i data-lucide="pencil"></i></button>
      </div>
    </article>
  `;
}

function renderSchedule() {
  const byId = subjectMap();
  const doingIds = state.subjects.filter((subject) => subject.status === "doing").map((subject) => subject.id);
  doingIds.forEach((id) => {
    if (!state.schedule.some((item) => item.subjectId === id)) state.schedule.push(sch(id));
  });
  state.schedule = state.schedule.filter((item) => byId.has(item.subjectId));
  els.scheduleCount.textContent = state.schedule.length;
  els.scheduleGrid.innerHTML = state.schedule
    .map((item) => {
      const subject = byId.get(item.subjectId);
      return `
        <article class="schedule-card" data-subject-id="${item.subjectId}">
          <strong>${subject.name}</strong>
          <span>${subject.code} · ${state.settings.semesterLabel}</span>
          <div class="schedule-fields">
            <label>Dia(s)<input data-field="days" value="${item.days || ""}" placeholder="Ex.: seg/qua" /></label>
            <label>Horário<input data-field="time" value="${item.time || ""}" placeholder="Ex.: 13:00-14:40" /></label>
            <label>Sala<input data-field="room" value="${item.room || ""}" placeholder="Ex.: C23" /></label>
            <label>Obs.<input data-field="note" value="${item.note || ""}" /></label>
          </div>
        </article>
      `;
    })
    .join("");
}

function termSubjects() {
  const ids = new Set([
    ...state.schedule.map((item) => item.subjectId),
    ...state.subjects.filter((subject) => subject.status === "doing").map((subject) => subject.id),
  ]);
  return [...ids].map((id) => subjectMap().get(id)).filter(Boolean).sort((a, b) => a.name.localeCompare(b.name));
}

function reportFor(subjectId) {
  if (!state.termReport[subjectId]) state.termReport[subjectId] = { ap1: "", ap2: "", pf: "", baseAbsences: 0 };
  return state.termReport[subjectId];
}

function loggedAbsences(subjectId) {
  return state.absenceLog
    .filter((entry) => entry.subjectId === subjectId)
    .reduce((sum, entry) => sum + Number(entry.classes || 0), 0);
}

function totalAbsences(subjectId) {
  return Number(reportFor(subjectId).baseAbsences || 0) + loggedAbsences(subjectId);
}

function currentAverage(report) {
  const grades = [report.ap1, report.ap2]
    .filter((value) => value !== "" && value !== null && value !== undefined)
    .map(Number)
    .filter((value) => Number.isFinite(value));
  if (!grades.length) return null;
  return grades.reduce((sum, value) => sum + value, 0) / grades.length;
}

function finalAverage(report) {
  if (report.pf === "" || report.pf === null || report.pf === undefined) return currentAverage(report);
  const pf = Number(report.pf);
  if (Number.isFinite(pf)) return pf;
  return currentAverage(report);
}

function frequency(subject, absences) {
  const workload = Math.max(1, Number(subject.credits) * 15);
  return Math.max(0, 100 - (absences / workload) * 100);
}

function reportSituation(subject, report, absences) {
  const freq = frequency(subject, absences);
  const avg = finalAverage(report);
  if (freq < 75) return "Risco frequência";
  if (avg === null) return subject.status === "doing" ? "Matriculado" : statusFor(subject).label;
  if (avg >= 8) return "Aprovando";
  if (avg >= 6) return "Atenção";
  return "Risco nota";
}

function renderReport() {
  const subjects = termSubjects();
  subjects.forEach((subject) => reportFor(subject.id));
  els.absenceSubject.innerHTML = subjects.map((subject) => `<option value="${subject.id}">${subject.name}</option>`).join("");

  const rows = subjects.map((subject) => {
    const report = reportFor(subject.id);
    const absences = totalAbsences(subject.id);
    const freq = frequency(subject, absences);
    const avg = finalAverage(report);
    return { subject, report, absences, freq, avg, situation: reportSituation(subject, report, absences) };
  });

  const graded = rows.filter((row) => row.avg !== null);
  const termAvg = graded.length ? graded.reduce((sum, row) => sum + row.avg, 0) / graded.length : null;
  const totalAbs = rows.reduce((sum, row) => sum + row.absences, 0);
  const lowest = rows.length ? Math.min(...rows.map((row) => row.freq)) : null;
  els.termAverage.textContent = termAvg === null ? "-" : termAvg.toFixed(2);
  els.termAbsences.textContent = totalAbs;
  els.lowestFrequency.textContent = lowest === null ? "-" : `${lowest.toFixed(1)}%`;
  els.absenceCount.textContent = totalAbs;

  els.reportTableBody.innerHTML = rows
    .map(({ subject, report, absences, freq, avg, situation }) => `
      <tr data-report-subject="${subject.id}">
        <td>${subject.code}</td>
        <td><strong>${subject.name}</strong></td>
        <td><input data-report-field="ap1" type="number" min="0" max="10" step="0.01" value="${report.ap1 ?? ""}" /></td>
        <td><input data-report-field="ap2" type="number" min="0" max="10" step="0.01" value="${report.ap2 ?? ""}" /></td>
        <td><input data-report-field="pf" type="number" min="0" max="10" step="0.01" value="${report.pf ?? ""}" /></td>
        <td><input data-report-field="baseAbsences" type="number" min="0" max="99" step="1" value="${report.baseAbsences ?? 0}" /></td>
        <td>${freq.toFixed(1)}%</td>
        <td>${situation}</td>
      </tr>
    `)
    .join("");

  els.absenceLogCount.textContent = state.absenceLog.length;
  els.absenceLog.innerHTML = state.absenceLog.length
    ? state.absenceLog
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))
        .map((entry) => {
          const subject = subjectMap().get(entry.subjectId);
          return `
            <article class="absence-item" data-absence-id="${entry.id}">
              <div>
                <strong>${subject?.name || "Disciplina removida"}</strong>
                <span>${new Date(`${entry.date}T00:00:00`).toLocaleDateString("pt-BR")} · ${entry.classes} aula(s)</span>
                ${entry.note ? `<span>${entry.note}</span>` : ""}
              </div>
              <button class="icon-button danger" type="button" data-remove-absence="${entry.id}" title="Remover falta">
                <i data-lucide="trash-2"></i>
              </button>
            </article>
          `;
        })
        .join("")
    : `<div class="empty">Nenhuma falta registrada por data.</div>`;
}

function renderGrades() {
  const cr = coefficient();
  els.gradesCoef.textContent = cr.value === null ? "-" : cr.value.toFixed(3);
  els.gradedCount.textContent = cr.count;
  els.gradedCredits.textContent = cr.credits;
  els.gradeRowsCount.textContent = state.subjects.length;
  els.gradesTableBody.innerHTML = state.subjects
    .slice()
    .sort((a, b) => a.idealPeriod - b.idealPeriod || a.name.localeCompare(b.name))
    .map((subject) => {
      const status = statusFor(subject);
      return `
        <tr data-subject-id="${subject.id}">
          <td><strong>${subject.name}</strong><br><span class="subject-code">${subject.code}</span></td>
          <td><span class="status-pill status-${status.key}">${status.label}</span></td>
          <td>${subject.credits}</td>
          <td><input class="grade-input" type="number" min="0" max="10" step="0.01" value="${subject.grade ?? ""}" placeholder="0-10" /></td>
        </tr>
      `;
    })
    .join("");
}

function updateSetting(event) {
  const { id, value } = event.target;
  state.settings[id] = id === "startDate" ? value : Number(value);
  persist();
  render();
}

function setSubjectStatus(id, status) {
  const subject = state.subjects.find((item) => item.id === id);
  subject.status = status;
  subject.completedPeriod = status === "done" ? Number(state.settings.currentPeriod) : null;
  persist();
  render();
}

function openSubjectDialog(subject = null) {
  fillPrereqOptions(subject?.id);
  els.dialogTitle.textContent = subject ? "Editar matéria" : "Nova matéria";
  els.subjectId.value = subject?.id || "";
  els.subjectName.value = subject?.name || "";
  els.subjectCode.value = subject?.code || "";
  els.subjectPeriod.value = subject?.idealPeriod || Number(state.settings.currentPeriod);
  els.subjectCredits.value = subject?.credits || 4;
  [...els.subjectPrereqs.options].forEach((option) => {
    option.selected = subject?.prereqs.includes(option.value) || false;
  });
  els.deleteSubjectBtn.hidden = !subject;
  els.dialog.showModal();
  if (window.lucide) window.lucide.createIcons();
}

function fillPrereqOptions(excludeId = null) {
  els.subjectPrereqs.innerHTML = state.subjects
    .filter((subject) => subject.id !== excludeId)
    .sort((a, b) => a.idealPeriod - b.idealPeriod || a.name.localeCompare(b.name))
    .map((subject) => `<option value="${subject.id}">${subject.code} - ${subject.name}</option>`)
    .join("");
}

function saveSubject(event) {
  event.preventDefault();
  const id = els.subjectId.value || crypto.randomUUID();
  const existing = state.subjects.find((subject) => subject.id === id);
  const next = {
    id,
    name: els.subjectName.value.trim(),
    code: els.subjectCode.value.trim(),
    idealPeriod: Number(els.subjectPeriod.value),
    credits: Number(els.subjectCredits.value),
    prereqs: [...els.subjectPrereqs.selectedOptions].map((option) => option.value),
    status: existing?.status || "pending",
    completedPeriod: existing?.completedPeriod || null,
    grade: existing?.grade ?? null,
  };

  if (existing) Object.assign(existing, next);
  else state.subjects.push(next);

  persist();
  els.dialog.close();
  render();
}

function deleteSubject() {
  const id = els.subjectId.value;
  state.subjects = state.subjects
    .filter((subject) => subject.id !== id)
    .map((subject) => ({ ...subject, prereqs: subject.prereqs.filter((prereq) => prereq !== id) }));
  state.schedule = state.schedule.filter((item) => item.subjectId !== id);
  persist();
  els.dialog.close();
  render();
}

function setMainTab(tab) {
  document.querySelectorAll(".app-view").forEach((view) => {
    view.classList.toggle("active", view.dataset.view === tab);
  });
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });
}

function selectFlowSubject(subjectId) {
  flowSelectedId = subjectId;
  renderFlowchart(getFlowSubjects());
  requestAnimationFrame(() => {
    const node = els.flowchartGrid.querySelector(`[data-flow-id="${subjectId}"]`);
    node?.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
  });
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "app-medicao-engenharia-naval.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!parsed.settings || !Array.isArray(parsed.subjects)) throw new Error("Formato inválido");
      state = parsed;
      migrateState();
      render();
    } catch {
      alert("Não foi possível importar este arquivo JSON.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function resetData() {
  if (!confirm("Restaurar a base e apagar os dados salvos neste navegador?")) return;
  state = structuredClone(defaultState);
  persist();
  render();
}

[els.startDate, els.currentPeriod, els.capacity, els.requiredCredits, els.monthsPerPeriod].forEach((input) => {
  input.addEventListener("change", updateSetting);
});
els.searchInput.addEventListener("input", renderSubjects);
els.statusFilter.addEventListener("change", renderSubjects);
els.flowSearchInput.addEventListener("input", () => renderFlowchart(getFlowSubjects()));
els.flowStatusFilter.addEventListener("change", () => renderFlowchart(getFlowSubjects()));
els.addSubjectBtn.addEventListener("click", () => openSubjectDialog());
els.form.addEventListener("submit", saveSubject);
els.closeDialogBtn.addEventListener("click", () => els.dialog.close());
els.deleteSubjectBtn.addEventListener("click", deleteSubject);
els.exportBtn.addEventListener("click", exportData);
els.importInput.addEventListener("change", importData);
els.resetBtn.addEventListener("click", resetData);
els.syncBtn.addEventListener("click", () => {
  const config = loadSyncConfig();
  els.supabaseUrl.value = config.url || "";
  els.supabaseAnonKey.value = config.anonKey || "";
  els.syncDialog.showModal();
  setupSyncClient();
  if (window.lucide) window.lucide.createIcons();
});
els.closeSyncBtn.addEventListener("click", () => els.syncDialog.close());
els.saveSyncConfigBtn.addEventListener("click", saveSyncConfig);
els.signUpBtn.addEventListener("click", signUp);
els.signInBtn.addEventListener("click", signIn);
els.signOutBtn.addEventListener("click", signOut);
els.syncNowBtn.addEventListener("click", syncNow);

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", () => setMainTab(button.dataset.tab));
});

els.subjectGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const card = event.target.closest(".subject-card");
  const subject = state.subjects.find((item) => item.id === card.dataset.id);
  if (button.dataset.action === "status") setSubjectStatus(subject.id, button.dataset.status);
  if (button.dataset.action === "edit") openSubjectDialog(subject);
});

els.scheduleGrid.addEventListener("input", (event) => {
  const input = event.target.closest("input[data-field]");
  if (!input) return;
  const card = event.target.closest("[data-subject-id]");
  const item = state.schedule.find((entry) => entry.subjectId === card.dataset.subjectId);
  item[input.dataset.field] = input.value;
  persist();
});

els.reportTableBody.addEventListener("input", (event) => {
  const input = event.target.closest("[data-report-field]");
  if (!input) return;
  const row = event.target.closest("[data-report-subject]");
  const report = reportFor(row.dataset.reportSubject);
  const field = input.dataset.reportField;
  report[field] = input.value === "" ? "" : Math.max(0, Number(input.value));
  persist();
  renderReport();
});

els.absenceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.absenceLog.push({
    id: crypto.randomUUID(),
    date: els.absenceDate.value,
    subjectId: els.absenceSubject.value,
    classes: Number(els.absenceClasses.value),
    note: els.absenceNote.value.trim(),
  });
  els.absenceNote.value = "";
  persist();
  renderReport();
  if (window.lucide) window.lucide.createIcons();
});

els.absenceLog.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-absence]");
  if (!button) return;
  state.absenceLog = state.absenceLog.filter((entry) => entry.id !== button.dataset.removeAbsence);
  persist();
  renderReport();
  if (window.lucide) window.lucide.createIcons();
});

els.optativeSlots.addEventListener("change", (event) => {
  const select = event.target.closest("select[data-optative-slot]");
  if (select) {
    state.optativeChoices[select.dataset.optativeSlot] = select.value;
    const slotSubject = state.subjects.find((subject) => subject.id === select.dataset.optativeSlot);
    const chosen = state.subjects.find((subject) => subject.id === select.value);
    if (slotSubject) {
      slotSubject.status = chosen?.status || slotSubject.status || "pending";
      slotSubject.grade = chosen?.grade ?? slotSubject.grade ?? null;
      slotSubject.completedPeriod = chosen?.completedPeriod ?? slotSubject.completedPeriod ?? null;
    }
    persist();
    render();
  }
});

els.optativeSlots.addEventListener("click", (event) => {
  const button = event.target.closest("[data-optative-status]");
  if (!button) return;
  const card = event.target.closest("[data-optative-card]");
  const slotSubject = state.subjects.find((subject) => subject.id === card.dataset.optativeCard);
  if (!slotSubject) return;
  slotSubject.status = button.dataset.optativeStatus;
  slotSubject.completedPeriod = slotSubject.status === "done" ? Number(state.settings.currentPeriod) : null;
  persist();
  render();
});

els.optativeSlots.addEventListener("input", (event) => {
  const input = event.target.closest("[data-optative-grade]");
  if (!input) return;
  const slotSubject = state.subjects.find((subject) => subject.id === input.dataset.optativeGrade);
  if (!slotSubject) return;
  slotSubject.grade = input.value === "" ? null : Math.max(0, Math.min(10, Number(input.value)));
  persist();
  renderGrades();
  const cr = coefficient();
  els.courseCoef.textContent = cr.value === null ? "-" : cr.value.toFixed(3);
});

els.flowchartGrid.addEventListener("click", (event) => {
  const node = event.target.closest("[data-flow-id]");
  if (!node) return;
  selectFlowSubject(node.dataset.flowId);
});

els.flowDetails.addEventListener("click", (event) => {
  const button = event.target.closest("[data-flow-jump]");
  if (!button) return;
  selectFlowSubject(button.dataset.flowJump);
});

els.gradesTableBody.addEventListener("input", (event) => {
  const input = event.target.closest(".grade-input");
  if (!input) return;
  const row = event.target.closest("[data-subject-id]");
  const subject = state.subjects.find((item) => item.id === row.dataset.subjectId);
  subject.grade = input.value === "" ? null : Math.max(0, Math.min(10, Number(input.value)));
  persist();
  const cr = coefficient();
  els.courseCoef.textContent = cr.value === null ? "-" : cr.value.toFixed(3);
  els.gradesCoef.textContent = cr.value === null ? "-" : cr.value.toFixed(3);
  els.gradedCount.textContent = cr.count;
  els.gradedCredits.textContent = cr.credits;
});

registerPwa();
setupSyncClient();
render();
