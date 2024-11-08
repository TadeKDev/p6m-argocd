'use client';

import { useSearchParams } from 'next/navigation';
import ConnectForm from "@/components/ConnectForm";

export default function FormSection() {
  const searchParams = useSearchParams();
  const showForm = searchParams.get('showForm') === 'true';

  return <ConnectForm initialShowForm={showForm} />;
}