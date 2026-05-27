import axios from "axios";

function User() {
  axios
    .post("https://jsonplaceholder.typicode.com/users", {
      name: "John",
      email: "john@example.com",
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default User