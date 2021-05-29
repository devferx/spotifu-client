const code = new URLSearchParams(window.location.search).get("code");

export const Home = () => {
  return <div>{code}</div>;
};
