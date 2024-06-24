function countQueryFrequency(INPUT, QUERY) {
  const result = QUERY.map((query) => {
    return INPUT.filter((word) => word === query).length;
  });
  return result;
}

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

const queryResult = countQueryFrequency(INPUT, QUERY);

console.log(queryResult);
