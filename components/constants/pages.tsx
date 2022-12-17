interface Pages  {
  id:number,
  title: String,
  description: String,
  slug: String,
}
export const pages:readonly Pages[] = [
  {
    id:0,
    title:"Home",
    description:"Top",
    slug: ""
  },
  { 
    id:1,
    title: "ABOUT",
    description: "About me",
    slug: "About",
  },
  {
    id:2,
    title: "SKILLS",
    description: "Skills",
    slug: "Skills",
  },
  {
    id:3,
    title: "PROJECTS",
    description: "Professional and personal projects",
    slug: "Projects",
  },
  {
    id:4,
    title: "CONTACT",
    description: "Social media and email",
    slug: "Contact",
  },
]
