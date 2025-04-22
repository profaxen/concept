import React from 'react';

function FindJobs() {
  // Dummy job data (we’ll replace this with real data later)
  const jobs = [
    {
      id: 1,
      title: 'Construction Worker',
      description: 'Need 5 workers for site work in Mumbai.',
      location: 'Mumbai',
      payment: '₹700/day',
    },
    {
      id: 2,
      title: 'Electrician',
      description: 'Experienced electrician needed for house wiring.',
      location: 'Thane',
      payment: '₹1000/day',
    },
  ];

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h3>{job.title}</h3>
          <p><strong>Description:</strong> {job.description}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Payment:</strong> {job.payment}</p>
          <button>Apply Now</button>
        </div>
      ))}
    </div>
  );
}

export default FindJobs;