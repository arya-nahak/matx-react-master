import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Add } from "@mui/icons-material";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Icon,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Box,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { SimpleCard } from "..";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DATE_VALIDATION_PROP_NAMES } from "@mui/x-date-pickers/internals/utils/validation/extractValidationProps";

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const subscribarList = [
  {
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD.",
  },
  {
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
  },
  {
    name: "james cassegne",
    date: "8 january, 2019",
    amount: 5000,
    status: "close",
    company: "Collboy Tech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
];

const suggestions = [
  { label: "0 to 1 year" },
  { label: "1 to 3 years" },
  { label: "3 to 5 years" },
  { label: "5 to 8 years" },
];

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

// const DialogRoot = styled("div")(({ theme }) => ({
//   "& .formControl": {
//     marginTop: theme.spacing(2),
//     marginBottom: theme.spacing(2),
//     minWidth: 774,
//   },
// }));

function JobList() {
  // const [state, setState] = useState({ date: new Date() });
  const [state, setState] = useState([]);

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    // console.log("submitted");
    console.log(event);
    console.log(state);
    console.log(subscribarList);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const {
    CompanyName,
    Position,
    JobType,
    NoofVancancy,
    EnterCity,
    EnterState,
    gender,
    date,
    JobCategory,
    experience,
  } = state;

  // const [selectexp, setselectexp] = useState("Select Experience");

  // function handleMaxWidthChange(event) {
  //   setselectexp(event.target.value);
  // }

  const AutoComplete = styled(Autocomplete)(() => ({
    width: 770,
    marginBottom: "8px",
  }));

  //   create a form in material ui
  //   using this fields "
  //Select Experience,Posted
  //   Date,Last Date To ApplyClose Date,
  //   Salary Form,Salary To,
  //   Enter Counter,Enter Education Level,Description"

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          margin: "25px",
        }}
      >
        <Toolbar>
          {/* Add your logo or menu icon here */}
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#000" }}
          >
            {/* Add your app title here */}
            Job List
          </Typography>

          {/* Add other buttons or components here */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #4d06a5",
              borderRadius: "0.375rem",
              background: "#4d06a5",
              cursor: "pointer",
              color: "white",
              // fontSize: '15px',
              padding: "0.579rem 1rem",
            }}
          >
            <Add sx={{ fontSize: "20px", marginRight: "5px" }} />
            Add New Job
          </button>
        </Toolbar>
      </AppBar>

      {/* form */}

      <Stack spacing={3}>
        <SimpleCard title="Simple Form">
          <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                  <TextField
                    type="text"
                    name="CompanyName"
                    id="standard-basic"
                    value={CompanyName || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Company Name"
                    validators={[
                      "required",
                      "minStringLength: 4",
                      "maxStringLength: 9",
                    ]}
                  />

                  <TextField
                    type="text"
                    name="Position"
                    label="Position"
                    onChange={handleChange}
                    value={Position || ""}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  {/* <DialogRoot>
                    <FormControl className="formControl">
                      <InputLabel htmlFor="experience">
                        Select Experience
                      </InputLabel>
                      <Select
                        value={selectexp}
                        onChange={handleMaxWidthChange}
                        inputProps={{ name: "experience", id: "experience" }}
                      >
                        <MenuItem value={false}>false</MenuItem>
                        <MenuItem value="0 to 1 year">0 to 1 year</MenuItem>
                        <MenuItem value="1 to 3 years">1 to 3 years</MenuItem>
                        <MenuItem value="3 to 5 years">3 to 5 years</MenuItem>
                        <MenuItem value="5 to 8 years">5 to 8 years</MenuItem>
                      </Select>
                    </FormControl>
                  </DialogRoot> */}

                  <AutoComplete
                    options={suggestions}
                    getOptionLabel={(option) => option.label}
                    sx={{ width: "100%", marginBottom: "20px" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                      // value={Select || ""}
                        label="Select Experience"
                        variant="outlined"
                        // fullWidth
                        validators={["required"]}
                        errorMessages={["this field is required"]}
                      />
                    )}
                  />

                  <TextField
                    type="text"
                    name="JobCategory"
                    label="Job Category"
                    value={JobCategory || ""}
                    onChange={handleChange}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />

                  {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={date}
                      onChange={handleDateChange}
                      renderInput={(props) => (
                        <TextField
                          {...props}
                          label="Date picker"
                          id="mui-pickers-date"
                          sx={{ mb: 2, width: "100%" }}
                        />
                      )}
                    />
                  </LocalizationProvider> */}

                  <TextField
                    sx={{ mb: 4 }}
                    type="text"
                    name="JobType"
                    label="Job Type"
                    onChange={handleChange}
                    value={JobType || ""}
                    errorMessages={["this field is required"]}
                    validators={["required"]}
                  />
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                  <TextField
                    type="number"
                    name="NoofVancancy"
                    value={NoofVancancy || ""}
                    label="No. of Vancancy"
                    onChange={handleChange}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <DatePicker
                    inputFormat="MM/DD/YYYY"
                    value={date || ''}
                    variant="standard"
                    id="mui-pickers-date"
                    label="Date picker"
                    sx={{ width: "100%", marginBottom: "20px" }}
                    slotProps={{ textField: { size: "large" } }}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />

                  <TextField
                    name="EnterCity"
                    type="text"
                    label="Enter City"
                    value={EnterCity || ""}
                    onChange={handleChange}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <TextField
                    type="text"
                    name="EnterState"
                    onChange={handleChange}
                    label="Enter State"
                    value={EnterState || ""}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <RadioGroup
                    row
                    name="gender"
                    sx={{ mb: 2 }}
                    value={gender || ""}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="Male"
                      label="Male"
                      labelPlacement="end"
                      control={<Radio color="secondary" />}
                    />

                    <FormControlLabel
                      value="Female"
                      label="Female"
                      labelPlacement="end"
                      control={<Radio color="secondary" />}
                    />

                    <FormControlLabel
                      value="Others"
                      label="Others"
                      labelPlacement="end"
                      control={<Radio color="secondary" />}
                    />
                  </RadioGroup>

                  <FormControlLabel
                    control={<Checkbox />}
                    label="I have read and agree to the terms of service."
                  />
                </Grid>
              </Grid>

              <Button color="primary" variant="contained" type="submit">
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
              </Button>
            </ValidatorForm>
          </div>
        </SimpleCard>
      </Stack>

      <SimpleCard title="Simple Table">
        <Box width="100%" overflow="auto">
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="center">Company</TableCell>
                <TableCell align="center">Start Date</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {subscribarList.map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{subscriber.name}</TableCell>
                  <TableCell align="center">{subscriber.company}</TableCell>
                  <TableCell align="center">{subscriber.date}</TableCell>
                  <TableCell align="center">{subscriber.status}</TableCell>
                  <TableCell align="center">${subscriber.amount}</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <Icon color="error">close</Icon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </Box>
      </SimpleCard>
    </>
  );
}

export default JobList;
