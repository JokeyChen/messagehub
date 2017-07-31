<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Search for Message</h1>
      <hr>
      <div class="field">
        <label class="label">Key</label>
        <div class="control">
          <input class="input" v-model="searchKey" placeholder="Enter the key here..." required>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary" @click="searchAndDeleteMessage" :class="{ 'is-loading': loading }">Submit</button>
        </div>
        <div class="control">
          <router-link :to="{ name: 'Dashboard' }" class="button">Back</router-link>
        </div>
      </div>
      <div v-if="searched">
        <p v-if="!found">Nothing found!</p>
        <div v-if="found">
          <article class="message is-warning">
            <div class="message-header">
              <p>
                The message has been automatically deleted. Refreshing the page will lose the message.
              </p>
            </div>
            <div class="message-body">
              <p>{{ messageBody }}</p>
            </div>
          </article>
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
      searchKey: '',
      messageBody: '',
      found: false,
      loading: false,
      searched: false
    }
  },
  methods: {
    searchAndDeleteMessage: function () {
      this.searched = false
      this.loading = true
      var searchKey = this.searchKey
      this.searchKey = '' // clear the input
      api.getMessage(searchKey).then(res => {
        if (res.status === 200) {
          // message is found
          this.searched = true
          this.loading = false
          this.found = true
          this.messageBody = res.body.body
          api.deleteMessage(searchKey)
        }
      }, res => {
        if (res.status === 404) {
          // message is not found
          this.searched = true
          this.loading = false
          this.found = false
        }
      })
    }
  }
}
</script>

<style>
</style>
