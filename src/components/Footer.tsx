const Footer = () => {
  return (
    <footer className="flex footer p-10 bg-neutral text-neutral-content justify-between sticky top-[100vh]">
      <aside>
        <p>© 2018-2023 — Katie Lentes</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/katielentes">Github</a>
          <a href="https://www.linkedin.com/in/katie-lentes/">Linkedin</a>
          <a href="mailto: lentesk@gmail.com">Email</a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
