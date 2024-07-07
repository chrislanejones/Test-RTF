import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";
export const screenAtom = atom("home");
export const cakeAtom = atom(-1);
export const isMobileAtom = atom(false);

export const cakes = [
  {
    name: "Choco Bunny",
    description: "A cute hot chocolate bunny.",
    model: "choco_bunny",
    scale: 0.32,
  },
  {
    name: "Cake Roll",
    description: "A delicious cake roll with strawberries.",
    model: "cake_roll",
    scale: 0.6,
  },
  {
    name: "Flan Quesillo",
    description: "A traditional Venezuelan dessert.",
    model: "flan_quesillo",
    scale: 0.92,
  },
];

cakes.forEach((cake) => {
  useGLTF.preload(`/models/${cake.model}.glb`);
});

export const UI = () => {
  const [screen, setScreen] = useAtom(screenAtom);
  const [cake, setCake] = useAtom(cakeAtom);
  const [_, setIsMobile] = useAtom(isMobileAtom);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCake(0);
  }, [screen]);
  return (
    <main className="select-none text-white text-xl pointer-events-none">
      {/* HOME */}
      <motion.section
        animate={screen === "home" ? "visible" : "hidden"}
        className={`z-10 fixed bottom-4 md:bottom-auto 
        md:top-1/2 md:-translate-y-1/2 md:left-1/2 
        text-left p-4
        ${screen === "home" ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <motion.h2
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5,
              },
            },
            hidden: {
              opacity: 0,
              y: 50,
              transition: {
                delay: 0.6,
                duration: 1.5,
              },
            },
          }}
          initial={{
            opacity: 0,
            y: 50,
          }}
          className="text-6xl font-display text-white"
        >
          Welcome
        </motion.h2>
        <motion.p
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                duration: 1.5,
              },
            },
            hidden: {
              opacity: 0,
              y: 50,
              transition: {
                delay: 0.3,
                duration: 1.5,
              },
            },
          }}
          initial={{
            opacity: 0,
            y: 50,
          }}
          className="text-white/80"
        >
          We serve the <span className="text-indigo-300">cutest desserts</span>{" "}
          in town!
        </motion.p>
        <motion.button
          onClick={() => setScreen("menu")}
          className="text-sm bg-transparent hover:bg-white font-semibold
           text-white hover:text-black border-2
            border-white  transition-colors duration-500 px-4 py-2 mt-4 rounded-lg uppercase"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.6,
                duration: 1.5,
              },
            },
            hidden: {
              opacity: 0,
              y: 50,
              transition: {
                duration: 1.5,
              },
            },
          }}
          initial={{
            opacity: 0,
            y: 50,
          }}
        >
          La Carte
        </motion.button>
      </motion.section>

      {/* MENU */}
      <motion.section
        animate={screen === "menu" ? "visible" : "hidden"}
        className={`${
          screen === "menu" ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {cakes.map((item, idx) => (
          <motion.div
            key={idx}
            className="fixed top-[15%] w-full md:w-auto md:left-1/2 md:-translate-x-1/2 text-center  p-4 z-10"
            animate={cake === idx && screen === "menu" ? "visible" : "hidden"}
          >
            <motion.h3
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.5,
                  },
                },
                hidden: {
                  opacity: 0,
                  y: 50,
                  transition: {
                    duration: 1,
                    delay: 0.3,
                  },
                },
              }}
              initial={{
                opacity: 0,
                y: 50,
              }}
              className="text-5xl md:text-7xl font-semibold text-indigo-300"
            >
              {item.name}
            </motion.h3>
            <motion.p
              className="text-white/80"
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.3,
                    duration: 1,
                  },
                },
                hidden: {
                  opacity: 0,
                  y: 50,
                  transition: {
                    duration: 1.5,
                  },
                },
              }}
              initial={{
                opacity: 0,
                y: 50,
              }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        ))}
        <div className="z-10 fixed bottom-4 left-0 w-full md:w-auto md:left-1/2 md:-translate-x-1/2 text-center  p-4">
          <motion.h2
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                },
              },
              hidden: {
                opacity: 0,
                y: 50,
                transition: {
                  duration: 1.5,
                },
              },
            }}
            initial={{
              opacity: 0,
              y: 50,
            }}
            className="text-6xl font-display"
          >
            La Carte
          </motion.h2>
          <motion.p
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                },
              },
              hidden: {
                opacity: 0,
                y: 50,
                transition: {
                  duration: 1.5,
                },
              },
            }}
            initial={{
              opacity: 0,
              y: 50,
            }}
            className="text-white/80"
          >
            Discover our selection of desserts!
          </motion.p>
          <motion.button
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                },
              },
              hidden: {
                opacity: 0,
                y: 50,
                transition: {
                  duration: 1.5,
                },
              },
            }}
            initial={{
              opacity: 0,
              y: 50,
            }}
            onClick={() => setScreen("home")}
            className="bg-transparent hover:bg-white font-medium text-white hover:text-black border-2 border-white  transition-colors duration-500 px-4 py-2 mt-4 rounded-lg"
          >
            Back
          </motion.button>
        </div>
        <motion.button
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.5,
              },
            },
            hidden: {
              opacity: 0,
              x: -50,
              transition: {
                duration: 1.5,
              },
            },
          }}
          initial={{
            opacity: 0,
            x: -50,
          }}
          className="fixed left-4 md:left-1/4 top-1/2 -translate-y-1/2 z-10"
          onClick={() =>
            setCake((cake) => (cake - 1 + cakes.length) % cakes.length)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 stroke-white/70 hover:stroke-white transition-colors duration-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </motion.button>
        <motion.button
          className="fixed right-4 md:right-1/4 top-1/2 -translate-y-1/2 z-10"
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.5,
              },
            },
            hidden: {
              opacity: 0,
              x: 50,
              transition: {
                duration: 1.5,
              },
            },
          }}
          initial={{
            opacity: 0,
            x: 50,
          }}
          onClick={() => setCake((cake) => (cake + 1) % cakes.length)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 stroke-white/70 hover:stroke-white transition-colors duration-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </motion.button>
      </motion.section>
    </main>
  );
};
