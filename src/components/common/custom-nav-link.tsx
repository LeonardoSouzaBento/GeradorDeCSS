import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ link }: { link: string }) => {
  return (
    <NavLink to={link} className="size-full absolute left-0 top-0" />
  )
}

export { CustomNavLink };
