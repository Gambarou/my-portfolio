"use client";

import React from 'react';
import { motion } from 'framer-motion';

import SectionHeading from '@/components/section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After spending more than 16 years in the legal industry, I decided to follow my heart{" "} 
        and dive into programming. I joined a coding bootcamp to learn{" "}
        <span className="font-medium">full-stack web development</span>, which I find incredibly satisfying,{" "} 
        especially the joy of solving tricky problems. My main tools are{" "} 
        <span className="font-medium">React, TypeScript, Next.js, Node.js, and MongoDB</span>, and I also enjoy working{" "} 
        with Prisma. Currently, I've also recently started exploring Svelte and SvelteKit to expand my skills.{" "} 
        I'm currently looking for a <span className="font-medium">full-time software developer position</span>.
      </p>
      <p>
        Outside of coding, I unwind by playing basketball, watching movies, and spending quality time with my family. 
        I have a passion for <span className="font-medium">learning new things</span> and currently, 
        I'm trying my hand at <span className="font-medium">cooking</span>.
      </p>
    </motion.section>
  )
}
