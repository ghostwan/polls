import { useState } from 'react'
import { ElectionAccuracySummary } from '../types'
import { errorColor, errorBgColor } from '../utils/analysis'
import { ArrowUpDown, ChevronUp, ChevronDown } from 'lucide-react'

interface Props {
  summary: ElectionAccuracySummary
}

type SortKey = 'name' | 'lastPoll' | 'average' | 'actual' | 'errorLast' | 'errorAvg'
type SortDir = 'asc' | 'desc'

export default function AccuracyTable({ summary }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>('actual')
  const [sortDir, setSortDir] = useState<SortDir>('desc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir('desc')
    }
  }

  const sorted = [...summary.candidateAccuracies].sort((a, b) => {
    let va: number | string, vb: number | string
    switch (sortKey) {
      case 'name': va = a.candidateName; vb = b.candidateName; break
      case 'lastPoll': va = a.lastPollScore; vb = b.lastPollScore; break
      case 'average': va = a.averagePollScore; vb = b.averagePollScore; break
      case 'actual': va = a.actualScore; vb = b.actualScore; break
      case 'errorLast': va = Math.abs(a.errorLastPoll); vb = Math.abs(b.errorLastPoll); break
      case 'errorAvg': va = Math.abs(a.errorAverage); vb = Math.abs(b.errorAverage); break
      default: va = 0; vb = 0
    }
    if (typeof va === 'string' && typeof vb === 'string') {
      return sortDir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va)
    }
    return sortDir === 'asc' ? (va as number) - (vb as number) : (vb as number) - (va as number)
  })

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <ArrowUpDown className="w-3 h-3 text-gray-300" />
    return sortDir === 'asc'
      ? <ChevronUp className="w-3 h-3 text-blue-600" />
      : <ChevronDown className="w-3 h-3 text-blue-600" />
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">
          Détail par candidat
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">
          Cliquez sur les en-têtes pour trier
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th
                className="text-left px-4 py-3 font-medium text-gray-600 cursor-pointer hover:text-gray-900"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center gap-1">
                  Candidat <SortIcon col="name" />
                </div>
              </th>
              <th
                className="text-right px-4 py-3 font-medium text-gray-600 cursor-pointer hover:text-gray-900"
                onClick={() => handleSort('lastPoll')}
              >
                <div className="flex items-center justify-end gap-1">
                  Dernier sondage <SortIcon col="lastPoll" />
                </div>
              </th>
              <th
                className="text-right px-4 py-3 font-medium text-gray-600 cursor-pointer hover:text-gray-900"
                onClick={() => handleSort('average')}
              >
                <div className="flex items-center justify-end gap-1">
                  Moy. sondages <SortIcon col="average" />
                </div>
              </th>
              <th
                className="text-right px-4 py-3 font-medium text-gray-600 cursor-pointer hover:text-gray-900"
                onClick={() => handleSort('actual')}
              >
                <div className="flex items-center justify-end gap-1">
                  Résultat <SortIcon col="actual" />
                </div>
              </th>
              <th
                className="text-right px-4 py-3 font-medium text-gray-600 cursor-pointer hover:text-gray-900"
                onClick={() => handleSort('errorLast')}
              >
                <div className="flex items-center justify-end gap-1">
                  Écart (dernier) <SortIcon col="errorLast" />
                </div>
              </th>
              <th
                className="text-right px-4 py-3 font-medium text-gray-600 cursor-pointer hover:text-gray-900"
                onClick={() => handleSort('errorAvg')}
              >
                <div className="flex items-center justify-end gap-1">
                  Écart (moy.) <SortIcon col="errorAvg" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((row, i) => (
              <tr
                key={row.candidateId}
                className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                  i % 2 === 0 ? '' : 'bg-gray-50/50'
                }`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: row.color }}
                    />
                    <div>
                      <span className="font-medium text-gray-900">
                        {row.candidateName}
                      </span>
                      <span className="text-gray-400 ml-1.5 text-xs">
                        {row.party}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-mono">
                  {row.lastPollScore.toFixed(1)}%
                </td>
                <td className="px-4 py-3 text-right font-mono">
                  {row.averagePollScore.toFixed(1)}%
                </td>
                <td className="px-4 py-3 text-right font-mono font-semibold">
                  {row.actualScore.toFixed(2)}%
                </td>
                <td className="px-4 py-3 text-right">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono font-semibold ${errorBgColor(row.errorLastPoll)} ${errorColor(row.errorLastPoll)}`}>
                    {row.errorLastPoll > 0 ? '+' : ''}{row.errorLastPoll.toFixed(1)}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono font-semibold ${errorBgColor(row.errorAverage)} ${errorColor(row.errorAverage)}`}>
                    {row.errorAverage > 0 ? '+' : ''}{row.errorAverage.toFixed(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Légende */}
      <div className="px-6 py-3 border-t border-gray-100 flex flex-wrap gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-green-100"></span>
          Écart ≤ 1 pt
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-yellow-100"></span>
          Écart 1-2 pts
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-orange-100"></span>
          Écart 2-3 pts
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-100"></span>
          Écart &gt; 3 pts
        </div>
      </div>
    </div>
  )
}
