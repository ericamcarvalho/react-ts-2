import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    try {
      axios.get("<url>").then((res: AxiosResponse) => console.log(res.data));
    } catch (error: unknown) {
      if (typeof error === "string") {
        console.log(error);
      } else if (axios.isAxiosError(error)) {
        console.warn(error.message);
      } else if (error instanceof Error) {
        console.warn(error.message);
      }
    }
  }, []);
};

// TypeScript 4.4 provides a config flag --useUnknownInCatchVariables to let catch-variables default to type unknown
