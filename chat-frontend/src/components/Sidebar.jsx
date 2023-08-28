
import { Online, Searchbox } from './'


export const Sidebar = () => {
    return (
        <div className="bg-white xl:w-3/12 lg:w-4/12 w-full p-6">
            <h3 className="text-2xl mb-8">Chat en línea</h3>

            <div className="flex overflow-auto w-full mb-8">

                <Online />
                <Online />

            </div>
            
            <Searchbox />

        </div>
    )
}
