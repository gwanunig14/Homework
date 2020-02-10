import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import lightPencil from "../../assets/pencil_icon_light.png";
import darkPencil from "../../assets/pencil_icon_dark.png";
import barGraph from "../../assets/graph.png";
import singleLineGraph from "../../assets/spark_line.png";
import groupLineGraph from "../../assets/spark_lines.png";
import "./Program.css";
import NumberFormat from "react-number-format";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pencil: lightPencil
    };
  }

  render() {
    return (
      <div className="programCard">
        <div>
          <Container fluid={true}>
            <Row>
              <Col className="program">
                <div>{this.props.data.Name}</div>
              </Col>
              <Col className="pencilCol">
                <button className="pencilButton">
                  <img
                    src={this.state.pencil}
                    alt=""
                    className="pencil"
                    onMouseEnter={() => {
                      this.setState({
                        pencil: darkPencil
                      });
                    }}
                    onMouseLeave={() => this.setState({ pencil: lightPencil })}
                  ></img>
                </button>
              </Col>
            </Row>
          </Container>
          <div className="salesHeader">
            <div className="sales programColor">Sales by Month</div>
          </div>
          <img src={barGraph} alt="" className="barChart"></img>
          <Container fluid={true} className="monthlySales programColor">
            <Row>
              <Col className="firstCol">
                <div>
                  <div className="totalSales programColor">Total Monthly</div>
                  <div className="sales programColor">Sales</div>
                </div>
              </Col>
              <Col className="secondCol">
                <div className="colHead1 programColor">Current</div>
                <div className="monthlyEarnings programColor">
                  <NumberFormat
                    value={this.props.data.TotalMonthlySales}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </div>
              </Col>
              <Col className="thirdCol">
                <div className="colHead2 programColor">1 - Year</div>
                <img src={singleLineGraph} alt="" className="lineChart"></img>
              </Col>
            </Row>
          </Container>
          {this.props.extension ? (
            <Container fluid={true}>
              <Row>
                <Col className="firstCol">
                  <div className="priceNameHeader programColor">Price Name</div>
                </Col>
                <Col className="secondCol">
                  <div className="colHead1 programColor">Current</div>
                </Col>
                <Col className="thirdCol">
                  <div className="colHead2 programColor">1 - Year</div>
                </Col>
              </Row>
              <Row>
                <Col className="firstAndSecondCol">
                  <Container fluid={true}>
                    {this.props.data.priceData.map(pricing => (
                      <Row>
                        <Col className="firstCol">
                          <div className="pricingName">{pricing.Name}</div>
                          {pricing.ProgramID !== 100 ? (
                            <hr className="weirdLine" />
                          ) : null}
                        </Col>
                        <Col className="secondCol">
                          <div className="colHead3 programColor">
                            <NumberFormat
                              value={pricing.Sales}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"$"}
                            />
                          </div>
                        </Col>
                      </Row>
                    ))}
                  </Container>
                </Col>
                <Col className="thirdCol">
                  <img src={groupLineGraph} alt="" className="lineChart"></img>
                </Col>
              </Row>
            </Container>
          ) : null}
          <div
            className="moreButton programColor"
            onClick={this.props.moreInfoSelected}
          >
            {this.props.extension ? "less" : "more"}
          </div>
        </div>
      </div>
    );
  }
}

export default Program;
