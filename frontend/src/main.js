import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(require('vue-moment'))

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const httpLinkAuth = setContext((_, { headers }) => {
  // get the authentication token from localstorage if it exists
  const token = localStorage.getItem('USER_TOKEN')

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

// create the apollo client
const apolloClient = new ApolloClient({
  link: httpLinkAuth.concat(httpLink),
  cache: new InMemoryCache()
})

// install the vue plugin
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  provide: apolloProvider.provide(),
  components: { App },
  template: '<App/>'
})