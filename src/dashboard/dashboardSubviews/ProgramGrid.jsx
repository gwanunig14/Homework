import React from "react";
import Grid from "@material-ui/core/Grid";
import Program from "./Program";
import "./ProgramGrid.css";

class ProgramGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: props.programs,
      moreInfo: false
    };
    this.moreInfoSelected = this.moreInfoSelected.bind(this);
  }

  moreInfoSelected() {
    this.setState({
      moreInfo: !this.state.moreInfo
    });
  }

  render() {
    return (
      <div className="programs">
        <Grid container>
          {this.state.programs
            ? this.state.programs.map(program => {
                if (program.ProgramID < 103) {
                  return (
                    <Program
                      data={program}
                      extension={this.state.moreInfo}
                      moreInfoSelected={this.moreInfoSelected}
                    />
                  );
                }
              })
            : null}
        </Grid>
      </div>
    );
  }
}

export default ProgramGrid;
