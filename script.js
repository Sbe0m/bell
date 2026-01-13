/* =========================
   Keys
========================= */
const KEY_LANG = "city2_lang";
const KEY_ROLE = "city2_role";
const KEY_USER = "city2_user";
const KEY_USER_IDEAS = "city2_user_ideas";
const KEY_STATUSES = "city2_statuses";
const KEY_LIKES = "city2_likes";         // { [ideaId]: { [userId]: true } }
const KEY_COMMENTS = "city2_comments";   // { [ideaId]: [ {id,parentId,userId,userName,content,createdAt,updatedAt} ] }

const KEY_ACCOUNTS = "city2_accounts";        // { [nameLower]: { name, userId, isAdmin } }
const KEY_GAMIFY = "city2_gamify_profiles";   // { [userId]: {xp, level, streak, lastDate, dayXp, dayKey, badges:{[id]:ts}} }

/* =========================
   i18n
========================= */
const I18N = {
  en: {
    navTopIdeas: "Top Ideas",
    navPolls: "Polls",
    navLeaderboard: "Leaderboard",
    navSubmit: "Submit Ideas",
    roleCitizen: "Citizen",
    roleOfficial: "Official",

    heroTitle: "Building our city together",
    heroDesc: "A platform where citizen voices lead to real change",
    submitNewIdea: "+ Submit New Idea",

    statSubmitted: "Ideas Submitted",
    statImplemented: "Ideas Implemented",
    statActive: "Active Citizens",

    tabCitizenIdeas: "Citizen Ideas",
    tabCityInitiatives: "City Initiatives",
    filterByCategory: "Filter",
    resetDemo: "Reset demo data",

    backToList: "← Back",
    likes: "Likes",
    likeBtn: "Like",
    likedBtn: "Liked",
    comments: "Comments",
    postComment: "Post Comment",
    reply: "Reply",
    edit: "Edit",
    delete: "Delete",
    cancel: "Cancel",
    saveEdit: "Save",
    cancelReply: "Cancel reply",
    replyingTo: "Replying to",
    placeholderComment: "Write a comment...",

    realWorldImpact: "Real-World Impact",
    description: "Description",
    photo: "Photos",

    officialTools: "Official Tools",
    changeStatus: "Change status",
    save: "Save",
    officialHint: "Only visible in Official mode. Status is stored in localStorage.",

    /* ✅ Admin */
    adminTools: "Admin Tools",
    deleteIdea: "Delete Idea",
    adminHint: "Admin can delete user-submitted ideas and manage all comments.",
    confirmDeleteIdea: "Delete this idea? (Likes/Comments/Status will also be removed)",

    status_under_review: "Under Review",
    status_in_progress: "In Progress",
    status_implemented: "Implemented",
    status_new: "New",

    submittedBy: "Submitted by",
    category: "Category",

    login: "Login",
    logout: "Logout",
    hello: "Hello",

    needLoginLike: "Please login to like.",
    needLoginComment: "Please login to comment.",
    needLoginAction: "Please login to use this feature.",
    emptyComment: "Please write something.",
    confirmDelete: "Delete this comment? (Replies will also be removed)",

    onlyAdminOfficial: "Only admin can switch to Official mode.",

    /* Submit */
    submitPageTitle: "Submit a New Idea",
    submitPageDesc: "Share an issue, propose a solution, and help improve your city.",
    fTitle: "Title",
    fCategory: "Category",
    fLocation: "Location (optional)",
    fTags: "Tags (comma separated)",
    fDesc: "Description",
    fImpact: "Expected Impact",
    fPhoto: "Photos (optional)",
    fPhotoHint: "Up to 50MB total. You can attach multiple images. (Stored in browser via IndexedDB for demo.)",
    preview: "Preview",
    submit: "Submit",
    previewTitle: "Preview",
    previewDesc: "This is how your idea will appear.",
    previewIdea: "Idea",

    leaderboardHint: "XP ranking based on local demo data."
  },

  ko: {
    navTopIdeas: "Top Ideas",
    navPolls: "Polls",
    navLeaderboard: "리더보드",
    navSubmit: "아이디어 제출",
    roleCitizen: "시민",
    roleOfficial: "담당자",

    heroTitle: "도시를 함께 만들어가요",
    heroDesc: "시민의 목소리가 실제 변화로 이어지는 플랫폼",
    submitNewIdea: "+ 새 아이디어 제출",

    statSubmitted: "제출된 아이디어",
    statImplemented: "반영된 아이디어",
    statActive: "활동 시민",

    tabCitizenIdeas: "시민 아이디어",
    tabCityInitiatives: "시 정책/이니셔티브",
    filterByCategory: "필터",
    resetDemo: "데모 데이터 초기화",

    backToList: "← 목록으로",
    likes: "좋아요",
    likeBtn: "좋아요",
    likedBtn: "좋아요됨",
    comments: "댓글",
    postComment: "댓글 등록",
    reply: "답글",
    edit: "수정",
    delete: "삭제",
    cancel: "취소",
    saveEdit: "저장",
    cancelReply: "답글 취소",
    replyingTo: "답글 대상",
    placeholderComment: "댓글을 입력하세요...",

    realWorldImpact: "현실 반영/진행 상황",
    description: "설명",
    photo: "사진",

    officialTools: "담당자 도구",
    changeStatus: "상태 변경",
    save: "저장",
    officialHint: "담당자 모드에서만 보입니다. 상태는 localStorage에 저장됩니다.",

    /* ✅ Admin */
    adminTools: "관리자 도구",
    deleteIdea: "글 삭제",
    adminHint: "관리자는 사용자 글 삭제 및 모든 댓글 관리가 가능합니다.",
    confirmDeleteIdea: "이 글을 삭제할까요? (좋아요/댓글/상태도 함께 삭제됩니다)",

    status_under_review: "검토 중",
    status_in_progress: "진행 중",
    status_implemented: "반영 완료",
    status_new: "신규",

    submittedBy: "작성자",
    category: "카테고리",

    login: "로그인",
    logout: "로그아웃",
    hello: "안녕하세요",

    needLoginLike: "좋아요를 누르려면 로그인하세요.",
    needLoginComment: "댓글을 작성하려면 로그인하세요.",
    needLoginAction: "로그인이 필요합니다.",
    emptyComment: "내용을 입력해 주세요.",
    confirmDelete: "이 댓글을 삭제할까요? (답글도 함께 삭제됩니다)",

    onlyAdminOfficial: "admin만 담당자(관리자)로 전환할 수 있어요.",

    /* Submit */
    submitPageTitle: "아이디어 제출",
    submitPageDesc: "불편한 점을 제안하고 해결책을 공유해서 우리 도시를 더 좋게 만들어봐요.",
    fTitle: "제목",
    fCategory: "카테고리",
    fLocation: "위치(선택)",
    fTags: "태그(쉼표로 구분)",
    fDesc: "상세 설명",
    fImpact: "기대효과 / 왜 중요한가",
    fPhoto: "사진 첨부(선택)",
    fPhotoHint: "총 50MB까지, 여러 장 첨부 가능. (데모: IndexedDB에 저장됩니다)",
    preview: "미리보기",
    submit: "제출하기",
    previewTitle: "미리보기",
    previewDesc: "제출 시 이렇게 보입니다.",
    previewIdea: "아이디어",

    leaderboardHint: "로컬 데모 데이터 기반 XP 랭킹입니다."
  }
};

function getLang(){ return localStorage.getItem(KEY_LANG) || "ko"; }
function setLang(v){ localStorage.setItem(KEY_LANG, v); }
function t(k){
  const lang = getLang();
  return (I18N[lang] && I18N[lang][k]) ? I18N[lang][k] : (I18N.en[k] || k);
}

/* =========================
   Helpers
========================= */
function readJSON(key, fallback){
  try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
  catch{ return fallback; }
}
function writeJSON(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
function escapeHTML(s){
  return String(s ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

/* =========================
   Seed Data
========================= */
const SEED = [
  {
    id: 2001, type: "idea", category: "transportation", status: "under_review",
    author: "Sarah Chen",
    title_en: "Expand dedicated bike lanes in downtown",
    title_ko: "다운타운 자전거 전용 차선 확대",
    impact_en: "Under review by Transportation Dept - Scheduled for Q2 2024 budget",
    impact_ko: "교통 부서 검토 중 - 2024년 2분기 예산 반영 예정",
    desc_en: "Increase safe cycling routes to reduce congestion and improve accessibility.",
    desc_ko: "안전한 자전거 동선을 늘려 정체를 줄이고 접근성을 높입니다.",
    comments: 28,
    seedLikes: 342
  },
  {
    id: 2002, type: "idea", category: "city-services", status: "implemented",
    author: "Michael Rodriguez",
    title_en: "Install free WiFi in city parks",
    title_ko: "도시 공원 무료 와이파이 설치",
    impact_en: "Completed - WiFi installed in 5 parks (January 2024)",
    impact_ko: "완료 - 5개 공원 설치 완료(2024년 1월)",
    desc_en: "Provide free internet access to improve public services and digital inclusion.",
    desc_ko: "무료 인터넷 제공으로 공공 서비스와 디지털 접근성을 개선합니다.",
    comments: 45,
    seedLikes: 289
  },
  {
    id: 2003, type: "idea", category: "transportation", status: "in_progress",
    author: "Jessica Park",
    title_en: "Add night bus routes",
    title_ko: "심야 버스 노선 추가",
    impact_en: "In progress - 3 pilot routes launching in March",
    impact_ko: "진행 중 - 3개 시범 노선 3월 시작",
    desc_en: "Improve mobility for night workers and students by extending transit hours.",
    desc_ko: "야간 근무자/학생 이동을 위해 대중교통 운행 시간을 확장합니다.",
    comments: 67,
    seedLikes: 456
  },
  {
    id: 3001, type: "initiative", category: "environment", status: "in_progress",
    author: "City of Bellevue",
    title_en: "Tree canopy expansion program",
    title_ko: "도시 수목(그늘) 확대 프로그램",
    impact_en: "Planting 2,000 trees across neighborhoods this year",
    impact_ko: "올해 지역별로 2,000그루 식재 진행",
    desc_en: "Expand shade, improve air quality, and mitigate heat islands.",
    desc_ko: "그늘을 늘리고 대기질을 개선하며 열섬을 완화합니다.",
    comments: 12,
    seedLikes: 120
  }
];

/* =========================
   Role / User / Accounts
========================= */
function getUser(){ return readJSON(KEY_USER, { loggedIn:false, name:"", userId:"" }); }
function setUser(u){ writeJSON(KEY_USER, u); }

function ensureUserId(u){
  if (u.userId) return u;
  let id = "";
  if (typeof crypto !== "undefined" && crypto.randomUUID) id = crypto.randomUUID();
  else id = "u_" + Math.random().toString(16).slice(2) + "_" + Date.now();
  return { ...u, userId: id };
}

function loadAccounts(){ return readJSON(KEY_ACCOUNTS, {}); }
function saveAccounts(m){ writeJSON(KEY_ACCOUNTS, m); }

/* ✅ admin 판정: 계정명이 정확히 admin (대소문자 무시) */
function isAdminUser(){
  const u = getUser();
  if (!u.loggedIn || !u.userId || !u.name) return false;

  const key = String(u.name).trim().toLowerCase();
  if (key === "admin") return true;

  const accounts = loadAccounts();
  const acc = accounts[key];
  return !!(acc && acc.userId === u.userId && acc.isAdmin === true);
}

function loginAsName(nameRaw){
  const name = (nameRaw || "").trim();
  if (!name) return null;

  const key = name.toLowerCase();
  const accounts = loadAccounts();

  let acc = accounts[key];
  if (!acc){
    const u = ensureUserId({ loggedIn:true, name, userId:"" });
    const isAdmin = (key === "admin");
    acc = { name, userId: u.userId, isAdmin };
    accounts[key] = acc;
    saveAccounts(accounts);
  }

  // admin 계정이면 무조건 isAdmin true로 보정
  if (key === "admin" && acc.isAdmin !== true){
    acc.isAdmin = true;
    accounts[key] = acc;
    saveAccounts(accounts);
  }

  const user = { loggedIn:true, name: acc.name, userId: acc.userId };
  setUser(user);
  return user;
}

function isLoggedIn(){
  const u = getUser();
  return !!(u.loggedIn && u.userId);
}

function requireLogin(message){
  const u0 = getUser();
  if (u0.loggedIn && u0.userId) return u0;

  alert(message);
  const name = prompt(getLang()==="ko" ? "이름을 입력하세요" : "Enter your name");
  if (name === null) return null;

  const u1 = loginAsName(name);
  applyI18n();
  updateXpUI();
  syncRoleUI(); // ✅ 로그인 후 role 잠금 상태 반영
  return u1;
}

/* =========================
   Role (✅ admin만 official 허용)
========================= */
function getRole(){
  const raw = localStorage.getItem(KEY_ROLE) || "citizen";
  if (!isAdminUser()) return "citizen"; // ✅ 일반 유저 강제 citizen
  return raw === "official" ? "official" : "citizen";
}
function setRole(role){
  if (!isAdminUser()){
    localStorage.setItem(KEY_ROLE, "citizen");
    return;
  }
  localStorage.setItem(KEY_ROLE, role === "official" ? "official" : "citizen");
}

/* =========================
   Status / Ideas
========================= */
function loadUserIdeas(){ return readJSON(KEY_USER_IDEAS, []); }
function loadStatuses(){ return readJSON(KEY_STATUSES, {}); }
function saveStatuses(map){ writeJSON(KEY_STATUSES, map); }

function allItems(){
  const userIdeas = loadUserIdeas();
  const statusMap = loadStatuses();
  return [...userIdeas, ...SEED].map(x => {
    const s = statusMap[String(x.id)];
    return s ? { ...x, status: s } : x;
  });
}

/* =========================
   Labels
========================= */
function labelStatus(status){
  if (status === "under_review") return t("status_under_review");
  if (status === "in_progress") return t("status_in_progress");
  if (status === "implemented") return t("status_implemented");
  return t("status_new");
}
function badgeClass(status){
  if (status === "under_review") return "review";
  if (status === "in_progress") return "progress";
  if (status === "implemented") return "impl";
  return "new";
}
function labelCategory(cat){
  const map = {
    transportation: { en:"Transportation", ko:"교통" },
    infrastructure:  { en:"Infrastructure", ko:"인프라" },
    environment:     { en:"Environment", ko:"환경" },
    "public-safety": { en:"Public Safety", ko:"공공 안전" },
    "city-services": { en:"City Services", ko:"행정 서비스" },
  };
  const lang = getLang();
  return (map[cat] && map[cat][lang]) ? map[cat][lang] : (cat || "");
}
function titleOf(item){
  return getLang() === "ko" ? (item.title_ko || item.title_en) : (item.title_en || item.title_ko);
}
function impactOf(item){
  return getLang() === "ko" ? (item.impact_ko || item.impact_en) : (item.impact_en || item.impact_ko);
}
function descOf(item){
  return getLang() === "ko" ? (item.desc_ko || item.desc_en) : (item.desc_en || item.desc_ko);
}

/* =========================
   Topbar + i18n apply
========================= */
function syncRoleUI(){
  const role = getRole();
  const c = document.getElementById("roleCitizenBtn");
  const o = document.getElementById("roleOfficialBtn");

  const admin = isAdminUser();

  if (c && o){
    c.classList.toggle("is-active", role === "citizen");
    o.classList.toggle("is-active", role === "official");

    // ✅ 일반 유저는 Official 버튼 잠금
    o.classList.toggle("is-disabled", !admin);
  }

  const officialTools = document.getElementById("officialTools");
  const officialDivider = document.getElementById("officialDivider");

  if (officialTools && officialDivider){
    const show = (admin && role === "official"); // ✅ admin + official 일 때만 표시
    officialTools.hidden = !show;
    officialDivider.hidden = !show;
  }

  // ✅ admin tools: admin이면 항상 보이게(원하면 role==='official'로 제한해도 됨)
  const adminTools = document.getElementById("adminTools");
  const adminDivider = document.getElementById("adminDivider");
  if (adminTools && adminDivider){
    adminTools.hidden = !admin;
    adminDivider.hidden = !admin;
  }
}

function applyI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn){
    const u = getUser();
    loginBtn.textContent = !u.loggedIn
      ? t("login")
      : `${t("hello")} ${u.name || (getLang()==="ko" ? "사용자" : "User")} • ${t("logout")}`;
  }

  const commentInput = document.getElementById("commentInput");
  if (commentInput) commentInput.placeholder = t("placeholderComment");
}

function setupTopbar(){
  const langSelect = document.getElementById("langSelect");
  if (langSelect){
    langSelect.value = getLang();
    langSelect.addEventListener("change", () => {
      setLang(langSelect.value);
      applyI18n();
      renderIndex();
      renderStats();
      renderDetail();
      renderSubmitPage();
      renderXpLeaderboard();
      updateXpUI();
    });
  }

  document.getElementById("roleCitizenBtn")?.addEventListener("click", () => {
    setRole("citizen");
    syncRoleUI();
  });

  document.getElementById("roleOfficialBtn")?.addEventListener("click", () => {
    if (!isAdminUser()){
      alert(t("onlyAdminOfficial"));
      setRole("citizen");
      syncRoleUI();
      return;
    }
    setRole("official");
    syncRoleUI();
  });

  document.getElementById("loginBtn")?.addEventListener("click", () => {
    const u0 = getUser();

    if (!u0.loggedIn){
      const name = prompt(getLang()==="ko" ? "이름을 입력하세요" : "Enter your name");
      if (name === null) return;
      loginAsName(name);
    } else {
      setUser({ loggedIn:false, name:"", userId:"" });
      localStorage.setItem(KEY_ROLE, "citizen"); // ✅ 로그아웃 시 role 초기화
    }

    applyI18n();
    updateLikeUI();
    renderCommentsList();
    updateCommentHints();
    updateXpUI();
    syncRoleUI();
  });

  syncRoleUI();
  applyI18n();
}

/* =========================
   Likes
========================= */
function loadLikes(){ return readJSON(KEY_LIKES, {}); }
function saveLikes(map){ writeJSON(KEY_LIKES, map); }

function seedLikesFor(ideaId){
  const seed = SEED.find(x => Number(x.id) === Number(ideaId));
  return seed ? Number(seed.seedLikes || 0) : 0;
}
function likeCount(ideaId){
  const likes = loadLikes();
  const bucket = likes[String(ideaId)] || {};
  return seedLikesFor(ideaId) + Object.keys(bucket).length;
}
function isLiked(ideaId, userId){
  const likes = loadLikes();
  const bucket = likes[String(ideaId)] || {};
  return !!bucket[String(userId)];
}
function toggleLike(ideaId){
  const u = requireLogin(t("needLoginLike"));
  if (!u) return;

  const likes = loadLikes();
  const key = String(ideaId);
  const bucket = likes[key] || {};

  if (bucket[String(u.userId)]) delete bucket[String(u.userId)];
  else bucket[String(u.userId)] = true;

  likes[key] = bucket;
  saveLikes(likes);
}

/* =========================
   Comments (reply/edit/delete)
========================= */
function loadCommentsAll(){ return readJSON(KEY_COMMENTS, {}); }
function saveCommentsAll(map){ writeJSON(KEY_COMMENTS, map); }
function getComments(ideaId){
  const all = loadCommentsAll();
  return Array.isArray(all[String(ideaId)]) ? all[String(ideaId)] : [];
}
function setComments(ideaId, list){
  const all = loadCommentsAll();
  all[String(ideaId)] = list;
  saveCommentsAll(all);
}
function seedCommentCount(ideaId){
  const seed = SEED.find(x => Number(x.id) === Number(ideaId));
  return seed ? Number(seed.comments || 0) : 0;
}
function commentCountTotal(ideaId){
  return seedCommentCount(ideaId) + getComments(ideaId).length;
}
function newCommentId(){
  return "c_" + Math.random().toString(16).slice(2) + "_" + Date.now();
}
function timeAgo(ts){
  const diff = Date.now() - ts;
  const sec = Math.floor(diff/1000);
  if (sec < 60) return getLang()==="ko" ? "방금 전" : "just now";
  const min = Math.floor(sec/60);
  if (min < 60) return getLang()==="ko" ? `${min}분 전` : `${min}m ago`;
  const hr = Math.floor(min/60);
  if (hr < 24) return getLang()==="ko" ? `${hr}시간 전` : `${hr}h ago`;
  const day = Math.floor(hr/24);
  return getLang()==="ko" ? `${day}일 전` : `${day}d ago`;
}
function deleteCommentRecursive(list, targetId){
  const toDelete = new Set([targetId]);
  let changed = true;
  while (changed){
    changed = false;
    for (const c of list){
      if (c.parentId && toDelete.has(c.parentId) && !toDelete.has(c.id)){
        toDelete.add(c.id);
        changed = true;
      }
    }
  }
  return list.filter(c => !toDelete.has(c.id));
}

/* =========================
   IndexedDB (Photos)
========================= */
const IMG_DB_NAME = "CITY_ImageDB";
const IMG_STORE = "images";

function openImageDB(){
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IMG_DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(IMG_STORE)){
        db.createObjectStore(IMG_STORE, { keyPath: "id" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
function genImgId(){
  return "img_" + Math.random().toString(16).slice(2) + "_" + Date.now();
}
async function saveImagesToDB(files){
  const db = await openImageDB();
  const ids = [];

  await new Promise((resolve, reject) => {
    const tx = db.transaction(IMG_STORE, "readwrite");
    const store = tx.objectStore(IMG_STORE);

    for (const f of files){
      const id = genImgId();
      ids.push(id);
      store.put({ id, name: f.name, type: f.type, size: f.size, blob: f, createdAt: Date.now() });
    }
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });

  db.close();
  return ids;
}
async function loadImageFromDB(id){
  const db = await openImageDB();
  const item = await new Promise((resolve, reject) => {
    const tx = db.transaction(IMG_STORE, "readonly");
    const store = tx.objectStore(IMG_STORE);
    const req = store.get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
  db.close();
  return item;
}
function bytesToMB(b){ return Math.round((b / (1024*1024)) * 10) / 10; }

/* =========================
   Gamification (XP/Badges)
========================= */
function loadGamify(){ return readJSON(KEY_GAMIFY, {}); }
function saveGamify(m){ writeJSON(KEY_GAMIFY, m); }

function todayKey(){
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,"0");
  const da = String(d.getDate()).padStart(2,"0");
  return `${y}-${m}-${da}`;
}
function isYesterday(day){
  const d = new Date(day + "T00:00:00");
  const y = new Date(d.getTime() + 24*60*60*1000);
  return todayKey() === `${y.getFullYear()}-${String(y.getMonth()+1).padStart(2,"0")}-${String(y.getDate()).padStart(2,"0")}`;
}
function xpForNext(level){ return 100 * level; }
function calcLevel(xp){
  let lv = 1;
  let need = xpForNext(lv);
  let remain = xp;
  while (remain >= need){
    remain -= need;
    lv++;
    need = xpForNext(lv);
  }
  return { level: lv, into: remain, next: need };
}
function getProfile(userId){
  const g = loadGamify();
  if (!g[userId]){
    g[userId] = { xp:0, level:1, streak:0, lastDate:"", dayXp:0, dayKey:"", badges:{} };
    saveGamify(g);
  }
  return g[userId];
}
function toast(msg){
  let el = document.getElementById("toast");
  if (!el){
    el = document.createElement("div");
    el.id = "toast";
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el.__t);
  el.__t = setTimeout(()=> el.classList.remove("show"), 1600);
}

const BADGES = [
  { id:"first_idea", icon:"📝", en:"First Idea", ko:"첫 아이디어", enDesc:"Submit your first idea", koDesc:"첫 아이디어 제출" },
  { id:"first_comment", icon:"💬", en:"First Comment", ko:"첫 댓글", enDesc:"Post your first comment", koDesc:"첫 댓글 작성" },
  { id:"five_comments", icon:"🗣️", en:"Talkative", ko:"수다쟁이", enDesc:"Write 5 comments", koDesc:"댓글 5개 작성" },
  { id:"three_ideas", icon:"🚀", en:"Contributor", ko:"기여자", enDesc:"Submit 3 ideas", koDesc:"아이디어 3개 제출" },
  { id:"streak_3", icon:"🔥", en:"3-Day Streak", ko:"3일 연속", enDesc:"Be active 3 days in a row", koDesc:"3일 연속 활동" },
  { id:"streak_7", icon:"🏆", en:"7-Day Streak", ko:"7일 연속", enDesc:"Be active 7 days in a row", koDesc:"7일 연속 활동" },
  { id:"level_5", icon:"⭐", en:"Level 5", ko:"레벨 5", enDesc:"Reach level 5", koDesc:"레벨 5 달성" },
  { id:"photographer", icon:"📸", en:"Photographer", ko:"사진작가", enDesc:"Submit an idea with photos", koDesc:"사진 첨부 아이디어 제출" },
];

function userStats(userId){
  const ideas = loadUserIdeas().filter(x => x.authorId === userId);
  const allComments = loadCommentsAll();
  let myComments = 0;
  for (const k of Object.keys(allComments)){
    const arr = allComments[k] || [];
    myComments += arr.filter(c => c.userId === userId).length;
  }
  const hasPhotoIdea = ideas.some(i => Array.isArray(i.photoIds) && i.photoIds.length > 0);
  return { ideasCount: ideas.length, commentsCount: myComments, hasPhotoIdea };
}
function grantBadge(userId, badgeId){
  const g = loadGamify();
  const p = g[userId] || { xp:0, level:1, streak:0, lastDate:"", dayXp:0, dayKey:"", badges:{} };
  p.badges = p.badges || {};
  if (p.badges[badgeId]) return false;
  p.badges[badgeId] = Date.now();
  g[userId] = p;
  saveGamify(g);

  const b = BADGES.find(x=>x.id===badgeId);
  if (b){
    toast(getLang()==="ko" ? `뱃지 획득! ${b.ko}` : `Badge earned! ${b.en}`);
  }
  return true;
}
function checkBadges(userId){
  const p = getProfile(userId);
  const s = userStats(userId);

  if (s.ideasCount >= 1) grantBadge(userId, "first_idea");
  if (s.ideasCount >= 3) grantBadge(userId, "three_ideas");

  if (s.commentsCount >= 1) grantBadge(userId, "first_comment");
  if (s.commentsCount >= 5) grantBadge(userId, "five_comments");

  if (p.streak >= 3) grantBadge(userId, "streak_3");
  if (p.streak >= 7) grantBadge(userId, "streak_7");

  if (p.level >= 5) grantBadge(userId, "level_5");

  if (s.hasPhotoIdea) grantBadge(userId, "photographer");
}
function awardXP(userId, amount, reason){
  const g = loadGamify();
  const p = g[userId] || { xp:0, level:1, streak:0, lastDate:"", dayXp:0, dayKey:"", badges:{} };

  const cap = 300; // 하루 최대 XP
  const tk = todayKey();
  if (p.dayKey !== tk){
    p.dayKey = tk;
    p.dayXp = 0;
  }
  const can = Math.max(0, cap - p.dayXp);
  const gain = Math.min(amount, can);
  if (gain <= 0){
    g[userId] = p;
    saveGamify(g);
    toast(getLang()==="ko" ? "오늘 XP 상한 도달" : "Daily XP cap reached");
    updateXpUI();
    return;
  }

  if (!p.lastDate){
    p.streak = 1;
  } else if (p.lastDate === tk){
    // same day
  } else if (isYesterday(p.lastDate)){
    p.streak += 1;
  } else {
    p.streak = 1;
  }
  p.lastDate = tk;

  p.xp += gain;
  p.dayXp += gain;

  const lv = calcLevel(p.xp);
  p.level = lv.level;

  g[userId] = p;
  saveGamify(g);

  toast(`+${gain} XP • ${reason || ""}`.trim());
  updateXpUI();
  checkBadges(userId);
}

function openBadgeModal(userId, userName){
  let back = document.getElementById("badgeModalBack");
  if (back) back.remove();

  back = document.createElement("div");
  back.id = "badgeModalBack";
  back.className = "modalBack";

  const p = getProfile(userId);
  const lv = calcLevel(p.xp);

  const cards = BADGES.map(b=>{
    const earned = !!(p.badges && p.badges[b.id]);
    const name = getLang()==="ko" ? b.ko : b.en;
    const desc = getLang()==="ko" ? b.koDesc : b.enDesc;
    return `
      <div class="badgeCard ${earned ? "" : "locked"}">
        <div class="badgeTop">
          <div class="badgeIcon">${b.icon}</div>
          <div class="badgeName">${escapeHTML(name)}</div>
        </div>
        <div class="badgeDesc">${escapeHTML(desc)}${earned ? (getLang()==="ko" ? " • 획득" : " • earned") : ""}</div>
      </div>
    `;
  }).join("");

  back.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <div class="modalHead">
        <div class="modalTitle">${escapeHTML(userName)} • LV ${p.level} • ${p.xp} XP • ${getLang()==="ko" ? `연속 ${p.streak}일` : `${p.streak}-day streak`}</div>
        <button class="modalClose" id="badgeModalClose" type="button">Close</button>
      </div>
      <div class="modalBody">
        <div class="mutedSmall" style="margin-bottom:12px;">
          ${getLang()==="ko"
            ? `다음 레벨까지 ${lv.next - lv.into}XP 남음 • (하루 XP 상한 300)`
            : `${lv.next - lv.into}XP to next level • (Daily cap 300)`}
        </div>
        <div class="badgeGrid">${cards}</div>
      </div>
    </div>
  `;

  document.body.appendChild(back);
  document.getElementById("badgeModalClose").onclick = ()=> back.remove();
  back.onclick = (e)=> { if (e.target === back) back.remove(); };
}

function updateXpUI(){
  const btn = document.getElementById("xpPill");
  if (!btn) return;

  const u = getUser();
  if (!u.loggedIn || !u.userId){
    btn.textContent = getLang()==="ko" ? "로그인 필요" : "Login";
    btn.onclick = () => document.getElementById("loginBtn")?.click();
    return;
  }

  const p = getProfile(u.userId);
  const lv = calcLevel(p.xp);
  btn.textContent = `LV ${p.level} • ${lv.into}/${lv.next} XP`;
  btn.onclick = () => openBadgeModal(u.userId, u.name || "User");
}

/* =========================
   Index rendering
========================= */
function cardLikeCount(id){
  const likes = loadLikes();
  const bucket = likes[String(id)] || {};
  return seedLikesFor(id) + Object.keys(bucket).length;
}
function cardCommentCount(id){
  return seedCommentCount(id) + getComments(id).length;
}
function cardHTML(item){
  const up = cardLikeCount(item.id);
  const cm = cardCommentCount(item.id);

  return `
    <a class="card" href="./detail.html?id=${encodeURIComponent(item.id)}">
      <div class="card__top">
        <h3 class="card__title">${escapeHTML(titleOf(item))}</h3>
        <span class="badge ${badgeClass(item.status)}">${escapeHTML(labelStatus(item.status))}</span>
      </div>

      <div class="card__meta">
        ${escapeHTML(t("submittedBy"))}: ${escapeHTML(item.author)} • ${escapeHTML(t("category"))}: ${escapeHTML(labelCategory(item.category))}
      </div>

      <div class="impactBox" style="margin-top:10px;">
        <div class="impactBox__title">↗ ${escapeHTML(t("realWorldImpact"))}</div>
        <p class="impactBox__text">${escapeHTML(impactOf(item))}</p>
      </div>

      <div class="card__foot">
        <span class="pill">♥ ${up.toLocaleString()}</span>
        <span class="pill">💬 ${cm.toLocaleString()}</span>
      </div>
    </a>
  `;
}
function renderStats(){
  const s = document.getElementById("statSubmitted");
  if (!s) return;

  const items = allItems();
  const submitted = items.filter(x => x.type === "idea").length;
  const implemented = items.filter(x => x.type === "idea" && x.status === "implemented").length;

  const baseSubmitted = 1247;
  const baseImplemented = 89;
  const baseActive = 12450;

  document.getElementById("statSubmitted").textContent = (baseSubmitted + Math.max(0, submitted - 3)).toLocaleString();
  document.getElementById("statImplemented").textContent = (baseImplemented + Math.max(0, implemented - 1)).toLocaleString();
  document.getElementById("statActive").textContent = baseActive.toLocaleString();
}
function renderIndex(){
  const listEl = document.getElementById("list");
  if (!listEl) return;

  const tabIdeas = document.getElementById("tabIdeas");
  const tabInit = document.getElementById("tabInitiatives");
  const catSel = document.getElementById("categorySelect");
  const resetBtn = document.getElementById("resetBtn");

  let mode = listEl.dataset.mode || "ideas";

  function setMode(m){
    mode = m;
    listEl.dataset.mode = m;
    tabIdeas?.classList.toggle("is-active", m==="ideas");
    tabInit?.classList.toggle("is-active", m==="initiatives");
    paint();
  }

  tabIdeas?.addEventListener("click", () => setMode("ideas"));
  tabInit?.addEventListener("click", () => setMode("initiatives"));
  catSel?.addEventListener("change", paint);

  resetBtn?.addEventListener("click", () => {
    localStorage.removeItem(KEY_USER_IDEAS);
    localStorage.removeItem(KEY_LIKES);
    localStorage.removeItem(KEY_COMMENTS);
    localStorage.removeItem(KEY_STATUSES);
    localStorage.removeItem(KEY_GAMIFY);
    localStorage.removeItem(KEY_ACCOUNTS);
    setUser({ loggedIn:false, name:"", userId:"" });
    localStorage.setItem(KEY_ROLE, "citizen");

    paint();
    renderStats();
    applyI18n();
    updateXpUI();
    syncRoleUI();
  });

  function paint(){
    const items = allItems()
      .filter(x => (mode === "ideas" ? x.type==="idea" : x.type==="initiative"))
      .filter(x => {
        const v = catSel?.value || "all";
        return v === "all" ? true : x.category === v;
      })
      .sort((a,b) => Number(b.id) - Number(a.id));

    listEl.innerHTML = items.map(cardHTML).join("");
  }

  setMode(mode);
  paint();
}

/* =========================
   Detail rendering
========================= */
let __detailIdeaId = null;
let __detailItem = null;
let __replyToId = null;
let __replyToName = "";

function updateLikeUI(){
  if (__detailIdeaId == null) return;

  const u = getUser();
  const liked = (u.loggedIn && u.userId) ? isLiked(__detailIdeaId, u.userId) : false;

  const countEl = document.getElementById("likeCount");
  if (countEl) countEl.textContent = likeCount(__detailIdeaId).toLocaleString();

  const btn = document.getElementById("likeBtn");
  if (btn){
    btn.textContent = liked ? t("likedBtn") : t("likeBtn");
  }

  const hint = document.getElementById("likeHint");
  if (hint){
    hint.textContent = (!u.loggedIn) ? (getLang()==="ko" ? "로그인 후 좋아요 가능" : "Login required to like") : "";
  }
}

function updateCommentCountUI(){
  if (__detailIdeaId == null) return;
  const el = document.getElementById("commentCount");
  if (el) el.textContent = commentCountTotal(__detailIdeaId).toLocaleString();
}
function updateCommentHints(){
  const hint = document.getElementById("commentHint");
  if (!hint) return;
  hint.textContent = (!isLoggedIn())
    ? (getLang()==="ko" ? "로그인 후 댓글 작성 가능" : "Login required to comment")
    : "";
}

function setupCommentForm(){
  const form = document.getElementById("commentForm");
  if (!form || __detailIdeaId == null) return;

  const input = document.getElementById("commentInput");
  const cancelReplyBtn = document.getElementById("cancelReplyBtn");
  const replyBanner = document.getElementById("replyBanner");

  cancelReplyBtn?.addEventListener("click", () => {
    __replyToId = null;
    __replyToName = "";
    replyBanner.hidden = true;
    cancelReplyBtn.hidden = true;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const u = requireLogin(t("needLoginComment"));
    if (!u) return;

    const content = (input?.value || "").trim();
    if (!content) return alert(t("emptyComment"));

    const list = getComments(__detailIdeaId);
    list.push({
      id: newCommentId(),
      parentId: __replyToId, // ✅ 답글/대댓글: 어떤 댓글이든 parent로 가능
      userId: u.userId,
      userName: u.name || (getLang()==="ko" ? "익명" : "Anonymous"),
      content,
      createdAt: Date.now(),
      updatedAt: null
    });
    setComments(__detailIdeaId, list);

    // ✅ XP
    const isReply = !!__replyToId;
    awardXP(
      u.userId,
      isReply ? 12 : 10,
      getLang()==="ko" ? (isReply ? "답글 작성" : "댓글 작성") : (isReply ? "Reply posted" : "Comment posted")
    );

    input.value = "";
    __replyToId = null;
    __replyToName = "";
    replyBanner.hidden = true;
    cancelReplyBtn.hidden = true;

    renderCommentsList();
    updateCommentCountUI();
  });
}

/* ✅ 트리(무한 depth) 렌더링 */
function renderCommentsList(){
  const wrap = document.getElementById("commentList");
  if (!wrap || __detailIdeaId == null) return;

  const u = getUser();
  const logged = !!(u.loggedIn && u.userId);
  const admin = isAdminUser();

  const list = getComments(__detailIdeaId);

  // children map
  const childrenByParent = {};
  const roots = [];
  for (const c of list){
    const pid = c.parentId ? String(c.parentId) : "";
    if (!pid) roots.push(c);
    else {
      childrenByParent[pid] = childrenByParent[pid] || [];
      childrenByParent[pid].push(c);
    }
  }

  // sort by time (old -> new)
  roots.sort((a,b)=>a.createdAt-b.createdAt);
  for (const k of Object.keys(childrenByParent)){
    childrenByParent[k].sort((a,b)=>a.createdAt-b.createdAt);
  }

  function actionsHTML(c){
    if (!logged) return "";
    const mine = !!(c.userId && u.userId && c.userId === u.userId);

    const replyBtn = `<button class="actionBtn" type="button" data-action="reply" data-id="${escapeHTML(c.id)}" data-name="${escapeHTML(c.userName)}">${t("reply")}</button>`;

    // ✅ admin이면 모든 댓글 edit/delete 가능
    const canEditDelete = admin || mine;

    const editBtn = canEditDelete ? `<button class="actionBtn" type="button" data-action="edit" data-id="${escapeHTML(c.id)}">${t("edit")}</button>` : "";
    const delBtn  = canEditDelete ? `<button class="actionBtn danger" type="button" data-action="delete" data-id="${escapeHTML(c.id)}">${t("delete")}</button>` : "";

    return `<div class="commentActions">${replyBtn}${editBtn}${delBtn}</div>`;
  }

  function commentHTML(c, depth){
    const edited = c.updatedAt ? (getLang()==="ko" ? " (수정됨)" : " (edited)") : "";
    const margin = Math.min(depth, 8) * 22; // 너무 깊어지면 제한
    return `
      <div class="commentItem ${depth>0 ? "reply" : ""}" data-id="${escapeHTML(c.id)}" style="margin-left:${margin}px;">
        <div class="commentTop">
          <div>
            <div class="commentAuthor">${escapeHTML(c.userName)}</div>
            <div class="commentTime">${escapeHTML(timeAgo(c.createdAt))}${edited}</div>
          </div>
        </div>
        <div class="commentBody" data-body="${escapeHTML(c.id)}">${escapeHTML(c.content)}</div>
        ${actionsHTML(c)}
      </div>
    `;
  }

  function renderNode(node, depth){
    let html = commentHTML(node, depth);
    const kids = childrenByParent[String(node.id)] || [];
    for (const child of kids){
      html += renderNode(child, depth + 1);
    }
    return html;
  }

  let html = "";
  for (const r of roots){
    html += renderNode(r, 0);
  }

  wrap.innerHTML = html || `<div class="mutedSmall">${getLang()==="ko" ? "아직 댓글이 없습니다." : "No comments yet."}</div>`;

  wrap.onclick = (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;

    const action = btn.dataset.action;
    const cid = btn.dataset.id;
    const name = btn.dataset.name || "";

    if (!isLoggedIn()){
      alert(t("needLoginAction"));
      return;
    }

    const uNow = getUser();
    const adminNow = isAdminUser();
    const listNow = getComments(__detailIdeaId);
    const target = listNow.find(x => x.id === cid);
    if (!target) return;

    if (action === "reply"){
      __replyToId = cid;
      __replyToName = name;

      const replyBanner = document.getElementById("replyBanner");
      const cancelReplyBtn = document.getElementById("cancelReplyBtn");
      replyBanner.hidden = false;
      cancelReplyBtn.hidden = false;
      replyBanner.textContent = `${t("replyingTo")}: ${name}`;

      document.getElementById("commentInput")?.focus();
      return;
    }

    const mine = !!(target.userId && uNow.userId && target.userId === uNow.userId);
    const canEditDelete = adminNow || mine;

    if (action === "delete"){
      if (!canEditDelete) return;
      if (!confirm(t("confirmDelete"))) return;
      const next = deleteCommentRecursive(listNow, cid);
      setComments(__detailIdeaId, next);
      renderCommentsList();
      updateCommentCountUI();
      return;
    }

    if (action === "edit"){
      if (!canEditDelete) return;

      const itemEl = wrap.querySelector(`.commentItem[data-id="${CSS.escape(cid)}"]`);
      if (!itemEl) return;

      const bodyEl = itemEl.querySelector(`[data-body="${CSS.escape(cid)}"]`);
      if (!bodyEl) return;

      const old = target.content;
      bodyEl.innerHTML = `<textarea class="textarea" rows="3" data-edit="${escapeHTML(cid)}">${escapeHTML(old)}</textarea>`;

      const actions = itemEl.querySelector(".commentActions");
      if (actions){
        actions.innerHTML = `
          <button class="actionBtn" type="button" data-action="saveEdit" data-id="${escapeHTML(cid)}">${t("saveEdit")}</button>
          <button class="actionBtn" type="button" data-action="cancelEdit" data-id="${escapeHTML(cid)}">${t("cancel")}</button>
        `;
      }
      return;
    }

    if (action === "cancelEdit"){
      renderCommentsList();
      return;
    }

    if (action === "saveEdit"){
      if (!canEditDelete) return;

      const ta = wrap.querySelector(`textarea[data-edit="${CSS.escape(cid)}"]`);
      const nextText = (ta?.value || "").trim();
      if (!nextText) return alert(t("emptyComment"));

      target.content = nextText;
      target.updatedAt = Date.now();
      setComments(__detailIdeaId, listNow);

      renderCommentsList();
      updateCommentCountUI();
      return;
    }
  };
}

async function renderDetailPhotos(item){
  const section = document.getElementById("photoSection");
  const gallery = document.getElementById("photoGallery");
  if (!section || !gallery) return;

  const ids = Array.isArray(item.photoIds) ? item.photoIds : [];
  if (!ids.length){
    section.hidden = true;
    gallery.innerHTML = "";
    return;
  }

  section.hidden = false;
  gallery.innerHTML = `<div class="mutedSmall">${getLang()==="ko" ? "사진 로딩 중..." : "Loading photos..."}</div>`;

  const imgs = [];
  for (const id of ids){
    const obj = await loadImageFromDB(id);
    if (!obj || !obj.blob) continue;
    const url = URL.createObjectURL(obj.blob);
    imgs.push(url);
  }

  if (!imgs.length){
    gallery.innerHTML = `<div class="mutedSmall">${getLang()==="ko" ? "사진을 찾을 수 없습니다." : "No photos found."}</div>`;
    return;
  }

  gallery.innerHTML = imgs.map(u => `<img src="${u}" alt="photo" />`).join("");

  gallery.querySelectorAll("img").forEach(img=>{
    img.addEventListener("click", ()=> window.open(img.src, "_blank"));
  });
}

/* ✅ admin 글 삭제 (user 제출 글만) */
function deleteIdeaAsAdmin(item){
  if (!isAdminUser()) return;
  const userIdeas = loadUserIdeas();
  const idx = userIdeas.findIndex(x => Number(x.id) === Number(item.id));
  if (idx < 0){
    alert(getLang()==="ko" ? "시드(SEED) 글은 삭제할 수 없습니다." : "Seed items cannot be deleted.");
    return;
  }

  if (!confirm(t("confirmDeleteIdea"))) return;

  userIdeas.splice(idx, 1);
  writeJSON(KEY_USER_IDEAS, userIdeas);

  // 관련 데이터 정리: likes/comments/status
  const likes = loadLikes();
  delete likes[String(item.id)];
  saveLikes(likes);

  const commentsAll = loadCommentsAll();
  delete commentsAll[String(item.id)];
  saveCommentsAll(commentsAll);

  const st = loadStatuses();
  delete st[String(item.id)];
  saveStatuses(st);

  alert(getLang()==="ko" ? "삭제 완료" : "Deleted");
  window.location.href = "./index.html";
}

function renderDetail(){
  const titleEl = document.getElementById("dTitle");
  if (!titleEl) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const items = allItems();
  const item = items.find(x => Number(x.id) === id) || items[0];
  if (!item) return;

  __detailIdeaId = item.id;
  __detailItem = item;

  document.getElementById("dTitle").textContent = titleOf(item);
  document.getElementById("dMeta").textContent =
    `${t("submittedBy")}: ${item.author} • ${t("category")}: ${labelCategory(item.category)} • #${item.id}`;

  const stEl = document.getElementById("dStatus");
  stEl.textContent = labelStatus(item.status);
  stEl.className = `badge ${badgeClass(item.status)}`;

  document.getElementById("dImpact").textContent = impactOf(item);
  document.getElementById("dDesc").textContent = descOf(item);

  syncRoleUI();

  // official status change (admin + official)
  const statusSel = document.getElementById("statusSelect");
  if (statusSel) statusSel.value = item.status || "new";

  document.getElementById("saveStatusBtn")?.addEventListener("click", () => {
    if (!isAdminUser() || getRole() !== "official") return;
    const v = statusSel?.value || "new";
    const map = loadStatuses();
    map[String(item.id)] = v;
    saveStatuses(map);

    stEl.textContent = labelStatus(v);
    stEl.className = `badge ${badgeClass(v)}`;
    alert(getLang()==="ko" ? "저장 완료" : "Saved");
  });

  // admin tools
  document.getElementById("deleteIdeaBtn")?.addEventListener("click", () => deleteIdeaAsAdmin(item));

  document.getElementById("likeBtn")?.addEventListener("click", () => {
    toggleLike(item.id);
    updateLikeUI();
  });

  setupCommentForm();
  renderCommentsList();
  updateLikeUI();
  updateCommentCountUI();
  updateCommentHints();
  renderDetailPhotos(item);
}

/* =========================
   Submit page
========================= */
function nowId(){
  return Number(String(Date.now()).slice(-7)) + Math.floor(Math.random()*90);
}

function renderSubmitPage(){
  const form = document.getElementById("submitForm");
  if (!form) return;

  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const impact = document.getElementById("impact");
  const cat = document.getElementById("category");
  const location = document.getElementById("location");
  const tags = document.getElementById("tags");
  const photo = document.getElementById("photo");

  const titleCount = document.getElementById("titleCount");
  const descCount = document.getElementById("descCount");
  const impactCount = document.getElementById("impactCount");
  const submitHint = document.getElementById("submitHint");

  const previewBtn = document.getElementById("previewBtn");
  const previewCard = document.getElementById("previewCard");
  const photoPreview = document.getElementById("photoPreview");

  let selectedFiles = [];
  const MAX_TOTAL = 50 * 1024 * 1024;

  function setCount(el, c, max){ if (el) el.textContent = `${c} / ${max}`; }

  function validate(){
    const ttl = (title.value || "").trim();
    const d = (desc.value || "").trim();
    const im = (impact.value || "").trim();

    if (!isLoggedIn()) return { ok:false, msg: (getLang()==="ko" ? "제출하려면 로그인하세요." : "Login is required to submit.") };
    if (ttl.length < 6) return { ok:false, msg: (getLang()==="ko" ? "제목은 6자 이상 입력해 주세요." : "Title must be at least 6 characters.") };
    if (d.length < 20) return { ok:false, msg: (getLang()==="ko" ? "설명은 20자 이상 입력해 주세요." : "Description must be at least 20 characters.") };
    if (im.length < 10) return { ok:false, msg: (getLang()==="ko" ? "기대효과는 10자 이상 입력해 주세요." : "Expected impact must be at least 10 characters.") };

    const total = selectedFiles.reduce((s,f)=>s+f.size,0);
    if (total > MAX_TOTAL){
      return { ok:false, msg: (getLang()==="ko"
        ? `사진 총 용량이 50MB를 초과했습니다. (현재 ${bytesToMB(total)}MB)`
        : `Total photo size exceeds 50MB. (now ${bytesToMB(total)}MB)`) };
    }
    return { ok:true, msg:"" };
  }

  function applyPreview(){
    const u = getUser();
    const ttl = (title.value || "").trim();
    const d = (desc.value || "").trim();
    const im = (impact.value || "").trim();
    const loc = (location.value || "").trim();
    const tg = (tags.value || "").trim();

    document.getElementById("pTitle").textContent = ttl || "—";
    document.getElementById("pDesc").textContent = d || "—";
    document.getElementById("pImpact").textContent = im || "—";

    const metaParts = [];
    metaParts.push(`${t("submittedBy")}: ${u.name || (getLang()==="ko" ? "익명" : "Anonymous")}`);
    metaParts.push(`${t("category")}: ${labelCategory(cat.value)}`);
    if (loc) metaParts.push((getLang()==="ko" ? `위치: ${loc}` : `Location: ${loc}`));
    if (tg) metaParts.push((getLang()==="ko" ? `태그: ${tg}` : `Tags: ${tg}`));
    document.getElementById("pMeta").textContent = metaParts.join(" • ");

    const pWrap = document.getElementById("pPhotoWrap");
    const pImg = document.getElementById("pPhoto");
    if (selectedFiles.length > 0){
      pWrap.hidden = false;
      pImg.src = URL.createObjectURL(selectedFiles[0]);
    } else {
      pWrap.hidden = true;
      pImg.src = "";
    }
  }

  function renderPhotoPreview(){
    const total = selectedFiles.reduce((s,f)=>s+f.size,0);

    if (!selectedFiles.length){
      photoPreview.hidden = true;
      photoPreview.innerHTML = "";
      return;
    }

    photoPreview.hidden = false;

    const tiles = selectedFiles.map((f, idx) => {
      const url = URL.createObjectURL(f);
      return `
        <div class="photoTile">
          <img src="${url}" alt="photo ${idx+1}" />
          <div class="photoTile__meta">
            <span>${bytesToMB(f.size)}MB</span>
            <button class="photoRemove" type="button" data-remove="${idx}">X</button>
          </div>
        </div>
      `;
    }).join("");

    photoPreview.innerHTML = `
      <div class="mutedSmall">${getLang()==="ko"
        ? `선택됨: ${selectedFiles.length}장 • 총 ${bytesToMB(total)}MB / 50MB`
        : `Selected: ${selectedFiles.length} • Total ${bytesToMB(total)}MB / 50MB`
      }</div>
      <div class="photoGrid" style="margin-top:10px;">${tiles}</div>
    `;

    photoPreview.querySelectorAll("button[data-remove]").forEach(btn => {
      btn.addEventListener("click", () => {
        const i = Number(btn.dataset.remove);
        selectedFiles.splice(i, 1);
        renderPhotoPreview();
      });
    });
  }

  title.addEventListener("input", () => setCount(titleCount, title.value.length, 80));
  desc.addEventListener("input", () => setCount(descCount, desc.value.length, 800));
  impact.addEventListener("input", () => setCount(impactCount, impact.value.length, 200));

  setCount(titleCount, title.value.length || 0, 80);
  setCount(descCount, desc.value.length || 0, 800);
  setCount(impactCount, impact.value.length || 0, 200);

  photo.addEventListener("change", () => {
    const files = Array.from(photo.files || []);
    selectedFiles = files;

    const total = selectedFiles.reduce((s,f)=>s+f.size,0);
    if (total > MAX_TOTAL){
      alert(getLang()==="ko"
        ? `사진 총 용량이 50MB를 넘었어요. (현재 ${bytesToMB(total)}MB)`
        : `Total photo size exceeds 50MB. (now ${bytesToMB(total)}MB)`
      );
      selectedFiles = [];
      photo.value = "";
    }
    renderPhotoPreview();
  });

  previewBtn.addEventListener("click", () => {
    const v = validate();
    if (!v.ok){
      submitHint.textContent = v.msg;
      submitHint.style.color = "#b91c1c";
      previewCard.hidden = true;
      return;
    }
    submitHint.textContent = "";
    previewCard.hidden = false;
    applyPreview();
    previewCard.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const v = validate();
    if (!v.ok){
      submitHint.textContent = v.msg;
      submitHint.style.color = "#b91c1c";
      return;
    }

    const u = getUser();

    let photoIds = [];
    if (selectedFiles.length > 0){
      photoIds = await saveImagesToDB(selectedFiles);
    }

    const newIdea = {
      id: nowId(),
      type: "idea",
      category: cat.value,
      status: "under_review",
      author: u.name || (getLang()==="ko" ? "익명" : "Anonymous"),
      authorId: u.userId,

      title_en: title.value.trim(),
      title_ko: title.value.trim(),
      impact_en: impact.value.trim(),
      impact_ko: impact.value.trim(),
      desc_en: desc.value.trim(),
      desc_ko: desc.value.trim(),

      location: location.value.trim(),
      tags: tags.value.trim(),
      photoIds,
      createdAt: Date.now()
    };

    const list = loadUserIdeas();
    list.unshift(newIdea);
    writeJSON(KEY_USER_IDEAS, list);

    awardXP(u.userId, 50, getLang()==="ko" ? "아이디어 제출" : "Idea submitted");

    alert(getLang()==="ko" ? "제출 완료! 검토 대기 상태로 등록됐습니다." : "Submitted! Your idea is now under review.");
    window.location.href = `./detail.html?id=${encodeURIComponent(newIdea.id)}`;
  });

  if (!isLoggedIn()){
    submitHint.textContent = (getLang()==="ko")
      ? "제출하려면 먼저 로그인하세요 (우측 상단 Login)."
      : "Please login first to submit (top-right Login).";
  } else {
    submitHint.textContent = "";
  }
}

/* =========================
   Leaderboard (XP)
========================= */
function renderXpLeaderboard(){
  const el = document.getElementById("leaderboardList");
  if (!el) return;

  const accounts = loadAccounts();
  const g = loadGamify();

  const rows = Object.values(accounts).map(a=>{
    const p = g[a.userId] || { xp:0, level:1, streak:0 };
    return { name: a.name, xp: p.xp||0, level: p.level||1, streak: p.streak||0 };
  }).sort((a,b)=> b.xp - a.xp).slice(0, 30);

  if (!rows.length){
    el.innerHTML = `<div class="cardPad mutedSmall">${getLang()==="ko" ? "아직 랭킹 데이터가 없습니다. 댓글/제출을 해보세요." : "No ranking data yet. Post comments or submit ideas."}</div>`;
    return;
  }

  el.innerHTML = rows.map((r,i)=>`
    <div class="card" style="padding:14px; display:flex; justify-content:space-between; align-items:center; gap:10px;">
      <div style="font-weight:1200;">#${i+1} ${escapeHTML(r.name)}</div>
      <div style="font-weight:1200; color: var(--muted);">LV ${r.level} • ${r.xp} XP • 🔥${r.streak}</div>
    </div>
  `).join("");
}

/* =========================
   Boot
========================= */
setupTopbar();
renderStats();
renderIndex();
renderDetail();
renderSubmitPage();
renderXpLeaderboard();
applyI18n();
updateXpUI();
syncRoleUI();
