import { testimonials } from "../constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem.jsx";

const Testimonials = () => {
  // Limit the testimonials to 3
  const selectedTestimonials = testimonials.slice(0, 3);

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      {/* Custom styles for Space Grotesk */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
          
          .space-grotesk {
            font-family: 'Space Grotesk', sans-serif;
          }
        `}
      </style>

      <div className="container block lg:flex">
        {/* Heading Section with Space Grotesk */}
        <div className="testimonials_head-res relative z-2 mr-20 flex-300 space-grotesk">
          <h3 className="h3 max-md:h5 text-p4">Hear from Our Founders</h3>
        </div>

        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="flex-50 space-grotesk">
            {selectedTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-item-container">
                <TestimonialItem
                  item={{
                    ...testimonial,
                    text:
                      testimonial.text ||
                      `XERO has revolutionized the way we handle food waste and sustainability in our organization.`,
                  }}
                  containerClassName="last:after:hidden last:after:max-md:block"
                >
                  <div className="testimonial-image">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                </TestimonialItem>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
