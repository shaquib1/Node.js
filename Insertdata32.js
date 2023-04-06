// insert data from mongodb

const dbconnect=require('./MongoDB31');


const insert= async()=>{
  
    const db= await dbconnect();
    const result = await db.insertOne(
       
        [ 
            {name:'Alam',branch:'cse',rollno:11202615},
        {name:'shaquib',branch:'cse',rollno:11202615},
        {name:'ajit',branch:'cse',rollno:11202615}
    
    ]
           
        
    );

    if(result.acknowledged){
        console.log("data inseted");
    }
    

}

insert();