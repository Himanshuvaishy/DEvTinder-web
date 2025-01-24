const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <aside className="flex items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="..."></path>
          </svg>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
        <nav className="flex gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="..."></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="..."></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="..."></path>
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
