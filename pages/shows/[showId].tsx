import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { withApollo } from "@/lib/withApollo";
import ShowDetailPage from "@/modules/show";

const ShowPage = () => {
  return <ShowDetailPage />;
};

// Header is needed for ShowPageA variant
// const Header = (): JSX.Element => {
//   const router = useRouter();
//   return (
//     <header className="pb-4">
//       <div className="flex justify-between items-center ">
//         <button className="text-blackRussian focus:outline-none" onClick={() => router.back()}>
//           {/* prettier-ignore */}
//           <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <div className="text-sm font-bold uppercase tracking-wide text-radicalRed">
//           <Link href="/login">
//             <a>Login</a>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

ShowPage.Header = () => null;
ShowPage.title = "Show";

export default withApollo()(ShowPage);
