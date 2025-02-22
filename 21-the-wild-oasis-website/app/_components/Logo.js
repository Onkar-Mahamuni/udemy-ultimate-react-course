import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* use this instead of img tag because it will automatically optimize the image
      1. It will serve the image in the modern format (webp) 
      2. It will automatically resize the image based on the screen size (will ask for size at declaration)
      3. It will lazy load the image on demand (only when required)
      4. It will add a blur effect to the image
      5. It will add a placeholder to the image
      6. It will add a loading spinner to the image
      7. It will automatically add the alt attribute to the image */}
      {/* If we are using the tag with imported image, we do not need to specify the height and width of the image */}
      <Image src={logo} height="60" width="60" alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
