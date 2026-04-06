import { useMemo } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from 'recharts'
import { Election } from '../types'

interface Props {
  elections: Election[]
}

interface PollsterStats {
  name: string
  totalPolls: number
  meanAbsError: number
  elections: number
}

export default function PollsterRanking({ elections }: Props) {
  const stats = useMemo(() => {
    const pollsterData = new Map<string, { errors: number[], elections: Set<string> }>()

    elections.forEach(election => {
      election.rounds.forEach(round => {
        round.polls.forEach(poll => {
          if (!pollsterData.has(poll.pollster)) {
            pollsterData.set(poll.pollster, { errors: [], elections: new Set() })
          }
          const data = pollsterData.get(poll.pollster)!
          data.elections.add(election.id)

          // Calculer l'erreur de ce sondage
          round.candidates.forEach(candidate => {
            const pollScore = poll.scores[candidate.id]
            const result = round.results.find(r => r.candidateId === candidate.id)
            if (pollScore !== undefined && result) {
              data.errors.push(Math.abs(pollScore - result.score))
            }
          })
        })
      })
    })

    const result: PollsterStats[] = []
    pollsterData.forEach((data, name) => {
      if (data.errors.length > 0) {
        result.push({
          name,
          totalPolls: data.errors.length,
          meanAbsError: data.errors.reduce((a, b) => a + b, 0) / data.errors.length,
          elections: data.elections.size,
        })
      }
    })

    return result.sort((a, b) => a.meanAbsError - b.meanAbsError)
  }, [elections])

  const getBarColor = (mae: number) => {
    if (mae <= 1.5) return '#22c55e'
    if (mae <= 2.5) return '#eab308'
    if (mae <= 3.5) return '#f97316'
    return '#ef4444'
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null
    const stat = stats.find(s => s.name === label)
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs">
        <p className="font-semibold text-gray-900 mb-2">{label}</p>
        <div className="space-y-1">
          <div className="flex justify-between gap-4">
            <span className="text-gray-500">Erreur moyenne</span>
            <span className="font-mono font-semibold">{stat?.meanAbsError.toFixed(2)} pts</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-500">Prédictions</span>
            <span className="font-mono">{stat?.totalPolls}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-500">Élections couvertes</span>
            <span className="font-mono">{stat?.elections}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Classement des instituts
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">
          Erreur moyenne absolue par institut de sondage (toutes élections)
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={stats}
          layout="vertical"
          margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            type="number"
            tick={{ fontSize: 10 }}
            stroke="#9ca3af"
            tickFormatter={(v) => `${v} pts`}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 11 }}
            stroke="#9ca3af"
            width={120}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="meanAbsError" radius={[0, 4, 4, 0]} maxBarSize={24}>
            {stats.map((entry, index) => (
              <Cell key={index} fill={getBarColor(entry.meanAbsError)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
