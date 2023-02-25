import React from "react";
import "./search-box-styles.css";

const SearchBox = ({ className, placeHolder, onChangeHandler }) => (
  <div>
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeHolder}
      onChange={onChangeHandler}
    />
  </div>
);

// class SearchBox extends React.Component {
//   render() {
//     return (
//       <div>
//         <input
//           className={`search-box ${this.props.className}`}
//           type="search"
//           placeholder={this.props.placeHolder}
//           onChange={this.props.onChangeHandler}
//         />
//       </div>
//     );
//   }
// }
export default SearchBox;
