import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const imageDefault = "/public/images/default.jpg";

export default function PostCard({ post }) {
  return (
    <Link href={`/detail/${post._id}`}>
      <div>
        <div className="relative w-full h-[270px] overflow-hidden">
          <Image
            className="hover:scale-110 duration-300"
            objectFit="cover"
            fill
            src={post.mainImage?.asset?.url || imageDefault}
          />
        </div>
        <h2 className="font-semibold text-xl mt-4">{post.title}</h2>
        <p className="line-clamp-3">{post.description}</p>
        <div className="flex gap-2">
          <ClockIcon className="w-[15px] h-[15px] text-gray-500" />
          <span className="text-xs text-gray-500">
            {" "}
            {dayjs(post.publishedAt).format("HH:mm:ss DD/MM/YYYY")}
          </span>
        </div>
      </div>
    </Link>
  );
}
