'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
  displayText?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  displayText,
  className = "",
  variant = "outline"
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      variant={variant}
      size="sm"
      onClick={handleCopy}
      className={`flex items-center gap-2 transition-all duration-200 ${className}`}
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-green-600" />
          <span className="text-xs">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          {displayText !== "" && (
            <span className="text-xs font-mono">
              {displayText ?? `${text.slice(0, 6)}...${text.slice(-4)}`}
            </span>
          )}
        </>
      )}
    </Button>
  );
};
