import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayouts';
import About from '../pages/About/About';
import Works from '../pages/Works/Works';
import Skills from '../pages/Skills/Skills';
import NotFound from '../pages/NotFound/NotFound';
import ProjectPage from '../pages/ProjectPage/ProjectPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<About />} />
              <Route path="works" element={<Works />} />
              <Route path="works/:slug" element={<ProjectPage />} />
              <Route path="skills" element={<Skills />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
      </BrowserRouter>
    </>
  );
};

export default App;
