import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const [rows] = await db.query('SELECT * FROM openings');
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { name, moves, description } = await request.json();
        await db.query(
            'INSERT INTO openings (name, moves, description) VALUES (?, ?, ?)',
            [name, moves, description]
        );
        return NextResponse.json({ message: 'Opening saved successfully' });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}