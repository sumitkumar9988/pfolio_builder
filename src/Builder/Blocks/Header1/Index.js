import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import Setting from "./Setting";
import ContentEditable from "react-contenteditable";

const defaultProps = {
  backgroundColor: "bg-[#ECF2FB]",
  backgroundOpacity:"bg-opacity-0",
  backgroundImage:"https://res.cloudinary.com/sumit9988/image/upload/v1642765087/76.-Rice-Flower_1_zdrdoc.jpg",
  title: "Emilia Clarke",
  fontFamily: "Arial",
  subtitle:
    " A product designer based at Toronto,Canada . I help startups build their product.",
  image:
    "https://res.cloudinary.com/sumit9988/image/upload/v1642728661/pexels-spring-toan-4075524_1_hfdz4h.png",
  alt: "image",

  // Title Props
  titleColor:"#2C2C2C",
  titleItalic:"",
  titleUnderline:"",
  titleTransform:"normal-case",
  titleFontFamily:"Arial",
  titleFontWeight:"font-bold",
  titleLetterSpacing:"",

  // Subtitle Props

  subTitleColor:"#2C2C2C",
  subTitleItalic:"",
  subTitleUnderline:"",
  subTitleTransform:"normal-case",
  subTitleFontFamily:"Arial",
  subTitleFontWeight:"font-bold",
  subTitleLetterSpacing:"",


};

const Index = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };

  const {
    backgroundColor,
    backgroundImage,
    title,
    subtitle,
    image,
    alt,
    fontFamily,
    backgroundOpacity,
    titleColor,
    titleItalic,
    titleUnderline,
    titleTransform,
    titleFontFamily,
    titleFontWeight,
    titleLetterSpacing,
    subTitleColor,
    subTitleItalic,
    subTitleUnderline,
    subTitleTransform,
    subTitleFontFamily,
    subTitleFontWeight,
    subTitleLetterSpacing,
  } = props;
  const backgroundColorName = `bg-[${backgroundColor}]`;
  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  // Text Property
  // Color
  // Italic
  // Underline
  // Transform
  // FontFamily
  // FontWeight
  // LetterSpacing


  return (
    <div
      ref={connect}
      style={{
        backgroundImage: backgroundImage ? "url(" + backgroundImage + ")" : "",
      }}
    >
      <div className={`overflow-x-hidden ${backgroundColorName} ${backgroundOpacity}  h-screen`}>
        <div className="flex flex-col md:flex-row  h-screen justify-center items-center ">
          <div className="w-full md:w-1/2  flex justify-center items-center">
            <div className="mt-10 sm:mt-96 md:mt-0 h-full flex lg:h-96 px-4 justify-center items-center md:items-start flex-col md:px-6 xl:px-20">
              <ContentEditable
                html={title} // innerHTML of the editable div
                disabled={!enabled}
                onChange={(e) => {
                  setProp((prop) => (prop.title = e.target.value), 500);
                }}
                style={{ fontFamily: titleFontFamily }}
                className={`text-2xl sm:text-5xl text-center md:text-left  text-[${titleColor}] ${titleItalic} ${titleUnderline} ${titleTransform} ${titleFontWeight} ${titleLetterSpacing}`}
              />

              <ContentEditable
                html={subtitle} // innerHTML of the editable div
                disabled={!enabled}
                onChange={(e) => {
                  setProp((prop) => (prop.subtitle = e.target.value), 500);
                }}
                style={{ fontFamily: subTitleFontFamily }}
                className={`text-center md:text-left  text-base leading-normal text-[${subTitleColor}] ${subTitleItalic} ${subTitleUnderline} ${subTitleTransform} ${subTitleFontWeight} ${subTitleLetterSpacing}`}
              />
            </div>
          </div>
          <div className="w-full md:h-full md:w-1/2">
            <img
              className=" bg-cover bg-center h-full  w-full"
              src={image}
              alt={alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Index.craft = {
  displayName: "Header1",
  props: defaultProps,
  rules: {
    canDrop: () => true,
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => false,
  },
  related: {
    settings: Setting,
  },
};

export default Index;
