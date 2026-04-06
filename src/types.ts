export type ElectionType = 'presidentielle' | 'legislative' | 'europeenne' | 'regionale' | 'municipale'
export type Round = 1 | 2

export interface Candidate {
  id: string
  name: string
  party: string
  color: string
}

export interface PollEntry {
  date: string // YYYY-MM-DD
  pollster: string
  sampleSize?: number
  scores: Record<string, number> // candidateId -> percentage
}

export interface ElectionResult {
  candidateId: string
  score: number // percentage
}

export interface ElectionRound {
  round: Round
  date: string // YYYY-MM-DD
  results: ElectionResult[]
  polls: PollEntry[]
  candidates: Candidate[]
}

export interface Election {
  id: string
  name: string
  type: ElectionType
  year: number
  rounds: ElectionRound[]
}

export interface PollAccuracy {
  candidateId: string
  candidateName: string
  party: string
  color: string
  lastPollScore: number
  averagePollScore: number
  actualScore: number
  errorLastPoll: number
  errorAverage: number
  pollCount: number
}

export interface ElectionAccuracySummary {
  electionId: string
  electionName: string
  year: number
  round: Round
  type: ElectionType
  meanAbsoluteError: number
  maxError: number
  candidateAccuracies: PollAccuracy[]
}
