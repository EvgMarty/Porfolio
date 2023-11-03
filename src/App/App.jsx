import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop';
import MainLayout from '../layouts/MainLayouts';
import About from '../pages/About/About';
import Works from '../pages/Works/Works';
import Skills from '../pages/Skills/Skills';
import NotFound from '../pages/NotFound/NotFound';
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import PageAnimation from '../PageAnimation/PageAnimation';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <header className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route
                index
                element={
                  <PageAnimation key="about">
                    <About />
                  </PageAnimation>
                }
              />
              <Route
                path="works"
                element={
                  <PageAnimation key="works">
                    <Works />
                  </PageAnimation>
                }
              />
              <Route
                path="works/:slug"
                element={
                  <PageAnimation key="project">
                    <ProjectPage />
                  </PageAnimation>
                }
              />
              <Route
                path="skills"
                element={
                  <PageAnimation key="skills">
                    <Skills />
                  </PageAnimation>
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
      </BrowserRouter>
    </>
  );
};

export default App;
