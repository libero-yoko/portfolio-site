interface Pages {
  id: number
  title: String
  description: String
  slug: String
}
export const pages: readonly Pages[] = [
  {
    id: 0,
    title: 'HOME',
    description: 'Top',
    slug: '',
  },
  {
    id: 1,
    title: 'PROFILE',
    description: 'About me',
    slug: 'Profile',
  },
  {
    id: 2,
    title: 'SKILLS',
    description: 'Skills',
    slug: 'Skills',
  },
  {
    id: 3,
    title: 'PROJECTS',
    description: 'Professional and personal projects',
    slug: 'Projects',
  },
  {
    id: 4,
    title: 'CONTACT',
    description: 'Social media and email',
    slug: 'Contact',
  },
]
