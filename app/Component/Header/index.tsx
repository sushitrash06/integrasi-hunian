import Image from "next/image";
import { IoCall, IoLocation } from "react-icons/io5";
import Logo from '../../Assets/logo.png'

const Header: React.FC = () => {
  return (
    <header className="bg-maroon-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center rounded-r-lg px-4 py-2">
          <Image
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
        </div>
        <div className="flex space-x-12 mx-5">
          <div className="flex items-center space-x-3">
            <IoCall size={24} className="text-white" />
            <div>
              <p className="text-sm font-semibold">150130</p>
              <p className="text-sm">ihsanudinramdani@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <IoLocation size={24} className="text-white" />
            <div>
              <p className="text-sm font-semibold">Area Layanan</p>
              <p className="text-sm">JABODETABEK</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header;
