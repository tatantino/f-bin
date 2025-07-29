import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { SizeType } from '../../types';
import { getSizeColor } from '../../config/constants';

interface InputCellProps {
  value: number | string;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  size: SizeType;
  suffix?: string;
  precision?: number;
  showSuffix?: boolean;
}

/**
 * Input cell for numerical values with validation
 */
export function InputCell({
  value,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  size,
  suffix,
  precision = 0,
  showSuffix = true,
}: InputCellProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>(
    typeof value === 'number' ? value.toFixed(precision) : String(value)
  );
  const [isFocused, setIsFocused] = useState(false);

  // Format number according to precision
  const formatNumber = (num: number) => num.toFixed(precision);

  // Process and validate input value
  const processValue = (val: string): number | null => {
    if (val === '' || val === '-' || val === '.' || val === '-.') return null;

    const num = parseFloat(val);
    if (isNaN(num)) return null;
    return Math.max(min, Math.min(max, num));
  };

  // Update value with formatting
  const updateValue = (val: number) => {
    setInputValue(formatNumber(val));
    onChange(val);
  };

  // Adjust value by delta while respecting min/max
  const adjustValue = (delta: number) => {
    const currentValue = parseFloat(inputValue) || 0;
    const newValue = Math.max(min, Math.min(max, currentValue + delta));
    updateValue(newValue);
  };

  // Sync input value with external value when not focused
  useEffect(() => {
    if (!isFocused) {
      setInputValue(
        typeof value === 'number' ? formatNumber(value) : String(value)
      );
    }
  }, [value, isFocused]);

  // Event handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const regex = /^-?\d*\.?\d*$/;
    if (!regex.test(val)) return;

    setInputValue(val);

    const processedValue = processValue(val);
    if (processedValue !== null) {
      onChange(processedValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowDown':
        e.preventDefault();
        adjustValue(e.key === 'ArrowUp' ? step : -step);
        break;
      case 'Enter':
        e.preventDefault();
        inputRef.current?.blur();
        break;
      case 'Escape':
        e.preventDefault();
        if (typeof value === 'number') {
          setInputValue(formatNumber(value));
        }
        inputRef.current?.blur();
        break;
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    if (isFocused) {
      e.preventDefault();
      adjustValue(e.deltaY < 0 ? step : -step);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    inputRef.current?.select();
  };

  const handleBlur = () => {
    setIsFocused(false);
    const processedValue = processValue(inputValue);

    if (processedValue === null) {
      const defaultValue = typeof value === 'number' ? value : 0;
      updateValue(defaultValue);
      return;
    }

    updateValue(processedValue);
  };

  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-md bg-gray-900/5 shadow-sm transition-all group-hover:bg-gray-900/10" />
      <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-gray-900/10" />
      <Input
        ref={inputRef}
        type="number"
        value={inputValue}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onWheel={handleWheel}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`relative h-8 w-full min-w-16 rounded-md border-0 bg-white px-2 text-center text-sm font-medium tabular-nums tracking-wider shadow-[0_1px_2px_0_rgb(0,0,0,0.05)] transition-all duration-150 ease-in-out hover:bg-gray-50/80 focus:shadow-[0_0_0_2px_rgba(66,153,225,0.4)] focus:outline-none active:translate-y-[1px] active:shadow-none ${getSizeColor(size)}`}
      />
      {showSuffix && suffix && (
        <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-medium">
          {suffix}
        </div>
      )}
    </div>
  );
}
