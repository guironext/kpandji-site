import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasResendKey: !!process.env.RESEND_API_KEY,
    resendKeyPreview: process.env.RESEND_API_KEY ? 
      `${process.env.RESEND_API_KEY.substring(0, 5)}...` : 'NOT SET',
    adminEmail: process.env.ADMIN_EMAIL || 'NOT SET',
  });
}

