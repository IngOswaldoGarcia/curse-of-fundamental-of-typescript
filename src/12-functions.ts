(
  () => {
    type Sizes = 'S'| 'M' | 'L' | 'XL';
    function createProductJson(
      title: string,
      createdAt: Date,
      stock: number,
      size: Sizes
    ){
      return {
        title,
        createdAt,
        stock,
        size,
      }
    };

    const producto1 = createProductJson('P1', new Date(), 12, 'XL');


    const createProductJsonV2 = (
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes | undefined
    ) => {
      return {
        title,
        createdAt,
        stock,
        size,
      }
    };

    const producto2 = createProductJsonV2('P1', new Date(), 12);

    console.log(producto2);
    console.log(producto2.title);
    console.log(producto2.stock);
    console.log(producto2.size);
  })();
