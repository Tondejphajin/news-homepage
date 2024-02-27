import NewTopic from "./NewTopic";
import { newTopics } from "../constants/newTopics";
import Seperator from "./Seperator";

export default function NewSection() {
  return (
    <div className="mt-[32px] ml-[24px] mr-[24px]">
      <h1 className="font-bold text-l text-yellow">New</h1>
      <div className="mt-[34px]">
        {newTopics.map((topic, index) => {
          return (
            <>
              <NewTopic
                topic={topic.title}
                description={topic.description}
              ></NewTopic>
              {index < newTopics.length - 1 && <Seperator />}
            </>
          );
        })}
      </div>
    </div>
  );
}
