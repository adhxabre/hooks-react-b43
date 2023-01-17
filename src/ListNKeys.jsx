let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ListKeys() {
  return (
    <>
      {number.map((data, index) => (
        <li key={index}>{data}</li>
      ))}
    </>
  );
}
