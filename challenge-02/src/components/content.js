import { Heading2 } from './heading2';
import { Heading3 } from './heading3';
import { Button } from './button';

export function Content ({ title, content }) {
  return (
    <main className="site-wrapper__content">
      <section className="site-wrapper__hero">
        <Heading2>{title}</Heading2>
        
        <p>{content}</p>
      
        <Button kind="primary">Buy me a coffee ☕</Button>
      </section>
      
      <section>
        <Heading3>Caramelization that whipped cappuccino beans acerbic brewed flavour espresso.</Heading3>
      
        <p>Filter so siphon, dark half and half grinder whipped sweet con panna americano cappuccino acerbic. Breve, mazagran skinny so qui crema breve percolator organic bar.</p>
        
        <ul>
          <li>Cinnamon-flavored simple syrup (recipe below)</li>
          <li>2 ounces of double-strength brewed coffee</li>
          <li>12 ounces milk</li>
          <li>24-ounce glass jar with a screw-on-lid</li>
        </ul>
      </section>
    </main>
  );
}
