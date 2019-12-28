import React from 'react';
import data from 'data/projects.json';

import styles from './Portfolio.module.scss';

interface IProject {
  path: string;
  title: string;
  imgSrc: string;
}

export default React.memo<{}>(function Resume() {
  if (!data.length) return <div>Empty content</div>;

  return (
    <div className={styles.root}>
      {data.map((item: IProject) => {
        const imgSrc = item.path + item.imgSrc;

        return (
          <div className={styles.item}>
            <div className={styles.preview}>
              <img className={styles.image} src={imgSrc} alt={item.title} />
            </div>
            <a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}</a>
          </div>
        );
      })}
    </div>
  );
});