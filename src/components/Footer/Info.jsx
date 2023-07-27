
const Info = () => {
  const infoLinks = [
    "Contact Us",
    "Return Policy",
    "Delivery Policy",
    "Privacy Policy",
    "FAQs",
    // "Search",
    "Terms of Service",
    "Refund policy",
    "Privacy Policy",
    "Cookie Policy",
  ];
  return (
    <div
      id="footer-shopCategory-media-links"
      className="text-slate-600 space-y-7"
    >
      <p className="text-xs uppercase font-mono tracking-[0.3em] font-semibold text-slate-500 ">
        info
      </p>
      <div
        id="links"
        className="flex flex-col text-[10px] items-start gap-4 text-slate-500"
      >
        {infoLinks.map((item, index) => {
          return (
            <a
              key={index}
              href="#"
              className="text-slate-500 hover:text-slate-600"
            >
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
