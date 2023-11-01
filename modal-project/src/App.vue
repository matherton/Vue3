<template>
  <h1>{{ title }}</h1>

  <input type="text" ref="name" />
  <button @click="handleClick">Press me and check the console</button>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </div>
  <div v-if="showModal2">
    <Modal @close="toggleModal2">
      <h1>Give us a call!</h1>
      <template v-slot:tel>
        <a href="tel:0131234567">0131234567</a>
      </template>
    </Modal>
  </div>
  <button @click.alt="toggleModal">Show Modal(alt)</button>
  <button @click="toggleModal2">open 2nd Modal</button>
</template>

<script>
//challenge
//1. create an extra button to open a different modal
//2. use the  same modal component but pass in different template (slot)
//3. Use a different method (eg toggleModal2) and data (showModal2) to toggle the modal

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
      showModal2: false,
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
    toggleModal2() {
      this.showModal2 = !this.showModal2;
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
