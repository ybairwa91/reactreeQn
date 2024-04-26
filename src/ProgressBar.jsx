/* eslint-disable react/prop-types */
//Q.2 Progress Bar
// Create a component called ProgressBar displays a progress bar.
// The progress bar should have the following styling applied:

// A width of 100%
// A height of 20px
// A border radius of 5px
// The completed bit should be green
// The remaining bit should be lightgrey
// The component should accept a percent prop which is used to determine
// how many percents of the progress bar to fill with green colour.



export default function App({ percentage = 12 }) {
  const style = {
    width: "100%",
    background: "green",
    borderRadius: "5px",
    height:"20px"
  };
  return <progress value={percentage} max={100} style={style}></progress>;
}
