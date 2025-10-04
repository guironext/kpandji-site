import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
  voiture: string;
}

export const ContactEmail: React.FC<ContactEmailProps> = ({
  name,
  email,
  whatsapp,
  message,
  voiture,
}) => (
  <div>
    <h2>Nouveau message de contact</h2>
    <p><strong>Nom:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>WhatsApp:</strong> {whatsapp}</p>
    <p><strong>Voiture:</strong> {voiture}</p>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>
);

