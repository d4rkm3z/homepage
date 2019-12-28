import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'routes';
import classNames from 'classnames';

import styles from './Content.module.scss';

interface IProps {
  className?: string;
}

export default React.memo<IProps>(function Content({
                                                     className,
                                                   }) {
  return (
    <div className={classNames(className, styles.root)}>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            component={component}
          />
        ))}
      </Switch>
    </div>
  );
});