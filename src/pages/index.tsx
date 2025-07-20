import { Canvas } from "@react-three/fiber";
import CardShopDrawer from "@/domain/card/components/CardShopDrawer/CardShopDrawer";
import { OrbitControls } from '@react-three/drei'
import { PhoneBox } from "@/components/PhoneBox";

export default function Home() {
  return (
    <div className={`w-full h-[100vh]`}>
      <Canvas
        camera={{ position: [0, 0, 15] }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <OrbitControls />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

        <PhoneBox/>

      </Canvas>
      <CardShopDrawer />
    </div>
  );
}

