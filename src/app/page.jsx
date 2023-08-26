import Link from 'next/link'
import DeleteBtn from '@/components/DeleteBtn'; //

// 서버 컴포넌트에서 fetch
export default async function Home() {
  const res = await fetch(`http://localhost:9999/memos`, {
    cache: 'no-store'
  });
  const json = await res.json();
  const memos = await json;

  return (
    <main className='home'>
      <h2>전체메모</h2>
      <ul className="memo-list">
        {
          memos.map((memo, key) => (
            <li key={key}>
              <h3><Link href={`/read/${memo.id}`}>{memo.title}</Link></h3>
              <div className="edit-group">
                <Link className='btn' href={`/update/${memo.id}`}>수정</Link>
                <DeleteBtn id={memo.id} />
              </div>
            </li> 
          ))
        }
      </ul>
    </main>
  )
}
