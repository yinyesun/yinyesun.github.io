const pages = [...document.querySelectorAll('.design-page')];
const projectArt = document.querySelector('#project-art');
const detailImage = document.querySelector('#detail-image');
const videoDialog = document.querySelector('.video-dialog');
const videoPlayer = document.querySelector('#video-player');
const videoTitle = document.querySelector('#video-title');

const projects = [
  { title: 'KlingQ', image: 'assets/figma/project-01-klingq.png' },
  { title: 'KroWork · Design System', image: 'assets/figma/project-02-krowork.png' },
  { title: 'KroWork · 超能套件', image: 'assets/figma/project-03-krowork.png' },
  { title: 'KroWork · 商业体验', image: 'assets/figma/project-04-krowork.png' },
  { title: '人生圆舞曲', image: 'assets/figma/project-05-life-waltz.png' },
  { title: '魔表与图文模板供给', image: 'assets/figma/project-06-magic-watch.png' },
  { title: '员工卡首页优化', image: 'assets/figma/project-07-employee-card.png' },
  { title: '内推年报', image: 'assets/figma/project-08-annual-report.png' },
];

const videos = {
  life: { title: 'Life Waltz · 人生圆舞曲', src: 'assets/videos/life-waltz.mp4' },
  trip: { title: 'Annual Report · 携程程里内推', src: 'assets/videos/trip-insider.mp4' },
  magic: { title: 'Magic Watch Special Effects Design · 魔表特效设计', src: 'assets/videos/magic-watch.mp4' },
  car: { title: '古车博物馆', src: 'https://github.com/yinyesun/yinyesun.github.io/releases/download/personal-site-assets-v1/vintage-car.mp4' },
};

const honors = {
  competition: [
    '第八届服务设计大会十大优秀案例 高校 第三名', 'SDN 全球服务设计大赛学生组决赛', 'Home+国际服务设计大赛全国金奖',
    'NCDA省级一/二等奖', '第17届大广赛江苏赛区省级一/三等奖', '第九届米兰设计周江苏赛区省二等奖',
    '第八届“两岸新锐设计竞赛·华灿奖”华南赛区省三等奖', '第七届米兰设计周华南赛区二/三等奖',
    '全国三维数字化创新设计大赛人居设计大赛省一等奖',
  ],
  school: [
    '2024-2025江南大学校二等等奖学金', '2020-2021桂林理工大学校一等奖学金', '2021-2022桂林理工大学校二等奖学金',
    '2022-2023桂林理工大学校二等奖学金', '2021-2022桂林理工大学校优秀学生干部', '2022-2023桂林理工大学校优秀共青团员',
    '2020-2021桂林理工大学校社会实践活动先进个人', '2021-2022桂林理工大学校社会工作先进个人', '2023-2024桂林理工大学校优秀毕设',
  ],
  student: ['2021-2022校全媒体中心校报部部长', '2022-2023学院第二党支部材料负责人', '2023-2024学院第二党支部组织委员'],
};

let currentProject = 0;
let currentHonor = 'competition';
let honorStart = 0;
let projectTimer;
let honorTimer;

function showPage(name) {
  pages.forEach((page) => page.classList.toggle('is-active', page.dataset.page === name));
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (name === 'projects') startProjectAutoplay();
  else clearInterval(projectTimer);
}

function selectProject(index, animate = true) {
  currentProject = (index + projects.length) % projects.length;
  const project = projects[currentProject];
  if (animate) projectArt.classList.add('is-changing');
  window.setTimeout(() => {
    projectArt.src = project.image;
    projectArt.alt = `${project.title} 项目预览`;
    projectArt.classList.remove('is-changing');
  }, animate ? 180 : 0);
}

function openProject(index = currentProject) {
  currentProject = index;
  const project = projects[index];
  detailImage.src = project.image;
  detailImage.alt = `${project.title} 项目详情`;
  showPage('detail');
}

function startProjectAutoplay() {
  clearInterval(projectTimer);
  projectTimer = window.setInterval(() => selectProject(currentProject + 1), 5200);
}

document.addEventListener('click', (event) => {
  const go = event.target.closest('[data-go]');
  if (go) showPage(go.dataset.go);
  const project = event.target.closest('[data-project]');
  if (project) openProject(Number(project.dataset.project));
  const videoButton = event.target.closest('[data-video]');
  if (videoButton) openVideo(videoButton.dataset.video);
  const projectSelect = event.target.closest('[data-project-select]');
  if (projectSelect) {
    selectProject(Number(projectSelect.dataset.projectSelect));
    startProjectAutoplay();
  }
});

document.querySelector('.project-prev').addEventListener('click', () => { selectProject(currentProject - 1); startProjectAutoplay(); });
document.querySelector('.project-next').addEventListener('click', () => { selectProject(currentProject + 1); startProjectAutoplay(); });
document.querySelector('.detail-back').addEventListener('click', () => showPage('projects'));
document.querySelector('.detail-prev').addEventListener('click', () => openProject((currentProject - 1 + projects.length) % projects.length));
document.querySelector('.detail-next').addEventListener('click', () => openProject((currentProject + 1) % projects.length));

function openVideo(key) {
  const video = videos[key];
  videoTitle.textContent = video.title;
  videoPlayer.src = video.src;
  videoDialog.showModal();
  videoPlayer.play().catch(() => {});
}

function closeVideo() {
  videoPlayer.pause();
  videoPlayer.removeAttribute('src');
  videoPlayer.load();
  videoDialog.close();
}

document.querySelector('.video-close').addEventListener('click', closeVideo);
videoDialog.addEventListener('click', (event) => { if (event.target === videoDialog) closeVideo(); });

function honorPageSize() { return 5; }

function renderHonors() {
  const items = honors[currentHonor];
  const track = document.querySelector('.honor-track');
  track.innerHTML = '';
  const visibleCount = Math.min(honorPageSize(), items.length);
  track.dataset.count = String(visibleCount);
  track.classList.toggle('is-paginated', items.length > visibleCount);
  for (let offset = 0; offset < visibleCount; offset += 1) {
    const index = (honorStart + offset) % items.length;
    const card = document.createElement('article');
    card.className = 'honor-card';
    const textLength = [...items[index]].length;
    if (textLength > 28) card.classList.add('honor-card--long');
    else if (textLength >= 21) card.classList.add('honor-card--medium');
    card.innerHTML = `<span class="honor-card__number">${String(index + 1).padStart(2, '0')}</span><p class="honor-card__text"></p>`;
    card.querySelector('p').textContent = items[index];
    track.append(card);
  }
}

function stepHonors(direction) {
  const length = honors[currentHonor].length;
  honorStart = (honorStart + direction + length) % length;
  renderHonors();
}

function startHonorAutoplay() {
  clearInterval(honorTimer);
  honorTimer = window.setInterval(() => stepHonors(1), 4200);
}

document.querySelectorAll('[data-honor-tab]').forEach((tab) => {
  tab.addEventListener('click', () => {
    currentHonor = tab.dataset.honorTab;
    honorStart = 0;
    document.querySelectorAll('[data-honor-tab]').forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('is-selected', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    renderHonors();
    startHonorAutoplay();
  });
});

document.querySelector('.honor-prev').addEventListener('click', () => { stepHonors(-1); startHonorAutoplay(); });
document.querySelector('.honor-next').addEventListener('click', () => { stepHonors(1); startHonorAutoplay(); });
document.querySelector('.back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});
window.addEventListener('resize', renderHonors);

const cursorRing = document.querySelector('.moonshot-cursor');
const cursorDot = document.querySelector('.moonshot-cursor-dot');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
let cursorX = -100;
let cursorY = -100;
let ringX = -100;
let ringY = -100;

function animateCursor() {
  ringX += (cursorX - ringX) * 0.18;
  ringY += (cursorY - ringY) * 0.18;
  cursorRing.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
  requestAnimationFrame(animateCursor);
}

if (finePointer.matches) {
  window.addEventListener('pointermove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;
    cursorDot.style.transform = `translate3d(${cursorX - 2.5}px, ${cursorY - 2.5}px, 0)`;
    cursorRing.classList.add('is-visible');
    cursorDot.classList.add('is-visible');
  });
  window.addEventListener('pointerleave', () => {
    cursorRing.classList.remove('is-visible');
    cursorDot.classList.remove('is-visible');
  });
  requestAnimationFrame(animateCursor);
}

selectProject(0, false);
renderHonors();
startHonorAutoplay();
