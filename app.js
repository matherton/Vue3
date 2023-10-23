const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "Empire State Building",
      author: "Michael Scott",
      age: 30,
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
  },
});

app.mount("#app");
