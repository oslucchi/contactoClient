import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

const FetchData = (method: string, endpoint: string, query: object) => {
  const [data, setData] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | AxiosError>();
  const language = "IT-it";

  const options = {
    method: method,
    url: `http://192.168.11.133:8080/contactoServer/${endpoint}`,
    headers: {
      "Content-Type": "application/json",
      Language: language,
    },
    data: { ...query },
  };

  const fetchData = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const refetch = () => {
  //   setIsLoading(true);
  //   fetchData();
  // };

  return { data, isLoading, error }; //, refetch
};
export default FetchData;
