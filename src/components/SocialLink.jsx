import React from "react";
import { Link } from "react-router-dom";

function SocialLink(item) {
  const { href, label, icon, delay, bgColor, hoverColor } = item?.item;

  return (
    <>
      <span
        className={`size-10 rounded-md ${bgColor} dark:bg-gray-800 flex items-center justify-center cursor-pointer hover:${hoverColor} dark:hover:${hoverColor}/80 hover:scale-110 transition-all duration-400 ease-in-out animated animatedFadeInUp fadeInUp`}
        style={{ animationDelay: delay ? `${delay}ms` : "0ms" }}
      >
        <Link
          to={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={``}
        >
          <span dangerouslySetInnerHTML={{ __html: icon }} />
        </Link>
      </span>
    </>
  );
}

export default SocialLink;
