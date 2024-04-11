// Muted and unused for now, since all this tab information is on the Net-soul.com splash page


import Head from 'next/head';
import Navigation from '../components/Navigation';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Support - Netsoul</title>
      </Head>

      <Navigation />
      <main className="p-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Support Netsoul</h1>

        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">Be a Part of Our Journey</h2>
          <p className="mb-4">Join us as a player and explore the vast, dynamic world of Netsoul. Your support through donations not only fuels our adventure but also shapes the future of this universe.</p>
          <p className="mb-4">Early supporters will be rewarded with exclusive Genesis Netsoul NFTs, a testament to your pioneering spirit and belief in our vision.</p>
          {/* Donation Button or Link */}
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Donate</button>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">Investors & Partners</h2>
          <p className="mb-4">Are you interested in investing or partnering with Netsoul? We welcome visionaries who share our passion for the blockchain gaming revolution.</p>
          <p className="mb-4">Connect with our relations team to explore how we can collaborate to unlock new potentials and redefine gaming.</p>
          {/* Contact Button or Link */}
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">Contact Us</button>
        </section>

      </main>
      {/* Footer or additional components can go here */}
    </div>
  );
};

export default SupportPage;
