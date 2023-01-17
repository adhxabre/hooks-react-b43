import DetailAbout from "../components/DetailAbout";

export default function About() {
  return (
    <>
      <h1>This is About</h1>
      <hr />
      <DetailAbout name="Abel" age={1} isMarried={false} />
    </>
  );
}
