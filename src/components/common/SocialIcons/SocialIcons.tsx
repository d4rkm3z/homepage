import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from './data';

import styles from './SocialIcons.module.scss';

export default React.memo<{}>(function SocialIcons() {
  return (
    <div className={styles.root}>
      {data.map(item =>
        <a
          key={item.link}
          href={item.link}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={item.icon} className={styles.icon} />
        </a>,
      )}
    </div>
  );
});