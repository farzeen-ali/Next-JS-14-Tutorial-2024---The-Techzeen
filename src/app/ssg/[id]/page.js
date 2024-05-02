import getData from "../../../../services/getData";

const UserID = async (props) => {
    const data = getData();
    const users = await data;
    // console.log(props.params.id)
    const userId = props.params.id;
    const userInfo = users[userId - 1]
  return (
    <>
     <h2>User Info</h2>
     <h3>ID: {userInfo.id} </h3> 
     <h3>USERNAME: {userInfo.username} </h3> 
     <h3>EMAIL: {userInfo.email}</h3> 
    </>
  );
}

export default UserID;

export const generateStaticParams = async () => {
    const data = getData();
    const users = await data;
    return users.map(user=>({
        id: user.id.toString()
    }))
}