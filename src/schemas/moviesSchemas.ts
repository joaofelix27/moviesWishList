import joi from "joi";

const youtubeLinkRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;

export const moviesSchema = joi.object({
  name: joi.string().required(),
  youtubeLink: joi.string().required().pattern(youtubeLinkRegex),
});
