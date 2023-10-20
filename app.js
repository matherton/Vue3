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
  },
});

app.mount("#app");
