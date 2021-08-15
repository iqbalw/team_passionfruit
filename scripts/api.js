const TRADE_ME_CONFIG = {
  key: "994D747BFA3033F7222D48A2336BB056",
  secret: "A6771E4ED0E2AFE011850462E45196D8"
};

/*
regionIds = {
  9 = "Northland",
  1 = "Auckland",
  2 = "Bay of Plenty",
  14 = "Waikato",
  12 = "Taranaki",
  15 = "Wellington",
  3 = "Canterbury",
  10 = "Otago",
  11 = "Southland"
}
*/

const fetchData = async (region) => {

  let url = "https://api.tmsandbox.co.nz/v1/Search/Property/Residential.json?";

  if (region) {
    url.concat("region=" + region);
  }

  const response = await fetch(
    url,
    {
      headers: {
        Authorization: `OAuth oauth_consumer_key=${TRADE_ME_CONFIG.key}, oauth_signature_method=PLAINTEXT, oauth_signature=${TRADE_ME_CONFIG.secret}%26`
      }
    }
  );

  const data = await response.json();

  console.log(data);
};

fetchData();