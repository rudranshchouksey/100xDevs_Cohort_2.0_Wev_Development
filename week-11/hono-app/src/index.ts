import { Hono, Next } from 'hono'
import { Context } from 'hono/jsx';

const app = new Hono()

async function authMiddleware(c: any, next: any) {
  if(c.req.header("Authorization")) {
    await next()
  } else {
    return c.text("You dont have access")
  }
}

app.use(authMiddleware)

app.get('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app