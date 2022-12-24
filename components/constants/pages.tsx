interface Pages {
  id: number
  title: String
  description: String
  slug: String
}
export const Pages: readonly Pages[] = [
  {
    id: 0,
    title: 'Home',
    description: 'Top',
    slug: ''
  },
  {
    id: 1,
    title: 'About',
    description: 'About me',
    slug: 'About'
  },
  {
    id: 2,
    title: 'Projects',
    description: 'Professional and personal projects',
    slug: 'Projects'
  },
  {
    id: 4,
    title: 'Algo',
    description: 'Algo visualizer',
    slug: 'Algo'
  },
  {
    id: 5,
    title: 'Contact',
    description: 'Social media and email',
    slug: 'Contact'
  }
]
