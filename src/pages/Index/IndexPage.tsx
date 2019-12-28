import React from 'react';
import Navigation from 'components/common/Navigation';
import Title from 'components/common/Title';
import Content from 'components/common/Content';
import SocialIcons from 'components/common/SocialIcons';

import styles from './Index.module.scss';

export default React.memo<{}>(function IndexPage () {
  return (
    <div className={styles.root}>
      <Title className={styles.title}>Kirill Sadovnikov</Title>
      <div className={styles.page}>
        <Navigation className={styles.menu}/>
        <Content className={styles.content} />
      </div>
      <SocialIcons/>
    </div>
  );
});
