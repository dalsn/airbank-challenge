<template>
  <div>
    <h2>Transaction Details</h2>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else class="ui items">
      <div class="item">
        <div class="content">
          <p class="header">{{ transaction.account }}</p>
          <p><small>{{ transaction.transactionDate | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</small></p>
          <div class="meta">
            <strong>Amount:</strong> <span>{{ transaction.currency }} {{ transaction.amount }}</span>
          </div>
          <div class="description">
            <p><strong>Category:</strong> {{ transaction.category }}</p>
            <p><strong>Description:</strong> {{ transaction.description }}</p>
            <p><strong>Ref:</strong> {{ transaction.reference }}</p>
            <p><strong>Status:</strong> {{ transaction.status }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TRANSACTION_QUERY } from '@/graphql/queries'

export default {
  name: 'Transaction',
  data () {
    return {
      transaction: {}
    }
  },
  apollo: {
    transaction: {
      query: TRANSACTION_QUERY,
      variables () {
        return {
          id: this.$route.params.id
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
