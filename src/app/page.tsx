"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/landing");

  });

  return (
    <></>
  )
}
