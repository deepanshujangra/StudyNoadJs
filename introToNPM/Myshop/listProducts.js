var faker = require('faker');
function fun(){
    for (i = 0; i < 10; i++){
        console.log(faker.commerce.productName()+" -- "+faker.commerce.price() );
    }
}

fun();