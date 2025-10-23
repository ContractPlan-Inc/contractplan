'use client';

import { FormEvent, ReactNode, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

type DocumentEntry = {
  name: string;
  type: string;
  uploadedBy: string;
  date: string;
};

const initialDocuments = [
  {
    name: 'FY24 Grant Agreement.pdf',
    type: 'Agreement',
    uploadedBy: 'Jordan Thomas',
    date: '2025-06-12',
  },
  {
    name: 'Compliance_Report_Q1.xlsx',
    type: 'Compliance',
    uploadedBy: 'Sasha Kim',
    date: '2025-07-02',
  },
] satisfies DocumentEntry[];

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<DocumentEntry[]>(initialDocuments);
  const [draft, setDraft] = useState({ name: '', type: '' });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!draft.name.trim() || !draft.type.trim()) {
      return;
    }

    const newEntry: DocumentEntry = {
      name: draft.name.trim(),
      type: draft.type.trim(),
      uploadedBy: 'You',
      date: new Date().toISOString().split('T')[0],
    };

    setDocuments((previous) => [newEntry, ...previous]);
    setDraft({ name: '', type: '' });
  };

  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">Document repository</h1>
        <p className="text-sm text-slate-200/80">
          Upload contracts, compliance reports, and supporting files. Everything is encrypted and searchable in seconds.
        </p>
      </header>

      <Card className="bg-white/10 text-white">
        <CardContent className="p-6">
          <form className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]" onSubmit={handleSubmit}>
            <label className="space-y-2 text-sm font-medium">
              <span>Document name</span>
              <Input
                placeholder="FY25 Monitoring Plan.pdf"
                value={draft.name}
                onChange={(event) => setDraft((prev) => ({ ...prev, name: event.target.value }))}
                className="bg-white text-gray-900"
                required
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              <span>Category</span>
              <Input
                placeholder="Compliance"
                value={draft.type}
                onChange={(event) => setDraft((prev) => ({ ...prev, type: event.target.value }))}
                className="bg-white text-gray-900"
                required
              />
            </label>
            <Button type="submit" className="self-end">Upload</Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {documents.map((doc) => (
          <Card key={`${doc.name}-${doc.date}`} className="bg-white text-slate-900">
            <CardContent className="grid gap-4 p-4 sm:grid-cols-4">
              <DocumentMeta label="Name" value={doc.name} />
              <DocumentMeta
                label="Type"
                value={<Badge variant="secondary" className="bg-emerald-100 text-emerald-800">{doc.type}</Badge>}
              />
              <DocumentMeta label="Uploaded by" value={doc.uploadedBy} />
              <DocumentMeta label="Uploaded on" value={new Date(doc.date).toLocaleDateString()} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function DocumentMeta({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="space-y-1 text-sm">
      <p className="text-gray-500">{label}</p>
      <div className="font-medium text-gray-900">{value}</div>
    </div>
  );
}
