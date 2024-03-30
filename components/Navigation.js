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
                <Link href="/">
                  <a className="text-gray-300 hover:text-white">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/test">
                  <a className="text-gray-300 hover:text-white">Test</a>
                </Link>
              </li>
              <li>
                <Link href="/vision">
                  <a className="text-gray-300 hover:text-white">Vision</a>
                </Link>
              </li>
              <li>
                <Link href="/join">
                  <a className="text-gray-300 hover:text-white">Join</a>
                </Link>
              </li>
              <li>
                <Link href="/support">
                  <a className="text-gray-300 hover:text-white">Support</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
