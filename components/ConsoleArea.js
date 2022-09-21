import { useState } from "react";
import style from "./ConsoleArea.module.css";

let userName = "Divyanshu";

export default function ConsoleArea() {
  let [inputTxt, setInputTxt] = useState("");

  return (
    <div className={style.ConsoleMainArea}>
      <div className={style.consolePreArea}>
        <pre
          className={style.consolePreCommand_0}
          id="codeEditorBackCode1"
          aria-hidden="true"
        >
          <code id="consolePreCommand_1"></code>
        </pre>
      </div>
      <div className={style.ConsoleArea}>
        <div className={style.noTextWrap}>
          <span className={style.greenTxt}>{userName}@Editor</span>
          <span> :</span>
          <span className={style.blueTxt}> ~</span>
          <span>$ </span>
        </div>
        <div className={style.inputContainer}>
          <input
            className={style.invisibleInput}
            onChange={(e) => {
              setInputTxt(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                console.log("changing the precode");
                let html = `<div class=${style.noTextWrap}>
                    <span class=${style.greenTxt}>${userName}@Editor</span>
                    <span>:</span>
                    <span class=${style.blueTxt}>~</span>
                    <span>$ </span>
                    <span>${inputTxt}</span>
                    </div>`
                document.getElementById("consolePreCommand_1").innerHTML += html;
                setInputTxt("");
                e.currentTarget.value = ""
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
