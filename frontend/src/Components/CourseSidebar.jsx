import styles from "../Css/Courses.module.css";

export const CourseSidebar = ({ handleFilters, handleSort }) => (
  <div className={styles.sidebar_container}>
    {/* Filter */}
    <div className={styles.filter}>
      <h3>Filter By Category</h3>
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
      <h3>Sort By Price</h3>
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

    <div className={styles.checkboxWrapper}>
      <div className={styles.cbx}>
        <div>
          <input type="checkbox" id="cbx-12" name="order" value={"asc"}
            onChange={handleSort} />
          <label for="cbx-12">ASC</label>
        </div>

        <input type="checkbox" id="cbx-34" name="order" value={"desc"}
          onChange={handleSort} />
        <label for="cbx-34">DESC</label>

        <input type="checkbox" id="cbx-56" name="order" value={""}
          onChange={handleSort} />
        <label for="cbx-54">RESET</label>
        {/* <span>Low To High</span> */}
        <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
          <path d="M2 8.36364L6.23077 12L13 2"></path>
        </svg>
      </div>

      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo-12">
            <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
            <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur"></feColorMatrix>
            <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  </div>
);

