export async function onRequestGet(context) {
  const { DB } = context.env;

  const result = await DB.prepare(
    "SELECT * FROM leads ORDER BY created_at DESC"
  ).all();

  return Response.json(result.results);
}

export async function onRequestPost(context) {
  const { DB } = context.env;

  const body = await context.request.json();

  await DB.prepare(
    "INSERT INTO leads (id,data) VALUES (?,?)"
  )
  .bind(
    crypto.randomUUID(),
    JSON.stringify(body)
  )
  .run();

  return Response.json({
    success: true
  });
}
