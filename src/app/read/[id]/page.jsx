
export default async function Read(props) {
  console.log(props)
  const { id } = props.params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
    cache: 'no-store'
  });
  const json = await res.json();
  const memo = await json;

  return (
    <main className="read">
      <h2>{memo.title}</h2>
      <p>{memo.body}</p>
    </main>
  )
}
