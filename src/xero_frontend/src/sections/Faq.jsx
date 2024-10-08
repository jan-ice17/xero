import { Element } from "react-scroll";
import { motion } from "framer-motion"; // Importing framer-motion
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  // Animation variants for the left-to-right motion
  const leftToRightVariants = {
    hidden: { opacity: 0, x: -100 }, // Start hidden and 100px to the left
    visible: {
      opacity: 1,
      x: 0, // Move to its original position
      transition: {
        duration: 0.8, // Animation duration
        ease: "easeOut",
      },
    },
  };

  // Enhanced wave-like motion for the title
  const waveVariants = {
    animate: {
      y: [0, -15, 0, 15, 0], // Increased movement for more visibility
      transition: {
        duration: 3, // Faster cycle for more pronounced effect
        repeat: Infinity, // Infinite looping
        ease: "easeInOut",
      },
    },
  };

  return (
    <section>
      {/* Importing Space Grotesk font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

          .faq-title {
            font-family: 'Space Grotesk', sans-serif; 
          }

          .faq-subtext {
            font-family: 'Space Grotesk', sans-serif;
          }

          .faq-item {
            font-family: 'Space Grotesk', sans-serif;
          }
        `}
      </style>

      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          <div>
            {/* Applying more pronounced motion to the title with the wave animation */}
            <motion.h3
              className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4 faq-title"
              initial="hidden"
              animate="animate"
              variants={waveVariants} // Applying wave motion
            >
              Your Questions about Reducing Food Waste, Answered.
            </motion.h3>

            <motion.p
              className="body-1 max-lg:max-w-sm faq-subtext"
              initial="hidden"
              whileInView="visible"
              variants={leftToRightVariants}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }} // Adding a slight delay for sequential animation
            >
              We know you’re curious about how XERO works. Here’s everything you need to know.
            </motion.p>
          </div>

          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>

        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img src="/images/faq-logo.svg" alt="XERO FAQ logo" className="size-1/2" />
            </div>

            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <motion.div
                  className="faq-item"
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  variants={leftToRightVariants}
                  viewport={{ once: true }}
                >
                  <FaqItem item={item} index={index} />
                </motion.div>
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <motion.div
                  className="faq-item"
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  variants={leftToRightVariants}
                  viewport={{ once: true }}
                >
                  <FaqItem item={item} index={halfLength + index} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
