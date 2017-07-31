import Vue from 'vue'

var apiUrl = ''

if (process.env.NODE_ENV === 'production') {
  apiUrl = 'https://messagehub-api.herokuapp.com'
} else {
  apiUrl = 'http://localhost:3000'
}

export default {
  createMessage (messageBody) {
    return Vue.http.post(apiUrl + '/messages', {body: messageBody})
  },
  getMessage (key) {
    return Vue.http.get(apiUrl + '/messages/' + key)
  },
  deleteMessage (key) {
    Vue.http.delete(apiUrl + '/messages/' + key).then(res => {}, res => {})
  }
}
