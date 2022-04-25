const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

class Mail {
  send = async (req, res) => {
    try {
      this.html = this.createMailBody(req.body);
      await this.createMailOptions(this.html);
      res.status(200).json({ message: "ok" });
    } catch (err) {
      res.status(400);
      throw err;
    }
  };
  createMailOptions = async (data) => {
    const transporter = nodemailer.createTransport(
      smtpTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth: {
          user: "regionsnab.gang@yandex.ru",
          pass: "sopwfkjwwfmlzfjg",
        },
        tls: {
          rejectUnauthorized: false,
        },
      })
    );

    let mailOption = {
      from: `<regionsnab.gang@yandex.ru>`,
      to: "info@regionsnab24.ru",
      subject: "ООО РегионСнаб",
      html: data,
    };

    let info = await transporter.sendMail(mailOption, (err, infooo) => {
      if (err) return console.log(err);
      console.log("email sent", infooo);
    });
    // console.log("Message sent: %s", info.messageId);
    return true;
  };
  createMailBody = ({ name, email, phone, text }) => {
    return `
<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="preconnect" href="https://fonts.gstatic.com" />
		<style>
					.test::-webkit-scrollbar {
			width: 3px;
		}

			.test::-webkit-scrollbar-track {
				box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
			}

			.test::-webkit-scrollbar-thumb {
				background-color: #B63A3A;
			}
		</style>
	</head>
	<body
		style="
			-webkit-text-size-adjust: 100%;
			-ms-text-size-adjust: 100%;
			margin: 0;
			padding: 0;
			line-height: 100%;
			color: #ffffff;
			width: 100% !important;
			font-family: 'Noto Sans', arial, sans-serif !important;
		"
	>
		<div
			class="mail"
			style="
				width: 100%;
				margin: 0 auto;
				background-color: #fff;
				background-image: url(https://psv4.userapi.com/c536236/u282370244/docs/d33/805601efac0c/patttern.png?extra=MmXwlRi6EKX7_L8wn8MB3R1SHOM08DFRx6VgnpM0VwNCwUl3RbG_ohiObLtR1fch7TpWIoT2dfEzkdFnQVO3gHRQ1M2G7sVEKX93rH758gEWpx2pb3B3mZFeSh1gBEtIS1WZSqst-Go1wbfbTgYzKZM);
				background-position: top;
				background-size: cover;
				background-repeat: no-repeat;
	
				box-sizing: border-box;
			"
		>
			<div class="wrapper" style="margin: 0 auto;  max-width: 800px; height: 500px;">
				<div style='
					width: 70%;
					margin: 0 auto;
					background-color: #fff;
					background-image: url(https://psv4.userapi.com/c235031/u282370244/docs/d37/e1cf06813a27/Group_278.png?extra=yO-NZbz4Y8jQ9BZrg2z4-tsBTeL3QLQiBJwhDHAtopp7-hrOQ9j7tUzM6yt3ebrQRPXIGqPTUHix7yZL21Ieg4W4Pwoy11uGSKhMkKBLb4_YMc-xhhAXM_-d2j7-saizO7RouF7H7RqgV_9jRNLb1D0);
					background-position: top;
					background-size: cover;
					background-repeat: no-repeat;'>
					<div style='padding: 20px 50px; box-sizing: border-box; width: 100%; height: 100%;'>
						<div style='margin-top: 20px'>
						<div style='margin-top: 20px;'>
								<img style='width: 236.88px; height: 60px;' src="https://psv4.userapi.com/c236331/u282370244/docs/d17/7d668f89f7f4/logo.png?extra=moDJeR6KNCjXsoZrvfVKN1sPRSzPV1m2kwh8ir7UJbQ2WxHQDDK352Os51j-WzPlarpwXs1bdgmNLNgTtPrsc-NnSckInopqej1LPv8oyMCynIpwL2UTnY-LCM-EOVrHmK6mIWcD3ujkiUUCw6qnmvQ" alt="регионснаб">
						</div>
						<br />
						<div>
							Новая заявка с сайта:
							<br />
							
							<a style='text-decoration: none; color: #B63A3A;' href="http://regionsnab24.ru/">regionsnab24.ru</a>
						</div>
						</div>
					</div>
				</div>
				<div style='
					position: relative;
					width: 70%;
					margin: 0 auto;
					background-color: #1D232E;'>
					<div class='test' style='height: 90%; width: 100%; background: #f8f8f8; color:#1D232E; padding: 40px 50px; box-sizing: border-box; overflow-y: scroll;
					'>
							<div style='margin-bottom: 40px;'>
								Имя: ${name}
							</div>
							<div style='margin-bottom: 40px;'>
								Почта: ${email}
							</div>
							<div style='margin-bottom: 40px;'>
								Телефон: ${phone}
							</div>
							<div style='margin-bottom: 40px;'>
						  <div style='margin-bottom: 10px;'>
									Сообщение:
							</div>
								<div style='font-size: 14px;'>
								 	${text}
								</div>
							</div>
					</div>
				</div>
		</div>
	</body>
</html>

`;
  };
}

module.exports = new Mail();
