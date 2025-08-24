'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  excerpt: string;
  url?: string;
}

export default function ShareButton({ title, excerpt, url }: ShareButtonProps) {
  const handleShare = () => {
    const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: title,
        text: excerpt,
        url: shareUrl,
      });
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      // Fallback to copying URL
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors duration-300"
    >
      <Share2 className="h-5 w-5" />
      <span>Share</span>
    </button>
  );
}