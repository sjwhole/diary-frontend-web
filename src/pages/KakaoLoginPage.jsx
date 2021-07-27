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
    (async () => {
      try {
        const { Token, nickname } = await kakaoLogin(code);
        localStorage.setItem("JWT", Token);
        localStorage.setItem("nickname", nickname);
        history.push("/post");
      } catch (e) {
        history.push("/login");
      }
    })();
  }, []);

  return <></>;
}

export default KakaoLoginPage;
