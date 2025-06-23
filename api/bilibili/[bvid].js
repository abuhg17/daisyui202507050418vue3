// api/bilibili/[bvid].js
const axios = require("axios");

// Bilibili 影片資訊 API 端點
const BILIBILI_API_URL = "https://api.bilibili.com/x/web-interface/view";

module.exports = async (req, res) => {
  const { bvid } = req.query; // Vercel Serverless Functions 使用 req.query 獲取動態路由參數

  if (!bvid) {
    return res
      .status(400)
      .json({ code: -1, message: "Missing bvid parameter" });
  }

  try {
    const response = await axios.get(BILIBILI_API_URL, {
      params: { bvid: bvid },
    });

    if (response.data.code === 0) {
      res.status(200).json({
        code: 0,
        data: {
          bvid: bvid,
          title: response.data.data.title,
          stat: {
            view: response.data.data.stat.view,
            like: response.data.data.stat.like,
            danmaku: response.data.data.stat.danmaku,
          },
        },
      });
    } else {
      res.status(response.data.code).json({
        code: response.data.code,
        message: response.data.message || "Bilibili API error",
      });
    }
  } catch (error) {
    console.error("Error fetching Bilibili data:", error.message);
    res.status(500).json({
      code: -1,
      message: "Network Error or Bilibili API is unreachable",
      error: error.message,
    });
  }
};
