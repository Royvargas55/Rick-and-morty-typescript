import React, { FC } from 'react';

// Styles
import '../styles/components/Loader.scss';

const Loader: FC = () => (
  <div className="lds-facebook">
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
