"use client";

import JobItem from './JobItem';

type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    date_posted: string;
    job_link: string;
};

const JobList = ({ jobs }: { jobs: Job[] }) => {
    return (
        <div>
        {jobs.map((job) => (
            <JobItem key={job.id} job={job} />
        ))}
        </div> 
    );
};

export default JobList;
