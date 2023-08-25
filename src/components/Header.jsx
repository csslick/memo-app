import Link from 'next/link'

export default function Header() {

  return (
    <header>
      <h1><Link href="/">메모앱</Link></h1>
      <Link href="/create">메모 작성</Link>
    </header>
  )
}
