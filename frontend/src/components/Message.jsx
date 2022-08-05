function Message({ text, owner, date, server }) {
  let styleBackground = "bg-slate-200"
  let dateStyle = "text-neutral-500"

  if (server) {
    styleBackground = "bg-red-500"
    dateStyle = "text-neutral-900"
  }

  return (
    <li className={`my-1 px-3 py-2 flex flex-col ${styleBackground} rounded-lg dark:bg-slate-300`}>
      <h3 className="text-xl font-semibold">{owner}</h3>
      <p className="text-lg">{text}</p>
      <span className={`text-xs ${dateStyle}`} >{date}</span>
    </li>
  );
}

export default Message;
