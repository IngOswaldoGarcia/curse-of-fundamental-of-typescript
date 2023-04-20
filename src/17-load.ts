import _ from 'lodash';


const data = [
  {
    usename: 'nico',
    role: 'admin'
  },
  {
    usename: 'valentina',
    role: 'seller'
  },
  {
    usename: 'zulema',
    role: 'seller'
  },
  {
    usename: 'santiago',
    role: 'costumer'
  },
];


const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
