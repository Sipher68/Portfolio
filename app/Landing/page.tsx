import useMediaQuery from '../../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'next/image';
import ProfilePicture from '../../assets/Profile.png';
import Link from 'next/link';
import SocialMediaIcons from '../../components/SocialMediaIcons';

const Landing = ({ setSelectedPage }: { setSelectedPage: any }) => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)');

  return (
    <section
      id="home"
      className="md:flex md:justify-center md:items-center gap-16 md:h-full py-10"
    >
      {/* Image Section */}
      {/* <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <Image
              src={ProfilePicture}
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]"
              alt="Profile Picture"
              height={300}
              width={300}
            />
          </div>
        ) : (
          <Image
            src={ProfilePicture}
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            alt="Profile Picture"
            height={300}
            width={300}
          />
        )}
      </div> */}

      {/* Main Section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start lg:ml-28">
            Hans {''}
            <span
              className="xs:relative xs:text-white xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Indino
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start lg:ml-28">
            Computer Engineer, Software Developer
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Link
            href="/contact"
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
            hover:bg-blue hover:text-white transition duration-500 lg:ml-28"
            onClick={() => setSelectedPage('contact')}
          >
            Contact Me
          </Link>
          <Link
            href="/contact"
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage('contact')}
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </Link>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
