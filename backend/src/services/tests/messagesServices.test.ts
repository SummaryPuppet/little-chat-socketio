import {serverSendMsgs} from "../messagesServices";

describe("server send msgs", ()=>{
  test("for socket other element", ()=>{
    serverSendMsgs("", "hola")
  })

  test("for undefined", ()=>{
    serverSendMsgs(undefined, "hola")
  })
})
