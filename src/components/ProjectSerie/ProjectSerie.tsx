import { FC } from 'react';
import { IProjectSerie } from './interfaces';
import { Card, Flex, Text, Box } from '@radix-ui/themes';
import Link from 'next/link';

const ProjectSerie: FC<IProjectSerie> = () => {
  return (
    <Box width={`calc(33.33% - ${32 / 3}px)`}>
      <Card asChild>
        <Link href="/project/1">
          <Flex align="center" gap="3" minHeight="64px">
            {/* <Box maxWidth="64px" maxHeight="64px"></Box> */}
            <Box flexGrow="1" maxWidth="100%" px="2">
              <Flex direction="column" maxWidth="100%">
                <Text size="3" weight="bold" truncate>
                  프로젝트 이름
                </Text>
                <Flex maxWidth="100%">
                  <Text size="1" color="gray" truncate>
                    프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명
                    프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Link>
      </Card>
    </Box>
  );
};

export default ProjectSerie;
