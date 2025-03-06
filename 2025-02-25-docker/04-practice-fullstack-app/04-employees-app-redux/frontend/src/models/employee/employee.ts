import Job from "../job/job"
import Draft from "./employeeDraft"

export default interface Employee extends Draft {
    id: string
    job: Job
}