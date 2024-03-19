import { Button } from 'flowbite-react';
import { IoIosAddCircle } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import PostJobModal from '../modals/PostJobModal';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import EditJobModal from '../modals/EditJobModal';
import ApplyJobModal from '../modals/ApplyJobModal';

const Jobs = () => {
  const [openJobPostModal, setOpenJobPostModal] = useState(false);
  const [openEditPostModal, setOpenEditPostModal] = useState(false);
  const [openApplyModal, setOpenApplyModal] = useState(false);
  const [jobData, setJobData] = useState(null);

  const {
    data: jobs = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: 'jobs',
    queryFn: () =>
      fetch('http://localhost:3000/api/jobs').then(res => res.json()),
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <main>
      <Button
        className="mb-4"
        gradientDuoTone="greenToBlue"
        onClick={() => setOpenJobPostModal(true)}
      >
        <IoIosAddCircle />
        Post a job
      </Button>
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {jobs?.allJobs?.map(job => (
          <div
            className="relative rounded-lg overflow-hidden shadow-sm bg-white p-6"
            key={job._id}
          >
            <FaEdit
              className="absolute top-0 right-0 text-yellow-600 hover:text-[#11998E] p-2 text-4xl rounded-full cursor-pointer"
              onClick={() => {
                setOpenEditPostModal(true);
                setJobData(job);
              }}
            />

            <div className="font-bold text-xl mb-2">{job.title}</div>
            <p className="text-gray-700 text-base">{job.description}</p>

            <div className="my-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {job.jobType}
              </span>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <a
                href="#"
                className="bg-[#11998E]  hover:bg-[#1e4e4abb] duration-200 text-white font-bold py-2 px-4 rounded"
              
                onClick={()=> {
                  setJobData(job)
                  setOpenApplyModal(true)
                }}
              >
                Apply Now
              </a>
              <FaTrash
                className="text-red-600 hover:bg-slate-200 p-2 text-4xl rounded-full cursor-pointer"
                onClick={() => {
                  axios
                    .delete(`http://localhost:3000/api/jobs/delete/${job._id}`)
                    .then(res => {
                      if (res.status === 200) {
                        refetch();
                        toast.success(`Job deleted successfully`);
                      }
                    });
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <PostJobModal
        openJobPostModal={openJobPostModal}
        setOpenJobPostModal={setOpenJobPostModal}
        refetch={refetch}
      />
      <EditJobModal
        openEditPostModal={openEditPostModal}
        setOpenEditPostModal={setOpenEditPostModal}
        jobData={jobData}
        refetch={refetch}
      />
      <ApplyJobModal
        openApplyModal={openApplyModal}
        setOpenApplyModal={setOpenApplyModal}
        jobData={jobData}
      />
    </main>
  );
};

export default Jobs;
