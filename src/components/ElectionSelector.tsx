import { Election } from '../types'
import { electionTypeLabel } from '../utils/analysis'
import { ChevronDown } from 'lucide-react'

interface Props {
  elections: Election[]
  selectedId: string
  onChange: (id: string) => void
}

export default function ElectionSelector({ elections, selectedId, onChange }: Props) {
  const grouped = elections.reduce<Record<string, Election[]>>((acc, e) => {
    const key = electionTypeLabel(e.type)
    if (!acc[key]) acc[key] = []
    acc[key].push(e)
    return acc
  }, {})

  return (
    <div className="relative flex-1">
      <label className="block text-xs font-medium text-gray-500 mb-1">
        Élection
      </label>
      <div className="relative">
        <select
          value={selectedId}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer hover:border-gray-400 transition-colors"
        >
          {Object.entries(grouped).map(([type, elecs]) => (
            <optgroup key={type} label={type}>
              {elecs.map(e => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  )
}
