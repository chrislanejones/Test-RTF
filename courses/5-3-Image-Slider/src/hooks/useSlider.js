import { create } from "zustand";

export const useSlider = create((set) => ({
  curSlide: 0,
  direction: "start",
  items: [
    {
      image:
        "textures/optimized/Default_authentic_futuristic_cottage_with_garden_outside_0.jpg",
      short: "PH",
      title: "Relax",
      description: "Enjoy your peace of mind.",
      color: "#201d24",
    },
    {
      image:
        "textures/optimized/Default_balinese_futuristic_villa_with_garden_outside_jungle_0.jpg",
      short: "TK",
      title: "Breath",
      color: "#263a27",
      description: "Feel the nature surrounding you.",
    },
    {
      image:
        "textures/optimized/Default_desert_arabic_futuristic_villa_with_garden_oasis_outsi_0.jpg",
      short: "OZ",
      title: "Travel",
      color: "#8b6d40",
      description: "Brave the unknown.",
    },
    {
      image:
        "textures/optimized/Default_scandinavian_ice_futuristic_villa_with_garden_outside_0.jpg",
      short: "SK",
      title: "Calm",
      color: "#72a3ca",
      description: "Free your mind.",
    },
    {
      image:
        "textures/optimized/Default_traditional_japanese_futuristic_villa_with_garden_outs_0.jpg",
      short: "AU",
      title: "Feel",
      color: "#c67e90",
      description: "Emotions and experiences.",
    },
  ],
  nextSlide: () =>
    set((state) => ({
      curSlide: (state.curSlide + 1) % state.items.length,
      direction: "next",
    })),
  prevSlide: () =>
    set((state) => ({
      curSlide: (state.curSlide - 1 + state.items.length) % state.items.length,
      direction: "prev",
    })),
}));
