import Link from "next/link";
import { SiCodechef } from "react-icons/si";
import { LuMenu } from "react-icons/lu";

export default function Header() {
  function LinkList() {
    return (
      <>
        <li>
          <Link className="link-hover link flex font-semibold" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-hover link flex font-semibold" href="/ChasGPT">
            ChasGPT
          </Link>
        </li>
        <li>
          <Link className="link-hover link flex font-semibold" href="/TranslatorAi">
            TranslatorAI
          </Link>
        </li>
        <li>
          <Link className="link-hover link flex font-semibold" href="/CulinaryAI">
            <SiCodechef size={24} /> CulinaryAI
          </Link>
        </li>
        <li>
          <Link className="link-hover link flex font-semibold" href="/AiHealthCoach">
            ThriveAI
          </Link>
        </li>
      </>
    );
  }

  return (
    <header>
      <nav className="navbar bg-base-200 px-7 shadow">
        <Link className="link-hover link flex text-xl font-semibold" href="/">
          ChasGPT
        </Link>
      </nav>
    </header>
  );
}
