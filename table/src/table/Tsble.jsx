import { formatDistanceStrict, getMonth, getYear } from "date-fns";
import { useRef, useState } from "react";
import TableB from "react-bootstrap/Table";
import { DateRangePicker, IconButton, Input } from "rsuite";
import {FiSave} from 'react-icons/fi'
import {FcCancel} from 'react-icons/fc'
import "rsuite/dist/rsuite.min.css";
import Row from "./Row";

function Table() {
  const [sEDate, setSEDate] = useState();
  const [excludedDay, setExcludday] = useState();
  const fullYear = `${getMonth(sEDate?.at(0))},${getYear(sEDate?.at(0))}`;
  const [leadCount, setLeadCount] = useState(0);
  const [drr, setDrr] = useState(0);
  const data=useRef([]);
  const days =
    sEDate &&
    formatDistanceStrict(sEDate?.at(0), sEDate?.at(1), {
      unit: "day",
    }).split(" ")[0];
  const ExcludedDays =
    excludedDay &&
    formatDistanceStrict(excludedDay?.at(0), excludedDay?.at(1), {
      unit: "day",
    }).split(" ")[0];
  
  const numberOfDays = +days - (ExcludedDays? +ExcludedDays : 0);  
  console.log(data.current);

  function clearAll(){
    setSEDate(undefined);
    setExcludday(undefined);
    setLeadCount(0);
    setDrr(0);
  }
  function add(){
    const adddata= {
      id:data.current.length + 1,
      sEDate,
      fullYear,
      excludedDay,
      numberOfDays,
      leadCount,
      drr
    }
    data.current.push(adddata);
    clearAll();
  }
  return (
    <TableB responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Start-End Date</th>
          <th>Month,Year</th>
          <th>Dates Excluded</th>
          <th>Numbers of Days</th>
          <th>Lead Count</th>
          <th>Expected DRR</th>
          <th>Last Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ID</td>
          <td>
            <DateRangePicker
              showOneCalendar
              value={sEDate}
              onChange={(e) => setSEDate(e)}
              placeholder="Select Date Range"
            />
          </td>
          <td>{fullYear !== "NaN,NaN" ? fullYear : ""}</td>
          <td>
            <DateRangePicker
              value={excludedDay}
              showOneCalendar
              onChange={(e) => setExcludday(e)}
              placeholder="Select Dates Excluded"
            />
          </td>
          <td>{!isNaN(numberOfDays) && numberOfDays}</td>
          <td>
            <Input
              type="number"
              value={leadCount}
              onChange={(e) => setLeadCount(+e)}
              style={{ minWidth: "64px", maxWidth: "90px" }}
            />
          </td>
          <td>
            <Input
              type="number"
              value={drr}
              onChange={(e) => setDrr(+e)}
              style={{ minWidth: "64px", maxWidth: "90px" }}
            />
          </td>
          <td style={{ display: "flex", gap: "4px" }}>
            <IconButton
              onClick={() => add()}
              icon={<FiSave size={20} />}
            ></IconButton>{" "}
            <IconButton
              onClick={clearAll}
              icon={<FcCancel size={20} />}
            ></IconButton>{" "}
          </td>
        </tr>
        {data.current.map((item)=><Row key={item.id} data={item}/>)}
      </tbody>
    </TableB>
  );
}

export default Table;
