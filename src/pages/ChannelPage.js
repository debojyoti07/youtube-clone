import { useParams } from "react-router-dom";

function ChannelPage() {
  const { id } = useParams();

  return (
    <div className="channel-page">
      <h2>Channel: {id}</h2>
      <p>Channel videos and info will appear here...</p>
    </div>
  );
}

export default ChannelPage;
