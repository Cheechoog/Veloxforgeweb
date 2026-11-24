export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-400">VeloxForgeWeb</h1>
      <div className="space-x-6">
        <a href="/" className="hover:text-green-400">Inicio</a>
        <a href="/proyectos" className="hover:text-green-400">Proyectos</a>
        <a href="/multimedia" className="hover:text-green-400">Multimedia</a>
        <a href="/tutoriales" className="hover:text-green-400">Tutoriales</a>
        <a href="/contacto" className="hover:text-green-400">Contacto</a>
      </div>
    </nav>
  )
}
