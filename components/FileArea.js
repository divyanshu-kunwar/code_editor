// next 
import Image from 'next/image'

//local Import
import style from './FileArea.module.css'

// icon & assets
import courseFolderIcon from '../image/icons/courseFolderIcon.svg'
import folderIcon from '../image/icons/folderIcon.svg'
import javascriptIcon from '../image/icons/javascriptIcon.svg'
import cssIcon from '../image/icons/cssIcon.svg'
import htmlIcon from '../image/icons/htmlIcon.svg'
import imageIcon from '../image/icons/imageIcon.svg'
import jsonIcon from '../image/icons/jsonIcon.svg'
import markdownIcon from '../image/icons/markdownIcon.svg'
import svgIcon from '../image/icons/svgIcon.svg'
import expandArrowIcon from '../image/icons/expandArrowIcon.svg'
import { useState } from 'react'

const data = { 
    1 : {
        name : "Week 1 - Overview",
        folders : {
            1 : {
                name : "Folder 1",
                file : {
                    1 : {
                        name : "File 1",
                        icon : javascriptIcon,
                    },
                    2 : {
                        name : "File 2",
                        icon : javascriptIcon,
                    },
                }
            },
            2 : {
                name : "Folder 2",
            },
        }
    }
}

function FileArea(props){

    const [selectedChapter , setSelectedChapter] = useState(1);
    const [selectedFolder , setSelectedFolder] = useState(1);
    const [selectedFile , setSelectedFile] = useState(2);

    return(

        <div className={style.fileArea}>
            
            {
                Object.keys(data).map((courseKey ) => {
                    return(
                        <div className={style.mainCourseFolder} key={courseKey}>
                        <div className={style.courseFolder } >
                            <Image className={style.courseImg} src={courseFolderIcon} alt={data[courseKey].name} />
                            <span>{data[courseKey].name}</span>
                            {selectedChapter == courseKey ? <Image src={expandArrowIcon} alt={data[courseKey].name} /> : null}
                        </div>

                        {

                            Object.keys(data[courseKey].folders).map((folderKey) => {
                                return(
                                    <div className={style.mainFolder} key={folderKey}>
                                        <div className={style.chapterFolder}>
                                        <Image src={folderIcon} alt={data[courseKey].folders[folderKey].name} />
                                        <span>{data[courseKey].folders[folderKey].name}</span>
                                        {selectedChapter == courseKey && selectedFolder == folderKey ?
                                         <Image src={expandArrowIcon} alt={data[courseKey].folders[folderKey].name} /> : null}
                                        </div>

                                        {
                                            data[courseKey].folders[folderKey].file &&
                                            Object.keys(data[courseKey].folders[folderKey].file).map((filekey) => {
                                                return ( 
                                                <div className={
                                                    selectedChapter == courseKey && selectedFolder == folderKey && selectedFile == filekey  
                                                    ? style.fileSelected : style.file
                                                    } key={filekey}>
                                                    <Image src={data[courseKey].folders[folderKey].file[filekey].icon} alt={data[courseKey].folders[folderKey].file[filekey].name} />
                                                    <span>{data[courseKey].folders[folderKey].file[filekey].name}</span>
                                                </div>)
                                            })                                            
                                        }

                                    </div>
                                )
                            })

                        }

                        </div>
                    )
                })
            }
        </div> 
    )
}


export async function getServerSideProps() {
    return props;
}

export default FileArea;