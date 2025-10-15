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
  { name: 'github', image: 'https://avatars.githubusercontent.com/u/9919?s=200&v=4' },
  { name: 'torvalds', image: 'https://avatars.githubusercontent.com/u/1024025?s=200&v=4' },
  { name: 'gvanrossum', image: 'https://avatars.githubusercontent.com/u/2455448?s=200&v=4' },
  { name: 'octocat', image: 'https://avatars.githubusercontent.com/u/583231?s=200&v=4' },
  { name: 'tj', image: 'https://avatars.githubusercontent.com/u/25254?s=200&v=4' },
  { name: 'yyx990803', image: 'https://avatars.githubusercontent.com/u/499550?s=200&v=4' },
  { name: 'addyosmani', image: 'https://avatars.githubusercontent.com/u/110953?s=200&v=4' },
  { name: 'sindresorhus', image: 'https://avatars.githubusercontent.com/u/170270?s=200&v=4' },
  { name: 'kentcdodds', image: 'https://avatars.githubusercontent.com/u/1500684?s=200&v=4' },
  { name: 'mojombo', image: 'https://avatars.githubusercontent.com/u/1?s=200&v=4' },
  { name: 'defunkt', image: 'https://avatars.githubusercontent.com/u/2?s=200&v=4' },
  { name: 'pjhyett', image: 'https://avatars.githubusercontent.com/u/3?s=200&v=4' },
  { name: 'wycats', image: 'https://avatars.githubusercontent.com/u/4?s=200&v=4' },
  { name: 'ezmobius', image: 'https://avatars.githubusercontent.com/u/5?s=200&v=4' },
  { name: 'ivey', image: 'https://avatars.githubusercontent.com/u/6?s=200&v=4' },
  { name: 'evanphx', image: 'https://avatars.githubusercontent.com/u/7?s=200&v=4' },
  { name: 'vanpelt', image: 'https://avatars.githubusercontent.com/u/17?s=200&v=4' },
  { name: 'wayneeseguin', image: 'https://avatars.githubusercontent.com/u/18?s=200&v=4' },
  { name: 'brynary', image: 'https://avatars.githubusercontent.com/u/19?s=200&v=4' },
  { name: 'kevinclark', image: 'https://avatars.githubusercontent.com/u/20?s=200&v=4' },
  { name: 'technoweenie', image: 'https://avatars.githubusercontent.com/u/21?s=200&v=4' },
  { name: 'macournoyer', image: 'https://avatars.githubusercontent.com/u/22?s=200&v=4' },
  { name: 'takeo', image: 'https://avatars.githubusercontent.com/u/23?s=200&v=4' },
  { name: 'caged', image: 'https://avatars.githubusercontent.com/u/25?s=200&v=4' },
  { name: 'topfunky', image: 'https://avatars.githubusercontent.com/u/26?s=200&v=4' },
  { name: 'anotherjesse', image: 'https://avatars.githubusercontent.com/u/27?s=200&v=4' },
  { name: 'roland', image: 'https://avatars.githubusercontent.com/u/28?s=200&v=4' },
  { name: 'lukas', image: 'https://avatars.githubusercontent.com/u/29?s=200&v=4' },
  { name: 'fanvsfan', image: 'https://avatars.githubusercontent.com/u/30?s=200&v=4' },
  { name: 'tomtt', image: 'https://avatars.githubusercontent.com/u/31?s=200&v=4' },
  { name: 'railsjitsu', image: 'https://avatars.githubusercontent.com/u/32?s=200&v=4' },
  { name: 'nitay', image: 'https://avatars.githubusercontent.com/u/34?s=200&v=4' },
  { name: 'kevwil', image: 'https://avatars.githubusercontent.com/u/35?s=200&v=4' },
  { name: 'KirinDave', image: 'https://avatars.githubusercontent.com/u/36?s=200&v=4' },
  { name: 'jamesgolick', image: 'https://avatars.githubusercontent.com/u/37?s=200&v=4' },
  { name: 'atmos', image: 'https://avatars.githubusercontent.com/u/38?s=200&v=4' },
  { name: 'errfree', image: 'https://avatars.githubusercontent.com/u/44?s=200&v=4' },
  { name: 'mojodna', image: 'https://avatars.githubusercontent.com/u/45?s=200&v=4' },
  { name: 'bmizerany', image: 'https://avatars.githubusercontent.com/u/46?s=200&v=4' },
  { name: 'jnewland', image: 'https://avatars.githubusercontent.com/u/47?s=200&v=4' },
  { name: 'joshknowles', image: 'https://avatars.githubusercontent.com/u/48?s=200&v=4' },
  { name: 'hornbeck', image: 'https://avatars.githubusercontent.com/u/49?s=200&v=4' },
  { name: 'jwhitmire', image: 'https://avatars.githubusercontent.com/u/50?s=200&v=4' },
  { name: 'elbowdonkey', image: 'https://avatars.githubusercontent.com/u/51?s=200&v=4' },
  { name: 'timtrueman', image: 'https://avatars.githubusercontent.com/u/52?s=200&v=4' },
  { name: 'bleything', image: 'https://avatars.githubusercontent.com/u/54?s=200&v=4' },
  { name: 'jnunemaker', image: 'https://avatars.githubusercontent.com/u/235?s=200&v=4' },
  { name: 'josh', image: 'https://avatars.githubusercontent.com/u/137?s=200&v=4' },
  { name: 'rails', image: 'https://avatars.githubusercontent.com/u/4223?s=200&v=4' },
  { name: 'facebook', image: 'https://avatars.githubusercontent.com/u/69631?s=200&v=4' },
  { name: 'google', image: 'https://avatars.githubusercontent.com/u/1342004?s=200&v=4' },
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
