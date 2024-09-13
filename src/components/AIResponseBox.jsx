import React, { useState } from "react";
import { Copy, Download, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as XLSX from "xlsx";

const AIResponseBox = ({ content }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-response.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="mb-2 flex justify-end space-x-2">
        <Button onClick={handleCopy} variant="outline" size="sm">
          <Copy className="mr-2 h-4 w-4" />
          {isCopied ? "Copied!" : "Copy"}
        </Button>
        <Button onClick={handleDownload} variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>
      <div className="whitespace-pre-wrap">{content}</div>
    </div>
  );
};

export default AIResponseBox;
