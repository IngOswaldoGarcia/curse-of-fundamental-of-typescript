(
  () => {
    type Sizes = 'S'| 'M' | 'L' | 'XL';
    type Product = {
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
    };

    const products: Product[] = [];

    const addProduct = (data: Product) => {
      products.push(data);
    };

    addProduct({
      title: 'Prod1',
      createdAt: new Date(1992, 1, 1),
      stock: 12
    });

    addProduct({
      title: 'Prod2',
      createdAt: new Date(1994, 1, 1),
      stock: 12,
      size: 'M',
    });
    addProduct({
      title: 'Prod3',
      createdAt: new Date(1990, 1, 1),
      stock: 1,
      size: 'M'
    });
    console.log(products);
  })();
