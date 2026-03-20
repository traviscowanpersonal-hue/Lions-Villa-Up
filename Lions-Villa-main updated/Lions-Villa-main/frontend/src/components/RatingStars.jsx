import React from 'react';
import { Star } from 'lucide-react';

export const RatingStars = ({ rating = 3.8, maxStars = 5, size = 20 }) => {
  return (
    <div className="stars-container" aria-label={`${rating} out of ${maxStars} stars`}>
      {Array.from({ length: maxStars }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;
        return (
          <span key={i} style={{ position: 'relative', display: 'inline-block', width: size, height: size }}>
            <Star size={size} style={{ color: 'hsl(35 25% 18%)', fill: 'hsl(35 25% 18%)' }} />
            {(filled || partial) && (
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  overflow: 'hidden',
                  width: filled ? '100%' : `${(rating % 1) * 100}%`,
                }}
              >
                <Star size={size} style={{ color: '#D4A017', fill: '#D4A017' }} />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};
