
export default async function Read(props) {
  console.log(props)
  const { id } = props.params;
  const res = await fetch(`http://localhost:9999/memos/${id}`, {
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
