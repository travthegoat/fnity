import Sidebar from "../../components/Sidebar";

const AddItemPage = () => {
    return (
        <div className="flex">
            <Sidebar page={'add-item'}/>
            <div className="w-full bg-body-bg flex flex-col items-center">
                <h1 className="text-4xl text-sidebar-bg font-bold mt-4">Add Item</h1>

                <div className="flex flex-col w-[80%] h-[50%] justify-center items-center mt-12 gap-y-6">
                    <input 
                        type="text" 
                        placeholder="Enter Item's Name" 
                        className="w-[50%] h-14 shadow-lg rounded-xl px-4 text-lg" 
                    />
                    <input 
                        type="text" 
                        placeholder="Enter Item's Price"
                        className="w-[50%] h-14 shadow-lg rounded-xl px-4 text-lg"
                    />
                    <select 
                        className="w-[50%] h-14 shadow-lg rounded-xl px-4 text-lg"
                    >
                        <option value="none" className="text-gray-400">-- Select Rarity --</option>
                        <option value="common">Common</option>
                        <option value="uncommon">Uncommon</option>
                        <option value="rare">Rare</option>
                        <option value="ultra-rare">Ultra Rare</option>
                    </select>
                    <button
                        className="w-[50%] h-14 bg-sidebar-bg text-white shadow-lg rounded-xl text-xl font-semibold hover:shadow-2xl duration-300"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddItemPage;