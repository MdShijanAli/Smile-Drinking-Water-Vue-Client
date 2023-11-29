import { defineStore } from "pinia";
import productImg1 from '../assets/images/1_Mai-Bottle-1000x1000.png'
import productImg2 from '../assets/images/1.5.png'
import productImg3 from '../assets/images/200ml.png'
import productImg4 from '../assets/images/2Mai-Bottle-1000x1000.png'
import productImg5 from '../assets/images/330-ML.png'
import productImg6 from '../assets/images/4-G-NBR.png'
import productImg7 from '../assets/images/5-G-New.png'
import productImg8 from '../assets/images/5-Ltr.png'

export const useProductStore = defineStore('ProductStore', {
  state: () => ({
    products: [
      {
        id: 1,
        img: productImg1,
        title: "1.5 LTR"
      },
      {
        id: 2,
        img: productImg2,
        title: "2.5 LTR"
      },
      {
        id: 3,
        img: productImg3,
        title: "3.5 LTR"
      },
      {
        id: 4,
        img: productImg4,
        title: "4.5 LTR"
      },
      {
        id: 5,
        img: productImg5,
        title: "5.5 LTR"
      },
      {
        id: 6,
        img: productImg6,
        title: "6.5 LTR"
      },
      {
        id: 7,
        img: productImg7,
        title: "7.5 LTR"
      },
      {
        id: 8,
        img: productImg8,
        title: "8.5 LTR"
      },
    ]
  }),
  getters: {
    allProducts: (state) => state.products,
  }

})