
export default function NotFound() {

  return (
    <div style={{ textAlign: "center", padding: "80px" }}>
      <h1>404</h1>
      <h2>Looks like you're lost</h2>
      <p>the page you are looking for is not available!</p>
      <a href="/">Go Back Home</a>
    </div>
  );
}
export const metadata = {
  title: "404 - Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};