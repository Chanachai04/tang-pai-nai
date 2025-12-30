"use client";
import { Button } from "@/components/ui/button";
import { FieldGroup, FieldSet, Field, FieldLabel } from "@/components/ui/field";
import { FormEvent, useState } from "react";
import { RegisterProps } from "../types";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Eye, EyeClosed, LockKeyhole, Mail, UserRound } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function Register({ onClose }: RegisterProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPasswordComfirmVisible, setIsPasswordComfirmVisible] =
    useState<boolean>(false);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ดึงข้อมูลจากฟอร์ม
    const formData = new FormData(e.currentTarget);
    // แปลง FormData เป็น Object ให้อ่านง่ายๆ
    const data = Object.fromEntries(formData.entries());

    console.log("ข้อมูลที่ส่ง:", data);
    if (onClose) {
      onClose();
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="username">ชื่อผู้ใช้</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <UserRound />
              </InputGroupAddon>
              <InputGroupInput
                id="username"
                name="username"
                type="username"
                placeholder="ชื่อผู้ใช้"
              />
            </InputGroup>
          </Field>
        </FieldSet>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="email">อีเมล</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <Mail />
              </InputGroupAddon>
              <InputGroupInput
                id="email"
                name="email"
                type="email"
                placeholder="อีเมล"
              />
            </InputGroup>
          </Field>
        </FieldSet>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="password">รหัสผ่าน</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <LockKeyhole />
              </InputGroupAddon>
              <InputGroupInput
                id="password"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="รหัสผ่าน"
              />

              <InputGroupAddon align="inline-end">
                {isPasswordVisible ? (
                  <Eye
                    className="cursor-pointer"
                    onClick={() => setIsPasswordVisible(false)}
                  />
                ) : (
                  <EyeClosed
                    className="cursor-pointer"
                    onClick={() => setIsPasswordVisible(true)}
                  />
                )}
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldSet>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="confirmPassword">ยืนยันรหัสผ่าน</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <LockKeyhole />
              </InputGroupAddon>
              <InputGroupInput
                id="confirmPassword"
                name="confirmPassword"
                type={isPasswordComfirmVisible ? "text" : "password"}
                placeholder="ยืนยันรหัสผ่าน"
              />
              <InputGroupAddon align="inline-end">
                {isPasswordComfirmVisible ? (
                  <Eye
                    className="cursor-pointer"
                    onClick={() => setIsPasswordComfirmVisible(false)}
                  />
                ) : (
                  <EyeClosed
                    className="cursor-pointer"
                    onClick={() => setIsPasswordComfirmVisible(true)}
                  />
                )}
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldSet>
        <FieldSet>
          <FieldGroup>
            <Field orientation="horizontal">
              <Checkbox
                id="checkout-accept-terms"
                name="acceptTerms"
                required
              />
              <FieldLabel
                htmlFor="checkout-accept-terms"
                className="font-normal"
              >
                ยินยอมรับ{" "}
                <Link href="/terms" className="text-blue-600 underline">
                  เงื่อนไขการให้บริการ
                </Link>
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <Field orientation="horizontal">
          <Button type="submit">ยืนยัน</Button>
          <Button variant="outline" type="button" onClick={onClose}>
            ยกเลิก
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
