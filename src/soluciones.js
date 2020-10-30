/*
En esta primera consulta uso el operador $gt, para buscar los materiales con cantidad superior a 60;

> db.inventory.find( { qty: { $gt: 60 } } )
{ "_id" : ObjectId("5f9c314d0fd472b3e0e467ae"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }   
{ "_id" : ObjectId("5f9c314d0fd472b3e0e467af"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }
*/ 


/*
En esta segunda consulta uso el operador $eq, para buscar el status que sea igual a "A";

> db.inventory.find( {status : { $eq: "A"  } } )                                                                                                   
{ "_id" : ObjectId("5f9c314d0fd472b3e0e467ac"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }    
{ "_id" : ObjectId("5f9c314d0fd472b3e0e467ad"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }  
{ "_id" : ObjectId("5f9c314d0fd472b3e0e467b0"), "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }

/*
En esta tercera consulta uso el operador $nin, para buscar los status que no coincidan ni con "A" ni con "B";
> db.inventory.find( {status : { $nin: ["A","B"]  } } )
{ "_id" : ObjectId("5f9c314d0fd472b3e0e467ae"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }   
{ "_id" : ObjectId("5f9c314d0fd472b3e0e467af"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }
{ "_id" : ObjectId("5f9c314d0fd472b3e0e467b1"), "item" : "pencil", "qty" : 25, "size" : { "h" : 15, "w" : 15.25, "uom" : "cm" }, "status" : "D" }
*/

/*
Esta es la primera consulta con el operador $and  explicito:

> db.inventory.find( { $and: [ { item : { $eq: "rubber" } }, { qty: { $lte: 50 } } ] } )
{ "_id" : ObjectId("5f9c314d0fd472b3e0e467b2"), "item" : "rubber", "qty" : 50, "size" : { "h" : 3, "w" : 5, "uom" : "cm" }, "status" : "B" }
*/

/*
Esta es la consulta usando el operador $and, de forma implícita:

> db.inventory.find( {item:"rubber", qty:{$gt:20}} )
{ "_id" : ObjectId("5f9c314d0fd472b3e0e467b2"), "item" : "rubber", "qty" : 50, "size" : { "h" : 3, "w" : 5, "uom" : "cm" }, "status" : "B" }
*/
