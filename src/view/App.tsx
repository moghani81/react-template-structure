import { useEffect, useState } from "react";
import { UserService } from "../core";
import type { GetUserResponseModel } from "../core/auth/user/domain";
import "./App.css";

function App() {
  const [userData, setUserData] = useState<GetUserResponseModel>();

  useEffect(() => {
    const userService = new UserService();
    async function getData() {
      try {
        const result = await userService.get({ id: 1 });
        setUserData(result);
      } catch (error) {
        alert(error);
      }
    }
    getData();
  }, []);

  return <div>{userData?.company.name}</div>;
}

export default App;
