export const sleep = async (ms: number): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const Time = {
	Milliseconds: 1,
	Seconds: 0,
	Minutes: 0,
	Hours: 0,
	Days: 0,
};

Time.Seconds = 1000 * Time.Milliseconds;
Time.Minutes = 60 * Time.Seconds;
Time.Hours = 60 * Time.Minutes;
Time.Days = 24 * Time.Hours;
