import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Button from "@mui/material/Button";

export default function QrCodeGenerator() {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [dimensions, setDimensions] = useState(200);
  const [format, setFormat] = useState("PNG");
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const qrCodeRef = useRef(null);
  const [imgUrl, setImgUrl] = useState(
    "http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!"
  );

  function generateQrCode() {
    const datas = {
      data,
      dimensions,
      format,
      c: foregroundColor.slice(1),
      bg: backgroundColor.slice(1),
    };
    const updateUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&color=${datas.c}&bgcolor=${datas.bg}`;
    setImgUrl(updateUrl);
    // &size=${dimensions}x${dimensions} &format=${format}
  }
  return (
    <div>
      <div className="header-section">
        <QrCodeScannerIcon
          sx={{ color: "#5c5ce0" }}
          fontSize="large"
          className="pl-5"
        />
        <h4>QR Code Generator</h4>
      </div>
      <h1 className="text-center pt-2 pb-3">Generate QR Code</h1>
      <div className="container h-90vh">
        <div className="row h-100 algin-items-center">
          <div className="col-12 col-sm-12 col-lg-8 ">
            <div className="input-container">
              <label className="mt-3">Enter or paste your URL:</label>
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                variant="filled"
                onChange={(e) => setData(e.target.value)}
                size="small"
                className="common-input-style"
              />
              <Box>
                <label className="mt-3">Image Dimensions:</label>
                <Slider
                  defaultValue={20}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  min={200}
                  max={2000}
                  onChange={(e) => setDimensions(e.target.value)}
                  className="common-input-style"
                />
              </Box>
              <div className="color-picker-container">
                <label>Foreground Color:</label>
                <input
                  type="color"
                  value={foregroundColor}
                  onChange={(e) => setForegroundColor(e.target.value)}
                />
                <label>Background Color:</label>
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                />
              </div>
              <Box className={"mt-3"}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Format
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: "format",
                      id: "uncontrolled-native",
                    }}
                    onChange={(e) => setFormat(e.target.value)}
                  >
                    <option value={"png"}>png</option>
                    <option value={"jpg"}>jpg</option>
                    <option value={"svg"}>svg</option>
                  </NativeSelect>
                </FormControl>
              </Box>
              <Button
                variant="contained"
                onClick={() => generateQrCode()}
                className="mt-3 mb-3 w-100"
              >
                Generate
              </Button>
            </div>
          </div>
          <div className="col-12 col-sm-12  col-lg-4 qr-image-container">
            <img src={imgUrl} />
            <Button variant="contained" color="success" className="mt-3">
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
