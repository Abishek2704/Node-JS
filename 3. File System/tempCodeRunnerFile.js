if (!fs.existsSync("docs")) {
  fs.mkdir("docs", (err) => {
    if (err) {
      console.log("Folder not created", err.message);
    } else {
      console.log("Folder created Successfully");
    }
  });
}