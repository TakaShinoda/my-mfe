import { Overview } from './components/Overview'

function App() {
  return (
    <main className="ov:container ov:mx-auto ov:px-4 ov:py-8">
      <div className="ov:grid ov:grid-cols-1 ov:md:grid-cols-2 ov:gap-8">
        <Overview />
      </div>
    </main>
  )
}

export default App
