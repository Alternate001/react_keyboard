import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      setPressedKey(e.key);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {pressedKey === ''
          ? `Nothing was pressed yet`
          : `The last pressed key is [${pressedKey}]`}
      </p>
    </div>
  );
};
