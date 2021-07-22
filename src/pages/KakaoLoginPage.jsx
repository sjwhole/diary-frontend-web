import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { kakaoLogin } from "../utils/apis/Auth";
import qs from "qs";

function KakaoLoginPage({ location }) {
  const history = useHistory();

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const code = query.code;

  useEffect(() => {
    kakaoLogin(code)
      .catch(() => {
        history.push("/login");
      })
      .then((Token) => {
        if (Token) {
          localStorage.setItem("JWT", Token);
          history.push("/post");
        }
      });
  }, []);

  return <></>;
}

export default KakaoLoginPage;
