import { useState } from "react";
import { CiCircleList } from "react-icons/ci";
import { GrContact } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { IoSpeedometer, IoSpeedometerOutline } from "react-icons/io5";
import { MdOutlineInventory2, MdOutlinePlaylistAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ page }) => {
    const [open, setOpen] = useState(true);

    return (
        <div className={`${open ? 'min-w-72' : 'min-w-20'} bg-sidebar-bg h-screen duration-300 relative`}>
            <img 
                src="./control.png" 
                className={`absolute -right-3 top-9 w-7 cursor-pointer duration-500 ${!open && 'rotate-180'}`}
                onClick={() => setOpen(!open)}
            />

            <div className="flex p-4 justify-center gap-4">
                <img src="./logo.png" className={`${open ? 'w-12' : 'w-9'} duration-300 cursor-pointer`} />
                <h1 className={`text-white font-bold text-[24px] pt-[5px] ${!open && 'hidden'} duration-300`}>FNITY ADMIN</h1>
            </div>

            <ul className="pt-6 flex flex-col gap-y-3">
                <Link to={'/dashboard'} className={`flex items-center gap-3 text-gray-300 cursor-pointer p-3 hover:bg-light-white mx-[16px] rounded-lg ${page === 'dashboard' && 'bg-light-white'}`}>
                    {open ? (
                        <IoSpeedometerOutline size={20}/>
                    ) : (
                        <IoSpeedometerOutline size={25}/>
                    )}
                    <span className={`${!open && 'hidden'}`}>Dashboard</span>
                </Link>

                <Link to={'/items'} className={`flex items-center gap-3 text-gray-300 cursor-pointer p-3 hover:bg-light-white mx-[16px] rounded-lg ${page === 'items' && 'bg-light-white'}`}>
                    {open ? (
                        <CiCircleList size={20}/>
                    ) : (
                        <CiCircleList  size={25}/>
                    )}
                    <span className={`${!open && 'hidden'}`}>Items</span>
                </Link>

                <Link to={'/add-item'} className={`flex items-center gap-3 text-gray-300 cursor-pointer p-3 hover:bg-light-white mx-[16px] rounded-lg ${page === 'add-item' && 'bg-light-white'}`}>
                    {open ? (
                        <MdOutlinePlaylistAdd size={20}/>
                    ) : (
                        <MdOutlinePlaylistAdd size={25}/>
                    )}
                    <span className={`${!open && 'hidden'}`}>Add Item</span>
                </Link>

                <Link to={'/orders'} className={`flex items-center gap-3 text-gray-300 cursor-pointer p-3 hover:bg-light-white mx-[16px] rounded-lg ${page === 'order' && 'bg-light-white'}`}>
                    {open ? (
                        <MdOutlineInventory2 size={20}/>
                    ) : (
                        <MdOutlineInventory2 size={25}/>
                    )}
                    <span className={`${!open && 'hidden'}`}>Orders</span>
                </Link>

                <Link to={'/contacts'} className={`flex items-center gap-3 text-gray-300 cursor-pointer p-3 hover:bg-light-white mx-[16px] rounded-lg ${page === 'contact' && 'bg-light-white'}`}>
                    {open ? (
                        <GrContact size={20}/>
                    ) : (
                        <GrContact size={25}/>
                    )}
                    <span className={`${!open && 'hidden'}`}>Contacts</span>
                </Link>

                <Link className={`flex items-center gap-3 text-gray-300 cursor-pointer p-3 hover:bg-light-white mx-[16px] rounded-lg`}>
                    {open ? (
                        <IoIosLogOut size={20}/>
                    ) : (
                        <IoIosLogOut size={25}/>
                    )}
                    <span className={`${!open && 'hidden'}`}>Logout</span>
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar;