'use client';

import BasicHeader from './BasicHeader';
import styled from 'styled-components';

const StyledBasicHeader = styled(BasicHeader)`
  height: 52px;

  .header__logo {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
  }

  .header__link {
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    text-decoration: none;
    padding: 10px;
    color: #616267;

    &.active,
    &.login {
      color: rgba(255, 255, 255, 0.9);
      font-weight: 600;
    }
  }

  .header__avatar {
    button {
      background: none;
      border: none;
      cursor: pointer;
      outline: none;
    }
  }
`;

export default StyledBasicHeader;
