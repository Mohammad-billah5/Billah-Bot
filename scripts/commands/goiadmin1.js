module.exports.config = {
  name: "goiadmin1",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61550001988386") {
    var aid = ["61550001988386"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [",আর পারলামনা bot bot করতে করতে এখন মেনশন দেয়া শুরু করছে 🙂",  "আছি আছি এতো মেনশন দিতে হবেনা😌", " দারা তোদের একটা ব্যবস্হা নিতে হবে খালি ডাকে আর ডাকে 🥲", "Mantion_দিস না _রাহাত বস এর  মন ভালো নেই আস্কে-!💔🥀", "- বস কে না ডেকে আমাকে ডাকো ভালোবাসা দিমু🫂❤️", "mantion দিস না রাহাত বস ফারিয়া মেডাম এর সাথে  বেস্ত🙈 😒"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","এতো মিনশন নাহ দিয়া ইনবক্স চলে জা 😒 😏","Mantion_ না দিয়ে আমাকে তোমার চিপায় নিয়া নাও🥵🫦","মেনশন দিসনা বাল পাকনা রাহাত প্রচুর বিচি😴😒 ","এত Mantion_ দিস কেন তোর নানির সাথে হাংগা দিবি নাকি 🙄😑"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
