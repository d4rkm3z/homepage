import { ComponentType } from 'react';

export interface MenuItem {
  id: string;
  title: string;
  path: string;
}

export interface RouterItem {
  path: string;
  component: ComponentType;
}