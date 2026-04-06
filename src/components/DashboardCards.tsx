import { ElectionAccuracySummary, ElectionRound } from '../types'
import { formatDate } from '../utils/analysis'
import { Target, TrendingUp, BarChart3, Users } from 'lucide-react'

interface Props {
  summary: ElectionAccuracySummary
  round: ElectionRound
}

export default function DashboardCards({ summary, round }: Props) {
  const cards = [
    {
      label: 'Erreur moyenne',
      value: `${summary.meanAbsoluteError.toFixed(1)} pts`,
      description: 'Écart moyen absolu entre dernier sondage et résultat',
      icon: Target,
      color: summary.meanAbsoluteError <= 1.5 ? 'text-green-600 bg-green-50' :
             summary.meanAbsoluteError <= 3 ? 'text-yellow-600 bg-yellow-50' :
             'text-red-600 bg-red-50',
    },
    {
      label: 'Erreur max',
      value: `${summary.maxError.toFixed(1)} pts`,
      description: 'Plus grand écart observé pour un candidat',
      icon: TrendingUp,
      color: summary.maxError <= 3 ? 'text-green-600 bg-green-50' :
             summary.maxError <= 5 ? 'text-yellow-600 bg-yellow-50' :
             'text-red-600 bg-red-50',
    },
    {
      label: 'Candidats',
      value: `${round.candidates.length}`,
      description: `Tour ${round.round} - ${formatDate(round.date)}`,
      icon: Users,
      color: 'text-blue-600 bg-blue-50',
    },
    {
      label: 'Sondages',
      value: `${round.polls.length}`,
      description: `De ${round.polls.length > 0 ? formatDate(round.polls[0].date) : 'N/A'} à ${round.polls.length > 0 ? formatDate(round.polls[round.polls.length - 1].date) : 'N/A'}`,
      icon: BarChart3,
      color: 'text-purple-600 bg-purple-50',
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map(card => (
        <div
          key={card.label}
          className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              {card.label}
            </span>
            <div className={`p-2 rounded-lg ${card.color}`}>
              <card.icon className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">{card.value}</p>
          <p className="text-xs text-gray-500 mt-1">{card.description}</p>
        </div>
      ))}
    </div>
  )
}
