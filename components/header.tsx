import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/dropbox.png"

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-3">
        <div className="bg-blue-700">
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="invert"
          />
        </div>
        <h1 className="font-bold text-xl">Finder</h1>
      </Link>

      <div className="px-5 flex space-x-2 items-center">
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  )
}