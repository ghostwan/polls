import { BarChart3, Eye } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
  const [visits, setVisits] = useState<number | null>(null)
  const [showVisits, setShowVisits] = useState(false)

  useEffect(() => {
    fetch('https://hits.dwyl.com/ghostwan/polls.json')
      .then(res => res.json())
      .then(data => setVisits(Number(data.message)))
      .catch(() => {})
  }, [])

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-700 to-red-600 rounded-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                Sondoscope
              </h1>
              <p className="text-xs text-gray-500 -mt-0.5">
                Fiabilité des sondages en France
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-gray-400">
            <button
              onClick={() => setShowVisits(v => !v)}
              className="hover:text-gray-600 transition-colors cursor-pointer"
            >
              v{__APP_VERSION__}
            </button>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
              Données de 2002 à 2024
            </div>
          </div>
        </div>
      </div>
      {showVisits && visits !== null && (
        <div className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Eye className="w-4 h-4" />
            <span><strong className="text-gray-700">{visits.toLocaleString('fr-FR')}</strong> visites</span>
          </div>
        </div>
      )}
    </header>
  )
}
