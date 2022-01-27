import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import Setting from "./Setting";
import ContentEditable from "react-contenteditable";

const defaultProps = {
  backgroundColor: "bg-[#ECF2FB]",
  backgroundOpacity: "bg-opacity-0",
  backgroundImage:
    "",
  title: "#1. Project name",
  fontFamily: "Arial",
  subtitle:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada convallis pulvinar et tristique tristique  viverra neque.",
  image:
    "https://res.cloudinary.com/sumit9988/image/upload/v1642754526/unsplash_ir5lIkVFqC4_zsdawv.png",
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
      <div
        className={`${backgroundColorName} ${backgroundOpacity} overflow-y-hidden`}
      >
        <div className="mx-auto container py-12 px-4">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-11/12 xl:w-10/12 bg-[#D9E5F3] md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
              <div>
                <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                  <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                    <div>
                      <ContentEditable
                        html={title} // innerHTML of the editable div
                        disabled={!enabled}
                        onChange={(e) => {
                          setProp((prop) => (prop.title = e.target.value), 500);
                        }}
                        style={{ fontFamily: titleFontFamily }}
                        className={`text-2xl lg:w-10/12 leading-6 md:text-left text-center  text-[${titleColor}] ${titleItalic} ${titleUnderline} ${titleTransform} ${titleFontWeight} ${titleLetterSpacing}`}
                      />
                      <ContentEditable
                        html={subtitle} // innerHTML of the editable div
                        disabled={!enabled}
                        onChange={(e) => {
                          setProp(
                            (prop) => (prop.subtitle = e.target.value),
                            500
                          );
                        }}
                        style={{ fontFamily: subTitleFontFamily }}
                        className={`text-base lg:w-10/12 pt-2 leading-6 md:text-left text-center text-[${subTitleColor}] ${subTitleItalic} ${subTitleUnderline} ${subTitleTransform} ${subTitleFontWeight} ${subTitleLetterSpacing}`}
                      />
                    </div>
                  </div>
                  <div className="md:w-1/3 w-2/3">
                    <img
                      className=" bg-cover bg-center h-full  w-full"
                      src={image}
                      alt={alt}
                    />
                  </div>
                </div>
              </div>
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


