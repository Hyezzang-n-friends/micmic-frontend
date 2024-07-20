'use client';

import { FC } from 'react';
import ProjectSerie from '@/components/ProjectSerie';
import { IProjects } from './interfaces';
import { Button, Flex } from '@radix-ui/themes';
import { PlusIcon } from '@radix-ui/react-icons';

const Projects: FC<IProjects> = ({ className, projects }) => {
  return (
    <div className={`projects__template ${className}`}>
      <div className="projects__inner">
        <div className="projects__list">
          {projects.length > 0 ? (
            <Flex
              wrap="wrap"
              gap="16px"
              width="100%"
              style={{ alignSelf: 'start' }}
            >
              {projects.map((project) => (
                <ProjectSerie key={project.id} {...project} />
              ))}
            </Flex>
          ) : (
            <div className="add__project">
              <Button variant="outline" size="3">
                <PlusIcon />
                New Project
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
