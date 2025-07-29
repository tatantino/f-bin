import type { TankInfo } from '../types/tank';

export type DataHandler = (data: TankInfo[]) => void;

export type BaseProps = {
  disabled?: boolean;
};

export type DataProps = {
  data: TankInfo[];
};

export type TableProps = DataProps & {
  onDataChange: DataHandler;
  key?: string;
};

export type HeaderProps = DataProps & {
  hasChanges: boolean;
  onDataChange: DataHandler;
  handleImportSuccess: DataHandler;
  handleSaveSuccess: DataHandler;
};

export type ActionButtonProps = BaseProps & {
  data?: TankInfo[];
  onSuccess?: DataHandler;
  onClick?: () => void;
};
