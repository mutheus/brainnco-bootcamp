import { Heading2 } from './heading2';
import { Heading3 } from './heading3';
import { Button } from '../styles';

import styled from 'styled-components';

const ContentWrapper = styled.main`
  grid-area: content;
  background-color: #FFD7D2;
  color: #FF9286;
  padding: 2em;
  text-transform: none;
  gap: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p {
    max-width: 500px;
  }
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  gap: .5em;
`;

export function Content () {
  return (
    <ContentWrapper>
      <Hero>
        <Heading2>Aftertaste half and half caramelization, coffee filter.</Heading2>
        
        <p>Variety galão decaffeinated seasonal café au lait sit est kopi-luwak con panna. Americano, half and half and cup mocha galão arabica saucer strong mocha plunger pot.</p>
      
        <Button primary>Buy me a coffee ☕</Button>
      </Hero>
      
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
    </ContentWrapper>
  );
}
