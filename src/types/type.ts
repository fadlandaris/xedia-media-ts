export interface dataProps {
  id: number
  img?: string
  desc?: string
  title?: string
  nav?: string
  link?: string
  source?: string
  date?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any
}

export interface newsProps {
  author: null
  category: string
  country: string
  description: string
  image: string
  language: string
  published_at: string
  source: string
  title: string
  url: string
}