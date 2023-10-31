import { v4 as uuidv4 } from 'uuid';

export const works = [
  {
    id: uuidv4(),
    name: 'AirPods',
    img: './img/projects/airPods.png',
    description: 'Dynamic landing page for headphones',
  },
  {
    id: uuidv4(),
    name: 'SyncSln',
    img: './img/projects/syncSln.png',
    description:
      'Multi-page website for a company providing cloud storage services',
  },
];

export const react = [
  {
    id: uuidv4(),
    name: 'Book Library',
    img: './img/projects/bookLibrary.png',
    description:
      'Application to add books manually, randomly or get books by api. Also the ability to filter books and search',
  },
  {
    id: uuidv4(),
    name: 'ToDo React',
    img: './img/projects/todo-react.png',
    description: 'Application for adding daily tasks',
  },
];

export const javaScript = [
  {
    id: uuidv4(),
    name: 'Hector',
    img: './img/projects/hector.png',
    description:
      'Clothing store with multiple tabs, product rendering, shopping cart, popups and mobile adaptation',
  },
  {
    id: uuidv4(),
    name: 'Todo JS',
    img: './img/projects/todo.png',
    description: 'Application for adding daily tasks',
  },
  {
    id: uuidv4(),
    name: 'Centarea',
    img: './img/projects/centarea.png',
    description:
      'Practiced js, product search, adding items to cart, favorites and displaying product cards, slider, tabs',
  },
  {
    id: uuidv4(),
    name: 'Old portfolio',
    img: './img/projects/portfolio.png',
    description: 'Previous version of my portfolio before rebranding',
  },
  {
    id: uuidv4(),
    name: 'Delivery of rolls',
    img: './img/projects/basket-js.png',
    description:
      'Obychnaya cart. Add item to cart counting of goods in cart and order value',
  },
  {
    id: uuidv4(),
    name: 'Beauty salon',
    img: './img/projects/salon.png',
    description: 'Multi-page layout of a website for providing beauty services',
  },
];

export const projectCategories = [
  {
    id: uuidv4(),
    title: 'Works',
    projects: works,
  },
  {
    id: uuidv4(),
    title: 'React project',
    projects: react,
  },
  {
    id: uuidv4(),
    title: 'JS project',
    projects: javaScript,
  },
];

export const scills = [
  {
    id: uuidv4(),
    name: 'VS Code',
    img: './img/scills/vsCode.svg',
  },
  {
    id: uuidv4(),
    name: 'HTML',
    img: './img/scills/html.svg',
  },
  {
    id: uuidv4(),
    name: 'CSS',
    img: './img/scills/css.svg',
  },
  {
    id: uuidv4(),
    name: 'SASS',
    img: './img/scills/sass.svg',
  },
  {
    id: uuidv4(),
    name: 'JavaScript',
    img: './img/scills/js.svg',
  },
  {
    id: uuidv4(),
    name: 'React',
    img: './img/scills/react.svg',
  },
  {
    id: uuidv4(),
    name: 'Redux',
    img: './img/scills/redux.svg',
  },
  {
    id: uuidv4(),
    name: 'Webpack',
    img: './img/scills/webpack.svg',
  },
  {
    id: uuidv4(),
    name: 'NPM',
    img: './img/scills/npm.svg',
  },
  {
    id: uuidv4(),
    name: 'git/gitHub',
    img: './img/scills/gitHub.svg',
  },
];
