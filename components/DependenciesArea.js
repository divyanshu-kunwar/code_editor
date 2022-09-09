// next
import Image from "next/image";

//local Import
import style from "./Dependencies.module.css";

// icon & assets
import dependencyIcon from "../image/icons/dependencyIcon.svg";
import propsIcon from '../image/icons/propertiesIcon.svg'

const data = ["ReactJS", "Bootstrap", "TailWind"];

function DependenciesArea(props) {
    
  return (
    <div className={style.DependenciesArea}>
      <div className={style.DependenciesTitle}>
        <Image className={style.dependencyIcon} 
        src={dependencyIcon} alt="dependency" />
        <span>Dependencies</span>
        <Image src={propsIcon} alt="add" />
    </div>
      {data.map((dependency) => {
        return (
          <div className={style.DependenciesItem} key={dependency}>
            <span>{dependency}</span>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  return props;
}

export default DependenciesArea;
