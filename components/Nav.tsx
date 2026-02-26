"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/utils/sessions";

export default function Nav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("v"));
  }, [searchParams]);

  const router = useRouter();

  const Logout = () => {
    logout(); 
    return router.push("/login"); 
  };

  return (
    <div className=" h-24 items-center w-full flex bg-transparent">
    <nav className="w-full">
      <Link href="/">A l'affiche</Link>
      <Link href="/projects">Mes Projet</Link>
      <Link href="/about">A Propos</Link>
      <Link href="/contact">Contact</Link>
    </nav>
    </div>
    
  );
}