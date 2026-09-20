const screens = {
  search: {
    title: "01 浏览甜品内容",
    image: "01-search.webp",
    hotspots: [
      { label: "查看甜品笔记", to: "post", x: 0, y: 43, w: 50, h: 40 },
      { label: "查看点点整理", to: "summary", x: 1, y: 14, w: 98, h: 25 },
    ],
  },
  post: {
    title: "02 阅读真实笔记",
    image: "02-post.webp",
    hotspots: [
      { label: "收藏笔记", to: "invite", collect: true, x: 62, y: 89, w: 16, h: 10 },
      { label: "返回搜索结果", to: "search", x: 0, y: 5, w: 13, h: 10 },
    ],
  },
  invite: {
    title: "03 邀请加入经验池",
    image: "03-invite.webp",
    hotspots: [
      { label: "取消加入经验池", to: "post", x: 19, y: 52, w: 31, h: 7 },
      { label: "加入经验池", to: "pool", x: 50, y: 52, w: 31, h: 7 },
    ],
  },
  pool: {
    title: "04 浏览主题经验池",
    image: "09-pool.png",
    hotspots: [
      { label: "进入具体经验池", to: "poolDetail", x: 1, y: 20, w: 98, h: 38 },
      { label: "移除经验池中的项目", to: "removeItemConfirm", x: 80, y: 22, w: 19, h: 10 },
      { label: "查看经验池社区", to: "community", x: 64, y: 24, w: 12, h: 6 },
      { label: "打开经验池设置", to: "settings", x: 1, y: 4, w: 13, h: 8 },
      { label: "查看社区聊天", to: "community", x: 72, y: 90, w: 15, h: 10 },
    ],
  },
  poolDetail: {
    title: "具体经验池",
    image: "04-detail-pool.jpg",
    hotspots: [
      { label: "查看点点总结", to: "summary", x: 2, y: 30, w: 96, h: 9 },
      { label: "查看经验池社区", to: "community", x: 22, y: 26, w: 20, h: 5 },
      { label: "进入问点点", to: "summaryPage", x: 44, y: 26, w: 25, h: 5 },
      { label: "管理经验池", to: "settings", x: 81, y: 10, w: 16, h: 7 },
      { label: "返回主题经验池", to: "pool", x: 0, y: 5, w: 13, h: 8 },
    ],
  },
  removeItemConfirm: {
    title: "移除项目 · 危险确认",
    image: "18-remove-item-confirm.png",
    hotspots: [
      { label: "确认移除项目", to: "pool", x: 19, y: 52, w: 31, h: 7, message: "仅演示确认，未删除真实内容" },
      { label: "保留项目", to: "pool", x: 50, y: 52, w: 31, h: 7 },
    ],
  },
  summary: {
    title: "05 点点整理社区经验",
    image: "03-summary.png",
    hotspots: [
      { label: "进入点点查看完整总结", to: "summaryPage", x: 11, y: 78, w: 78, h: 6 },
      { label: "向点点继续提问", to: "fallback", x: 71, y: 13, w: 18, h: 5 },
      { label: "关闭总结，返回社区", to: "community", x: 45, y: 85, w: 10, h: 7 },
    ],
  },
  summaryPage: {
    title: "点点总结1",
    image: "10-summary-page.png",
    hotspots: [
      { label: "追溯真人经验", to: "sources", x: 4, y: 15, w: 92, h: 58 },
      { label: "继续向点点提问", to: "fallback", x: 10, y: 90, w: 66, h: 7 },
      { label: "返回社区聊天", to: "community", x: 0, y: 5, w: 13, h: 8 },
    ],
  },
  sources: {
    title: "06 追溯真人经验",
    image: "08-sources.png",
    hotspots: [
      { label: "继续提问", to: "fallback", x: 2, y: 87, w: 96, h: 11 },
      { label: "返回点点总结", to: "summaryPage", x: 0, y: 5, w: 13, h: 9 },
    ],
  },
  fallback: {
    title: "07 信息不足，问真人",
    image: "04-fallback.png",
    hotspots: [
      { label: "问一问真实社区", to: "publish", x: 65, y: 23, w: 24, h: 11 },
      { label: "返回经验总结", to: "summaryPage", x: 0, y: 5, w: 13, h: 10 },
    ],
  },
  publish: {
    title: "08 确认并发布问题",
    image: "05-publish.png",
    hotspots: [
      { label: "确认发布到经验池", to: "community", x: 50, y: 55, w: 32, h: 9 },
      { label: "取消发布", to: "fallback", x: 20, y: 55, w: 29, h: 9 },
    ],
  },
  community: {
    title: "09 社区用户回答",
    image: "06-community.png",
    hotspots: [
      { label: "查看点点更新结果", to: "update", x: 20, y: 47, w: 75, h: 9 },
      { label: "查看我的问题与回答", to: "questions", x: 7, y: 30, w: 73, h: 8 },
      { label: "打开点点总结", to: "summary", x: 5, y: 78, w: 42, h: 8 },
      { label: "返回具体经验池", to: "poolDetail", x: 0, y: 5, w: 13, h: 10 },
    ],
  },
  update: {
    title: "10 新经验回流总结",
    image: "07-update.png",
    hotspots: [
      { label: "返回社区聊天", to: "community", x: 0, y: 5, w: 13, h: 10 },
      { label: "查看真人来源", to: "sources", x: 4, y: 28, w: 92, h: 28 },
    ],
  },
  settings: {
    title: "11 经验池设置",
    image: "10-questions.png",
    hotspots: [
      { label: "查看我的问题与回答", to: "questions", x: 2, y: 27, w: 96, h: 9 },
      { label: "移除经验池", to: "removePoolConfirm", x: 4, y: 61, w: 92, h: 10 },
      { label: "返回经验池", to: "pool", x: 0, y: 5, w: 13, h: 10 },
    ],
  },
  removePoolConfirm: {
    title: "移除经验池 · 危险确认",
    image: "22-remove-pool-confirm.png",
    hotspots: [
      { label: "确认移除经验池", to: "pool", x: 19, y: 52, w: 31, h: 7, message: "仅演示确认，未删除真实内容" },
      { label: "保留经验池", to: "settings", x: 50, y: 52, w: 31, h: 7 },
    ],
  },
  questions: {
    title: "12 我的问题与回答",
    image: "11-settings.png",
    hotspots: [
      { label: "返回经验池设置", to: "settings", x: 0, y: 5, w: 13, h: 10 },
      { label: "返回社区聊天", to: "community", x: 2, y: 12, w: 96, h: 30 },
    ],
  },
  profile: {
    title: "用户主页",
    image: "profile.jpg",
    hotspots: [
      { label: "返回上一页", to: "profileReturn", x: 0, y: 5, w: 13, h: 9 },
    ],
  },
};

const avatarSpots = {
  search: [[2, 86, 9, 6], [52, 86, 9, 6]],
  post: [[10, 7, 10, 5]],
  pool: [[46, 7, 8, 5]],
  poolDetail: [[3, 21, 12, 5], [2, 76, 8, 5], [53, 76, 8, 5]],
  sources: [[6, 25, 12, 6], [6, 32, 12, 6], [6, 49, 12, 6], [6, 56, 12, 6]],
  community: [[6, 14, 12, 6], [6, 22, 12, 6], [82, 30, 12, 6], [6, 39, 12, 6], [6, 47, 12, 6]],
  questions: [[6, 19, 8, 5], [6, 23, 8, 5], [6, 27, 8, 5], [6, 31, 8, 5]],
};

const image = document.querySelector("#screen-image");
const hotspotLayer = document.querySelector("#hotspots");
const feedback = document.querySelector("#tap-feedback");
const actionMessage = document.querySelector("#action-message");
const savedStar = document.querySelector("#saved-star");
const steps = document.querySelector("#steps");
let current = "search";
let timer;
let inviteTimer;
let collected = false;
let profileReturn = "community";

function render(id) {
  const screen = screens[id] || screens.search;
  current = screens[id] ? id : "search";
  image.src = `./assets/${screen.image}?v=20260920-pool-profile`;
  image.alt = screen.title;
  savedStar.hidden = current !== "post" || !collected;
  actionMessage.textContent = "";
  hotspotLayer.replaceChildren();
  const hotspots = [...screen.hotspots, ...(avatarSpots[current] || []).map(([x, y, w, h]) => ({ label: "查看用户主页", to: "profile", x, y, w, h }))];
  hotspots.forEach((spot) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "hotspot";
    button.setAttribute("aria-label", spot.collect && collected ? "已收藏，查看加入邀请" : spot.label);
    button.dataset.to = spot.to;
    Object.assign(button.style, {
      left: `${spot.x}%`, top: `${spot.y}%`, width: `${spot.w}%`, height: `${spot.h}%`,
    });
    button.addEventListener("click", (event) => {
      const bounds = document.querySelector(".phone").getBoundingClientRect();
      feedback.style.left = `${event.clientX - bounds.left}px`;
      feedback.style.top = `${event.clientY - bounds.top}px`;
      feedback.classList.remove("active");
      void feedback.offsetWidth;
      feedback.classList.add("active");
      if (spot.collect) {
        collected = true;
        savedStar.hidden = false;
        button.setAttribute("aria-label", "已收藏，正在打开加入邀请");
        clearTimeout(inviteTimer);
        inviteTimer = setTimeout(() => navigate(spot.to), 900);
        return;
      }
      if (spot.to === "profile") profileReturn = current;
      navigate(spot.to === "profileReturn" ? profileReturn : spot.to, false, spot.message);
    });
    hotspotLayer.append(button);
  });
  steps.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("current", button.dataset.screen === current);
    button.setAttribute("aria-current", button.dataset.screen === current ? "step" : "false");
  });
}

function navigate(id, replace = false, message = "") {
  if (!screens[id]) return;
  clearTimeout(timer);
  clearTimeout(inviteTimer);
  image.classList.add("leaving");
  timer = setTimeout(() => {
    if (replace) history.replaceState({ screen: id }, "", `#${id}`);
    else history.pushState({ screen: id }, "", `#${id}`);
    render(id);
    actionMessage.textContent = message;
    requestAnimationFrame(() => image.classList.remove("leaving"));
  }, 130);
}

Object.entries(screens).forEach(([id, screen]) => {
  const item = document.createElement("li");
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = screen.title;
  button.dataset.screen = id;
  button.addEventListener("click", () => navigate(id));
  item.append(button);
  steps.append(item);
});
document.querySelector("#restart").addEventListener("click", () => navigate("search"));
window.addEventListener("popstate", () => render(location.hash.slice(1)));
render(location.hash.slice(1));
