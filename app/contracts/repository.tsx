// app/contracts/repository.tsx

'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UploadCloud, FileText } from 'lucide-react';

export default function ContractRepository() {
  const [files, setFiles] = useState([
    { name: 'contract-1829.pdf', type: 'PDF', uploadedBy: 'Jane Doe' },
    { name: 'audit-report-Q2.docx', type: 'DOCX', uploadedBy: 'ComplianceBot' },
  ]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Contract Repository</h1>

      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="flex items-center gap-2">
            <UploadCloud className="w-5 h-5 text-gray-600" />
            <input type="file" className="text-sm" />
            <Button variant="outline" size="sm">Upload</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {files.map((file, i) => (
              <div key={i} className="flex items-center gap-3 p-3 border rounded-lg">
                <FileText className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-medium text-sm">{file.name}</div>
                  <div className="text-xs text-gray-500">Uploaded by {file.uploadedBy}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

