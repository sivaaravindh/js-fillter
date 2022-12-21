
/*let num=[800,500,600,700,100,200,1000,1200,1300];

function price(num) {
  return  (num>= 500 && 1000>=num);
}
document.write(num.filter(price))
*/

let price=[800,500,600,700,100,200,1000,1200,1300];
let result=price.filter(function (price){
  return  (price>= 500 && 1000>=price);
});

document.write(result)

