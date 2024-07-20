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
          <Flex
            wrap="wrap"
            gap="16px"
            width="100%"
            style={{ alignSelf: 'start' }}
          >
            {projects.map((project) => (
              <ProjectSerie key={project.id} {...project} />
            ))}
            <ProjectSerie id="add-card" type="new" />
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Projects;
