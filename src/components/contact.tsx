/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zJiJ2mn2lGY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */


export default function Contact() {
  return (
    <div className="relative mb-60 w-300 h-300 bg-gray-200 ">
        
        <img src="/assets/images/tapas.jpg" className="w-full h-full object-cover " alt="Background" />
        
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 container w-1/2 mx-auto my-8 px-11 py-6 rounded-2xl bg-gray-100 z-10">
            <h2 className="text-3xl font-bold mb-4">Contactános</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="block" htmlFor="name">Nombre</label>
                <input id="name" className="w-full p-2 border rounded-md outline-none " placeholder="Nombre" />
            </div>
            <div className="space-y-2">
                <label className="block" htmlFor="email">Email</label>
                <input id="email" className="w-full p-2 border rounded-md  outline-none" placeholder="Email" type="email" />
            </div>
            <div className="col-span-2 space-y-2">
                <label className="block" htmlFor="message">Mensaje</label>
                <textarea className="w-full p-2 border rounded-md min-h-[100px]  outline-none" id="message" placeholder="Escribe tu mensaje..." />
            </div>
            <div className="col-span-3 flex justify-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">Send message</button>
            </div>
            </div>
        </div>
    </div>
    
  )
}


