import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import personifaiImg from "@/public/personifai.png";
import adventureConnectImg from "@/public/adventure.png";
import fridgeWizardImg from "@/public/fridge-wizard.png";
import netflixCloneImg from "@/public/netflix-clone.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "Graduated bootcamp",
  //   location: "Miami, FL",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  {
    title: "Full-Stack Developer",
    location: "San Diego, CA",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, Node.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PersonifAI",
    description:
      "I worked as a full-stack developer on this startup project. Users can create and customize their own AI companion. There is a free tier and a paid tier",
    tags: ["React", "Next.js", "Tailwind", "Prisma", "MongoDB", "Stripe"],
    imageUrl: personifaiImg,
  },
  {
    title: "Adventure Connect",
    description:
      "A social app to find other adventure seekers in your area and connect with them. I was the front-end developer.",
    tags: ["React", "Tailwind", "Redux Toolkit", "MongoDB", "Webpack"],
    imageUrl: adventureConnectImg,
  },
  {
    title: "Fridge Wizard",
    description:
      "A public web app for fridge inventory management. Allows users to manage their fridge inventory with alerts for items that will expire soon, or have already expired.",
    tags: ["React", "MongoDB", "Tailwind", "Webpack"],
    imageUrl: fridgeWizardImg,
  },
  {
    title: "Netflix Clone",
    description:
      "I worked as a full-stack developer to create a netflix clone. It has full user authentication with OAuth.",
    tags: ["React", "Next.js", "Tailwind", "MongoDB", "Prisma"],
    imageUrl: netflixCloneImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;