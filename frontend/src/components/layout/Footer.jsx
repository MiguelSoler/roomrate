import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-ui-border bg-white">
      <div className="app-container py-6">
        <div className="flex flex-col gap-3 text-sm text-ui-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} RoomRate. Todos los derechos reservados.
          </p>

          <nav
            aria-label="Enlaces legales"
            className="flex flex-wrap gap-x-4 gap-y-2"
          >
            <Link to="/aviso-legal">
              Aviso legal
            </Link>

            <Link to="/politica-privacidad">
              Política de privacidad
            </Link>

            <Link to="/politica-cookies">
              Política de cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}