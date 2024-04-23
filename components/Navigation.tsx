import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Implement logout logic here
    router.push('/'); // Redirect to the home page
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl">Netsoul</div>
          <div>
            <ul className="flex space-x-4">
            <li>
                {/* Change the Link component to a standard anchor tag */}
                <a href="https://www.net-soul.com/" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <Link href="/TestNet">
                  <span className="cursor-pointer text-gray-300 hover:text-white">TestNet</span>
                </Link>
              </li>
              {/* Other navigation items... */}
              <li>
                <span onClick={handleLogout} className="cursor-pointer text-gray-300 hover:text-white">
                  Log Out
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
