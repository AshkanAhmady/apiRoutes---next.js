import Link from "next/link";
import { signIn, signOut } from "next-auth";

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full">
      <nav className="flex justify-between p-4 max-w-screen-xl mx-auto">
        <h1 className="font-bold">TodoList App</h1>
        <ul className="flex items-center gap-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={() => signIn()}>SignIn</button>
          </li>
          <li>
            <button onClick={() => signOut()}>SignOut</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
