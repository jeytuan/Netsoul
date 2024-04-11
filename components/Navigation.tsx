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
                {/* Update the href attribute to point to the main splash page */}
                <Link href="https://net-soul.com">
                  <a className="text-gray-300 hover:text-white">Home</a>
                </Link>

              </li>
              {/*   Muted for now, since all these tabs are on the Net-soul.com splash page
              
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
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation
