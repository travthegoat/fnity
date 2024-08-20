import { MdDelete, MdModeEdit } from "react-icons/md";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const ItemsPage = () => {
    const [data, setData] = useState([
        { img: 'download.jpg', title: 'My hero academia'},
        { img: 'download.jpg', title: 'Naruto'},
        { img: 'download.jpg', title: 'Naruto Uzumaki'},
        { img: 'download.jpg', title: 'Uchiha Sasuke'},
        { img: 'download.jpg', title: 'Gojo Saturo'},
        { img: 'download.jpg', title: 'Yuji Itadori'},
    ]);
    const [query, setQuery] = useState('');

    const filteredItems = data.filter(item => {
        return item.title.toLowerCase().includes(query.toLowerCase())
    })

    return (
        <div className="flex">
            <Sidebar page={'items'} />
            <div className="w-full bg-body-bg max-h-[100vh] overflow-y-auto">
                <div className="flex px-10 py-4 justify-between items-center">
                    <h1 className="text-3xl font-semibold text-sidebar-bg">Items</h1>
                    <input 
                        type="text" 
                        placeholder="Search Items" 
                        className="w-80 h-12 rounded-full px-4 pb-1 focus:border-sidebar-bg"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                </div>

                <div className="flex flex-col items-center mt-12 gap-y-4">
                    {filteredItems.map((item, index) => (
                        <div className="flex bg-white w-[91%] h-16 shadow-md items-center px-4">
                            <img className="w-10" src={`./${item.img}`} alt="" />
                            <h1 className="text-xl font-medium ml-4">{item.title}</h1>
                    
                            <div className="flex ml-auto">
                                <h1 className="text-md mx-4">$192.14</h1>
                                <MdModeEdit size={24} className="hover:text-blue-500 cursor-pointer"/>
                                <div className="h-6 w-[1px] bg-black mx-2"></div>
                                <MdDelete size={24} className="hover:text-red-500 cursor-pointer"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemsPage;