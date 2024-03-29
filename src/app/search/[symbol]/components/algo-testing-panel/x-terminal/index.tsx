import React from "react";

export default function XTerminal() {
  const [terminalInput, setTerminalInput] = React.useState("");
  const [terminalFocus, setTerminalFocus] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const consoleAreaRef = React.useRef<HTMLDivElement>(null);
  const [inputLogs, setInputLogs] = React.useState<Array<string>>([""]);
  const [inputLogIndex, setInputLogIndex] = React.useState<number>(0);

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


  const ary = ['sl','tp',"lever"]

  const handleInput = () => {
    setInputLogs((inputLogs)=>[...inputLogs, terminalInput]);
    const inputKeys = terminalInput.split(" ");
 
    switch (inputKeys[0]) {
      case "clear": {
        consoleAreaRef.current!.innerHTML = "";
        break;
      }
      case "deploy": {
        switch (inputKeys[1]) {

          case "xray":
            for (let index = 2; index < inputKeys.length; index++) {
              // ary.map((option)=>{
              //   if(option===inputKeys[index]){

              //   }                
              // })
            }
            displayMessage("xRandomisation Variant Y Deployed");
            break;
          default:
            if (inputKeys[1] === undefined)
              displayMessage(`Specify the algorithm name !`);
            else
              displayMessage(`No algorithm found with name ${inputKeys[1]} `);
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
      inputLogIndex!==1 && setInputLogIndex((inputLogIndex)=>inputLogIndex - 1);
    }
  };
  const handleKeyDownPress = () => {
    if (inputLogIndex < inputLogs.length) {
      setTerminalInput(inputLogs[inputLogIndex]);
      inputLogIndex!==inputLogs.length-1 &&setInputLogIndex((inputLogIndex)=>inputLogIndex + 1);
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
          type="text"
          placeholder=""
          className="bg-transparent focus:outline-none"
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
