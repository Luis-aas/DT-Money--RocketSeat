import { useMemo } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useSummary(filter: 'income' | 'outcome' | 'all' = 'all') {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const filteredTransactions = useMemo(() => {
    if (filter === 'all') return transactions
    return transactions.filter((transaction) => transaction.type === filter)
  }, [transactions, filter])

  const summary = useMemo(() => {
    return filteredTransactions.reduce(
      (acc, transactions) => {
        if (transactions.type === 'income') {
          acc.income += transactions.price
          acc.total += transactions.price
        } else {
          acc.outcome += transactions.price
          acc.total -= transactions.price
        }

        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [filteredTransactions])

  return summary
}
