const TRADE_ME_CONFIG = {
    key: "994D747BFA3033F7222D48A2336BB056",
    secret: "A6771E4ED0E2AFE011850462E45196D8"
  };

const fetchData = async () => {

    const response = await fetch(
      "https://api.tmsandbox.co.nz/v1/Search/Property/Residential.json",
      {
        headers: {
          Authorization: `OAuth oauth_consumer_key=${TRADE_ME_CONFIG.key}, oauth_signature_method=PLAINTEXT, oauth_signature=${TRADE_ME_CONFIG.secret}%26`
        }
      }
    );

    const data = await response.json();

    console.log("GET Properties Total Count: " + data.TotalCount);
};

fetchData();