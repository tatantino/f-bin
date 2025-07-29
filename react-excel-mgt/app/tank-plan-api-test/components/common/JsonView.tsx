import { useState } from 'react';

interface JsonViewProps {
  title: string;
  data: any;
  expanded?: boolean;
}

export function JsonView({ title, data, expanded = false }: JsonViewProps) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  if (!data) return null;

  const formattedJson = JSON.stringify(data, null, 2);

  return (
    <div className="mt-4 border rounded-md">
      <div
        className="flex justify-between items-center px-4 py-2 bg-gray-100 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-medium">{title}</h3>
        <span>{isExpanded ? '▼' : '►'}</span>
      </div>
      {isExpanded && (
        <pre className="p-4 bg-gray-50 overflow-x-auto text-xs">
          {formattedJson}
        </pre>
      )}
    </div>
  );
}
