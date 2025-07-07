// app/documents.tsx

'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Document {
  name: string;
  type: string;
  uploadedBy: string;
  date: string;
}

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([{
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

  const [newDoc, setNewDoc] = useState({ name: '', type: '' });

  const handleAdd = () => {
    if (newDoc.name && newDoc.type) {
      setDocuments([...documents, {
        name: newDoc.name,
        type: newDoc.type,
        uploadedBy: 'You',
        date: new Date().toISOString().split('T')[0],
      }]);
      setNewDoc({ name: '', type: '' });
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Document Repository</h1>

      <div className="flex gap-2 items-end">
        <Input
          placeholder="Document name"
          value={newDoc.name}
          onChange={(e) => setNewDoc({ ...newDoc, name: e.target.value })}
        />
        <Input
          placeholder="Type (e.g. Contract, Audit)"
          value={newDoc.type}
          onChange={(e) => setNewDoc({ ...newDoc, type: e.target.value })}
        />
        <Button onClick={handleAdd}>Upload</Button>
      </div>

      {documents.map((doc, i) => (
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

