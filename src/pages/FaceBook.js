import { React, useState } from "react";
import {
  Box,
  useMediaQuery,
  Button,
  FormLabel,
  Paper,
  InputBase,
  Typography,
  useTheme,
  Snackbar,
  Alert
} from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Datatable from "../components/DataTable.tsx";
import axios from "axios";

// const ipcRenderer = window.require("electron").ipcRenderer;

const Facebook = () => {
  const [data, setData] = useState([
    {
      id: "1",
      sku: "233223232",
      title: "test",
      price: "test",
      description: "test"
    },
    {
      id: "2",
      sku: "302330444",
      title: "test",
      price: "test",
      description: "test"
    }
  ]);
  const [warningMessage, setWarningMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [postlink, setPostlink] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dateTime, setDateTime] = useState("");

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handlePostlinkChange = (e) => {
    setPostlink(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const clearData = () => {
    setPostlink("");
    setUserName("");
    setPassword("");
    setDateTime("");
  };

  const handlePostClick = () => {
    if (postlink === "") {
      setOpen(true);
      setWarningMessage("Post link field is required");
    } else if (userName === "") {
      setOpen(true);
      setWarningMessage("User name field is required");
    } else if (password === "") {
      setOpen(true);
      setWarningMessage("Password field is required");
    } else if (dateTime === "") {
      setOpen(true);
      setWarningMessage("Datetime field is required");
    } else {
      const requestData = {
        postLink: postlink,
        userName: userName,
        password: password,
        dateTime: dateTime
      };
      console.log(requestData);
      axios
        .post("http://65.108.20.73:80/products/post", requestData)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          clearData();
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
          setOpen(true);
          setWarningMessage("Produts posting faild.");
        });
    }
  };

  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const theme = useTheme();

  return (
    <Box>
      <Box
        display="grid"
        backgroundColor="#f9f9f9"
        gridTemplateColumns="repeat(12, 1fr)"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12"
          }
        }}
      >
        <Box
          gridColumn="span 12"
          sx={{
            backgroundColor: "#f9f9f9 !important",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%" // Adjust the height as needed
          }}
        >
          <Box pt="10.5rem">
            <Typography
              fontSize="52px"
              color={theme.palette.secondary[100]}
              fontFamily="font-header"
              textAlign="center"
              sx={{ mb: "5px" }}
            >
              Automate your FaceBook marketing!
            </Typography>
          </Box>
          {data.length === 0 && handlePostClick === true && (
            <Box
              mt="2rem"
              sx={{ display: { xs: "none", md: "flex" } }}
              alignItems="center"
              justifyContent="center"
            >
              <CircularProgress></CircularProgress>
            </Box>
          )}
          <Box
            mt="1rem"
            sx={{ display: { xs: "none", md: "flex" } }}
            alignItems="center"
            justifyContent="center"
          >
            <FormLabel
              sx={{
                height: "3.8rem",
                marginTop: "1.5rem",
                width: "8rem",
                color: "#000000",
                fontSize: "1.5rem",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none"
              }}
            >
              Post Link
            </FormLabel>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 620,
                height: 55,
                backgroundColor: "#fff",
                color: "#222",
                borderRadius: "1rem 1rem 1rem 1rem",
                boxShadow: "#222 0px 0px 5px 0px"
              }}
            >
              <InputBase
                value={postlink}
                onChange={handlePostlinkChange}
                sx={{ ml: 1, flex: 1, color: "#222", fontSize: "1.5rem" }}
                placeholder="Please enter post link."
              />
            </Paper>
          </Box>
          <Box
            mt="1rem"
            sx={{ display: { xs: "none", md: "flex" } }}
            alignItems="center"
            justifyContent="center"
          >
            <FormLabel
              sx={{
                height: "3.8rem",
                width: "8rem",
                marginTop: "1.5rem",
                color: "#000000",
                fontSize: "1.5rem",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none"
              }}
            >
              User Name
            </FormLabel>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 620,
                height: 55,
                backgroundColor: "#fff",
                color: "#222",
                borderRadius: "1rem 1rem 1rem 1rem",
                boxShadow: "#222 0px 0px 5px 0px"
              }}
            >
              <InputBase
                value={userName}
                onChange={handleUserNameChange}
                sx={{ ml: 1, flex: 1, color: "#222", fontSize: "1.5rem" }}
                placeholder="Please enter user name"
              />
            </Paper>
          </Box>
          <Box
            mt="1rem"
            sx={{ display: { xs: "none", md: "flex" } }}
            alignItems="center"
            justifyContent="center"
          >
            <FormLabel
              sx={{
                height: "3.8rem",
                width: "8rem",
                marginTop: "1.5rem",
                color: "#000000",
                fontSize: "1.5rem",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                textTransform: "none"
              }}
            >
              Password
            </FormLabel>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 620,
                height: 55,
                backgroundColor: "#fff",
                color: "#222",
                borderRadius: "1rem 1rem 1rem 1rem",
                boxShadow: "#222 0px 0px 5px 0px"
              }}
            >
              <InputBase
                type="password"
                value={password}
                onChange={handlePasswordChange}
                sx={{ ml: 1, flex: 1, color: "#222", fontSize: "1.5rem" }}
                placeholder="Please enter password"
              />
            </Paper>
          </Box>
          <Box
            mt="1rem"
            sx={{ display: { xs: "none", md: "flex" } }}
            alignItems="center"
            justifyContent="center"
          >
            <FormLabel
              sx={{
                height: "3.8rem",
                width: "10rem",
                marginTop: "1.5rem",
                color: "#000000",
                fontSize: "1.5rem",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                textTransform: "none"
              }}
            >
              Time to post
            </FormLabel>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  value={dateTime}
                  onChange={(newValue) => setDateTime(newValue)}
                  label="Set date time to post"
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <Box
            mt="1rem"
            sx={{ display: { xs: "none", md: "flex" } }}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              sx={{
                height: "3.8rem",
                width: "47rem",
                borderRadius: "1rem 1rem 1rem 1rem",
                backgroundColor: "#431ced",
                color: "#fff",
                fontSize: "1.5rem",
                textTransform: "none",
                boxShadow: "#222 1px 0px 5px 0px"
              }}
              onClick={handlePostClick}
            >
              Post
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
            >
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                {warningMessage}
              </Alert>
            </Snackbar>
          </Box>
          <Box
            m="3rem"
            sx={{ display: { xs: "none", md: "flex" } }}
            alignItems="center"
            justifyContent="center"
          >
            {data !== undefined && data !== null && (
              <Datatable rows={data}></Datatable>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Facebook;
