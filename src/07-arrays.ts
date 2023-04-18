(
  () => {
    const prices = [1,2,3,4,5,6,123, 'hola', true];
    prices.push(false);
    prices.push(1);
    prices.push('Adios');

    let products = ['hola', true];
    products.push(false);

    let mixed: (number | string | boolean | object)[] = ['hola', true];
    mixed.push(12);
    mixed.push('hey');
    mixed.push(false);
    mixed.push({});
    mixed.push([]);

    const numbers = [1,2,3,4,5,6,123];
    numbers.map(item => item * 2);
  }
)();
