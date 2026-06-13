import mongoose from "mongoose";

const MONGODB_URI =
process.env.MONGODB_URI;

if(!MONGODB_URI){
throw new Error(
"Missing MONGODB_URI"
);
}

let isConnected =
false;

export async function connectDB(){

try{

if(isConnected){

return;

}

await mongoose.connect(
MONGODB_URI,
{
dbName:"localshop"
}
);

isConnected =
true;

console.log(
"Mongo Connected"
);

}

catch(error){

console.log(
error
);

throw error;

}

}
