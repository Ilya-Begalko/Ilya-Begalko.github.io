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
    id: 'data-display',
    title: 'Data Display Screens',
    category: 'Angular App',
    image: 'images/project-7.png',
    url: 'https://stunning-vacherin-4d1511.netlify.app/',
  },
  {
    id: 'color-spectrum',
    title: 'Color Spectrum',
    category: 'Web App',
    image: 'images/project-23.png',
    url: 'https://ilya-begalko.github.io/color-spectrum/',
  },
  {
    id: 'digital-clock',
    title: 'Digital clock',
    category: 'Web App',
    image: 'images/project-22.png',
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
    id: 'weather-app',
    title: 'Weather app on Angular',
    category: 'Angular App',
    image: 'images/project-20.png',
    url: 'https://master--starlit-pasca-b9a850.netlify.app/',
  },
  {
    id: 'animated-upload-modal',
    title: 'Animated Upload Modal',
    category: 'Components',
    image: 'images/project-21.png',
    url: 'https://ilya-begalko.github.io/upload-module/',
  },
  {
    id: 'phone-app',
    title: 'Website for phone app',
    category: 'Web design',
    image: 'images/project-19.png',
    url: 'https://ilya-begalko.github.io/Purrweb-TestTask/',
  },
  {
    id: 'periodic-table',
    title: 'Animated Periodic Table',
    category: 'Web App',
    image: 'images/project-16.png',
    url: 'https://ilya-begalko.github.io/animated-periodic-table/',
  },
  {
    id: 'checkbox-animations',
    title: 'Checkbox Animations With Indeterminate State',
    category: 'Components',
    image: 'images/project-15.png',
    url: 'https://ilya-begalko.github.io/checkbox-animations/',
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
    image: 'images/project-13.png',
    url: 'https://ilya-begalko.github.io/futuristic-card-effect/',
  },
  {
    id: 'activity-notification',
    title: 'Activity notification panel concept',
    category: 'Components',
    image: 'images/project-11.png',
    url: 'https://ilya-begalko.github.io/activity-notification-panel-concept/',
  },
  {
    id: 'whatsapp-clone',
    title: 'WhatsApp Clone on Angular',
    category: 'Angular App',
    image: 'images/project-1.png',
    url: 'https://jolly-sherbet-36f5f0.netlify.app/',
  },
  {
    id: 'menja',
    title: 'Game MENJA on JavaScript',
    category: 'Web App',
    image: 'images/project-2.png',
    url: 'https://ilya-begalko.github.io/menja-game-js/',
  },
  {
    id: 'direction-aware-hover',
    title: 'Direction-aware 3D hover effect',
    category: 'Components',
    image: 'images/project-14.png',
    url: 'https://ilya-begalko.github.io/direction-aware-3D-hover-effect/',
  },
  {
    id: 'todo-vue',
    title: 'To-Do List on Vue',
    category: 'Vue App',
    image: 'images/project-4.png',
    url: 'https://remarkable-rabanadas-370847.netlify.app/',
  },
  {
    id: 'keyboard-hero',
    title: 'Keyboard Hero App',
    category: 'Web App',
    image: 'images/project-5.png',
    url: 'https://ilya-begalko.github.io/KeyboardHero.github.io/',
  },
  {
    id: 'angular-unit-tests',
    title: 'Angular Unit Tests App',
    category: 'Angular App',
    image: 'images/project-12.png',
    url: 'https://master--friendly-starship-48cd71.netlify.app/',
  },
];
