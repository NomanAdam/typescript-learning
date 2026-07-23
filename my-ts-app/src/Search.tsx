import { useState } from "react";

export default function Search() {
 const [search, setSearch] = useState<string>("");
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value);
 };
 return <input type="text" value={search} onChange={handleChange} />;
}
