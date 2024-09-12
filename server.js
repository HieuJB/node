// Import express
const express = require('express');
const app = express();

// Middleware để ghi log cho mỗi request
app.use((req, res, next) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress; // Lấy địa chỉ IP của client
  const requestTime = new Date().toLocaleString(); // Lấy thời gian hiện tại
  const requestUrl = req.originalUrl; // Lấy URL được gọi
  console.log(`[${requestTime}] Request from IP: ${clientIp}, URL: ${requestUrl}`);

  // Tiếp tục xử lý request
  next();
});

// API để trả về thời gian hiện tại
app.get('/api/time', (req, res) => {
  const currentTime = new Date().toLocaleString();
  res.json({ message: 'Current time is:', data: 

    [
      {
          "name": "Player Title",
          "code": "PLAYER_TITLE_REPOSITORY",
          "value": "Danh sách cầu thủ bóng đá - Bongdalu"
      },
      {
          "name": "Team Title",
          "code": "TEAM_TITLE_REPOSITORY",
          "value": "Danh sách đội tuyển bóng đá - Bongdalu"
      },
      {
          "name": "Robot meta for player",
          "code": "robot_meta_player_repository",
          "value": "index, follow"
      },
      {
          "name": "followsocial",
          "code": "followsocial",
          "value": "[{\"iconcode\":\"tabler-brand-facebook\",\"url\":\"https://www.facebook.com/\",\"followurl\":false},{\"iconcode\":\"tabler-brand-skype\",\"url\":\"https://www.skype.com/en/\",\"followurl\":false},{\"iconcode\":\"tabler-brand-whatsapp\",\"url\":\"https://web.whatsapp.com/\",\"followurl\":false}]"
      },
      {
          "name": "League Image Height",
          "code": "LEAGUE_IMAGE_HEIGHT",
          "value": "!h50"
      },
      {
          "name": "Robot meta team",
          "code": "robot_meta_team_repository",
          "value": "index, nofollow"
      },
      {
          "name": "Coach content",
          "code": "COACH_CONTENT",
          "value": ""
      },
      {
          "name": "News Keyword",
          "code": "NEWS_KEYWORD",
          "value": "Tin tức"
      },
      {
          "name": "Robot meta for news category",
          "code": "robot_meta_news_category",
          "value": "index,follow"
      },
      {
          "name": "Robot meta for news list",
          "code": "robot_meta_news",
          "value": "index,follow"
      },
      {
          "name": "Robot meta for news tag",
          "code": "robot_meta_news_tag",
          "value": "index,follow"
      },
      {
          "name": "News Title",
          "code": "NEWS_TITLE",
          "value": "Tin tức bóng đá mới nhất - cập nhật liên tục tại bongdalu"
      },
      {
          "name": "Team descriptions",
          "code": "TEAM_DESCRIPTION",
          "value": "Thông tin đội tuyển ${team_name} chi tiết, lịch sử đối đầu, thống kê các thành tích của đội tuyển ${team_name}"
      },
      {
          "name": "Team keyword",
          "code": "TEAM_KEYWORD",
          "value": "${team_name}"
      },
      {
          "name": "Team Title",
          "code": "TEAM_TITLE",
          "value": "${team_name} - Dữ liệu đội tuyển"
      },
      {
          "name": "Iframe Livescore",
          "code": "option_iframe",
          "value": "True"
      },
      {
          "name": "Match playertech title",
          "code": "MATCH_TITLE_PLAYERTECH",
          "value": "${home_name} vs ${away_name} ngày ${date} - Thống kê cầu thủ"
      },
      {
          "name": "League title (List)",
          "code": "LEAGUE_TITLE",
          "value": "Danh sách các giải đấu bóng đá - Bongdalu"
      },
      {
          "name": "robot meta for league (List)",
          "code": "robot_meta_league",
          "value": "index,follow"
      },
      {
          "name": "Timezone",
          "code": "TIMEZONE",
          "value": "GMT+07:00"
      },
      {
          "name": "Match detail keyword",
          "code": "MATCH_KEYWORD_DETAIL",
          "value": "${home_name} VS ${away_name} ngày ${date}"
      },
      {
          "name": "Coach Keyword",
          "code": "COACH_KEYWORD",
          "value": "${coach_name}"
      },
      {
          "name": "Robot meta for coach",
          "code": "robot_meta_coach",
          "value": "noindex,follow"
      },
      {
          "name": "Coach descriptions",
          "code": "COACH_DESCRIPTION",
          "value": "Thông tin chi tiết hồ sơ của huấn luyện viên ${coach_name}. Mọi thông tin về huấn luyện viên được cập nhật mới nhất mỗi ngày tại Bongdalu"
      },
      {
          "name": "Coach Title",
          "code": "COACH_TITLE",
          "value": "Hồ sơ HLV ${coach_name} thông tin chi tiết - Bongdalu"
      },
      {
          "name": "Player keyword",
          "code": "PLAYER_KEYWORD",
          "value": "${player_name}"
      },
      {
          "name": "Player descriptions",
          "code": "PLAYER_DESCRIPTION",
          "value": "Thống kê chi tiết về Hồ sơ cầu thủ ${player_name}. Mọi thông tin về cầu thủ được cập nhật mới nhất 24h mỗi ngày tại Bongdalu"
      },
      {
          "name": "Player Title",
          "code": "PLAYER_TITLE",
          "value": "Hồ sơ cầu thủ ${player_name} thống kê chi tiết - Bongdalu"
      },
      {
          "name": "Robot meta for player",
          "code": "robot_meta_player",
          "value": "noindex,follow"
      },
      {
          "name": "Robot meta for team",
          "code": "robot_meta_team",
          "value": "noindex,follow"
      },
      {
          "name": "FE Site URI",
          "code": "FE_SITE_URI",
          "value": "https://bongdalu61.com/"
      },
      {
          "name": "Robot meta for league detail",
          "code": "robot_meta_league_detail",
          "value": "noindex,follow"
      },
      {
          "name": "Header Script",
          "code": "header_script",
          "value": "<meta name=\"google-site-verification\" content=\"PyIkcGaEZommIjFshHWtrnG9RHcPY0ADJ3E1LrwarzY\" />"
      },
      {
          "name": "Robot meta for match",
          "code": "robot_meta_match",
          "value": "noindex,follow"
      },
      {
          "name": "Hidden Top Tools",
          "code": "HIDDEN_TOP_TOOLS",
          "value": "True"
      },
      {
          "name": "League detail keyword",
          "code": "COMPETITION_KEYWORD",
          "value": "${competition_name}"
      },
      {
          "name": "League detail descriptions",
          "code": "COMPETITION_DESCRIPTION",
          "value": "Thống kê dữ liệu tổng quan của giải đấu ${competition_name} chi tiết và trực quan nhất. Các thông số bảng xếp hạng, thành tích các đội tuyển tham gia của giải ${competition_name} được cập nhật liên tục."
      },
      {
          "name": "League detail title",
          "code": "COMPETITION_TITLE",
          "value": "${competition_name} ,Thông tin giải đấu - Bongdalu"
      },
      {
          "name": "Match h2h keyword",
          "code": "MATCH_KEYWORD_H2H",
          "value": "${home_name} VS ${away_name} ngày ${date} - Thông tin đội hình"
      },
      {
          "name": "Match Oddscomp meta descriptions",
          "code": "MATCH_DESCRIPTION_ODDSCOMP",
          "value": "Tỷ lệ kèo trận đấu ${home_name} VS ${away_name} vào ngày ${date} đầy đủ các loại kèo tài xỉu, kèo Châu Á, kèo Châu Âu... tại bongdalu mới nhất, cập nhật realtime 24/7"
      },
      {
          "name": "Match Oddscomp title",
          "code": "MATCH_TITLE_ODDSCOMP",
          "value": "${home_name} VS ${away_name} ngày ${date} - Tỷ lệ kèo"
      },
      {
          "name": "Match H2H meta descriptions",
          "code": "MATCH_DESCRIPTION_H2H",
          "value": "Dữ liệu phân tích trận ${home_name} VS ${away_name} ngày ${date} đầy đủ nhất, được cập nhật liên tục với dữ liệu chuẩn xác và chi tiết"
      },
      {
          "name": "Match h2h title",
          "code": "MATCH_TITLE_H2H",
          "value": "${home_name} VS ${away_name} ngày ${date} - Thông tin đội hình"
      },
      {
          "name": "Match detail meta descriptions",
          "code": "MATCH_DESCRIPTION_DETAIL",
          "value": "Thông tin chi tiết trận đấu ${home_name} VS ${away_name} ngày ${date} vào lúc ${time}, đầy đủ các thông số phân tích kèo, lịch sử đối đầu, thành tích gần đây... nhanh và chính xác nhất."
      },
      {
          "name": "Match detail title",
          "code": "MATCH_TITLE_DETAIL",
          "value": "${home_name} VS ${away_name} ngày ${date} - Bongdalu"
      },
      {
          "name": "[NEWS] - LIMIT_POST_CATEGORY",
          "code": "LIMIT_POST_CATEGORY",
          "value": "6"
      },
      {
          "name": "SEO_META_DESCRIPTION",
          "code": "SEO_META_DESCRIPTION",
          "value": "bongdalu"
      },
      {
          "name": "Livescore Header Table Color",
          "code": "livescoreHeaderTableColor",
          "value": "#43951e"
      },
      {
          "name": "Top Tools Color",
          "code": "toptoolsColor",
          "value": "#212121"
      },
      {
          "name": "tabsactiveColor",
          "code": "tabsactiveColor",
          "value": "#f86826"
      },
      {
          "name": "Background Footer Color",
          "code": "backgroundfooterColor",
          "value": "#555"
      },
      {
          "name": "backgroundColor",
          "code": "backgroundColor",
          "value": "#e5e5e5"
      },
      {
          "name": "hoverColor",
          "code": "hoverColor",
          "value": "#285912"
      },
      {
          "name": "textColor",
          "code": "textColor",
          "value": "#fff"
      },
      {
          "name": "Secondary Color",
          "code": "secondaryColor",
          "value": "#43951e"
      },
      {
          "name": "Primary Color",
          "code": "primaryColor",
          "value": "#397f19"
      },
      {
          "name": "Code footer",
          "code": "code_footer",
          "value": "<div class=\"webid\" style=\"max-width: 550px; margin: 0 auto\">\n  <p>\n    Thương hiệu: Bongdalu\n    <br />\n    Website: https://bongdalu60.com/\n    <br />\n    Địa chỉ: 51 Ng. 353 Đ. Bát Khối, Long Biên, Hà Nội, Việt Nam\n    <br />\n    Email: bongdalupc@gmail.com\n    <br />\n    SĐT: 0988229111\n    <br />\n    Hastag: #bongdalu #xemtysobongdalu #tructiepbongda #bongdalupc\n  </p>\n  <div class=\"network\">\n    <a href=\"https://www.facebook.com/profile.php?id=61558391500383\" target=\"_blank\" rel=\"nofollow\">Facebook</a>\n    <a href=\"https://twitter.com/bongdalupc\" target=\"_blank\" rel=\"nofollow\">Twitter</a>\n    <a href=\"https://vimeo.com/bongdalupc\" target=\"_blank\" rel=\"nofollow\">Vimeo</a>\n    <a href=\"https://www.pinterest.com/bongdalupc/\" target=\"_blank\" rel=\"nofollow\">Pinterest</a>\n    <a href=\"https://www.linkedin.com/in/bongdalupc/\" target=\"_blank\" rel=\"nofollow\">Linkedin</a>\n  </div>\n  <p>\n    Bongdalu là chuyên trang thông tin bóng đá, livescore và tỷ lệ kèo chính xác nhất Việt Nam hiện\n    nay. Bongdalu cập nhật thông tin liên tục, nhanh chóng 24/7, đầy đủ các thông tin từ các giải\n    đấu lớn nhỏ trong và ngoài nước, đi kèm là các nhận định, soi kèo, dự đoán tỷ số chuyên sâu và\n    chính xác nhất.\n  </p>\n</div>\n\n<ul class=\"f_menu container\">\n  <li>\n    <a href=\"/giay-phep\" rel=\"nofollow\">Giấy phép</a>\n  </li>\n  <li>\n    <a href=\"/bao-mat\" rel=\"nofollow\">Bảo mật</a>\n  </li>\n  <li>\n    <a href=\"/lien-he\" rel=\"nofollow\">Liên hệ</a>\n  </li>\n  <li>\n    <a href=\"/chinh-sach-nguoi-dung\" rel=\"nofollow\">Chính sách người dùng</a>\n  </li>\n  <li>\n    <a href=\"/tuyen-dung\" rel=\"nofollow\">Tuyển dụng</a>\n  </li>\n  <li>\n    <a href=\"/sitemap/sitemap_index.xml\" rel=\"nofollow\">Sitemap</a>\n  </li>\n</ul>\n<div class=\"copyright\">\n  Copyright © 2024 Powered By\n  <a href=\"/\" title=\"Bongdalu\">Bongdalu</a>\n  All Rights Reserved.\n</div>\n"
      },
      {
          "name": "Available stream url",
          "code": "available_stream_url",
          "value": ""
      },
      {
          "name": "Logo",
          "code": "logo",
          "value": "https://cdn.moonknight-sport.live/mk/bongdalu/2024/07/logo.webp"
      },
      {
          "name": "SEO_META_TITLE",
          "code": "SEO_META_TITLE",
          "value": ""
      },
      {
          "name": "Image Upload Size",
          "code": "image_size",
          "value": "150x150,300x300,1024x1024,1920x1920"
      }
  ]

   });
});

// Khởi động server trên cổng 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
