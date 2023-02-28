import { RoughNotation } from "react-rough-notation";

const TextFocus = ({ text, state }) => {
  return (
    <>
      {state ? (
        <RoughNotation
          show={true}
          type="underline"
          padding={[-2, -2]}
          strokeWidth="2"
          animationDelay={500}
          animationDuration={300}
        >
          {text}
        </RoughNotation>
      ) : (
        `${text}`
      )}
    </>
  );
};

export default TextFocus;

/* 
     {focTitle.focus ? (
          <RoughNotation
            show={true}
            type="underline"
            padding={[-2, -2]}
            strokeWidth="2"
            animationDelay={500}
            animationDuration={300}
          >
            {text}
          </RoughNotation>
        ) : (
          { text }
        )} */
