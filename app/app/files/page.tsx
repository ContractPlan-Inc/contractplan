// app/files.tsx

'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface FileItem {
  name: string;
  type: string;
  uploadedBy: string;
  date: string;
}

export default function FilesPage() {
  const [files, setFiles] = useState<FileItem[]>([{
    name: 'FY24 Grant Agreement.pdf',
    type: 'Agreement',
    uploadedBy: 'Jordan Thomas',
    date: '2025-06-12',
  }, {
    name: 'Compliance_Report_Q1.xlsx',
    type: 'Compliance',
    uploadedBy: 'Sasha Kim',
    date: '2025-07-02',
  }]);

  const [newFile, setNewFile] = useState({ name: '', type: '' });

  const handleAdd = () => {
    if (newFile.name && newFile.type) {
      setFiles([...files, {
        name: newFile.name,
        type: newFile.type,
        uploadedBy: 'You',
        date: new Date().toISOString().split('T')[0],
      }]);
      setNewFile({ name: '', type: '' });
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">File Repository</h1>

      <div className="flex gap-2 items-end">
        <Input
          placeholder="File name"
          value={newFile.name}
          onChange={(e) => setNewFile({ ...newFile, name: e.target.value })}
        />
        <Input
          placeholder="Type (e.g. Contract, Audit)"
          value={newFile.type}
          onChange={(e) => setNewFile({ ...newFile, type: e.target.value })}
        />
        <Button onClick={handleAdd}>Upload</Button>
      </div>

      {files.map((doc, i) => (
        <Card key={i}>
          <CardContent className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-gray-500">Name</div>
              <div>{doc.name}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Type</div>
              <div>{doc.type}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Uploaded By</div>
              <div>{doc.uploadedBy}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Date</div>
              <div>{doc.date}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

