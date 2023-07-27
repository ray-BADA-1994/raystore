import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialPinterest,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

const SocialMediaLinks = () => {
  return (
    <div id="footer-social-media-links" className="text-slate-600 space-y-7">
      <p className="text-xs uppercase font-mono tracking-[0.3em] font-semibold">
        Follow{" "}
        <span className="capitalize font-sans tracking-normal">
          @RayStoreCollection
        </span>
      </p>
      <div id="links" className="flex items-center gap-6 text-slate-500">
        <TiSocialFacebook className="text-xs " />
        <TiSocialTwitter className="text-xs " />
        <TiSocialInstagram className="text-xs " />
        <TiSocialPinterest className="text-xs " />
        <TiSocialYoutube className="text-xs " />
      </div>
    </div>
  );
};

export default SocialMediaLinks;
