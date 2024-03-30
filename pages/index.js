import Head from 'next/head'
import Navigation from '../components/Navigation'
import WallpaperEngine from '../components/WallpaperEngine'
import Game from '../components/Game'
import MusicPlayer from '../components/MusicPlayer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Netsoul</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main>
        <WallpaperEngine />
        <Game />
      </main>
      <MusicPlayer />
    </div>
  )
}
