"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Tab from "@/features/auth/components/tab";
import DashboardHeader from "@/features/dashboard/components/header";
import DashboardTab from "@/features/dashboard/components/tab";
import { Globe } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="container mx-auto px-5 sm:px-0">
      <div className="flex items-center justify-end mt-5">
        <div className="flex justify-center w-full ">
          <h1 className="text-center text-2xl ">Tang Pai Nai</h1>
        </div>
        <div className="flex items-center">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="mr-2">
                เข้าสู่ระบบ
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-106.25">
              <DialogTitle className="text-center">
                เข้าสู่ระบบ / ลงทะเบียน
              </DialogTitle>
              <Tab onClose={() => setIsOpen(false)} />
              {/* แสดงหน้าเข้าสู่ระบบ */}
            </DialogContent>
          </Dialog>
          {/* แสดงภาษา */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="cursor-pointer" />

                {/* <Globe className="h-[1.2rem] w-[1.2rem]" /> */}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>ภาษาไทย</DropdownMenuItem>
              <DropdownMenuItem>ภาษาอังกฤษ</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* ส่วนบน: แสดงยอดเงินรวม รายรับและรายจ่าย */}
      <div className="space-y-6 mt-6">
        <DashboardHeader income={100} expenses={20} />
        <DashboardTab />
      </div>
    </main>
  );
}
