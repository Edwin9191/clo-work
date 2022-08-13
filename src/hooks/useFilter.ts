import { useCallback, useState, useMemo } from 'react';
import { ClosetContent } from '../api/closet';
import { useAppSelector } from './useTypedSelector';

export interface PageData {
  page: number;
  perPage: number;
}

interface FilterProps {
  searchKeyword: string;
  pricingOptions: number[];
  filteredList: ClosetContent[];
  handleClick: () => void;
  handleCheck: (checked: boolean, option: number) => void;
  handleChange: (text: string) => void;
  setOptions: (options: number[]) => void;
}

interface FilteredListProps {
  list: ClosetContent[] | null;
  pricingOptions: number[];
  pageData?: PageData;
  searchKeyword: string;
}

const getFilteredList = ({
  list,
  pricingOptions,
  pageData,
  searchKeyword,
}: FilteredListProps) => {
  let result;

  if (pricingOptions.length) {
    result = list?.filter((content: ClosetContent) =>
      pricingOptions.includes(content.pricingOption),
    );
  } else {
    result = list;
  }

  if (searchKeyword.length) {
    result = result.filter(
      content =>
        content.creator.includes(searchKeyword) ||
        content.title.includes(searchKeyword),
    );
  }

  if (pageData) {
    result = result?.filter(
      (content: ClosetContent, index: number) =>
        index < pageData.page * pageData.perPage,
    );
  }

  return result;
};

const useFilter = (): FilterProps => {
  const [pricingOptions, setPricingOptions] = useState<number[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [pageData, setPageData] = useState({
    page: 1,
    perPage: 12,
  });
  const {
    list: { data },
  } = useAppSelector(state => state.closet);

  const setOptions = useCallback((options: number[]) => {
    setPricingOptions([...options]);
  }, []);

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

  const filteredList = useMemo(
    () =>
      getFilteredList({ list: data, pricingOptions, pageData, searchKeyword }),
    [pricingOptions, data, pageData, searchKeyword],
  );

  const handleClick = useCallback(() => {
    const list = getFilteredList({ list: data, pricingOptions, searchKeyword });

    if (!(Math.ceil(list.length / pageData.perPage) < pageData.page + 1))
      setPageData({ ...pageData, page: pageData.page + 1 });
  }, [pageData, data, searchKeyword, pricingOptions]);

  const handleChange = useCallback((text: string) => {
    setSearchKeyword(text);
  }, []);

  return {
    handleChange,
    pricingOptions,
    handleCheck,
    handleClick,
    searchKeyword,
    filteredList,
    setOptions,
  };
};

export default useFilter;
