export const setModalState = (state, setState) => {
  const root = document.getElementById("html");
  if (state) root.classList.add("is-clipped");
  else root.classList.remove("is-clipped");

  setState(state);
};

export const diffDates = (initial, final) => {
  const diff = new Date(final).getTime() - new Date(initial).getTime();
  return Math.ceil(diff / (1000 * 3600 * 24) + 1);
};

export const delay = async (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export const formatDatetimeToString = (datetime) => {
  const [date, hour] = datetime.split("T");
  const newDate = date.split("/").reverse().join("/");
  const newHour = hour && hour.split(".")[0];
  return `${newDate}${newHour ? `, ${newHour}` : ""}`;
};

export const flatMembers = (team) => {
  if (team.id) {
    return {
      ...team,
      members: team.members.map((member) => member.id),
    };
  }
  return team;
};
