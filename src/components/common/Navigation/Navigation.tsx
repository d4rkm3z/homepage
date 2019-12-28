import React from 'react';
import { MenuItem } from 'types';
import Menu from 'components/core/Menu';

const MENU_LIST: MenuItem[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    path: 'portfolio'
  },
  {
    id: 'blog',
    title: 'Blog',
    path: 'blog'
  },
  {
    id: 'resume',
    title: 'Resume',
    path: 'resume'
  },
  {
    id: 'about',
    title: 'About me',
    path: 'about'
  },
];

interface IProps {
  className?: string;
}

export default React.memo<IProps>(function Navigation({ className}){
  return (
    <div className={className}>
      <Menu items={MENU_LIST}/>
    </div>
  );
})