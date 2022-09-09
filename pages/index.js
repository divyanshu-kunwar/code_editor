import { useState } from 'react'

import Image from 'next/image'

import style from './index.module.css'
import Prism from '../utils/prism.js'
import codeIcon from '../image/icons/code.svg'


export default function CodeEditor(){

    const [textareaValue, setTextareaValue] = useState('')
    const [lines , setLines] = useState(1)


    return (
        <div className={style.codeEditorFrame}>
            <div className={style.codeEditorSideBar}>
                
            </div>
            <div className={style.codeEditorMain}>
                <div className={style.codeEditorMenu}>
                    <div className={style.fileTab}>
                        <Image className={style.fileImg} src={codeIcon} alt="html"/>
                        <span>hello_world.html</span>
                    </div>
                </div>
                <div className={style.codeEditorBodyMain}>
                    <div className={style.lineNumber} id="lineNo">
                        {
                            Array.from(Array(lines).keys()).map((line) => {
                                return <div key={line}>{line+1}</div>
                            })
                        }
                    </div>
                    <div className={style.codeEditorBody}>
                    <pre className={style.codeEditorBackCode} id="codeEditorBackCode1" aria-hidden="true"><code  id="codeEditorBackCode"></code>
                    </pre>
                    <textarea id="codeTextArea"
                     spellCheck="false" className={style.CodeEditorTextArea} defaultValue={textareaValue} 
                     onScroll={(e) => {
                         sync_scroll("codeTextArea");
                        }}

                        onInput={(e) => {
                            sync_scroll("codeTextArea");
                        }}

                        onChange={
                            (e) => {
                            sync_scroll("codeTextArea");
                            setTextareaValue(e.target.value)
                            let rawCode = e.target.value

                            if(rawCode[rawCode.length-1] == "\n") { // If the last character is a newline character
                                rawCode += " "; // Add a placeholder space character to the final line 
                              }

                            rawCode = rawCode.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<");
                            const html = Prism.highlight(rawCode, Prism.languages.javascript, 'javascript')
                            setLines(rawCode.split(/\r\n|\r|\n/).length);                            
                            document.getElementById('codeEditorBackCode').innerHTML = html
                        }
                    }>
                        
                    </textarea>
                    </div>
                </div>
                <div className={style.codeEditorConsole}>
                    <span className={style.codeGreen}>Online@Editor</span> : ~$<span></span>
                </div>
            </div>
        </div>
    )
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