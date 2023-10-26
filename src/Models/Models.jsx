import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Loading from '../components/Loading/Loading';
import Dog from './Dog';

const canvasStyle = {
  // контейнера холста
  width: '640px',
  height: '640px',
  display: 'flex',
  touchAction: 'none',
};

const Models = () => {
  return (
    <Canvas style={canvasStyle}>
      <OrbitControls />
      <Suspense fallback={<Loading />}>
        <Dog />
      </Suspense>
    </Canvas>
  );
};

export default Models;
