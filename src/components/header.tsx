type Props = {
  navItems: {
    name: string;
    url: string;
  }[];
  currentUrl: string;
};

const header = ({ navItems, currentUrl }: Props) => {
  return (
    <header>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                className={currentUrl === item.url ? "underline active" : ""}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default header;
