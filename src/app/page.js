// import AIResponseWithExcelUpload from "/components/AIResponseWithExcelUpload";

import AIResponseWithExcelUpload from "@/components/AIResponseWIthExcelUpload";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Convert Excel to Table</h1>
      <AIResponseWithExcelUpload />
    </div>
  );
}
