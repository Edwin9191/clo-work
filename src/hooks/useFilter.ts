import { Dispatch } from 'redux';
import { useCallback, useState, SetStateAction } from 'react';

export interface PageData {
  page: number;
  perPage: number;
}

interface FilterProps {
  pageData: PageData;
  pricingOptions: number[];
  handleClick: () => void;
  handleCheck: (checked: boolean, option: number) => void;
}

const useFilter = (): FilterProps => {
  const [pricingOptions, setPricingOptions] = useState<number[]>([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [pageData, setPageData] = useState({
    page: 1,
    perPage: 12,
  });

  const handleCheck = useCallback(
    (checked: boolean, option: number) => {
      if (checked) {
        setPricingOptions([...pricingOptions, option]);
      } else {
        setPricingOptions(pricingOptions.filter(value => value !== option));
      }

      setPageData({ ...pageData, page: 1 });
    },
    [pricingOptions],
  );

  const handleClick = useCallback(() => {
    setPageData({ ...pageData, page: pageData.page + 1 });
  }, [pageData]);

  return { pricingOptions, handleCheck, handleClick, pageData };
};

export default useFilter;
