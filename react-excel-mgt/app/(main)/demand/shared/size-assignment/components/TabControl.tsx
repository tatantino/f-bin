import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, Percent } from 'lucide-react';
import { InfoTooltip } from '@/components/shared/feedbacks/InfoTooltip';
import { TOOLTIPS } from './tooltips';

type ModeType = 'ratio' | 'quantity';

interface TabControlProps {
  mode: ModeType;
  onModeChange: (value: ModeType) => void;
}

/**
 * Controls switching between ratio and quantity modes
 */
export function TabControl({ mode, onModeChange }: TabControlProps) {
  const isRatioMode = mode === 'ratio';
  const tooltipContent = isRatioMode
    ? TOOLTIPS.ASSIGNMENT_MODES.RATIO.content
    : TOOLTIPS.ASSIGNMENT_MODES.QUANTITY.content;

  return (
    <div className="mb-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-medium">
          {isRatioMode ? 'Assign by percentage' : 'Assign by quantity'}
        </h3>
        <InfoTooltip content={tooltipContent} />
      </div>

      <Tabs
        value={mode}
        onValueChange={value => onModeChange(value as ModeType)}
        className="w-auto"
      >
        <TabsList className="grid h-9 w-[220px] grid-cols-2 rounded-md bg-gray-100/80 p-0.5">
          <TabsTrigger
            value="ratio"
            className="rounded-md text-xs data-[state=active]:bg-white"
          >
            <div className="flex items-center gap-1">
              <Percent className="h-3 w-3" />
              <span>Ratio</span>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="quantity"
            className="rounded-md text-xs data-[state=active]:bg-white"
          >
            <div className="flex items-center gap-1">
              <Calculator className="h-3 w-3" />
              <span>Quantity</span>
            </div>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
