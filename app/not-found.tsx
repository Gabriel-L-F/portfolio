import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h2>404 Not Found</h2>
      <p>Page introuvable.</p>
      <Link href="/projects">Retour sur mes projets</Link>
    </main>
  );
}