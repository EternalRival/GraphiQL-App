import { Link } from 'react-router-dom';

export function MainPage() {
  return (
    <>
      <h1>Main page</h1>
      <Link to="/about">About</Link>
    </>
  );
}
