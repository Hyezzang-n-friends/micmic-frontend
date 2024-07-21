'use client';

import { FC, useEffect } from 'react';
import { IProjectProps } from './interfaces';
import { Box, Button, Flex, IconButton } from '@radix-ui/themes';
import {
  ArrowLeftIcon,
  PlayIcon,
  StopIcon,
  ReloadIcon
} from '@radix-ui/react-icons';

const Project: FC<IProjectProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="project__header">
        <Box width="100%" height="52px" className="project__header__box">
          <Box px="32px" height="100%">
            <Flex align="center" height="100%" justify="between">
              <Button variant="ghost" color="gray">
                <ArrowLeftIcon />
                Back
              </Button>

              <Flex height="100%" align="center" gap="2">
                <Box className="move__button left">
                  <IconButton variant="ghost" color="gray" m="1">
                    <ReloadIcon width="24" height="24" color="white" />
                    <span>10</span>
                  </IconButton>
                </Box>
                <Box>
                  <IconButton variant="ghost" color="gray" m="1">
                    <PlayIcon width="24" height="24" color="white" />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton variant="ghost" color="gray" m="1">
                    <StopIcon width="24" height="24" color="white" />
                  </IconButton>
                </Box>
                <Box className="move__button">
                  <IconButton variant="ghost" color="gray" m="1">
                    <ReloadIcon width="24" height="24" color="white" />
                    <span>10</span>
                  </IconButton>
                </Box>
              </Flex>

              <Button variant="ghost" color="gray">
                History
              </Button>
            </Flex>
          </Box>
        </Box>
      </div>

      <Box className="project__content">
        <Box className="wave__container">
          <div id="waveform" />
        </Box>
      </Box>
    </div>
  );
};

export default Project;
