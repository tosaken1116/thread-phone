import * as THREE from "three";
import { Geist, Geist_Mono } from "next/font/google";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import CardShopDrawer from "@/components/CardShopDrawer";

export default function Home() {
  return (
    <div className={`w-full h-full`}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[0, -1, 0]} rotation={[-Math.PI / 15, 0, 0]} />
      </Canvas>
      <CardShopDrawer />
    </div>
  );
}

function Box(props: ThreeElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[10, 10, 0.5]} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "rgb(129, 212, 102)"}
      />
    </mesh>
  );
}
