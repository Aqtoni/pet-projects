import * as uuid from "uuid";
import * as path from "path";

class FileService {
  saveFile(file) {
    try {
      const fileName = uuid.v4() + ".jpg";
      const filePath = path.resolve("static", fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FileService();

/* This code is a class called FileService which contains a saveFile method. 
The saveFile method takes in a file as an argument and generates a unique file name using the uuid library. 
It then uses the path library to resolve the file name to a static directory. 
Finally, it moves the file to that directory and returns the file name. 
If an error occurs, it logs it to the console. The class is then exported as a new instance of FileService. */
