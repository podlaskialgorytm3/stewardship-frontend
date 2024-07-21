import useAuth from "../../api/hooks/use-auth";
import { ErrorInfo } from "../../features/login/components/error";
import { ForgotPassword } from "../../features/login/components/forgot-password";

const ForgorPasswordPage = () => {
    const { data, isLoading } = useAuth();
    return (
        <div>
            {(!isLoading && data.authenticated )? (
                <ErrorInfo>
                    You are logged in!
                </ErrorInfo>
            ) : (
                <div>
                    <ForgotPassword />
                </div>
            )}
        </div>
    )
}

export default ForgorPasswordPage;