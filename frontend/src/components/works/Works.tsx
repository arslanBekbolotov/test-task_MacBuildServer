import React from "react";
import WorksItem from "@/components/works/WorksItem";
import styles from "./works.module.scss";
import { IWork } from "@/types";

interface Props {
  works: IWork[];
}

const Works: React.FC<Props> = ({ works }) => {
  return (
    <div className={styles.works}>
      <h6 style={{ marginBottom: "22px" }} className="default-title">
        Featured works
      </h6>
      <div className={styles.works_lists}>
        {works.map((work, index) => (
          <WorksItem key={index} work={work} />
        ))}
      </div>
    </div>
  );
};

export default Works;
