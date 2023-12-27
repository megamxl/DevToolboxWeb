"use client";

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export type ToolOption = {
  name: string;
  path: string;
};
export const toolList: ToolOption[] = [
  {
    name: "Diff Viewer",
    path: "/tools/diff-viewer",
  },
  {
    name: "JSON Validator",
    path: "/tools/json-validator",
  },
  {
    name: "String Converter",
    path: "/tools/string-converter",
  },
  {
    name: "Character/Word Counter",
    path: "/tools/character-and-word-counter",
  },
  {
    name: "Unix Time Converter",
    path: "/tools/unix-time-converter",
  },
  {
    name: "Base64 Encoder",
    path: "/tools/base64encoder",
  },
  {
    name: "Base64 Image Encoder",
    path: "/tools/base64imageencoder",
  },
  {
    name: "Url Parser",
    path: "/tools/url-parser",
  },
  {
    name: "Color Converter",
    path: "/tools/color-converter",
  },
  {
    name: "Hash Generator",
    path: "/tools/hash-generator",
  },
  {
    name: "Line Sort And Dedupe",
    path: "/tools/line-sort-and-dedupe",
  },
  {
    name: "Regex Checker",
    path: "/tools/regex-checker",
  },
  {
    name: "Markdown Editor",
    path: "/tools/markdown-editor",
  },
  {
    name: "QRCode Generator",
    path: "/tools/qrcode-generator",
  },
  {
    name: "ASCII Converter",
    path: "/tools/ascii-converter",
  },
  {
    name: "CSS Unit Converter",
    path: "/tools/css-unit-converter",
  },
  {
    name: "UUID Generator",
    path: "/tools/uuid-generator",
  },
];

export default function ToolList() {
  const pathname = usePathname();
  return (
    <div className="w-72 bg-gray-700 flex flex-col overflow-y-scroll">
      <Link
        className={`w-full border-y p-4 hover:bg-gray-600`}
        href={`https://github.com/YourAverageTechBro/DevToolboxWeb`}
        target="_blank"
      >
      </Link>
      {toolList.sort((a,b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        return 0;
      }).map((toolOption) => (
        <Link
          className={`w-full border-b p-4 hover:bg-gray-600 ${
            pathname === toolOption.path && "bg-gray-500"
          }`}
          key={toolOption.name}
          href={toolOption.path}
        >
          <p> {toolOption.name}</p>
        </Link>
      ))}
    </div>
  );
}
