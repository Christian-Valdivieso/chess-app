import Link from 'next/link';

export default function Home() {
  // Sample data (tomorrow this will come from the database)
  const sampleOpenings = [
    { id: 1, name: "Ruy Lopez", moves: "1. e4 e5 2. Nf3 Nc6 3. Bb5", description: "Classic and solid white opening." },
    { id: 2, name: "Sicilian Defense", moves: "1. e4 c5", description: "A sharp and aggressive response for black." }
  ];

  return (
      <main className="p-8 bg-gray-900 min-h-screen text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-bold text-blue-400">My Chess Repertory ♟️</h1>
            <Link href="/new-opening" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition font-semibold">
              + Register New Opening
            </Link>
          </div>

          <div className="grid gap-6">
            {sampleOpenings.map((opening) => (
                <div key={opening.id} className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-semibold text-yellow-500">{opening.name}</h2>
                  <p className="font-mono bg-black p-2 mt-2 rounded text-green-400">{opening.moves}</p>
                  <p className="mt-3 text-gray-400">{opening.description}</p>
                </div>
            ))}
          </div>
        </div>
      </main>
  );
}