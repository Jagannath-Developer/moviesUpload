import React, { useState } from "react";
import axios from "axios";

export default function MovieAddPage() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  // const [description, setDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [runTime, setRunTime] = useState("");
  const [director, setDirector] = useState("");
  const [writer, setWriter] = useState("");
  const [released, setReleased] = useState("");
  const [releasedDate, setReleasedDate] = useState("");
  const [country, setCountry] = useState("");
  const [typeVideo, setTypeVideo] = useState("");
  const [quality, setQuality] = useState("");
  const [genres, setGenres] = useState("");
  const [genresList, setGenresList] = useState([]);
  const [singleCasting, setSingleCasting] = useState("");
  const [castingList, setCastingList] = useState([]);
  const [singleLanguage, setSingleLanguage] = useState("");
  const [languageList, setLanguageList] = useState([]);
  const [magneticUrl, setMagneticUrl] = useState("");
  const [magneticQuality, setMagneticQuality] = useState("");
  const [magneticSize, setMagneticSize] = useState("");
  const [magneticList, setMagneticList] = useState([]);
  const [run, setRun] = useState(false);
  const [failed, setFailed] = useState(false);

  const url =
    "https://asia-south1.gcp.data.mongodb-api.com/app/api_application-sicxx/endpoint/createMovie";
  // const handleSubmit = async () => {
  //   console.log("title:", title);
  //   console.log("description:", description);
  //   console.log("fullDescription:", fullDescription);
  //   console.log("runtime:", runTime);
  //   console.log("director:", director);
  //   console.log("writer:", writer);
  //   console.log("released:", released);
  //   console.log("releasedDate:", releasedDate);
  //   console.log("country:", country);
  //   console.log("type video:", typeVideo);
  //   console.log("quality:", quality);
  //   console.log("Genres:", genres);
  //   console.log("single casting:", singleCasting);
  //   console.log("casting[]:", castingList);
  //   console.log("single language:", singleLanguage);
  //   console.log("languageList[]:", languageList);
  //   console.log("list url", magneticList);
  // };

  const handleSaveData = async () => {
    const date_time = new Date();
    const body = {
      title: title,
      fullplot: fullDescription,
      runtime: runTime,
      director: director,
      writer: writer,
      year: released,
      released: releasedDate,
      country: country,
      type: typeVideo,
      audio: languageList,
      quality: quality,
      genres: genresList,
      casting: castingList,
      torrent: magneticList,
      watched: 0,
      downloaded: 0,
      createTime: date_time.toLocaleString(),
      lastUpdated: date_time.toLocaleString(),
      poster: poster,
    };
    await axios
      .post(url, body)
      .then(function (response) {
        console.log(response);
        setRun(true);
      })
      .catch(function (error) {
        console.log(error.message);
        setFailed(true);
      });
  };
  return (
    <div className="container p-2 mb-5">
      <div className="mt-3">
        <h2 className="d-flex justify-content-center">Movies Zone</h2>
      </div>
      <div className="input-group mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-group mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="poster url"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
      </div>
      {/* <div className="input-group mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div> */}
      <div className="input-group mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="full description"
          value={fullDescription}
          onChange={(e) => setFullDescription(e.target.value)}
        />
      </div>
      <div className="input-group mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="runtime in hrs"
          value={runTime}
          onChange={(e) => setRunTime(e.target.value)}
        />
      </div>
      <hr />
      <div className="input-group mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
      </div>
      <div className="input-group mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="writer"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
        />
      </div>
      <div className="input-group mt-4">
        <input
          type="number"
          className="form-control"
          placeholder="released year"
          value={released}
          onChange={(e) => setReleased(e.target.value)}
        />
      </div>
      <div className="input-group mt-4">
        <label htmlFor="state" className="form-label mx-2 fw-bold">
          Released Date
        </label>
        <input
          type="date"
          className="form-control"
          placeholder="released date"
          value={releasedDate}
          onChange={(e) => setReleasedDate(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <label htmlFor="state" className="form-label mx-2 fw-bold">
          Country
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="country"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option defaultValue="">Choose...</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="China">China</option>
        </select>
      </div>
      <div className="mt-3">
        <label htmlFor="state" className="form-label mx-2 fw-bold">
          Type Video
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="videoType"
          required
          value={typeVideo}
          onChange={(e) => setTypeVideo(e.target.value)}
        >
          <option defaultValue="">Choose...</option>
          <option value="Movies">Movies</option>
          <option value="Web Series">Web Series</option>
        </select>
      </div>
      <div className="mt-3">
        <label htmlFor="state" className="form-label mx-2 fw-bold">
          Quality
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="quality"
          required
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
          //   value={quality}
        >
          <option defaultValue="">Choose...</option>
          <option value="HDRip">HDRip</option>
          <option value="BRRip">BRRip</option>
          <option value="DVDSrc">DVDSrc</option>
          <option value="HQ-DVDSrc">HQ-DVDSrc</option>
          <option value="4k HD AVC">4k HD AVC</option>
          <option value="HD AVC">HD AVC</option>
          <option value="Blue-ray">Blue-ray</option>
        </select>
      </div>

      <hr />
      <div className="card px-2 pb-4">
        <div className="mt-3">
          <label htmlFor="state" className="form-label mx-2 fw-bold">
            Genres
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="state"
            required
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
          >
            <option defaultValue="">Choose...</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Family">Family</option>
            <option value="Romance">Romance</option>
            <option value="Science-fi">Science-fi</option>
            <option value="Children">Children</option>
            <option value="Cartoon">Cartoon</option>
            <option value="Adventure">Adventure</option>
            <option value="Thriller">Thriller</option>
            <option value="Crime">Crime</option>
            <option value="Mystery">Mystery</option>
          </select>
        </div>
        <button
          className="btn btn-primary mt-2"
          onClick={() => {
            setGenresList((prev) => [...prev, genres]);
          }}
        >
          Add Genres
        </button>
        <div className="mt-2">
          {genresList.map((item, index) => (
            <div key={index} className="input-group mt-1">
              <span className="input-group-text" id="basic-addon1">
                {index + 1}
              </span>
              <div className="form-control">{item}</div>
              <span
                className="input-group-text"
                id="basic-addon1"
                onClick={() => {
                  genresList.splice(index, 1);
                  setGenresList((prev) => [...prev]);
                  console.log("delete", index);
                  // console.log(genresList)
                }}
              >
                🗑
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="card px-2 pb-4">
        <label htmlFor="state" className="form-label mx-2 fw-bold">
          Casting
        </label>
        <div className="input-group mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="add casting"
            value={singleCasting}
            onChange={(e) => setSingleCasting(e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              setCastingList((prev) => [...prev, singleCasting]);
              setSingleCasting("");
            }}
          >
            +
          </button>
        </div>
        <div className="mt-2">
          {castingList.map((item, index) => (
            <div key={index} className="input-group mt-1">
              <span className="input-group-text" id="basic-addon1">
                {index + 1}
              </span>
              <div className="form-control">{item}</div>
              <span
                className="input-group-text"
                id="basic-addon1"
                onClick={() => {
                  castingList.splice(index, 1);
                  setCastingList((prev) => [...prev]);
                  console.log("delete", index);
                  // console.log(castingList)
                }}
              >
                🗑
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="card px-2 pb-4">
        <div className="mt-3">
          <label htmlFor="state" className="form-label mx-2 fw-bold">
            Language
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="state"
            required
            value={singleLanguage}
            onChange={(e) => setSingleLanguage(e.target.value)}
          >
            <option defaultValue="">Choose...</option>
            <option value="Telugu">Telugu</option>
            <option value="Tamil">Tamil</option>
            <option value="Hindi">Hindi</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Kannada">Kannada</option>
            <option value="English">English</option>
            <option value="China">China</option>
          </select>
        </div>
        <button
          className="btn btn-primary mt-2"
          onClick={() => {
            setLanguageList((prev) => [...prev, singleLanguage]);
          }}
        >
          Add Language
        </button>
        <div className="mt-2">
          {languageList.map((item, index) => (
            <div key={index} className="input-group mt-1">
              <span className="input-group-text" id="basic-addon1">
                {index + 1}
              </span>
              <div className="form-control">{item}</div>
              <span
                className="input-group-text"
                id="basic-addon1"
                onClick={() => {
                  languageList.splice(index, 1);
                  setLanguageList((prev) => [...prev]);
                  console.log("delete", index);
                  // console.log(languageList)
                }}
              >
                🗑
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="card px-2 pb-4">
        <div className="input-group mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="magnetic url"
            value={magneticUrl}
            onChange={(e) => setMagneticUrl(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="size"
            value={magneticSize}
            onChange={(e) => setMagneticSize(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="quality"
            value={magneticQuality}
            onChange={(e) => setMagneticQuality(e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              setMagneticList((prev) => [
                ...prev,
                {
                  url: magneticUrl,
                  quality: magneticQuality,
                  size: magneticSize,
                },
              ]);
              setMagneticUrl("");
              setMagneticQuality("");
              setMagneticSize("");
            }}
          >
            +
          </button>
        </div>
        <div className="mt-2">
          {magneticList.map((item, index) => (
            <div key={index} className="input-group mt-1 w-100">
              <span className="input-group-text" id="basic-addon1">
                {index + 1}
              </span>

              <div
                className="form-control d-inline-block"
                style={{ whiteSpace: "nowrap", overflow: "hidden" }}
              >
                {item.url}
              </div>
              <div className="form-control text-center fw-bold">
                {item.size}
              </div>
              <div className="form-control text-center fw-bold">
                {item.quality}
              </div>
              <span
                className="input-group-text"
                id="basic-addon1"
                onClick={() => {
                  magneticList.splice(index, 1);
                  setMagneticList((prev) => [...prev]);
                  console.log("delete", index);
                  // console.log(magneticList)
                }}
              >
                🗑
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <button className="btn btn-danger w-100" onClick={handleSaveData}>
          Submit
        </button>
      </div>
      {run && (
        <div className="alert alert-success mt-3" role="alert">
          Successfully Saved !
        </div>
      )}
      {failed && (
        <div className="alert alert-danger mt-3" role="alert">
          failed to Upload !
        </div>
      )}
    </div>
  );
}
