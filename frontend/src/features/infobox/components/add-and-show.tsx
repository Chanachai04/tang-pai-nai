"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { InfoBoxProps } from "../types";

export default function AddAndShow({ title, children }: InfoBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center gap-2 cursor-pointer select-none flex-wrap"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 font-medium sm:text-sm">
          {title}
        </div>

        {/* แก้ไข 2: ปรับแต่งปุ่มให้ดูเหมือนเป็นส่วนขยายของข้อความ */}
        <button className="sm:text-sm underline opacity-60 hover:opacity-100 flex items-center whitespace-nowrap">
          {isOpen ? "ซ่อน" : "เพิ่มเติม"}{" "}
          {/* ใช้คำสั้นลงนิดหนึ่งเพื่อให้ดู compact */}
          {isOpen ? (
            <ChevronUp className="w-3 h-3 ml-0.5" />
          ) : (
            <ChevronDown className="w-3 h-3 ml-0.5" />
          )}
        </button>
      </div>

      {/* ส่วนที่จะโชว์เมื่อกดเปิด */}
      {isOpen && (
        <div className="mt-2 text-sm opacity-90 animate-in fade-in slide-in-from-top-1 duration-200 ">
          {/* เพิ่ม pl-6 (padding-left) เพื่อให้เนื้อหาตรงกับแนวข้อความ ไม่บังไอคอน */}
          {children}
        </div>
      )}
    </div>
  );
}
