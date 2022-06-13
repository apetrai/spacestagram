const getBtnCopy = (date) => {
  return hasLikedPhoto(date) ? "Liked" : "Like"
}

const initLikeBtn = (date) => {
  console.log(date);
  const likeBtn = document.getElementById("like-button")
  likeBtn.innerText = getBtnCopy(date)
  console.log(getBtnCopy(date));

  likeBtn.addEventListener("click", () => {
    console.log(getBtnCopy(date));
    console.log(hasLikedPhoto(date));

    if (hasLikedPhoto(date)) {
      const updatedLikes = getLikedDates().filter(d => d !== date)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLikes))
    } else {
      const updatedLikes = getLikedDates().concat(date)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLikes))
    }
    likeBtn.innerText = getBtnCopy(date)
  })
}
