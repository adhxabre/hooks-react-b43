import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function DetailUser() {
  const [data, setData] = useState(null);

  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    return console.log(data);
  }, []);

  return (
    <Container className="text-center">
      <h1>Image profile punya lu cuy!</h1>
      <h2>{data?.title}</h2>
      <h3>{params.id}</h3>
      <img src={data?.thumbnailUrl} alt={data?.title} />
    </Container>
  );
}
