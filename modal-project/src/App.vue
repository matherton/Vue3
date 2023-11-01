<template>
  <h1>{{ title }}</h1>

  <input type="text" ref="name" />
  <button @click="handleClick">Press me and check the console</button>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal" />
  </div>
  <button @click.alt="toggleModal">Show Modal(alt)</button>
</template>

<script>
import Modal from "./components/Modal";
export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App :)",
      header: "Sign up for the Giveaway!",
      text: "Grab your ninja swag for half price!",
      showModal: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("Active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-weight: bold;
  color: #2c3e50;
  display: block;
  max-width: fit-content;
  margin: 0.85rem auto;
  padding-bottom: 0.25rem;
  border-bottom: 0.25rem dotted #2c3e50;
}
</style>
