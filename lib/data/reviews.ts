const reviews = [
  {
    id: '1',
    name: 'Minh Ng',
    rating: 5,
    text: 'Hàng chất lương, giá cả cạnh tranh với dịch vụ tốt nhất 5 sao',
  },
  {
    id: '2',
    name: 'Ngọc Minh',
    rating: 3,
    text: 'Hàng đỉnh nhưng giá chưa phải tốt nhất',
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
