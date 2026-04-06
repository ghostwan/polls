interface Props {
  selected: 1 | 2
  onChange: (round: 1 | 2) => void
}

export default function RoundToggle({ selected, onChange }: Props) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1">
        Tour
      </label>
      <div className="inline-flex bg-white border border-gray-300 rounded-lg overflow-hidden">
        <button
          onClick={() => onChange(1)}
          className={`px-4 py-2.5 text-sm font-medium transition-colors ${
            selected === 1
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          1er Tour
        </button>
        <button
          onClick={() => onChange(2)}
          className={`px-4 py-2.5 text-sm font-medium transition-colors border-l border-gray-300 ${
            selected === 2
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          2nd Tour
        </button>
      </div>
    </div>
  )
}
