import { useState } from "react";
type User = {
 id: number;
};
export default function User() {
 const [user, setUser] = useState<User>();

 return <div></div>;
}
