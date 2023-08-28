'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Update(props) {
  const { id } = props.params;
  const [title, setTitle] = useState(''); // 글제목 변수
  const [body, setBody] = useState(''); // 글내용 변수
  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title)
        setBody(data.body)
      })
  }, [])
  console.log('title, body = ', title, body);

  return (
    <main className="update">
      <h2>메모 수정하기</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;

        // 서버전송
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: title,
            body: body
          })
        })
          .then(res => res.json())
          .then(msg => {
            console.log(msg)
            router.push(`/read/${msg.id}`)
          })
      }}>
        <div className="input-group">
          <input 
            onChange={(e) => setTitle(e.target.value)}
            type="text" name="title" value={title} />
        </div>
        <div className="input-group">
          <textarea 
            onChange={(e) => setBody(e.target.value)}
            name="body" value={body}></textarea>
        </div>
        <div className="input-group">
          <button type="submit" className="btn">글수정</button>
        </div>
      </form>
    </main>
  )
}
