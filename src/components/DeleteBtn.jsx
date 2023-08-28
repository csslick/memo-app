'use client'

import { useRouter } from 'next/navigation'

export default function DeleteBtn(props) {
  const router = useRouter();
  const id = props.id;
  const handleDelete = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(msg => {
        console.log('삭제: ', msg)
        router.push('/')
        router.refresh();
      })
  }

  return (
    <button 
      onClick={handleDelete}
      className='btn btn-danger'
    >삭제</button>
  )
}
