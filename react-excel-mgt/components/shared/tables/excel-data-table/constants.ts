export const DEFAULT_ROW_HEIGHT = 32;
export const DEFAULT_MAX_HEIGHT = 660;
export const HEADER_HEIGHT = 76;
export const DEFAULT_SKELETON_ROWS = 10;

export const TABLE_STYLES = {
  container:
    'flex flex-col overflow-auto rounded-lg border border-border/50 bg-gradient-to-b from-card via-card/95 to-card/90 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-all duration-300 ease-in-out',
  toolbar: 'flex items-center justify-end gap-2 pb-2',
  tableWrapper: 'overflow-x-auto relative',
} as const;
