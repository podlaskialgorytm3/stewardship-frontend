import React from "react";
import { useAuth } from "../../api/hooks/use-auth";
import { AuthError } from "../../shared/components/auth-error";

const AuthPage: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { data, isLoading } = useAuth();

  return (
    <div>
      {!data && !isLoading ? (
        <AuthError>You are not logged in!</AuthError>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export { AuthPage };
