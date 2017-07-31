<template lang="html">
  <div class="container">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link :to="{ name: 'Home' }" class="navbar-item">MessageHub</router-link>
        <div v-bind:class="{ 'is-active': isActive }" v-on:click="toggleNav" class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div v-bind:class="{ 'is-active': isActive }" class="navbar-menu">
        <div class="navbar-end">
          <router-link :to="{ name: 'Dashboard' }" class="navbar-item">Dashboard</router-link>
          <router-link to="https://github.com/JokeyChen/messagehub" class="navbar-item">GitHub</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>
</style>
