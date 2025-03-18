import Image from "next/image";
import Link from "next/link";

const Headers = () => {
  return (
    <nav className="text-white flex md:w-full h-fit items-center p-5 bg-white/20 rounded-[18px] my-6">
      <div className="w-1/5">
        <Image
        src="/header/company-logo.svg"
        width={170}
        height={32}
        alt="Company logo"
        />
      </div>
      <div className="w-3/5 flex items-center justify-center px-20">
        <ul className="flex justify-between w-full">
          <li className="p-2"><Link href="/">Overview</Link></li>
          <li className="p-2"><Link href="/unit">Unit</Link></li>
          <li className="p-2"><Link href="/about-us">About Us</Link></li>
          <li className="p-2"><Link href="/team">Team</Link></li>
        </ul>
      </div>
      <div className="w-1/5 flex gap-2">
        <button className="px-6 py-2">Register</button>
        <button className="px-6 py-2 text-black bg-white border-[1px] rounded-xl border-[#DDDDDD] font-medium">Login</button>
      </div>
    </nav>
  )
}

export default Headers;