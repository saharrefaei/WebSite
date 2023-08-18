import { Heading } from "../assets/Styles/styled";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ServerError from "./Page500";
export default function MainPage(props: any) {
  const par1 = "value1";
  const par2 = "value2";

  return (
    <div>
      <Heading style={{ textAlign: "center" }}>GET LIST DATA</Heading>

      <Button
        onClick={async () => {
          // use FETCH API to GET data from server
          try {
            const response = await fetch(
              `http://sendto_api.com/getsomething?parameter1=${par1}&parameter2=${par2}`,
              { method: "GET" }
            );
            console.log(response);
            debugger;
          } catch (error) {
            console.error(error);
          }
        }}
      >
        GET DATA FROM SERVER
      </Button>

      <div>check the code</div>
    </div>
  );
}