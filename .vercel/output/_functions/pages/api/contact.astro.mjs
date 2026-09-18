export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const prerender = false;
async function POST({ request }) {
  {
    console.error("Server configuration error: GOOGLE_APPS_SCRIPT_URL is not set.");
    return new Response(JSON.stringify({ message: "Server configuration error." }), {
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
