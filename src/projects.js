{
    id: string,
    category: string,
    title: string,
    description: string,
    technologies: string[],
    stats: { label: string, value: string }[],
    liveUrl: string,
    caseStudyUrl: string,
    image: string,
    status: 'Live' | 'In Progress' | 'Upcoming',
    teamMembers: { name: string, avatar: string }[]
  }