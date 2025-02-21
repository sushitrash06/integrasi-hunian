"use client";

import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ProjectTable from "../Component/ProjectTable";

export default function AddProjectModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImages(event.target.files);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!projectName || !description || !images || images.length === 0) {
      alert("Semua field harus diisi!");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("nama_project", projectName);
    formData.append("deskripsi", description);
    Array.from(images).forEach((file) => formData.append("gambar", file));

    try {
      const response = await fetch("/api/auth/add-project", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message);

      alert("Project berhasil ditambahkan!");
      setProjectName("");
      setDescription("");
      setImages(null);
      closeModal();
    } catch (error: unknown) {
      alert(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add Project
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Add New Project
                  </Dialog.Title>
                  <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                      <label className="block text-sm font-medium">Project Name</label>
                      <input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium">Description</label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium">Upload Images</label>
                      <input type="file" multiple onChange={handleFileChange} className="w-full p-2" />
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                      <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded-md">
                        Cancel
                      </button>
                      <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded-md">
                        {loading ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div>
        <ProjectTable />
      </div>
    </div>
  );
}
