import { Dialog, Transition } from '@headlessui/react';
import { Label, Select, TextInput, Textarea } from 'flowbite-react';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const PostJobModal = ({ openJobPostModal, setOpenJobPostModal, refetch }) => {
  const { register, handleSubmit, reset } = useForm();

  const handlePostJob = data => {
    axios
      .post('http://localhost:3000/api/jobs', data)
      .then(res => {
        if (res.status === 200) {
          reset();
          setOpenJobPostModal(false);
          refetch();
          toast.success(`Job posted successfully`);
        }
      })
      .catch(() => toast.error(`Something went wrong! could not post the job`));
  };

  return (
    <>
      <Transition appear show={openJobPostModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpenJobPostModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Post a job
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(handlePostJob)}>
                      <div className="my-1 block">
                        <Label htmlFor="title" value="Job title" />
                      </div>
                      <TextInput
                        {...register('title')}
                        type="text"
                        sizing="sm"
                        required
                      />
                      <div className="my-1 block">
                        <Label htmlFor="description" value="Job description" />
                      </div>
                      <Textarea
                        {...register('description')}
                        required
                        rows={4}
                      />

                      <div className="my-1 block">
                        <Label htmlFor="type" value="Job type" />
                      </div>
                      <Select
                        {...register('jobType')}
                        id="jobTypes"
                        sizing="sm"
                        required
                      >
                        <option value="On-site">On-site</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                      </Select>

                      <div className="mt-4">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Post
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PostJobModal;
