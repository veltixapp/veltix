export async function request(options: {
  url: string;
  method?: string;
  data?: any;
}) {
  const { url, method = 'GET', data } = options;
  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: method !== 'GET' ? JSON.stringify(data) : undefined
  });
  return res.json();
}
