import axios from "axios";
import jsonp from "jsonp";
import React from "react";
import { useForm } from "react-hook-form";

const AddData = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
        // Assuming `data` is an object you want to send in the POST request
        let response = await axios.post('https://4x7ragl0a0.execute-api.us-east-1.amazonaws.com/dev/wiki/search', data);

        // Handle the response data here
        console.log(response.data);
    } catch (error) {
        // Handle errors here
        console.error(error);
    }
};

  // const onSubmit = async (data) => {
  //   let response= await axios.post('https://4x7ragl0a0.execute-api.us-east-1.amazonaws.com/dev/wiki/search')
  //   console.log(response);
  //   // const apiEndpoint = "https://en.wikipedia.org/w/api.php";
  //   // const params = {
  //   //   action: "query",
  //   //   list: "search",
  //   //   srsearch: data.wikiTitle,
  //   //   format: "json",
  //   // };

  //   // jsonp(
  //   //   apiEndpoint + "?" + new URLSearchParams(params),
  //   //   null,
  //   //   (err, response) => {
  //   //     if (err) {
  //   //       console.error(err);
  //   //     } else {
  //   //       //   const pages = response.query.random;
  //   //       //   pages.forEach(page => {
  //   //       // console.log(response.query);
  //   //       // words=response.query.search[0].snippet
  //   //       //   });
  //   //     }
  //   //   }
  //   // );
  // };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        // border: "solid red 1px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "700px",
          height: "300px",
          border: "solid black",
          padding: "5px",
          borderRadius: "15px",
        }}
      >
        <h1 style={{ margin: "0px", fontFamily: "math" }}>Update References</h1>
        <hr style={{ margin: "0", borderColor: "#e5d8d8" }} />
        <h3 style={{ marginLeft: "30px", fontFamily: "monospace" }}>
          This form will analyze articles on Wikipedia and update references on
          our page.
        </h3>
        <form
          style={{
            padding: "5px",
            marginLeft: "20px",
            fontFamily: "sans-serif",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label htmlFor="wikiTitle" style={{ width: "185px" }}>
              Page title (in Wikipedia):
            </label>
            <input
              id="wikiTitle"
              style={{ width: "440px", height: "18px" }}
              {...register("wikiTitle")}
            />
          </div>
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label htmlFor="ourWikiTitle" style={{ width: "185px" }}>
              Page title (our wiki):
            </label>
            <input
              id="ourWikiTitle"
              style={{ width: "440px", height: "18px" }}
              {...register("ourWikiTitle")}
            />
          </div>
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label htmlFor="section" style={{ width: "185px" }}>
              Section:
            </label>
            <input
              id="section"
              type="number"
              placeholder="0"
              style={{ width: "220px", height: "18px" }}
              {...register("section")}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="checkbox" style={{ width: "185px" }}></label>
            <input id="checkbox" type="checkbox" {...register("checkbox")} />
            <label>Append</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  );
};

export default AddData;
