interface Skills {
  id: number
  title: String
  category: SkillCategory
}
export enum SkillCategory {
  FrontEnd,
  BackEnd,
  SoftSkill,
  Other,
}
export const Skills: readonly Skills[] = [
  {
    id: 0,
    title: 'React',
    category: SkillCategory.FrontEnd,
  },
  {
    id: 1,
    title: 'React Hooks',
    category: SkillCategory.FrontEnd,
  },
  {
    id: 2,
    title: 'GraphQL',
    category: SkillCategory.FrontEnd,
  },
  {
    id: 3,
    title: 'Relay',
    category: SkillCategory.FrontEnd,
  },
  {
    id: 4,
    title: 'JavaScript',
    category: SkillCategory.FrontEnd,
  },
  {
    id: 5,
    title: 'TypeScript',
    category: SkillCategory.FrontEnd,
  },
  {
    id: 6,
    title: 'Next.js',
    category: SkillCategory.FrontEnd,
  },
  {
    id: 7,
    title: 'HTML',
    category: SkillCategory.FrontEnd,
  },
  {
    id: 8,
    title: 'CSS',
    category: SkillCategory.FrontEnd,
  },
  {
    id: 9,
    title: 'Tailwind',
    category: SkillCategory.FrontEnd,
  },
  {
    id: 10,
    title: 'MaterialUI',
    category: SkillCategory.FrontEnd,
  },
  {
    id: 11,
    title: 'Node.js',
    category: SkillCategory.BackEnd,
  },
  {
    id: 12,
    title: 'SQL databases',
    category: SkillCategory.BackEnd,
  },
  {
    id: 13,
    title: 'MongoDB',
    category: SkillCategory.BackEnd,
  },
  {
    id: 14,
    title: 'Git',
    category: SkillCategory.Other,
  },
]
