import {HomeIcon, BadgeCheckIcon,UserIcon,SearchIcon,CollectionIcon,LightningBoltIcon} from "@heroicons/react/outline"
import Image from "next/image"
import HeaderItem from "./HeaderItem"

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl mt-5">
        <HeaderItem title="home" Icon={HomeIcon} />
        <HeaderItem title="trending" Icon={LightningBoltIcon} />
        <HeaderItem title="verfied" Icon={BadgeCheckIcon} />
        <HeaderItem title="collections" Icon={CollectionIcon} />
        <HeaderItem title="search" Icon={SearchIcon} />
        <HeaderItem title="account" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="logo"
      />
    </header>
  );
}
export default Header