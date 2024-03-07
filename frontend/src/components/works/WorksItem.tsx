import React from "react";
import { IWork } from "@/types";
import Image from "next/image";
import styles from "./works.module.scss";

interface Props {
  work: IWork;
}

const WorksItem: React.FC<Props> = ({ work }) => {
  const imageUrl = "http://localhost:8000/" + work.image;

  return (
    <div className={styles.work}>
      <Image src={imageUrl} alt={work.title} width={500} height={500} />
      <div>
        <h5>{work.title}</h5>
        <div className={styles.work_info}>
          <span className={styles.work_publication_year}>
            {work.publicationYear}
          </span>
          <span className={styles.work_type}>{work.type}</span>
        </div>
        <p>{work.description}</p>
      </div>
    </div>
  );
};

export default WorksItem;
