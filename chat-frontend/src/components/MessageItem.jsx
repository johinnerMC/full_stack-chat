import user02 from '/avatar/user-02.jpg'

export const MessageItem = () => {
    return (
        <div className="flex mb-12"> {/* flex-row-reverse => el remitente  */}
            <img src={user02} className="self-end rounded-full w-10 mr-4" />
            <div className="flex flex-col">
                <div className="bg-white p-6 rounded-3xl rounded-bl-none w-96 shadow-sm mb-2"> {/* {bg-blue-500, text-white => remitente} {bg-white, shadow-sm => cliente} */} 
                    <small className="inline-block text-gray-500 mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                        dapibus a erat ac facilisis. Quisque in fringilla lorem.
                    </small>
                </div>
                <small className="text-gray-500">09:55 am</small>
            </div>
        </div>
    );
};
