'use client';
import React, { useState } from 'react';

export default function ImageWithFallback({ src, alt, className, width, height, loading }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      onError={() => setImgSrc('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&w=800')}
    />
  );
} 