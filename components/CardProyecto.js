export default function CardProyecto({ titulo, descripcion, color }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition">
      <h2 className={`text-2xl font-semibold mb-2 ${color}`}>{titulo}</h2>
      <p className="text-sm text-gray-300">{descripcion}</p>
    </div>
  )
}
