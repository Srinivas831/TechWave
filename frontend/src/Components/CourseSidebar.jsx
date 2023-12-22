import { Checkbox, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import styles from "../Css/Courses.module.css";

export const CourseSidebar = ({ handleFilters, handleSort }) => (
  <div className={styles.sidebar_container}>
    {/* Filter */}
    <div className={styles.filter}>
      <h3 style={{ fontSize: "1.2em", fontWeight: "bolder" }}>
        Filter By Category
      </h3>
      <div>
        <input
          type="checkbox"
          value={"React"}
          onChange={() => handleFilters("React")}
        />
        <label>React</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"JavaScript"}
          onChange={() => handleFilters("JavaScript")}
        />
        <label>JavaScript</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Angular"}
          onChange={() => handleFilters("Angular")}
        />
        <label>Angular</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"HTML/CSS"}
          onChange={() => handleFilters("HTML/CSS")}
        />
        <label>HTML/CSS</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Redux"}
          onChange={() => handleFilters("Redux")}
        />
        <label>Redux</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"TypeScript"}
          onChange={() => handleFilters("TypeScript")}
        />
        <label>TypeScript</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"ASP.NET Core"}
          onChange={() => handleFilters("ASP.NET Core")}
        />
        <label>ASP.NET Core</label>
      </div>
    </div>

    {/* sort */}
    <div>
      <h3 style={{ fontSize: "1.2em", fontWeight: "bolder" }}>Sort By Price</h3>
      <div className={styles.sort} onChange={handleSort}>
        <div>
          <input type="radio" name="order" value={"asc"} />
          <label>Low to High</label>
        </div>

        <div>
          <input type="radio" name="order" value={"desc"} />
          <label>High to Low</label>
        </div>

        <div>
          <input type="radio" name="order" value={""} />
          <label>Reset</label>
        </div>
      </div>
    </div>
  </div>
);
