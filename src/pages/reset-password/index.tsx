import { useAuth } from "../../api/hooks/use-auth";
import { AuthError } from "../../shared/components/auth-error";
import { ResetPassword } from "../../features/login/components/reset-password";

const ResetPasswordPage = () => {
  const { data, isLoading } = useAuth();
  return (
    <div>
      {!isLoading && data.authenticated ? (
        <AuthError>You are logged in!</AuthError>
      ) : (
        <ResetPassword />
      )}
    </div>
  );
};

export { ResetPasswordPage };
