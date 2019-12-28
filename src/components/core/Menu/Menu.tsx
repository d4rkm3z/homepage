import React from 'react';
import { MenuItem } from 'types';
import { Link } from 'react-router-dom';

import styles from './Menu.module.scss';

interface IProps {
  items: MenuItem[]
}

export default React.memo<IProps>(function Menu({ items }) {
  return (
    <div>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id} className={styles.case}>
            <Link to={item.path} className={styles.link}># {item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
});