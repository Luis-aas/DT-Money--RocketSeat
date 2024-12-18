import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { ButtonCard, SummaryCard, SummaryContainer } from './style'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

interface SummaryProps {
  setFilter: React.Dispatch<React.SetStateAction<'income' | 'outcome' | 'all'>>
}

export function Summary({ setFilter }: SummaryProps) {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <ButtonCard onClick={() => setFilter('income')}>
        <SummaryCard>
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={32} color="#00b37e" />
          </header>

          <strong>{priceFormatter.format(summary.income)}</strong>
        </SummaryCard>
      </ButtonCard>

      <ButtonCard onClick={() => setFilter('outcome')}>
        <SummaryCard>
          <header>
            <span>Saídas</span>
            <ArrowCircleDown size={32} color="#f75a68" />
          </header>

          <strong>{priceFormatter.format(summary.outcome)}</strong>
        </SummaryCard>
      </ButtonCard>

      <ButtonCard onClick={() => setFilter('all')}>
        <SummaryCard variant="green">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff" />
          </header>

          <strong>{priceFormatter.format(summary.total)}</strong>
        </SummaryCard>
      </ButtonCard>
    </SummaryContainer>
  )
}
