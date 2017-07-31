<template>
  <div>
    <message-added :show.sync="messageAddedShow" :generatedKey="generatedKey"></message-added>
    <navbar></navbar>
    <router-view @messageAdded="messageAdded"></router-view>
  </div>
</template>

<script>
import MessageAdded from '@/components/MessageAdded'
import Navbar from '@/components/Navbar'
export default {
  components: { Navbar, MessageAdded },
  data () {
    return {
      messageAddedShow: false,
      generatedKey: ''
    }
  },
  methods: {
    messageAdded: function (generatedKey) {
      this.generatedKey = generatedKey
      this.messageAddedShow = !this.messageAddedShow
    }
  }
}
</script>

<style>
</style>
