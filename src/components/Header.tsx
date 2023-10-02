"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const { push } = useRouter();
  return (
    <nav className="flex gap-2">
      <h3
        onClick={() => push(`/`)}
        className="text-black cursor-pointer dark:text-white text-xl font-bold hover:animate-none"
      >
        @irereemmy
      </h3>
      <div className="flex flex-1  gap-4  mb-8 justify-end">
        <Link href={`/workshop`} className="hover:animate-pulse ease-in">
          workshop
        </Link>
        <Link href={`https://irere-blog.vercel.app`}>blog</Link>
      </div>
    </nav>
  );
}

export default Header;
