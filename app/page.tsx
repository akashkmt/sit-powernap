import Link from "next/link";

export default function Home() {
  return (
    <div className="body-container font-font">
      <div className="main-button-container">
        <Link href="/sit" className="main-button">
          Sit
        </Link>
        <Link href="/power-nap" className="main-button">
          Power Nap
        </Link>
      </div>
    </div>
  );
}
