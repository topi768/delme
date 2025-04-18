type News = New[];
type New = {
  id: string;
  img: string;
  date: string;
  title: string;
  text: string;
};
const names = [
  'Trallalero_Trallala',
  'Assassino_Cappuccino',
  'Lililarilà',
  'Scimpanzini_Bananini',
  'Bombardino_Croccodillo',
  'Bombardini_Gusini',
  'Frigo_Cammello',
  'Trippi_Troppi_Troppa_Trippa',
  'Brr_Brr_Patpin',
  'Tu_Tu_Tung_Sa_Ul',
  'Glorbo',
  'Trulimero_Trulicina.',
];

export const newsData: News = Array.from({ length: 64 }, (_, index) => {
  const nameIndex = index % 12;
  const cycle = Math.floor(index / 12);
  const id = cycle > 0 ? `${names[nameIndex]}_${cycle}` : names[nameIndex];

  return {
    id,
    img: `/img/news/n${(index % 4) + 1}.png`,
    date: '20 авг 2021',
    title: 'Как сделать строительство дешевле? ' + (index + 1),
    text: 'Строительство дома можно сделать дешевле — выбрав проект...',
  };
});
