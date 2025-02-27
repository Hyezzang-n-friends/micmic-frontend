'use client';

import styled from 'styled-components';
import Projects from './Projects';

const StyledProjects = styled(Projects)`
  display: flex;
  padding-top: 40px;

  .projects__inner {
    flex: 1;
    padding: 0 48px;
    display: flex;

    .projects__list {
      display: flex;
      flex: 1;
      .add__project {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export default StyledProjects;
