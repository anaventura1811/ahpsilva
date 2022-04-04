import React, { useCallback, useState } from 'react';
import { TabsContainer } from './styles';

type Props = {}

export default function Tabs(props: Props) {
  const [currentContent, setCurrentContent] = useState(1);

  const handleCurrentContent = useCallback((value) => {
    setCurrentContent(value);
    
  }, []);

  return (
    <TabsContainer>
      <button
        type="button"
        className={currentContent === 1 ? 'tab_active' : 'tab'}
        onClick={() => handleCurrentContent(1)}
      >
        Notícias

      </button>
      <button
        type="button"
        className={currentContent === 2 ? 'tab_active' : 'tab'}
        onClick={() => handleCurrentContent(2)}
      >
        Oportunidades
      </button>
    </TabsContainer>
  );
};
