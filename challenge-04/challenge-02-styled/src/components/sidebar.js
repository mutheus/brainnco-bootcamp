import { Heading5 } from './heading5';
import { Heading6 } from './heading6';

export function Sidebar ({ titles, handleItemClick }) {
  return (
    <aside className="site-wrapper__sidebar">
      <div className="recommended">
        <Heading5 className="recommended__heading">Popular posts</Heading5>
      
        <ul className="recommended__list">
          { titles.map((item, index) => (
            <li 
              key={item.id} 
              onClick={(event) => handleItemClick(event, index)}
            >
              <Heading6>
                <a href={item.id}>
                  <small>{item.id}</small> 
                  {item.title}
                </a>
              </Heading6>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
