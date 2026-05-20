export default function AvisoLegal() {
  return (
    <section className="section">
      <div className="app-container">
        <article className="mx-auto max-w-3xl card">
          <div className="card-body space-y-6">
            <div>
              <h1>Aviso legal</h1>
              <p className="mt-2 text-ui-text-secondary">
                Información legal sobre la titularidad y condiciones de uso de RoomRate.
              </p>
            </div>

            <section className="space-y-2">
              <h2>Titular de la aplicación</h2>
              <p className="text-ui-text-secondary">
                En cumplimiento de la normativa vigente, se informa de que la presente aplicación/web RoomRate es titularidad de [NOMBRE Y APELLIDOS / DENOMINACIÓN], con domicilio en [DIRECCIÓN], correo electrónico de contacto [EMAIL] y, en su caso, NIF [NIF].
              </p>
            </section>

            <section className="space-y-2">
              <h2>Objeto</h2>
              <p className="text-ui-text-secondary">
                La aplicación tiene por objeto ofrecer una plataforma digital orientada a la publicación y consulta de habitaciones en pisos compartidos, así como a la gestión de valoraciones entre convivientes.
              </p>
            </section>

            <section className="space-y-2">
              <h2>Condiciones de uso</h2>
              <p className="text-ui-text-secondary">
                El acceso y uso de la aplicación atribuye la condición de usuario e implica la aceptación de las presentes condiciones.
              </p>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}