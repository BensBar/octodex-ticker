import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface Octocat {
  name: string
  image: string
}

interface OctocatTickerProps {
  height?: number
  padding?: number
  speed?: number
}

const FALLBACK_OCTOCATS: Octocat[] = [
  { name: 'Original Octocat', image: 'https://octodex.github.com/images/original.png' },
  { name: 'Daftpunktocat', image: 'https://octodex.github.com/images/daftpunktocat-guy.gif' },
  { name: 'Stormtroopocat', image: 'https://octodex.github.com/images/stormtroopocat.png' },
  { name: 'Mona the Octocat', image: 'https://octodex.github.com/images/mona-the-rivetertocat.png' },
  { name: 'Steroidtocat', image: 'https://octodex.github.com/images/steroidtocat.png' },
  { name: 'Octocat-de-los-muertos', image: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg' },
  { name: 'Grim Repo', image: 'https://octodex.github.com/images/grim-repo.jpg' },
  { name: 'Repo', image: 'https://octodex.github.com/images/repo.png' },
  { name: 'Hubot', image: 'https://octodex.github.com/images/hubot.jpg' },
  { name: 'Droidtocat', image: 'https://octodex.github.com/images/droidtocat.png' },
  { name: 'Minion', image: 'https://octodex.github.com/images/minion.png' },
  { name: 'Baracktocat', image: 'https://octodex.github.com/images/baracktocat.jpg' },
  { name: 'Ironcat', image: 'https://octodex.github.com/images/ironcat.jpg' },
  { name: 'Nyantocat', image: 'https://octodex.github.com/images/nyantocat.gif' },
  { name: 'Femalecodertocat', image: 'https://octodex.github.com/images/femalecodertocat.png' },
  { name: 'Heisencat', image: 'https://octodex.github.com/images/heisencat.png' },
  { name: 'Socialite', image: 'https://octodex.github.com/images/socialite.jpg' },
  { name: 'Privateinvestocat', image: 'https://octodex.github.com/images/privateinvestocat.jpg' },
  { name: 'Drupalcat', image: 'https://octodex.github.com/images/drupalcat.jpg' },
  { name: 'Collabocats', image: 'https://octodex.github.com/images/collabocats.jpg' },
  { name: 'Linktocat', image: 'https://octodex.github.com/images/linktocat.jpg' },
  { name: 'Megacat', image: 'https://octodex.github.com/images/megacat-2.png' },
  { name: 'Octoliberty', image: 'https://octodex.github.com/images/octoliberty.png' },
  { name: 'Spidertocat', image: 'https://octodex.github.com/images/spidertocat.png' },
  { name: 'Kimonotocat', image: 'https://octodex.github.com/images/kimonotocat.png' },
  { name: 'Octofez', image: 'https://octodex.github.com/images/octofez.png' },
  { name: 'Skatetocat', image: 'https://octodex.github.com/images/skatetocat.png' },
  { name: 'Codercat', image: 'https://octodex.github.com/images/codercat.jpg' },
  { name: 'Dojocat', image: 'https://octodex.github.com/images/dojocat.jpg' },
  { name: 'Mountietocat', image: 'https://octodex.github.com/images/mountietocat.png' },
  { name: 'Octotron', image: 'https://octodex.github.com/images/octotron.jpg' },
  { name: 'Labtocat', image: 'https://octodex.github.com/images/labtocat.png' },
  { name: 'Poptocat', image: 'https://octodex.github.com/images/poptocat.png' },
  { name: 'Riddlocat', image: 'https://octodex.github.com/images/riddlocat.png' },
  { name: 'Jetpacktocat', image: 'https://octodex.github.com/images/jetpacktocat.png' },
  { name: 'Octoliberty', image: 'https://octodex.github.com/images/octoliberty.png' },
  { name: 'Mcefeeline', image: 'https://octodex.github.com/images/mcefeeline.jpg' },
  { name: 'Benevocats', image: 'https://octodex.github.com/images/benevocats.png' },
  { name: 'Scubatocat', image: 'https://octodex.github.com/images/scubatocat.png' },
  { name: 'Electrocat', image: 'https://octodex.github.com/images/electrocat.png' },
  { name: 'Adventure Cat', image: 'https://octodex.github.com/images/adventure-cat.png' },
  { name: 'Catstello', image: 'https://octodex.github.com/images/catstello.png' },
  { name: 'Herme', image: 'https://octodex.github.com/images/herme-t-crabb.png' },
  { name: 'Agendacat', image: 'https://octodex.github.com/images/agendacat.png' },
  { name: 'Welcometocat', image: 'https://octodex.github.com/images/welcometocat.png' },
  { name: 'Filmtocat', image: 'https://octodex.github.com/images/filmtocat.png' },
]

export function OctocatTicker({ height = 64, padding, speed = 60 }: OctocatTickerProps) {
  const [octocats, setOctocats] = useState<Octocat[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setOctocats(FALLBACK_OCTOCATS)
    setLoading(false)
  }, [])

  const displayOctocats = [...octocats, ...octocats]
  const paddingY = padding !== undefined ? padding : Math.max(12, height * 0.1875)

  if (loading) {
    return (
      <Card className="w-full overflow-hidden border-border/50">
        <div className="flex gap-4 px-4" style={{ paddingTop: paddingY, paddingBottom: paddingY }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="flex-shrink-0 rounded-lg" style={{ height, width: height }} />
          ))}
        </div>
      </Card>
    )
  }

  return (
    <Card className="w-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="relative flex items-center overflow-hidden" style={{ paddingTop: paddingY, paddingBottom: paddingY }}>
        <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-card to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-card to-transparent pointer-events-none" />
        
        <div className="flex gap-4">
          <div 
            className="flex shrink-0 gap-4 pr-4 pl-4"
            style={{
              animation: `scroll-left ${speed}s linear infinite`
            }}
          >
            {displayOctocats.map((octocat, index) => (
              <div
                key={`${octocat.name}-${index}`}
                className="group relative flex-shrink-0"
                title={octocat.name}
              >
                <img
                  src={octocat.image}
                  alt={octocat.name}
                  className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                  style={{ height, width: height }}
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
