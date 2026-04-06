import { useMemo, useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Legend,
} from 'recharts'
import { Election, ElectionRound } from '../types'
import { prepareTimelineData, formatDate } from '../utils/analysis'

interface Props {
  round: ElectionRound
  election: Election
}

export default function PollTimeline({ round, election }: Props) {
  const [hiddenCandidates, setHiddenCandidates] = useState<Set<string>>(new Set())

  const data = useMemo(() => prepareTimelineData(round), [round])

  const toggleCandidate = (id: string) => {
    setHiddenCandidates(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  // Candidats principaux (> 3% au résultat)
  const mainCandidates = round.candidates.filter(c => {
    const result = round.results.find(r => r.candidateId === c.id)
    return result && result.score >= 3
  })

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs">
        <p className="font-semibold text-gray-900 mb-2">{formatDate(label)}</p>
        {payload
          .sort((a: any, b: any) => (b.value ?? 0) - (a.value ?? 0))
          .map((entry: any) => {
            const candidate = round.candidates.find(c => c.id === entry.dataKey)
            return (
              <div key={entry.dataKey} className="flex items-center gap-2 py-0.5">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-gray-600 flex-1">
                  {candidate?.name.split(' ').pop()}
                </span>
                <span className="font-mono font-semibold">{entry.value}%</span>
              </div>
            )
          })}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Évolution des sondages
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            {election.name} - Tour {round.round}
          </p>
        </div>
      </div>

      {/* Légende cliquable */}
      <div className="flex flex-wrap gap-2 mb-4">
        {mainCandidates.map(c => {
          const hidden = hiddenCandidates.has(c.id)
          return (
            <button
              key={c.id}
              onClick={() => toggleCandidate(c.id)}
              className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium transition-all ${
                hidden
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full transition-opacity ${hidden ? 'opacity-30' : ''}`}
                style={{ backgroundColor: c.color }}
              />
              {c.name.split(' ').pop()}
            </button>
          )
        })}
      </div>

      <ResponsiveContainer width="100%" height={380}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="date"
            tickFormatter={(d) => formatDate(d)}
            tick={{ fontSize: 10 }}
            stroke="#9ca3af"
          />
          <YAxis
            tick={{ fontSize: 10 }}
            stroke="#9ca3af"
            domain={['auto', 'auto']}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip content={<CustomTooltip />} />

          {/* Ligne du jour de l'élection */}
          <ReferenceLine
            x={round.date}
            stroke="#ef4444"
            strokeDasharray="5 5"
            label={{ value: 'Vote', position: 'top', fontSize: 10, fill: '#ef4444' }}
          />

          {mainCandidates.map(c => (
            <Line
              key={c.id}
              type="monotone"
              dataKey={c.id}
              stroke={c.color}
              strokeWidth={hiddenCandidates.has(c.id) ? 0 : 2}
              dot={{ r: 3, fill: c.color }}
              activeDot={{ r: 5 }}
              connectNulls
              hide={hiddenCandidates.has(c.id)}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
