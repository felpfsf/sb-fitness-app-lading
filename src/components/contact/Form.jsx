export const Form = () => {
  return (
    <form className="w-full mt-5 flex flex-col gap-6">
      <input className="p-2 text-sm text-white bg-transparent border-b" type="text" placeholder="Enter your name" required />
      <input className="p-2 text-sm text-white bg-transparent border-b" type="tel" pattern="[0-9]{2}-[0-9]{4,5}-[0-9]{4}" placeholder="Enter phone" />
      <input className="p-2 text-sm text-white bg-transparent border-b" type="text" placeholder="Enter e-mail" required />
      <textarea className="h-[72px] p-2 text-sm text-white bg-transparent border-b" placeholder="Enter your message" required></textarea>
      <button className="w-44 py-2 px-3 bg-sbPallet-accent hover:text-sbPallet-accent hover:bg-white rounded-lg ease-in duration-100">Submit</button>
    </form>
  )
}