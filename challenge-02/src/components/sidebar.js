export function Sidebar ({ titles, handleItemClick }) {
  return (
    <aside className="site-wrapper__sidebar">
      <ul>
        { titles.map((item, index) => (
          <li key={item.id} onClick={(event) => handleItemClick(event, index)}>
            <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
