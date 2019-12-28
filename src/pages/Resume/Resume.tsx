import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import styles from './Resume.module.scss';

export default React.memo<{}>(function Portfolio() {
  return (
    <div className={styles.root}>
      <p>You can download or open my resume below:</p>
      <Link to={'#'} className={styles.link}>
        <FontAwesomeIcon
          size='lg'
          className={classNames(styles.icon, styles.download)}
          icon={faFilePdf}
        />
        Download as PDF
      </Link>
      <Link to={'#'} className={styles.link}>
        <FontAwesomeIcon size='lg' className={styles.icon} icon={faEye} />
        Open in new tab
      </Link>
    </div>
  );
});