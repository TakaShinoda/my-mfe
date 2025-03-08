import { Details } from './components/Details'

function App() {
  return (
    <main className="de:container de:mx-auto de:px-4 de:py-8">
      <div className="de:grid de:grid-cols-1 de:md:grid-cols-2 de:gap-8">
        <div className="de:space-y-6">
          <Details />
        </div>
      </div>
    </main>
  )
}

export default App
