import express, { Router } from "express";
import { accessSync, promises as fsPromises } from "fs";
import path from "path";
import sharp from "sharp";
import * as fs from "fs";

const routes = Router();

const isAccessable = async (filenmae: string) => {
  try {
    await fsPromises.access(filenmae, fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
};
// the endpoint for resizing the image..
routes.get("/", async (req: express.Request, res: express.Response) => {
  // catching parameters values..
  const queryFilename = req.query.filename as string;
  const queryWidth: number = parseInt(req.query.width as unknown as string);
  const queryHeight: number = parseInt(req.query.height as unknown as string);

  const imagePath = path.resolve(
    "./",
    "assets",
    "full",
    queryFilename + ".jpg"
  );
  const outputImagePath = path.resolve(
    "./",
    "assets",
    "thumb",
    queryFilename + queryWidth + "-" + queryHeight + ".jpg"
  );
  const outputImagePathDir = path.resolve("./", "assets", "thumb");
  try {
    // parameters test base cases
    if (!(await isAccessable(imagePath))) {
      res.send("file name is not found.. please enter a filename and width and height to resize it");
    }
    if (isNaN(queryHeight) || isNaN(queryWidth)) {
      res.send(
        "please enter a width and height parameters to resize the picture..."
      );
    } else if (queryWidth < 0 || queryHeight < 0) {
      res.send("please enter values or width and height bigger than 0");
    }

    // the full path for the new resized picture
    const newImageFullPath =
      outputImagePathDir +
      queryFilename +
      queryWidth +
      "-" +
      queryHeight +
      ".jpg";
    // check if the picture has resized before and return it
    if (await isAccessable(newImageFullPath)) {
      res.status(200).sendFile(newImageFullPath);
    }

    //  doing the resize with sharp
    await sharp(imagePath)
      .resize(queryWidth, queryHeight)
      .toFile(outputImagePath);
    //  sending the image back to to the user...
    res.status(200).sendFile(outputImagePath);
  } catch (error) {
    console.log("error in resizing " + error);
  }
});

export default routes;
