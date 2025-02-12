'use client'
import CustomButton from "@/components/module/CustomButton";
import CustomDatePicker from "@/components/module/CustomDatePicker";
import CustomInput from "@/components/module/CustomInput";
import CustomTextarea from "@/components/module/CustomTextarea";
import { addProject } from "@/services/project";
import { Project } from "@/types/Project";
import { addProjectValidation } from "@/validation/AddProjectValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MdAdd } from "react-icons/md";


const AddProjectFrom = () => {
  const [url, setUrl] = useState<string>('')
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Project>({
    mode: "onChange",
    resolver: zodResolver(addProjectValidation),

  });

  const submitProject = async (value: Project) => {
    const formData = new FormData();
    formData.append("name", value.name);
    formData.append("description", value.description);
    if (value.picture && value.picture.length > 0) {
      formData.append("picture", value.picture[0]);
    }

    addProject(formData)
  };
  console.log(errors);

  return (
    <div>

      <div className="w-11/12 m-auto h-[400px] border-2 border-dashed rounded-lg my-4 flex items-center justify-center ">
        <label htmlFor="picture"
          className="text-24 cursor-pointer flex flex-col gap-2 items-center justify-center w-full h-[350px]  "
        >
          {url ?
            <span className="w-full h-full flex items-center justify-center">
              <Image className="h-full object-cover" height={200} width={200} src={url} alt="picture" />
            </span>
            :
            <>
              <span className="border-2 border-dashed p-2 rounded-md flex items-center justify-center ">
                <MdAdd />
              </span>

              <span className="font-semibold text-18"> اپلود تصویر</span>
            </>
          }
        </label>
        <Controller
          control={control}
          name="picture"
          render={({ field }) => (
            <input
              type="file"
              id="picture"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  const urlCretor = URL.createObjectURL(e.target.files[0])
                  setUrl(urlCretor)
                  field.onChange(e.target.files); // ارسال FileList به react-hook-form
                }
              }}
              className="opacity-0 fixed -top-5 -left-5"
            />
          )}
        />
      </div>
      <div>
        <h3 className="text-18 font-semibold  my-3">اطلاعات پروژه </h3>
        <form
          onSubmit={handleSubmit(submitProject)}
          className="flex gap-3 flex-col"
        >
          <CustomDatePicker contorl={control} name="deadlineProject" />
          <CustomInput
            className="w-1/2"
            control={control}
            name="name"
            label="نام پروژه"
            error={errors.name}
          />
          <CustomTextarea
            className="w-full"
            control={control}
            name="description"
            label="توضیحات پروژه"
            error={errors.description}
          />
          <div>
            <CustomButton
              type="submit"
              className="bg-primary-300 text-white font-bold"
            >
              ثبت پروژه
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectFrom;