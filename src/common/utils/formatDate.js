// 날짜 포맷 해주는 함수.
export const formatDate = (dateStr) => {
  if (!dateStr || typeof dateStr !== "string") return "";

  let monthAndDay = dateStr.substring(0, 5);
  let month = parseInt(monthAndDay.split(".")[0]);
  let day = parseInt(monthAndDay.split(".")[1]);
  return month + "월 " + day + "일";
};
