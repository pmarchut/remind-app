"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import CreateCollectionSheet from "./CreateCollectionSheet";

export default function CreateCollectionBtn() {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (open: boolean) => setOpen(open);

  return (
    <div className="w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px]">
      <div className="rounded-md w-full bg-white dark:bg-neutral-950">
        <Button
          variant="ghost"
          className="w-full dark:text-white bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900"
          onClick={() => setOpen(true)}
        >
          <span className="bg-gradient-to-r from-red-500 to-orange-500 hover:to-orange-800 bg-clip-text text-transparent">
            Create Collection
          </span>
        </Button>
        <CreateCollectionSheet open={open} onOpenChange={handleOpenChange} />
      </div>
    </div>
  );
}