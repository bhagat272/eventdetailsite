import React, { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PlaceSharpIcon from "@mui/icons-material/PlaceSharp";
import moment from "moment";

const Navbar = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [record, setrecord] = useState([]);
  const [record2, setrecord2] = useState([]);
  const [loading, setLoading] = useState(true);

  const getConvertedDate = (dateString) => {
    dateString = dateString?.replace("T00:00:00.000Z", "");
    return moment(dateString)?.format("MMMM DD, YYYY");
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
    )
      .then((res) => res.json())
      .then((data) => {
        setrecord(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    fetch(
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming"
    )
      .then((res) => res.json())
      .then((data) => {
        setrecord2(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <MDBContainer fluid>
      <MDBRow className="navbar bg-body-tertiary">
        <MDBCol>
          <a className="navbar-brand text-success" href="#">
            <b>BookUsNow</b>
          </a>
        </MDBCol>
        <MDBCol size="auto">
          <Button
            variant="contained"
            color="primary"
            className="bg-dark me-3"
            onClick={() => setShowDiv(!showDiv)}
          >
            <svg
              className="me-2"
              style={{ fill: "white" }}
              color="primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path
                color="primary"
                d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"
              ></path>
            </svg>{" "}
            Categories
          </Button>
        </MDBCol>
        <MDBCol>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn" type="submit">
              <SearchIcon />
            </button>
          </form>
        </MDBCol>
        <MDBCol size="auto">
          <Button variant="outline-danger" className="ms-2">
            <FavoriteIcon style={{ fill: "red" }} /> Favorites
          </Button>
          <Button variant="outline-primary" className="ms-2">
            Sign In
          </Button>
        </MDBCol>
      </MDBRow>
      {loading ? (
        <div
          style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
        >
          <CircularProgress />
        </div>
      ) : (
        <React.Fragment>
          {showDiv && (
            <MDBRow className="cate row ms-2 mt-2 text-secondary">
              <MDBCol size="auto">
                <p className="text-secondary">
                  <PlaceSharpIcon style={{ height: "28px", paddingBottom: "4px" }} /> Mumbai,
                  India {">"}
                </p>
              </MDBCol>
              <MDBCol size="auto">
                <p>Live shows</p>
              </MDBCol>
              <MDBCol size="auto">
                <p>Streams</p>
              </MDBCol>
              <MDBCol size="auto">
                <p>Movies</p>
              </MDBCol>
              <MDBCol size="auto">
                <p>Plays</p>
              </MDBCol>
              <MDBCol size="auto">
                <p>Events</p>
              </MDBCol>
              <MDBCol size="auto">
                <p>Sports</p>
              </MDBCol>
              <MDBCol size="auto">
                <p>Activities</p>
              </MDBCol>
            </MDBRow>
          )}
          <div className="banner">
            <div
              className="bgg"
              style={{
                position: "relative",
                top: "9rem",
                display: "flex",
                flexDirection: "column",
                color: "wheat",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: "4rem" }}> Discover Exciting Events Happening </h1>
              <h1 style={{ fontSize: "4rem" }}> Near You - Stay Tuned for Updates! </h1>
            </div>
          </div>
          <div className="recommendations">
            <div className="recommendations-text-container">
              <div className="recommended-shows-text">Recommended Shows</div>
              <div> <u>See all</u> </div>
            </div>
            <div className="recommendations-card-container" style={{ color: "whitesmoke" }}>
              {record?.events?.map((val, i) => (
                <div className="recommendations-card" key={i}>
                  <img src="/media/Rec.svg" />
                  <div style={{ width: "100%", height: "100%" }}>
                    <div className="recommendations-details-container">
                      <div className="space-between">
                        <div className="truncate-text" style={{ font: "15px", fontWeight: "600", width: "50%" }} > {val?.eventName} </div>
                        <div className="truncate-text" style={{ fontSize: "12px", width: "50%", textAlign: "right", }} > {getConvertedDate(val?.date)} </div>
                      </div>
                      <div className="space-between">
                        <div className="truncate-text" style={{ font: "15px", fontWeight: "600", width: "50%" }} > {val?.cityName} </div>
                        <div className="truncate-text" style={{ fontSize: "12px", width: "50", textAlign: "right", }} > {val?.weather}&nbsp;{" |"}&nbsp; {(Number(val?.distanceKm) / 100).toFixed(2)} </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="upcoming mt-5">
            <div className="upcoming-text-container " >
              <div className="upcoming-shows-text" style={{ color: "black", display: "flex", justifyContent: "space-between", paddingLeft: "6rem", paddingRight: "6rem" }}>
                <p style={{ fontSize: "20px", fontWeight: "700" }}>Upcoming events <ArrowRightAltIcon style={{ fontSize: "3rem" }} /> </p>
                <div className="text-all" style={{ fontWeight: "500" }}> <u>See all</u> </div>
              </div>
            </div>
            <div className="upcoming-card-container" >
              {record2?.events?.map((val, i) => (
                <div style={{ border: "1px solid #B0BABF", borderRadius: "12px 12px 12px ", padding: "11px" }} key={i}>
                  <div style={{ position: "relative" }}>
                    <img src="/media/upcoming.svg" />
                    <div className="upcoming-date" > {getConvertedDate(val?.date)} </div>
                  </div>
                  <div style={{ width: "100%", height: "100%" }}>
                    <div className="upcoming-details-container">
                      <div >
                        <div className="truncate-text" style={{ font: "15px", fontWeight: "600", width: "65%" }} > {val?.eventName} </div>
                      </div>
                      <div className="space-between">
                        <div className="truncate-text" style={{ font: "15px", fontWeight: "600", width: "50%" }} > {val?.cityName} </div>
                        <div className="truncate-tex" style={{ fontSize: "12px", width: "50", textAlign: "right", }} > {val?.weather}&nbsp;{" |"}&nbsp; {(Number(val?.distanceKm) / 100).toFixed(2)} </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      )}
    </MDBContainer>
  );
};

export default Navbar;
