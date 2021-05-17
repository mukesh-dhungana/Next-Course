import Image from "next/image";

const Profile = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map(user => (
        <div className="profile-wrapper">
        <div className="header">
          <h3>
            Full Name: <span>{user?.name}</span>
          </h3>
          <h4>
            UserName: <span>{user?.login}</span>{" "}
          </h4>
        </div>

        <div className="body">
          <div className="body-info">
            <p>
              <span>{user?.bio}</span>{" "}
            </p>
            <p className="website">
              <span>{user?.blog}</span>
            </p>
          </div>
          <div className="img-container">
            <Image src={user?.avatar_url} width={200} height={200} alt="Hello" />
          </div>
        </div>
      </div>
      ))}
    </>
  );
};

export default Profile;

// export const getServerSideProps = async () => {
//   const res = await fetch("https://api.github.com/users/beezay");
//   const data = await res.json();

//   return {
//     props: { data },
//   };
// };

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();

  return {
    props: { data },
  };
};
