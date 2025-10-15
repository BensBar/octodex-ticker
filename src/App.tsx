import { useState } from 'react'
import { OctocatTicker } from '@/components/OctocatTicker'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable'
import { Sliders } from '@phosphor-icons/react'

type Position = 'top' | 'middle' | 'bottom'

function App() {
  const [position, setPosition] = useState<Position>('top')
  const [height, setHeight] = useState(64)
  const [padding, setPadding] = useState(12)
  const [speed, setSpeed] = useState(60)
  const [showControls, setShowControls] = useState(false)

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {position === 'top' && (
        <div className="w-full">
          <OctocatTicker height={height} padding={padding} speed={speed} />
        </div>
      )}

      <div className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
        {position === 'middle' && (
          <div className="w-full max-w-6xl">
            <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
              <ResizablePanel defaultSize={10} minSize={5} />
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={80} minSize={30}>
                <div className="flex h-full items-center justify-center p-4">
                  <OctocatTicker height={height} padding={padding} speed={speed} />
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={10} minSize={5} />
            </ResizablePanelGroup>
          </div>
        )}

        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Octocat Ticker
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            An endless scrolling showcase of GitHub's beloved Octocats
          </p>
        </div>
      </div>

      {position === 'bottom' && (
        <div className="w-full">
          <OctocatTicker height={height} padding={padding} speed={speed} />
        </div>
      )}

      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg"
        onClick={() => setShowControls(!showControls)}
      >
        <Sliders className="h-5 w-5" />
      </Button>

      {showControls && (
        <Card className="fixed bottom-24 right-6 w-80 p-6 shadow-xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">Controls</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowControls(false)}
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-foreground">Position</label>
              <div className="flex gap-2">
                <Button
                  variant={position === 'top' ? 'default' : 'outline'}
                  onClick={() => setPosition('top')}
                  size="sm"
                  className="flex-1"
                >
                  Top
                </Button>
                <Button
                  variant={position === 'middle' ? 'default' : 'outline'}
                  onClick={() => setPosition('middle')}
                  size="sm"
                  className="flex-1"
                >
                  Middle
                </Button>
                <Button
                  variant={position === 'bottom' ? 'default' : 'outline'}
                  onClick={() => setPosition('bottom')}
                  size="sm"
                  className="flex-1"
                >
                  Bottom
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-foreground">Height</label>
                <span className="text-xs text-muted-foreground">{height}px</span>
              </div>
              <Slider
                value={[height]}
                onValueChange={(value) => setHeight(value[0])}
                min={32}
                max={200}
                step={4}
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-foreground">Padding</label>
                <span className="text-xs text-muted-foreground">{padding}px</span>
              </div>
              <Slider
                value={[padding]}
                onValueChange={(value) => setPadding(value[0])}
                min={0}
                max={32}
                step={4}
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-foreground">Speed</label>
                <span className="text-xs text-muted-foreground">{speed}s</span>
              </div>
              <Slider
                value={[speed]}
                onValueChange={(value) => setSpeed(value[0])}
                min={10}
                max={120}
                step={5}
              />
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}

export default App