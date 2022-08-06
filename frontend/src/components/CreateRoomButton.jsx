import {useNavigate} from "react-router-dom"

function CreateRoomButton (){
  const navigate = useNavigate()  


  return (
    <div className="flex justify-center">
      <button onClick={()=>navigate("/create-room")} className="lg:w-full px-4 lg:px-0 py-2 bg-emerald-600 rounded-md">Create Room</button>
    </div>
  )
}

export default CreateRoomButton
