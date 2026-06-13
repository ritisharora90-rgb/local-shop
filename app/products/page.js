async function getProducts() {

const res =
await fetch(
(`${process.env.NEXT_PUBLIC_API_URL}/api/products`),
{
cache:"no-store"
}
);

return res.json();

}

export default async function Products(){

const products =
await getProducts();

return(

<div className="container">

<h1 className="mb-4">
Products
</h1>

<div className="row">

{
products.map((product)=>(

<div
key={product._id}
className="col-md-3 mb-4"
>

<div className="card p-3">

<img
src={
product.image
}
alt={
product.name
}
height="200"
className="w-100"
/>

<h5 className="mt-3">

{
product.name
}

</h5>

<p>

₹{
product.price
}

</p>

</div>

</div>

))
}

</div>

</div>

);

}