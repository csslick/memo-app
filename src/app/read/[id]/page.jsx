
export default function Read(props) {
  console.log(props)
  const { id } = props.params;

  return (
    <main>
      <h2>Memo {id}</h2>
    </main>
  )
}
