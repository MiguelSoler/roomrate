import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const benefitCardClass =
  "rounded-2xl border border-white/70 bg-white/75 p-3 shadow-sm backdrop-blur sm:p-4";

const stepCardClass =
  "rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm";

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  const panelPath =
    user?.rol === "admin"
      ? "/admin"
      : user?.rol === "advertiser"
        ? "/manager"
        : null;

  const panelLabel =
    user?.rol === "admin"
      ? "Administración"
      : user?.rol === "advertiser"
        ? "Mis anuncios"
        : "Panel";

  return (
    <section className="flex flex-1 items-center bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-50 py-2 sm:py-3 lg:py-4">
      <div className="app-container w-full">
        <div className="overflow-hidden rounded-[28px] border border-emerald-200/80 bg-white/45 shadow-sm backdrop-blur">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700 sm:text-xs">
                Alquila con más contexto
              </div>

              <div className="mt-3 max-w-3xl space-y-2 sm:mt-4 sm:space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-ui-text sm:text-5xl lg:text-[56px] lg:leading-tight">
                  Encuentra habitación sabiendo lo que te vas a encontrar en el piso
                </h1>

                <p className="max-w-2xl text-sm leading-6 text-ui-text-secondary sm:text-base">
                  RoomRate une anuncios de habitaciones con información de
                  convivencia como valoraciones en LIMPIEZA, RUIDO y PUNTUALIDAD DE PAGOS <br />
                  ¡Únete ahora y vota a tus compañeros de piso!
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:flex-wrap">
                <Link to="/habitaciones" className="btn btn-primary">
                  Ver habitaciones
                </Link>

                {!isAuthenticated ? (
                  <>
                    <Link
                      to="/register"
                      className="btn border border-emerald-300 bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                    >
                      Crear cuenta
                    </Link>

                    <Link to="/login" className="btn btn-secondary">
                      Iniciar sesión
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/mi-estancia"
                      className="btn border border-emerald-300 bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                    >
                      Mi estancia
                    </Link>

                    {panelPath ? (
                      <Link to={panelPath} className="btn btn-secondary">
                        {panelLabel}
                      </Link>
                    ) : (
                      <Link to="/perfil" className="btn btn-secondary">
                        Mi perfil
                      </Link>
                    )}
                  </>
                )}
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 sm:mt-5 sm:grid-cols-3 sm:gap-3">
                <div className={benefitCardClass}>
                  <h2 className="text-sm font-bold text-ui-text">
                    Busca habitaciones
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-ui-text-secondary sm:text-sm">
                    Consulta la reputación de los pisos en donde te gustaría vivir
                  </p>
                </div>

                <div className={benefitCardClass}>
                  <h2 className="text-sm font-bold text-ui-text">
                    Con más contexto
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-ui-text-secondary sm:text-sm">
                    Verás las valoraciones de tus potenciales compañeros de piso
                  </p>
                </div>

                <div className={benefitCardClass}>
                  <h2 className="text-sm font-bold text-ui-text">
                    Más confianza
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-ui-text-secondary sm:text-sm">
                    ¡Así podrás saber qué te espera en ese piso!
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden border-t border-emerald-200/70 bg-white/30 p-6 lg:block lg:border-l lg:border-t-0 lg:p-8">
              <div className="flex h-full flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                  Cómo funciona
                </p>

                <div className="mt-4 space-y-3">
                  <div className={stepCardClass}>
                    <p className="text-sm font-bold text-ui-text">
                      1. Busca habitación
                    </p>
                    <p className="mt-1 text-sm text-ui-text-secondary">
                      Filtra por reputación, precio, ubicación y más características
                    </p>
                  </div>

                  <div className={stepCardClass}>
                    <p className="text-sm font-bold text-ui-text">
                      2. Revisa el ambiente
                    </p>
                    <p className="mt-1 text-sm text-ui-text-secondary">
                      Puedes ver las valoraciones de tus futuros compañeros en LIMPIEZA, RUIDO y PUNTUALIDAD DE PAGOS 
                    </p>
                  </div>

                  <div className={stepCardClass}>
                    <p className="text-sm font-bold text-ui-text">
                      3. Decide con criterio
                    </p>
                    <p className="mt-1 text-sm text-ui-text-secondary">
                      De este modo conocerás el ambiente que te vas a encontrar antes de mudarte
                    </p>
                  </div>

                  <div className={stepCardClass}>
                    <p className="text-sm font-bold text-ui-text">
                      4. Anuncia tus habitaciones
                    </p>
                    <p className="mt-1 text-sm text-ui-text-secondary">
                      Si lo que quieres es publicar tus propios anuncios, conviértete en anunciante desde tu perfil y crea habitaciones
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}