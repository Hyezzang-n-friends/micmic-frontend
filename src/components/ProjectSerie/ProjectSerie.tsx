import { FC } from 'react';
import { IProjectSerie } from './interfaces';
import { Card, Flex, Text, Box } from '@radix-ui/themes';
import Link from 'next/link';
import { PlusIcon } from '@radix-ui/react-icons';

const ProjectSerie: FC<IProjectSerie> = ({ type, className }) => {
  const renderCard = () => {
    if (type === 'project') {
      return (
        <Card asChild>
          <Link href="/project/1">
            <Flex align="center" gap="3" minHeight="64px">
              {/* <Box maxWidth="64px" maxHeight="64px"></Box> */}
              <Box flexGrow="1" maxWidth="100%" px="2">
                <Flex direction="column" maxWidth="100%">
                  <Flex maxWidth="100%">
                    <Text size="3" weight="bold" truncate>
                      프로젝트 이름
                    </Text>
                  </Flex>
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
      );
    }

    if (type === 'new') {
      return (
        <Card asChild variant="ghost">
          <Link href="/projects/new" className="add__link">
            <Flex align="center" gap="3" minHeight="64px">
              <Box flexGrow="1" maxWidth="100%" px="2">
                <Flex align="center" maxWidth="100%" gap="2">
                  <PlusIcon />
                  <Text>새 프로젝트</Text>
                </Flex>
              </Box>
            </Flex>
          </Link>
        </Card>
      );
    }

    return null;
  };

  return (
    <Box width={`calc(33.33% - ${32 / 3}px)`} className={className}>
      {renderCard()}
    </Box>
  );
};

export default ProjectSerie;
