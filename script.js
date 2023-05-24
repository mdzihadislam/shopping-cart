// document.getElementById("plus-btn").addEventListener("click",function(){
// var input_value=document.getElementById("input-value");
// var parse_float=parseInt(input_value.value)
// var add_count=parse_float + 1;
// input_value.value=add_count;
//  const caseTotal=add_count * 1219;
//  document.getElementById("case-total").innerText=caseTotal;

// })
// document.getElementById("minus-btn").addEventListener("click",function(){
// var input_value=document.getElementById("input-value");
// var parse_float=parseInt(input_value.value)
// var add_count=parse_float - 1;
// input_value.value=add_count;
// const caseTotal=add_count * 1219;
// document.getElementById("case-total").innerText=caseTotal;
 
// })


function handleProductChange(product,isIncrease){
    var product_input=document.getElementById(product + "-count");
    var  product_count=parseInt(product_input.value)
    var productNewCount=product_count;
    if(isIncrease == true ){
        productNewCount=product_count + 1;
    }if(isIncrease == false && productNewCount > 0){
        productNewCount=product_count - 1;
    }
    product_input.value=productNewCount;
    // const caseTotal=productNewCount * 1219;
      let productTotal=0;
      if(product === 'phone'){
        productTotal= productNewCount * 1219;
      }if(product == 'case'){
        productTotal= productNewCount *  59;
      }
    document.getElementById(product + "-total").innerText=productTotal;
    calculateTotal();
 } 

 function calculateTotal(){
  const phoneCount=getInputValue('phone');
  const caseCount=getInputValue('case')
  const totalPrice=phoneCount * 1219 + caseCount * 59;
  document.getElementById("total-price").innerText="$"+totalPrice;
  
  const tax= Math.round(totalPrice * 0.1);
  document.getElementById("tax-amount").innerText="$"+tax;
  
  const grantTotal= totalPrice + tax;
  document.getElementById("grant-total").innerText="$"+grantTotal;
 }
function getInputValue(product){
  const productInput=document.getElementById(product+'-count');
  const productCount=parseInt(productInput.value);
  return productCount;
}





//  function calculateTotal(){
//   const phoneInput= document.getElementById("phone-count")
//   const phoneCount=parseInt(phoneInput.value)

//   const caseInput=document.getElementById("case-count");
//   const caseCount=parseInt(caseInput.value);

//   const totalPrice=phoneCount * 1219 + caseCount * 59;
  
//   document.getElementById("total-price").innerText="$"+totalPrice;
//  }

//      function handleProductChange(isIncrease){
//         var phone_count=document.getElementById("input-value");
//         var phone_value=parseInt(phone_count.value)
//         var add_count= phone_value;
//         if(isIncrease == true ){
//                add_count=add_count +1;
//         }if(isIncrease == false && add_count > 0){
//             add_count=add_count - 1;
//         }
//         phone_count.value=add_count;
//         const caseTotal=add_count * 1219;
//         document.getElementById("phone-total").innerText=caseTotal;
//      } 
// function clickHandel(increase){
//     var case_input=document.getElementById("case-input");
//     var case_value=parseInt(case_input.value);
//     var case_minus=case_value;
//     if(increase == true){
//         case_minus=case_value + 1;
//     }if(increase == false && case_minus > 0){
//         case_minus=case_value - 1;
//     }

//     case_input.value=case_minus;
//     var case_multiplication=case_minus * 59;
//     document.getElementById("case_total-number").innerText=case_multiplication;
// }