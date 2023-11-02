import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Loading from '../components/Loading/Loading';
import Dog from './Dog';
import ContainerHeader from '../components/Containers/ContainerHeader/ContainerHeader';

const canvasStyle = {
  // контейнера холста
  maxWidth: '640px',
  maxHeight: '640px',
  touchAction: 'none',
  position: 'absolute',
  top: 0,
  zIndex: 0,
};

const Models = () => {
  return (
    <ContainerHeader>
      <Canvas style={canvasStyle}>
        <OrbitControls />
        <Suspense fallback={<Loading />}>
          <Dog />
        </Suspense>
      </Canvas>
    </ContainerHeader>
  );
};

export default Models;
