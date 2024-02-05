export const config = {
  sections: ["home", "skills", "projects", "contact"],
  home: {
    title: "Chris",
    midtitle: "Lane",
    subtitle: "Jones",
  },
  skills: [
    {
      name: "React",
      icon: "icons/react-native.png",
      level: 80,
    },
    {
      name: "JavaScript",
      icon: "icons/javascript.png",
      level: 70,
    },
    {
      name: "Three.js",
      icon: "icons/threejs.png",
      level: 70,
    },
    {
      name: "Blender",
      icon: "icons/blender-3d.png",
      level: 50,
    },
  ],
  projects: [
    {
      name: "Dissolve tutorial",
      description: "Create a dissolve effect with React Three Fiber",
      image: "projects/project1.jpg",
      link: "https://www.youtube.com/watch?v=ma9t7HAOZRg",
    },
    {
      name: "Transition effect",
      description: "Shader based transition effect",
      image: "projects/project2.jpg",
      link: "https://www.youtube.com/watch?v=SOF7GBmC6gE",
    },
    {
      name: "Portals",
      description: "Create portals with React Three Fiber",
      image: "projects/project3.jpg",
      link: "https://www.youtube.com/watch?v=2W_VR92Pqgs",
    },
    {
      name: "3D Portfolio",
      description: "Learn how to build a 3D portfolio",
      image: "projects/project4.jpg",
      link: "https://www.youtube.com/watch?v=pGMKIyALcK0",
    },
  ],
  contact: {
    mail: "chrilanejones@gmail.com",
  },
};
