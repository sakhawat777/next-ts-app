import React, { useEffect } from 'react';

const Blogs = () => {
  useEffect(() => {
    fetch('/api/hello')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])
    return (
        <div>
           <h1>Hello</h1> 
        </div>
    );
};

export default Blogs;