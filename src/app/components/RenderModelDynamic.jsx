"use client";
import dynamic from "next/dynamic";

export default dynamic(
  () => import("./RenderModel").then((mod) => mod.default),
  { ssr: false }
);
