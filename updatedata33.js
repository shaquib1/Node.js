// update data in mongodb

const dbconnect=require('./MongoDB31');


const updateData= async()=>{
    let data= await dbconnect();

    // this is for single update
   //  let result=data.updateOne(
     //   {name:'pranjal'},
     //  { 
      // $set:{name:'Rana pranjal'}
 //   }
   //  )

   let result=await data.updateMany(
    
        {name:'shaquib'},

        {$set:{name:'Md Shaquib'}}

    

   )


    console.log(data);

}


updateData();