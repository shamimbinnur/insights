import javaScript from "../../img/topicThumbnails/javascript.svg";
import python from "../../img/topicThumbnails/python.svg";
import typeScript from "../../img/topicThumbnails/typescript.svg";
import java from "../../img/topicThumbnails/java.svg";
import cSharp from "../../img/topicThumbnails/csharp.svg";
import cpp from "../../img/topicThumbnails/cpp.svg";
import php from "../../img/topicThumbnails/php.svg";
import c from "../../img/topicThumbnails/c.svg";
import ruby from "../../img/topicThumbnails/ruby.svg";
import ai from "../../img/topicThumbnails/ai.svg";
import ml from "../../img/topicThumbnails/ml.svg";
import react from "../../img/topicThumbnails/react.svg";
import contextThumbnailImage from "../../img/open-sourced-with-bg-icon.png";

const topicThumbnails = {
  javascript: javaScript,
  python: python,
  typescript: typeScript,
  java: java,
  csharp: cSharp,
  cpp: cpp,
  php: php,
  c: c,
  ruby: ruby,
  ai: ai,
  ml: ml,
  react: react
};

type ObjectKey = keyof typeof topicThumbnails;

const getTopicThumbnail = (topic: string) => {
  return topicThumbnails[topic as ObjectKey] || contextThumbnailImage;
};

export default getTopicThumbnail;