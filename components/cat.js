'use client';
import Image from 'next/image';

export default function cat(){
  return (
        
        <div className="container row mt-4 align-items-center">
  <div className="col-12 col-md-6 text-center">
    <Image
      src="/snacks/cat1.jpg"
      alt="about"
      width={300}
      height={250}
      className="img-fluid"
      style={{ borderRadius: "20px", border: "2px solid green" }}
    />
  </div>

  <div className="col-12 col-md-6 p-3 p-lg-5">
    <h1>Cat Love IceCream</h1>
    <h6>
      A cat happily enjoys ice cream with curiosity and excitement...
    </h6>
       <p> A cat happily enjoys ice cream with curiosity and excitement as it licks the cold, creamy dessert, getting whiskers messy while discovering sweet flavors like vanilla, chocolate, and strawberry, feeling joy in every bite, purring softly as it eats, reacting to the cold with tiny pauses but continuing again, becoming completely focused on the treat, sitting proudly while<br/> guarding its bowl, slowly finishing it with satisfaction, dreaming of more afterward, and remembering the taste with happiness, making ice cream a special moment of fun, comfort, and delight for the playful cat every single time it gets this delicious treat.</p>
         
    
  </div>
</div>
        

  )}