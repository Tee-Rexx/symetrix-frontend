import { ICONS_NAME } from "./icons.constants";

type MenuItem = {
    menu_url: string;
    menu: string;
    icon: ICONS_NAME; // Ensure this matches one of the defined literals
  };

export const SIDEBAR_MENU : MenuItem [] = [
    { menu : 'Home', menu_url : '/', icon : 'home' },
    { menu : 'Blogs', menu_url : '/blogs' , icon : 'blog' },
    { menu : 'Our Services', menu_url : '/ourServices', icon : 'laptop_mobile' },
    { menu : 'Portfolio', menu_url : '/portfolio', icon : 'briefcase' },
    { menu : 'About Us', menu_url : '/aboutUS', icon : 'group' },
    { menu : 'Contact Us', menu_url : '/contactUs', icon : 'contact_us' },
]