export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const prerender = false;
const appsScriptUrl = "https://script.google.com/macros/s/AKfycbyVoZkwRO5EXUvZxyq5U7aOFuiq_rgQKVUSYa6nYanTkjiucdPS72sMbCApWQ_WPVlQ/exec";
const appsScriptSecret = "quzmFIRqgUP0vNH37nyMOvKF";
async function POST({ request }) {
  let formData;
  try {
    formData = await request.json();
  } catch (error) {
    return new Response(JSON.stringify({ message: "Invalid request data. Expecting JSON." }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  if (!formData.name || !formData.email || !formData.message) {
    return new Response(JSON.stringify({ message: "Missing required fields: name, email, and message." }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const dataToSend = {
    ...formData,
    secret: appsScriptSecret
    // Add the secret token for verification by Apps Script
  };
  try {
    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSend)
      // redirect: 'follow', // Usually not needed for POST to Apps Script unless explicitly configured
    });
    const result = await response.json();
    if (result.result === "success") {
      return new Response(JSON.stringify({ message: "Message sent successfully!" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      console.error("Apps Script Error:", result.error);
      return new Response(JSON.stringify({ message: "Failed to send message. Please try again later." }), {
        status: 500,
        // Indicates an issue on the backend (Apps Script side)
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    console.error("Fetch to Apps Script failed:", error);
    return new Response(JSON.stringify({ message: "An error occurred while sending the message." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
function GET() {
  return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json", "Allow": "POST" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
