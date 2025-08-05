const reviews = [
  {
    id: '1',
    name: 'Minh Ng',
    rating: 5,
    text: 'High quality products, competitive prices with excellent service 5 stars',
  },
  {
    id: '2',
    name: 'Ngoc Minh',
    rating: 3,
    text: 'Top quality products but prices could be better',
  },
  {
    id: '3',
    name: 'Peter H.',
    rating: 4,
    text: 'Good services, will visit again!',
  },
];

export type Review = typeof reviews[0];

export default reviews;
