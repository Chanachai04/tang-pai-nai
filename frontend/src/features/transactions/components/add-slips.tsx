/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { useState } from "react";
import { AddSlipsProps } from "../types";

export default function AddSlips({ onClose }: AddSlipsProps) {
  const [files, setFiles] = useState<File[] | undefined>();
  const handleDrop = (files: File[]) => {
    setFiles(files);
  };

  const handleConfirm = () => {
    if (!files || files.length === 0) {
      alert("กรุณาอัปโหลดสลิปก่อนยืนยัน");
      return;
    }
    // สั่งปิด Dialog เมื่อกดปุ่มยืนยัน
    if (onClose) {
      onClose();
    }
  };
  return (
    <FieldGroup>
      <Dropzone onDrop={handleDrop} onError={console.error} src={files}>
        <DropzoneEmptyState />
        <DropzoneContent>
          {files && files.length > 0 && (
            <div className="flex flex-col items-center justify-center py-4">
              <img
                src={URL.createObjectURL(files[0])}
                alt="Slip preview"
                className="max-h-75 w-auto object-contain rounded-md shadow-sm"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                คลิกที่รูปเพื่อเปลี่ยนสลิปใหม่
              </p>
            </div>
          )}
        </DropzoneContent>
      </Dropzone>
      <Field orientation="horizontal">
        <Button type="submit" onClick={handleConfirm}>
          ยืนยัน
        </Button>
        <Button variant="outline" type="button" onClick={onClose}>
          ยกเลิก
        </Button>
      </Field>
    </FieldGroup>
  );
}
