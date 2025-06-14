import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import * as THREE from "three";

// Componente que maneja la carga y renderizado del modelo 3D
const Modelo3D = () => {
  // Carga los materiales y el modelo
  const materials = useLoader(MTLLoader, "/Logo3D/material.mtl");
  const obj = useLoader(
    OBJLoader,
    "/Logo3D/Logo.obj",
    (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    }
  );

  // Ajusta la posición y las sombras del modelo
  React.useEffect(() => {
    if (obj) {
      // Centra el modelo
      let box = new THREE.Box3().setFromObject(obj);
      let center = new THREE.Vector3();
      box.getCenter(center);
      obj.position.sub(center);

      // Habilita sombras para cada malla
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [obj]);

  return <primitive object={obj} scale={6} />;
};

// Pantalla de carga mientras el modelo se importa
const LoadingScreen = () => {
  return (
    <Html center>
      <div className="text-white text-lg">Cargando modelo 3D...</div>
    </Html>
  );
};

// Componente principal que configura la escena 3D
const ModeloFooter = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        shadows
        gl={{ preserveDrawingBuffer: true }}
      >
        {/* Fondo transparente */}
        <color args={["transparent"]} />
        
        {/* Configuración de luces */}
        <ambientLight intensity={2} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={1.5}
          castShadow
        />

        {/* Renderizado del modelo con fallback */}
        <Suspense fallback={<LoadingScreen />}>
          <Modelo3D />
        </Suspense>

        {/* Controles de cámara */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={5}
        />
      </Canvas>
    </div>
  );
};

export default ModeloFooter;