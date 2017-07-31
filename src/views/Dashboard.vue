<template>
  <section class="hero is-large has-text-centered">
    <div class="hero-body">
      <div class="container">
        <div class="hero-buttons">
          <router-link :to="{ name: 'NewMessage' }" class="button is-medium is-dark">Send message</router-link>
          <router-link :to="{ name: 'SearchMessage' }" class="button is-medium is-light">Receive message</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style>
</style>
