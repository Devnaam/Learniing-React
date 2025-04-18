import { FaStar } from 'react-icons/fa';

function ReviewCard({ review }) {
  return (
    <div className="border-bottom py-3">
      <div className="d-flex align-items-center">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={14} color={i < review.rating ? '#ff3f6c' : '#ddd'} />
        ))}
        <span className="ms-2 text-muted">({review.rating})</span>
      </div>
      <p className="mt-1">{review.comment}</p>
      <p className="text-muted small">{review.user} - {review.date}</p>
    </div>
  );
}

export default ReviewCard;