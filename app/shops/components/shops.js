"use client";

import Image from "next/image";
import Link from "next/link";
const collections = [
    {
        id: 1,
        title: "Name : John Doe",
        image: "/shops/c1.jpg",
        desc: "Dark oversized streetwear inspired by midnight streets.",
    },

    {
        id: 2,
        title: "Name : John Doe",
        image: "/shops/c2.jpg",
        desc: "Vintage fashion blended with modern urban aesthetics.",

    },

    {
        id: 3,
        title: "Name : John Doe",
        image: "/shops/c3.jpg",
        desc: "Minimal luxury pieces for timeless souls.",
    },
    {
        id: 4,
        title: "Name : John Doe",
        image: "/shops/c1.jpg",
        desc: "Dark oversized streetwear inspired by midnight streets.",

    }
];

export default function Collections() {
    return (
        <section className="collection-section section-padding">

            <div className="container-custom">

                {/* HEADING */}
                <div className="mb-16 text-center">

                    <p className="hero-subtitle pt-3 " style={{ fontSize: "22px", fontWeight: "1000", color: "green" }}>
                        FEATURED COLLECTIONS
                    </p>

                    <h2 className="section-heading " style={{ fontSize: "44px", fontWeight: "1000", color: "green" }}>
                        Products For
                        Modern Souls
                    </h2>

                    <p className=" fw-bold">
                        "Fresh groceries, everyday essentials, and quality products delivered with care. From fruits and vegetables to dairy, snacks, and household needs, find everything your family requires in one place. Enjoy great value, trusted brands, and a convenient shopping experience that makes daily life easier, fresher, and more affordable."
                    </p>

                </div>

                {/* GRID */}
                <div className="collection-grid  " style={{ maxWidth: "900px", margin: "0px auto" }}>

                    {collections.map((item, index) => (
                        <div className="retro-card row align-items-center" key={item.id}>

                            {/* Image */}
                            <div
                                className={`col-12 col-md-4 p-1 p-md-3 ${index % 2 !== 0 ? "order-md-2" : "order-md-1"

                                    }`}


                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={400}
                                    className="img-fluid"
                                    style={{
                                        borderRadius: "15px",
                                        maxHeight: "250px",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>

                            {/* Content */}
                           <div
  className={`col-12 col-md-8 px-3 px-md-5 ${
    index % 2 !== 0 ? "order-md-1" : "order-md-2"
  }`}
>
                                <h3 >{item.title}</h3>
                                <p >{item.desc}</p>
                                <Link href="/products" >Explore Collection →</Link>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}