import { Heading4 } from './heading4';

export function Menu () {
  return (
    <nav className="site-wrapper__menu">
      <ul className="site-wrapper__filters">
        <li><Heading4>All</Heading4></li>
        <li><Heading4>Travel</Heading4></li>
        <li><Heading4>Design</Heading4></li>
        <li><Heading4>Brazil</Heading4></li>
      </ul>
    </nav>
  );
}
