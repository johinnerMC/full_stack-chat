import moment from "moment";

export const hourMonth = (date: Date) => {
	const today = moment(date);
	return today.format("HH:mm a | MMMM Do");
};
