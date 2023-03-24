import useSWR from "swr";

const fetcher = (url: string): Promise<any> => fetch(url).then((res) => res.json());

export const useFetchData = () => {
  const { data, error } = useSWR("http://localhost:3100/posts", fetcher);

  return {
    data,
    isLoading: !data && !error,
    isError: !!error,
  };
};
