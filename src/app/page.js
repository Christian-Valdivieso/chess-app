'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const [openings, setOpenings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterColor, setFilterColor] = useState('all');

    const filteredOpenings = openings.filter((opening) => {
        const term = searchTerm.toLowerCase();

        const matchesSearch =
            opening.name.toLowerCase().includes(term) ||
            opening.moves.toLowerCase().includes(term) ||
            opening.description.toLowerCase().includes(term);

        const matchesColor =
            filterColor === 'all' ||
            (filterColor === 'white' && opening.is_white) ||
            (filterColor === 'black' && !opening.is_white);

        return matchesSearch && matchesColor;
    });

    useEffect(() => {
        fetch('/api/openings')
            .then((res) => res.json())
            .then((data) => {
                setOpenings(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching openings:", error);
                setLoading(false);
            });
    }, []);

    return (
        <main className="p-8 bg-gray-900 min-h-screen text-white">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-4xl font-bold text-blue-400">My Chess Repertory ♟️</h1>
                    <Link href="/new-opening" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition font-semibold">
                        + Register New Opening
                    </Link>
                </div>

                <div className="mb-8 flex gap-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                    />

                    <select
                        value={filterColor}
                        onChange={(e) => setFilterColor(e.target.value)}
                        className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 cursor-pointer"
                    >
                        <option value="all">All Pieces</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                    </select>
                </div>

                {loading ? (
                    <p className="text-gray-400">Loading openings...</p>
                ) : (
                    <div className="grid gap-6">
                        {filteredOpenings.length === 0 ? (
                            <p className="text-gray-500 italic">No matches found for {searchTerm}</p>
                        ) : (
                            filteredOpenings.map((opening) => (
                                <div key={opening.id} className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">

                                    {/* CONTENIDO VISIBLE (SIN COMENTAR) */}
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-2xl font-semibold text-yellow-500">{opening.name}</h2>
                                        <img
                                            src={opening.is_white ? '/icons/pawn-white.png' : '/icons/pawn-black.png'}
                                            alt="Chess Piece"
                                            className="w-8 h-8 object-contain"
                                        />
                                    </div>
                                    <p className="font-mono bg-black p-2 mt-2 rounded text-green-400">{opening.moves}</p>
                                    <p className="mt-3 text-gray-400">{opening.description}</p>

                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}