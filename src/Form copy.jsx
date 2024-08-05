/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🦝 Todo: CREATE AN AWESOME AND MAINTAINABLE FORM COMPONENT 
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Input } from './components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
  password_validation,
} from './utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'

export const Form = () => {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault(e)}
        noValidate
        autoComplete='off'
        className="container"
      >
        <div className="grid gap-3 md:grid-cols-2">
          <Input
            // label="name"
            // type="text"
            // name="name"
            // id="name"
            // placeholder="type your name... "
            // validation={{
            //   required:{
            //     value:true,
            //     message:'required',

            //   },
            // }}

            {...name_validation}
          />

          <Input
            // label="password"
            // type="password"
            // id="password"
            // name="password"
            // placeholder="type your password... "
            // validation={{
            //   required:{
            //     value:true,
            //     message:'required',
            //   },
            //   minLength:{
            //     value:6,
            //     message:'min 6 characters',
            //   }
            // }}
            {...password_validation}
          />

          <Input {...email_validation} />
          <Input {...num_validation} />
          <Input {...desc_validation}  className="md:col-span-2" />
        </div>
        <div className="mt-5">
          <button
            onClick={onSubmit}
            className="flex item-center gap-1 p-5 font-semibold text-while bg-blue-600 rounded-md hover:bg-blue-800"
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
