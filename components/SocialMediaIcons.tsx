import Link from 'next/link';
import Image from 'next/image';
import LinkedInIcon from '../assets/linkedin.svg';
import GithubIcon from '../assets/github.svg';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7 lg:ml-28">
      <Link
        href="https://linkedin.com/in/hans-indino"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <Image
          src={LinkedInIcon}
          alt="LinkedIn Link"
          height={45}
          width={45}
        ></Image>
      </Link>
      <Link
        href="https://github.com/Sipher68"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <Image
          src={GithubIcon}
          alt="Github Link"
          height={45}
          width={45}
        ></Image>
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
