import { defineStore } from "pinia";
import img1 from "../assets/images/brand-1.png"
import img2 from "../assets/images/brand-2.png"
import img3 from "../assets/images/brand-3.png"
import img4 from "../assets/images/brand-4.png"
import img5 from "../assets/images/brand-5.png"
import img6 from "../assets/images/brand-6.png"
import img7 from "../assets/images/brand-7.png"
import img8 from "../assets/images/brand-8.png"
import img9 from "../assets/images/brand-9.png"

export const useBrandLogStore = defineStore('BrandLogoStore', {
  state: () => ({
    brandLogos: [img1,img2,img3,img4,img5,img6,img7,img8,img9]
  }),
  getters: {
    allLogos: (state) =>state.brandLogos
  }
})