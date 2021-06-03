// Write a function that returns the current age of the person in years.
exports.ageAtDeath = function (birthDate, deathDate) {
  const birthYear = birthDate.getUTCFullYear();
  const deathYear = deathDate.getUTCFullYear();

  const birthMonth = birthDate.getMonth();
  const deathMonth = deathDate.getMonth();

  const birthDayOfWeek = birthDate.getDate();
  const deathDayOfWeek = deathDate.getDate();

  let age = deathYear - birthYear;

  if (birthMonth < deathMonth) {
    // If death month is past birthday then you can return age
    return age;
  } else if (birthMonth > deathMonth) {
    // If birthday month has not come then subtract age by 1
    return age - 1;
  } else if (birthMonth === deathMonth && birthDayOfWeek > deathDayOfWeek) {
    // If the same month and birthday has not yet come subtract age by 1
    return age - 1;
  } else if (birthMonth === deathMonth && birthDayOfWeek <= deathDayOfWeek) {
    // If same month and birthday is same as death day or greater return age
    return age;
  }

  return 0;
};
