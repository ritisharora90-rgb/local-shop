import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import {
connectDB
}
from "@/lib/mongodb";

import User
from "@/models/User";

export async function POST(
request
){

try{

await connectDB();

const body =
await request.json();

const {
name,
email,
password
} = body;

const existing =
await User.findOne({
email
});

if(existing){

return NextResponse.json(
{
message:
"Email already exists"
},
{
status:400
}
);

}

const hashed =
await bcrypt.hash(
password,
10
);

await User.create({

name,

email,

password:
hashed,

role:
"customer"

});

return NextResponse.json(
{
message:
"User created"
}
);

}

catch(error){

console.log(
error
);

return NextResponse.json(
{
message:
error.message
},
{
status:500
}
);

}

}
