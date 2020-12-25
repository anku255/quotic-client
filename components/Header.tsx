import React from "react";
import Link from "next/link";

export const Header = (): JSX.Element => (
  <header className="px-6 pt-12 px-6 sm:px-37 sm:py-8">
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-semibold">Quotic</h1>
      <div className="text-sm font-bold uppercase tracking-wide text-radicalRed">
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    </div>
  </header>
);
