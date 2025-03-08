import { Overview } from 'overviewApp/Overview'
import { Stats } from 'statsApp/Stats'
import { Details } from 'detailsApp/Details'

function App() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Overview />

        <div className="space-y-6">
          <Stats />
          <Details />
        </div>
      </div>
    </main>
  )
}

export default App
