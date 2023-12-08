import { useEffect } from "react";
import * as S from "./styles";
import axios from "axios";
import { useState } from "react";

const getDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate();
  return `${day}/${month}/${year}`;
};

const Main = ({ data, selectedType, selectedWeek, isMobile }) => {
  const [currentDate, setCurrentDate] = useState(getDate());
  const hours = [
    "8:00-9:30",
    "9:45-11:15",
    "11:30-13:00",
    "13:30-15:00",
    "15:15-16:45",
    "17:00-18:30",
    "18:45-20:15",
  ];
  console.log(data, selectedWeek);
  return (
    <S.Main>
      {!isMobile && <img src="/images/logo_utm.png" />}
      <div className="date">
        <p>Today's date: </p>
        <p>{currentDate}</p>
      </div>
      {isMobile ? (
        <S.Mobile>
          <div>
            <p className="header" style={{ color: "#fff" }}>
              Luni
            </p>
            {new Array(7).fill().map((elem, i) => (
              <div className="item">
                <>
                  <p>{hours[i]}</p>
                  {data
                    .filter(
                      (e, index) =>
                        e?.timePeriod === i + 1 && e?.dayOfTheWeek === 1
                    )
                    .filter((elem) => {
                      if (selectedWeek) {
                        return elem;
                      } else {
                        return elem?.isEvenWeek === null;
                      }
                    })[0]?.name ? (
                    <p className="name">
                      {
                        data
                          .filter(
                            (e, index) =>
                              e?.timePeriod === i + 1 && e?.dayOfTheWeek === 1
                          )
                          .filter((elem) => {
                            if (selectedWeek) {
                              return elem;
                            } else {
                              return elem?.isEvenWeek === null;
                            }
                          })[0]?.name
                      }
                    </p>
                  ) : (
                    <p style={{ fontSize: "30px", marginTop: "12px" }}>📖</p>
                  )}
                  {data.filter(
                    (e, index) =>
                      e?.timePeriod === i + 1 && e?.dayOfTheWeek === 1
                  )[0] && (
                    <p className="classes">
                      {selectedType?.value === "Classes"
                        ? data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 1
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.group
                        : data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 1
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.lectureRoom}
                    </p>
                  )}
                  {data.filter(
                    (e, index) =>
                      e?.timePeriod === i + 1 && e?.dayOfTheWeek === 1
                  )[0] && (
                    <p className="teacher">
                      {selectedType?.value === "Teachers"
                        ? data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 1
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.group
                        : data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 1
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.teacher}
                    </p>
                  )}
                </>
              </div>
            ))}
          </div>
          <div>
            <p className="header">Marți</p>
            {new Array(7).fill().map((elem, i) => (
              <div className="item">
                <>
                  <p>{hours[i]}</p>
                  {data
                    .filter(
                      (e, index) =>
                        e?.timePeriod === i + 1 && e?.dayOfTheWeek === 2
                    )
                    .filter((elem) => {
                      if (selectedWeek) {
                        return elem;
                      } else {
                        return elem?.isEvenWeek === null;
                      }
                    })[0]?.name ? (
                    <p className="name">
                      {
                        data
                          .filter(
                            (e, index) =>
                              e?.timePeriod === i + 1 && e?.dayOfTheWeek === 2
                          )
                          .filter((elem) => {
                            if (selectedWeek) {
                              return elem;
                            } else {
                              return elem?.isEvenWeek === null;
                            }
                          })[0]?.name
                      }
                    </p>
                  ) : (
                    <p style={{ fontSize: "30px", marginTop: "12px" }}>📖</p>
                  )}
                  {data.filter(
                    (e, index) =>
                      e?.timePeriod === i + 1 && e?.dayOfTheWeek === 2
                  )[0] && (
                    <p className="classes">
                      {selectedType?.value === "Classes"
                        ? data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 2
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.group
                        : data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 2
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.lectureRoom}
                    </p>
                  )}
                  {data.filter(
                    (e, index) =>
                      e?.timePeriod === i + 1 && e?.dayOfTheWeek === 2
                  )[0] && (
                    <p className="teacher">
                      {selectedType?.value === "Teachers"
                        ? data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 2
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.group
                        : data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 2
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.teacher}
                    </p>
                  )}
                </>
              </div>
            ))}
          </div>
          <div>
            <p className="header">Miercuri</p>
            {new Array(7).fill().map((elem, i) => (
              <div className="item">
                <>
                  <p>{hours[i]}</p>
                  {data
                    .filter(
                      (e, index) =>
                        e?.timePeriod === i + 1 && e?.dayOfTheWeek === 3
                    )
                    .filter((elem) => {
                      if (selectedWeek) {
                        return elem;
                      } else {
                        return elem?.isEvenWeek === null;
                      }
                    })[0]?.name ? (
                    <p className="name">
                      {
                        data
                          .filter(
                            (e, index) =>
                              e?.timePeriod === i + 1 && e?.dayOfTheWeek === 3
                          )
                          .filter((elem) => {
                            if (selectedWeek) {
                              return elem;
                            } else {
                              return elem?.isEvenWeek === null;
                            }
                          })[0]?.name
                      }
                    </p>
                  ) : (
                    <p style={{ fontSize: "30px", marginTop: "12px" }}>📖</p>
                  )}
                  {data.filter(
                    (e, index) =>
                      e?.timePeriod === i + 1 && e?.dayOfTheWeek === 3
                  )[0] && (
                    <p className="classes">
                      {selectedType?.value === "Classes"
                        ? data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 3
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.group
                        : data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 3
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.lectureRoom}
                    </p>
                  )}
                  {data.filter(
                    (e, index) =>
                      e?.timePeriod === i + 1 && e?.dayOfTheWeek === 3
                  )[0] && (
                    <p className="teacher">
                      {selectedType?.value === "Teachers"
                        ? data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 3
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.group
                        : data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 3
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.teacher}
                    </p>
                  )}
                </>
              </div>
            ))}
          </div>
          <div>
            <p className="header">Joi</p>
            {new Array(7).fill().map((elem, i) => (
              <div className="item">
                <>
                  <p>{hours[i]}</p>
                  {data
                    .filter(
                      (e, index) =>
                        e?.timePeriod === i + 1 && e?.dayOfTheWeek === 4
                    )
                    .filter((elem) => {
                      if (selectedWeek) {
                        return elem;
                      } else {
                        return elem?.isEvenWeek === null;
                      }
                    })[0]?.name ? (
                    <p className="name">
                      {
                        data
                          .filter(
                            (e, index) =>
                              e?.timePeriod === i + 1 && e?.dayOfTheWeek === 4
                          )
                          .filter((elem) => {
                            if (selectedWeek) {
                              return elem;
                            } else {
                              return elem?.isEvenWeek === null;
                            }
                          })[0]?.name
                      }
                    </p>
                  ) : (
                    <p style={{ fontSize: "30px", marginTop: "12px" }}>📖</p>
                  )}
                  {data.filter(
                    (e, index) =>
                      e?.timePeriod === i + 1 && e?.dayOfTheWeek === 4
                  )[0] && (
                    <p className="classes">
                      {selectedType?.value === "Classes"
                        ? data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 4
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.group
                        : data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 4
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.lectureRoom}
                    </p>
                  )}
                  {data.filter(
                    (e, index) =>
                      e?.timePeriod === i + 1 && e?.dayOfTheWeek === 4
                  )[0] && (
                    <p className="teacher">
                      {selectedType?.value === "Teachers"
                        ? data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 4
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.group
                        : data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 4
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.teacher}
                    </p>
                  )}
                </>
              </div>
            ))}
          </div>
          <div>
            <p className="header">Vineri</p>
            {new Array(7).fill().map((elem, i) => (
              <div className="item">
                <>
                  <p>{hours[i]}</p>
                  {data
                    .filter(
                      (e, index) =>
                        e?.timePeriod === i + 1 && e?.dayOfTheWeek === 5
                    )
                    .filter((elem) => {
                      if (selectedWeek) {
                        return elem;
                      } else {
                        return elem?.isEvenWeek === null;
                      }
                    })[0]?.name ? (
                    <p className="name">
                      {
                        data
                          .filter(
                            (e, index) =>
                              e?.timePeriod === i + 1 && e?.dayOfTheWeek === 5
                          )
                          .filter((elem) => {
                            if (selectedWeek) {
                              return elem;
                            } else {
                              return elem?.isEvenWeek === null;
                            }
                          })[0]?.name
                      }
                    </p>
                  ) : (
                    <p style={{ fontSize: "30px", marginTop: "12px" }}>📖</p>
                  )}
                  {data.filter(
                    (e, index) =>
                      e?.timePeriod === i + 1 && e?.dayOfTheWeek === 5
                  )[0] && (
                    <p className="classes">
                      {selectedType?.value === "Classes"
                        ? data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 5
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.group
                        : data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 5
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.lectureRoom}
                    </p>
                  )}
                  {data.filter(
                    (e, index) =>
                      e?.timePeriod === i + 1 && e?.dayOfTheWeek === 5
                  )[0] && (
                    <p className="teacher">
                      {selectedType?.value === "Teachers"
                        ? data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 5
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.group
                        : data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 5
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.teacher}
                    </p>
                  )}
                </>
              </div>
            ))}
          </div>
          <div>
            <p className="header">Sâmbătă</p>
            {new Array(7).fill().map((elem, i) => (
              <div className="item">
                <>
                  <p>{hours[i]}</p>
                  {data
                    .filter(
                      (e, index) =>
                        e?.timePeriod === i + 1 && e?.dayOfTheWeek === 6
                    )
                    .filter((elem) => {
                      if (selectedWeek) {
                        return elem;
                      } else {
                        return elem?.isEvenWeek === null;
                      }
                    })[0]?.name ? (
                    <p className="name">
                      {
                        data
                          .filter(
                            (e, index) =>
                              e?.timePeriod === i + 1 && e?.dayOfTheWeek === 6
                          )
                          .filter((elem) => {
                            if (selectedWeek) {
                              return elem;
                            } else {
                              return elem?.isEvenWeek === null;
                            }
                          })[0]?.name
                      }
                    </p>
                  ) : (
                    <p style={{ fontSize: "30px", marginTop: "12px" }}>📖</p>
                  )}
                  {data.filter(
                    (e, index) =>
                      e?.timePeriod === i + 1 && e?.dayOfTheWeek === 6
                  )[0] && (
                    <p className="classes">
                      {selectedType?.value === "Classes"
                        ? data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 6
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.group
                        : data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 6
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.lectureRoom}
                    </p>
                  )}
                  {data.filter(
                    (e, index) =>
                      e?.timePeriod === i + 1 && e?.dayOfTheWeek === 6
                  )[0] && (
                    <p className="teacher">
                      {selectedType?.value === "Teachers"
                        ? data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 6
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.group
                        : data
                            .filter(
                              (e, index) =>
                                e?.timePeriod === i + 1 && e?.dayOfTheWeek === 6
                            )
                            .filter((elem) => {
                              if (selectedWeek) {
                                return elem;
                              } else {
                                return elem?.isEvenWeek === null;
                              }
                            })[0]?.teacher}
                    </p>
                  )}
                </>
              </div>
            ))}
          </div>
        </S.Mobile>
      ) : (
        <>
          <div className="days_of_week">
            <div
              className="empty-div"
              style={{ width: "180px", backgroundColor: "#d8e4f5" }}
            ></div>
            <p className="background-color">Luni</p>
            <p className="background-color">Marți</p>
            <p className="background-color">Miercuri</p>
            <p className="background-color">Joi</p>
            <p className="background-color">Vineri</p>
            <p className="background-color">Sâmbătă</p>
          </div>
          <div className="days_of_week content">
            <div className="perechi background-color">
              <span>1</span>
              <div>8:00-9:30</div>
            </div>
            {new Array(6).fill().map((elem, i) => (
              <div className="item">
                {(data.filter(
                  (e, index) => e?.timePeriod === 1 && e?.dayOfTheWeek === i + 1
                )[0]?.isEvenWeek === selectedWeek ||
                  data.filter(
                    (e, index) =>
                      e?.timePeriod === 1 && e?.dayOfTheWeek === i + 1
                  )[0]?.isEvenWeek === null) && (
                  <>
                    <p>
                      {
                        data.filter(
                          (e, index) =>
                            e?.timePeriod === 1 && e?.dayOfTheWeek === i + 1
                        )[0]?.name
                      }
                    </p>
                    {data.filter(
                      (e, index) =>
                        e?.timePeriod === 1 && e?.dayOfTheWeek === i + 1
                    )[0] && (
                      <p className="classes">
                        {selectedType?.value === "Classes"
                          ? data.filter(
                              (e, index) =>
                                e?.timePeriod === 1 && e?.dayOfTheWeek === i + 1
                            )[0]?.group
                          : data.filter(
                              (e, index) =>
                                e?.timePeriod === 1 && e?.dayOfTheWeek === i + 1
                            )[0]?.lectureRoom}
                      </p>
                    )}
                    {data.filter(
                      (e, index) =>
                        e?.timePeriod === 1 && e?.dayOfTheWeek === i + 1
                    )[0] && (
                      <p className="teacher">
                        {selectedType?.value === "Teachers"
                          ? data.filter(
                              (e, index) =>
                                e?.timePeriod === 1 && e?.dayOfTheWeek === i + 1
                            )[0]?.group
                          : data.filter(
                              (e, index) =>
                                e?.timePeriod === 1 && e?.dayOfTheWeek === i + 1
                            )[0]?.teacher}
                      </p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="days_of_week content">
            <div className="perechi background-color">
              <span>2</span>
              <div>9:45-11:15</div>
            </div>
            {new Array(6).fill().map((elem, i) => (
              <div className="item">
                {(data.filter(
                  (e, index) => e?.timePeriod === 2 && e?.dayOfTheWeek === i + 1
                )[0]?.isEvenWeek === selectedWeek ||
                  data.filter(
                    (e, index) =>
                      e?.timePeriod === 2 && e?.dayOfTheWeek === i + 1
                  )[0]?.isEvenWeek === null) && (
                  <>
                    <p>
                      {
                        data.filter(
                          (e, index) =>
                            e?.timePeriod === 2 && e?.dayOfTheWeek === i + 1
                        )[0]?.name
                      }
                    </p>
                    {data.filter(
                      (e, index) =>
                        e?.timePeriod === 2 && e?.dayOfTheWeek === i + 1
                    )[0] && (
                      <p className="classes">
                        {selectedType?.value === "Classes"
                          ? data.filter(
                              (e, index) =>
                                e?.timePeriod === 2 && e?.dayOfTheWeek === i + 1
                            )[0]?.group
                          : data.filter(
                              (e, index) =>
                                e?.timePeriod === 2 && e?.dayOfTheWeek === i + 1
                            )[0]?.lectureRoom}
                      </p>
                    )}
                    {data.filter(
                      (e, index) =>
                        e?.timePeriod === 2 && e?.dayOfTheWeek === i + 1
                    )[0] && (
                      <p className="teacher">
                        {selectedType?.value === "Teachers"
                          ? data.filter(
                              (e, index) =>
                                e?.timePeriod === 2 && e?.dayOfTheWeek === i + 1
                            )[0]?.group
                          : data.filter(
                              (e, index) =>
                                e?.timePeriod === 2 && e?.dayOfTheWeek === i + 1
                            )[0]?.teacher}
                      </p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="days_of_week content">
            <div className="perechi background-color">
              <span>3</span>

              <div>11:30-13:00</div>
            </div>
            {new Array(6).fill().map((elem, i) => (
              <div className="item">
                {(data.filter(
                  (e, index) => e?.timePeriod === 3 && e?.dayOfTheWeek === i + 1
                )[0]?.isEvenWeek === selectedWeek ||
                  data.filter(
                    (e, index) =>
                      e?.timePeriod === 3 && e?.dayOfTheWeek === i + 1
                  )[0]?.isEvenWeek === null) && (
                  <>
                    <p>
                      {
                        data.filter(
                          (e, index) =>
                            e?.timePeriod === 3 && e?.dayOfTheWeek === i + 1
                        )[0]?.name
                      }
                    </p>
                    {data.filter(
                      (e, index) =>
                        e?.timePeriod === 3 && e?.dayOfTheWeek === i + 1
                    )[0] && (
                      <p className="classes">
                        {selectedType?.value === "Classes"
                          ? data.filter(
                              (e, index) =>
                                e?.timePeriod === 3 && e?.dayOfTheWeek === i + 1
                            )[0]?.group
                          : data.filter(
                              (e, index) =>
                                e?.timePeriod === 3 && e?.dayOfTheWeek === i + 1
                            )[0]?.lectureRoom}
                      </p>
                    )}
                    {data.filter(
                      (e, index) =>
                        e?.timePeriod === 3 && e?.dayOfTheWeek === i + 1
                    )[0] && (
                      <p className="teacher">
                        {selectedType?.value === "Teachers"
                          ? data.filter(
                              (e, index) =>
                                e?.timePeriod === 3 && e?.dayOfTheWeek === i + 1
                            )[0]?.group
                          : data.filter(
                              (e, index) =>
                                e?.timePeriod === 3 && e?.dayOfTheWeek === i + 1
                            )[0]?.teacher}
                      </p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="days_of_week content">
            <div className="perechi background-color">
              <span>4</span>
              <div>13:30-15:00</div>
            </div>
            {new Array(6).fill().map((elem, i) => (
              <div className="item">
                {(data.filter(
                  (e, index) => e?.timePeriod === 4 && e?.dayOfTheWeek === i + 1
                )[0]?.isEvenWeek === selectedWeek ||
                  data.filter(
                    (e, index) =>
                      e?.timePeriod === 4 && e?.dayOfTheWeek === i + 1
                  )[0]?.isEvenWeek === null) && (
                  <>
                    <p>
                      {
                        data.filter(
                          (e, index) =>
                            e?.timePeriod === 4 && e?.dayOfTheWeek === i + 1
                        )[0]?.name
                      }
                    </p>
                    {data.filter(
                      (e, index) =>
                        e?.timePeriod === 4 && e?.dayOfTheWeek === i + 1
                    )[0] && (
                      <p className="classes">
                        {selectedType?.value === "Classes"
                          ? data.filter(
                              (e, index) =>
                                e?.timePeriod === 4 && e?.dayOfTheWeek === i + 1
                            )[0]?.group
                          : data.filter(
                              (e, index) =>
                                e?.timePeriod === 4 && e?.dayOfTheWeek === i + 1
                            )[0]?.lectureRoom}
                      </p>
                    )}
                    {data.filter(
                      (e, index) =>
                        e?.timePeriod === 4 && e?.dayOfTheWeek === i + 1
                    )[0] && (
                      <p className="teacher">
                        {selectedType?.value === "Teachers"
                          ? data.filter(
                              (e, index) =>
                                e?.timePeriod === 4 && e?.dayOfTheWeek === i + 1
                            )[0]?.group
                          : data.filter(
                              (e, index) =>
                                e?.timePeriod === 4 && e?.dayOfTheWeek === i + 1
                            )[0]?.teacher}
                      </p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="days_of_week content">
            <div className="perechi background-color">
              <span>5</span>
              <div>15:15-16:45</div>
            </div>
            {new Array(6).fill().map((elem, i) => (
              <div className="item">
                {(data.filter(
                  (e, index) => e?.timePeriod === 5 && e?.dayOfTheWeek === i + 1
                )[0]?.isEvenWeek === selectedWeek ||
                  data.filter(
                    (e, index) =>
                      e?.timePeriod === 5 && e?.dayOfTheWeek === i + 1
                  )[0]?.isEvenWeek === null) && (
                  <>
                    <p>
                      {
                        data.filter(
                          (e, index) =>
                            e?.timePeriod === 5 && e?.dayOfTheWeek === i + 1
                        )[0]?.name
                      }
                    </p>
                    {data.filter(
                      (e, index) =>
                        e?.timePeriod === 5 && e?.dayOfTheWeek === i + 1
                    )[0] && (
                      <p className="classes">
                        {selectedType?.value === "Classes"
                          ? data.filter(
                              (e, index) =>
                                e?.timePeriod === 5 && e?.dayOfTheWeek === i + 1
                            )[0]?.group
                          : data.filter(
                              (e, index) =>
                                e?.timePeriod === 5 && e?.dayOfTheWeek === i + 1
                            )[0]?.lectureRoom}
                      </p>
                    )}
                    {data.filter(
                      (e, index) =>
                        e?.timePeriod === 5 && e?.dayOfTheWeek === i + 1
                    )[0] && (
                      <p className="teacher">
                        {selectedType?.value === "Teachers"
                          ? data.filter(
                              (e, index) =>
                                e?.timePeriod === 5 && e?.dayOfTheWeek === i + 1
                            )[0]?.group
                          : data.filter(
                              (e, index) =>
                                e?.timePeriod === 5 && e?.dayOfTheWeek === i + 1
                            )[0]?.teacher}
                      </p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="days_of_week content">
            <div className="perechi background-color">
              <span>6</span>
              <div>17:00-18:30</div>
            </div>
            {new Array(6).fill().map((elem, i) => (
              <div className="item">
                {(data.filter(
                  (e, index) => e?.timePeriod === 6 && e?.dayOfTheWeek === i + 1
                )[0]?.isEvenWeek === selectedWeek ||
                  data.filter(
                    (e, index) =>
                      e?.timePeriod === 6 && e?.dayOfTheWeek === i + 1
                  )[0]?.isEvenWeek === null) && (
                  <>
                    <p>
                      {
                        data.filter(
                          (e, index) =>
                            e?.timePeriod === 6 && e?.dayOfTheWeek === i + 1
                        )[0]?.name
                      }
                    </p>
                    {data.filter(
                      (e, index) =>
                        e?.timePeriod === 6 && e?.dayOfTheWeek === i + 1
                    )[0] && (
                      <p className="classes">
                        {selectedType?.value === "Classes"
                          ? data.filter(
                              (e, index) =>
                                e?.timePeriod === 6 && e?.dayOfTheWeek === i + 1
                            )[0]?.group
                          : data.filter(
                              (e, index) =>
                                e?.timePeriod === 6 && e?.dayOfTheWeek === i + 1
                            )[0]?.lectureRoom}
                      </p>
                    )}
                    {data.filter(
                      (e, index) =>
                        e?.timePeriod === 6 && e?.dayOfTheWeek === i + 1
                    )[0] && (
                      <p className="teacher">
                        {selectedType?.value === "Teachers"
                          ? data.filter(
                              (e, index) =>
                                e?.timePeriod === 6 && e?.dayOfTheWeek === i + 1
                            )[0]?.group
                          : data.filter(
                              (e, index) =>
                                e?.timePeriod === 6 && e?.dayOfTheWeek === i + 1
                            )[0]?.teacher}
                      </p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="days_of_week content">
            <div className="perechi background-color">
              <span>7</span>
              <div>18:45-20:15</div>
            </div>
            {new Array(6).fill().map((elem, i) => (
              <div className="item">
                {(data.filter(
                  (e, index) => e?.timePeriod === 7 && e?.dayOfTheWeek === i + 1
                )[0]?.isEvenWeek === selectedWeek ||
                  data.filter(
                    (e, index) =>
                      e?.timePeriod === 7 && e?.dayOfTheWeek === i + 1
                  )[0]?.isEvenWeek === null) && (
                  <>
                    <p>
                      {
                        data.filter(
                          (e, index) =>
                            e?.timePeriod === 7 && e?.dayOfTheWeek === i + 1
                        )[0]?.name
                      }
                    </p>
                    {data.filter(
                      (e, index) =>
                        e?.timePeriod === 7 && e?.dayOfTheWeek === i + 1
                    )[0] && (
                      <p className="classes">
                        {selectedType?.value === "Classes"
                          ? data.filter(
                              (e, index) =>
                                e?.timePeriod === 7 && e?.dayOfTheWeek === i + 1
                            )[0]?.group
                          : data.filter(
                              (e, index) =>
                                e?.timePeriod === 7 && e?.dayOfTheWeek === i + 1
                            )[0]?.lectureRoom}
                      </p>
                    )}
                    {data.filter(
                      (e, index) =>
                        e?.timePeriod === 7 && e?.dayOfTheWeek === i + 1
                    )[0] && (
                      <p className="teacher">
                        {selectedType?.value === "Teachers"
                          ? data.filter(
                              (e, index) =>
                                e?.timePeriod === 7 && e?.dayOfTheWeek === i + 1
                            )[0]?.group
                          : data.filter(
                              (e, index) =>
                                e?.timePeriod === 7 && e?.dayOfTheWeek === i + 1
                            )[0]?.teacher}
                      </p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </S.Main>
  );
};

export default Main;
