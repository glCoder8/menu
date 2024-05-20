export interface MenuItem {
  id: number;
  label: string;
  link?: string;
  submenu?: MenuItem[];
}
