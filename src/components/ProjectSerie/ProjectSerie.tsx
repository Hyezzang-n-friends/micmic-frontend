import { FC, useState } from 'react';
import { IProjectSerie } from './interfaces';
import {
  Card,
  Flex,
  Text,
  Box,
  Dialog,
  TextField,
  Button,
  Spinner
} from '@radix-ui/themes';
import Link from 'next/link';
import { PlusIcon } from '@radix-ui/react-icons';

const ProjectSerie: FC<IProjectSerie> = ({ type, className }) => {
  const [isOpenNewProjectDialog, setIsOpenNewProjectDialog] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [newProjectName, setNewProjectName] = useState<string>('');

  const isValidProjectName = (name: string) => {
    // 앞뒤 공백 제거 및 연속된 공백을 하나로 줄임
    const trimmedName = name.trim().replace(/\s+/g, ' ');
    const regex = /^[가-힣a-zA-Z0-9_. -]+$/;
    return regex.test(trimmedName);
  };

  const handleClickNewConfirm = async () => {
    if (isValidProjectName(newProjectName) === false) {
      alert('프로젝트 이름을 확인해주세요.');
      return;
    }
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } finally {
      setIsLoading(false);
      setIsOpenNewProjectDialog(false);
      setNewProjectName('');
    }
  };

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
        <Dialog.Root
          open={isOpenNewProjectDialog}
          onOpenChange={setIsOpenNewProjectDialog}
        >
          <Dialog.Trigger>
            <Card asChild variant="ghost">
              <Link href="#" className="add__link">
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
          </Dialog.Trigger>

          <Dialog.Content maxWidth="450px">
            <Dialog.Title>새 프로젝트</Dialog.Title>
            <Dialog.Description mb="4">
              새 프로젝트를 생성합니다.
            </Dialog.Description>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  프로젝트 이름
                </Text>
                <TextField.Root
                  placeholder="프로젝트 이름을 입력하세요"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && handleClickNewConfirm()
                  }
                />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Button onClick={handleClickNewConfirm} disabled={isLoading}>
                <Spinner loading={isLoading} />
                추가
              </Button>
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  취소
                </Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
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
