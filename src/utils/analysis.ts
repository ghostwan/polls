import { Election, ElectionRound, PollAccuracy, ElectionAccuracySummary } from '../types'

/**
 * Calcule la précision des sondages pour un tour d'élection donné
 */
export function computeAccuracy(
  election: Election,
  round: ElectionRound
): PollAccuracy[] {
  const lastPollDate = round.polls.reduce((max, p) =>
    p.date > max ? p.date : max, '1900-01-01'
  )
  const lastPolls = round.polls.filter(p => p.date === lastPollDate)

  return round.candidates.map(candidate => {
    const result = round.results.find(r => r.candidateId === candidate.id)
    const actualScore = result?.score ?? 0

    // Dernier sondage
    const lastPollScores = lastPolls
      .map(p => p.scores[candidate.id])
      .filter((s): s is number => s !== undefined)
    const lastPollScore = lastPollScores.length > 0
      ? lastPollScores.reduce((a, b) => a + b, 0) / lastPollScores.length
      : 0

    // Moyenne de tous les sondages
    const allScores = round.polls
      .map(p => p.scores[candidate.id])
      .filter((s): s is number => s !== undefined)
    const averagePollScore = allScores.length > 0
      ? allScores.reduce((a, b) => a + b, 0) / allScores.length
      : 0

    return {
      candidateId: candidate.id,
      candidateName: candidate.name,
      party: candidate.party,
      color: candidate.color,
      lastPollScore: Math.round(lastPollScore * 100) / 100,
      averagePollScore: Math.round(averagePollScore * 100) / 100,
      actualScore,
      errorLastPoll: Math.round((lastPollScore - actualScore) * 100) / 100,
      errorAverage: Math.round((averagePollScore - actualScore) * 100) / 100,
      pollCount: allScores.length,
    }
  })
}

/**
 * Résumé de précision pour une élection + tour
 */
export function computeElectionSummary(
  election: Election,
  round: ElectionRound
): ElectionAccuracySummary {
  const accuracies = computeAccuracy(election, round)
  const absErrors = accuracies.map(a => Math.abs(a.errorLastPoll))
  const mae = absErrors.length > 0
    ? absErrors.reduce((a, b) => a + b, 0) / absErrors.length
    : 0

  return {
    electionId: election.id,
    electionName: election.name,
    year: election.year,
    round: round.round,
    type: election.type,
    meanAbsoluteError: Math.round(mae * 100) / 100,
    maxError: Math.round(Math.max(...absErrors) * 100) / 100,
    candidateAccuracies: accuracies,
  }
}

/**
 * Prépare les données pour le graphique d'évolution temporelle
 */
export function prepareTimelineData(round: ElectionRound) {
  const sorted = [...round.polls].sort((a, b) => a.date.localeCompare(b.date))

  return sorted.map(poll => {
    const entry: Record<string, string | number> = {
      date: poll.date,
      pollster: poll.pollster,
    }
    round.candidates.forEach(c => {
      if (poll.scores[c.id] !== undefined) {
        entry[c.id] = poll.scores[c.id]
      }
    })
    return entry
  })
}

/**
 * Prépare les données de comparaison sondages vs résultats
 */
export function prepareComparisonData(accuracies: PollAccuracy[]) {
  return accuracies
    .filter(a => a.actualScore >= 1) // Filtrer les très petits candidats
    .sort((a, b) => b.actualScore - a.actualScore)
    .map(a => ({
      name: a.candidateName.split(' ').pop() || a.candidateName,
      fullName: a.candidateName,
      party: a.party,
      color: a.color,
      'Dernier sondage': a.lastPollScore,
      'Moyenne sondages': a.averagePollScore,
      'Résultat réel': a.actualScore,
      'Écart': a.errorLastPoll,
    }))
}

/**
 * Formate une date en français
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

/**
 * Couleur en fonction de l'erreur
 */
export function errorColor(error: number): string {
  const abs = Math.abs(error)
  if (abs <= 1) return 'text-green-600'
  if (abs <= 2) return 'text-yellow-600'
  if (abs <= 3) return 'text-orange-500'
  return 'text-red-600'
}

export function errorBgColor(error: number): string {
  const abs = Math.abs(error)
  if (abs <= 1) return 'bg-green-100'
  if (abs <= 2) return 'bg-yellow-100'
  if (abs <= 3) return 'bg-orange-100'
  return 'bg-red-100'
}

/**
 * Label du type d'élection
 */
export function electionTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    presidentielle: 'Présidentielle',
    legislative: 'Législative',
    europeenne: 'Européenne',
    regionale: 'Régionale',
    municipale: 'Municipale',
  }
  return labels[type] || type
}
