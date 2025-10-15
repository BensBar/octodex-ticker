import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface Octocat {
  name: string
  image: string
}

const FALLBACK_OCTOCATS: Octocat[] = [
  { name: 'Original', image: 'https://octodex.github.com/images/original.png' },
  { name: 'Stormtroopocat', image: 'https://octodex.github.com/images/stormtroopocat.png' },
  { name: 'Hubot', image: 'https://octodex.github.com/images/hubot.jpg' },
  { name: 'Octocat', image: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg' },
  { name: 'Daftpunktocat', image: 'https://octodex.github.com/images/daftpunktocat-guy.gif' },
  { name: 'Riddlocat', image: 'https://octodex.github.com/images/riddlocat.png' },
  { name: 'Megacat', image: 'https://octodex.github.com/images/megacat-2.png' },
  { name: 'Filmtocat', image: 'https://octodex.github.com/images/filmtocat.png' },
  { name: 'Privateinvestocat', image: 'https://octodex.github.com/images/privateinvestocat.jpg' },
  { name: 'Dinotocat', image: 'https://octodex.github.com/images/dinotocat.png' },
  { name: 'Octobiwan', image: 'https://octodex.github.com/images/octobiwan.jpg' },
  { name: 'Gracehoppertocat', image: 'https://octodex.github.com/images/gracehoppertocat.jpg' },
  { name: 'Droidtocat', image: 'https://octodex.github.com/images/droidtocat.png' },
  { name: 'Spidertocat', image: 'https://octodex.github.com/images/spidertocat.png' },
  { name: 'Steroidtocat', image: 'https://octodex.github.com/images/steroidtocat.png' },
  { name: 'Scubatocat', image: 'https://octodex.github.com/images/scubatocat.png' },
  { name: 'Shoptocat', image: 'https://octodex.github.com/images/shoptocat.png' },
  { name: 'Manufacturetocat', image: 'https://octodex.github.com/images/manufacturetocat.png' },
  { name: 'Poptocat', image: 'https://octodex.github.com/images/poptocat_v2.png' },
  { name: 'Jetpacktocat', image: 'https://octodex.github.com/images/jetpacktocat.png' },
  { name: 'Mountietocat', image: 'https://octodex.github.com/images/mountietocat.png' },
  { name: 'Catstello', image: 'https://octodex.github.com/images/catstello.png' },
  { name: 'Inspectocat', image: 'https://octodex.github.com/images/inspectocat.jpg' },
  { name: 'Femalecodertocat', image: 'https://octodex.github.com/images/femalecodertocat.png' },
  { name: 'Waldocat', image: 'https://octodex.github.com/images/waldocat.png' },
  { name: 'Carlostocat', image: 'https://octodex.github.com/images/carlostocat.gif' },
  { name: 'Collabocats', image: 'https://octodex.github.com/images/collabocats.jpg' },
  { name: 'Okal-Eltocat', image: 'https://octodex.github.com/images/okal-eltocat.jpg' },
  { name: 'Nyantocat', image: 'https://octodex.github.com/images/nyantocat.gif' },
  { name: 'Codercat', image: 'https://octodex.github.com/images/codercat.jpg' },
  { name: 'Kimonotocat', image: 'https://octodex.github.com/images/kimonotocat.png' },
  { name: 'Droctocat', image: 'https://octodex.github.com/images/droctocat.png' },
  { name: 'Plumber', image: 'https://octodex.github.com/images/plumber.jpg' },
  { name: 'Vinyltocat', image: 'https://octodex.github.com/images/vinyltocat.png' },
  { name: 'Electrocat', image: 'https://octodex.github.com/images/electrocat.png' },
  { name: 'Defunktocat', image: 'https://octodex.github.com/images/defunktocat.png' },
  { name: 'Labtocat', image: 'https://octodex.github.com/images/labtocat.png' },
  { name: 'Surftocat', image: 'https://octodex.github.com/images/surftocat.png' },
  { name: 'Welcometocat', image: 'https://octodex.github.com/images/welcometocat.png' },
  { name: 'Cherryontop', image: 'https://octodex.github.com/images/cherryontop-o-cat.png' },
  { name: 'Octonaut', image: 'https://octodex.github.com/images/octonaut.jpg' },
]

export function OctocatTicker() {
  const [octocats, setOctocats] = useState<Octocat[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchOctocats() {
      try {
        const response = await fetch('https://api.github.com/octocat')
        
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }

        setOctocats(FALLBACK_OCTOCATS)
      } catch (error) {
        console.warn('Using fallback Octocats:', error)
        setOctocats(FALLBACK_OCTOCATS)
      } finally {
        setLoading(false)
      }
    }

    fetchOctocats()
  }, [])

  const displayOctocats = [...octocats, ...octocats]

  if (loading) {
    return (
      <Card className="w-full overflow-hidden border-border/50">
        <div className="flex gap-4 px-4 py-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-16 w-16 flex-shrink-0 rounded-lg" />
          ))}
        </div>
      </Card>
    )
  }

  return (
    <Card className="w-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="relative flex items-center py-3 overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-card to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-card to-transparent pointer-events-none" />
        
        <div className="flex gap-4">
          <div className="flex shrink-0 animate-[scroll-left_60s_linear_infinite] gap-4 pr-4 pl-4">
            {displayOctocats.map((octocat, index) => (
              <div
                key={`${octocat.name}-${index}`}
                className="group relative flex-shrink-0"
                title={octocat.name}
              >
                <img
                  src={octocat.image}
                  alt={octocat.name}
                  className="h-16 w-16 rounded-lg object-cover transition-transform duration-300 hover:scale-110"
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
