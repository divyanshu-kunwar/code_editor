//next js & react import
import { useState } from 'react';

// local import 
import style from './CodeArea.module.css'
import Prism from '../utils/prism.js'

// icon import


export default function CodeArea() {

    const [textareaValue, setTextareaValue] = useState('')
    const [lines , setLines] = useState(1)


  return (
      <div className={style.codeEditorBodyMain}>
        
        {/* --------------------Map Line Count to Line Numbers --------------- */}
        <div className={style.lineNumber} id="lineNo">
          {Array.from(Array(lines).keys()).map((line) => {
            return <div key={line}>{line + 1}</div>;
          })}
        </div>

        {/* ------------------------------Code Editor Body --------------- */}
        <div className={style.codeEditorBody}>

            {/* ----------Formatted Code  here --------- */}
          <pre
            className={style.codeEditorBackCode}
            id="codeEditorBackCode1"
            aria-hidden="true"
          >
            <code id="codeEditorBackCode"></code>
          </pre>

                      {/* ----------Original Code  here --------- */}
          <textarea
            id="codeTextArea"
            spellCheck="false"
            className={style.CodeEditorTextArea}
            defaultValue={textareaValue}
            onScroll={(e) => {
              sync_scroll("codeTextArea");
            }}
            onInput={(e) => {
              sync_scroll("codeTextArea");
            }}
            onChange={(e) => {
              sync_scroll("codeTextArea");
              setTextareaValue(e.target.value);

              let rawCode = e.target.value;
              if (rawCode[rawCode.length - 1] == "\n") {
                  // If the last character is a newline character
                  // Add a placeholder space character to the final line
                  rawCode += " ";
                }
                
                // format raw code as per requirement replacing special characters
              rawCode = rawCode
                .replace(new RegExp("&", "g"), "&")
                .replace(new RegExp("<", "g"), "<");

                // use prism to get formatted code
              const html = Prism.highlight(
                rawCode,
                Prism.languages.html,
                "html"
              );

              //change the state of line count 
              setLines(rawCode.split(/\r\n|\r|\n/).length);
              document.getElementById("codeEditorBackCode").innerHTML = html;
            }}
          ></textarea>
        </div>

      </div>
  );
}

function sync_scroll(id) {
    let element = document.getElementById(id);
    /* Scroll result to scroll coords of event - sync with textarea */
    let result_element = document.getElementById("codeEditorBackCode1");
    let result_element2 = document.getElementById("lineNo");

    // Get and set x and y
    result_element.scrollTop = element.scrollTop;
    result_element2.scrollTop = element.scrollTop;
    result_element.scrollLeft = element.scrollLeft;
}