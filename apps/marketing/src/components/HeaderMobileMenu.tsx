type NavItem = {
  href: string;
  label: string;
};

export default function HeaderMobileMenu({ items }: { items: NavItem[] }) {
  return (
    <details className="dropdown lg:hidden">
      <summary
        className="btn btn-ghost btn-circle list-none"
        aria-label="Open navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      </summary>

      <ul className="menu dropdown-content mt-3 z-50 w-52 rounded-box bg-base-100 p-2 shadow">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </details>
  );
}
