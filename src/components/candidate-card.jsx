import React, { Component } from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import "./candidate-card.scss";

class CandidateCard extends Component {
  constructor(props) {
    super(props);
    this.languages = Object.keys(props.platform);
    this.state = { currentLanguage: "en", otherLanguage: "fr" };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage() {
    const currentIndex = this.languages.indexOf(this.state.currentLanguage);
    this.setState({
      currentLanguage: this.languages[(currentIndex + 1) % 2],
      otherLanguage: this.languages[currentIndex]
    });
  }

  render() {
    const { name, platform } = this.props;
    return (
      <Card style={{ margin: "8px" }}>
        <CardContent>
          <div style={{ display: "flex" }}>
            <Typography
              variant="body1"
              color="textSecondary"
              gutterBottom
              style={{ flexGrow: 1, paddingTop: "8px" }}
            >
              {name}
            </Typography>
            {this.languages.length > 1 && platform[this.languages[1]] && (
              <Button onClick={this.changeLanguage}>
                {this.state.otherLanguage}
              </Button>
            )}
          </div>
          <Typography
            component="div"
            gutterBottom
            dangerouslySetInnerHTML={{
              __html: platform[this.state.currentLanguage]
            }}
          />
        </CardContent>
      </Card>
    );
  }
}

export default CandidateCard;
