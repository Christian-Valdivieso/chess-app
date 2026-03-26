import Link from 'next/link';

export default function NewOpening() {
    return (
        <main className="p-8 bg-gray-900 min-h-screen text-white">
            <div className="max-w-md mx-auto">
                <Link href="/" className="text-blue-400 hover:underline">← Back to home</Link>

                <h1 className="text-3xl font-bold my-6">Register Opening</h1>

                <form className="space-y-4 bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <div>
                        <label className="block mb-1 text-sm text-gray-400">Opening Name</label>
                        <input type="text" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white" placeholder="e.g. Queen's Gambit" />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm text-gray-400">Key Moves</label>
                        <input type="text" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white" placeholder="e.g. 1. d4 d5 2. c4" />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm text-gray-400">Tactical Description</label>
                        <textarea className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 h-24 text-white" placeholder="Main idea of the strategy..."></textarea>
                    </div>

                    <button type="button" className="w-full bg-green-600 hover:bg-green-500 p-3 rounded-lg font-bold transition">
                        Save Opening
                    </button>
                </form>
            </div>
        </main>
    );
}