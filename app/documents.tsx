// app/documents.tsx

'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const mockDocuments = [
  {
    title: 'Community Grant Agreement',
    type: 'PDF',
    updated: '2025-06-15',
    contract: 'Contract #1829',
  },
  {
    title: 'Compliance Certificate FY24',
    type: 'DOCX',
    updated: '2025-07-01',
    contract: 'Contract #1742',
  },
  {
    title: 'Amendment: Vendor Payment Terms',
    type: 'PDF',
    updated: '2025-06-30',
    contract: 'Contract #1766',
  },
];

export default function DocumentsPage() {
  const [filter, setFilter] = useState('');

  const filteredDocs = mockDocuments.filter(doc =>
    doc.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Document Center</h1>
        <Button variant="outline" disabled>
          Upload Document
        </Button>
      </div>

      <Input
        type="text"
        placeholder="Search documents..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />

      <Card>
        <CardContent className="p-4 space-y-2">
          {filteredDocs.map((doc, i) => (
            <div key={i} className="border-b pb-2">
              <div className="font-medium">{doc.title}</div>
              <div className="text-sm text-gray-500">
                {doc.type} • Last updated: {doc.updated} • {doc.contract}
              </div>
            </div>
          ))}
          {filteredDocs.length === 0 && (
            <div className="text-gray-500 text-sm italic">No documents found.</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

