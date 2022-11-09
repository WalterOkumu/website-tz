import Image from "next/image";

const Header = () => {
    const logo = "/logo-pa.png";

    return (
        <header className="md:pl-8 pt-10">
            <Image src={logo} width={70} height={70} alt="Logo"></Image>
        </header>
    )
};

export default Header;