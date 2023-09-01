
export const SendMessage = () => {
    return (
        <div className="flex py-6 px-20 border-t">
            <div className="w-4/5">
                <input type="text" className="rounded-sm px-4 py-2 focus:outline-none bg-gray-100 w-full" placeholder="Escribe tu mensaje..." />
            </div>
            <div className="w-1/5 flex justify-end">
                {/* <a href="" className="bg-blue-500 text-white rounded px-4 py-2">Enviar</a> */}
            </div>
        </div>
    )
}
