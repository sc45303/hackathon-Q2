"use client";

// import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { FaRegUserCircle } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { NavigationMenuDemo } from "../navLinks";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "@/components/ui/searchbar";
import TopBanner from "@/app/components/TopBanner";
import Link from "next/link";
import { useCart } from "@/app/cart/cartContext";

const Navbar: React.FC = () => {
  const { cartCount } = useCart();
  return (
    // <>
    //   <TopBanner />
    //   <div className="navbar bg-base-100 shadow-md font-satoshi max-w-[1440px] min:w-[410px] mx-auto sticky top-0 z-50">
    //     {/* Left Section: Hamburger Menu (Mobile) and Logo */}
    //     <div className="flex items-center space-x-2 lg:space-x-4">
    //       {/* Mobile Hamburger Menu */}
    //       <div className="lg:hidden">
    //         <Sheet>
    //           <SheetTrigger asChild>
    //             <button className="btn btn-ghost btn-circle">
    //               <RxHamburgerMenu className="h-6 w-6" />
    //             </button>
    //           </SheetTrigger>
    //           <SheetContent>
    //             <nav className="flex flex-col p-2 text-lg">
    //               <ul className="space-y-2">
    //                 <li
    //                   tabIndex={0}
    //                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 font-satoshi"
    //                 >
    //                   <details>
    //                     <summary>Shop</summary>
    //                     <ul className="p-2 space-y-1">
    //                       <li>
    //                         <Link href="/category">Shirts</Link>
    //                       </li>
    //                       <li>
    //                         <Link href="/category">Pants</Link>
    //                       </li>
    //                       <li>
    //                         <Link href="/category">T-shirts</Link>
    //                       </li>
    //                       <li>
    //                         <Link href="/category">Jackets</Link>
    //                       </li>
    //                     </ul>
    //                   </details>
    //                 </li>
    //                 <li>
    //                   <Link href="/NewArrivals" className="hover:text-blue-600">
    //                     New Arrivals
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link href="/onsale" className="hover:text-blue-600">
    //                     On Sale
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link href="/brands" className="hover:text-blue-600">
    //                     Brands
    //                   </Link>
    //                 </li>
    //               </ul>
    //             </nav>
    //           </SheetContent>
    //         </Sheet>
    //       </div>

    //       {/* Logo */}
    //       <Link href="/" className="btn btn-ghost text-3xl font-Bold">
    //         Shop.Co
    //       </Link>
    //     </div>

    //     {/* Center Section: Navigation Links (Desktop Only) */}
    //     <div className="hidden lg:flex flex-1 justify-center">
    //       <NavigationMenuDemo />
    //     </div>

    //     {/* Right Section: Search, Cart, and Profile */}
    //     <div className="flex items-center space-x-2">
    //       {/* Search Bar */}
    //       <SearchBar />

    //       {/* Cart */}
    //       <div className="dropdown dropdown-end">
    //         <Link href="/cart" className="btn btn-ghost btn-circle">
    //           <div className="indicator">
    //             <LuShoppingCart className="h-6 w-6" />
    //             {/* Display the cart count */}
    //             <span className="badge badge-sm indicator-item">
    //               {cartCount > 0 ? cartCount : ""}
    //             </span>
    //           </div>
    //         </Link>
    //       </div>

    //       {/* Profile */}
    //       <div className="dropdown dropdown-end">
    //         <button tabIndex={0} className="btn btn-ghost btn-circle">
    //           <FaRegUserCircle className="h-6 w-6" />
    //         </button>
    //         <ul
    //           tabIndex={0}
    //           className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    //         >
    //           {/* <SignedIn>
    //           <li>
    //               <UserButton />
    //         </li>
    //        </SignedIn>
    //            <SignedOut>
    //          <li>
    //            <SignInButton mode="modal" />
    //          </li>
    //          </SignedOut>  */}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <TopBanner />
      <div className="navbar bg-base-100 shadow-md font-satoshi w-full max-w-[1440px] mx-auto sticky top-0 z-50 px-4 lg:px-8 min-w-[410px]">
        <div className="flex items-center justify-between w-full">
          {/* Left Section: Hamburger Menu (Mobile) and Logo */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="btn btn-ghost btn-circle">
                    <RxHamburgerMenu className="h-6 w-6" />
                  </button>
                </SheetTrigger>
                <SheetContent>
                  <nav className="flex flex-col p-2 text-lg">
                    <ul className="space-y-2">
                      <li
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 font-satoshi"
                      >
                        <details>
                          <summary>Shop</summary>
                          <ul className="p-2 space-y-1">
                            <li>
                              <Link href="/category">Shirts</Link>
                            </li>
                            <li>
                              <Link href="/category">Pants</Link>
                            </li>
                            <li>
                              <Link href="/category">T-shirts</Link>
                            </li>
                            <li>
                              <Link href="/category">Jackets</Link>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <Link
                          href="/NewArrivals"
                          className="hover:text-blue-600"
                        >
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link href="/onsale" className="hover:text-blue-600">
                          On Sale
                        </Link>
                      </li>
                      <li>
                        <Link href="/brands" className="hover:text-blue-600">
                          Brands
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="btn btn-ghost text-2xl md:text-3xl font-regular"
            >
              Shop.Co
            </Link>
          </div>

          {/* Center Section: Navigation Links (Desktop Only) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavigationMenuDemo />
          </div>

          {/* Right Section: Search, Cart, and Profile */}
          <div className="flex items-center space-x-2">
            {/* Search Bar */}
            <SearchBar />

            {/* Cart */}
            <div className="dropdown dropdown-end">
              <Link href="/cart" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <LuShoppingCart className="h-6 w-6" />
                  <span className="badge badge-sm indicator-item">
                    {cartCount > 0 ? cartCount : ""}
                  </span>
                </div>
              </Link>
            </div>

            {/* Profile */}
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost btn-circle">
                <FaRegUserCircle className="h-6 w-6" />
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {/* Profile dropdown content (e.g., sign in or user button) */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

// "use client";

// import { FaRegUserCircle } from "react-icons/fa";
// import { LuShoppingCart } from "react-icons/lu";
// import { NavigationMenuDemo } from "../navLinks";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { RxHamburgerMenu } from "react-icons/rx";
// import SearchBar from "@/components/ui/searchbar";
// import TopBanner from "@/app/components/TopBanner";
// import Link from "next/link";
// import { useCart } from "@/app/cart/cartContext";

// const Navbar: React.FC = () => {
//   const { cartCount } = useCart();
//   return (
//     <>
//       <TopBanner />
//       <div className="navbar bg-base-100 shadow-md font-satoshi w-full md:w-[400px] max-w-[1440px] mx-auto sticky top-0 z-50">
//         {/* Left Section: Hamburger Menu (Mobile) and Logo */}
//         <div className="flex items-center justify-between w-full px-4 lg:px-8">
//           {/* Mobile Hamburger Menu */}
//           <div className="lg:hidden">
//             <Sheet>
//               <SheetTrigger asChild>
//                 <button className="btn btn-ghost btn-circle">
//                   <RxHamburgerMenu className="h-6 w-6" />
//                 </button>
//               </SheetTrigger>
//               <SheetContent>
//                 <nav className="flex flex-col p-2 text-lg">
//                   <ul className="space-y-2">
//                     <li
//                       tabIndex={0}
//                       className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 font-satoshi"
//                     >
//                       <details>
//                         <summary>Shop</summary>
//                         <ul className="p-2 space-y-1">
//                           <li>
//                             <Link href="/category">Shirts</Link>
//                           </li>
//                           <li>
//                             <Link href="/category">Pants</Link>
//                           </li>
//                           <li>
//                             <Link href="/category">T-shirts</Link>
//                           </li>
//                           <li>
//                             <Link href="/category">Jackets</Link>
//                           </li>
//                         </ul>
//                       </details>
//                     </li>
//                     <li>
//                       <Link href="/NewArrivals" className="hover:text-blue-600">
//                         New Arrivals
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/onsale" className="hover:text-blue-600">
//                         On Sale
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/brands" className="hover:text-blue-600">
//                         Brands
//                       </Link>
//                     </li>
//                   </ul>
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           </div>

//           {/* Logo */}
//           <Link href="/" className="btn btn-ghost text-3xl font-bold">
//             Shop.Co
//           </Link>
//         </div>

//         {/* Center Section: Navigation Links (Desktop Only) */}
//         <div className="hidden lg:flex flex-1 justify-center">
//           <NavigationMenuDemo />
//         </div>

//         {/* Right Section: Search, Cart, and Profile */}
//         <div className="flex items-center space-x-4">
//           {/* Search Bar */}
//           <SearchBar />

//           {/* Cart */}
//           <div className="dropdown dropdown-end">
//             <Link href="/cart" className="btn btn-ghost btn-circle">
//               <div className="indicator">
//                 <LuShoppingCart className="h-6 w-6" />
//                 {/* Display the cart count */}
//                 <span className="badge badge-sm indicator-item">
//                   {cartCount > 0 ? cartCount : ""}
//                 </span>
//               </div>
//             </Link>
//           </div>

//           {/* Profile */}
//           <div className="dropdown dropdown-end">
//             <button tabIndex={0} className="btn btn-ghost btn-circle">
//               <FaRegUserCircle className="h-6 w-6" />
//             </button>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               {/* <SignedIn>
//               <li>
//                   <UserButton />
//             </li>
//            </SignedIn>
//                <SignedOut>
//              <li>
//                <SignInButton mode="modal" />
//              </li>
//              </SignedOut>  */}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
