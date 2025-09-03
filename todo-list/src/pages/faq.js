import { useEffect, useState } from "react";

function Faq() {
  const [faqData, setFaqData] = useState([]);

  useEffect(
    async () => {
      const response = await fetch("https://localhost:3000/api/faq");
      const data = await response.json();

      setFaqData(data);
    },
    [],
    1,
  );

  return (
    <div>
      <ul>
        {faqData?.map((item) => {
          <li>{item.topic}</li>;
        })}
      </ul>
    </div>
  );
}

export default Faq;
