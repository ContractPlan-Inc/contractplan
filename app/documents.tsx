// app/documents.tsx

'use client'

import { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Document {
  name: string
  type: string
  uploadedBy: string
  date: string
}

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([
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
  ])

  const [newDoc, setNewDoc] = useState({ name: '', type: '' })

  const handleAdd = () => {
    if (newDoc.name && newDoc.type) {
      setDocuments([
        ...documents,
        {
          name: newDoc.name,
          type: newDoc.type,
          uploadedBy: 'You',
          date: new Date().toISOString().split('T')[0],
        },
      ])
      setNewDoc({ name: '', type: '' })
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-slate-50">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Document repository</h1>
            <p className="text-sm text-slate-300">Organize executed agreements, compliance records, and supporting files.</p>
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Document name"
              value={newDoc.name}
              onChange={(event) => setNewDoc({ ...newDoc, name: event.target.value })}
              className="h-10 w-48 rounded-xl border-white/10 bg-white/10 text-white placeholder:text-slate-400"
            />
            <Input
              placeholder="Type (e.g. Contract, Audit)"
              value={newDoc.type}
              onChange={(event) => setNewDoc({ ...newDoc, type: event.target.value })}
              className="h-10 w-48 rounded-xl border-white/10 bg-white/10 text-white placeholder:text-slate-400"
            />
            <Button onClick={handleAdd} variant="emerald">
              Upload
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {documents.map((doc) => (
            <Card key={doc.name}>
              <CardContent className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">Name</div>
                  <div className="font-medium text-slate-900">{doc.name}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">Type</div>
                  <div className="text-slate-800">{doc.type}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">Uploaded by</div>
                  <div className="text-slate-800">{doc.uploadedBy}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">Date</div>
                  <div className="text-slate-800">{doc.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
