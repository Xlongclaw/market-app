import algorithms from "@/algorithms";

const searchAlgorithm = ({command}:{command:string}) =>{
  const [algorithm] = algorithms.filter(
    (algorithm) => algorithm.command === command
  );
  return algorithm
}

export default searchAlgorithm