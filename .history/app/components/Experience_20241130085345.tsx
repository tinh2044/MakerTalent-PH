"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { experiences } from "@/app/constants";
import { textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof experiences)[0];
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      // date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            width={48}
            height={48}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <div className="relative w-full h-[230px]">
        <Image
          src={experience.image}
          width={1000}
          height={1000}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="styles.sectionSubText text-center"></p>
        <h2 className="sectionHeadText text-center">Nhà thông minh</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
