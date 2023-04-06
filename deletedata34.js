// delete data from mongodb

const dbconnect=require('./MongoDB31');


const deleteData=async()=>{
    let data= await dbconnect();
    let result= await data.deleteOne(
        {
            name:'Alam'
        }

    )

   console.warn(result);
    if(result.acknowledged){
        console.log("data deleted");
    }

}

deleteData();
