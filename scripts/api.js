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

const median = (values) => {
  if(values.length ===0) return 0;

  values.sort(function(a,b){
    return a-b;
  });

  var half = Math.floor(values.length / 2);

  if (values.length % 2)
    return values[half];

  return (values[half - 1] + values[half]) / 2.0;
}

const fetchData = async (region) => {

  let url = "https://api.tmsandbox.co.nz/v1/Search/Property/Residential.json?";

  url.concat("rows=1");

  if (region) {
    url.concat("&region=" + region);
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

  //DEBUG
  // console.log(data);

  return data.List;
};

const getMedianPrice = async () => {

  // let region = document.getElementById("select").value;
  const regionData = await fetchData(15);

  const property = regionData[1];
  const askingPrice = property.PriceDisplay.substr(15);
  const price = parseFloat(askingPrice.replace(/,/g, ''));

  return price;
}

//DEBUG
getMedianPrice();