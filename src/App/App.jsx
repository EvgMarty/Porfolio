import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
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
            <Route path={ROUTES.HOME} element={<MainLayout />}>
              <Route
                index
                element={
                  <PageAnimation key={'about'}>
                    <About />
                  </PageAnimation>
                }
              />
              <Route
                path={ROUTES.WORKS}
                element={
                  <PageAnimation key="works">
                    <Works />
                  </PageAnimation>
                }
              />
              <Route
                path={ROUTES.WORKS_SLUG}
                element={
                  <PageAnimation key="project">
                    <ProjectPage />
                  </PageAnimation>
                }
              />
              <Route
                path={ROUTES.SCILLS}
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
