async function getOrders() {
const res = await fetch(
"http://localhost:3000/api/orders",
{
cache: "no-store",
}
);

return res.json();
}

export default async function OrderStatus() {

const orders = await getOrders();

return (

<div className="container">

<h1 className="mb-4">
My Orders
</h1>

<div className="row">

{orders?.map((order)=>(

<div
className="col-12 col-md-4 mb-3"
key={order._id}
>

<div
className="card p-3 h-100"
>

<p>{order.productName}</p>

<p>₹{order.price}</p>

<p>Qty: {order.quantity}</p>

<p>
Status:
{
order.status?.toLowerCase()==="accepted"

? "✅ Confirmed"

: order.status?.toLowerCase()==="rejected"

? "❌ Rejected"

: "⏳ Pending"
}
</p>

</div>

</div>

))}

</div>

</div>

);

}