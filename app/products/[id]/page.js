async function getProduct(id){

const res =
await fetch(
`http://127.0.0.1:8000/api/products/${id}`,
{
cache:"no-store"
}
);

if(!res.ok){
return null;
}

return res.json();

}

export default async function ProductPage(
props
){

const params =
await props.params;

const product =
await getProduct(
params.id
);

console.log(
"PARAMS:",
params
);

console.log(
"PRODUCT:",
product
);

if(!product){
return(
<h1>
Product not found
</h1>
);
}

return(

<div>

<h1>
{product.name}
</h1>

<img
src={product.image}
alt={product.name}
width={300}
/>

<h2>
₹{product.price}
</h2>

<p>
{product.description}
</p>

</div>

);

}