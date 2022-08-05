import { Link } from "react-router-dom"

function NotFound(){
  return (
    <main className="my-3 flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl font-bold">Not found the page</h1>
      <Link to="/" className="px-8 py-3 text-white bg-sky-700 rounded-md">Go to home</Link>
    </main>
  )
}

export default NotFound
