import { useState, useEffect } from 'react'
import Job from '../../../models/job/job'
import jobsService from '../../../services/jobs'
import './Add.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Draft from '../../../models/employee/employeeDraft'
import employeesService from '../../../services/employees'

export default function Add(): JSX.Element {

    const [jobs, setJobs] = useState<Job[]>([])

    const { register, handleSubmit, formState } = useForm<Draft>()

    const navigate = useNavigate()



    useEffect(() => {
        (async () => {
            try {
                const jobs = await jobsService.getAll()
                setJobs(jobs)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    async function submit(draft: Draft) {
        try {
            await employeesService.add(draft)
            alert('added employee')
            navigate('/list')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='Add'>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='first name' {...register('firstName', {
                    required: {
                        value: true,
                        message: 'firstName is a must'
                    }
                })} />
                <span className='error'>{formState.errors.firstName?.message}</span>

                <input placeholder='last name' {...register('lastName', {
                    required: {
                        value: true,
                        message: 'price is a must'
                    }
                })} />
                <span className='error'>{formState.errors.lastName?.message}</span>

                <select defaultValue={''} {...register('jobId', {
                    required: {
                        value: true,
                        message: 'job is a must'
                    }
                })}>
                    <option value="" disabled>please select job...</option>
                    {jobs.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                </select>
                <span className='error'>{formState.errors.jobId?.message}</span>

                <label>employment date</label>
                <input type="datetime-local"  {...register('employmentDate', {
                    required: {
                        value: true,
                        message: 'employment date is a must'
                    }
                })} />
                <span className='error'>{formState.errors.employmentDate?.message}</span>

                <label>address</label>
                <input placeholder='address' {...register('address', {
                    required: {
                        value: true,
                        message: 'address is a must'
                    }
                })} />
                <span className='error'>{formState.errors.address?.message}</span>

                <button>Add employee</button>
            </form>
        </div>
    )
}