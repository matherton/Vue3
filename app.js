const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      /* title: "Empire State Building",
      author: "Michael Scott",
      age: 30, */
      books: [
        { title: "Empire State Building", author: "Michael Scott", age: 30 },
        { title: "Name of the wind", author: "Patrick Rothfus", age: 43 },
        { title: "Empire Strikes Back", author: "Gearge Lukas", age: 57 },
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
