import axios from "axios";
import styles from "../Css/Courses.module.css";
import { useEffect, useState } from "react";
import { CourseSidebar } from "../Components/CourseSidebar";
import { CourseCard } from "../Components/CourseCard";

export const Courses = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filters, setFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleFilters = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((item) => item !== filter));
    } else {
      setFilters([...filters, filter]);
    }
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Fetching Data
  const fetchData = async () => {
    try {
      setIsLoading(true);
      let url = "http://localhost:8080/courses";
      const params = { page: currentPage, limit: 10 };

      if (sort) {
        params.sort = sort;
      }

      if (filters.length > 0) {
        params.filters = filters;
      }

      if (search) {
        params.search = search;
      }

      const response = await axios.get(url, { params });
      //console.log(response)
      console.log(response.data.courses);
      // setCourses(response.data);
      setCourses(response.data.courses);
      setTotalPages(response.data.totalPages);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, sort, filters, search]);

  return (
    <div className={styles.course_page}>
      {/* Searchbar */}
      <div className={styles.searchbar}>
        <input
          type="text"
          value={search}
          placeholder="Search for courses..."
          onChange={handleSearch}
        />
      </div>

      {/* Sidebar */}
      <div className={styles.course_container}>
        <div className={styles.sidebar}>
          <CourseSidebar
            handleFilters={handleFilters}
            handleSort={handleSort}
          />
        </div>

        {/* Course-List */}
        <div className={styles.course_list}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            courses.length > 0 &&
            courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))
          )}
        </div>
      </div>

      {/* PAGINATION */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
