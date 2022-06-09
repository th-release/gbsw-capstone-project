import React from 'react';
import useSWR from "swr";
import fetcher from "../utils/fetcher";

const Table = () => {
  const {
    data,
    error
  } = useSWR('./api/getArduinoValue', fetcher)

  console.log(data)

  return (
    <div>
      <table style={{width: '100%', marginTop: '2rem', maxWidth: '70rem'}}>
        <thead>
        <tr>
          <th>습도</th>
          <th>온도</th>
          <th>체감온도</th>
          <th>시간</th>
        </tr>
        </thead>
       <tbody>
        {Object.values(data.values).map((log: any) => (
          <tr key={1}>
            <td>{log.humi}</td>
            <td>{log.temp}</td>
            <td>{log.hic}</td>
            <td>{log.date}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;