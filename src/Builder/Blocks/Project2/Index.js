import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import Setting from "./Setting";
import ContentEditable from "react-contenteditable";

const defaultProps = {
  backgroundColor: "bg-[#ECF2FB]",
  backgroundOpacity: "bg-opacity-0",
  backgroundImage: "",
  title: "#1. Project name 2",
  fontFamily: "Arial",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuad convallis pulvinar et tristique tristique viverra neque. I  malesuada diam sit ornare.Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Malesuada convallis pulvinar et tristique tristique viverra neque. Id malesuada diam sit ornare.",
  image:
    "https://res.cloudinary.com/sumit9988/image/upload/v1642755222/Group_6_jm3l4s.png",
  alt: "image",

  // Title Props
  titleColor: "#11111",
  titleItalic: "",
  titleUnderline: "",
  titleTransform: "normal-case",
  titleFontFamily: "Arial",
  titleFontWeight: "font-semibld",
  titleLetterSpacing: "",

  // Subtitle Props

  subTitleColor: "#111111",
  subTitleItalic: "",
  subTitleUnderline: "",
  subTitleTransform: "normal-case",
  subTitleFontFamily: "Arial",
  subTitleFontWeight: "font-semibld",
  subTitleLetterSpacing: "",

  //  linl Props

  link: "Read more",
  url:'https://www.google.com',

  linkColor: "##2B8EE9",
  linkItalic: "",
  linkUnderline: "",
  linkTransform: "normal-case",
  linkFontFamily: "Arial",
  linkFontWeight: "font-semibld",
  linkLetterSpacing: "",
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
    link,
    url,
    linkColor,
    linkItalic,
    linkUnderline,
    linkTransform,
    linkFontWeight,
    linkFontFamily,
    linkLetterSpacing

  } = props;
  const backgroundColorName = `bg-[${backgroundColor}]`;
  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div
      ref={connect}
      style={{
        backgroundImage: backgroundImage ? "url(" + backgroundImage + ")" : "",
      }}
    >
      <div className={`${backgroundColorName} ${backgroundOpacity} `}>
        <div className="flex justify-center items-center mx-auto flex-col ">
          <div className="pt-20  w-full md:w-9/12 mx-auto">
          
          

            <ContentEditable
              html={title} // innerHTML of the editable div
              disabled={!enabled}
              onChange={(e) => {
                setProp((prop) => (prop.title = e.target.value), 500);
              }}
              style={{ fontFamily: titleFontFamily }}
              className={`text-2xl  leading-6  text-center text-[${titleColor}] ${titleItalic} ${titleUnderline} ${titleTransform} ${titleFontWeight} ${titleLetterSpacing}`}
            />

            <ContentEditable
              html={subtitle} // innerHTML of the editable div
              disabled={!enabled}
              onChange={(e) => {
                setProp((prop) => (prop.subtitle = e.target.value), 500);
              }}
              style={{ fontFamily: subTitleFontFamily }}
              className={`text-base pt-2 leading-6 text-center text-[${subTitleColor}] ${subTitleItalic} ${subTitleUnderline} ${subTitleTransform} ${subTitleFontWeight} ${subTitleLetterSpacing}`}
            />

            <div className="item-center text-center mt-4">
              <a
              className={`text-lg  w-full mx-auto  leading-6  text-center text-[${linkColor}] ${linkItalic} ${linkUnderline} ${linkTransform} ${linkFontWeight} ${linkLetterSpacing}`}
                href={url}
                style={{ fontFamily: linkFontFamily }}
              >
                {link}
              </a>
            </div>
            <div className="pt-4">
              <img className="  w-full" src={image} alt={alt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Index.craft = {
  displayName: "project1",
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
