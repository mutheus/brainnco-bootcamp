import { Heading1 } from './heading1';
import { Heading6 } from './heading6';
import { Button } from './button';

export function Header () {
  return (
    <header className="site-wrapper__header">
      <Heading1 className="site-wrapper__logo">Stela</Heading1>
      
      <Button kind="secondary">Get in touch</Button>
    </header>
  );
}
