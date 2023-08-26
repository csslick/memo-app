import Link from 'next/link'

export default function Header() {

  return (
    <header>
      <h1><a href="/">메모앱</a></h1>
      <Link href="/create">메모 작성</Link>
    </header>
  )
}
