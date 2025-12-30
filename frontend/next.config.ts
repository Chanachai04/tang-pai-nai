import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "standalone",
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "**", // ใส่โดเมนที่คุณอนุญาต เช่น "storage.googleapis.com" หรือใส่ "**" เพื่ออนุญาตทั้งหมด (ไม่แนะนำสำหรับ Production จริงจัง)
  //     },
  //   ],
  // },
};

export default nextConfig;
