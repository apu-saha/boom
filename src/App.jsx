import React from 'react'
import { Route } from 'react-router-dom'

import GamePage from './components/GamePage.jsx'
import Spiner from './components/Spiner'

export default function App() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [setData])

  if (!data) return <FullPageSpiner />

  return data.games.map(({ affiliate, image, slug, title }) => (
    <Route key={slug} path={`/${slug}`}>
      <GamePage
        link={affiliate}
        title={title}
        image={image}
        liveItems={data.liveNow}
      />
    </Route>
  ))
}

function FullPageSpiner() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Spiner />
    </div>
  )
}
