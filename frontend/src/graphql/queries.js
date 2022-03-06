import gql from 'graphql-tag';

export const TRANSACTIONS_QUERY = gql`
  query TransactionsQuery($startDate: DateTime, $endDate: DateTime) {
    transactions: getTransactions(startDate: $startDate, endDate: $endDate) {
      id
      account
      transactionDate
      currency
      amount
      description
      reference
      status
    },
  }
`

export const TRANSACTION_QUERY = gql`
  query TransactionQuery($id: String!) {
    transaction: transactionById(id: $id) {
      account
      transactionDate
      currency
      amount
      description
      reference
      category
      status
    }
  }
`