import useSWR from "swr";
import { PropsType } from "../index";

const fetcher = (url: string): Promise<any> => fetch(url).then((res) => res.json());

export const useFetchData = () => {
  const { data, error, isLoading } = useSWR<PropsType, Error>("http://localhost:3100/posts", fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
