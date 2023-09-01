import user01 from '/avatar/user-01.jpg'
import user02 from '/avatar/user-02.jpg'

export const Online = () => {
    return (
        <div className="mr-4 text-center self-center">
            <div className="relative w-12 mb-2">
                <img src={user01} className="rounded-full" />
                <div className="absolute bg-green-300 p-1 rounded-full bottom-0 right-0 border-2 border-gray-800"></div> {/* bg-red-300  desconectado*/}
            </div>
            <small>Diego</small>
        </div>
    )
}
