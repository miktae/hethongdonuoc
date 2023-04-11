import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div>
          <span className="navbar-brand">
          <a href="./" className="navbar-link">PHẦN MỀM QUẢN LÝ ĐỒNG HỒ NƯỚC ĐIỆN TỬ </a>
        </span>
        <p>
          Tên đề tài/ đề án: "Nghiên cứu, thiết kế và chế tạo đồng hồ 
          đo lưu lượng nước điện tử"
        </p>
        </div>
      </nav>
    );
  };

export default Navbar