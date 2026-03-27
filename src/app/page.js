'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const [openings, setOpenings] = useState([]);
    const [loading, setLoading] = useState(true);

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

                {loading ? (
                    <p className="text-gray-400">Loading openings...</p>
                ) : (
                    <div className="grid gap-6">
                        {openings.length === 0 && <p className="text-gray-500 italic">No openings found. Start by adding one!</p>}

                        {openings.map((opening) => (
                            <div key={opening.id} className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
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
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}