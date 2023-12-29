import vn from './vn';
import en from './en';
import cn from './cn';

let languagePack = {};
let localtionsLang = ""
export const getLanguagePack = async () => {
  if (Object.keys(languagePack).length === 0) {
    let locations = JSON.parse(localStorage.getItem("locations")) || null;
    if (locations == null) {
      const result = await languagesLocation();
      locations = {
        language: result.country
      };
      localStorage.setItem("locations", JSON.stringify(locations));
    }
    localtionsLang = "EN"
    languagePack = en;
    if (locations.language === "VN") {
      localtionsLang = "VN"
      languagePack = vn;
    } 
    if (locations.language === "CN") {
      localtionsLang = "CN"
      languagePack = cn;
    } 
  }
  
  return languagePack;
};

export const setLanguage = (language) => {
  const locations = JSON.parse(localStorage.getItem("locations")) || {};
  locations.language = language;
  localStorage.setItem("locations", JSON.stringify(locations));
  if (language === "VN") {
    languagePack = vn;
  } else {
    languagePack = en;
  }
};

export { languagePack,localtionsLang }; // Xuất biến languagePack trực tiếp

async function languagesLocation() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  var response = await fetch("https://api.country.is/", requestOptions);
  var result = await response.json();
  return result;
}
// Danh sách ngôn ngữ được hỗ trợ
export const LangList = [
    "VN",
    "EN",
    "CN"
]
// Mặc định, gọi hàm getLanguagePack() để tải ngôn ngữ khi file được import
getLanguagePack();
