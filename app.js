const app = Vue.createApp({
  data() {
    return {
      title: "Empire State Building",
      author: "Michael Scott",
      age: 30,
    };
  },
  methods: {
    changeTitle(title) {
      console.log("you clicked me");
      this.title = title;
    },
  },
});

app.mount("#app");
