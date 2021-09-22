export class Job {
  constructor(jobData) {
    this.id = jobData.id
    this.jobTitle = jobData.jobTitle
    this.rate = jobData.rate
    this.description = jobData.description
    this.company = jobData.company
    this.hours = jobData.hours
  }
}
