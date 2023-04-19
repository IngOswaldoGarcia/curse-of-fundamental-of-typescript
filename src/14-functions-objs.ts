(
  () => {
    const login = ({email, password}: {email: string, password: string}) => {
      console.log(email, password);
    }

    //login('os@os.com', '12312312');
    login({
      email: 'os@os.com',
      password: '12121212'
    });


    type Sizes = 'S'| 'M' | 'L' | 'XL';

    const products: any = [];

    const addProduct = (data: {
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
    }) => {
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

    console.log(products);

  })();
