interface SortableTableProps {
  headings: string[];
}

export const SortableTable = ({ headings }: SortableTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading) => (
            <th>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>15.12.2021</td>
          <td>Bremen</td>
          <td>2</td>
          <td>456 km</td>
        </tr>
        <tr>
          <td>16.12.2002</td>
          <td>Leipzig</td>
          <td>6</td>
          <td>120 km</td>
        </tr>
      </tbody>
    </table>
  );
};
