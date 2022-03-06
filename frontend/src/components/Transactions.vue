<template>
  <div>
    <h2>All Transactions</h2>
    <div>
      <label for="startDate">Start Date</label>
      <input type="month" v-model="startDate" id="startDate">
      <label for="endDate">End Date</label>
      <input type="month" v-model="endDate" id="endDate">
    </div>
    <div v-if="$apollo.loading">Loading...</div>
    <table v-else class="ui celled table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Account</th>
          <th>Amount</th>
          <th>Currency</th>
          <th>Description</th>
          <th>Reference</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions">
          <td data-label="Date">{{ transaction.transactionDate | moment("MMMM Do YYYY, h:mm:ss a") }}</td>
          <td data-label="Account">{{ transaction.account }}</td>
          <td data-label="Amount">{{ transaction.amount }}</td>
          <td data-label="Currency">{{ transaction.currency }}</td>
          <td data-label="Description">{{ transaction.description }}</td>
          <td data-label="Reference">{{ transaction.reference }}</td>
          <td data-label="Status">{{ transaction.status }}</td>
          <td data-label="Action"><button @click="viewTransaction(transaction.id)">View</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { TRANSACTIONS_QUERY } from '@/graphql/queries'

export default {
  name: 'TransactionsList',
  data () {
    return {
      transactions: [],
      startDate: "",
      endDate: ""
    }
  },
  methods: {
    viewTransaction(id) {
      this.$router.push(`/${id}`);
    }
  },
  apollo: {
    transactions: {
      query: TRANSACTIONS_QUERY,
      variables () {
        return {
          startDate: this.startDate || null,
          endDate: this.endDate || null
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
