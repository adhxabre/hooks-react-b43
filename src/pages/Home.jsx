import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const HandleNavigation = () => {
    navigate("/signin");
  };

  return (
    <>
      <h1>This is home</h1>
      <button onClick={HandleNavigation}>Sign In</button>
      <a href="/signin">Sign in</a>
      <Link to="/signin">Sign in</Link>
    </>
  );
}
