function Sort({ limit, setLimit, filterOption, setFilterOption }) {
  return (
    <>
      <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </label>

      <label>
        게시물 조회 조건:&nbsp;
        <select value={filterOption} onChange={({ target: { value } }) => setFilterOption(value)}>
          <option value="created">생성순</option>
          <option value="updated">업데이트순</option>
          <option value="comments">댓글순</option>
        </select>
      </label>
    </>
  );
}

export default Sort;
