'use client';

import { useState } from 'react';

export default function RegisterPage() {

const [formData,setFormData]=useState({
name:'',
email:'',
password:''
});

const handleChange=(e)=>{

setFormData({
...formData,
[e.target.name]:
e.target.value
});

};

const handleSubmit=async(e)=>{

e.preventDefault();

try{

const res=
await fetch(
'/api/register',
{
method:'POST',

headers:{
'Content-Type':
'application/json'
},

body:
JSON.stringify(
formData
)
}
);

const text=
await res.text();

console.log(text);

if(!text){

alert(
'Server returned empty response'
);

return;

}

const data=
JSON.parse(text);

if(!res.ok){

alert(
data.message
||
'Registration failed'
);

return;

}

alert(
data.message
||
'Registered Successfully'
);

setFormData({
name:'',
email:'',
password:''
});

}

catch(error){

console.log(error);

alert(
'Something went wrong'
);

}

};

return(

<div
className=
"container mt-5"
>

<h2>
Create Account
</h2>

<form
onSubmit={
handleSubmit
}
>

<input
type="text"
name="name"
value={
formData.name
}
placeholder="Name"
className=
"form-control mb-3"
onChange={
handleChange
}
/>

<input
type="email"
name="email"
value={
formData.email
}
placeholder="Email"
className=
"form-control mb-3"
onChange={
handleChange
}
/>

<input
type="password"
name="password"
value={
formData.password
}
placeholder="Password"
className=
"form-control mb-3"
onChange={
handleChange
}
/>

<button
className=
"btn btn-primary"

>

Register

</button>

</form>

</div>

);

}
