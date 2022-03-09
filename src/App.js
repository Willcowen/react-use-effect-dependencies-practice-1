import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)

  console.log({ data });

  useEffect(() => {
   if (dataType === '') {
     return
   }
    fetch(`https://swapi.dev/api/${dataType}/`)
      .then(res => res.json())
      .then(json => {
        setLoading(true);
        setData(json)
    })
  }, [dataType] ) 

  return (
    <div>
      <SelectTypeForm setDataType={setDataType}/>
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
