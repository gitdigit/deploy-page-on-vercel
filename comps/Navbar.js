import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>List</h1>
      </div>
      <Link href="/">Home </Link>
      <Link href="/about">About </Link>
      <Link href="/article">Articles </Link>
      <Link href="/contacts">Contacts </Link>
    </nav>
);
}
 
export default Navbar;