import React from "react";
import MenuItem from "../menuitem/MenuItem";
import { connect } from "react-redux";
import { selectDirectorySections } from "../redux/directory/DirectorySelectors";
import { createStructuredSelector } from "reselect";
import "./DirectoryStyles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
