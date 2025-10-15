import { useState } from 'react'
import { OctocatTicker } from '@/components/OctocatTicker'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

type Position = 'top' | 'middle' | 'bottom'

function App() {
  const [position, setPosition] = useState<Position>('top')

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {position === 'top' && (
        <div className="w-full">
          <OctocatTicker />
        </div>
      )}

      <div className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
        {position === 'middle' && (
          <div className="w-full max-w-4xl">
            <OctocatTicker />
          </div>
        )}

        <Card className="w-full max-w-2xl p-8">
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                Octocat Ticker
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                An endless scrolling showcase of GitHub's beloved Octocats
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-foreground">
                Position the ticker:
              </label>
              <div className="flex gap-2">
                <Button
                  variant={position === 'top' ? 'default' : 'outline'}
                  onClick={() => setPosition('top')}
                  className="flex-1"
                >
                  Top
                </Button>
                <Button
                  variant={position === 'middle' ? 'default' : 'outline'}
                  onClick={() => setPosition('middle')}
                  className="flex-1"
                >
                  Middle
                </Button>
                <Button
                  variant={position === 'bottom' ? 'default' : 'outline'}
                  onClick={() => setPosition('bottom')}
                  className="flex-1"
                >
                  Bottom
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-muted/50 p-4">
              <h2 className="text-sm font-medium text-foreground">Features</h2>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Smooth infinite scrolling animation</li>
                <li>• Displays iconic GitHub Octocats</li>
                <li>• Compact design for flexible placement</li>
                <li>• Hover to see Octocat names</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {position === 'bottom' && (
        <div className="w-full">
          <OctocatTicker />
        </div>
      )}
    </div>
  )
}

export default App