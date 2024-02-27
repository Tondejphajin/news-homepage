import NewTopic from "./NewTopic";
import { newTopics } from "../constants/newTopics";
import Seperator from "./Seperator";

export default function NewSection() {
  return (
    <div className="mx-[24px] mt-[32px]">
      <h1 className="text-l font-bold text-yellow">New</h1>
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
