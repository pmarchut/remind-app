import Logo from "./Logo";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import ThemeSwitcher from "./ThemeSwitcher";

export default function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between p-4 px-8 h-[60px]">
      <Logo />
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <button>
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
