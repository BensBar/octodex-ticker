import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Reorder } from 'framer-motion'

interface Octocat {
  name: string
  image: string
  id: string
}

interface OctocatTickerProps {
  height?: number
  padding?: number
  speed?: number
}

const FALLBACK_OCTOCATS: Octocat[] = [
  { id: '1', name: 'Original Octocat', image: 'https://octodex.github.com/images/original.png' },
  { id: '2', name: 'Daftpunktocat', image: 'https://octodex.github.com/images/daftpunktocat-guy.gif' },
  { id: '3', name: 'Stormtroopocat', image: 'https://octodex.github.com/images/stormtroopocat.png' },
  { id: '4', name: 'Mona the Octocat', image: 'https://octodex.github.com/images/mona-the-rivetertocat.png' },
  { id: '5', name: 'Steroidtocat', image: 'https://octodex.github.com/images/steroidtocat.png' },
  { id: '6', name: 'Octocat-de-los-muertos', image: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg' },
  { id: '7', name: 'Grim Repo', image: 'https://octodex.github.com/images/grim-repo.jpg' },
  { id: '8', name: 'Repo', image: 'https://octodex.github.com/images/repo.png' },
  { id: '9', name: 'Hubot', image: 'https://octodex.github.com/images/hubot.jpg' },
  { id: '10', name: 'Droidtocat', image: 'https://octodex.github.com/images/droidtocat.png' },
  { id: '11', name: 'Minion', image: 'https://octodex.github.com/images/minion.png' },
  { id: '12', name: 'Baracktocat', image: 'https://octodex.github.com/images/baracktocat.jpg' },
  { id: '13', name: 'Ironcat', image: 'https://octodex.github.com/images/ironcat.jpg' },
  { id: '14', name: 'Nyantocat', image: 'https://octodex.github.com/images/nyantocat.gif' },
  { id: '15', name: 'Femalecodertocat', image: 'https://octodex.github.com/images/femalecodertocat.png' },
  { id: '16', name: 'Heisencat', image: 'https://octodex.github.com/images/heisencat.png' },
  { id: '17', name: 'Socialite', image: 'https://octodex.github.com/images/socialite.jpg' },
  { id: '18', name: 'Privateinvestocat', image: 'https://octodex.github.com/images/privateinvestocat.jpg' },
  { id: '19', name: 'Drupalcat', image: 'https://octodex.github.com/images/drupalcat.jpg' },
  { id: '20', name: 'Collabocats', image: 'https://octodex.github.com/images/collabocats.jpg' },
  { id: '21', name: 'Linktocat', image: 'https://octodex.github.com/images/linktocat.jpg' },
  { id: '22', name: 'Megacat', image: 'https://octodex.github.com/images/megacat-2.png' },
  { id: '23', name: 'Octoliberty', image: 'https://octodex.github.com/images/octoliberty.png' },
  { id: '24', name: 'Spidertocat', image: 'https://octodex.github.com/images/spidertocat.png' },
  { id: '25', name: 'Kimonotocat', image: 'https://octodex.github.com/images/kimonotocat.png' },
  { id: '26', name: 'Octofez', image: 'https://octodex.github.com/images/octofez.png' },
  { id: '27', name: 'Skatetocat', image: 'https://octodex.github.com/images/skatetocat.png' },
  { id: '28', name: 'Codercat', image: 'https://octodex.github.com/images/codercat.jpg' },
  { id: '29', name: 'Dojocat', image: 'https://octodex.github.com/images/dojocat.jpg' },
  { id: '30', name: 'Mountietocat', image: 'https://octodex.github.com/images/mountietocat.png' },
  { id: '31', name: 'Octotron', image: 'https://octodex.github.com/images/octotron.jpg' },
  { id: '32', name: 'Labtocat', image: 'https://octodex.github.com/images/labtocat.png' },
  { id: '33', name: 'Poptocat', image: 'https://octodex.github.com/images/poptocat.png' },
  { id: '34', name: 'Riddlocat', image: 'https://octodex.github.com/images/riddlocat.png' },
  { id: '35', name: 'Jetpacktocat', image: 'https://octodex.github.com/images/jetpacktocat.png' },
  { id: '36', name: 'Octoliberty2', image: 'https://octodex.github.com/images/octoliberty.png' },
  { id: '37', name: 'Mcefeeline', image: 'https://octodex.github.com/images/mcefeeline.jpg' },
  { id: '38', name: 'Benevocats', image: 'https://octodex.github.com/images/benevocats.png' },
  { id: '39', name: 'Scubatocat', image: 'https://octodex.github.com/images/scubatocat.png' },
  { id: '40', name: 'Electrocat', image: 'https://octodex.github.com/images/electrocat.png' },
  { id: '41', name: 'Adventure Cat', image: 'https://octodex.github.com/images/adventure-cat.png' },
  { id: '42', name: 'Catstello', image: 'https://octodex.github.com/images/catstello.png' },
  { id: '43', name: 'Herme', image: 'https://octodex.github.com/images/herme-t-crabb.png' },
  { id: '44', name: 'Agendacat', image: 'https://octodex.github.com/images/agendacat.png' },
  { id: '45', name: 'Welcometocat', image: 'https://octodex.github.com/images/welcometocat.png' },
  { id: '46', name: 'Filmtocat', image: 'https://octodex.github.com/images/filmtocat.png' },
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
        
        <div className="flex gap-4 px-4">
          <Reorder.Group
            as="div"
            axis="x"
            values={octocats}
            onReorder={setOctocats}
            className="flex shrink-0 gap-4"
            style={{
              animation: `scroll-left ${speed}s linear infinite`
            }}
          >
            {octocats.map((octocat) => (
              <Reorder.Item
                key={octocat.id}
                value={octocat}
                className="group relative flex-shrink-0 cursor-grab active:cursor-grabbing"
                title={octocat.name}
                whileDrag={{ scale: 1.1, zIndex: 50 }}
              >
                <img
                  src={octocat.image}
                  alt={octocat.name}
                  className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                  style={{ height, width: height }}
                  loading="eager"
                  draggable={false}
                />
              </Reorder.Item>
            ))}
          </Reorder.Group>
          
          <div 
            className="flex shrink-0 gap-4"
            style={{
              animation: `scroll-left ${speed}s linear infinite`
            }}
            aria-hidden="true"
          >
            {octocats.map((octocat) => (
              <div
                key={`duplicate-${octocat.id}`}
                className="flex-shrink-0 pointer-events-none"
                title={octocat.name}
              >
                <img
                  src={octocat.image}
                  alt=""
                  className="rounded-lg object-cover"
                  style={{ height, width: height }}
                  loading="eager"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
