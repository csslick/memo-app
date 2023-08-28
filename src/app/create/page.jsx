'use client'

// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter()
  console.log('create: ', process.env.NEXT_PUBLIC_API_URL)
  return (
    <main className="create">
      <h2>메모 작성하기</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        
        // 서버전송
        fetch(process.env.NEXT_PUBLIC_API_URL, {
          method: "POST",
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
            // location.href = `/read/${msg.id}`
          })
      }}>
        <div className="input-group">
          <input type="text" name="title" placeholder="제목"/>
        </div>
        <div className="input-group">
          <textarea name="body" placeholder="body"></textarea>
        </div>
        <div className="input-group">
          <button type="submit" className="btn">글쓰기</button>
        </div>
      </form>
    </main>
  )
}
