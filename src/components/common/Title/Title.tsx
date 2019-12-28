import React from 'react';
import classNames from 'classnames';

import styles from './Title.module.scss';

interface IProps {
  children: React.ReactChild;
  className?: string;
}

export default React.memo<IProps>(function Title({
                                                   children,
                                                   className,
                                                 }) {
  return (
    <div className={classNames(className, styles.root)}>{children}</div>
  );
});