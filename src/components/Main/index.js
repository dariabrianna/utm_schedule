import { useEffect } from "react";
import * as S from "./styles";
import axios from "axios";

const Main = ({ data, selectedType, selectedWeek }) => {
  return (
    <S.Main>
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
                (e, index) => e?.timePeriod === 1 && e?.dayOfTheWeek === i + 1
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
                  (e, index) => e?.timePeriod === 1 && e?.dayOfTheWeek === i + 1
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
                  (e, index) => e?.timePeriod === 1 && e?.dayOfTheWeek === i + 1
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
                (e, index) => e?.timePeriod === 2 && e?.dayOfTheWeek === i + 1
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
                  (e, index) => e?.timePeriod === 2 && e?.dayOfTheWeek === i + 1
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
                  (e, index) => e?.timePeriod === 2 && e?.dayOfTheWeek === i + 1
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
                (e, index) => e?.timePeriod === 3 && e?.dayOfTheWeek === i + 1
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
                  (e, index) => e?.timePeriod === 3 && e?.dayOfTheWeek === i + 1
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
                  (e, index) => e?.timePeriod === 3 && e?.dayOfTheWeek === i + 1
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
                (e, index) => e?.timePeriod === 4 && e?.dayOfTheWeek === i + 1
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
                  (e, index) => e?.timePeriod === 4 && e?.dayOfTheWeek === i + 1
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
                  (e, index) => e?.timePeriod === 4 && e?.dayOfTheWeek === i + 1
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
                (e, index) => e?.timePeriod === 5 && e?.dayOfTheWeek === i + 1
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
                  (e, index) => e?.timePeriod === 5 && e?.dayOfTheWeek === i + 1
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
                  (e, index) => e?.timePeriod === 5 && e?.dayOfTheWeek === i + 1
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
                (e, index) => e?.timePeriod === 6 && e?.dayOfTheWeek === i + 1
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
                  (e, index) => e?.timePeriod === 6 && e?.dayOfTheWeek === i + 1
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
                  (e, index) => e?.timePeriod === 6 && e?.dayOfTheWeek === i + 1
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
                (e, index) => e?.timePeriod === 7 && e?.dayOfTheWeek === i + 1
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
                  (e, index) => e?.timePeriod === 7 && e?.dayOfTheWeek === i + 1
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
                  (e, index) => e?.timePeriod === 7 && e?.dayOfTheWeek === i + 1
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
    </S.Main>
  );
};

export default Main;
