export interface VeltixProps {
  value: any;
  onChange?: (updatedSchema: any) => void;
  onSave?: (finalSchema: any) => void;
  theme?: 'light' | 'dark';
  readonly?: boolean;
}
