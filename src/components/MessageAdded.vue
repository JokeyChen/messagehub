<template>
  <div class="notification is-success" v-if="show">
    <button class="delete" @click="cancelMessageAdded"></button>
    The message will be stored for 30 minutes. Copy the key to the other person: <strong>{{ generatedKey }}</strong>
  </div>
</template>

<script>
export default {
  props: ['show', 'generatedKey'],
  methods: {
    cancelMessageAdded: function () {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style>
</style>
