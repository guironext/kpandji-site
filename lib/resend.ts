import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';
export const SENDER_EMAIL = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

