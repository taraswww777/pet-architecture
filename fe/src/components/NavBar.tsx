import { ButtonVariant, LinkButton } from '../uiKit/Button';

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex gap-x-8 items-center">
        <LinkButton to="/" variant={ButtonVariant.INFO} className="text-xl"> Home </LinkButton>
        <LinkButton to="/task1" variant={ButtonVariant.INFO} className="text-xl"> Task1 </LinkButton>
      </div>
    </nav>
  );
};
