import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Settings } from "lucide-react";
import useTestStore from "../stores/store";
export function CustomTimeDialog() {
  const { duration, setDuration } = useTestStore();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={` hover:text-gray-200 hover:bg-inherit ${
            Number(duration) == 100 &&
            Number(duration) == 60 &&
            Number(duration) == 30 &&
            Number(duration) == 15
              ? "text-gray-400"
              : "text-yellow-500"
          }`}
        >
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#2C2E31] border-none rounded-lg shadow-lg max-w-2xl w-full  p-6">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-gray-600 text-4xl font-semibold ">
            Test duration
          </DialogTitle>
          <DialogDescription className="space-y-4">
            <div className="text-gray-400 text-lg">{duration} seconds</div>
            <Input
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="bg-[#232527] border-none text-gray-200 placeholder-gray-500 focus:ring-0 h-12"
            />
            <p className="text-gray-400 text-lg">
              You can use &quot; h &quot; for hours and &quot;m&quot; for
              minutes, for example &quot;1h30m&quot;
            </p>
            <p className="text-gray-400 text-lg">
              You can start an infinite test by inputting 0 Then to stop the
              test use the Bail Out feature
              <span className="bg-gray-600 text-gray-300 px-1 rounded">
                esc
              </span>{" "}
              or{" "}
              <span className="bg-gray-600 text-gray-300 px-1 rounded">
                ctrl/cmd
              </span>{" "}
              +{" "}
              <span className="bg-gray-600 text-gray-300 px-1 rounded">
                shift
              </span>{" "}
              +{" "}
              <span className="bg-gray-600 text-gray-300 px-1 rounded">p</span>{" "}
            </p>
            <DialogClose asChild>
              <Button
                variant="ghost"
                className="w-full text-gray-300 hover:bg-[#3A3C3F] hover:text-gray-100 transition-colors"
              >
                ok
              </Button>
            </DialogClose>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
