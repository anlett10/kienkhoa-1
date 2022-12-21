const reviews = [
  {
    id: '1',
    name: 'Minh Ng',
    rating: 5,
    text: 'Hàng chất lương, giá cả cạnh tranh với dịch vụ tốt nhất 5 sao',
  },
  {
    id: '2',
    name: 'Donec Nulla Velit',
    rating: 3,
    text: 'Nullam fermentum nisl non mattis fringilla!!!!',
  },
  {
    id: '3',
    name: 'J Tempus',
    rating: 4,
    text: 'Pellentesque faucibus quam eu vehicula pulvinar. Integer cursus fringilla metus.',
  },
];

export type Review = typeof reviews[0];

export default reviews;
