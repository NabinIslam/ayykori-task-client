import { Dialog, Transition } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import {
  Button,
  Label,
  Modal,
  Select,
  TextInput,
  Textarea,
} from 'flowbite-react';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';

const EditJobModal = ({
  openEditPostModal,
  setOpenEditPostModal,
  jobData,
  refetch,
}) => {
  // const { data: job = {}, isLoading } = useQuery({
  //   queryKey: 'job',
  //   queryFn: () =>
  //     fetch(`https://ayykori-task-server-production.up.railway.app/api/jobs/id/${jobData?._id}`).then(res =>
  //       res.json()
  //     ),
  // });

  // console.log(jobData);

  const { register, handleSubmit, reset } = useForm();

  const handleEditJob = data => {};

  return (
    <>
      {/* <Transition appear show={openEditPostModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpenEditPostModal(false)}
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
                    Edit job
                  </Dialog.Title>
                  <div className="mt-2">
                    {isLoading ? (
                      'Loading...'
                    ) : (
                      <form onSubmit={handleSubmit(handleEditJob)}>
                        <div className="my-1 block">
                          <Label htmlFor="title" value="Job title" />
                        </div>
                        <TextInput
                          {...register('title')}
                          type="text"
                          sizing="sm"
                          defaultValue={job?.job?.title}
                          required
                        />
                        <div className="my-1 block">
                          <Label
                            htmlFor="description"
                            value="Job description"
                          />
                        </div>
                        <Textarea
                          {...register('description')}
                          defaultValue={job?.job?.description}
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
                            Update
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}

      <Modal
        show={openEditPostModal}
        onClose={() => setOpenEditPostModal(false)}
      >
        <Modal.Header>Edit job</Modal.Header>
        <Modal.Body>
          {/* {isLoading ? (
            'Loading...'
          ) : ( */}
          <form onSubmit={handleSubmit(handleEditJob)}>
            <div className="my-1 block">
              <Label htmlFor="title" value="Job title" />
            </div>
            <TextInput
              {...register('title')}
              sizing="sm"
              defaultValue={jobData?.title}
              required
            />
            <div className="my-1 block">
              <Label htmlFor="description" value="Job description" />
            </div>
            <Textarea
              {...register('description')}
              defaultValue={jobData?.description}
              rows={4}
              required
            />

            <div className="my-1 block">
              <Label htmlFor="type" value="Job type" />
            </div>
            <Select {...register('jobType')} id="jobTypes" sizing="sm" required>
              <option value="On-site">On-site</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </Select>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Update
              </button>
            </div>
          </form>
          {/* )} */}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditJobModal;
