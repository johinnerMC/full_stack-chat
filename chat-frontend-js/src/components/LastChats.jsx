import user01 from '/avatar/user-01.jpg'
import user02 from '/avatar/user-02.jpg'

export const LastChats = () => {
    return (
        <div className="flex bg-gray-100 mb-4 p-4 rounded active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 cursor-pointer">
            <img src={user02} className="self-start rounded-full w-12 mr-4" />
            <div className="w-full overflow-hidden">
                <div className="flex mb-1">
                    <p className="font-medium flex-grow">Daniela López</p>
                    <small className="text-gray-500">09:55 am</small>
                </div>
                <small className="overflow-ellipsis overflow-hidden block whitespace-nowrap text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                    dapibus a erat ac facilisis. Quisque in fringilla lorem.
                </small>
            </div>
        </div>
    );
};
