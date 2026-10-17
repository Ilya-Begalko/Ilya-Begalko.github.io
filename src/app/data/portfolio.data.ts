import { ExperienceItem, Project, SocialLink, StackGroup } from '../models/portfolio.model';

export const profile = {
  name: 'ИЛЬЯ БЕГАЛКО',
  role: 'Frontend-developer',
  location: 'Saint Petersburg',
  education:
    'Omsk State Technical University, Fundamental Informatics and Information Technology, 2018–2022',
} as const;

export const experience: readonly ExperienceItem[] = [
  {
    role: 'Junior Frontend-developer',
    place: 'Automation Service',
    period: '2021 — 2022',
  },
  {
    role: 'Middle Frontend-developer',
    place: 'IAT VT',
    period: '2022 — 2025',
  },
  {
    role: 'Senior/Lead Frontend-developer',
    place: 'TopnLab (RED, Samolet Plus)',
    period: '2025 — Present',
  },
];

export const stack: readonly StackGroup[] = [
  {
    title: 'Base',
    items: 'Angular 15–21, TypeScript, JavaScript, RxJS, HTML, CSS, SCSS',
  },
  {
    title: 'Angular',
    items:
      'Signals, SignalStore, Standalone Components, Reactive Forms, Lazy Loading, OnPush, Change Detection, Services, Dependency Injection',
  },
  {
    title: 'UI & Components',
    items:
      'Angular Material, Semantic UI, PrimeNG, DevExtreme, ECharts, Quill, UI Kit, Dynamic Web TWAIN',
  },
  {
    title: 'Integrations',
    items: 'REST API, Postman, Swagger, работа с API для AI-функциональности',
  },
  {
    title: 'Tools & Processes',
    items:
      'Git, GitLab, GitHub, Bitbucket, SVN, Jira, Scrum, Merge Requests, CI/CD, Figma, code review',
  },
];

export const socials: readonly SocialLink[] = [
  { label: 'telegram', href: 'https://t.me/ilbglk', external: true },
  { label: 'github', href: 'https://github.com/Ilya-Begalko', external: true },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/ilya-begalko/', external: true },
  { label: 'mail', href: 'mailto:ilya.begalko@gmail.com', external: false },
];

export const projects: readonly Project[] = [
  {
    id: 'guidebook',
    title: 'Guidebook App',
    category: 'Web App',
    image: 'images/guidebook.jpg',
    url: 'http://app-guidebook.netlify.app/',
  },
  {
    id: 'frame-cinema',
    title: 'FRAME — Cinema Club',
    category: 'React App',
    image: 'images/frame-cinema.jpg',
    url: 'https://ilya-begalko.github.io/frame-cinema/',
  },
  {
    id: 'fitness-coach',
    title: 'Fitnes Coach Web Page',
    category: 'Web design',
    image: 'images/project-9.png',
    url: 'https://ilya-begalko.github.io/website-fitnes-coach/',
  },
  {
    id: 'promo-film',
    title: 'Promo Film Web Page',
    category: 'Web design',
    image: 'images/project-6.png',
    url: 'https://ilya-begalko.github.io/PromoFilmWebSite.github.io/',
  },
  {
    id: 'afterhours',
    title: 'AfterHours',
    category: 'React App',
    image: 'images/afterhours.jpg',
    url: 'http://ilya-begalko.github.io/afterhours_react_app/',
  },
  {
    id: 'angular-unit-tests',
    title: 'Angular Unit Tests App',
    category: 'Angular App',
    image: 'images/angular-unit-tests.jpg',
    url: 'https://master--friendly-starship-48cd71.netlify.app/',
  },
  {
    id: 'comics-reader',
    title: 'Comics Reader',
    category: 'Angular App',
    image: 'images/comics-reader.jpg',
    url: 'https://thriving-travesseiro-dcd1f7.netlify.app/',
  },
  {
    id: 'whatsapp-clone',
    title: 'WhatsApp Clone on Angular',
    category: 'Angular App',
    image: 'images/project-1.png',
    url: 'https://jolly-sherbet-36f5f0.netlify.app/',
  },
  {
    id: 'phone-app',
    title: 'Website for phone app',
    category: 'Web design',
    image: 'images/project-19.png',
    url: 'https://ilya-begalko.github.io/Purrweb-TestTask/',
  },
  {
    id: 'data-display',
    title: 'Data Display Screens',
    category: 'Angular App',
    image: 'images/data-display.jpg',
    url: 'https://stunning-vacherin-4d1511.netlify.app/',
  },
  {
    id: 'digital-clock',
    title: 'Digital clock',
    category: 'Web App',
    image: 'images/digital-clock.jpg',
    url: 'https://ilya-begalko.github.io/digital-clock-js/',
  },
  {
    id: 'music-player',
    title: 'Music Player on VanilaJS',
    category: 'Web App',
    image: 'images/project-3.png',
    url: 'https://ilya-begalko.github.io/Vanila-Music-Player/src/app/index.html',
  },
  {
    id: 'periodic-table',
    title: 'Animated Periodic Table',
    category: 'Web App',
    image: 'images/project-16.png',
    url: 'https://ilya-begalko.github.io/animated-periodic-table/',
  },
  {
    id: 'theme-switch',
    title: 'Colorful Theme Switch',
    category: 'Components',
    image: 'images/project-17.png',
    url: 'https://ilya-begalko.github.io/colorful-theme-switch/',
  },
  {
    id: 'futuristic-card',
    title: 'Futuristic Card Effect',
    category: 'Components',
    image: 'images/futuristic-card.jpg',
    url: 'https://ilya-begalko.github.io/futuristic-card-effect/',
  },
  {
    id: 'menja',
    title: 'Game MENJA on JavaScript',
    category: 'Web App',
    image: 'images/project-2.png',
    url: 'https://ilya-begalko.github.io/menja-game-js/',
  },
  {
    id: 'keyboard-hero',
    title: 'Keyboard Hero App',
    category: 'Web App',
    image: 'images/project-5.png',
    url: 'https://ilya-begalko.github.io/KeyboardHero.github.io/',
  },
];
