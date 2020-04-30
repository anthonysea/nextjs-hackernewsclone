import Link from 'next/link'

export default function Header({ title = "Hacker News Clone", children }) {
    return (
        <nav className="grid grid-cols-4 py-4">
            <Link href="/" >
                <a className="col-start-1 col-span-2 text-md md:text-2xl text-gray-600">{ title }</a>
            </Link>
            <Link href="/about">
                <a className="col-start-5 col-span-1 text-md md:text-2xl text-gray-500">About</a>
            </Link>
        </nav>
    )
}