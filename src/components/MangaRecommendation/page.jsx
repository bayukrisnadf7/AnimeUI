"use client";
import { useState, useEffect } from "react";
import { getMangaRecommendation } from "../../services/manga.service";
const MangaRecommendation = () => {
  const [mangaRecom, setMangaRecom] = useState([]);
  useEffect(() => {
    getMangaRecommendation((data) => {
      setMangaRecom(data);
    });
  }, []);
  return (
    <div className="grid grid-cols-3">
      {mangaRecom.map((manga) => (
        <div key={manga.mal_id}>
          <img
            src={manga.images.jpg.image_url}
            width={150}
            height={150}
            className="rounded-lg max-h-52"
          />
          <p>{manga.title}</p>
        </div>
      ))}
    </div>
  );
};
export default MangaRecommendation;
