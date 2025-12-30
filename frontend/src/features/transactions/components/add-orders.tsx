"use client";
import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { AddOrdersProps } from "../types";

export default function AddOrders({ onClose }: AddOrdersProps) {
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
            <FieldLabel htmlFor="order-name">รายการ</FieldLabel>
            <Input
              id="order-name"
              name="orderName"
              type="text"
              placeholder="เพิ่มรายการ"
              onChange={(e) => e.target.value}
              required
            />
          </Field>
        </FieldSet>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="amount">จำนวนเงิน</FieldLabel>
            <Input
              id="amount"
              name="amount"
              type="number"
              placeholder="จำนวนเงิน"
              required
            />
          </Field>
        </FieldSet>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="details">รายละเอียด</FieldLabel>
            <Input
              id="details"
              name="details"
              type="text"
              placeholder="เพิ่มรายละเอียด"
              required
            />
          </Field>
        </FieldSet>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="date">วันที่</FieldLabel>
            <Input
              id="date"
              name="date"
              type="date"
              defaultValue={new Date().toISOString().slice(0, 10)}
              required
            />
          </Field>
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
