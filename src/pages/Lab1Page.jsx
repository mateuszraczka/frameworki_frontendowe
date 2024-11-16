import PersonalInfo from "../components/PersonalInfo";
import { data } from "../data/module-data";

function Lab1Page() {
  return (
    <>
      <h1>Laboratorium 1</h1>
      <h3>Lista imion</h3>
      <div className="flex-wrap d-flex gap-2 justify-content-center">
        {data.map((o, i) => (
          <PersonalInfo key={i} {...o}></PersonalInfo>
        ))}
      </div>
    </>
  );
}

export default Lab1Page;
