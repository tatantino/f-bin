import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const DATABRICKS_API = process.env.DATABRICKS_API_URL;
const DATABRICKS_TOKEN = process.env.DATABRICKS_TOKEN;
const WAREHOUSE_ID = process.env.DATABRICKS_WAREHOUSE_ID;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sql, parameters } = body;

    const response = await fetch(`${DATABRICKS_API}/api/2.0/sql/statements`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${DATABRICKS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        warehouse_id: WAREHOUSE_ID,
        statement: sql,
        parameters,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Database API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
