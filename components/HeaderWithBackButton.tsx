import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const HeaderWithBackButton = (): JSX.Element => {
  const router = useRouter();
  return (
    <header className="px-4 pt-8 pb-4 lg:px-37 lg:py-8">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a className="hidden lg:block">
            <h1 className="text-4xl font-semibold">Quotic</h1>
          </a>
        </Link>
        <button className="text-blackRussian focus:outline-none lg:hidden" onClick={() => router.back()}>
          {/* prettier-ignore */}
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-sm font-bold uppercase tracking-wide text-radicalRed">
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
      </div>
    </header>
  );
};
