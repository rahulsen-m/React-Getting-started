import React from "react";

class SearchBox extends React.Component {
  render() {
    return (
      <div>
        <input
          className={this.props.className}
          type="search"
          placeholder={this.props.placeHolder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}
export default SearchBox;
