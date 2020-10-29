const sendNewData = (req, res) => {
  const body = req.body;

  res.json({ sdf: "jhkhjk" });
};

module.exports = { sendNewData }; // routing.js 에서 사용하기 위해 모듈로 내보낸다.
