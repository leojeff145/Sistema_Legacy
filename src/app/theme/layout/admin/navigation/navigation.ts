import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'usuarios',
    title: 'Usuarios',
    type: 'item',
    url: './usuarios',
    icon: 'feather icon-users',
  },
  {
    id: 'consolas',
    title: 'Consolas',
    type: 'item',
    url: './consolas',
    icon: 'feather icon-monitor',
  },
  {
    id: 'juegos',
    title: 'Juegos',
    type: 'item',
    url: './juegos',
    icon: 'feather icon-cpu',
  },
  {
    id: 'promociones',
    title: 'Promociones',
    type: 'item',
    url: './promociones',
    icon: 'feather icon-clipboard',    
  },
  {
    id: 'eventos',
    title: 'Eventos',
    type: 'item',
    url: './eventos',
    icon: 'feather icon-calendar',    
  },
  {
    id: 'torneos',
    title: 'Torneos',
    type: 'item',
    url: './torneos',
    icon: 'feather icon-award',
  },  
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
