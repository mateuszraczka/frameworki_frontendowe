import { useParams } from "react-router-dom";
import { data } from "../data/module-data";
import PersonalInfo from "../components/PersonalInfo";

function Lab2() {
  const { id } = useParams();

  let errorMessage = "";
  const personData = data[id];

  if (personData == null) {
    errorMessage = "Nie znaleziono osoby o tym identyfikatorze";
  } else if (personData?.id == null) {
    errorMessage = "Brak identyfikatora osoby";
  }

  return (
    <main>
      <div className=" d-flex justify-content-center">
        {errorMessage != "" ? (
          <h2>{errorMessage}</h2>
        ) : (
          <PersonalInfo
            id={personData.id}
            eyes={personData.eyes}
            birth={personData.birth}
            name={personData.name}
          ></PersonalInfo>
        )}
      </div>
    </main>
  );
}

export default Lab2;
