import Swal from "sweetalert2";
import { User } from "../types/types";

import { useUpdateImg } from "../api/use-update-img";
import { useUpdateName } from "../api/use-update-name";
import { useUpdateEmail } from "../api/use-update-email";
import { useUpdatePassword } from "../api/use-update-password";

import { useErrorMessage } from "../../../shared/hooks/use-error-message";

const useHandleEdit = ({ data }: { data: User }) => {
  const {
    mutate: mutateImg,
    isError: isErrorImg,
    error: errorImg,
  } = useUpdateImg();
  const {
    mutate: mutateName,
    isError: isErrorName,
    error: errorName,
  } = useUpdateName();
  const {
    mutate: mutateEmail,
    isError: isErrorEmail,
    error: errorEmail,
  } = useUpdateEmail();
  const {
    mutate: mutatePassword,
    isError: isErrorPassword,
    error: errorPassword,
  } = useUpdatePassword();

  const handleImageClick = () => {
    Swal.fire({
      title: "Profile Picture",
      text: "Change profile picture",
      input: "text",
      inputValue: data?.img,
      preConfirm: (inputValue) => {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlRegex.test(inputValue)) {
          Swal.showValidationMessage("Invalid URL");
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const inputValue = result.value;
        mutateImg(inputValue);
      }
    });
  };

  const handleNameClick = () => {
    Swal.fire({
      title: "Name",
      text: "Change name",
      input: "text",
      inputValue: data?.name,
      preConfirm: (inputValue) => {
        if (!inputValue) {
          Swal.showValidationMessage("Name is required");
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const inputValue = result.value;
        mutateName(inputValue);
      }
    });
  };

  const handleEmailClick = () => {
    Swal.fire({
      title: "Email",
      text: "Please your password first",
      input: "password",
      inputAttributes: {
        autocapitalize: "off",
      },
      preConfirm: (passwordValue) => {
        if (!passwordValue) {
          Swal.showValidationMessage("Password is required");
        }
      },
    }).then((passwordValue) => {
      Swal.fire({
        title: "Email",
        text: "Change email",
        input: "email",
        inputValue: data?.email,
        preConfirm: (inputValue) => {
          if (!inputValue) {
            Swal.showValidationMessage("Email is required");
          }
        },
      }).then((emailValue) => {
        if (emailValue.isConfirmed) {
          const email = emailValue.value;
          const password = passwordValue.value;
          mutateEmail({ email, password });
        }
      });
    });
  };

  const handlePasswordClick = () => {
    Swal.fire({
      title: "Password",
      text: "Type your old password.",
      input: "password",
      inputAttributes: {
        autocapitalize: "off",
      },
      preConfirm: (passwordValue) => {
        if (!passwordValue) {
          Swal.showValidationMessage("Password is required");
        }
      },
    }).then((passwordValue) => {
      if (passwordValue.isConfirmed) {
        Swal.fire({
          title: "New Password",
          text: "Enter new password",
          input: "password",
          inputAttributes: {
            autocapitalize: "off",
          },
          preConfirm: (newPasswordValue) => {
            const redex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if (!newPasswordValue) {
              Swal.showValidationMessage("New password is required");
            }
            if (!redex.test(newPasswordValue)) {
              Swal.showValidationMessage(
                "Password must contain at least 8 characters, including uppercase, lowercase letters and numbers"
              );
            }
          },
        }).then((newPasswordValue) => {
          if (newPasswordValue.isConfirmed) {
            const oldPassword = passwordValue.value;
            const newPassword = newPasswordValue.value;
            Swal.fire({
              title: "Confirm Password",
              text: "Confirm new password",
              input: "password",
              inputAttributes: {
                autocapitalize: "off",
              },
              preConfirm: (confirmPasswordValue) => {
                if (!confirmPasswordValue) {
                  Swal.showValidationMessage("Confirm password is required");
                }
                if (confirmPasswordValue !== newPassword) {
                  Swal.showValidationMessage("Passwords do not match");
                }
              },
            }).then((confirmPasswordValue) => {
              if (confirmPasswordValue.isConfirmed) {
                mutatePassword({ oldPassword, newPassword });
              }
            });
          }
        });
      }
    });
  };

  useErrorMessage({ isError: isErrorImg, error: errorImg } as {
    isError: boolean;
    error: Error;
  });
  useErrorMessage({ isError: isErrorName, error: errorName } as {
    isError: boolean;
    error: Error;
  });
  useErrorMessage({ isError: isErrorEmail, error: errorEmail } as {
    isError: boolean;
    error: Error;
  });
  useErrorMessage({ isError: isErrorPassword, error: errorPassword } as {
    isError: boolean;
    error: Error;
  });

  return {
    handleImageClick,
    handleNameClick,
    handleEmailClick,
    handlePasswordClick,
  };
};

export { useHandleEdit };
