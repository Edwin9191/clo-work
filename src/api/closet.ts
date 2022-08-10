import axios from 'axios';

export type ClosetContent = {
  id: string;
  creator: string;
  title: string;
  pricingOption: number;
  imagePath: string;
  price: number;
};

export const getList = async () => {
  const { data } = await axios.get<ClosetContent[]>(
    'https://closet-sample.azurewebsites.net/api/data',
  );

  return data;
};
