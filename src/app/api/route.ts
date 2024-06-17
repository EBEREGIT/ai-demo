export async function GET(request: Request) {
  return new Response(JSON.stringify({ message: "Welcome To AI Demo" }), {
    status: 200,
    statusText: "Welcome To AI Demo!",
  });
}