import React from 'react';

function Row({ item }) {
  const { amp, uid, totalTime, createdAt } = item;
  const wats = ((amp * 230) / 10).toFixed(0);
  const mins = Math.ceil(totalTime / 60000);
  return (
    <tr>
      <td>{`${new Date(createdAt).toLocaleDateString()} ${new Date(
        createdAt
      ).toLocaleTimeString()}`}</td>
      <td>{uid}</td>
      <td>{wats} W</td>
      <td>{mins} Phút.</td>
      <td>
        {Number(((wats * mins * 3117.4) / 60).toFixed(0)).toLocaleString(
          'de-DE'
        )}{' '}
        Đồng.
      </td>
    </tr>
  );
}

export default Row;
