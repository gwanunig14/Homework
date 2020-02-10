import React from "react";
import DashboardHeader from "./DashboardHeader";
import FlexView from "react-flexview";
import plus from "./../assets/plus_icon.png";
import ProgramGrid from "./dashboardSubviews/ProgramGrid";
import fetch from "node-fetch";
import _ from "lodash";
import NumberFormat from "react-number-format";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Dashboard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: [],
      addNewButtonText: "New Program"
    };
    this.addNewProgram = this.addNewProgram.bind(this);
  }

  getPrograms() {
    if (!this.state.programs.length) {
      let programData = [];
      fetch("https://api.myjson.com/bins/5bdb3")
        .then(res => res.json())
        .then(json => {
          programData = json;
          fetch("https://api.myjson.com/bins/47axv")
            .then(res => res.json())
            .then(json => {
              for (let i = 0; i < programData.length; i++) {
                const programPriceData = json.filter(
                  priceData => priceData.ProgramID === programData[i].ProgramID
                );
                programData[i]["priceData"] = programPriceData;
              }
              this.setState({ programs: programData });
            });
        });
    }
  }

  addNewProgram() {
    this.setState({
      addNewButtonText: "Congratulations on adding a new program!"
    });
    setTimeout(() => {
      this.setState({
        addNewButtonText: "New Program"
      });
    }, 3000);
  }

  render() {
    if (!this.state.programs.length) {
      this.getPrograms();
    }

    return (
      <div className={"mainView"}>
        <DashboardHeader />
        <FlexView hAlignContent="left">
          <div>
            <button className={"newProgramButton"} onClick={this.addNewProgram}>
              <img src={plus} alt="" />
            </button>
            <p className="buttonLabel">{this.state.addNewButtonText}</p>
          </div>
          {this.state.programs.length ? (
            <div>
              <ProgramGrid programs={this.state.programs} />
              <Container className="allPrograms">
                <Row>
                  <Col className="firstRow">
                    <div className="firstRowHeader headerColor">
                      All Programs
                    </div>
                  </Col>
                  <Col className="secondRow">
                    <div className="otherHeader headerColor">Monthly Sales</div>
                  </Col>
                  <Col>
                    <div className="otherHeader headerColor">
                      Monthly Attendance
                    </div>
                  </Col>
                </Row>
                <hr className="divider" />
                {this.state.programs.map(program => {
                  if (program.ProgramID >= 103) {
                    return (
                      <div>
                        <Row className="allProgramsRow">
                          <Col className="firstRow">
                            <div className="rowLabel">{program.Name}</div>
                          </Col>
                          <Col className="secondRow">
                            <div>
                              <NumberFormat
                                value={program.TotalMonthlySales}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                decimalScale={2}
                                fixedDecimalScale={true}
                              />
                            </div>
                          </Col>
                          <Col>
                            <FlexView>
                              <div>{program.MonthlyAttendance}</div>
                              <div className="interaction">
                                {program.ProgramID === 104 ? "views" : "visits"}{" "}
                              </div>
                            </FlexView>
                          </Col>
                        </Row>
                        <div className="allProgramsMoreButton">more</div>
                      </div>
                    );
                  }
                })}
              </Container>
            </div>
          ) : null}
        </FlexView>
      </div>
    );
  }
}

export default Dashboard;
