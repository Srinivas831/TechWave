export const CourseSidebar = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <h3>Filter By Category</h3>
      <div>
        <input type="checkbox" value={"React"} />
        <label>React</label>
      </div>
      <div>
        <input type="checkbox" value={"JavaScript"} />
        <label>JavaScript</label>
      </div>
      <div>
        <input type="checkbox" value={"Angular"} />
        <label>Angular</label>
      </div>
      <div>
        <input type="checkbox" value={"HTML/CSSs"} />
        <label>HTML/CSS</label>
      </div>
      <div>
        <input type="checkbox" value={"Redux"} />
        <label>Redux</label>
      </div>
      <div>
        <input type="checkbox" value={"TypeScript"} />
        <label>TypeScript</label>
      </div>
      <div>
        <input type="checkbox" value={"ASP.NET Core"} />
        <label>ASP.NET Core</label>
      </div>

      <h3>Sort By Price</h3>
      <div>
        <div>
          <input type="radio" name="order" value={"asc"} />
          <label>Low to High</label>
          <br />
          <input type="radio" name="order" value={"desc"} />
          <label>High to Low</label>
          <br />
          <input type="radio" name="order" value={""} />
          <label>Reset</label>
        </div>
      </div>
    </div>
  );
};
