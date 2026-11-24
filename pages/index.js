import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-green-400 mb-4">Bienvenido a VeloxForgeWeb</h1>
        <p className="text-lg text-gray-300 mb-6">
          Portafolio Gamer y Desarrollador Indie
        </p>
        <a
          href="/proyectos"
          className="px-6 py-3 bg-green-400 text-gray-900 rounded hover:bg-green-500 transition"
        >
          Ver proyectos
        </a>
      </main>
      <Footer />
    </>
  )
}
