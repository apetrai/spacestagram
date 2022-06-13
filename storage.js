const LOCAL_STORAGE_KEY = "likes"

/*
This is an array to allow for scalability.
Our entries look like:
[ "2022-06-13", "2022-06-12", "2022-06-11" ]
and only the dates that have already been liked before are persisted.
*/
const getLikedDates = () => {
  const persisted = localStorage.getItem(LOCAL_STORAGE_KEY)
  return persisted ? JSON.parse(persisted) : []
}

const hasLikedPhoto = (date) => {
    return getLikedDates().includes(date)
  }