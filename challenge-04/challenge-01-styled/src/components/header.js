import { Heading1 } from './heading1';
import { Heading6 } from './heading6';
import { Button } from './button';

export function Header () {
  return (
    <header className="site-wrapper__header">
      <Heading1>Logo</Heading1>
      
      <Heading6>Search</Heading6>
      
      <Button kind="secondary">Sign up</Button>
    </header>
  );
}
