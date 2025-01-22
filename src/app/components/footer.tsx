import Link from "next/link"
import Image from "next/image"
import { Twitter, Facebook, Instagram, Github } from 'lucide-react'

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Works", href: "/works" },
  { name: "Career", href: "/career" }
]

const helpLinks = [
  { name: "Customer Support", href: "/support" },
  { name: "Delivery Details", href: "/delivery" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" }
]

const faqLinks = [
  { name: "Account", href: "/account" },
  { name: "Manage Deliveries", href: "/deliveries" },
  { name: "Orders", href: "/orders" },
  { name: "Payments", href: "/payments" }
]

const resourceLinks = [
  { name: "Free eBooks", href: "/ebooks" },
  { name: "Development Tutorial", href: "/tutorial" },
  { name: "How to - Blog", href: "/blog" },
  { name: "Youtube Playlist", href: "/youtube" }
]

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 font-satoshi max-w-[1440px] mx-auto ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1 ">
            <h2 className="text-2xl font-bold mb-6 font-Bold">SHOP.CO</h2>
            <p className="text-gray-600 mb-6  sm:row-span-2">
              We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
            </p>
            
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-6 font-Bold">COMPANY</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-black">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-bold mb-6 font-Bold">HELP</h3>
            <ul className="space-y-4">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-black">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Links */}
          <div>
            <h3 className="font-bold mb-6 font-Bold">FAQ</h3>
            <ul className="space-y-4">
              {faqLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-black">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold mb-6 font-Bold">RESOURCES</h3>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-black">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-black  transform hover:scale-150 duration-300 ease-in-out">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black  transform hover:scale-150 duration-300 ease-in-out">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black transform hover:scale-150 duration-300 ease-in-out">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black  transform hover:scale-150 duration-300 ease-in-out">
                <Github className="w-5 h-5" />
              </Link>
            </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/cards/visa.png"
                alt="Visa"
                width={40}
                height={25}
                className="h-[30px] w-[46px] transform hover:scale-150 duration-300 ease-in-out "
              />
              <Image
                src="/cards/visa red.png"
                alt="Mastercard"
                width={40}
                height={25}
                className="h-[30px] w-[46px]  transform hover:scale-150 duration-300 ease-in-out"
              />
              <Image
                src="/cards/paypal.png"
                alt="PayPal"
                width={46}
                height={30}
                className="h-[30px] w-[46px]  transform hover:scale-150 duration-300 ease-in-out"
              />
              <Image
                src="/cards/pay.png"
                alt="Apple Pay"
                width={40}
                height={25}
                className="h-[30px] w-[46px]  transform hover:scale-150 duration-300 ease-in-out"
              />
              <Image
                src="/cards/g pay.png"
                alt="Google Pay"
                width={40}
                height={25}
                className="h-[30px] w-[46px]  transform hover:scale-150 duration-300 ease-in-out"
              />

            </div>
            
          </div>
          
        </div>
      </div>
    </footer>
  )
}

