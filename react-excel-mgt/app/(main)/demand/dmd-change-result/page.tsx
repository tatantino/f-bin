'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function DmdChangeResultContent() {
  const searchParams = useSearchParams();
  const spGbName = searchParams.get('sp_gb_name');
  const dmdChangeMasterId = searchParams.get('dmd_change_master_id');
  const resultData = searchParams.get('result_data');

  return (
    <div>
      <div>SP/GB Name: {spGbName}</div>
      <br />
      <div>Dmd Change Master Id: {dmdChangeMasterId}</div>
      <br />
      <pre>{decodeURIComponent(resultData || '')}</pre>
    </div>
  );
}

export default function DmdChangeResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DmdChangeResultContent />
    </Suspense>
  );
}
