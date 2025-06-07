// social-icons
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";

export default function Socials() {
  return (
    <div className="flex justify-end items-center gap-4 pt-4 pb-10">
      <div className="flex items-center gap-1">
        <BiLogoFacebook className="text-black text-3xl" />
        <span className="text-black">3.7 M</span>
      </div>

      <div className="flex items-center gap-1">
        <BiLogoInstagramAlt className="text-black text-3xl" />
        <span className="text-black">2.4 M</span>
      </div>

      <div className="flex items-center gap-1">
        <BiLogoTwitter className="text-black text-3xl" />
        <span className="text-black">3.7 M</span>
      </div>

      <div className="flex items-center gap-1">
        <BiLogoYoutube className="text-black text-3xl" />
        <span className="text-black">2.4 M</span>
      </div>
    </div>
  );
}
