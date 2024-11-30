"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: string;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deploy_link,
  platform,
}: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            width={1000}
            height={1000}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {source_code_link && (
              <Link
                href={source_code_link}
                target="_blank"
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src="/tech/github.webp"
                  width={24}
                  height={24}
                  alt="source-code"
                  className="object-contain"
                />
              </Link>
            )}
            <Link
              href={deploy_link}
              target="_blank"
              className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
            ></Link>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="sectionHeadText">Thành phố hiện đại</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Thành phố thu nhỏ mang phong cách hiện đại và sáng tạo, nổi bật với
          một robot màu trắng đáng yêu ở trung tâm, tượng trưng cho công nghệ
          thông minh. Phía sau là một tòa nhà màu vàng với mái hình chú vịt
          khổng lồ, mang lại nét vui nhộn và độc đáo cho không gian. Khu vực
          xung quanh được bao phủ bởi cây xanh, đường lát đá trắng và các công
          trình như khu vui chơi giải trí với cánh tay robot hoặc trò chơi đu
          quay, tạo cảm giác hiện đại và sống động. Những nhân vật nhỏ màu xanh
          dương được đặt rải rác, thể hiện sự nhộn nhịp của một thành phố tương
          lai. Bên cạnh đó, các kiến trúc như cổng vòm trắng và các tiểu cảnh
          nhỏ góp phần hoàn thiện bức tranh, khắc họa sự hòa quyện giữa công
          nghệ, thiên nhiên và sự sáng tạo.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
