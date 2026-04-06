import { useState, useMemo } from 'react'
import { elections } from './data/elections'
import { computeElectionSummary } from './utils/analysis'
import { ElectionAccuracySummary } from './types'
import Header from './components/Header'
import ElectionSelector from './components/ElectionSelector'
import RoundToggle from './components/RoundToggle'
import DashboardCards from './components/DashboardCards'
import PollTimeline from './components/PollTimeline'
import AccuracyComparison from './components/AccuracyComparison'
import AccuracyTable from './components/AccuracyTable'
import HistoricalTrend from './components/HistoricalTrend'
import PollsterRanking from './components/PollsterRanking'

export default function App() {
  const [selectedElectionId, setSelectedElectionId] = useState(elections[0].id)
  const [selectedRound, setSelectedRound] = useState<1 | 2>(1)

  const election = useMemo(
    () => elections.find(e => e.id === selectedElectionId) ?? elections[0],
    [selectedElectionId]
  )

  const round = useMemo(() => {
    const r = election.rounds.find(r => r.round === selectedRound)
    return r ?? election.rounds[0]
  }, [election, selectedRound])

  const summary: ElectionAccuracySummary = useMemo(
    () => computeElectionSummary(election, round),
    [election, round]
  )

  const allSummaries = useMemo(() => {
    return elections.flatMap(e =>
      e.rounds.map(r => computeElectionSummary(e, r))
    )
  }, [])

  const hasSecondRound = election.rounds.some(r => r.round === 2)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sélecteurs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <ElectionSelector
            elections={elections}
            selectedId={selectedElectionId}
            onChange={(id) => {
              setSelectedElectionId(id)
              setSelectedRound(1)
            }}
          />
          {hasSecondRound && (
            <RoundToggle
              selected={selectedRound}
              onChange={setSelectedRound}
            />
          )}
        </div>

        {/* Cartes résumé */}
        <DashboardCards summary={summary} round={round} />

        {/* Graphiques principaux */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
          <PollTimeline round={round} election={election} />
          <AccuracyComparison summary={summary} />
        </div>

        {/* Tableau détaillé */}
        <div className="mt-8">
          <AccuracyTable summary={summary} />
        </div>

        {/* Tendance historique + classement instituts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
          <HistoricalTrend summaries={allSummaries} />
          <PollsterRanking elections={elections} />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          <p>Sondoscope - Analyse de la fiabilité des sondages en France</p>
          <p className="mt-1">
            Données compilées à partir de sources publiques. Les sondages sont des estimations et non des prédictions.
          </p>
        </div>
      </footer>
    </div>
  )
}
