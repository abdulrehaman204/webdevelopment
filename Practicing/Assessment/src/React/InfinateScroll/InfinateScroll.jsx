import { useEffect, useState } from "react";

function InfinateScroll() {
  const [items, setItems] = useState([]);

  const loadMore = () => {
    setItems(prev => [...prev, ...Array(10).fill("Item")]);
  };

  useEffect(() => {
    loadMore();

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return items.map((item, i) => <p key={i}>{item}</p>);
}

export default InfinateScroll;