import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const resendKey = (import.meta.env.RESEND_API_KEY as string) ||
    ((request as unknown as { env?: { RESEND_API_KEY?: string } }).env?.RESEND_API_KEY);
  const contactEmail = (import.meta.env.CONTACT_EMAIL as string) ||
    ((request as unknown as { env?: { CONTACT_EMAIL?: string } }).env?.CONTACT_EMAIL);

  let body: { name?: string; email?: string; message?: string; subject?: string; business?: string };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body' }, 400);
  }

  const { name, email, message, subject, business } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return json({ error: 'Name, email and message are required' }, 400);
  }

  const emailSubject = subject === 'Sponsorship Enquiry'
    ? `Sponsorship Enquiry from ${name}`
    : `Website Enquiry from ${name}`;

  const textBody = [
    `From: ${name} <${email}>`,
    business ? `Business: ${business}` : '',
    '',
    message,
  ].filter(Boolean).join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Ngawi Golf Club Website <noreply@ngawigolfclub.co.nz>',
      to: [contactEmail],
      reply_to: email,
      subject: emailSubject,
      text: textBody,
    }),
  });

  if (!res.ok) {
    return json({ error: 'Failed to send email' }, 500);
  }

  return json({ ok: true });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
