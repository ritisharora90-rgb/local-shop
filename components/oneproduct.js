'use client';


import Image from 'next/image';

export default function oneabout(){
  return (
        
        <div className="container-fluid row align-items-center mt-0 p-5">
            <div className="container col-12 col-md-6 text-center">
                <Image
                src="/maggie2.webp"
                alt="about"
                height={350}
                width={400}
                className="maggie"
               
                
                />
            </div>
            
        <div  className="col-12 col-md-6 p-3 p-lg-5">
                <h1>Spicy maggie</h1>
                <p>Maggi is a quick and tasty instant noodle that can be prepared in just 2 minutes, making it a perfect snack or meal for busy days, late-night cravings, or anytime hunger, offering delicious flavor, convenience, and satisfaction in every bite for people of all ages.</p>
                <p>Maggi is a delicious and convenient instant noodle choice that delivers rich taste, quick preparation, and satisfying comfort food experience, making it a favorite snack for students, families, and anyone looking for a fast and flavorful meal anytime, anywhere</p>
        </div>
        </div>
        

  )}