export const mixElements = <T>(list: T[]): T[] =>
  list.reduce<T[]>((acc, curr, index) => {
    const accumulatorList = acc;
    const indexToAddElement = Math.round(Math.random() * index);
    accumulatorList.splice(indexToAddElement, 0, curr);
    return accumulatorList;
  }, []);
