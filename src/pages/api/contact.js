// Get environment variables (make sure they are set in your deployment environment too!)
// Ensure your project is configured to load .env files (Astro does this by default)
export const prerender = false;
const appsScriptUrl = import.meta.env.GOOGLE_APPS_SCRIPT_URL;
const appsScriptSecret = import.meta.env.APPS_SCRIPT_SECRET; // Your secret token

// Export the POST function for the API route
export async function POST({ request }) {
  // Check if the Apps Script URL is configured on the server
  if (!appsScriptUrl) {
    console.error("Server configuration error: GOOGLE_APPS_SCRIPT_URL is not set.");
    return new Response(JSON.stringify({ message: 'Server configuration error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let formData;
  try {
    // Expecting JSON data from the frontend fetch request
    formData = await request.json();
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Invalid request data. Expecting JSON.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Basic validation (can add more robust validation here if needed)
  if (!formData.name || !formData.email || !formData.message) {
    return new Response(JSON.stringify({ message: 'Missing required fields: name, email, and message.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Prepare data to send to Google Apps Script, including the secret token
  const dataToSend = {
    ...formData,
    secret: appsScriptSecret, // Add the secret token for verification by Apps Script
  };

  try {
    // Make the fetch request FROM THE SERVER-SIDE API ROUTE to Google Apps Script
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
      // redirect: 'follow', // Usually not needed for POST to Apps Script unless explicitly configured
    });

    // Parse the response from Google Apps Script
    const result = await response.json();

    // Check the result from Apps Script
    if (result.result === 'success') {
      // Send success response back to the frontend form
      return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      // Log the error from Apps Script server-side for debugging
      console.error('Apps Script Error:', result.error);
      // Send a generic error back to the frontend
      return new Response(JSON.stringify({ message: 'Failed to send message. Please try again later.' }), {
        status: 500, // Indicates an issue on the backend (Apps Script side)
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    // Log the error from the fetch call server-side
    console.error('Fetch to Apps Script failed:', error);
    // Send a generic error back to the frontend
    return new Response(JSON.stringify({ message: 'An error occurred while sending the message.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Optional: Add a GET handler if you want to prevent direct browser access via GET
export function GET() {
  return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json', 'Allow': 'POST' },
  });
}