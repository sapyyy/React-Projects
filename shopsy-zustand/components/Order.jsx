export function Order({ title, price }) {
  return (
    <li className="flex justify-between">
      <li>{title}</li>
      <li>{price}</li>
    </li>
  );
}
