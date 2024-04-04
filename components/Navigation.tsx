import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl">Netsoul</div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/test" className="text-gray-300 hover:text-white">
                  Test
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-gray-300 hover:text-white">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-300 hover:text-white">
                  Join
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation
