export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Mis Proyectos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* FortniteBoost */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-2 text-green-400">FortniteBoost</h2>
          <p className="text-sm text-gray-300">
            Herramienta de optimización para mejorar el rendimiento de Fortnite en PC.
          </p>
        </div>

        {/* VeloxForge */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-2 text-blue-400">VeloxForge</h2>
          <p className="text-sm text-gray-300">
            Proyecto web para mostrar portafolio y herramientas de desarrollo.
          </p>
        </div>

        {/* Juegos Free */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-2 text-purple-400">Juegos Free</h2>
          <p className="text-sm text-gray-300">
            Colección de juegos gratuitos recomendados para la comunidad.
          </p>
        </div>
      </div>
    </main>
  )
}
