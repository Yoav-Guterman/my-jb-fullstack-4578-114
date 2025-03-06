import { ChangeEvent, useEffect, useState } from 'react'
import './List.css'
import Employee from '../../../models/employee/employee'
import Job from '../../../models/job/job'
import jobsService from '../../../services/jobs'
import employeesService from '../../../services/employees'
import Card from '../card/Card'

export default function List(): JSX.Element {

    const [employees, setEmployees] = useState<Employee[]>([])
    const [jobs, setJobs] = useState<Job[]>([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        (async () => {
            try {
                const jobsFromService = await jobsService.getAll()
                setJobs(jobsFromService)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    async function jobChanged(event: ChangeEvent<HTMLSelectElement>) {
        const jobId = event.currentTarget.value
        const currentJob = await employeesService.getPerJob(jobId)
        setEmployees(currentJob)
    }

    function removeEmployee(id: string) {
        setEmployees(employees.filter(p => p.id !== id))
    }

    // Handle search input changes
    function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value)
    }

    // Filter employees based on search term
    const filteredEmployees = employees.filter(employee =>
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className='List'>
            <div className='searchAndFilterContainer'>
                <div className='jobsSelection'>
                    <select defaultValue="" onChange={jobChanged}>
                        <option value="" disabled>please select category...</option>
                        {jobs.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                    </select>
                </div>
                <div className='searchBox'>
                    <input
                        type="text"
                        placeholder="Search employees..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <div className="CardContainer">
                {filteredEmployees.map(e => <Card key={e.id} employee={e} removeEmployee={removeEmployee} />)}
            </div>
        </div>
    )
}