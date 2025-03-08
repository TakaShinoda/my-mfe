import { Card, Badge } from '@radix-ui/themes'
import bulbasaur from '/bulbasaur.png'
import { PokeStats } from './components/PokeStats'

function App() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-muted/30 rounded-lg p-8 flex flex-col items-center justify-center">
          <div className="relative w-64 h-64">
            <img src={bulbasaur} alt="フシギダネ" className="object-contain" />
          </div>

          <div className="mt-4 text-center">
            <span className="text-lg text-muted-foreground">0001</span>
            <h1 className="text-3xl font-bold capitalize mt-2">フシギダネ</h1>
            <div className="flex justify-center gap-2 mt-3">
              <Badge color="cyan">くさ</Badge>
              <Badge color="indigo">どく</Badge>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <div className="pt-6">
              <h2 className="text-xl font-semibold mb-4">ステータス</h2>
              <PokeStats />
            </div>
          </Card>

          <Card>
            <div className="pt-6">
              <h2 className="text-xl font-semibold mb-4">詳細</h2>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    高さ
                  </dt>
                  <dd>0.7 m</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    重さ
                  </dt>
                  <dd>6.9 kg</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    分類
                  </dt>
                  <dd className="capitalize">たねポケモン</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    特性
                  </dt>
                  <dd>しんりょく</dd>
                </div>
              </dl>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}

export default App
