import ConceptItem from "./ConceptItem";

const Concepts = ({ concepts }) => {
  return (
    <div id="concepts">
      <ConceptItem concept={concepts[0]}></ConceptItem>
      <ConceptItem concept={concepts[1]}></ConceptItem>
      <ConceptItem concept={concepts[2]}></ConceptItem>
    </div>
  );
};

export default Concepts;
