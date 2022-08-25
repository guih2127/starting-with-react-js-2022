type TweetProps = {
  text: string;
};

export default function Tweet(props: TweetProps) {
  return (
    <div style={{ backgroundColor: "white", margin: "5px", maxWidth: "200px" }}>
      {props.text}
    </div>
  );
}
