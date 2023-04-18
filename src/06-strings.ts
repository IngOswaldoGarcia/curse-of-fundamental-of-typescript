(
  () => {
    let ProductTitle = 'my Amazing product';
    ProductTitle = 'my Amazing product changed';
    console.log('productTitle', ProductTitle);
    const productDescription = "I'm bla bla bla bla asasas";
    console.log('productDescription', productDescription)

    let isNew: boolean = false;
    let productPrice = 100;

    const summary = `
    title: ${ProductTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
    `;

    console.log(summary)
  }
)();
