import Head from 'next/head';
import Navigation from '../components/Navigation';

const VisionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Our Vision - Netsoul</title>
      </Head>

      <Navigation />

      {/* Wallpaper Section */}
      <div className="relative w-full min-h-screen">
        <img
          src="/images/wallpapers/coastal_banner.png"
          alt="Coastal Banner Wallpaper"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
          <main className="p-4 text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Embark on a Netsoul Odyssey</h1>
            <p className="text-lg mb-4">
              Netsoul is not just a game; it's a portal to a universe where adventure and learning merge, guiding you through a surreal journey across the vast expanse of cyberspace.
            </p>

            <section className="mb-6">
              <h2 className="text-3xl font-semibold mb-3">Free to Play, Anywhere and Everywhere</h2>
              <p>
                Dive into the Netsoul world on your terms - free of charge, on mobile and PC. Experience gaming freedom like never before.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-3xl font-semibold mb-3">Cross-Chain Gaming Mechanics</h2>
              <p>
                Navigate through the realms of Web3 with our unique cross-chain gaming mechanics. Your gateway to exploring every corner of the blockchain universe.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-3xl font-semibold mb-3">Retro Art Style</h2>
              <p>
                Immerse yourself in a world of simplistic beauty, where retro meets modernity, creating a visually captivating experience.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-3xl font-semibold mb-3">Gamified Learning</h2>
              <p>
                Each step in Netsoul is a step towards greater understanding, seamlessly blending gaming with education for a truly enlightening journey.
              </p>
            </section>

            {/* Lab Research Graphic */}
            <div className="mb-6">
              <img
                src="/images/wallpapers/lab_research.png"
                alt="Lab Research"
                className="mx-auto"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>

            <section className="mb-6">
              <h2 className="text-3xl font-semibold mb-3">Customize Your Avatar</h2>
              <p>
                Forge your digital identity with a customizable avatar, a personal guide through the intricate labyrinths of the digital cosmos.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-3xl font-semibold mb-3">An Open Source World</h2>
              <p>
                Be part of a community-driven universe where players and developers collectively shape the Netsoul world, making every encounter unique and dynamic.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;
