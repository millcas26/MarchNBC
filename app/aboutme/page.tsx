"use client";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import link from "next/link";
import { useState } from "react";

export default function BlogPage() {
  let facts: string[] = [" A tattoo needle can move between 50 and 30,000 times per minute." , "Bananas are berries, but strawberries are not." , " polar bears fur is not white", "Cats have unique noseprints the same way we have unique fingerprints.", "Male seahorses give birth.", "Venus is the only planet to spin clockwise.", " cats have 32 muscles in their ears", "The Queen of England was a trained mechanic", "Sharks dont have bones", "Octopuses have 3 hearts"]
  const [fact, setFact] = useState("");
  return (
    <div>
      <h1 className={title()}>About Me</h1>
      <br />
      <Button onPress={() => {setFact(facts[Math.floor(Math.random() * facts.length)])}} className="bg-red-500 text-white">
        fun facts
        </Button>
      <p>{fact}</p>



      <h1><strong>Images</strong></h1>
      <img src="https://images.sidearmdev.com/resize?url=https%3a%2f%2fdbukjj6eu5tsf.cloudfront.net%2fncaa.org%2fimages%2f2023%2f3%2f30%2fMBB-WBB_BallHoop.JPG&width=942&type=webp" alt="" width="800"/>
      <h1>my hobbie is basketball</h1>
      <br />
      <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="800"/>
      <h1>these dogs are cute</h1>
      <br />
      <img src="https://www.ambong-ambong.com/wp-content/uploads/2023/03/istockphoto-1172427455-612x612-1.jpeg" alt="" width="800"/>
      <h1>watching sunsets are fun</h1>
      <br />
      <img src="https://i.shgcdn.com/3cfb514f-e69c-4450-8bcc-86f8474e5fb6/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" width="800"/>
      <h1>this is my favorite show</h1>
      <br />
      <Button as={link} href="https://issaquah.instructure.com/courses/36871">Canvas</Button>
      <br />
      <Button as={link} href="https://instagram.com">Instagram</Button>
     </div>
  );
}
