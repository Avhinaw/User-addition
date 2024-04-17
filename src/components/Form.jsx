import React from "react";
import { useForm } from "react-hook-form";

const Form = ({handleFormData})=>{
    const {register, handleSubmit} = useForm();
    return (
        <>
            <div className="mt-10 flex justify-center gap-10">
                <form className="flex gap-10" onSubmit={handleSubmit(data => handleFormData(data))}>
                    <input {...register('name')} className="rounded-md outline-none px-2 py-1 text-base font-semibold" type="text" placeholder="Name"/>
                    <input {...register('email')} className="rounded-md outline-none px-2 py-1 text-base font-semibold" type="text" placeholder="Email" />
                    <input {...register('image')} className="rounded-md outline-none px-2 py-1 text-base font-semibold" type="text" placeholder="Image url" />
                    <input className="rounded-md bg-blue-500 text-white px-3 py-1 font-semibold cursor-pointer" type="submit" />
                </form>
            </div>
        </>
    )
}

export default Form;