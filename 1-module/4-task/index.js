function checkSpam(str) {
  if (str.toLowerCase().includes("1xBet".toLocaleLowerCase()) || str.toLowerCase().includes("XXX".toLocaleLowerCase())) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam("innocent rabbit"));
