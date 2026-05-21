import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth.js";
import roomRateLogo from "../../assets/branding/roomrate-logo.png";
import Modal from "../ui/Modal.jsx";

const baseLink =
  "inline-flex items-center whitespace-nowrap rounded-xl border px-3.5 py-2 text-sm font-semibold shadow-sm transition-all duration-150";

const desktopNavLink = ({ isActive }) =>
  `${baseLink} ${
    isActive
      ? "border-brand-primary bg-white text-brand-primary shadow-md"
      : "border-white/70 bg-white/45 text-ui-text hover:-translate-y-0.5 hover:border-brand-primary hover:bg-white hover:text-brand-primary hover:shadow-md"
  }`;

const mobileNavLink = ({ isActive }) =>
  `block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-150 ${
    isActive
      ? "bg-blue-100 text-brand-primary"
      : "text-ui-text hover:bg-white/80"
  }`;

function MenuIcon({ open = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

function UserGreeting({ name, compact = false }) {
  return (
    <span
      className={`min-w-0 truncate ${
        compact
          ? "max-w-[140px] rounded-full border border-white/80 bg-white/60 px-3 py-1.5 text-sm font-bold text-ui-text shadow-sm sm:max-w-[190px]"
          : "max-w-[190px] text-[15px] font-semibold text-ui-text"
      }`}
      title={name ? `Hola, ${name}` : "Hola"}
    >
      Hola{name ? `, ${name}` : ""}
    </span>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const requestLogout = () => {
    setIsMobileMenuOpen(false);
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const handleConfirmLogout = () => {
    setIsLogoutModalOpen(false);
    logout();
    navigate("/", { replace: true });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const panelPath =
    user?.rol === "admin"
      ? "/admin"
      : user?.rol === "advertiser"
        ? "/manager"
        : null;

  return (
    <>
      <header className="border-b border-blue-300 bg-gradient-to-r from-blue-300 via-sky-200 to-slate-100 shadow-md">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-3 md:px-6 lg:px-8 2xl:px-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex shrink-0 items-center gap-5">
              <Link
                to="/"
                className="flex shrink-0 items-center gap-3 transition-opacity duration-150 hover:opacity-90"
                onClick={closeMobileMenu}
              >
                <img
                  src={roomRateLogo}
                  alt="RoomRate"
                  className="h-11 w-auto shrink-0"
                />

                <span className="font-heading text-[22px] font-bold tracking-tight text-ui-text">
                  RoomRate
                </span>
              </Link>

              <span className="hidden h-10 w-[2px] rounded-full bg-slate-700/25 shadow-sm 2xl:block" />
            </div>

            <nav className="hidden flex-1 items-center justify-end gap-4 2xl:flex">
              <NavLink className={desktopNavLink} to="/habitaciones">
                Habitaciones
              </NavLink>

              {!isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <Link className="btn btn-secondary btn-sm" to="/login">
                    Login
                  </Link>

                  <Link className="btn btn-primary btn-sm" to="/register">
                    Registro
                  </Link>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <NavLink className={desktopNavLink} to="/mi-estancia">
                      Mi estancia
                    </NavLink>
                              
                    <NavLink className={desktopNavLink} to="/convivientes">
                      Convivientes
                    </NavLink>
                              
                    <NavLink className={desktopNavLink} to="/mis-votos">
                      Mis votos
                    </NavLink>
                              
                    <NavLink className={desktopNavLink} to="/mi-reputacion">
                      Mi reputación
                    </NavLink>
                              
                    <NavLink className={desktopNavLink} to="/votos-recibidos">
                      Votos recibidos
                    </NavLink>
                              
                    <NavLink className={desktopNavLink} to="/perfil">
                      Perfil
                    </NavLink>
                  </div>
                              
                  <div className="ml-4 flex items-center gap-3 border-l border-blue-300/70 pl-5">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/55 px-3 py-2 shadow-sm backdrop-blur">
                      {panelPath ? (
                        <Link
                          className="btn btn-sm min-w-[104px] whitespace-nowrap border border-emerald-300 bg-emerald-100 text-[15px] font-bold text-emerald-800 shadow-sm hover:bg-emerald-200 hover:text-emerald-900"
                          to={panelPath}
                        >
                          Panel privado
                        </Link>
                      ) : null}
                  
                      <UserGreeting name={user?.nombre} />
                    
                      <button
                        className="btn btn-danger min-w-[120px] whitespace-nowrap px-5 py-2.5 text-[15px] font-bold shadow-sm"
                        type="button"
                        onClick={requestLogout}
                      >
                        Salir
                      </button>
                    </div>
                  </div>
                </>
              )}
            </nav>

            <div className="flex min-w-0 items-center gap-2 2xl:hidden">
              {isAuthenticated ? (
                <UserGreeting name={user?.nombre} compact />
              ) : null}

              <button
                type="button"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/70 bg-white/80 text-ui-text shadow-sm transition-colors hover:bg-white"
                aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navbar-menu"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                <MenuIcon open={isMobileMenuOpen} />
              </button>
            </div>
          </div>

          {isMobileMenuOpen ? (
            <div
              id="mobile-navbar-menu"
              className="mt-4 max-h-[calc(100dvh-88px)] overflow-y-auto rounded-2xl border border-white/70 bg-white/85 p-3 shadow-md backdrop-blur 2xl:hidden"
            >
              <div className="space-y-2">
                <NavLink
                  className={mobileNavLink}
                  to="/habitaciones"
                  onClick={closeMobileMenu}
                >
                  Habitaciones
                </NavLink>

                {!isAuthenticated ? (
                  <>
                    <Link
                      className="block rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-ui-text transition-colors hover:bg-slate-50"
                      to="/login"
                      onClick={closeMobileMenu}
                    >
                      Login
                    </Link>

                    <Link
                      className="block rounded-xl bg-brand-primary px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                      to="/register"
                      onClick={closeMobileMenu}
                    >
                      Registro
                    </Link>
                  </>
                ) : (
                  <>
                    <NavLink
                      className={mobileNavLink}
                      to="/mi-estancia"
                      onClick={closeMobileMenu}
                    >
                      Mi estancia
                    </NavLink>

                    <NavLink
                      className={mobileNavLink}
                      to="/convivientes"
                      onClick={closeMobileMenu}
                    >
                      Convivientes
                    </NavLink>

                    <NavLink
                      className={mobileNavLink}
                      to="/mis-votos"
                      onClick={closeMobileMenu}
                    >
                      Mis votos
                    </NavLink>

                    <NavLink
                      className={mobileNavLink}
                      to="/mi-reputacion"
                      onClick={closeMobileMenu}
                    >
                      Mi reputación
                    </NavLink>

                    <NavLink
                      className={mobileNavLink}
                      to="/votos-recibidos"
                      onClick={closeMobileMenu}
                    >
                      Votos recibidos
                    </NavLink>

                    <NavLink
                      className={mobileNavLink}
                      to="/perfil"
                      onClick={closeMobileMenu}
                    >
                      Perfil
                    </NavLink>

                    {panelPath ? (
                      <Link
                        className="block rounded-xl border border-emerald-300 bg-emerald-100 px-4 py-3 text-sm font-bold text-emerald-800 shadow-sm transition-colors hover:bg-emerald-200 hover:text-emerald-900"
                        to={panelPath}
                        onClick={closeMobileMenu}
                      >
                        Panel
                      </Link>
                    ) : null}

                    <button
                      className="btn btn-danger w-full"
                      type="button"
                      onClick={requestLogout}
                    >
                      Salir
                    </button>
                  </>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <Modal
        open={isLogoutModalOpen}
        title="Confirmar salida"
        onClose={closeLogoutModal}
        size="md"
        tone="warning"
        closeLabel="Cancelar"
        closeOnOverlay={false}
        showCloseButton={false}
      >
        <div className="space-y-4">
          <p className="text-sm text-ui-text-secondary">
            Vas a cerrar tu sesión actual.
          </p>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">
              Tendrás que volver a iniciar sesión para acceder a tu cuenta.
            </p>
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={closeLogoutModal}
            >
              Cancelar
            </button>

            <button
              type="button"
              className="btn btn-sm border border-amber-300 bg-amber-100 text-amber-800 hover:bg-amber-200 hover:text-amber-800"
              onClick={handleConfirmLogout}
            >
              Sí, salir
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}