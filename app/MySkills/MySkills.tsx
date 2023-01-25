import LineGradient from '../../components/LineGradient';
import useMediaQuery from '../../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProfilePicture from '../assets/Profile.png';

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* Header and Image Section */}
      <div className="md:flex md:justify-center md:gap-16 mt-32 ">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red"> SKILLS</span>
          </p>
          <LineGradient width="w-1/3 " />
          <p className="mt-10 mb-7 ">sample text</p>
        </motion.div>

        {/* <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                      before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <Image
                src={ProfilePicture}
                className="z-10"
                alt="Skills"
                height={300}
                width={300}
              />
            </div>
          ) : (
            <Image
              src={ProfilePicture}
              className="z-10"
              alt="Skills"
              height={300}
              width={300}
            />
          )}
        </div> */}
      </div>

      {/* Skills */}
      <div className="md:flex md:justify-center mt-16 gap-32">
        {/* Experience */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            autem quia dolor. Tempore a deleniti sapiente accusamus consectetur
            eaque porro ea totam culpa officia. Officia ipsum reiciendis
            veritatis magni labore!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
