"use client";
import React, { useState } from "react";
import { Copy, Download, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as XLSX from "xlsx";
import AIResponseBox from "./AIResponseBox";
import Table from "./Table";

const AIResponseWithExcelUpload = () => {
  const [tableData, setTableData] = useState(null);
  const [content, setContent] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      setTableData(jsonData);

      setContent(
        `Uploaded Excel data:\n\n${JSON.stringify(jsonData, null, 2)}`
      );
      console.log("Parsed Excel Data:", jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-4">
        <label
          htmlFor="excel-upload"
          className="block text-sm font-medium text-white"
        >
          Upload Excel File
        </label>
        <div className="mt-1 flex items-center">
          <input
            id="excel-upload"
            name="excel-upload"
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            className="sr-only"
          />
          <label
            htmlFor="excel-upload"
            className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Upload className="mr-2 h-4 w-4" />
            Choose file
          </label>
        </div>
      </div>

      {content && <AIResponseBox content={content} />}

      {tableData && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Rendered Table:</h3>
          <Table data={tableData} />
        </div>
      )}
    </div>
  );
};

export default AIResponseWithExcelUpload;
