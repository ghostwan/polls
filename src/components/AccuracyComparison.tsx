import { useMemo } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, ReferenceLine, Legend,
} from 'recharts'
import { ElectionAccuracySummary } from '../types'
import { prepareComparisonData } from '../utils/analysis'

interface Props {
  summary: ElectionAccuracySummary
}

export default function AccuracyComparison({ summary }: Props) {
  const data = useMemo(
    () => prepareComparisonData(summary.candidateAccuracies),
    [summary]
  )

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null
    const item = data.find(d => d.name === label)
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs">
        <p className="font-semibold text-gray-900 mb-2">
          {item?.fullName} ({item?.party})
        </p>
        {payload.map((entry: any) => (
          <div key={entry.dataKey} className="flex items-center gap-2 py-0.5">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: entry.fill || entry.color }}
            />
            <span className="text-gray-600 flex-1">{entry.name}</span>
            <span className="font-mono font-semibold">{entry.value}%</span>
          </div>
        ))}
        {item && (
          <div className="border-t border-gray-100 mt-1.5 pt-1.5">
            <span className={`font-semibold ${item['Écart'] > 0 ? 'text-blue-600' : 'text-red-600'}`}>
              Écart: {item['Écart'] > 0 ? '+' : ''}{item['Écart'].toFixed(1)} pts
            </span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Sondages vs Résultats
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">
          Comparaison du dernier sondage avec le résultat réel
        </p>
      </div>

      <ResponsiveContainer width="100%" height={380}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
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
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: '11px' }}
            iconType="circle"
          />
          <Bar dataKey="Dernier sondage" fill="#93c5fd" radius={[2, 2, 0, 0]} />
          <Bar dataKey="Résultat réel" radius={[2, 2, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
