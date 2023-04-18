(
  () => {
    let userId: (number | string);
    userId = 12323;
    userId = 'snfsdlkf';

    function greeting (myText: string | number) {
      if( typeof myText === 'string'){
        console.log(`string ${myText.toLowerCase()}`);
      }else{
        console.log(`number ${myText.toFixed(1)}`);
      }
    }
    greeting('asas');
    greeting(1212.121212);
  }
)();
