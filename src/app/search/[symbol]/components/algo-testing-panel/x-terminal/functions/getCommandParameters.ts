const getCommandParameters = ({
  inputKeys,
  requiredParameters,
  parameterStartIndex,
}: {
  inputKeys: Array<string>;
  requiredParameters: Array<string>;
  parameterStartIndex: number;
}) => {
  const fields: any = {};
  for (let index = parameterStartIndex; index < inputKeys.length; index++) {
    requiredParameters.map((option) => {
      if (option === inputKeys[index]) {
        fields[option] = inputKeys[index + 1];
      }
    });
  }
  return fields
};

export default getCommandParameters;
