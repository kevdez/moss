console.log("Starting the react-blessed version of moss")

require("@babel/register")({
  presets: [["@babel/preset-env"], ["@babel/preset-react"]]
});

require('./src/app');