import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Box, Button, Image, Text } from "@chakra-ui/react";



const NavBarItem = ({ title, classprops }: any) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}></li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <>
    <nav className="w-full flex md:justify-center fixed justify-between p-4 blue-glassmorphism ">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
      <Box display="flex" alignItems="center" >
        <Image  alt={'Login Image'}
          objectFit={'cover'}
         
          src="./nft/logo.png"
         />
         <Text className="text-xl sm:text-3xl text-white text-white py-1 ml-5">
         Morpheus
         </Text>
      </Box>
      
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
       <Button
              textColor="white"
                colorScheme="linear(to-r, purple.500, purple.300,rgb(155, 39, 209))"
                p={6}
                className=" cursor-pointer  w-38 h-25 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
                bgGradient="linear(to-r, purple.500, purple.300, rgb(155, 39, 209) )"
              >
                Launch App
              </Button>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;