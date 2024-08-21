import React from 'react';

const SocialMediaShare = () => {
  const handleShare = (platform) => {
    const url = window.location.href;
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
        break;
      case 'instagram':
        alert('Instagram sharing not supported directly through URL.');
        return;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-x-4">
      <button
        onClick={() => handleShare('facebook')}
        className="bg-blue-600 text-white p-2 rounded"
      >
        Share on Facebook
      </button>
      <button
        onClick={() => handleShare('twitter')}
        className="bg-blue-400 text-white p-2 rounded"
      >
        Share on Twitter
      </button>
      <button
        onClick={() => handleShare('instagram')}
        className="bg-pink-500 text-white p-2 rounded"
      >
        Share on Instagram
      </button>
    </div>
  );
};

export default SocialMediaShare;
