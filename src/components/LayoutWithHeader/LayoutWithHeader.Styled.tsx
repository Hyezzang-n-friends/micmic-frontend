'use client';

import LayoutWithHeader from './LayoutWithHeader';
import styled from 'styled-components';

const StyledLayoutWithHeader = styled(LayoutWithHeader)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .basic__header + main {
    flex: 1;
    display: flex;

    > div {
      flex: 1;
    }
  }
`;

export default StyledLayoutWithHeader;
