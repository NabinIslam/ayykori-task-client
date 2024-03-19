import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../ui/LoadingSpinner';

const Shortlisted = () => {
  const {
    data: candidates = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: 'candidates',
    queryFn: () =>
      fetch('http://localhost:3000/api/candidates?status=Shortlisted').then(
        res => res.json()
      ),
  });

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
          <h6 className="font-bold text-green-600">{candidate.status}</h6>
          <h6 className="font-semibold">{Date(candidate.createdAt)}</h6>
        </div>
      ))}
    </div>
  );
};

export default Shortlisted;
