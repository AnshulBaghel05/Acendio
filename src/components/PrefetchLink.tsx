import { Link, LinkProps, NavLink, NavLinkProps } from 'react-router-dom';
import { prefetchRoute } from '../lib/routePrefetch';

function getToPathname(to: LinkProps['to']): string {
  return typeof to === 'string' ? to : to.pathname || '/';
}

export function PrefetchLink({
  to,
  onMouseEnter,
  onFocus,
  onTouchStart,
  ...rest
}: LinkProps) {
  const targetPath = getToPathname(to);

  return (
    <Link
      to={to}
      onMouseEnter={(e) => {
        prefetchRoute(targetPath);
        onMouseEnter?.(e);
      }}
      onFocus={(e) => {
        prefetchRoute(targetPath);
        onFocus?.(e);
      }}
      onTouchStart={(e) => {
        prefetchRoute(targetPath);
        onTouchStart?.(e);
      }}
      {...rest}
    />
  );
}

export function PrefetchNavLink({
  to,
  onMouseEnter,
  onFocus,
  onTouchStart,
  ...rest
}: NavLinkProps) {
  const targetPath = getToPathname(to);

  return (
    <NavLink
      to={to}
      onMouseEnter={(e) => {
        prefetchRoute(targetPath);
        onMouseEnter?.(e);
      }}
      onFocus={(e) => {
        prefetchRoute(targetPath);
        onFocus?.(e);
      }}
      onTouchStart={(e) => {
        prefetchRoute(targetPath);
        onTouchStart?.(e);
      }}
      {...rest}
    />
  );
}
