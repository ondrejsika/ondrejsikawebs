import React from "react";
import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/courses/white/ansible.svg";

const Page = props => (
  <CourseDD
    site={props.site}
    course_id="ansible"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    show_sessions={true}
  />
);

export default Page;