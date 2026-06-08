import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const comingSoon = import.meta.env.COMING_SOON === 'true';
  const { pathname } = context.url;
  const preview = context.cookies.get('preview_site')?.value === 'true';

  if (comingSoon && !preview && pathname !== '/coming-soon' && !pathname.startsWith('/api/')) {
    return context.redirect('/coming-soon', 307);
  }

  return next();
});
