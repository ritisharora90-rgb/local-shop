'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div
      className="container-fluid d-flex bg-dark text-white"
      style={{ justifyContent: "space-between" }}
    >
      <div style={{ padding: "40px 0px" }}>
        <Link href="/">
          <Image
            src="/firstlogo.png"
            alt="logo"
            height={150}
            width={150}
            style={{ borderRadius: "40px" }}
            className='logofirst'
          />
        </Link>
      </div>

      <div>
        <h1 className='localShop'>
          LOCAL SHOP
        </h1>
      </div>
    </div>
  );
}