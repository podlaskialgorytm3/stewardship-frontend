import useAuth from "../../api/hooks/use-auth";
import { ErrorInfo } from "../../features/login/components/error";
import { ResetPassword } from "../../features/login/components/reset-password";

const ResetPasswordPage = () => {
    const { data, isLoading } = useAuth();
    return (
        <div>
            {(!isLoading && data.authenticated )? (
                <ErrorInfo>
                    You are logged in!
                </ErrorInfo>
            ) : (
                <ResetPassword />
            )}
        </div>
    )
}

export default ResetPasswordPage;