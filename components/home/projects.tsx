import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import TextCards from 'shared/components/text-cards';
import { Button, HeaderSmall, Loader, ProjectCard } from '@shared-components';
import { ProjectDetailsContext } from 'shared/utils/contexts';
import { Project } from 'shared/utils/types';

export default function Projects(): JSX.Element {
  const router = useRouter();
  const projectDetails = useContext(ProjectDetailsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projectDetails) {
      setLoading(false);
    }
  }, [projectDetails]);

  if (loading || !projectDetails) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <div className="relative h-auto py-10 lg:py-20">
          <img
            src="/images/vectors/heart.svg"
            alt="Circle Vector"
            className="absolute -right-50p md:-right-96 bottom-16 md:-bottom-20 pointer-events-none animate-pulse"
          />
          <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
            <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
              {/* Hero Header */}
              <div className="items-center w-3/4 relative">
                <img
                  src="/images/vectors/boxes.svg"
                  alt="Box Vector"
                  className="block absolute right-0 top-0 w-20 md:w-16 lg:w-52 opacity-60"
                />
                <HeaderSmall text="Let's walk the talk!" />

                <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                  Some impressive <span className="text-pink font-bold">projects</span> for quality assurance
                </h1>
                <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                  Projects he has <span className="text-pink font-bold">tested & developed.</span>
                </h1>
                <div className="sm:ml-52 xl:ml-96 transform rotate-90">
                  <Link href="#projects">
                    <img
                      src="/images/vectors/arrows-right.svg"
                      alt="Next"
                      className="hidden lg:block w-14 lg:mt-24 xl:mt-16 sm:mt-0 transform-all animate-translateright "
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative col-span-12 md:col-span-5 lg:col-span-6 flex flex-col">
              <div className="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110">
                <TextCards
                  heading="Testing"
                  text="He ensures software quality through comprehensive manual and automation testing."
                  color="violet"
                />
              </div>
              <div className="w-64 h-auto my-4 sm:ml-40 sm:-my-6 lg:ml-60 lg:-my-10 shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110 z-auto">
                <TextCards
                  heading="Backend"
                  text="Creating robust and secure APIs using NestJS for scalable applications."
                  color="pink"
                />
              </div>
              <div className="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110">
                <TextCards
                  heading="Quality"
                  text="He implements test automation frameworks and ensures high-quality software delivery."
                  color="violet"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-auto sm:h-auto md:h-auto ml-4 sm:mx-12 md:mx-16" id="projects">
          <div className="grid md:grid-cols-2 gap-4 place-items-center">
            {projectDetails.map((project: Project) => (
              <ProjectCard
                project={project}
                key={project.slug}
                filter={{ key: 'featured', value: true }}
              />
            ))}
          </div>
          <div className="flex justify-center mt-10 lg:mt-4">
            <Button
              type="solid"
              text="Show me more! 🔥"
              onClickHandler={() => router.push('/projects')}
            />
          </div>
        </div>
      </div>
    </>
  );
}
