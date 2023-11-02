import { v4 as uuidv4 } from 'uuid';

export const works = [
  {
    id: uuidv4(),
    slug: 'air-pods',
    name: 'AirPods',
    year: '2023',
    stack: 'html, css, js',
    website: 'https://evgmarty.github.io/AirPods/',
    repository: 'https://github.com/EvgMarty/AirPods',
    img: '/img/projects/airPods.png',
    presentation: 'Dynamic landing page for headphones',
    description:
      'Dynamics? YES!!! All content on the site changes when you select a product color.',
  },
  {
    id: uuidv4(),
    name: 'SyncSln',
    slug: 'sync-sln',
    year: '2023',
    stack: 'jsx, scss, react',
    website: 'https://sync-sln.vercel.app/',
    repository: 'https://github.com/EvgMarty/SyncSln',
    img: '/img/projects/syncSln.png',
    presentation:
      'Multi-page website for a company providing cloud storage services',
    description:
      'Website of a German company engaged in providing cloud storage services. Developed the entire visible part of the site. As well as routing setup, data retrieval from forms, mobile adaptation.',
  },
];

export const react = [
  {
    id: uuidv4(),
    name: 'Book Library',
    slug: 'book-library',
    year: '2023',
    stack: 'jsx, scss, react, redux/toolkit',
    website: 'https://book-library-three-opal.vercel.app/',
    repository: 'https://github.com/EvgMarty/BookLibraryApp',
    img: '/img/projects/bookLibrary.png',
    presentation: 'Application to add books',
    description:
      'Adding a list of books, functionally a book can be added manually, randomly or retrieved via api. All interaction is done with redux/toolkit. Book search and filtering is also implemented.',
  },
  {
    id: uuidv4(),
    name: 'ToDo React',
    slug: 'todo-react',
    year: '2023',
    stack: 'jsx, scss, react',
    website: 'https://to-do-react-delta-silk.vercel.app/',
    repository: 'https://github.com/EvgMarty/ToDo-React',
    img: '/img/projects/todo-react.png',
    presentation: 'Application for adding daily tasks',
    description:
      'Task list, for adding daily tasks. You can mark a task as completed , delete a task, clear the entire task list or only the marked ones.',
  },
  {
    id: uuidv4(),
    name: 'Portfolio',
    slug: 'portfolio',
    year: '2023',
    stack: 'jsx, scss, react, react-three/fiber',
    website: 'https://book-library-three-opal.vercel.app/',
    repository: 'https://github.com/EvgMarty/Porfolio',
    img: '/img/projects/newPortfolio.png',
    presentation: 'Rebranding Portfolio',
    description:
      'Portfolio Rebranding. Built animations using @react-three/fiber. Implemented navigation using react-router-dom. Displayed data-driven pages and utilized dynamic paths. Application of the "night and day" theme. Adaptation for mobile devices.',
  },
];

export const javaScript = [
  {
    id: uuidv4(),
    name: 'Hector',
    slug: 'hector',
    year: '2023',
    stack: 'html, scss, js',
    website: 'https://evgmarty.github.io/Hector/',
    repository: 'https://github.com/EvgMarty/Hector',
    img: '/img/projects/hector.png',
    presentation: 'Clothing store',
    description:
      'Basic store functionality. Adding goods to cart, removing your product from cart, calculating the cost of the order, marking liked goods, pop-ups, tabs, rendering of goods by category, sliders, mobile adaptation.',
  },
  {
    id: uuidv4(),
    name: 'Todo JS',
    slug: 'todo-js',
    year: '2023',
    stack: 'html, css, js',
    website: 'https://evgmarty.github.io/tasksFoToday/',
    repository: 'https://github.com/EvgMarty/tasksFoToday',
    img: '/img/projects/todo.png',
    presentation: 'Adding daily tasks',
    description: '',
  },
  {
    id: uuidv4(),
    name: 'Centarea',
    slug: 'centarea',
    year: '2023',
    stack: 'html, scss, js',
    website: 'https://evgmarty.github.io/Store/',
    repository: 'https://github.com/EvgMarty/Store',
    img: '/img/projects/centarea.png',
    presentation: 'Practiced JavaSctipt',
    description:
      'Practical project. We practiced skills of conditional rendering and product search on the page.',
  },
  {
    id: uuidv4(),
    name: 'Old portfolio',
    slug: 'old-portfolio',
    year: '2023',
    stack: 'html, css, js',
    website: 'https://evgmarty.github.io/my-portfolio/',
    repository: 'https://github.com/EvgMarty/my-portfolio',
    img: '/img/projects/portfolio.png',
    presentation: 'Previous version of my portfolio before rebranding',
    description:
      'An older version of the portfolio. From interesting only night theme.',
  },
  {
    id: uuidv4(),
    name: 'Delivery of rolls',
    slug: 'delivery-of-rolls',
    year: '2023',
    stack: 'html, css, js',
    website: 'https://evgmarty.github.io/basket/',
    repository: 'https://github.com/EvgMarty/basket',
    img: '/img/projects/basket-js.png',
    presentation: 'Checkout and shopping cart',
    description:
      'Checkout cart. Adding removing goods, conditional rendering, calculating the cost of goods.',
  },
  {
    id: uuidv4(),
    name: 'Beauty salon',
    slug: 'bauty-salon',
    year: '2023',
    stack: 'html, scss, js',
    website: 'https://evgmarty.github.io/Beauty_Salon/',
    repository: 'https://github.com/EvgMarty/Beauty_Salon',
    img: '/img/projects/salon.png',
    presentation: 'Multi-page website',
    description:
      'Layout of a multi-page website for providing beauty services.',
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
    img: '/img/scills/vsCode.svg',
  },
  {
    id: uuidv4(),
    name: 'HTML',
    img: '/img/scills/html.svg',
  },
  {
    id: uuidv4(),
    name: 'CSS',
    img: '/img/scills/css.svg',
  },
  {
    id: uuidv4(),
    name: 'SASS',
    img: '/img/scills/sass.svg',
  },
  {
    id: uuidv4(),
    name: 'JavaScript',
    img: '/img/scills/js.svg',
  },
  {
    id: uuidv4(),
    name: 'React',
    img: '/img/scills/react.svg',
  },
  {
    id: uuidv4(),
    name: 'Redux',
    img: '/img/scills/redux.svg',
  },
  {
    id: uuidv4(),
    name: 'Webpack',
    img: '/img/scills/webpack.svg',
  },
  {
    id: uuidv4(),
    name: 'NPM',
    img: '/img/scills/npm.svg',
  },
  {
    id: uuidv4(),
    name: 'git/gitHub',
    img: '/img/scills/gitHub.svg',
  },
];
