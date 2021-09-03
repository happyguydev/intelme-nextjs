import { useEffect } from "react";
import { useRouter } from "next/router";
import Api from "../../api";

const AuthenticationChecker = ({ children }) => {
  const isInServerStill = typeof window === "undefined";
  const refreshToken = !isInServerStill && localStorage.getItem("refreshToken");
  const api = new Api();
  const router = useRouter();

  if (!isInServerStill && window.location.href.includes("localhost")) {
    return children;
  }

  useEffect(() => {
    if (isInServerStill) {
      return null;
    }

    const doRefreshToken = async () => {
      // TODO: GET REMEMBER ME FROM STATE FOR COOKIE FLAG
      try {
        const tokens = await api.refreshToken({ refreshToken });

        localStorage.setItem("refreshToken", tokens.refresh_token);
        localStorage.setItem("accessToken", tokens.access_token);

        const currentURL = window.location.pathname;

        if (currentURL.includes("login")) {
          router.push("/dashboard");
        }
      } catch (err) {
        router.push("/login");
      }
    };

    doRefreshToken();
  }, [refreshToken]);

  return children;
};

export default AuthenticationChecker;
