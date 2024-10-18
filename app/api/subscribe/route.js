export async function POST(request) {
  const { email } = await request.json();

  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE_NAME = 'Subscribers'; // Replace with your table name

  const url = `https://api.airtable.com/v0/appojaIBWGXx75qww/${AIRTABLE_TABLE_NAME}`;

  const data = {
    records: [
      {
        fields: {
          Email: email
        }
      }
    ]
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
  } else {
    console.error(response);
    return new Response(JSON.stringify({ message: 'Failed to add record' }), { status: 500 });
  }
}
