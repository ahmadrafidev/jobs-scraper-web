"use client";

import Link from 'next/link';

type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    date_posted: string;
    job_link: string;
};

const JobItem = ({ job }: { job: Job }) => {
    return (
        <div>
            <h2>{job.title}</h2>
            <p>{job.company} - {job.location}</p>
            <Link href={`/jobs/${job.id}`}>
                <a>View Details</a>
            </Link>
        </div>
    );
};

export default JobItem;
