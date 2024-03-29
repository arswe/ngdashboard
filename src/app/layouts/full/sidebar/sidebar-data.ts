import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  { navCap: 'Home' },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  { navCap: 'Ui Components' },

  { navCap: 'Auth' },
  { displayName: 'Login', iconName: 'lock', route: '/authentication/login' },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  { navCap: 'Extra' },
];
