import { useMemo } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts'
import { ElectionAccuracySummary } from '../types'

interface Props {
  summaries: ElectionAccuracySummary[]
}

export default function HistoricalTrend({ summaries }: Props) {
  const data = useMemo(() => {
    // Grouper par élection, prendre le tour 1 par défaut
    const byElection = new Map<string, ElectionAccuracySummary>()
    summaries.forEach(s => {
      const key = `${s.electionId}-T${s.round}`
      byElection.set(key, s)
    })

    return Array.from(byElection.values())
      .sort((a, b) => a.year - b.year || a.round - b.round)
      .map(s => ({
        name: `${s.year} T${s.round}`,
        year: s.year,
        type: s.type,
        'Erreur moyenne': s.meanAbsoluteError,
        'Erreur max': s.maxError,
        label: `${s.electionName} - Tour ${s.round}`,
      }))
  }, [summaries])

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null
    const item = data.find(d => d.name === label)
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs">
        <p className="font-semibold text-gray-900 mb-2">{item?.label}</p>
        {payload.map((entry: any) => (
          <div key={entry.dataKey} className="flex items-center gap-2 py-0.5">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-600 flex-1">{entry.name}</span>
            <span className="font-mono font-semibold">{entry.value.toFixed(1)} pts</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Tendance historique de l'erreur
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">
          Évolution de la précision des sondages au fil des élections
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10 }}
            stroke="#9ca3af"
            angle={-20}
            textAnchor="end"
            height={50}
          />
          <YAxis
            tick={{ fontSize: 10 }}
            stroke="#9ca3af"
            tickFormatter={(v) => `${v} pts`}
          />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine
            y={2}
            stroke="#22c55e"
            strokeDasharray="5 5"
            label={{ value: 'Seuil 2 pts', position: 'right', fontSize: 10, fill: '#22c55e' }}
          />
          <Line
            type="monotone"
            dataKey="Erreur moyenne"
            stroke="#3b82f6"
            strokeWidth={2.5}
            dot={{ r: 4, fill: '#3b82f6' }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="Erreur max"
            stroke="#ef4444"
            strokeWidth={1.5}
            strokeDasharray="5 5"
            dot={{ r: 3, fill: '#ef4444' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
