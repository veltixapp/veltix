import React from 'react';
import type { VeltixProps } from '../types';

export const Veltix: React.FC<VeltixProps> = ({
  value,
  onChange,
  onSave,
  theme = 'light',
  readonly = false
}) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16 }}>
      <h3>Veltix Visual Editor ({theme})</h3>
      <pre>{JSON.stringify(value, null, 2)}</pre>
      {!readonly && (
        <button onClick={() => onSave?.(value)}>Save</button>
      )}
    </div>
  );
};
