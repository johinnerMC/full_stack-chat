
import { MessageTray, SendMessage } from './'
import user01 from '/avatar/user-01.jpg'
import user02 from '/avatar/user-02.jpg'

export const RightContainer = () => {
    return (
        <>

            {/*    descripcion superior   */}
            <div className="py-6 px-20 border-b">
                <div className="flex">
                    <div className="flex flex-grow">
                        <div className="relative mr-4">
                            <img src={user02} className="rounded-full w-12" />
                            <div className="absolute bg-red-300 p-1 rounded-full bottom-0 right-0 border-2 border-gray-800"></div>
                        </div>
                        <div>
                            <p className="font-medium">Daniela López</p>
                            <small className="text-gray-500">Online</small>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* <!--  contenedor mesajes --> */}
            <MessageTray />

            {/*  <!--formulario envio de mensaje --> */}
            <SendMessage />

        </>
    )
}
