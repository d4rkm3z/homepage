import React from 'react';

import styles from './About.module.scss';

export default React.memo<{}>(function About() {
  return (
    <div className={styles.root}>
      <p>
        Hi, I'm Kirill Sadovnikov and I'm a fullstack developer.
        I use a follow technologies stack at my work:
      </p>
      <hr className={styles.separator}/>
      <p>To contact with me please use links at bottom.</p>
    </div>
  );
});