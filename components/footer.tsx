import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="font-integral text-xl font-bold mb-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="BajaRC.me Logo"
                width={128}
                height={128}
                className="inline-block h-12 w-auto invert"
              />
            </Link>
          </div>
          <p className="font-satoshi text-sm text-muted mb-6">
            The world's first real-time cooperative FPV RC racing platform
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link
              href="/terms"
              className="font-satoshi hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/donate"
              className="font-satoshi hover:text-primary transition-colors"
            >
              Donate
            </Link>
            <Link
              href="/contact"
              className="font-satoshi hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
