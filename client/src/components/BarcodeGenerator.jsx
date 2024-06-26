import React from 'react';
import { useBarcode } from 'next-barcode';

const BarcodeGenerator = ()  => {
  const { inputRef } = useBarcode({
    value: 'next-barcode',
    options: {
      background: '#ffff00',
    }
  });
  
  return <img ref={inputRef} />;
};


export default BarcodeGenerator;
