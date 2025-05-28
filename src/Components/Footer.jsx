const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <aside className="flex items-center gap-2">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            {/* Simple square logo */}
            <path d="M4 4h16v16H4z" />
          </svg>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
        <nav className="flex gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.03 9.03 0 01-2.84 1.08A4.48 4.48 0 0016.44 2c-2.5 0-4.51 2.07-4.51 4.62 0 .36.04.7.12 1.03A12.94 12.94 0 013 4.8a4.52 4.52 0 001.39 6.2 4.41 4.41 0 01-2.04-.56v.06c0 2.2 1.55 4.04 3.6 4.46a4.44 4.44 0 01-2.03.08 4.49 4.49 0 004.2 3.19A9.03 9.03 0 012 19.54 12.7 12.7 0 008.29 21c7.55 0 11.68-6.34 11.68-11.83 0-.18-.01-.35-.02-.53A8.4 8.4 0 0023 3z" />
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M22.675 0H1.325C.593 0 0 .592 0 1.324v21.352C0 23.408.592 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.243l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.322-.592 1.322-1.324V1.324C24 .592 23.408 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.25 2a1 1 0 110 2 1 1 0 010-2zm-4.25 1.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
