import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { useCreateCharacterMutation } from "../generated/apolloComponents";

import Input from "./form/Input";

type FormData = {
  characterName: string;
  realName: string;
  imdbLink: string;
  dob: string;
  coverPicture: string;
  shows: string;
};

export default function AddCharacter() {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const [values, setValues] = useState<FormData>();
  const [createCharacter] = useCreateCharacterMutation();

  const showPreview = handleSubmit(values => {
    setValues(values);
  });

  const handleSubmitButton = async () => {
    const res = await createCharacter({
      variables: {
        record: {
          ...values,
          shows: values?.shows.split(", ")
        } as any
      }
    });

    alert("Character Created!");
    console.log("resposne", res);
  };
  return (
    <form onSubmit={showPreview}>
      <div className="py-12">
        <h1 className="py-2 text-2xl font-bold">Add Character</h1>
        <div className="flex">
          <div className="w-1/2 pb-8">
            <div className="pr-12 py-2">
              <Input
                id="characterName"
                name="characterName"
                label="Character Name"
                ref={register({ required: true })}
                error={errors.characterName}
              />
            </div>
            <div className="pr-12 py-2">
              <Input
                id="realName"
                name="realName"
                label="Real Name"
                ref={register({ required: true })}
                error={errors.realName}
              />
            </div>
            <div className="pr-12 py-2">
              <Input
                id="imdbLink"
                name="imdbLink"
                label="iMDb Link"
                ref={register({ required: true })}
                error={errors.imdbLink}
              />
            </div>
            <div className="pr-12">
              <Input id="dob" name="dob" label="Date of Birth" ref={register({ required: true })} error={errors.dob} />
            </div>
            <div className="pr-12">
              <Input
                id="coverPicture"
                name="coverPicture"
                label="Cover Picture"
                ref={register({ required: true })}
                error={errors.coverPicture}
              />
            </div>
            <div className="pr-12">
              <Input id="shows" name="shows" label="Shows" ref={register({ required: true })} error={errors.shows} />
            </div>
          </div>
          {/* Preview Card */}
          {values && (
            <div className="px-6 py-4 h-40 rounded overflow-hidden shadow-lg">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-4 object-cover" src={values?.coverPicture} />
                  <div className="text-xl text-gray-700">
                    <span className="text-gray-900 leading-none pr-4">{values?.characterName}</span>
                    <span className="text-gray-900 text-base leading-none">({values?.realName})</span>
                  </div>
                </div>
                <div className="text-base">Date of Birth: {values?.dob}</div>
                <div className="text-sm">IMDb Link: {values?.imdbLink}</div>
              </div>
            </div>
          )}
        </div>
        {/* Submit buttons */}
        <div className="flex">
          <button
            type="submit"
            className="mr-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Preview
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmitButton}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
