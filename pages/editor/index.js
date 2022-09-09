// next modules 
import Image from 'next/image'

// local modules
import style from './index.module.css'

// images and assets
import backImg from './temp/back.png'
import bulbIcon from '../../image/icons/bulbIcon.svg'
import folderIcon from '../../image/icons/folderIcon.svg'
import uploadIcon from '../../image/icons/uploadIcon.svg'
import fileCreateIcon from '../../image/icons/fileCreateIcon.svg'
import renameIcon from '../../image/icons/renameIcon.svg'
import deleteIcon from '../../image/icons/deleteIcon.svg'
import FileArea from '../../components/fileArea'
import DependenciesArea from '../../components/dependenciesArea'

let title = "web development";

export default function CodeMixer(){
    return (
        <div className={style.codeMixerFrame}>

        
            <div className={style.topLayout}>
                <div className={style.normalLayout}>
                    <div className={style.topLeftLayout}>
                        <div className={style.leftTitleBar}>
                            <Image src={bulbIcon} className={style.leftTitleIcon} alt={title}/>
                            <span className={style.leftTitleText}>{title}</span>
                        </div>
                        <div className={style.fileArea}>
                            <div className={style.fileActions}>
                                <Image src={folderIcon} className={style.fileActionIcon} alt="folder"/>
                                <Image src={uploadIcon} className={style.fileActionIcon} alt="upload"/>
                                <Image src={fileCreateIcon} className={style.fileActionIcon} alt="file create"/>
                                <Image src={renameIcon} className={style.fileActionIcon} alt="rename"/>
                                <Image src={deleteIcon} className={style.fileActionIcon} alt="delete"/>
                            </div>
                            <div className={style.fileList}>
                                <FileArea />
                            </div>
                        </div>
                        <div className={style.dependenciesArea}>
                            <DependenciesArea />
                        </div>
                    </div>
                    <div className={style.topRightLayout}>
                        <div className={style.rightTitleBar}></div>
                        <div className={style.codeEditor}>
                        </div>
                        <div className={style.commandWindow}>
                            <div className={style.consoleActions}></div>
                            <div className={style.consoleMain}></div>
                            </div>
                    </div>
                </div>
                {/* <div className={style.overlayLayout}></div> */}
            </div>
            <div className={style.bottomLayout}></div>

            {/* ignore this is for layout  */}
            {/* <Image src={backImg} alt="back" className={style.backImg}/> */}
        </div>
    )
}