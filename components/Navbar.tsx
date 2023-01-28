import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import Image from 'next/image';
import menuIcon from '../assets/menu-icon3.svg';
import closeIcon from '../assets/close-icon.svg';

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
}: {
  page: string;
  selectedPage: string;
  setSelectedPage: any;
}) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''}
        hover: text-yellow transition duration-500
        `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: {
  isTopOfPage: any;
  selectedPage: string;
  setSelectedPage: any;
}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-dark-blue';

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">Hans</h4>

        {/* Desktop Nav */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-white p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Image alt="menu-icon2" src={menuIcon} width={25} height={25} />
          </button>
        )}

        {/* Mobile Menu */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* Close Icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Image
                  alt="close-icon"
                  src={closeIcon}
                  width={25}
                  height={25}
                ></Image>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
