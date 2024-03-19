import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../ui/LoadingSpinner';
import { Dropdown } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AllApplications = () => {
  const {
    data: candidates = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: 'candidates',
    queryFn: () =>
      fetch('http://localhost:3000/api/candidates').then(res => res.json()),
  });
  const [status, setStatus] = useState('');
  const [candidateData, setCandidateData] = useState('');

  const handleUpdateCandidate = () => {
    axios
      .put(`http://localhost:3000/api/candidates/65f9ad1a326e7523baced5ea`, {
        name: candidateData.name,
        email: candidateData.email,
        gender: candidateData.gender,
        photo: candidateData.photo,
        experience: candidateData.experience,
        expectedSalary: candidateData.expectedSalary,
        status: status,
        appliedJob: candidateData?.appliedJob?._id,
      })
      .then(res => {
        if (res.status === 200) {
          refetch();
          toast.success(`Candidate marked successfully`);
        }
      });
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      {candidates?.candidates?.map(candidate => (
        <div
          className="bg-white hover:bg-[#B9F2E5] duration-200 px-7 py-3 rounded-lg my-5 flex items-center justify-between"
          key={candidate._id}
        >
          <div className="flex items-center justify-between gap-2">
            <img
              className="h-[40px] w-[40px] rounded-full"
              src={candidate.photo}
              alt=""
            />
            <div>
              <h6 className="text-sm font-bold">{candidate.name}</h6>
              <p className="text-xs font-semibold">
                {candidate.experience} year exp. | Expected{' '}
                {candidate.expectedSalary} tk
              </p>
            </div>
          </div>
          <h6 className="font-semibold">{Date(candidate.createdAt)}</h6>
          <Dropdown size="xs" label="Mark">
            <Dropdown.Item
              onClick={() => {
                setStatus('Shortlisted');
                setCandidateData(candidate);
                handleUpdateCandidate();
              }}
            >
              Shortlist
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setStatus('In process');
                setCandidateData(candidate);
                handleUpdateCandidate();
              }}
            >
              In process
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setStatus('On Hold');
                setCandidateData(candidate);
                handleUpdateCandidate();
              }}
            >
              On hold
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setStatus('Rejected');
                setCandidateData(candidate);
                handleUpdateCandidate();
              }}
            >
              Reject
            </Dropdown.Item>
          </Dropdown>
        </div>
      ))}
    </div>
  );
};

export default AllApplications;
