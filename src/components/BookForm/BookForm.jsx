import React, { useEffect, useState } from "react";
import axios from "axios";
import { isNumber, textLimit } from "../../utils/validations";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Button,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const inputStyle =
  "bg-gray-700 text-gray-200 border-0 rounded-md p-3 mt-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150";
const disabledStyle =
  "bg-gradient-to-r from-indigo-950 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-6 cursor-not-allowed";
const submitStyle =
  "bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-6 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150";
const fileStyle =
  "bg-gray-700 mt-1 text-gray-200 border-0 rounded-md p-3 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150";

function BookForm({ method, value }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [bookPdf, setBookPdf] = useState("");
  const [serverError, setServerError] = useState("");
  const [fileError, setFileError] = useState();
  const [genreName, setGenreName] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didEdit, setDidEdit] = useState({
    name: false,
    genre: false,
    price: false,
    description: false,
  });
  const theme = useTheme();
  const navigate = useNavigate();
  const params = useParams();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const genres = [
    "Psychology",
    "Thriller",
    "Novel",
    "Humor",
    "Short Story",
    "Philosophy",
    "Literature",
    "History",
    "Romance",
    "Mystery",
    "Fiction",
    "Poetry",
    "Biography",
    "Action",
    "Horror",
    "Science Fiction",
    "Fantasy",
  ];

  function getStyles(name, genreName, theme) {
    return {
      fontWeight:
        genreName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  useEffect(() => {
    if (value) {
      setName(value.book_name)
      setGenreName(value.genre)
      setPrice(value.price)
      setDescription(value.description)
      setImage(value.image_url)
    }
  }, []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenreName(typeof value === "string" ? value.split(",") : value);
    setDidEdit((prevEdit) => {
      return {
        ...prevEdit,
        genreName: false,
      };
    });
  };

  const nameIsInvalid = didEdit.name && name === "";
  const genreIsInvalid = didEdit.genre && genreName.length <= 0;
  const priceIsInvalid = (didEdit.price && price === "") || !isNumber(price);
  const descriptionIsInvalid =
    didEdit.description && (description === "" || textLimit(description, 850));

  const disableButton =
    name === "" ||
    genreName.length <= 0 ||
    price === "" ||
    description === "" ||
    !isNumber(price);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      setIsSubmitting(true);
      let fileErrors = {};

      if (!image || !image.type.startsWith("image/")) {
        fileErrors.image = "Choose a proper image ( .jpg, .png, .jpeg etc...)";
      }

      if (!bookPdf || bookPdf.type !== "application/pdf") {
        console.log("pdf");
        fileErrors.pdf = "Choose a proper pdf (eg- .pdf)";
      }

      if (Object.keys(fileErrors).length > 0) {
        return setFileError(fileErrors);
      }

      const formData = new FormData();
      formData.append("book_name", name);
      formData.append("genre", genreName);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("book", bookPdf);
      const token = localStorage.getItem("token");

      if (method === "PATCH") {
        console.log("updateeeeeeeeeeeeeeeeeeeeeeee");
        const response = await axios.patch(
          `http://localhost:8080/book/${params.id}`,
          formData,
          {
            headers: {
              token: token,
            },
          }
        );
        // navigate(`/books/${id}`);
        return response;
      }

      const response = await axios.post(
        "http://localhost:8080/contribute",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data", token: token },
        }
      );
      const id = response.data.book_id;
      navigate(`/books/${id}`);
    } catch (e) {
      console.log(e);
      if (!e.status === 422) {
        setServerError(e);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  function handleBlur(identifier) {
    setDidEdit((prevEdit) => {
      return {
        ...prevEdit,
        [identifier]: true,
      };
    });
  }

  const handleImageDelete = () => {
    // Filter out the deleted image URL
    setImage("");
  };

  if (serverError) {
    return <CustomError />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-md p-6 mt-20">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">
          {value ? "Update your book" : "Submit your book here!"}
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            name="book_name"
            placeholder="Book Name"
            className={inputStyle}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setDidEdit((prevEdit) => {
                return {
                  ...prevEdit,
                  name: false,
                };
              });
            }}
            onBlur={() => handleBlur("name")}
          />
          {nameIsInvalid ? (
            <p className="mt-1 text-sm text-red-500">Book name is required</p>
          ) : null}

          <div className="mt-4">
            <FormControl style={{ display: "flex" }}>
              <InputLabel
                style={{ color: "rgb(229, 231, 235, .5)" }}
                id="demo-multiple-name-label"
              >
                Genre
              </InputLabel>
              <Select
                className="bg-gray-700"
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={genreName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                onBlur={() => handleBlur("genre")}
              >
                {genres.map((genre) => (
                  <MenuItem
                    key={genre}
                    value={genre}
                    style={getStyles(genre, genreName, theme)}
                  >
                    {genre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {genreIsInvalid ? (
            <p className="mt-1 text-sm text-red-500">Genre is required</p>
          ) : null}

          <input
            name="price"
            value={price}
            placeholder="Price"
            className={inputStyle}
            type="text"
            onChange={(e) => {
              setPrice(e.target.value);
              setDidEdit((prevEdit) => {
                return {
                  ...prevEdit,
                  price: false,
                };
              });
            }}
            onBlur={() => handleBlur("price")}
          />
          {priceIsInvalid ? (
            <p className="mt-1 text-sm text-red-500">
              Enter a valid number for the price (or 0 if it's not for sale).
            </p>
          ) : null}

          <textarea
            placeholder="Description"
            className={inputStyle}
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setDidEdit((prevEdit) => {
                return {
                  ...prevEdit,
                  description: false,
                };
              });
            }}
            onBlur={() => handleBlur("description")}
          ></textarea>
          {descriptionIsInvalid ? (
            <p className="mt-1 text-sm text-red-500">
              Description is required (upto 850 words)
            </p>
          ) : null}

          <label className="mt-4 text-slate-300" htmlFor="book">
            Book
          </label>
          <input
            name="book"
            id="book"
            placeholder="book"
            className={fileStyle}
            type="file"
            onChange={(e) => setBookPdf(e.target.files[0])}
          />
          {fileError && fileError.pdf ? (
            <p className="mt-1 text-sm text-red-500">{fileError.pdf}</p>
          ) : null}

          <label className="mt-4 text-slate-300" htmlFor="image">
            Cover Image
          </label>
          <input
            id="image"
            name="image"
            placeholder="image"
            className={fileStyle}
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {fileError && fileError.image ? (
            <p className="mt-1 text-sm text-red-500">{fileError.image}</p>
          ) : null}
          <Grid item xs={12}>
            <h3 style={{color: "white", margin: "8px"}}>Remove images</h3>
              <div
                style={{ position: "relative", display: "inline-block" }}
              >
                <img
                  src={image}
                  alt="Preview"
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "10px",
                  }}
                />
                <button onClick={handleImageDelete}> <i class="fa fa-trash-o" style={{ fontSize: "18px", color: "white" }}></i></button>
              </div>
          </Grid>
          <button
            className={
              disableButton || isSubmitting ? disabledStyle : submitStyle
            }
            type="submit"
            disabled={disableButton || isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
