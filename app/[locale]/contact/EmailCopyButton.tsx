'use client';

import { useState } from 'react';

interface EmailCopyButtonProps {
  email: string;
}

export default function EmailCopyButton({ email }: EmailCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="text-green-electric-600 hover:text-green-electric-700 text-lg cursor-pointer transition-colors"
    >
      {copied ? '✓ Copied!' : email}
    </button>
  );
}
