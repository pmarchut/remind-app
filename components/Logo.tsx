import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">RemindMe</h1>
    </Link>
  );
}