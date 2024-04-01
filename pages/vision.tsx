import Image from 'next/image';
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
        <Image
          src="/images/wallpapers/coastal_banner.png"
          alt="Coastal Banner Wallpaper"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <main className="p-8 text-center max-w-5xl mx-auto space-y-12">
            <h1 className="text-6xl font-bold mb-8">Embark on a Netsoul Odyssey</h1>
            <p className="text-xl mb-6">
              Netsoul is not just a game; it&apos;s a portal to a universe where adventure and learning merge, guiding you through a surreal journey across the vast expanse of cyberspace.
            </p>

            {/* Free to Play, Anywhere and Everywhere */}
            <section className="mb-10">
              <h2 className="text-4xl font-bold mb-4">Free to Play, Anywhere and Everywhere</h2>
              <p className="text-lg">
                Dive into the Netsoul world on your terms - free of charge, on mobile and PC. Experience gaming freedom like never before.
              </p>
            </section>

            {/* Cross-Chain Gaming Mechanics */}
            <section className="mb-10">
              <h2 className="text-4xl font-bold mb-4">Cross-Chain Gaming Mechanics</h2>
              <p className="text-lg">
                Navigate through the realms of Web3 with our unique cross-chain gaming mechanics. Your gateway to exploring every corner of the blockchain universe.
              </p>
            </section>

            {/* Retro Art Style */}
            <section className="mb-10">
              <h2 className="text-4xl font-bold mb-4">Retro Art Style</h2>
              <p className="text-lg">
                Immerse yourself in a world of simplistic beauty, where retro meets modernity, creating a visually captivating experience.
              </p>
            </section>

            {/* Gamified Learning */}
            <section className="mb-10">
              <h2 className="text-4xl font-bold mb-4">Gamified Learning</h2>
              <p className="text-lg">
                Each step in Netsoul is a step towards greater understanding, seamlessly blending gaming with education for a truly enlightening journey.
              </p>
            </section>


            {/* Lab Research Graphic */}
            <div className="my-10">
              <Image
                src="/images/wallpapers/lab_research.png"
                alt="Lab Research"
                layout='responsive'  // Adjusting for a responsive layout
                width={800}  // Provide specific width
                height={450}  // Provide specific height
                className="mx-auto rounded-lg shadow-lg"  // Additional styling for a polished look
              />
            </div>

            <section className="mb-10">
              <h2 className="text-4xl font-bold mb-4">Customize Your Avatar</h2>
              <p className="text-lg">
                Forge your digital identity with a customizable avatar, a personal guide through the intricate labyrinths of the digital cosmos.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-4xl font-bold mb-4">An Open Source World</h2>
              <p className="text-lg">
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
