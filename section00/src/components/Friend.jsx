const Friend = ({ buddies, onUpdate, onDelete }) => {
  return (
    <div>
      <h3>친구 리스트</h3>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>사는곳</th>
            <th>생일</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {buddies.map((buddy) => (
            <tr key={buddy.id}>
              <td>{buddy.id}</td>
              <td>{buddy.name}</td>
              <td>{buddy.location}</td>
              <td>{buddy.date}</td>
              <td>
                <button onClick={() => onDelete(buddy.id)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Friend;