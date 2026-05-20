export default function PoliticaPrivacidad() {
  return (
    <section className="section">
      <div className="app-container">
        <article className="mx-auto max-w-3xl card">
          <div className="card-body space-y-6">
            <div>
              <h1>Política de privacidad</h1>
              <p className="mt-2 text-ui-text-secondary">
                Información sobre cómo RoomRate trata los datos personales de las personas usuarias.
              </p>
            </div>

            <section className="space-y-2">
              <h2>1. Responsable del tratamiento</h2>
              <p className="text-ui-text-secondary">
                El responsable del tratamiento de los datos personales recabados a través de RoomRate es [NOMBRE / DENOMINACIÓN], con email de contacto [EMAIL] y domicilio en [DIRECCIÓN].
              </p>
            </section>

            <section className="space-y-2">
              <h2>2. Qué datos tratamos</h2>
              <ul className="list-disc space-y-1 pl-5 text-sm text-ui-text-secondary">
                <li>Datos identificativos: nombre, apellidos, email y teléfono.</li>
                <li>Datos de perfil: fotografía de perfil.</li>
                <li>Datos de cuenta y autenticación.</li>
                <li>Datos de pisos, habitaciones y estancias.</li>
                <li>Datos de valoraciones y reputación entre convivientes.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2>3. Finalidades del tratamiento</h2>
              <p className="text-ui-text-secondary">
                Los datos se tratarán para gestionar cuentas de usuario, permitir el acceso autenticado, gestionar perfiles, pisos, habitaciones, estancias y permitir el sistema de valoraciones entre convivientes.
              </p>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}