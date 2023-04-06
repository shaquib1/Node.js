//connection between nodejs and mongodb

const dbconnect=require('./MongoDB31')

// 1st method to find data using then() to handle promises
//dbconnect().then((resp)=>{
 //   resp.find({name:'shaquib'}).toArray().then((data)=>{
   //     console.warn(data)
   // })
//})


// 2nd method async and await to handle promsis  to find data
// and this is best for using

const main = async()=>{
    let data =await dbconnect();
    data= await data .find().toArray();
    console.warn(data);
}
main();


