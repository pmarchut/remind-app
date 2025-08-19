import Link from 'next/link';
import { UserButton } from '@stackframe/stack';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import { stackServerApp } from "@/stack";

export default async function NavBar() {
  const user = await stackServerApp.getUser();

  return (
    <nav className="flex items-center justify-between p-4 sm:px-8 h-[60px] gap-4 py-4">
      <Logo />
      <div className="flex items-center gap-4">
        {user ? (
          <UserButton />
        ) : (
          <>
            <Link href="/handler/sign-in">
              <button>Sign In</button>
            </Link>
            <Link href="/handler/sign-up">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
                Sign Up
              </button>
            </Link>
          </>
        )}
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
