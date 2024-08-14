"use server";

export const fetchAnime = async (page: number) => {
  const responce = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await responce.json();
  console.log(data);
  return data;
};
