import { MdDelete, MdModeEdit } from "react-icons/md";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const ContactsPage = () => {
    const [data, setData] = useState([
        { message: 'This might be the best shop ever' },
        { message: 'This is the most secure shop ever existed' },
        { message: 'Please add Yae Miko I am begging pleaseeeeeee' },
        { message: 'Please add Yae Miko I am begging pleaseeeeeee Please add Yae Miko I am begging pleaseeeeeee Please add Yae Miko I am begging pleaseeeeeee Please add Yae Miko I am begging pleaseeeeeee Please add Yae Miko I am begging pleaseeeeeee Please add Yae Miko I am begging pleaseeeeeee  Please add Yae Miko I am begging pleaseeeeeee Please add Yae Miko I am begging pleaseeeeeee Please add Yae Miko I am begging pleaseeeeeee ' },
        { message: 'Gojo Saturo' },
        { message: 'Yuji Itadori' },
    ]);

    return (
        <div className="flex">
            <Sidebar page={'contact'} />
            <div className="w-full bg-body-bg max-h-[100vh] overflow-y-auto">
                <div className="flex px-10 py-4 justify-between items-center">
                    <h1 className="text-3xl font-semibold text-sidebar-bg">Contacts</h1>
                </div>

                <div className="flex flex-col items-center mt-12 gap-y-4">
                    {data.map((item, index) => (
                        <div className="flex bg-white w-[91%] min-h-16 py-2 shadow-md items-center px-4">
                            <h1 className="text-lg font-medium ml-4">{item.message}</h1>
                    
                            <div className="flex ml-auto">
                                <h1 className="text-md mx-4">trav.whoami@gmail.com</h1>
                                <MdDelete size={24} className="hover:text-red-500 cursor-pointer"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactsPage;