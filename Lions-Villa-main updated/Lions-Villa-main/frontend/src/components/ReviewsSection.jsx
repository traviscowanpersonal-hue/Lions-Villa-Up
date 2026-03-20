import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { RatingStars } from './RatingStars';
import { Quote } from 'lucide-react';

const reviews = [
  {
    text: "I enjoyed my stay, haven't been there in a long while but the rooms are very clean, cheap prices, and I'm liking the improvements I'm seeing so far.",
    author: 'Dick Robinson',
    date: '8 months ago',
    rating: 5,
    testid: 'review-quote-1',
  },
  {
    text: 'The checkin process was really quick, you just walk up to the grill and request a room. The staff is approachable and easy to deal with.',
    author: 'Melanie Gayle',
    date: '2 years ago',
    rating: 4,
    testid: 'review-quote-2',
  },
  {
    text: "Been here twice and honestly it's a nice place — quiet, comfortable, rooms are tidy, rooms have no obnoxious odor. I enjoyed my little stay there.",
    author: 'POLO J',
    date: '3 years ago',
    rating: 5,
    testid: 'review-quote-3',
  },
];

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28" style={{ background: 'hsl(30 25% 4%)' }}>
      <div className="section-container">
        <SectionHeader
          eyebrow="Guest Reviews"
          title="What Our Guests Say"
          subtitle="Real reviews from real guests on Google."
          center
        />

        {/* Rating summary */}
        <motion.div
          data-testid="reviews-rating-summary"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12 p-6 rounded-2xl border"
          style={{ background: 'hsl(28 28% 6%)', borderColor: 'rgba(212,160,23,0.3)' }}
        >
          <div className="text-center">
            <div className="text-6xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#D4A017' }}>3.8</div>
            <div className="text-xs mt-1" style={{ color: 'hsl(40 10% 55%)' }}>out of 5</div>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-2">
            <RatingStars rating={3.8} size={24} />
            <p className="text-sm" style={{ color: 'hsl(40 10% 72%)' }}>Based on <strong style={{ color: '#FFF9EE' }}>36 reviews</strong> on Google</p>
            <a
              href="https://maps.google.com/?cid=lions-villa-may-pen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline"
              style={{ color: '#D4A017' }}
            >
              View on Google Maps →
            </a>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.testid}
              data-testid={review.testid}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl p-6 border-t-2 flex flex-col gap-3"
              style={{
                background: 'hsl(28 28% 6%)',
                border: '1px solid hsl(35 25% 18%)',
                borderTop: '2px solid #D4A017',
              }}
            >
              <Quote size={20} style={{ color: 'rgba(212,160,23,0.4)' }} />
              <p className="text-sm leading-relaxed flex-1 italic" style={{ color: 'hsl(40 10% 78%)' }}>
                "{review.text}"
              </p>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#FFF9EE' }}>{review.author}</p>
                  <p className="text-xs" style={{ color: 'hsl(40 10% 50%)' }}>{review.date}</p>
                </div>
                <RatingStars rating={review.rating} size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
