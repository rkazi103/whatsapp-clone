/* eslint-disable @next/next/no-img-element */
import { Logo, LoadingContainer } from "../styles/LoadingStyle";
import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <LoadingContainer>
        <Logo
          src="https://1000logos.net/wp-content/uploads/2021/04/WhatsApp-logo-768x432.png"
          alt=""
          loading="lazy"
        />
        <Circle colors="#3CBC2B" size={60} />
      </LoadingContainer>
    </center>
  );
}

export default Loading;
