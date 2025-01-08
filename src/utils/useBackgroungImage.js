const useBackgroundImage = ({ weatherCondition, is_day }) => {
  if (
    weatherCondition.includes("rainy") ||
    weatherCondition.includes("raining")
  ) {
    return is_day ? "../assets/rainy_day.jpg" : "../assets/nightrain.jpg";
  }
  if (
    weatherCondition.includes("thunderstorm") ||
    weatherCondition.includes("thunder")
  ) {
    return is_day
      ? require("../assets/thunderstorm.jpeg")
      : require("../assets/thunderstorm.jpeg");
  }
  if (weatherCondition.includes("storm")) {
    return is_day
      ? require("../assets/thunderstorm.jpeg")
      : require("../assets/thunderstorm.jpeg");
  }
  if (weatherCondition.includes("partly")) {
    return is_day
      ? require("../assets/partlyday.jpeg")
      : require("../assets/partlynight.jpg");
  }
  if (
    weatherCondition.includes("cloud") ||
    weatherCondition.includes("cloudy")
  ) {
    return is_day
      ? require("../assets/clodyday.jpeg")
      : require("../assets/cloudynight.jpg");
  }
  if (weatherCondition.includes("clear")) {
    return is_day
      ? require("../assets/sunny.jpg")
      : require("../assets/clear_night.jpg");
  }
  // Default background based on is_day
  return is_day ? require("../assets/day.jpg") : require("../assets/night.jpg");
};
export default useBackgroundImage;
