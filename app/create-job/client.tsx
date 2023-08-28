'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import InputWithLabel from '../jobs/input-job'
import { DropDown } from '@/components/dropdown'
import SubmitButton from '@/components/submit-button'
import createJobs from '@/actions/create-job'
import { toast } from 'react-hot-toast'
import { redirect } from 'next/navigation'

const initialState = {
    title:'',
    companyName:'',
    location:'',
    salary:'',
    type:''
    }


    const jobType = [
        {
          value:'Full-Time',
          label:'Full-Time'
        },
        {
          value:'Part-Time',
          label:'Part-Time'
        },
      ]
    

export default function CreateJobClient() {
    const [value, setValue] = useState('')
    const [state,setState] = useState({...initialState, type:''})


    useEffect(() => {
        setState((prev) => ({...prev,type:value}));
    },[value])

    function onChange(event:ChangeEvent<HTMLInputElement>) {
        setState({ ...state, [event.target.name]: event.target.value });
    }

  return (
    <div>
        <form action={async(formData) => {

                await createJobs(formData)
                toast.success('Created Successfully')
                redirect('/jobs')
                
        }} className='container mx-auto grid gap-8 grid-cols-4'>
        <InputWithLabel
            type='text'
            id='title'
            placeholder='title'
            label='title'
            value={state.title}
            onChange={onChange}
            name='title'
            />


            <InputWithLabel 
            type='text'
            value={state.companyName}
            id='companyName'
            placeholder='companyName'
            label='companyName'
            name='companyName'
            onChange={onChange}

            />

            <InputWithLabel
            type='text'
            id='location'
            placeholder='location'
            label='location'
            value={state.location}
            onChange={onChange}
            name='location'

            />
            <InputWithLabel 
            type='text'
            value={state.salary}
            id='salary'
            placeholder='salary'
            label='salary'
            onChange={onChange}
            name='salary'

            />





        <input type="hidden" value={value} name='type' onChange={onChange}/>
        <DropDown value={value} setValue={setValue} jobType={jobType}/>
        <SubmitButton label='Create'/>
        </form>
    </div>
  )
}
