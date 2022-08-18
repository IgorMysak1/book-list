import React, { useEffect, useState } from "react";
import { Title } from "./";
export const Loader: React.FC = () => {
  const [loaderMessage, setLoaderMessage] = useState<string>("Loading");

  useEffect(() => {
    const lengthInitialMessage = loaderMessage.length;
    const intervalCutDots = setInterval(() => {
      setLoaderMessage(loaderMessage.slice(0, lengthInitialMessage));
    }, 2000);
    const intervalDots = setInterval(() => {
      setLoaderMessage((prevMessage) => `${prevMessage}.`);
    }, 500);
    return () => {
      clearInterval(intervalDots);
      clearInterval(intervalCutDots);
    };
  }, []);

  return <Title fz={"large"}>{loaderMessage}</Title>;
};
