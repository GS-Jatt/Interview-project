import { format } from "date-fns";

export default function Row({data}){
    return (
      <tr>
        <th>{data.id}</th>
        <th>{`${format(data.sEDate[0], "MM/dd/yyyy")}-${format(
          data.sEDate[1],
          "MM/dd/yyyy"
        )}`}</th>
        <th>{data.fullYear}</th>
        <th>{`${format(data.excludedDay[0], "MM/dd/yyyy")}-${format(
          data.excludedDay[1],
          "MM/dd/yyyy"
        )}`}</th>

        <th>{data.numberOfDays}</th>
        <th>{data.leadCount}</th>
        <th>{data.drr}</th>
        <th>{format(new Date(), "MM/dd/yyyy")}</th>
      </tr>
    );
    
}
