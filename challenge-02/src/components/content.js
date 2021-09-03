import { Heading2 } from './heading2';
import { Heading3 } from './heading3';
import { Button } from './button';

export function Content ({ title, content }) {
  return (
    <main className="site-wrapper__content">
      <article className="post">
        <Heading2 className="post__title">{title}</Heading2>
        
        <p>{content}</p>
      
        <Button kind="primary">Get full article</Button>
      </article>
    </main>
  );
}
