export interface TooltipConfig {
  content: React.ReactNode;
}

export interface PageTitleProps {
  title: string;
  description?: string;
  tooltip?: TooltipConfig;
  actions?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export interface PageConfig {
  title: string;
  description?: string;
  tooltip: TooltipConfig;
}
