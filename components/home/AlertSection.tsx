"use client";

import { cn } from "@/lib/utils";
import { FiX } from "react-icons/fi";
import Link from "next/link";
import React, { useState } from "react";

function AlertSection() {
  const [showAlert, setShowAlert] = useState(true);
  return showAlert ? (
    <div
      className={cn(
        "bg-primary mx-2 lg:mx-8 flex justify-between p-3 rounded-xl",
        showAlert ? "mt-4" : ""
      )}
    >
      <div />
      <div className="inline-flex gap-3 text-white font-semibold text-xs md:text-sm">
        <div>
          Thank you for signing up. This version is still in development, and new features will be available to you soon.
        </div>
      </div>
      <div>
        <FiX
          className="hover:cursor-pointer"
          color="#fff"
          onClick={() => setShowAlert(false)}
        />
      </div>
    </div>
  ) : (
    <div />
  );
}

export default AlertSection;
