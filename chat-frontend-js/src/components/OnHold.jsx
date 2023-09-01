
export const OnHold = () => {
    return (
        <div className="hidden relative h-full lg:flex items-center justify-center bg-gray-200">
            <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-spin" />
            <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg">
                <p className="text-center font-bold text-xl text-gray-800 mt-36">
                    ¡Seleccione una persona.
                </p>
            </div>
        </div>

    )
}
