export async function onRequestGet(context) {
  return Response.json({
    success: true,
    message: "Lead API Ready"
  });
}
