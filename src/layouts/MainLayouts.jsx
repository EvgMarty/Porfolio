import { Outlet } from 'react-router-dom';
import Models from '../Models/Models';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Models />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
