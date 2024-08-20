import Sidebar from "../../components/Sidebar";

const OrdersPage = () => {
    return (
        <div className="flex">
            <Sidebar page={'order'} />
            <div className="w-full bg-body-bg">
                <h1 className="text-2xl font-bold underline">This is Orders Page</h1>
            </div>
        </div>
    )
}

export default OrdersPage;