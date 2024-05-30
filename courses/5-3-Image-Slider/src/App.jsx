import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { ImageSlider } from "./ImageSlider";

function App() {
  return (
    <>
      <main className="bg-black">
        <section className="w-full h-screen relative">
          <motion.img
            src="images/logo.png"
            className="absolute top-4 left-4 w-20 h-10 z-10 brightness-0 invert object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              bounce: 0.2,
            }}
          />
          <motion.div
            className="absolute top-6 right-6 z-10"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              bounce: 0.2,
              type: "spring",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </motion.div>
          <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
            <color attach="background" args={["#201d24"]} />
            <ImageSlider />
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial color="white" />
            </mesh>
          </Canvas>
        </section>
        <section className="h-screen grid place-content-center">
          <p className="text-white">Work in progress...</p>
        </section>
      </main>
    </>
  );
}

export default App;
