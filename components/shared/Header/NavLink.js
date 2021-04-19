import ActiveLink from 'components/shared/ActiveLink'

export const NavLink = (props) => {
  const { title, href, className = "" } = props;
  return (
    <ActiveLink activeClassName="active" href={href}>
      <a className={"nav-link port-navbar-link " + className}>{title}</a>
    </ActiveLink>
  );
};