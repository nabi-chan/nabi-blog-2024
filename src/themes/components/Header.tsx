import { useBlogContext } from 'Themes/contexts/blogContext';
import { Link } from './Link';

export function Header() {
  const { config } = useBlogContext();

  return (
    <header className="sticky top-0 left-0 shadow-md backdrop-blur-sm print:hidden">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-3">
        <Link href="/" className="font-bold text-3xl">
          {config.header.title}
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {config.header.nav.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  title={link.title}
                  className="hover:underline hover:text-sky-500 underline-offset-8 capitalize transition-colors text-shadow"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
