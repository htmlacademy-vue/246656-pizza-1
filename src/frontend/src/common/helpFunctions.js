export const getNameFromPath = function (path, fileNameType) {
  switch (fileNameType) {
    case "fullName":
      return path.split("/").slice(-1).toString().split(".svg")[0];
    case "lastWord":
      return path
        .split("/")
        .slice(-1)
        .toString()
        .split(".svg")[0]
        .split("-")
        .slice(-1)
        .join("")
        .toString();
  }
};
