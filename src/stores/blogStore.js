import { defineStore } from "pinia";


export const useBlogStore = defineStore('BlogStore', {
  state: () => ({
    blogs: [
      {
        id: 1,
        img: "https://www.unicef.org/turkiye/sites/unicef.org.turkiye/files/styles/press_release_feature/public/UN0389288.jpg?itok=x1xPAXk-",
        title: "Smile Drinking Water",
        description: "Smile Drinking Water is one of the most popular and beautiful water company in bangladesh. Smile Drinking Water is one of the most popular and beautiful water company in bangladesh. Smile Drinking Water is one of the most popular and beautiful water company in bangladesh",
        date: "27/11/2023"
      },
      {
        id: 2,
        img: "https://i.pinimg.com/736x/a6/a8/4e/a6a84ebc3220055702982b340ae4d943.jpg",
        title: "Drinking Water Smile",
        description: "Smile Drinking Water is one of the most popular and beautiful water company in bangladesh. Smile Drinking Water is one of the most popular and beautiful water company in bangladesh. Smile Drinking Water is one of the most popular and beautiful water company in bangladesh",
        date: "22/11/2023"
      },
      {
        id: 3,
        img: "https://pbs.twimg.com/media/Em24bjnXMAACJ6W.jpg",
        title: "Water Smile Drinking",
        description: "Smile Drinking Water is one of the most popular and beautiful water company in bangladesh. Smile Drinking Water is one of the most popular and beautiful water company in bangladesh. Smile Drinking Water is one of the most popular and beautiful water company in bangladesh",
        date: "26/11/2023"
      },
      {
        id: 4,
        img: "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2020/1/31/GettyImages-1055505160.jpg.rend.hgtvcom.406.406.suffix/1580501770222.jpeg",
        title: "Smile Drinking Oil",
        description: "Smile Drinking Water is one of the most popular and beautiful water company in bangladesh. Smile Drinking Water is one of the most popular and beautiful water company in bangladesh. Smile Drinking Water is one of the most popular and beautiful water company in bangladesh",
        date: "28/11/2023"
      },
    ]
  }),
  getters: {
    allBlogs: (state) => state.blogs,
  },

});