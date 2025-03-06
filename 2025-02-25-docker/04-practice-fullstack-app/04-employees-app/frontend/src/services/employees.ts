import axios from 'axios'
import Employee from '../models/employee/employee'
import Draft from '../models/employee/employeeDraft'

class Employees {

    async getPerJob(jobId: string): Promise<Employee[]> {
        const response = await axios<Employee[]>(`${import.meta.env.VITE_REST_SERVER_URL}/employees/${jobId}`)
        return response.data
    }

    async add(draft: Draft): Promise<Employee> {
        const response = await axios.post<Employee>(`${import.meta.env.VITE_REST_SERVER_URL}/employees`, draft)
        const newProduct = response.data
        return newProduct
    }

    async remove(id: string): Promise<boolean> {
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/employees/${id}`)
        const isDeleted = response.data
        return isDeleted
    }
}

const employeesService = new Employees()
export default employeesService