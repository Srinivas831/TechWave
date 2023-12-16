import { Checkbox, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import styles from "../Css/Courses.module.css";

export const CourseSidebar = ({ handleFilters, handleSort }) => (
  <div className={styles.sidebar_container}>
    {/* Filter */}
    <div className={styles.filter}>
      <h3 style={{ fontSize: "1.2em", fontWeight: "bolder" }}>Filter By Category</h3>
      <Stack>
        <Checkbox value={"React"} onChange={() => handleFilters("React")}>React</Checkbox>
        <Checkbox value={"JavaScript"} onChange={() => handleFilters("JavaScript")}>JavaScript</Checkbox>
        <Checkbox value={"Angular"} onChange={() => handleFilters("Angular")}>Angular</Checkbox>
        <Checkbox value={"HTML/CSS"} onChange={() => handleFilters("HTML/CSS")}>HTML/CSS</Checkbox>
        <Checkbox value={"Redux"} onChange={() => handleFilters("Redux")}>Redux</Checkbox>
        <Checkbox value={"TypeScript"} onChange={() => handleFilters("TypeScript")}>TypeScript</Checkbox>
        <Checkbox value={"ASP.NET Core"} onChange={() => handleFilters("ASP.NET Core")}>ASP.NET Core</Checkbox>
      </Stack>
    </div>

    {/* sort */}
    <div>
      <h3 style={{ fontSize: "1.2em", fontWeight: "bolder" }}>Sort By Price</h3>
      <div className={styles.sort} onChange={handleSort}>
        <RadioGroup>
          <Stack>
            <Radio size="md" name="order" value="asc" >Low to High</Radio>
            <Radio size="md" name="order" value="desc" >High to Low</Radio>
            <Radio size="md" name="order" value="" >Reset</Radio>
          </Stack>
        </RadioGroup>
      </div>
    </div>
  </div>
);

