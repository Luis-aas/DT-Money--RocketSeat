import { useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function Transactions() {
  const [filter, setFilter] = useState<'income' | 'outcome' | 'all'>('all')
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const filteredTransactions =
    filter === 'all'
      ? transactions
      : transactions.filter((transaction) => transaction.type === filter)

  return (
    <div>
      <Header />
      <Summary setFilter={setFilter} />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {filteredTransactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
