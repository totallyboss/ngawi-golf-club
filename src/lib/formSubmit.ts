export function submitForm(formId: string, errorId: string, successId: string) {
  const form = document.getElementById(formId) as HTMLFormElement;
  const errorEl = document.getElementById(errorId)!;
  const successEl = document.getElementById(successId)!;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    errorEl.classList.add('hidden');
    successEl.classList.add('hidden');

    const data = Object.fromEntries(new FormData(form));

    // Client-side required field validation
    const required = ['name', 'email', 'message'];
    for (const field of required) {
      if (!String(data[field] ?? '').trim()) {
        errorEl.textContent = 'Please fill in all required fields.';
        errorEl.classList.remove('hidden');
        return;
      }
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(String(data.email))) {
      errorEl.textContent = 'Please enter a valid email address.';
      errorEl.classList.remove('hidden');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    submitBtn.disabled = true;
    const original = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Server error');

      form.reset();
      successEl.classList.remove('hidden');
    } catch {
      errorEl.textContent = 'Something went wrong. Please try again or email us directly.';
      errorEl.classList.remove('hidden');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = original;
    }
  });
}
