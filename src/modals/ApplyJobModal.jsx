import axios from 'axios';
import { FileInput, Label, Modal, Select, TextInput } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ApplyJobModal = ({ jobData, openApplyModal, setOpenApplyModal }) => {
  const { register, handleSubmit, reset } = useForm();

  const imgHostApiKey = import.meta.env.VITE_APP_IMAGEBB_API_KEY;

  const handleApply = data => {
    const image = data.photo[0];
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${imgHostApiKey}`;

    axios
      .post(url, formData)
      .then(res => {
        if (res.status === 200) {
          const application = {
            name: data.name,
            email: data.email,
            gender: data.gender,
            photo: res.data.data.url,
            experience: data.experience,
            expectedSalary: data.expectedSalary,
            appliedJob: jobData._id,
          };

          fetch(
            `https://ayykori-task-server-production.up.railway.app/api/candidates`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(application),
            }
          )
            .then(res => res.json())
            .then(data => {
              if (data.success) {
                reset();
                setOpenApplyModal(false);
                toast.success(`Job posted successfully`);
              }
            })
            .catch(err =>
              toast.error(`something went wrong! could not post the job`)
            );
        }
      })
      .catch(err =>
        toast.error(`something went wrong! could not upload the image`)
      );
  };

  return (
    <Modal show={openApplyModal} onClose={() => setOpenApplyModal(false)}>
      <Modal.Header>Apply</Modal.Header>
      <Modal.Body>
        {/* {isLoading ? (
        'Loading...'
      ) : ( */}
        <form onSubmit={handleSubmit(handleApply)}>
          <div className="my-1 block">
            <Label htmlFor="name" value="Full Name" />
          </div>
          <TextInput {...register('name')} sizing="sm" required />

          <div className="my-1 block">
            <Label htmlFor="Email" value="Your Email" />
          </div>
          <TextInput {...register('email')} sizing="sm" required />

          <div className="my-1 block">
            <Label htmlFor="gender" value="Gender" />
          </div>
          <Select {...register('gender')} sizing="sm" required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>

          <div className="my-1 block">
            <Label
              htmlFor="experience"
              value="How many year of experience do you have?"
            />
          </div>
          <TextInput
            {...register('experience')}
            type="number"
            sizing="sm"
            required
          />
          <div className="my-1 block">
            <Label htmlFor="expectedSalary" value="Expected Salary" />
          </div>
          <TextInput
            {...register('expectedSalary')}
            type="number"
            sizing="sm"
            required
          />

          <div className="my-1 block">
            <Label htmlFor="small-file-upload" value="Your photo" />
          </div>
          <FileInput {...register('photo')} sizing="sm" />

          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Apply
            </button>
          </div>
        </form>
        {/* )} */}
      </Modal.Body>
    </Modal>
  );
};

export default ApplyJobModal;
