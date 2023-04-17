(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  //customerAge = customerAge + '1'; //281
  customerAge = customerAge + 1; //281

  let productInStock: number;
  console.log('ProductInStock', productInStock);
  if(productInStock > 10){
    console.log('is greater');
  }

  let discount = parseInt('100');
  console.log('discount', discount)
  if(discount <= 200){
    console.log('apply');
  }else{
    console.log('not apply');
  }

  let hex = 0xFFF;
  console.log(hex);
  let bin = 0b01001;
  console.log(bin);

  const myNumber: number = 10;
})();
