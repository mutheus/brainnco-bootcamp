export function Sidebar ({ titles }) {
  return (
    <aside className="site-wrapper__sidebar">
      <ul>
        { titles.map((item) => (
          <li key={item.id}>
            <a>{item.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
