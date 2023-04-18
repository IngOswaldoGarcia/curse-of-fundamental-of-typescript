(
  () => {
    let myDynamicVAr: any;
    myDynamicVAr = false;
    myDynamicVAr = 123;
    myDynamicVAr = {};

    myDynamicVAr = 'Hola';
    const rta = (myDynamicVAr as string).toLowerCase();
    console.log(rta);

    myDynamicVAr = 1212;
    const rta2 = (<number>myDynamicVAr).toFixed();
    console.log(rta2);
  }
)();
