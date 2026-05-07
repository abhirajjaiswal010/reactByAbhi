import { ArrowRightIcon, Bookmark } from "lucide-react";

const card = (props) => {
  console.log(props);

  return (
    <div>
      <div className="card">
        {/* TOP */}
        <div className="top">
          <img src={props.logo} alt="Airbnb logo" height={50} width={50} />

          <button className="save-btn">
            Save Me <Bookmark size={16} />
          </button>
        </div>

        {/* CENTER */}
        <div className="center">
          <h2>
            {props.company} <span>• {props.time}</span>
          </h2>

          <h1>{props.role}</h1>

          <div className="tags">
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="bottom">
          <div>
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>

          <button className="apply-btn">
            Apply Now <ArrowRightIcon size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default card;
