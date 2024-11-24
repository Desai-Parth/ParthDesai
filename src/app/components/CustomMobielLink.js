 
import { useRouter } from 'next/navigation'

const { usePathname } = require("next/navigation");

const CustomMobielLink = ({ href, title, className = "", toggle }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block bg-light 
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${pathname === href ? "w-full" : "w-0"} dark:bg-dark`}
      ></span>
    </button>
  );
};

export default CustomMobielLink;
