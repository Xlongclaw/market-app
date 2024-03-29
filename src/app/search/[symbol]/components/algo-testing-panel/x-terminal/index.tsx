import React from "react";
import getCommandParameters from "./functions/getCommandParameters";
import deployAlgorithm from "./functions/deployAlgorithm";
import searchAlgorithm from "./functions/searchAlgorithm";
import { TableContext } from "../../../providers/table-provider";
import { CapitalContext } from "../../../providers/capital-provider";

interface IProps {
  coinHistory:Array<any>
}


export default function XTerminal({coinHistory}:IProps) {
  const [terminalInput, setTerminalInput] = React.useState("");
  const [terminalFocus, setTerminalFocus] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const consoleAreaRef = React.useRef<HTMLDivElement>(null);
  const [inputLogs, setInputLogs] = React.useState<Array<string>>(["", ""]);
  const [inputLogIndex, setInputLogIndex] = React.useState<number>(0);

  const tradesData = React.useContext(TableContext);
  const capitalData = React.useContext(CapitalContext);

  React.useEffect(() => {
    terminalFocus && inputRef.current?.focus;
  }, [terminalFocus]);

  React.useEffect(() => {
    setInputLogIndex(inputLogs.length - 1);
  }, [inputLogs]);

  React.useEffect(() => {
    console.log(inputLogIndex);
  }, [inputLogIndex]);

  const displayMessage = (message: string) => {
    const messageNode = document.createElement("p");
    messageNode.innerText = message;
    consoleAreaRef.current?.appendChild(messageNode);
  };

  const handleInput = () => {
    inputLogs.pop();
    setInputLogs((inputLogs) => [...inputLogs, terminalInput, ""]);
    const inputKeys = terminalInput.split(" ");

    switch (inputKeys[0]) {
      case "clear": {
        consoleAreaRef.current!.innerHTML = "";
        break;
      }
      case "deploy": {
        switch (inputKeys[1]) {
          case undefined:
            displayMessage(`Specify the algorithm name !`);
            break;
          default:

          const algorithm = searchAlgorithm({ command: inputKeys[1] });
          if(algorithm === undefined){
            displayMessage(`No algorithm found with name ${inputKeys[1]}`)
          }
          else{
            const commandParameters = getCommandParameters({
              inputKeys,
              parameterStartIndex: 2,
              requiredParameters: algorithm.requiredParameters,
            });
  
            if(Object.keys(commandParameters).length === algorithm.requiredParameters.length){
              commandParameters.capital = capitalData.remainingCapital
              commandParameters.symbolHistory = coinHistory
              const { cptl, tableData } = algorithm.function(commandParameters);
              capitalData.changeRemainingCapital(cptl);
              tradesData.changeTableData(tableData);
              // deployAlgorithm({ algo: "xray", commandParameters });
              displayMessage(`${algorithm.name} Deployed`);
            }
            else {
              displayMessage("Failed Deploy!");
              displayMessage("More Arguments Expected.");
            } 
          }
            break;
        }
        break;
      }
      case "help":{
        switch (inputKeys[1]) {
          case undefined:
            displayMessage("Specify the algorithm name!")
            break;
            default:
              const algorithm = searchAlgorithm({command : inputKeys[1]})
              if(algorithm){
                const message = algorithm.requiredParameters.join(", ")
                displayMessage(`Required Arguments -> ${message}`)
                displayMessage(`Reference -> ${algorithm.example}`)
              }
              else{
              displayMessage(`Algorithm not found!`)
            }
            break;
        }
        break;
      }
      default: {
        displayMessage("Invalid Command ! Check Docs for reference");
        break;
      }
    }
    setTerminalInput("");
  };

  const handleKeyUpPress = () => {
    if (inputLogIndex !== 0) {
      setTerminalInput(inputLogs[inputLogIndex]);
      inputLogIndex !== 1 &&
        setInputLogIndex((inputLogIndex) => inputLogIndex - 1);
    }
  };
  const handleKeyDownPress = () => {
    if (inputLogIndex < inputLogs.length) {
      setTerminalInput(inputLogs[inputLogIndex]);
      inputLogIndex !== inputLogs.length - 1 &&
        setInputLogIndex((inputLogIndex) => inputLogIndex + 1);
    }
  };

  return (
    <div
      onClick={() => setTerminalFocus(true)}
      className={`bg-black rounded-2xl p-4 hover:cursor-text text-xs flex flex-col gap-1 min-h-64 my-5 text-zinc-400 font-medium`}
    >
      <h4>ALGORITHMS DEPLOYING MACHINE V1.09.87</h4>
      <div ref={consoleAreaRef} className="flex flex-col gap-1"></div>
      <div className=" flex items-center gap-2">
        <p>$</p>
        <input
          ref={inputRef}
          spellCheck={false}
          type="text"
          placeholder=""
          className="bg-transparent focus:outline-none w-full"
          value={terminalInput}
          onChange={(e) => setTerminalInput(e.target.value)}
          onKeyUp={(e) => {
            e.key === "Enter" && handleInput();
            e.key === "ArrowUp" && handleKeyUpPress();
            e.key === "ArrowDown" && handleKeyDownPress();
          }}
        />
      </div>
    </div>
  );
}
