import { NavLinkComponent } from "./nav-link";
import { Logo } from "../../../shared/components/logo";
import useAuth from "../../../api/hooks/use-auth";
import { LogoutButton } from "./logout-button";

export const Menu = () => {
  const { data, isLoading } = useAuth();

  return (
    <div>
      <nav className="text-purple-800 flex justify-center h-[100px]">
        <ul className="flex justify-between w-[700px] items-center">
          <Logo isImage={false} />
          {data && !isLoading ? (
            <>
              <NavLinkComponent path="/dashboard" name="dashboard" />
              <NavLinkComponent path="/profile" name="profile" />
              <LogoutButton>logout</LogoutButton>
            </>
          ) : (
            <>
              <NavLinkComponent path="/" name="Home" />
              <NavLinkComponent path="/login" name="login" />
              <NavLinkComponent path="/register" name="register" />
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
