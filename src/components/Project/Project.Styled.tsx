'use client';

import Project from './Project';
import styled from 'styled-components';

const StyledProject = styled(Project)`
  .project__header__box {
    background-color: #222222;

    .move__button {
      button {
        position: relative;

        span {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 8px;
        }

        &.left {
          svg {
            transform: scaleX(-1);
          }
        }
      }
    }
  }
`;

export default StyledProject;
