import React from 'react';
import Barcode from 'react-barcode';

const BarcodeGenerator = ({ email }) => {
  return (
    <div>
      <Barcode value={email} />
    </div>
  );
};

export default BarcodeGenerator;
