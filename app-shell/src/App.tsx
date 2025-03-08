import { Card } from '@radix-ui/themes'
import { Overview } from 'overviewApp/Overview'
import { Stats } from 'statsApp/Stats'

function App() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Overview />

        <div className="space-y-6">
          <Stats />

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
