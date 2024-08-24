import { useAuth } from "../../api/hooks/use-auth";
import { AuthError } from "../../shared/components/auth-error";
import { ForgotPassword } from "../../features/login/components/forgot-password";

const ForgorPasswordPage = () => {
  const { data, isLoading } = useAuth();
  return (
    <div>
      {!isLoading && data.authenticated ? (
        <AuthError>You are logged in!</AuthError>
      ) : (
        <div>
          <ForgotPassword />
        </div>
      )}
    </div>
  );
};

export default ForgorPasswordPage;
