const app = Vue.createApp({
  data() {
    return {
      url: "http://insightinternet.co.uk",
      showBooks: true,
      /* title: "Empire State Building",
      author: "Michael Scott",
      age: 30, */
      books: [
        {
          title: "Empire State Building",
          author: "Michael Scott",
          img: "./assets/book1.jpeg",
          isFav: true,
        },
        {
          title: "Name of the wind",
          author: "Patrick Rothfus",
          img: "./assets/book2.jpeg",
          isFav: false,
        },
        {
          title: "Empire Strikes Back",
          author: "Gearge Lukas",
          img: "./assets/book3.jpeg",
          isFav: true,
        },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e) {
      console.log(e);
      console.log(e.type);
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
