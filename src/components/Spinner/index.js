import React from 'react';
import { css } from '@emotion/core';

import ClipLoader from 'react-spinners/HashLoader';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: #FFF;
`;

export default function Spinner({ loading, size, color }) {
  return (
    <div className='sweet-loading'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={size}
          color={color}
          loading={loading}
        />
      </div>
  );
}
