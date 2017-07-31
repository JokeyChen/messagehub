<template>
  <section class="section">
    <div class="container">
      <h1 class="title">New Message</h1>
      <hr>
      <div class="notification is-danger" v-if="bodyIsEmpty">
        <button class="delete" @click="deleteError"></button>
        <p>Body cannot be empty</p>
      </div>
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea v-model="body" placeholder="Enter the message here..." class="textarea"></textarea>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary" :class="{ 'is-loading': loading }" @click="saveMessage">Submit</button>
        </div>
        <div class="control">
          <router-link :to="{ name: 'Dashboard' }" class="button">Back</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      body: '',
      bodyIsEmpty: false,
      loading: false
    }
  },
  methods: {
    saveMessage: function () {
      if (this.loading === true) return // prevent resubmit during loading
      if (this.body) {
        this.loading = true // put a loading sign
        api.createMessage(this.body).then(res => {
          var generatedKey = res.body.key
          this.$emit('messageAdded', generatedKey)
          this.$router.push({name: 'Dashboard'})
          this.loading = false
        })
      } else {
        this.bodyIsEmpty = true // indicate body cannot be empty
      }
    },
    deleteError: function () {
      this.bodyIsEmpty = false
    }
  }
}
</script>

<style>
</style>
