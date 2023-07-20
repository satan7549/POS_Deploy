const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = '983972594472-cgl7t5ag7lnbp96eb7pffhevhs1jgu35.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04cgiBwYTO7F7CgYIARAAGAQSNwF-L9IrgVu67HfoHrSUP3wu_gim4m6gCOWYnrmWOHTDpYyEy_8fKpBTqsX1WLWt498HXxI1zVk';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLEINT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

exports.sendMail = async (options) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'survesh.pandit@furation.tech',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: 'Suru <survesh.pandit@furation.tech>',
      to: options.email_address,
      subject: options.subject,
      text: options.message,
    };
    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};
