
export default function Home() {

  return (
    <main className='home'>
      <h2>전체메모</h2>
      <ul className="memo-list">
        {
          [1,2,3].map((_, i) => (
            <li>
              <h3><a href={`/read/${i}`}>memo {i}</a></h3>
              <div className="edit-group">
                <a className='btn' href={`/update/${i}`}>수정</a>
                <button className='btn btn-danger'>삭제</button>
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
