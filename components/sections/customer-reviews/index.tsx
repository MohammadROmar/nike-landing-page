import ReviewCard from './review';
import { reviews } from '@/data/reviews';

export default function CustomerReviews() {
  return (
    <section className="padding bg-pale-blue max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold text-black">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center dark:text-[#6d6d6d]">
        Hear genuine stories from our satesfied customers about thier
        expectional experiences with us.
      </p>
      <ul className="mt-24 flex-1 flex justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} review={review} />
        ))}
      </ul>
    </section>
  );
}
