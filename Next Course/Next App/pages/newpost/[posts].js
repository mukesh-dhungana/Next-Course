import React from "react";
import useSWR from 'swr';

function Posts(props) {
  let { data, error } = useSWR(
    "https://randomuser.me/api/",
    (url) => fetch(url).then((res) => res.json())
  );
  if (error) return <h1>Error</h1>;

  if (!data) return <h1>No data found</h1>;

  return (
    <div>
      <span>This is root post component</span>
      <h1>Hello {data.results[0].name.first}</h1>
    </div>
  );
}

export default Posts;

// export const getServerSideProps = async (context) => {
//   const res = await fetch(`http://localhost:3000/api/hello`);
//   const data = await res.json();
//   //console.log(context);
//   if (!data.user) {
//     return {
//       redirect: {
//         destination: "https://github.com/2",
//         permanent: true,
//         //statusCode:302
//       },
//     };
//   }
//   //.res.statusCode = 404;
//   context.res.write(JSON.stringify({ users: "Heloo" }));
//   context.res.end();

//   return {
//     props: { user: data.user }, // will be passed to the page component as props
//   };
// };
