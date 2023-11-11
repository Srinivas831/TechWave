import axios from "axios";
import styles from "../Css/Courses.module.css";
import { useEffect, useState } from "react";
import { CourseSidebar } from "../Components/CourseSidebar";
import { CourseCard } from "../Components/CourseCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { slider } from "../SliderData/slider";
import { url } from "../api";

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
      let urll = `${url}/courses`;
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

      const response = await axios.get(urll, { params });
      console.log(response);
      //console.log(response.data.courses);
      //setCourses(response.data);
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

      {/* Slider */}
      <div>
        <h2 style={{ marginBottom: "1.5em" }}>Recommended Courses For You</h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            760: {
              slidesPerView: 3,
            },
          }}
        >
          {slider?.map((item) => {
            return (
              <SwiperSlide key={item.id} className={styles.slider}>
                <img src={item.image} />
                <p style={{ fontWeight: "bolder" }}>{item.title}</p>
                <p>{item.description.slice(0, 70)}...</p>
                <h4>₹{item.original_price}</h4>
                <h3>₹{item.discounted_price}</h3>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <br />
      <br />

      <h2
        id="results"
        style={{
          textAlign: "center",
          marginBottom: "1.5em",
          fontSize: "1.8em",
        }}
      >
        Available Courses
      </h2>

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
            <div className={styles.loaderdiv}>
              {/* <span className={styles.loader}></span> */}
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}> <img src="https://media.tenor.com/JBgYqrobdxsAAAAi/loading.gif" alt="Girl in a jacket" width="150" height="150" style={{textAlign:"center"}}/></div>;
            </div>
          ) : (
            courses.length > 0 &&
            courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))
          )}
        </div>
      </div>

      {/* PAGINATION */}
      <div className={styles.pagelist}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => {
              handlePageChange(index + 1);
              window.location.href = "#results";
            }}
            disabled={currentPage === index + 1}
            style={{
              fontWeight: currentPage === index + 1 && "bolder",
              borderBottom:
                currentPage === index + 1 ? "2px solid #0056d2" : "none",
              color: currentPage === index + 1 ? "#0056d2" : "black",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
