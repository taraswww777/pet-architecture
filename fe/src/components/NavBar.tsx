import { Link } from 'react-router';

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Home
        </Link>
      </div>
    </nav>
  );
};
