import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useFetch<T>(url: string, query = "") {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    async function fetchData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get<T>(`${url}?${query}`, {
          cancelToken: source.token,
        });

        setData(data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("successfully aborted");
        } else {
          setData(null);
          toast.error(err instanceof Error ? err.message : "خطا در اتصال");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      source.cancel();
    };
  }, [url, query]);

  return { data, setData, isLoading };
}
