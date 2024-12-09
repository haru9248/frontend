import { useState, useEffect } from 'react';

interface Job {
    title: string;
    salary: string;
    category: string;
}

const JobList = ()=>{
    const [ jobs, setJobs ] = useState<Job[]>([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/jobs').then((response)=>response.json()).then((data)=>setJobs(data)).catch((error)=>console.error('Error fetching jobs:', error));
    }, []);

    return(
        <div>
            <h1>求人一覧</h1>
            <ul>
                {jobs.map((job)=>(
                    <li key={job.category}>
                        <h2>{job.title}</h2>
                        <p>{job.salary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobList;