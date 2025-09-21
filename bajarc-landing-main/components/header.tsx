import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="font-integral text-xl font-bold">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="BajaRC.me Logo"
                width={128}
                height={128}
                className="inline-block h-12 w-auto"
              />
            </Link>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/#how-it-works"
            className="font-satoshi text-sm font-medium hover:text-primary transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/#support"
            className="font-satoshi text-sm font-medium hover:text-primary transition-colors"
          >
            Support
          </Link>
          <Link
            href="/#streams"
            className="font-satoshi text-sm font-medium hover:text-primary transition-colors"
          >
            Live Streams
          </Link>
          <Link
            href="/#faq"
            className="font-satoshi text-sm font-medium hover:text-primary transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/donate"
            className="font-satoshi text-sm font-medium hover:text-primary transition-colors"
          >
            Donate
          </Link>
          <Link
            href="/contact"
            className="font-satoshi text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        <Link href="/donate">
          <Button className="font-integral text-sm">Race Now</Button>
        </Link>
      </div>
    </header>
  );
}
